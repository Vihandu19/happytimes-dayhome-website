import Link from 'next/link';
import Image from 'next/image'; 
import { SITE_CONFIG, BENEFITS } from '@/lib/constants';

export default function Home() {
  const telLink = `tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, '')}`;

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* --- SECTION 1: Hook --- */}
      <section className="relative bg-blue-50 pt-24 pb-32 px-6 text-center lg:text-left lg:pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Now Enrolling
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Safe, Loving Place for Your Child to <span className="text-blue-600">Thrive.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl">
              {SITE_CONFIG.description} We provide high-quality care in a warm, home-based setting where every child feels like family.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Book a Tour
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 bg-white text-blue-600 font-bold border-2 border-blue-100 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition"
              >
                Our Philosophy
              </Link>
            </div>

            <div className="mt-8 lg:hidden text-sm text-slate-500 font-medium flex flex-col gap-2">
                <p>📍 {SITE_CONFIG.address}</p>
                <p>
                  📞 <a href={telLink} className="hover:text-blue-600 transition underline underline-offset-4">{SITE_CONFIG.phone}</a>
                </p>
            </div>
          </div>
          
          {/* Top Hero Image - Using one of your outdoor photos for now */}
          <div className="hidden lg:block relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-blue-200">
             <Image 
                src="/images/gallery/outdoor1.jpg" 
                alt="Children playing outdoors" 
                fill 
                className="object-cover"
                priority // This makes the top image load faster
             />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TRUST BANNER --- */}
      <div className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-center font-medium text-lg">
            <span>✓ Licensed & Approved</span>
            <span>✓ First Aid & CPR Certified</span>
            <span>✓ Clean Police Check</span>
        </div>
      </div>

      {/* --- SECTION 3: BENEFITS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Parents Choose Us</h2>
                <p className="text-lg text-slate-600 mt-4">We offer the professional standards of a center with the warmth of a home.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {BENEFITS.map((benefit, index) => (
                    <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-md transition">
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-slate-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- SECTION 4: INTRO (RU'S PHOTO ADDED HERE) --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                {/* --- RU'S HEADSHOT --- */}
                <Image 
                  src="/images/headshot.jpg" 
                  alt="Ru - HappyTimes Dayhome Owner" 
                  fill 
                  className="object-cover" 
                />
            </div>
            <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hi, I'm Ru</h2>
                <blockquote className="text-xl text-slate-700 italic border-l-4 border-blue-500 pl-4 mb-6">
                    "My goal is to provide a space where children feel secure enough to explore."
                </blockquote>
                <p className="text-slate-600 mb-8">
                    With over <strong>14 years of experience</strong>, I strive to provide a structured yet nurturing environment where every child's unique needs are met.
                </p>
                <Link href="/about" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                    Read More About Me <span>→</span>
                </Link>
            </div>
        </div>
      </section>

      {/* --- SECTION 5: CALL TO ACTION --- */}
      <section className="py-24 px-6 bg-blue-600 text-center text-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Spaces Are Limited for the Upcoming Season</h2>
            <p className="text-xl text-blue-100 mb-10">
                Schedule a visit today to see if HappyTimes is the right fit for your family.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <Link 
                  href="/contact" 
                  className="px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                  Contact Us to Book a Visit
              </Link>
              
              <p className="text-blue-100 text-lg">
                or call <a href={telLink} className="text-white font-bold hover:underline">{SITE_CONFIG.phone}</a> between 7:00 AM and 5:00 PM on weekdays.
              </p>
            </div>
        </div>
      </section>

    </main>
  );
}