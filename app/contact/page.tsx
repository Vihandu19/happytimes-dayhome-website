import { SITE_CONFIG } from "@/lib/constants";
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info & Trust */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-lg text-slate-600 mb-8">
            Choosing the right childcare is a big decision. I'd love to invite you for a tour 
            to see our space and answer any questions you have.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">📍</div>
              <div>
                <h3 className="font-bold text-slate-900">Location</h3>
                <p className="text-slate-600">{SITE_CONFIG.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">🕒</div>
              <div>
                <h3 className="font-bold text-slate-900">Hours</h3>
                <p className="text-slate-600">{SITE_CONFIG.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">What happens next?</h3>
              <ol className="text-slate-600 space-y-3 list-decimal list-inside text-sm mb-4">
                <li>I'll review your inquiry</li>
                <li>We'll schedule a quick phone call to discuss your needs.</li>
                <li>You'll be invited for an in-person tour of the dayhome.</li>
              </ol>
              <div className="flex items-start gap-2 text-slate-500 text-xs mt-4">
                <span 
                  className="flex-shrink-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold border border-slate-400 rounded-full text-slate-400 cursor-help mt-0.5" 
                  title="Based on current enrollment"
                >
                  i
                </span>
                <p>
                  Please note that scheduling and enrollment are subject to availability and compatibility.
                </p>
              </div>
            </div>
        </div>

        {/* Right Side: The Actual Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          <ContactForm />
        </div>

      </div>
    </main>
  );
}