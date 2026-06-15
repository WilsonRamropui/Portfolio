"use client";

import React, { useRef, useEffect } from "react";
import { Lock, Activity, Fingerprint } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MetallicCardProps {
  name?: string;
  role?: string;
  idNumber?: string;
}

const chamferedPath = "M 24 0 L 336 0 L 360 24 L 360 544 L 336 568 L 24 568 L 0 544 L 0 24 Z";
const chamferedClipPath = "polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 24px 100%, 0 calc(100% - 24px), 0 24px)";

const SciFiFrame = () => (
  <div className="absolute inset-0 pointer-events-none z-20">
    <svg 
      viewBox="0 0 360 568" 
      className="absolute inset-0 w-full h-full opacity-80"
      fill="none" 
      stroke="currentColor" 
    >
      {/* Outer edge explicit border for perfect sharpness */}
      <path 
        d={chamferedPath} 
        className="stroke-zinc-500/50" 
        strokeWidth="2"
      />
      {/* Main chamfered inner border */}
      <path 
        d="M 32 12 L 328 12 L 348 32 L 348 536 L 328 556 L 32 556 L 12 536 L 12 32 Z" 
        className="stroke-zinc-400/50" 
        strokeWidth="1.5"
      />
      
      {/* Top accent trapezoid */}
      <path 
        d="M 120 12 L 135 28 L 225 28 L 240 12" 
        className="stroke-zinc-400/70" 
        strokeWidth="1.5"
        fill="rgba(255,255,255,0.02)"
      />
      
      {/* Bottom accent trapezoid */}
      <path 
        d="M 100 556 L 120 532 L 240 532 L 260 556" 
        className="stroke-zinc-400/70" 
        strokeWidth="1.5"
        fill="rgba(255,255,255,0.02)"
      />

      {/* Extra corner accent lines */}
      <path d="M 12 45 L 12 80" className="stroke-zinc-300" strokeWidth="2.5" />
      <path d="M 45 12 L 80 12" className="stroke-zinc-300" strokeWidth="2.5" />
      
      <path d="M 348 45 L 348 80" className="stroke-zinc-300" strokeWidth="2.5" />
      <path d="M 315 12 L 280 12" className="stroke-zinc-300" strokeWidth="2.5" />
      
      <path d="M 12 523 L 12 488" className="stroke-zinc-300" strokeWidth="2.5" />
      <path d="M 45 556 L 80 556" className="stroke-zinc-300" strokeWidth="2.5" />
      
      <path d="M 348 523 L 348 488" className="stroke-zinc-300" strokeWidth="2.5" />
      <path d="M 315 556 L 280 556" className="stroke-zinc-300" strokeWidth="2.5" />
    </svg>

    {/* Trapezoid Text */}
    <div className="absolute top-[14px] left-1/2 -translate-x-1/2 font-mono text-[9px] text-zinc-400 tracking-[0.2em] font-medium">
      #00001
    </div>
    <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 font-mono text-[10px] text-zinc-300 tracking-[0.25em] font-bold">
      3.472 WEHT
    </div>
  </div>
);

// High-performance SVG background layer
const SvgLayer = ({ fill, className, style }: { fill: string, className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 360 568" 
    preserveAspectRatio="none" 
    className={`absolute inset-0 w-full h-full ${className || ''}`} 
    style={style}
  >
    <path d={chamferedPath} fill={fill} />
  </svg>
);

export const MetallicCard: React.FC<MetallicCardProps> = ({
  name = "ALEXANDER DOE",
  role = "SENIOR DEVELOPER",
  idNumber = "8901-2345-6789"
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // y tracks vertical screen percentage (-0.5 to 0.5)
  const y = useMotionValue(0);
  // rotationX tracks accumulated horizontal degrees
  const rotationX = useMotionValue(0); 
  
  const lastTouchX = useRef<number | null>(null);

  // Smooth springs for rotation
  const smoothY = useSpring(y, { stiffness: 80, damping: 25, mass: 1 });
  const smoothRotationX = useSpring(rotationX, { stiffness: 80, damping: 25, mass: 1 });
  
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(smoothRotationX, (v) => `${v}deg`);
  
  // Dynamic metallic sheen movement
  const sheenX = useTransform(smoothRotationX, (v) => {
    const normalized = ((v % 360) + 360) % 360; 
    const pct = (normalized / 360) * 200 - 100; 
    return `${-pct}%`;
  });
  const sheenY = useTransform(smoothY, [-0.5, 0.5], ["100%", "-100%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only run global mouse follow on devices with a real mouse
      if (window.matchMedia("(hover: hover)").matches) {
        const yPct = (e.clientY / window.innerHeight) - 0.5;
        y.set(yPct);
        rotationX.set(rotationX.get() + e.movementX * 0.2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [y, rotationX]);

  return (
    <div 
      className="flex items-center justify-center p-8 w-full relative"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[360px] aspect-[1/1.58] cursor-grab active:cursor-grabbing touch-pan-y"
        onPan={(e, info) => {
          // Allows dragging the card horizontally on mobile to spin it
          rotationX.set(rotationX.get() + info.delta.x * 0.5);
          // Gently tilt vertically based on drag position
          const yPct = (info.point.y / window.innerHeight) - 0.5;
          y.set(yPct);
        }}
      >
        {/* Soft custom shadow layer that exactly matches the chamfered shape */}
        <SvgLayer 
          fill="rgba(0,0,0,0.8)" 
          className="blur-md sm:blur-xl pointer-events-none" 
          style={{ transform: "translateZ(0px) scale(1.02)" }} 
        />

        {/* Thickness / Core Layers using SVG for 60fps performance without clip-path lag */}
        {[...Array(5)].map((_, i) => (
          <SvgLayer
            key={i}
            fill="#222222"
            className={i > 1 ? "hidden sm:block" : ""} // Drop 3 layers on mobile to massively boost GPU performance
            style={{
              transform: `translateZ(${(i * 2) - 4}px)`,
            }}
          />
        ))}

        {/* Front of card */}
        <div 
          className="absolute inset-0 flex flex-col justify-between overflow-hidden shadow-2xl bg-gradient-to-b from-[#3a3a3a] via-[#2a2a2a] to-[#1a1a1a]"
          style={{ 
            clipPath: chamferedClipPath,
            backfaceVisibility: "hidden",
            transform: "translateZ(6px)"
          }}
        >
          <SciFiFrame />
          
          {/* Dynamic metallic sheen (clipped perfectly inside the container) */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay"
            style={{
              background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 25%, transparent 30%)",
              x: sheenX,
              y: sheenY,
            }}
          />
          
          {/* Vignette Edge Shadow */}
          <div 
            className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] z-0 pointer-events-none" 
          />

          {/* Content layer (raised) */}
          <div 
            className="relative z-10 flex flex-col h-full justify-between p-8 pt-12"
            style={{ transform: "translateZ(40px)" }}
          >
            {/* Top Section */}
            <div>
              <div className="flex justify-between items-center w-full mb-6 mt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-500/50 bg-zinc-800/30 backdrop-blur-md text-[10px] font-bold text-zinc-300 tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  SECURE
                </div>
                <Activity className="w-6 h-6 text-zinc-400" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[28px] leading-tight font-bold text-white tracking-widest text-center mb-3">
                {name}
              </h2>
              <p className="text-zinc-400 text-xs tracking-[0.25em] font-medium text-center uppercase">
                {role}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="mb-6">
              <div className="flex justify-between items-end w-full">
                <div>
                  <p className="text-zinc-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">
                    ID NUMBER
                  </p>
                  <p className="text-zinc-200 font-mono text-sm tracking-wider font-semibold">
                    {idNumber}
                  </p>
                </div>
                <Fingerprint className="w-10 h-10 text-zinc-400 opacity-80" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 flex items-center justify-center overflow-hidden shadow-2xl bg-gradient-to-b from-[#3a3a3a] via-[#2a2a2a] to-[#1a1a1a]"
          style={{ 
            clipPath: chamferedClipPath,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(6px)",
          }}
        >
          <SciFiFrame />
          
          {/* Dynamic metallic sheen for back */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 25%, transparent 30%)",
              x: sheenX,
              y: sheenY,
            }}
          />
          <div 
            className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] z-0 pointer-events-none" 
          />
          
          <div 
            className="relative z-10 flex flex-col items-center justify-center opacity-40"
            style={{ transform: "translateZ(30px)" }}
          >
            <Lock className="w-16 h-16 text-zinc-400 mb-4" />
            <p className="text-zinc-400 text-sm tracking-[0.3em] font-bold">AUTHORIZED</p>
            <p className="text-zinc-400 text-sm tracking-[0.3em] font-bold">PERSONNEL</p>
            <p className="text-zinc-400 text-sm tracking-[0.3em] font-bold">ONLY</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
