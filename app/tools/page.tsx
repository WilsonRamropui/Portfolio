'use client';

import React, { useState } from "react";
import "./skills.css";
import dynamic from "next/dynamic";
import { Monitor } from "lucide-react";

const GlowingEffectDemo = dynamic(() => import("@/components/glowing-effect-demo"), { ssr: false });
const TextType = dynamic(() => import('@/components/TextType'), { ssr: false });

/* ================================================================
   SOFTWARE ARSENAL
   Icon sources:
   - Icons8 (96px color) — most reliable, always loads
   - Fallback: emoji via onError
   ================================================================ */
const software = [
  {
    name: "Autodesk Revit",
    type: "BIM Software",
    // Icons8 reliable color icon
    icon: "https://img.icons8.com/color/96/autodesk-revit.png",
    fallback: "🏗️",
    pct: 0.90,
    delay: "0.1s",
  },
  {
    name: "AutoCAD",
    type: "CAD Drafting",
    icon: "https://img.icons8.com/color/96/autocad.png",
    fallback: "📐",
    pct: 0.95,
    delay: "0.15s",
  },
  {
    name: "SketchUp",
    type: "3D Modelling",
    icon: "https://img.icons8.com/color/96/sketchup.png",
    fallback: "🧊",
    pct: 0.88,
    delay: "0.2s",
  },
  {
    name: "V-Ray",
    type: "Rendering Engine",
    // Chaos Group official logo via Wikipedia (stable SVG rendered as PNG)
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/V-Ray_logo.svg/240px-V-Ray_logo.svg.png",
    fallback: "🌟",
    pct: 0.82,
    delay: "0.25s",
  },
  {
    name: "Enscape",
    type: "Real-Time Render",
    // Enscape official logo (stable asset from their CDN)
    icon: "https://img.icons8.com/color/96/enscape--v1.png",
    fallback: "✨",
    pct: 0.85,
    delay: "0.3s",
  },
  {
    name: "ETABS",
    type: "Structural Analysis",
    // CSI (Computers & Structures) — using their official brand mark
    icon: "https://img.icons8.com/color/96/structural-analysis.png",
    fallback: "⚙️",
    pct: 0.80,
    delay: "0.35s",
  },
  {
    name: "3ds Max",
    type: "3D Visualisation",
    icon: "https://img.icons8.com/color/96/autodesk-3ds-max.png",
    fallback: "🎨",
    pct: 0.78,
    delay: "0.4s",
  },
  {
    name: "Lumion",
    type: "Arch Visualisation",
    icon: "https://img.icons8.com/fluency/96/lumion.png",
    fallback: "🌿",
    pct: 0.75,
    delay: "0.45s",
  },
  {
    name: "Adobe Photoshop",
    type: "Post-Processing",
    icon: "https://img.icons8.com/color/96/adobe-photoshop.png",
    fallback: "🖼️",
    pct: 0.72,
    delay: "0.5s",
  },
  {
    name: "Microsoft Excel",
    type: "Quantity Surveying",
    icon: "https://img.icons8.com/color/96/microsoft-excel-2019.png",
    fallback: "📊",
    pct: 0.88,
    delay: "0.55s",
  },
  {
    name: "AutoCAD Civil 3D",
    type: "Civil Design",
    icon: "https://img.icons8.com/color/96/autodesk-civil-3d.png",
    fallback: "🛣️",
    pct: 0.76,
    delay: "0.6s",
  },
  {
    name: "Primavera P6",
    type: "Project Planning",
    // Oracle Primavera — using Oracle icon which is stable on Icons8
    icon: "https://img.icons8.com/color/96/oracle-logo.png",
    fallback: "📅",
    pct: 0.70,
    delay: "0.65s",
  },
];


/* ================================================================
   DESIGN WORKFLOW PROCESS
   ================================================================ */
const workflow = [
  { icon: "💡", label: "Concept\nIdeation" },
  { icon: "📐", label: "Schematic\nDesign" },
  { icon: "🏗️", label: "BIM\nModelling" },
  { icon: "⚙️", label: "Structural\nAnalysis" },
  { icon: "🌟", label: "Visualisation\n& Render" },
  { icon: "📋", label: "Construction\nDocs" },
];

/* ================================================================
   SOFTWARE CARD — client component for image error handling
   ================================================================ */
function SoftwareCard({ s }: { s: typeof software[0] }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="skill-card">
      {/* Icon */}
      <div className="skill-card-icon-wrap">
        {!imgFailed ? (
          <img
            src={s.icon}
            alt={s.name}
            width={36}
            height={36}
            className="skill-card-icon-img"
            onError={() => setImgFailed(true)}
            loading="lazy"
          />
        ) : (
          <span className="skill-card-icon-fallback">{s.fallback}</span>
        )}
      </div>

      {/* Name */}
      <div className="skill-card-name">{s.name}</div>

      {/* Category */}
      <div className="skill-card-type">{s.type}</div>

      {/* Proficiency bar */}
      <div className="skill-card-bar-wrapper">
        <div className="skill-card-bar-meta">
          <span className="skill-card-bar-label">Proficiency</span>
          <span className="skill-card-bar-pct">{Math.round(s.pct * 100)}%</span>
        </div>
        <div className="skill-card-bar-track">
          <div
            className="skill-card-bar-fill"
            style={{
              "--bar-pct":   s.pct,
              "--bar-delay": s.delay,
            } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Right accent line */}
      <div className="skill-card-accent-line" />
    </div>
  );
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */
export default function SkillsPage() {
  return (
    <div className="skills-page">
      {/* ── CINEMATIC BACKGROUND (same as experience page) ── */}
      <div className="skills-bg-image" aria-hidden="true" />
      <div className="skills-bg-vignette" aria-hidden="true" />



      <div className="skills-container">

        {/* ── Hero — sits above the glass, floats free on cinematic bg ── */}
        <header className="skills-hero">
          <span className="skills-hero-eyebrow">— Compendium of Mastery —</span>
          <h1 className="skills-hero-title">Skills &amp; Expertise</h1>
          <div style={{ minHeight: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TextType
              text={[
                "A Civil Engineer who builds — from structural frames to photorealistic renders.",
                "Tools of precision, craft of design."
              ]}
              typingSpeed={100}
              deletingSpeed={45}
              pauseDuration={2400}
              showCursor={true}
              cursorCharacter="|"
              className="skills-hero-sub"
            />
          </div>
          <div className="skills-hero-rule">
            <div className="skills-hero-rule-line" />
            <div className="skills-hero-rule-dot" />
            <div className="skills-hero-rule-line right" />
          </div>
        </header>

        {/* ── GLASS PANEL WRAP starts here, below the hero ── */}
        <div className="sk-glass-wrap">


          {/* ── Software arsenal ─────────────────────────────────── */}
          <section aria-label="Software proficiency" className="mb-20">
            <div className="skills-section-label">Software Arsenal</div>
            <h2 className="skills-section-title">Tools I Master</h2>
            <div className="skills-software-grid">
              {software.map((s) => (
                <SoftwareCard key={s.name} s={s} />
              ))}
            </div>
          </section>

          {/* ── Tech Stack ───────────────────────────────────────── */}
          <section aria-label="Tech Stack" className="mb-20">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-zinc-500 uppercase font-bold mb-3">
              <Monitor size={14} className="opacity-70" />
              — ARSENAL —
            </div>
            <h2 className="skills-section-title">Tech Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8">
              <div className="bg-black/40 border border-white/5 rounded-xl p-8 hover:bg-white/5 transition-colors backdrop-blur-md">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-4 font-cinzel">Core Tech</h3>
                <p className="text-[14px] text-zinc-400 font-serif">Python, Web Technology, Software Development</p>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-xl p-8 hover:bg-white/5 transition-colors backdrop-blur-md">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-4 font-cinzel">Emerging Tech</h3>
                <p className="text-[14px] text-zinc-400 font-serif">AI/ML, Big Data, Blockchain</p>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-xl p-8 hover:bg-white/5 transition-colors backdrop-blur-md">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-4 font-cinzel">Hardware & Sec</h3>
                <p className="text-[14px] text-zinc-400 font-serif">IoT, Drone Technology, Cyber Security</p>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-xl p-8 hover:bg-white/5 transition-colors backdrop-blur-md">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-4 font-cinzel">Engineering</h3>
                <p className="text-[14px] text-zinc-400 font-serif">Civil Engineering, Design Engineering</p>
              </div>
            </div>
          </section>

          {/* ── Areas of Expertise — Glowing Effect Bento ──────── */}
          <section aria-label="Areas of expertise" className="mb-20">
            <div className="skills-section-label">Core Disciplines</div>
            <h2 className="skills-section-title">Areas of Expertise</h2>
            <GlowingEffectDemo />
          </section>

          {/* ── Design workflow ────────────────────────────────────── */}
          <section aria-label="Design workflow" className="mt-8 mb-4">
            <div className="skills-section-label">Design Process</div>
            <h2 className="skills-section-title">How I Work</h2>
            <div className="skills-workflow-steps">
              {workflow.map((w, i) => (
                <div key={i} className="workflow-step">
                  <div className="workflow-step-dot">{w.icon}</div>
                  <div className="workflow-step-label">
                    {w.label.split("\n").map((line, j) => (
                      <span key={j} style={{ display: "block" }}>{line}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>{/* /sk-glass-wrap */}
      </div>
    </div>
  );
}