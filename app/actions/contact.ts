"use server";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  // 1. HONEYPOT CHECK
  // We check the raw data before validation
  if (formData && typeof formData === 'object') {
    const rawData = formData as Record<string, any>;
    
    if (rawData.fax_number) {
      console.log("Bot detected via Honeypot.");
      return { success: true };
    }
  }

  // 2. Validate data
  const result = ContactFormSchema.safeParse(formData);
  
  if (!result.success) {
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
      text: `
        You have a new inquiry from the HappyTimes Dayhome website:

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

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}