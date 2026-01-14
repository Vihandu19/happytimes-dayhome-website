"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage to see if they already accepted
    const consent = localStorage.getItem("cookie-consent");
    
    // If no consent found, show the banner after a small delay
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Save their preference so they don't see it again
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  // Don't render anything if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-50 flex justify-center pointer-events-none">
      {/* The Banner Box */}
      <div className="bg-slate-900 text-slate-50 p-5 rounded-2xl shadow-2xl max-w-lg w-full border border-slate-700 pointer-events-auto animate-in slide-in-from-bottom-5 duration-500">
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* Text Content */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white mb-1 flex items-center justify-center sm:justify-start gap-2">
              <span>🍪</span> We use cookies
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We use tracking cookies to understand how you use our website and help us improve. 
              Read our <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          {/* Button */}
          <button 
            onClick={acceptCookies}
            className="whitespace-nowrap px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition shadow-lg hover:shadow-blue-500/25"
          >
            Got it!
          </button>
        </div>

      </div>
    </div>
  );
}