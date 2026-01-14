import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* --- SECTION 1: HERO & BIO --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-200">
             {/* --- RU'S HEADSHOT ADDED HERE --- */}
             <Image 
                src="/images/headshot2.jpeg" 
                alt="Ru - Owner of Happy Times Dayhome" 
                fill 
                className="object-cover" 
                priority 
             />
          </div>

          {/* Text Column */}
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
              Level 3 ECE Certified
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Hi, I'm Ru.
            </h1>
            
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Welcome to <strong>Happy Times Licenced Dayhome</strong>, located in the beautiful community of 
                <strong> Riverstone Cranston</strong>.
              </p>
              <p>
                The best part of being an early childhood educator is knowing that you have helped to 
                brighten a child's day. I love seeing their expressions light up while they experience 
                and learn new things. The past 14 years working with children have been amazing, and 
                I look forward to many more.
              </p>
              <p>
                I am a passionate <strong>Early Childhood Educator</strong> dedicated to expanding my knowledge. 
                Over the past decade, I have attended countless workshops and training courses to ensure 
                I provide the best care possible.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg inline-block">
              <p className="text-blue-800 font-medium text-sm">
                <strong>Current Availability:</strong> <br/>
                Openings vary throughout the year. Reach out to discuss current and upcoming availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PHILOSOPHY (The "Sell") --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">My Care Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1: Reggio Emilia */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Reggio Emilia Inspired</h3>
              <p className="text-slate-600 text-sm">
                I follow a curriculum that embraces children's natural interests, needs, and abilities. 
                We focus on exploration and self-expression.
              </p>
            </div>

            {/* Card 2: Environment */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Inclusive & Stimulating</h3>
              <p className="text-slate-600 text-sm">
                A safe, developmentally inclusive environment with a mix of structured learning 
                and unstructured creative play.
              </p>
            </div>

            {/* Card 3: Outdoors */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="text-3xl mb-3">☀️</div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Active Living</h3>
              <p className="text-slate-600 text-sm">
                We prioritize daily outside time and physical activity to keep growing bodies healthy and happy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: PERSONAL SIDE (Trust Building) --- */}
      <section className="py-20 px-6 bg-white border-t border-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">When I&apos;m Not Teaching...</h2>
          <p className="text-lg text-slate-600 leading-relaxed italic">
            &quot;I enjoy exploring the outdoors, working out, and doing Zumba! Family is everything to me, 
            and I love spending quality time with my friends and loved ones. I believe that a happy, 
            active caregiver leads to happy, active children.&quot;
          </p>
        </div>
      </section>

      {/* --- SECTION 4: KEY DETAILS & CTA --- */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Quick Facts</h2>
            <ul className="space-y-3 font-medium text-blue-100">
              <li className="flex items-center gap-2">✓ Located in Riverstone Cranston Calgary, AB</li>
              <li className="flex items-center gap-2">✓ Licensed Dayhome</li>
              <li className="flex items-center gap-2">✓ Ages 18 Months+</li>
              <li className="flex items-center gap-2">✓ Level 3 ECE Certified</li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <p className="text-lg mb-6 text-blue-100">
              Interested in current or upcoming openings?
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me Today
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}