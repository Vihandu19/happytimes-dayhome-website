import Link from 'next/link';
import Image from 'next/image'; // Added this
import { SITE_CONFIG } from '@/lib/constants';

// Your photo data
export const GALLERY_IMAGES = [
  { src: "/images/gallery/crafts1.jpg", alt: "crafts and art supplies on a table" },
  { src: "/images/gallery/outdoor1.jpg", alt: "outdoors activity with children playing" },
  { src: "/images/gallery/outdoor2.jpg", alt: "outdoors activity with children playing" },
  { src: "/images/gallery/outdoor3.jpg", alt: "outdoors activity with children playing" },
  { src: "/images/gallery/outdoor4.jpg", alt: "outdoors activity with children playing" },
  { src: "/images/gallery/play1.jpg", alt: "children playing with toys indoors" },
  { src: "/images/gallery/play2.jpg", alt: "children playing with toys indoors" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* --- HEADER --- */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Big Moments
        </h1>
        <p className="text-xl text-slate-600">
          A peek into our daily adventures. From messy art projects to quiet reading corners, 
          see the joy we create every day.
        </p>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="px-4 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 grid-flow-dense">
          
          {/* 1. HERO IMAGE (Large Square: 2x2) - Using outdoor1 */}
          <div className="col-span-1 sm:col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden group shadow-sm bg-slate-200">
             <Image 
                src={GALLERY_IMAGES[1].src} 
                alt={GALLERY_IMAGES[1].alt} 
                fill 
                className="object-cover transition duration-500 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold text-2xl">Making memories every day</p>
             </div>
          </div>

          {/* 2. PHILOSOPHY CARD (Yellow) */}
          <div className="bg-amber-400 p-8 rounded-[2rem] flex flex-col justify-between shadow-sm hover:-translate-y-1 transition duration-300">
            <span className="text-4xl">☀️</span>
            <div>
              <h3 className="font-bold text-slate-900 text-xl mb-1">Outdoor Play</h3>
              <p className="text-amber-900 text-sm font-medium leading-snug">
                Fresh air is part of our daily routine, rain or shine.
              </p>
            </div>
          </div>

          {/* 3. TALL IMAGE (Portrait: 1x2) - Using outdoor2 */}
          <div className="row-span-2 relative rounded-[2rem] overflow-hidden bg-slate-300 shadow-sm group">
            <Image 
                src={GALLERY_IMAGES[2].src} 
                alt={GALLERY_IMAGES[2].alt} 
                fill 
                className="object-cover transition duration-500 group-hover:scale-110" 
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700">
              Backyard Fun
            </div>
          </div>

          {/* 4. STANDARD IMAGE - Using crafts1 */}
          <div className="relative rounded-[2rem] overflow-hidden bg-slate-200 shadow-sm min-h-[200px] group">
             <Image src={GALLERY_IMAGES[0].src} alt={GALLERY_IMAGES[0].alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Art Time</div>
          </div>

          {/* 5. QUOTE CARD (Dark Blue: 2x1) */}
          <div className="col-span-1 sm:col-span-2 bg-blue-600 p-10 rounded-[2rem] flex items-center justify-center text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <p className="text-blue-100 text-lg md:text-2xl font-serif italic mb-4">
                "Play is the highest form of research."
              </p>
              <p className="text-blue-300 font-bold text-sm tracking-widest uppercase">— Albert Einstein</p>
            </div>
          </div>

          {/* 6. STANDARD IMAGE - Using play1 */}
          <div className="relative rounded-[2rem] overflow-hidden bg-slate-200 shadow-sm min-h-[200px] group">
             <Image src={GALLERY_IMAGES[5].src} alt={GALLERY_IMAGES[5].alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Inside Fun</div>
          </div>

           {/* 7. WIDE IMAGE (2x1) - Using outdoor3 */}
           <div className="col-span-1 sm:col-span-2 relative rounded-[2rem] overflow-hidden bg-slate-300 shadow-sm group">
             <Image src={GALLERY_IMAGES[3].src} alt={GALLERY_IMAGES[3].alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
             <div className="absolute bottom-6 left-6 text-white font-bold text-xl drop-shadow-lg">
                Active Learning
             </div>
          </div>

          {/* 8. INFO CARD (Green) */}
          <div className="bg-emerald-100 p-8 rounded-[2rem] flex flex-col justify-center items-start shadow-sm hover:bg-emerald-200 transition">
            <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 text-lg">🌱</div>
            <h3 className="font-bold text-emerald-900 text-lg mb-2">Reggio Inspired</h3>
            <p className="text-emerald-700 text-sm">
              We believe the environment is the "third teacher," sparking natural curiosity.
            </p>
          </div>

          {/* 9. STANDARD IMAGE - Using play2 */}
          <div className="relative rounded-[2rem] overflow-hidden bg-slate-200 shadow-sm min-h-[200px] group">
             <Image src={GALLERY_IMAGES[6].src} alt={GALLERY_IMAGES[6].alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Crafts</div>
          </div>

          {/* 10. NEW IMAGE - Using outdoor4 */}
          <div className="relative rounded-[2rem] overflow-hidden bg-slate-200 shadow-sm min-h-[200px] group">
             <Image src={GALLERY_IMAGES[4].src} alt={GALLERY_IMAGES[4].alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Exploring</div>
          </div>

        </div>
      </section>

      {/* --- INSTAGRAM CTA --- */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block p-3 rounded-2xl bg-pink-100 text-pink-600 text-4xl mb-6">📸</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            See What We&apos;re Up To Today!
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            We post daily updates, activity ideas, and lunch menus on our Instagram. 
            Follow us to see the fun in real-time.
          </p>
          
          <Link 
            href={SITE_CONFIG.instagram || "#"} 
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>Follow @Happytimes_Dayhome</span>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-slate-50 text-center">
        <Link 
          href="/contact" 
          className="text-sm font-bold text-slate-400 hover:text-blue-600 transition uppercase tracking-widest"
        >
          Ready to visit? Book a Tour →
        </Link>
      </section>

    </main>
  );
}