import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-4 md:p-6 border-b bg-white sticky top-0 z-50">
      {/* Logo: Added whitespace-nowrap and flex-shrink-0 so it never squishes */}
      <Link href="/" className="text-lg md:text-xl font-bold text-blue-600 whitespace-nowrap flex-shrink-0">
        HappyTimes
      </Link>

      {/* Navigation Links: Using smaller spacing and text on mobile */}
      <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-8">
        <Link href="/" className="text-sm md:text-base font-medium text-slate-600 hover:text-blue-500 transition">
          Home
        </Link>
        <Link href="/about" className="text-sm md:text-base font-medium text-slate-600 hover:text-blue-500 transition">
          About
        </Link>
        <Link href="/gallery" className="text-sm md:text-base font-medium text-slate-600 hover:text-blue-500 transition">
          Gallery
        </Link>
        <Link href="/contact" className="text-sm md:text-base font-bold text-blue-600 hover:text-blue-700 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}