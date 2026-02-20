"use server";

import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/validation";
import { logSecurityEvent } from "@/lib/bigquery";
import { contactFormLimiter } from "@/lib/ratelimit";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  // Get request metadata - AWAIT the headers() call
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || 'unknown';
  const userAgent = headersList.get('user-agent') || 'unknown';

  // 0. CHECK RATE LIMIT FIRST
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
      error: `Too many requests. Please try again at ${new Date(reset).toLocaleTimeString()}` 
    };
  }

  // 1. HONEYPOT CHECK
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
      
      return { success: true };
    }
  }

  // 2. Validate data
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
  
  return { error: "Invalid form data. Please check the fields." };
}

  const { parentName, email, phone, childAge, startDate, message } = result.data;

  try {
    // 3. Send the email
    await resend.emails.send({
      from: "HappyTimes Website <onboarding@resend.dev>",
      to: "ruwanthifernando@yahoo.ca",
      replyTo: email,
      subject: `New Lead: ${parentName}`,
      text: `You have a new inquiry from the HappyTimes Dayhome website:

Parent Name: ${parentName}
Email: ${email}
Phone: ${phone}
Child's Age: ${childAge}
Desired Start Date: ${startDate || 'Not specified'}

Message:
${message}

---
Note: You can reply directly to this email to contact the parent.
      `,
    });

    // Log successful submission
    await logSecurityEvent({
      event_type: 'form_submit_success',
      ip_address: ip,
      user_agent: userAgent,
      severity: 'low',
      metadata: {
        parent_name: parentName,
        child_age: childAge,
        has_start_date: !!startDate,
      },
    });

    return { success: true };
    
  } catch (error) {
    console.error("Resend Error:", error);
    
    await logSecurityEvent({
      event_type: 'email_send_failed',
      ip_address: ip,
      user_agent: userAgent,
      severity: 'high',
      payload: error instanceof Error ? error.message : 'Unknown error',
      metadata: {
        parent_name: parentName,
      },
    });
    
    return { error: "Something went wrong. Please try again later." };
  }
}