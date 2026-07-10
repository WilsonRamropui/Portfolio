'use client';

import React, { useState } from "react";
import "./skills.css";
import dynamic from "next/dynamic";
import { Monitor } from "lucide-react";
import { CinematicBackground } from "@/components/CinematicBackground";

const GlowingEffectDemo = dynamic(() => import("@/components/glowing-effect-demo"), { ssr: false });
const TextType = dynamic(() => import('@/components/TextType'), { ssr: false });

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
   PAGE COMPONENT
   ================================================================ */
export default function SkillsPage() {
  return (
    <div className="skills-page">
      {/* ── CINEMATIC BACKGROUND (same as experience page) ── */}
      <CinematicBackground className="skills-bg-image" />
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