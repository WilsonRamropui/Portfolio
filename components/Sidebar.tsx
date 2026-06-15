"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Home, Briefcase, Code, Hammer, User, Mail, Menu, X as CloseIcon } from "lucide-react";
import { sidebarStyles } from "@/styles/dummy-styles";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/experience", label: "Experience", Icon: Briefcase },
    { href: "/projects", label: "Projects", Icon: Code },
    { href: "/tools", label: "Tools", Icon: Hammer },
    { href: "/about", label: "About", Icon: User },
    { href: "/contact", label: "Contact", Icon: Mail },
  ];

  return (
    <>
      <div className={sidebarStyles.mobileTopNav}>
        <div className={sidebarStyles.mobileTopNavInner}>
          <div className={sidebarStyles.mobileAvatarContainer}>
            <div className={sidebarStyles.mobileAvatar}>
              <img src="/Hexagon.png" alt="Avatar" className={sidebarStyles.mobileAvatarImage} />
            </div>
            <div>
              <h2 className={sidebarStyles.mobileName}>Wilson Ramropui</h2>
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className={sidebarStyles.mobileCloseButton}>
            <Menu className={sidebarStyles.mobileCloseIcon} />
          </button>
        </div>
      </div>
      
      <div className={sidebarStyles.mobileSpacer} />

      <div className={sidebarStyles.desktopSidebar}>
        <div className={sidebarStyles.desktopAvatarContainer}>
          <div className={sidebarStyles.desktopAvatar}>
            <img src="/Hexagon.png" alt="Avatar" className={sidebarStyles.desktopAvatarImage} />
          </div>
          <div>
            <h2 className={sidebarStyles.desktopName}>Wilson Ramropui</h2>
            <p className={sidebarStyles.desktopTyping}>Developer</p>
          </div>
        </div>

        <nav className={`mt-8 ${sidebarStyles.navContainer}`}>
          <ul className={sidebarStyles.navList}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className={`${sidebarStyles.navItem} ${
                      isActive ? sidebarStyles.navItemActive : sidebarStyles.navItemInactive
                    }`}
                  >
                    <item.Icon className={sidebarStyles.navIcon} />
                    <span className={sidebarStyles.navLabel}>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      
      <div 
        className={`fixed inset-0 z-50 md:hidden bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-64 bg-zinc-950 p-6 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`} 
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors duration-200">
            <CloseIcon className="w-6 h-6" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    onClick={() => setIsOpen(false)} 
                    href={item.href} 
                    prefetch={true}
                    className="flex items-center gap-3 text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    <item.Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

    </>
  );
};
