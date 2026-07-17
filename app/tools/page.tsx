'use client';

import React from "react";
import "./skills.css";
import dynamic from "next/dynamic";
import { ExternalLink, Award } from "lucide-react";

import { CinematicBackground } from "@/components/CinematicBackground";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";

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
   CERTIFICATIONS DATA
   ================================================================ */
const certifications = [
  {
    title: "CSI ETABS",
    issuer: "Udemy",
    category: "STRUCTURAL ANALYSIS",
    icon: "udemy", // We can map this to a custom icon or keep using the Award badge
    url: "https://ude.my/UC-5453b5b4-6ef4-4435-87dd-9ebf2c1dd7f1"
  },
  {
    title: "STAAD Pro V8 Structural",
    issuer: "Udemy",
    category: "STRUCTURAL ANALYSIS",
    icon: "udemy",
    url: "https://ude.my/UC-04aa55a1-8e04-449a-afd1-084d15b3105f"
  },
  {
    title: "Civil Engineering Structural Shop Drawing in AutoCAD",
    issuer: "Udemy",
    category: "DRAFTING",
    icon: "udemy",
    url: "https://ude.my/UC-7ad0464f-ce50-45ff-ab06-b013ebcc6d85"
  },
  {
    title: "Architectural Shop Drawing Plans in AutoCAD 2020",
    issuer: "Udemy",
    category: "DRAFTING",
    icon: "udemy",
    url: "https://ude.my/UC-434177cd-cd71-40e3-b133-a770986842bc"
  },
  {
    title: "AutoCAD Civil 3D - MEGA course for Civil Works",
    issuer: "Udemy",
    category: "CIVIL WORKS",
    icon: "udemy",
    url: "https://ude.my/UC-62a72fc9-8de8-4843-8c2e-eab511611978"
  },
  {
    title: "Dynamo In Revit",
    issuer: "Udemy",
    category: "BIM / AUTOMATION",
    icon: "udemy",
    url: "https://ude.my/UC-78a22605-a6d5-4a01-b527-d9d7d862529c"
  },
  {
    title: "Learning Revit 2026",
    issuer: "LinkedIn Learning",
    category: "BIM / 3D MODELLING",
    icon: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/df07e13e9d2f5f1b20230190c45e1cc04935f6eee65932ef05488ad28b40390f?trk=share_certificate"
  },
  {
    title: "Learning Revit 2025",
    issuer: "LinkedIn Learning",
    category: "BIM / 3D MODELLING",
    icon: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/406798de7f0e61dde455ca70a83fbd7375289eb45ee50aa2ed0ffdc395b9bd5c?trk=share_certificate"
  },
  {
    title: "Revit 2022: Essential Training for Architecture (Imperial and Metric)",
    issuer: "LinkedIn Learning",
    category: "BIM / 3D MODELLING",
    icon: "linkedin",
    url: "https://www.linkedin.com/learning/certificates/65f8684e21147148b9fb75cc9606a7175625e5e20932a1a055ca70a70f683a3e?trk=share_certificate"
  }
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


          {/* ── Certifications & Badges ──────────────────────────── */}
          <section aria-label="Certifications & Badges" className="mb-8 md:mb-20">
            <div className="skills-section-label">Credentials</div>
            <h2 className="skills-section-title">Certifications &amp; Badges</h2>
            <CertificationsCarousel certifications={certifications} />
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