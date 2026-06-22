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
    <header className="flex sticky top-0 z-50 w-full max-w-[100vw] overflow-hidden border-b border-white/10 bg-zinc-950/30 backdrop-blur-xl backdrop-saturate-150 py-2 md:py-3 px-2 sm:px-4 md:px-8 items-center justify-end shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Navigation - Right side */}
      <nav className="flex w-full justify-between sm:justify-center md:justify-end sm:gap-6 md:gap-8 items-center relative z-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={true}
            className={`text-[clamp(11px,3.1vw,14px)] sm:text-xs md:text-sm font-medium whitespace-nowrap transition-colors hover:text-white px-0.5 sm:px-0 ${
              pathname === item.href ? 'text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]' : 'text-zinc-400'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
