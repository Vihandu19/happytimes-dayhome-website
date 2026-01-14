import { z } from "zod";

export const ContactFormSchema = z.object({
  parentName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  childAge: z.string().min(1, "Child's age is required"),
  startDate: z.string().optional(),
  message: z.string().min(10, "Please provide a bit more detail (min 10 chars)"),
});