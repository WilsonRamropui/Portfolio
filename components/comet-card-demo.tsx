"use client";
import { CometCard } from "@/components/ui/comet-card";
import { Mail, MapPin, Globe, Phone, ArrowUpRight } from "lucide-react";
import React, { useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import { Download } from "lucide-react";
import Image from "next/image";

export default function CometCardDemo() {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadCard = useCallback(() => {
    if (cardRef.current === null) return;
    
    toPng(cardRef.current, { 
      cacheBust: true, 
      pixelRatio: 4, 
      style: { transform: 'none', margin: '0' } 
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "wilson_ramropui_card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Oops, something went wrong!", err);
      });
  }, [cardRef]);
  return (
    <div className="flex flex-col items-center">
      <CometCard>
        <div
          ref={cardRef}
          className="my-10 flex w-full max-w-[340px] md:max-w-[380px] cursor-default flex-col items-stretch rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl overflow-hidden transition-all duration-700 md:my-20"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        {/* Image section */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wilson Ramropui Background"
            fill
            quality={100}
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Top glass reflection */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-7">
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400/80 uppercase tracking-[0.3em] font-medium">Available</span>
            </div>

            <h3 className="text-[26px] font-serif font-medium text-white tracking-[0.15em] uppercase leading-none mb-2">
              Wilson Ramropui
            </h3>
            
            <p className="text-[11px] text-zinc-400 tracking-[0.25em] uppercase font-light">
              Design Engineer
            </p>

            {/* Accent line */}
            <div className="w-8 h-px bg-gradient-to-r from-white/40 to-transparent mt-5 mb-5" />
            
            {/* Info items */}
            <div className="flex flex-col gap-3 text-[12px] text-zinc-400">
              <div className="flex items-center gap-2.5 group">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="group-hover:text-zinc-200 transition-colors">CCPUR, Manipur</span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Globe className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="group-hover:text-zinc-200 transition-colors">wilsonramropui.com</span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Phone className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="group-hover:text-zinc-200 transition-colors">+91 9233014770</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 sm:px-7 py-4 border-t border-zinc-800 bg-gradient-to-r from-[#1a1a1c] via-[#0d0d0f] to-[#1a1a1c] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2.5 text-[11px] sm:text-[12px] text-[#c0c0c0] font-medium tracking-wide min-w-0 flex-1 mr-3">
            <Mail className="w-3.5 h-3.5 text-[#a0a0a0] flex-shrink-0" />
            <span className="truncate">wilsonramz774@gmail.com</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#e0e0e0] font-bold uppercase tracking-[0.15em] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] flex-shrink-0">
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3 text-[#c0c0c0]" />
          </div>
        </div>

        {/* Bottom subtle glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
    </CometCard>

      <button 
        onClick={downloadCard}
        className="mb-10 flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 text-slate-900 font-bold uppercase tracking-[0.15em] text-[11px] border border-white/40 shadow-[0_4px_15px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:scale-105 hover:shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:from-white hover:to-slate-300 transition-all duration-300"
      >
        <Download className="w-4 h-4 text-slate-800" />
        Download Card
      </button>
    </div>
  );
}
