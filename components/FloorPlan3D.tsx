"use client";
import React, { useState, useEffect } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Compass, Ruler, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function FloorPlan3D() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  return (
    <>
      <div className="w-full flex items-center justify-center lg:justify-end min-h-[400px]">
        <PinContainer
          title="Click to expand 3D"
          containerClassName="w-[min(300px,85vw)] sm:w-[340px] h-[min(375px,106.25vw)] sm:h-[425px] cursor-pointer"
        >
          <div 
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(true);
            }}
            className="flex flex-col w-[min(300px,85vw)] sm:w-[340px] aspect-[4/5] overflow-hidden relative transition-transform hover:scale-[1.02]"
            style={{
              backgroundColor: "rgba(20, 20, 20, 0.45)",
              backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.01) 35%, rgba(0, 0, 0, 0.5) 100%)",
              backdropFilter: "blur(40px) saturate(1.2)",
              WebkitBackdropFilter: "blur(40px) saturate(1.2)",
              borderRadius: "36px",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.6), inset 2px 2px 4px rgba(255, 255, 255, 0.25), inset -3px -3px 6px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)"
            }}
          >
            {/* Header */}
            <div className="relative z-10 flex justify-between items-center p-4 border-b border-white/[0.05] bg-gradient-to-b from-white/[0.04] to-transparent">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-[0.2em]">Blueprint View</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] text-zinc-400 uppercase tracking-widest">Live</span>
              </div>
            </div>

            {/* Blueprint Image Container */}
            <div className="relative flex-1 w-full bg-transparent overflow-hidden p-3 flex items-center justify-center pointer-events-none">
              
              <motion.div 
                layoutId="blueprint-image-container"
                className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.05]"
              >
                <Image 
                  src="/images/blueprint_4k.png" 
                  alt="2D Floor Plan Blueprint" 
                  fill
                  className="object-cover mix-blend-screen grayscale opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>

            {/* Footer Metadata */}
            <div className="relative z-10 grid grid-cols-2 gap-px bg-white/[0.05]">
              <div className="bg-neutral-950/80 p-3 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Ruler className="w-3 h-3 text-zinc-500" />
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Scale</span>
                </div>
                <span className="text-xs text-zinc-200 font-mono font-medium">1:100</span>
              </div>
              <div className="bg-neutral-950/80 p-3 flex flex-col items-center justify-center">
                <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Status</div>
                <span className="text-xs text-emerald-400 font-medium">Approved</span>
              </div>
            </div>
            
            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </div>
        </PinContainer>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
              onClick={() => setIsExpanded(false)}
            />
            <motion.div
              layoutId="blueprint-image-container"
              className="relative w-full max-w-5xl h-[85vh] sm:h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] z-10 border border-white/10 flex flex-col bg-[#050505]"
            >
              <button 
                className="absolute top-4 right-4 z-50 p-3 bg-black/60 hover:bg-black/90 rounded-full text-white backdrop-blur-md transition-all border border-white/10"
                onClick={() => setIsExpanded(false)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative flex-1 w-full min-h-0 bg-black">
                <Image 
                  src="/images/blueprint_4k.png" 
                  alt="2D Floor Plan Blueprint Expanded" 
                  fill
                  unoptimized
                  quality={100}
                  className="object-contain mix-blend-screen grayscale p-2 sm:p-6"
                />
              </div>
              
              {/* Custom Title Block Bottom Bar (Expanded) */}
              <div className="w-full bg-neutral-950 border-t border-white/20 flex flex-col pointer-events-auto shrink-0">
                <div className="border-b border-white/20 px-4 py-2 sm:px-6 sm:py-3 bg-white/[0.02]">
                  <h3 className="text-white font-mono font-bold tracking-[0.15em] text-sm sm:text-xl">MODERN HOUSE RESIDENCE</h3>
                </div>
                <div className="flex flex-row">
                  <div className="flex-1 border-r border-white/20 px-4 py-3 sm:px-6 sm:py-4 flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mb-2">
                      <div className="text-zinc-400 font-mono text-[10px] sm:text-sm uppercase tracking-wider mb-1 sm:mb-0">DRAWN BY: <span className="text-white font-bold ml-1">WILSON RAMROPUI</span></div>
                      <div className="text-zinc-400 font-mono text-[10px] sm:text-sm uppercase tracking-wider">DATE: <span className="text-white font-bold ml-1">2025</span></div>
                    </div>
                    <div className="text-zinc-400 font-mono text-[10px] sm:text-sm uppercase tracking-wider">SCALE: <span className="text-white ml-1">1/4" = 1'-0"</span></div>
                  </div>
                  <div className="px-6 py-3 sm:px-10 flex flex-col items-center justify-center bg-black/40 min-w-[100px] sm:min-w-[150px]">
                    <div className="text-zinc-500 font-mono text-[10px] sm:text-sm uppercase tracking-wider mb-1">SHEET</div>
                    <div className="text-emerald-400 font-mono font-bold text-2xl sm:text-5xl">A101</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
