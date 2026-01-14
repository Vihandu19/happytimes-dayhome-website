import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function PrivacyPage() {
  const lastUpdated = "January 13, 2026";

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
            <p>
              At {SITE_CONFIG.name}, we respect your privacy and are committed to protecting 
              the personal information you share with us. This policy outlines how we collect, 
              use, and safeguard your data when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
            <p>We collect information in two ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Voluntary Information:</strong> When you fill out our contact form, 
                we collect your name, email address, phone number, and details about your 
                child (such as age) to better serve your childcare needs.
              </li>
              <li>
                <strong>Automated Information:</strong> We use Google Analytics to collect 
                standard internet log information and details of visitor behavior patterns. 
                This helps us improve our website performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected data exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries about childcare openings.</li>
              <li>Schedule tours and meetings.</li>
              <li>Analyze website traffic to improve user experience.</li>
            </ul>
            <p className="mt-4">We <strong>never</strong> sell or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Third-Party Services</h2>
            <p>We use trusted third-party providers to help operate our website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vercel:</strong> For website hosting.</li>
              <li><strong>Resend:</strong> To securely route your contact form messages to our email.</li>
              <li><strong>Google Analytics:</strong> To understand how visitors interact with the site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Retention</h2>
            <p>
              We keep your contact information only as long as necessary to fulfill the 
              purposes for which it was collected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, you can contact us at:
            </p>
            <p className="mt-2 font-medium text-slate-900">
              Email: {SITE_CONFIG.email}<br />
              Phone: {SITE_CONFIG.phone}
            </p>
          </section>
        </div>

        <div className="mt-16 p-6 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-500">
          <strong>Disclaimer:</strong> This privacy policy is for informational purposes 
          and intended for a small business. It does not constitute legal advice.
        </div>
      </div>
    </main>
  );
}