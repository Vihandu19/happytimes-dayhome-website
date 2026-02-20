"use server";

import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/validation";
import { logSecurityEvent } from "@/lib/bigquery";
import { contactFormLimiter } from "@/lib/ratelimit";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  // 1. WRAP THE ENTIRE LOGIC IN A TRY/CATCH
  try {
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';
    const userAgent = headersList.get('user-agent') || 'unknown';

    console.log("--- SUBMITTING FORM ---");

    // 2. CHECK RATE LIMIT
    const { success: rateLimitSuccess, reset } = await contactFormLimiter.limit(ip);
    
    if (!rateLimitSuccess) {
      await logSecurityEvent({
        event_type: 'rate_limit_exceeded',
        ip_address: ip,
        user_agent: userAgent,
        severity: 'medium',
        metadata: {
          reset_time: new Date(reset).toISOString(),
        },
      });
      
      return { 
        success: false, // Ensure you return success: false for the UI to show error
        error: `Too many requests. Please try again at ${new Date(reset).toLocaleTimeString()}` 
      };
    }

    // 3. HONEYPOT CHECK
    if (formData && typeof formData === 'object') {
      const rawData = formData as Record<string, any>;
      if (rawData.fax_number) {
        console.log("Bot detected via Honeypot.");
        await logSecurityEvent({
          event_type: 'honeypot_triggered',
          ip_address: ip,
          user_agent: userAgent,
          severity: 'medium',
          metadata: { 
            honeypot_field: 'fax_number',
            honeypot_value: rawData.fax_number 
          },
        });
        return { success: true }; // Silent pass for bots
      }
    }

    // 4. Validate data
    const result = ContactFormSchema.safeParse(formData);

    if (!result.success) {
      await logSecurityEvent({
        event_type: 'validation_failed',
        ip_address: ip,
        user_agent: userAgent,
        severity: 'low',
        metadata: { 
          errors: result.error.issues.map(e => ({  
            field: e.path.join('.'),
            message: e.message
          }))
        },
      });
      return { success: false, error: "Invalid form data." };
    }

    const { parentName, email, phone, childAge, startDate, message } = result.data;

    // 5. Send the email
    await resend.emails.send({
      from: "HappyTimes Website <onboarding@resend.dev>",
      to: "ruwanthifernando@yahoo.ca",
      replyTo: email,
      subject: `New Lead: ${parentName}`,
      text: `Parent Name: ${parentName}\nEmail: ${email}\nPhone: ${phone}\nChild's Age: ${childAge}\nMessage: ${message}`,
    });

    // 6. Log success
    await logSecurityEvent({
      event_type: 'form_submit_success',
      ip_address: ip,
      user_agent: userAgent,
      severity: 'low',
      metadata: { parent_name: parentName },
    });

    return { success: true };

  } catch (criticalError: any) {
    // THIS IS THE NET THAT CATCHES BIGQUERY TIMEOUTS OR AUTH ERRORS
    console.error("CRITICAL SERVER ACTION ERROR:", criticalError);
    
    // We return success: false so the frontend knows to stop the loading spinner
    return { 
      success: false, 
      error: criticalError?.message || "Internal Server Error" 
    };
  }
}