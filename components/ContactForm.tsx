"use client";
import { useState, useEffect } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { trackFormView, trackFormSubmit } from '@/lib/analytics';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    trackFormView(); // Track when form is viewed
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const result = await sendContactEmail(data);

    if (result.success) {
      setStatus("success");
      trackFormSubmit(true); // Track successful submission
    } else {
      setStatus("error");
      trackFormSubmit(false); // Track failed submission
    }
  }

  // Common styles for all inputs to keep code clean
  const inputStyles = "w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition text-slate-900 bg-white";

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
        <p className="text-slate-600">Thank you! We will get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-blue-600 font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Parent Name</label>
          <input name="parentName" type="text" required className={inputStyles} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
          <input name="email" type="email" required className={inputStyles} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
          <input name="phone" type="tel" required className={inputStyles} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Child's Age</label>
          <input name="childAge" type="text" placeholder="e.g. 2 years old" required className={inputStyles} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Desired Start Date (Optional)</label>
        <input name="startDate" type="date" className={inputStyles} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
        <textarea 
          name="message" 
          required 
          rows={4}
          placeholder="Tell us a little bit about your needs..." 
          className={inputStyles}
        ></textarea>
      </div>

      {/* --- HONEYPOT FIELD (Hidden from humans) --- */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="fax_number">Do not fill this field</label>
        <input 
            type="text" 
            name="fax_number" 
            tabIndex={-1} 
            autoComplete="off" 
        />
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 disabled:bg-slate-400 transition transform hover:-translate-y-1"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please check your info or try again.</p>
      )}
    </form>
  );
}
