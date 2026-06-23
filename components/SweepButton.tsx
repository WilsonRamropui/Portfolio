"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SweepButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode;
}

export const SweepButton = ({ children = "GET MOTION+", className = "", ...props }: SweepButtonProps) => {
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      initial="idle"
      className={`relative group flex items-center justify-center px-6 h-[44px] font-mono text-sm tracking-widest uppercase transition-all ${className}`}
      {...props}
    >
      {/* Background layer (clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white/[0.05] backdrop-blur-md">
        {/* Hatched background */}
        <div 
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.15) 4px, rgba(255,255,255,0.15) 5px)`
          }}
        />

        {/* Sweeping White Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Using aspect-square ensures the height matches the large width, so translating 100% pushes it completely out of the button bounds */}
          <div className="w-[250%] aspect-square rotate-45 transform origin-center">
            <div className="w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform" />
          </div>
        </div>
      </div>

      {/* Animated Corner Brackets (using transforms for GPU acceleration to eliminate layout thrashing) */}
      <div className="absolute inset-0 z-10 mix-blend-difference pointer-events-none">
        <motion.div variants={{ idle: { x: 0, y: 0 }, hover: { x: -4, y: -4 }, tap: { x: 2, y: 2 } }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white" />
        <motion.div variants={{ idle: { x: 0, y: 0 }, hover: { x: 4, y: -4 }, tap: { x: -2, y: 2 } }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white" />
        <motion.div variants={{ idle: { x: 0, y: 0 }, hover: { x: -4, y: 4 }, tap: { x: 2, y: -2 } }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white" />
        <motion.div variants={{ idle: { x: 0, y: 0 }, hover: { x: 4, y: 4 }, tap: { x: -2, y: -2 } }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white" />
      </div>

      {/* Button Text */}
      <motion.span 
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.02 },
          tap: { scale: 0.95 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative z-10 mix-blend-difference text-white font-bold flex items-center justify-center gap-2 whitespace-nowrap pointer-events-none"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};
