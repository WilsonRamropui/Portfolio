'use client';

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Monitor } from "lucide-react";
import GooeyDemo from "@/components/gooey-demo";
import TextType from '@/components/TextType';
import "./experience.css";

/* ════════════════════════════════════════════════════════════════
   EXPERIENCE PAGE — Dark Fantasy Atmospheric Theme
   Adapted from gothic design language of the projects page.
   All original components preserved; styled to the amber/dark theme.
   ════════════════════════════════════════════════════════════════ */

export default function Experience() {
  /* ── Timeline data ── */
  const data = [
    {
      title: "2026",
      content: (
        <div key="exp-1" className="exp-timeline-card">
          <span className="exp-timeline-period">2026 — Present</span>
          <h4 className="exp-timeline-company">
            <a href="https://www.tunnu.org/tec/home/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              Tunnu Engineering And Consultancy
            </a>
          </h4>
          <p className="exp-timeline-desc">
            Working as a Design Engineer, applying civil engineering principles and design expertise for consultancy projects.
          </p>
          <div className="exp-timeline-tags">
            <span className="exp-tag">
              <span className="exp-tag-dot" style={{ background: "#3b82f6" }} />
              Design Engineer
            </span>
            <span className="exp-tag">
              <span className="exp-tag-dot" style={{ background: "#f59e0b" }} />
              Civil Engineering
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div key="exp-2" className="exp-timeline-card">
          <span className="exp-timeline-period">2025</span>
          <h4 className="exp-timeline-company">NIELIT</h4>
          <p className="exp-timeline-desc">
            Worked with a diverse array of cutting-edge technologies including AI/ML, Cyber Security, IoT, and Software Development.
          </p>
          <div className="exp-timeline-tags">
            <span className="exp-tag"><span className="exp-tag-dot" style={{ background: "#10b981" }} />AI/ML</span>
            <span className="exp-tag"><span className="exp-tag-dot" style={{ background: "#ef4444" }} />Cyber Security</span>
            <span className="exp-tag"><span className="exp-tag-dot" style={{ background: "#8b5cf6" }} />IoT & Drones</span>
            <span className="exp-tag"><span className="exp-tag-dot" style={{ background: "#ec4899" }} />Blockchain</span>
            <span className="exp-tag"><span className="exp-tag-dot" style={{ background: "#eab308" }} />Python</span>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div key="exp-3" className="exp-timeline-card">
          <span className="exp-timeline-period">Graduated 2024</span>
          <h4 className="exp-timeline-company">B.Tech in Civil Engineering</h4>
          <p className="exp-timeline-desc">
            Completed Bachelor of Technology degree, building a strong foundation in structural design and engineering principles.
          </p>
          <div className="exp-timeline-tags">
            <span className="exp-tag">
              <span className="exp-tag-dot" style={{ background: "#6366f1" }} />
              B.Tech
            </span>
            <span className="exp-tag">
              <span className="exp-tag-dot" style={{ background: "#14b8a6" }} />
              Engineering
            </span>
          </div>
        </div>
      ),
    },
  ];

  /* ── Tech stack data ── */
  const techStack = [
    { title: "Core Tech",       content: "Python, Web Technology, Software Development" },
    { title: "Emerging Tech",   content: "AI/ML, Big Data, Blockchain" },
    { title: "Hardware & Sec",  content: "IoT, Drone Technology, Cyber Security" },
    { title: "Engineering",     content: "Civil Engineering, Design Engineering" },
  ];

  return (
    <div className="exp-page">

      {/* ── Atmospheric background ─────────────────────────── */}
      <div className="exp-bg-image" aria-hidden="true" />
      <div className="exp-bg-ember"  aria-hidden="true" />
      <div className="exp-bg-vignette" aria-hidden="true" />



      {/* ── Main scrollable area ────────────────────────────── */}
      <div className="exp-scroll-layer">

        {/* ── Hero — floats above the glass, same as tools page ── */}
        <header className="exp-header-outside exp-fade-up">
          <span className="exp-eyebrow">— Compendium of Works —</span>
          <h1 className="exp-main-title">Experience</h1>
          <div className="exp-subtitle-wrap">
            <TextType
              text={[
                "Civil Engineer turned multidisciplinary technologist",
                "Design Engineer at Tunnu Engineering & Consultancy",
                "AI/ML · Cyber Security · IoT · Blockchain",
              ]}
              typingSpeed={100}
              deletingSpeed={45}
              pauseDuration={2400}
              showCursor={true}
              cursorCharacter="|"
              className="exp-subtitle-text"
            />
          </div>
          <div className="exp-hero-rule">
            <div className="exp-hero-rule-line" />
            <div className="exp-hero-rule-dot" />
            <div className="exp-hero-rule-line exp-hero-rule-line--right" />
          </div>
        </header>

        <div className="exp-panel">

          {/* ── Career Timeline ──────────────────────────────── */}
          <section className="exp-section exp-fade-up" aria-label="Career history">
            <span className="exp-section-label">— Chronicle —</span>
            <h2 className="exp-section-title">Career Path</h2>
            <Timeline data={data} />
          </section>

          <div className="exp-divider" />

          {/* ── Project Archives (GooeyDemo) ─────────────────── */}
          <section className="exp-section exp-fade-up" aria-label="Project archives">
            <span className="exp-section-label">— Artefacts —</span>
            <h2 className="exp-section-title">Project Archives</h2>
            <p style={{
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: "15px",
              fontStyle: "italic",
              color: "var(--exp-text-muted)",
              marginBottom: "16px",
              lineHeight: "1.6",
            }}>
              A gooey interactive log of past years and endeavours.
            </p>
            <div className="exp-gooey-wrap">
              <GooeyDemo />
            </div>
          </section>

          <div className="exp-divider" />

          {/* ── Tech Stack ───────────────────────────────────── */}
          <section className="exp-section exp-fade-up" aria-label="Technology stack">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <Monitor style={{ width: "16px", height: "16px", color: "var(--exp-amber)", opacity: 0.8 }} />
              <span className="exp-section-label" style={{ marginBottom: 0 }}>— Arsenal —</span>
            </div>
            <h2 className="exp-section-title">Tech Stack</h2>
            <div className="exp-tech-grid">
              {techStack.map((tech, idx) => (
                <div key={idx} className="exp-tech-card">
                  <h3 className="exp-tech-title">{tech.title}</h3>
                  <p className="exp-tech-content">{tech.content}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
