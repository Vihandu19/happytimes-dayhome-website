import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-6 border-b">
      <div className="text-xl font-bold text-blue-600">HappyTimes</div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/services" className="hover:text-blue-500">Services</Link>
        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}