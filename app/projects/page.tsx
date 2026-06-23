"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects-data";
import "./gothic.css";

/* ════════════════════════════════════════════════════════════════
   GOTHIC VICTORIAN COMPENDIUM — Projects Page
   Reference: Dark-fantasy aged-parchment UI
   ════════════════════════════════════════════════════════════════ */

const ALL_TAGS = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

/* Circular reel items — top 4 featured projects mapped to gothic thumbnails */
const REEL_THUMBS = projects.slice(0, 4).map((p, i) => ({
  src: `/gothic-thumb-${i + 1}.png`,
  project: p,
}));

/* ── Corner ornament helper ─────────────────────────────────── */
function CornerOrnaments({ cls = "gv-card-corner" }: { cls?: string }) {
  return (
    <>
      <span className={`${cls} tl`} />
      <span className={`${cls} tr`} />
      <span className={`${cls} bl`} />
      <span className={`${cls} br`} />
    </>
  );
}

/* ── RIGHT INFO PANEL ────────────────────────────────────────── */
function InfoPanel({ project }: { project: typeof projects[0] | undefined }) {
  if (!project) return null;
  return (
    <div className="gv-info-panel">
      <CornerOrnaments cls="gv-panel-corner" />

      <div className="gv-panel-header">
        <span className="gv-panel-eyebrow">— Currently Inspecting —</span>
        <h2 className="gv-panel-title">{project.title}</h2>
      </div>

      <div className="gv-panel-body">
        <p className="gv-panel-text">{project.description}</p>

        <div className="gv-panel-tags">
          {project.tags.map((t) => (
            <span key={t} className="gv-panel-tag">{t}</span>
          ))}
        </div>

        <div className="gv-panel-divider" />

        <div className="gv-panel-section">
          <span className="gv-panel-section-title">Arcane Stones</span>
          <ul className="gv-panel-list">
            {project.techStack.slice(0, 5).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="gv-panel-divider" />

        <div className="gv-panel-section">
          <span className="gv-panel-section-title">Grimoire — Capabilities</span>
          <ul className="gv-panel-list">
            {project.features.slice(0, 4).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── CIRCULAR OVAL FRAME ─────────────────────────────────────── */
function OvalFrame({
  src,
  name,
  subtitle,
  selected,
  onClick,
}: {
  src: string;
  name: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`gv-oval-frame${selected ? " selected" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Select ${name}`}
    >
      <div className="gv-oval-img-wrap">
        <div className="gv-oval-clip">
          <Image src={src} alt={name} fill style={{ objectFit: "cover" }} sizes="160px" className="gv-oval-img" />
        </div>
        <div className="gv-oval-border" />
        <div className="gv-oval-glow" />
        <div className="gv-oval-dot" />
      </div>
      <div className="gv-oval-label">
        <span className="gv-oval-name">{name}</span>
        <span className="gv-oval-sub">{subtitle}</span>
      </div>
    </div>
  );
}

/* ── PROJECT CARD ────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <div className="gv-card" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onClick()}>
      <CornerOrnaments />

      {/* Header */}
      <div className="gv-card-header">
        <span className="gv-card-eyebrow">
          Vol. {["I","II","III","IV","V","VI"][index] ?? index + 1} · {project.tags[0]}
        </span>
        <h3 className="gv-card-title">{project.title}</h3>
        <p className="gv-card-subtitle">{project.tags.slice(0, 3).join(" · ")}</p>
      </div>

      {/* Body */}
      <div className="gv-card-body">
        <p className="gv-card-desc">{project.description}</p>
        <div className="gv-card-rule" />
        <p className="gv-card-desc-long">
          {project.detailedDescription.slice(0, 160)}
          {project.detailedDescription.length > 160 ? "…" : ""}
        </p>
        <div className="gv-card-tech">
          {project.techStack.slice(0, 5).map((t) => (
            <span key={t} className="gv-card-tech-item">{t}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="gv-card-footer">
        <span className="gv-card-status">
          <span className="gv-card-status-dot" />
          {project.status === "active" ? "Active" : "Archived"}
        </span>
        <div className="gv-card-btns">
          {project.links.visit && (
            <a
              href={project.links.visit}
              target="_blank"
              rel="noopener noreferrer"
              className="gv-btn primary"
              onClick={(e) => e.stopPropagation()}
            >
              Visit
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gv-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   PAGE ROOT
   ════════════════════════════════════════════════════════════════ */
export default function ProjectsPage() {
  const router = useRouter();
  const [tag, setTag] = useState("All");
  const [selectedReel, setSelectedReel] = useState(0);

  const filtered = projects.filter(
    (p) => tag === "All" || p.tags.includes(tag)
  );

  const featuredProject = REEL_THUMBS[selectedReel]?.project ?? projects[0] ?? null;

  return (
    <div className="gv-page">
      {/* ── Background layers ─────────────────────────────────── */}
      <div className="gv-bg" aria-hidden="true" />
      <div className="gv-map-lines" aria-hidden="true" />
      <div className="gv-vignette" aria-hidden="true" />

      <div className="gv-content">
        <div className="gv-glass-wrap">


        {/* ── Hero Section ────────────────────────────────────── */}
        <section
          className="gv-hero fade-up"
          style={{ animationDelay: "0.1s" }}
          aria-label="Featured project"
        >
          {/* Gothic mansion image */}
          <div className="gv-hero-frame">
            <Image
              src="/gothic-manor.png"
              alt="The Gothic Manor — Compendium of Works"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 65vw"
              className="gv-hero-img"
            />
            <div className="gv-hero-overlay" aria-hidden="true" />
            <div className="gv-hero-border" aria-hidden="true" />
            <CornerOrnaments cls="gv-hero-corner" />
            <span className="gv-hero-label">The Architectural Compendium · Wilson Ramropui</span>
          </div>

          {/* Right info panel */}
          <InfoPanel project={featuredProject} />
        </section>

        {/* ── Circular Reel ───────────────────────────────────── */}
        <section
          className="gv-reel-section fade-up"
          style={{ animationDelay: "0.2s" }}
          aria-label="Featured works reel"
        >
          <div className="gv-reel-head">
            <span className="gv-reel-title">— Current Endeavours —</span>
            <div className="gv-reel-line" />
            <div className="gv-reel-icons">
              <button className="gv-reel-icon-btn" aria-label="Grid view">⊞</button>
              <button className="gv-reel-icon-btn" aria-label="List view">☰</button>
            </div>
          </div>

          <div className="gv-reel-track">
            {REEL_THUMBS.map((item, i) => (
              <OvalFrame
                key={i}
                src={item.src}
                name={item.project.title}
                subtitle={item.project.tags.slice(0, 2).join(" · ")}
                selected={selectedReel === i}
                onClick={() => setSelectedReel(i)}
              />
            ))}
            {/* Extra from projects[4] */}
            {projects[4] && (
              <OvalFrame
                src="/gothic-thumb-1.png"
                name={projects[4].title}
                subtitle={projects[4].tags.slice(0, 2).join(" · ")}
                selected={false}
                onClick={() => router.push(`/projects/${projects[4].slug}`)}
              />
            )}
          </div>
        </section>

        {/* ── Project Cards Grid ──────────────────────────────── */}
        <section
          className="gv-grid-section fade-up"
          style={{ animationDelay: "0.3s" }}
          aria-label="All projects"
        >
          <div className="gv-grid">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
                onClick={() => router.push(`/projects/${project.slug}`)}
              />
            ))}
          </div>
        </section>

        {/* ── Bottom Strip ────────────────────────────────────── */}
        <div className="gv-bottom-strip fade-up" style={{ animationDelay: "0.4s" }}>
          <button
            className="gv-atlas-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Return to Atlas"
          >
            <span className="gv-atlas-icon">⬡</span>
            Atlas
          </button>

          <span className="gv-count-label">
            {filtered.length} {filtered.length === 1 ? "Structure" : "Structures"} Unearthed
          </span>

          <button className="gv-archive-btn" aria-label="View archive">
            Archive ◆
          </button>
        </div>

        </div>{/* /gv-glass-wrap */}

      </div>
    </div>
  );
}
