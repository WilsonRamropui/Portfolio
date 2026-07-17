"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Ruler, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const BLUEPRINT_DATA = {
  imageSrc: "/images/blueprint_4k.png",
  title: "MODERN RESIDENCE",
  subtitle: "Floor Plan / A101",
  drawnBy: "WILSON RAMROPUI",
  date: "2025",
  scale: "1/4\" = 1'-0\"",
  liveScale: "1:100",
  sheet: "A101",
};

export default function FloorPlan3D() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("hide-navbar");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("hide-navbar");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("hide-navbar");
    };
  }, [isExpanded]);

  return (
    <>
      <div className="w-full flex items-center justify-center lg:justify-end min-h-[500px]">
          <div 
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(true);
            }}
            className="flex flex-col w-[min(320px,90vw)] sm:w-[380px] lg:w-[460px] xl:w-[520px] h-[min(420px,118vw)] sm:h-[480px] lg:h-[560px] xl:h-[620px] overflow-hidden relative group cursor-pointer"
            style={{
              background: "rgba(25, 25, 25, 0.4)",
              backdropFilter: "blur(12px) saturate(1.5)",
              WebkitBackdropFilter: "blur(12px) saturate(1.5)",
              borderRadius: "32px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
              transform: "translateZ(0)",
            }}
          >
            {/* Minimalist Top Badge */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.05] flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-neutral-300 animate-pulse" />
                <span className="text-[10px] font-medium text-neutral-300 tracking-wide uppercase">{BLUEPRINT_DATA.subtitle}</span>
              </div>
            </div>

            <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                 <ArrowUpRight className="w-4 h-4" />
               </div>
            </div>

            {/* Blueprint Image */}
            <div className="relative flex-1 w-full bg-transparent overflow-hidden px-4 pt-16 pb-4 flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={BLUEPRINT_DATA.imageSrc}
                  alt="2D Floor Plan Blueprint" 
                  fill
                  unoptimized={true}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105 transform-gpu"
                />
              </div>
            </div>

            {/* Minimalist Typography Footer */}
            <div className="relative z-10 px-6 pb-6 pt-2 flex flex-col justify-end">
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight mb-1">{BLUEPRINT_DATA.title}</h3>
              <div className="flex justify-between items-center text-neutral-400 text-sm">
                <span className="font-medium">{BLUEPRINT_DATA.drawnBy}</span>
                <div className="flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 opacity-70" />
                  <span className="font-mono text-xs">{BLUEPRINT_DATA.liveScale}</span>
                </div>
              </div>
            </div>
          </div>
      </div>

      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isExpanded && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center p-0 sm:p-8" style={{ position: 'fixed' }}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/95 cursor-zoom-out"
                onClick={() => setIsExpanded(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-5xl h-[100dvh] sm:h-[90vh] rounded-none sm:rounded-[40px] overflow-hidden shadow-2xl z-10 border-0 sm:border border-white/10 flex flex-col bg-neutral-950"
              >
                <button 
                  className="absolute top-6 right-6 z-50 p-4 bg-neutral-800/90 hover:bg-neutral-700/90 rounded-full text-white transition-all duration-300"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative flex-1 w-full min-h-0 bg-transparent p-4 sm:p-12">
                  <Image 
                    src={BLUEPRINT_DATA.imageSrc}
                    alt="2D Floor Plan Blueprint (Full View)" 
                    fill
                    unoptimized={true}
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
                
                <div className="flex-none bg-white/[0.02] border-t border-white/5 p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-widest mb-1.5 font-medium">Project</div>
                    <div className="text-base text-neutral-200 font-semibold tracking-tight">{BLUEPRINT_DATA.title}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-widest mb-1.5 font-medium">Drawn By</div>
                    <div className="text-base text-white font-semibold tracking-tight">{BLUEPRINT_DATA.drawnBy}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-widest mb-1.5 font-medium">Date</div>
                    <div className="text-base text-neutral-200 font-semibold tracking-tight">{BLUEPRINT_DATA.date}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-widest mb-1.5 font-medium">Sheet</div>
                    <div className="text-base text-neutral-200 font-semibold tracking-tight">{BLUEPRINT_DATA.sheet}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
