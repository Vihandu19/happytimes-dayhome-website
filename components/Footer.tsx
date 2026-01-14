import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Reduced top padding (pt-10) and bottom padding (pb-6)
    <footer className="bg-slate-900 text-slate-300 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto"> {/* Tightened max-width from 7xl to 6xl */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"> {/* Reduced gap and bottom margin */}
          
          {/* Column 1: Branding */}
          <div className="md:col-span-1">
            <Link href="/" className="text-white text-xl font-bold tracking-tight">
              Happy Times<span className="text-blue-400">.</span>
            </Link>
            <p className="mt-2 text-xs leading-relaxed opacity-80">
              A licensed, Reggio Emilia-inspired dayhome in Riverstone Cranston.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold text-xs">P:</span> 
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-blue-400 transition">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold text-xs">E:</span> 
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-blue-400 transition">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px]">Follow</h3>
            <Link 
              href={SITE_CONFIG.instagram || "#"} 
              target="_blank" 
              className="inline-flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-md hover:bg-slate-700 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="text-xs font-medium">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar - Slimmer version */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500">
            © {currentYear} {SITE_CONFIG.name}
          </p>
          <div className="flex gap-4 items-center">
            <Link href="/privacy" className="text-[10px] text-slate-500 hover:text-white transition underline underline-offset-2">
              Privacy
            </Link>
            <span className="text-slate-800 text-[10px]">|</span>
            <p className="text-[10px] text-slate-700">Calgary, AB</p>
          </div>
        </div>
      </div>
    </footer>
  );
}