import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center pt-10 md:pt-12 pb-20 px-6 md:px-12 relative z-10">
      {/* Close Button */}
      <Link 
        href="/" 
        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-zinc-500 hover:text-zinc-100 bg-zinc-900/50 hover:bg-zinc-800 rounded-full transition-all z-50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
      <div className="max-w-3xl w-full text-zinc-300 font-goudy text-lg sm:text-xl leading-relaxed">
        <h1 className="text-4xl md:text-6xl font-cormorant font-medium text-zinc-100 tracking-wide mb-2">Terms of Service</h1>
        <div className="space-y-6">
          <p className="font-sans text-sm text-zinc-500 uppercase tracking-widest mb-10">
            Last updated: June 23, 2026
          </p>
          <p>
            Welcome to WilStudio. By accessing this website, you agree to comply with and be bound by these terms.
          </p>
          <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-zinc-100 mt-12 mb-6 tracking-wide border-b border-zinc-800/50 pb-4">Usage Restrictions</h2>
          <p>
            The content, design, and code of this portfolio are the intellectual property of Wilson Ramropui. Please do not duplicate or steal the assets without permission.
          </p>
          <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-zinc-100 mt-12 mb-6 tracking-wide border-b border-zinc-800/50 pb-4">Disclaimer</h2>
          <p>
            The information provided on this website is for general informational purposes only. All information is provided in good faith.
          </p>
        </div>
      </div>
    </div>
  );
}
