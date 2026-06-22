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
  const isProjects = pathname?.startsWith("/projects");
  const isExperience = pathname?.startsWith("/experience");
  const isTools = pathname?.startsWith("/tools");
  const isContact = pathname?.startsWith("/contact");
  const isAbout = pathname?.startsWith("/about");
  const isDarkPage = isHome || isProjects || isExperience || isTools || isContact || isAbout;
  
  return (
    <footer className={`relative z-10 w-full mt-auto pt-10 pb-0 px-4 md:pt-16 md:pb-0 md:px-6 ${isDarkPage ? '' : 'bg-zinc-950'}`} style={isDarkPage ? { backgroundColor: 'transparent' } : {}}>
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {isHome && (
          <>
            {/* Top Section */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8 mt-2">
              <div className="h-12 md:h-14 flex items-center justify-center w-12 md:w-14">
                <div className="scale-[0.4] md:scale-[0.45] origin-center flex items-center justify-center">
                  <div className="preloader-monogram-wrapper" style={{ marginBottom: 0 }}>
                    <div className="preloader-ring-glow" />
                    <span className="preloader-monogram relative top-[3px] right-[2px]">W</span>
                  </div>
                </div>
              </div>
              <span className="text-zinc-100 font-cormorant text-base md:text-lg font-medium tracking-widest uppercase">WILSTUDIO</span>
            </div>

            {/* Links */}
            <div className="flex flex-row justify-center items-center flex-nowrap gap-x-2 md:gap-x-8 text-[9px] sm:text-xs md:text-sm text-zinc-300 mb-3 md:mb-4 w-full max-w-full">
              <Link href="/projects" className="hover:text-white transition-colors whitespace-nowrap">Products</Link>
              <Link href="/blog" className="hover:text-white transition-colors whitespace-nowrap">Blog</Link>
              <Link href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">Terms</Link>
            </div>
          </>
        )}

        {/* Dashed Separator */}
        <div
          className="w-full border-t border-dashed border-zinc-700 mb-6 md:mb-8"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        />

        {/* Bottom Section */}
        <div className="relative w-full flex flex-col-reverse md:flex-row justify-center items-center text-zinc-400 gap-4 pb-6 md:pb-8">
          
          {/* Centered HoverBorderGradient */}
          <HoverBorderGradient
            containerClassName="rounded-full shrink-0"
            as="div"
            className="dark:bg-zinc-950 bg-white text-black dark:text-white flex items-center justify-center space-x-1 md:space-x-2 px-3 py-1.5 md:px-4 md:py-1.5"
          >
            <span className="text-xs sm:text-sm md:text-sm whitespace-nowrap">© {new Date().getFullYear()} Wilson Ramropui</span>
          </HoverBorderGradient>

          {/* Social Icons (Right aligned on PC, stacked on mobile) */}
          <div className="flex flex-row items-center justify-center gap-4 md:gap-5 shrink-0 md:absolute md:right-0">
            <Link href="#" className="hover:text-white transition-colors"><IconBrandTwitter className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><IconBrandLinkedin className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><IconBrandGithub className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><IconBrandFacebook className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><IconBrandInstagram className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
