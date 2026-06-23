'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationDock() {
  const pathname = usePathname();

  const items = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/tools', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="flex sticky top-0 z-50 w-full max-w-[100vw] overflow-hidden border-b border-white/10 bg-zinc-950/30 backdrop-blur-xl backdrop-saturate-150 py-1 md:py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Navigation Wrapper - Handles safe scrolling */}
      <div className="w-full h-full overflow-x-auto px-4 md:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Navigation - Centered on mobile, Right aligned on desktop */}
        <nav className="flex w-max min-w-full justify-center md:justify-end items-center gap-[clamp(16px,4vw,32px)] relative z-10 mx-auto">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={true}
            className={`text-[clamp(12px,3.5vw,14px)] md:text-[15px] font-medium tracking-wide whitespace-nowrap transition-all duration-300 py-2 ${
              pathname === item.href ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-zinc-400 hover:text-white hover:opacity-90'
            }`}
          >
            {item.label}
          </Link>
        ))}
        </nav>
      </div>
    </header>
  );
}
