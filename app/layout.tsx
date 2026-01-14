import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from "@/components/CookieBanner";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. ADDED ICONS HERE
export const metadata: Metadata = {
  title: "Licensed Dayhome in Riverstone Cranston | HappyTimes Dayhome",
  description: "HappyTimes Dayhome offers high-quality, licensed childcare in Cranston, Calgary. Level 3 ECE certified with 14+ years of experience. Now enrolling!",
  keywords: ["Dayhome Cranston", "Calgary Childcare", "Licensed Dayhome Riverstone", "Cranston Daycare"],
  icons: {
    icon: "/icon.png", // This looks in your 'public' folder
    apple: "/icon.png", 
  },
  other: {
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Daycare",
    "name": SITE_CONFIG.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "telephone": "+14039185630", 
    "url": "https://happytimes-dayhome-website.vercel.app/", 
    "openingHours": "Mo-Fr 07:00-17:00",
    "description": SITE_CONFIG.description,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}