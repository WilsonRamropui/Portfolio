"use client";

import React from "react";
import Link from "next/link";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandInstagram
} from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <footer className="relative z-10 w-full mt-auto pt-10 pb-0 px-4 md:pt-16 md:pb-0 md:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Logo and links removed as requested */}

        {/* Dashed Separator */}
        <div
          className="w-full border-t border-dashed border-zinc-700 mb-6 md:mb-8"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        />

        {/* Bottom Section */}
        <div className="relative w-full flex flex-col-reverse md:flex-row justify-center items-center text-zinc-500 dark:text-zinc-400 gap-4 pb-6 md:pb-8">
          
          {/* Centered HoverBorderGradient */}
          <HoverBorderGradient
            containerClassName="rounded-full shrink-0"
            as="div"
            className="dark:bg-zinc-950 bg-white text-black dark:text-white flex items-center justify-center space-x-1 md:space-x-2 px-3 py-1.5 md:px-4 md:py-1.5"
          >
            <span className="text-xs sm:text-sm md:text-sm whitespace-nowrap">© 2026 Wilson Ramropui</span>
          </HoverBorderGradient>

          {/* Social Icons (Right aligned on PC, stacked on mobile) */}
          <div className="flex flex-row items-center justify-center gap-4 md:gap-5 shrink-0 md:absolute md:right-0">
            <Link href="#" className="hover:text-foreground transition-colors"><IconBrandTwitter className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-foreground transition-colors"><IconBrandLinkedin className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-foreground transition-colors"><IconBrandGithub className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-foreground transition-colors"><IconBrandFacebook className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-foreground transition-colors"><IconBrandInstagram className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
