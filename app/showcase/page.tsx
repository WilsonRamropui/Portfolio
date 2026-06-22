"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import "@/components/PreLoader.css";

const CINEMATIC: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── View definitions ──────────────────────────────────────── */
type View = {
  id: string;
  label: string;
  subtitle: string;
  tag: string;
  description: string;
  scale: string;
  ref: string;
  image: string;
  accentColor: string;
};

const VIEWS: View[] = [
  {
    id: "floor-plan",
    label: "Floor Plan",
    subtitle: "Ground Level Layout",
    tag: "Plan View · 1:100",
    description:
      "Complete orthographic floor plan of the proposed apartment — room dimensions, circulation paths and spatial relationships at a 1:100 scale.",
    scale: "1:100",
    ref: "WS-FP-01",
    image: "/images/blueprint_4k.png",
    accentColor: "#1A1816",
  },
  {
    id: "elevation",
    label: "Elevation",
    subtitle: "Front & Side Facades",
    tag: "Elevation View · 1:50",
    description:
      "Orthographic projection of the building's external facades, showing storey heights, fenestration pattern and material boundaries.",
    scale: "1:50",
    ref: "WS-EL-02",
    image: "/images/blueprint_4k.png",
    accentColor: "#3A3530",
  },
  {
    id: "3d-render",
    label: "3D Render",
    subtitle: "Spatial Visualisation",
    tag: "Perspective · Rendered",
    description:
      "Photo-realistic three-dimensional render illustrating the volumetric composition, material palette and natural lighting conditions.",
    scale: "NTS",
    ref: "WS-3D-03",
    image: "/images/blueprint_4k.png",
    accentColor: "#2A2520",
  },
  {
    id: "site-plan",
    label: "Structural Plan",
    subtitle: "Site & Context",
    tag: "Structural Plan · 1:500",
    description:
      "Macro-level site plan showing plot boundaries, setbacks, vehicular access, landscaping zones and neighbouring structures.",
    scale: "1:500",
    ref: "WS-SP-04",
    image: "/images/blueprint_4k.png",
    accentColor: "#1A1816",
  },
];

/* ── Detail overlay ─────────────────────────────────────────── */
function DetailOverlay({
  view,
  onClose,
}: {
  view: View;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex overflow-hidden"
      style={{ contain: "strict" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dark backdrop */}
      <motion.div
        className="absolute inset-0 bg-[#1A1816]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
      />

      {/* Content panel — slides up from bottom */}
      <motion.div
        className="relative w-full h-full flex flex-col lg:flex-row"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        initial={{ y: "4%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "4%", opacity: 0 }}
        transition={{ duration: 0.55, ease: CINEMATIC }}
      >
        {/* Left info panel */}
        <div
          className="relative flex flex-col justify-between px-10 sm:px-14 lg:px-16 pt-20 pb-12 bg-[#F4F0E6]"
          style={{ width: "100%", maxWidth: "420px", flexShrink: 0 }}
        >
          {/* Back button */}
          <motion.button
            onClick={onClose}
            className="absolute top-8 left-10 sm:left-14 lg:left-16 flex items-center gap-2 font-mono text-[9px] tracking-[0.22em] uppercase text-[#5A554F] border border-[#5A554F]/25 hover:border-[#1A1816]/50 hover:text-[#1A1816] px-4 py-[7px] rounded-full transition-colors duration-200"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M8 6H2M2 6L4.5 3.5M2 6L4.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </motion.button>

          <div className="flex flex-col mt-16">
            {/* Tag */}
            <motion.span
              className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#8B857A] mb-6"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              {view.tag}
            </motion.span>

            {/* Heading */}
            <div style={{ overflow: "hidden", marginBottom: 4 }}>
              <motion.h2
                className="font-cormorant uppercase text-[#1A1816]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: 0.88, fontWeight: 400 }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: CINEMATIC }}
              >
                {view.label}
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden", marginBottom: 28 }}>
              <motion.h2
                className="font-cormorant uppercase text-[#7A746B]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: 0.88, fontWeight: 300, fontStyle: "italic" }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.42, duration: 1.2, ease: CINEMATIC }}
              >
                {view.subtitle}
              </motion.h2>
            </div>

            {/* Divider */}
            <motion.div
              style={{ height: 1, maxWidth: 200, background: "linear-gradient(90deg, rgba(26,24,22,0.2), transparent)", marginBottom: 24, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.8, ease: CINEMATIC }}
            />

            {/* Description */}
            <motion.p
              className="text-[#6B665E] text-sm leading-relaxed font-light"
              style={{ maxWidth: 300 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              {view.description}
            </motion.p>
          </div>

          {/* Meta footer */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div>
              <p className="font-mono text-[8px] tracking-[0.25em] uppercase text-[#8B857A] mb-1">Ref</p>
              <p className="font-cormorant text-lg text-[#1A1816] font-light">{view.ref}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[8px] tracking-[0.25em] uppercase text-[#8B857A] mb-1">Scale</p>
              <p className="font-cormorant text-lg text-[#1A1816] font-light">{view.scale}</p>
            </div>
          </motion.div>
        </div>

        {/* Right image panel — dark */}
        <motion.div
          className="relative flex-1 h-full bg-[#0E0E0C] flex items-center justify-center"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          initial={{ x: "6%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "6%", opacity: 0 }}
          transition={{ delay: 0.15, duration: 0.65, ease: CINEMATIC }}
        >
          <div className="relative" style={{ width: "88%", height: "82%", transform: "translateZ(0)" }}>
            <Image
              src={view.image}
              alt={view.label}
              fill
              className="object-contain opacity-90 pointer-events-none"
              priority
              sizes="70vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Page ──────────────────────────────────────────────── */
export default function CinematicShowcasePage() {
  const [activeView, setActiveView] = useState<View | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-[100] w-full h-screen overflow-hidden bg-[#F4F0E6] font-sans text-[#1A1816] select-none touch-none overscroll-none"
        style={{ contain: "strict" }}
      >
        {/* ── TOP NAV ─────────────────────────────────────────── */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-12 lg:px-14 pt-8"
          style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: CINEMATIC }}
        >
          <div className="flex items-center gap-3">
            <div className="relative w-[40px] h-[40px] shrink-0 flex items-center justify-center" style={{ filter: "invert(1)" }}>
              <div className="preloader-monogram-wrapper absolute !mb-0 shrink-0" style={{ width: "110px", height: "110px", transform: "scale(0.36) translateZ(0)" }}>
                <div className="preloader-ring-glow" />
                <span className="preloader-monogram">W</span>
              </div>
            </div>
            <div className="font-cormorant text-[14px] sm:text-[17px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#1A1816] leading-none whitespace-nowrap">Wilson Studio</div>
          </div>
          <Link href="/" className="flex items-center justify-center font-mono text-[9px] tracking-[0.22em] uppercase text-[#5A554F] border border-[#5A554F]/25 hover:border-[#1A1816]/50 hover:text-[#1A1816] w-8 h-8 sm:w-auto sm:h-auto sm:px-4 sm:py-[7px] rounded-full transition-colors duration-200 whitespace-nowrap">
            {/* Mobile X Icon */}
            <svg className="sm:hidden" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M3 3L9 9M9 3L3 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Desktop Arrow + Text */}
            <svg className="hidden sm:block mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M8 6H2M2 6L4.5 3.5M2 6L4.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden sm:inline">Close Preview</span>
          </Link>
        </motion.div>

        {/* ── SPLIT LAYOUT ────────────────────────────────────── */}
        <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">

          {/* LEFT PANEL */}
          <div
            className="relative flex flex-col px-6 sm:px-10 md:px-12 lg:px-14 pt-28 md:pt-20 pb-6 w-full h-full md:h-auto md:w-[44%] md:flex-shrink-0 md:justify-center"
            style={{ minHeight: 0 }}
          >

            {/* PROPOSED */}
            <div style={{ overflow: "hidden", marginBottom: 4 }}>
              <motion.h1
                className="font-cormorant text-left uppercase text-[#1A1816]"
                style={{ fontSize: "clamp(2.6rem, 8vw, 5rem)", lineHeight: 0.88, fontWeight: 400, letterSpacing: "-0.01em", willChange: "transform", backfaceVisibility: "hidden" }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15, duration: 1.8, ease: CINEMATIC }}
              >
                Proposed
              </motion.h1>
            </div>

            {/* APARTMENT */}
            <div style={{ overflow: "hidden", marginBottom: 20 }}>
              <motion.h1
                className="font-cormorant text-left uppercase"
                style={{ fontSize: "clamp(2.6rem, 8vw, 5rem)", lineHeight: 0.88, fontWeight: 300, fontStyle: "italic", color: "#7A746B", letterSpacing: "-0.01em", willChange: "transform", backfaceVisibility: "hidden" }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35, duration: 1.8, ease: CINEMATIC }}
              >
                Apartment
              </motion.h1>
            </div>

            {/* Divider */}
            <motion.div
              style={{ height: 1, maxWidth: 260, background: "linear-gradient(90deg, rgba(26,24,22,0.2), transparent)", transformOrigin: "left", willChange: "transform, opacity", marginBottom: 14 }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.0, ease: CINEMATIC }}
            />

            {/* Blueprint — mobile only */}
            <motion.div
              className="block md:hidden relative w-full my-auto"
              style={{
                height: "72vw",
                transform: "translate3d(0,0,0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: CINEMATIC }}
            >
              <Image
                src="/images/blueprint_4k.png"
                alt="Architectural Floor Plan"
                fill
                className="object-contain grayscale opacity-90 scale-[1.05] pointer-events-none"
                priority
                sizes="100vw"
              />
            </motion.div>

            {/* View buttons — mt-auto pushes to bottom of full-height panel */}
            <motion.div
              className="flex flex-col gap-[6px] mt-auto md:mt-0 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: CINEMATIC }}
            >
              {VIEWS.map((view, i) => (
                <motion.button
                  key={view.id}
                  onClick={() => setActiveView(view)}
                  className="group relative flex items-center justify-between text-left overflow-hidden w-full"
                  style={{
                    padding: "10px 14px",
                    border: "1px solid rgba(26,24,22,0.12)",
                    borderRadius: 6,
                    background: "transparent",
                    cursor: "pointer",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    minWidth: 0,
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.15 + i * 0.07, duration: 0.6, ease: CINEMATIC }}
                  whileHover={{ scale: 1.015, transition: { duration: 0.18, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover fill */}
                  <motion.span
                    className="absolute inset-0 bg-[#1A1816]"
                    initial={{ x: "-101%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    style={{ borderRadius: 5 }}
                  />

                  {/* Left: label + subtitle */}
                  <span className="relative flex flex-col gap-[3px] z-10 min-w-0 flex-1 pr-3">
                    <span
                      className="font-cormorant uppercase text-[#1A1816] group-hover:text-[#F4F0E6] transition-colors duration-150 truncate"
                      style={{ fontSize: "clamp(1.05rem, 3.5vw, 1.25rem)", fontWeight: 400, letterSpacing: "0.08em", lineHeight: 1 }}
                    >
                      {view.label}
                    </span>
                    <span
                      className="font-sans text-[#8B857A] group-hover:text-[#A09890] transition-colors duration-150 truncate"
                      style={{ fontSize: 9.5, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}
                    >
                      {view.subtitle}
                    </span>
                  </span>

                  {/* Right: arrow */}
                  <svg
                    className="relative z-10 text-[#8B857A] group-hover:text-[#F4F0E6] transition-colors duration-150 shrink-0"
                    width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3"
                  >
                    <path d="M2 7h10M9 4l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* RIGHT PANEL — desktop only, slides in from right */}
          <motion.div
            className="relative hidden md:flex items-center justify-center h-full md:flex-1"
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, duration: 1.6, ease: CINEMATIC }}
          >
            <div className="relative" style={{ width: "80%", height: "75%", transform: "translateZ(0)" }}>
              <Image
                src="/images/blueprint_4k.png"
                alt="Architectural Floor Plan"
                fill
                className="object-contain grayscale opacity-90 pointer-events-none"
                priority
                sizes="60vw"
              />
            </div>

            {/* Scale label */}
            <motion.div
              className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 text-right"
              style={{ willChange: "opacity" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.7 }}
            >
              <p style={{ fontFamily: "monospace", fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8B857A", marginBottom: 4 }}>Scale</p>
              <p className="font-cormorant" style={{ fontSize: 22, color: "#1A1816", fontWeight: 300 }}>1:100</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── DETAIL OVERLAY ──────────────────────────────────── */}
      <AnimatePresence>
        {activeView && (
          <DetailOverlay
            key={activeView.id}
            view={activeView}
            onClose={() => setActiveView(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
