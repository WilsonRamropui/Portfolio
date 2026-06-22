"use client";

import {
  Cpu,
  Layers,
  Eye,
  PenTool,
  ClipboardList,
  Leaf,
} from "lucide-react";
import React from "react";

/* ================================================================
   CE DISCIPLINES — Gothic Victorian Corner-Bracket Panel Design
   Matches the projects page info-panel / card corner aesthetic.
   ================================================================ */

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  tags?: string[];
  accent?: string;
}

const GridItem = ({ area, icon, title, description, tags, accent }: GridItemProps) => {
  return (
    <li className={`min-h-[9rem] sm:min-h-[11rem] md:min-h-[15rem] list-none ${area}`}>
      <div
        className="relative h-full"
        style={{
          /* Dark frosted glass — near-black translucent base */
          background: "linear-gradient(135deg, rgba(30,30,30,0.55) 0%, rgba(10,10,10,0.75) 100%)",
          backdropFilter: "blur(40px) saturate(1.4)",
          WebkitBackdropFilter: "blur(40px) saturate(1.4)",
          borderRadius: "0px",
          /* Outer edge: very thin dim rim */
          border: "1px solid rgba(255,255,255,0.08)",
          /* 3D glass thickness: bright top-left bevel + dark bottom-right shadow */
          boxShadow: `
            inset 1px 1px 0px rgba(255,255,255,0.18),
            inset -1px -1px 0px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.12),
            0 20px 60px rgba(0,0,0,0.7),
            0 4px 16px rgba(0,0,0,0.5)
          `,
          transition: "box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          overflow: "hidden",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = `
            inset 1px 1px 0px rgba(255,255,255,0.28),
            inset -1px -1px 0px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 32px 80px rgba(0,0,0,0.85),
            0 8px 24px rgba(0,0,0,0.6)
          `;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = `
            inset 1px 1px 0px rgba(255,255,255,0.18),
            inset -1px -1px 0px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.12),
            0 20px 60px rgba(0,0,0,0.7),
            0 4px 16px rgba(0,0,0,0.5)
          `;
        }}
      >
        {/* Top-left glass sheen highlight (key glassmorphism detail) */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "40%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
          borderRadius: "0px",
          pointerEvents: "none",
        }} />

        {/* ── 3D GLASS CORNER BRACKETS ── */}
        <div style={{
          position: "absolute", top: -2, left: -2, width: 24, height: 24, zIndex: 10, pointerEvents: "none",
          backdropFilter: "blur(20px) saturate(1.2)", WebkitBackdropFilter: "blur(20px) saturate(1.2)",
          clipPath: "polygon(0 0, 100% 0, 100% 6px, 6px 6px, 6px 100%, 0 100%)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H24V1.5H1.5V24H0V0Z' fill='rgba(255,255,255,0.25)' /%3E%3Cpath d='M4.5 6H24V4.5H4.5V24H6V6Z' fill='rgba(0,0,0,0.9)' /%3E%3Cpath d='M1.5 1.5H22.5V2.5H2.5V22.5H1.5V1.5Z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%", transform: "rotate(0deg)"
        }} />
        <div style={{
          position: "absolute", top: -2, right: -2, width: 24, height: 24, zIndex: 10, pointerEvents: "none",
          backdropFilter: "blur(20px) saturate(1.2)", WebkitBackdropFilter: "blur(20px) saturate(1.2)",
          clipPath: "polygon(0 0, 100% 0, 100% 6px, 6px 6px, 6px 100%, 0 100%)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H24V1.5H1.5V24H0V0Z' fill='rgba(255,255,255,0.25)' /%3E%3Cpath d='M4.5 6H24V4.5H4.5V24H6V6Z' fill='rgba(0,0,0,0.9)' /%3E%3Cpath d='M1.5 1.5H22.5V2.5H2.5V22.5H1.5V1.5Z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%", transform: "rotate(90deg)"
        }} />
        <div style={{
          position: "absolute", bottom: -2, left: -2, width: 24, height: 24, zIndex: 10, pointerEvents: "none",
          backdropFilter: "blur(20px) saturate(1.2)", WebkitBackdropFilter: "blur(20px) saturate(1.2)",
          clipPath: "polygon(0 0, 100% 0, 100% 6px, 6px 6px, 6px 100%, 0 100%)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H24V1.5H1.5V24H0V0Z' fill='rgba(255,255,255,0.25)' /%3E%3Cpath d='M4.5 6H24V4.5H4.5V24H6V6Z' fill='rgba(0,0,0,0.9)' /%3E%3Cpath d='M1.5 1.5H22.5V2.5H2.5V22.5H1.5V1.5Z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%", transform: "rotate(270deg)"
        }} />
        <div style={{
          position: "absolute", bottom: -2, right: -2, width: 24, height: 24, zIndex: 10, pointerEvents: "none",
          backdropFilter: "blur(20px) saturate(1.2)", WebkitBackdropFilter: "blur(20px) saturate(1.2)",
          clipPath: "polygon(0 0, 100% 0, 100% 6px, 6px 6px, 6px 100%, 0 100%)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H24V1.5H1.5V24H0V0Z' fill='rgba(255,255,255,0.25)' /%3E%3Cpath d='M4.5 6H24V4.5H4.5V24H6V6Z' fill='rgba(0,0,0,0.9)' /%3E%3Cpath d='M1.5 1.5H22.5V2.5H2.5V22.5H1.5V1.5Z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%", transform: "rotate(180deg)"
        }} />

        {/* Card content */}
        <div className="relative flex h-full flex-col justify-between gap-3 p-5 md:p-6"
          style={{ zIndex: 1 }}
        >
          {/* Top: icon + accent */}
          <div className="flex items-start justify-between">
            <div
              style={{
                width: "fit-content",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                padding: "8px 10px",
                backdropFilter: "blur(8px)",
              }}
            >
              {icon}
            </div>
            {accent && (
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#888888",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "3px 8px",
                  borderRadius: "3px",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {accent}
              </span>
            )}
          </div>

          {/* Bottom: title + desc + tags */}
          <div>
            <div style={{
              height: "1px",
              background: "linear-gradient(90deg, rgba(255,255,255,0.18), transparent)",
              marginBottom: "12px",
            }} />

            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#f0f0f0",
                marginBottom: "8px",
                lineHeight: 1.3,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                fontStyle: "italic",
                color: "#888888",
                lineHeight: 1.75,
                marginBottom: tags && tags.length > 0 ? "12px" : 0,
              }}
            >
              {description}
            </p>
            {tags && tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#999999",
                      borderRadius: "2px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default function GlowingEffectDemo() {
  return (
    <ul className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-3 gap-3 md:gap-4 w-full">

      {/* Row 1, Col 1-4 — Architectural Design */}
      <GridItem
        area="md:[grid-area:1/1/2/5]"
        icon={<PenTool className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Architectural Design"
        accent="Core"
        description="From concept massing to full construction documentation — floor plans, sections, elevations, and 3D spatial modelling."
        tags={["Revit", "AutoCAD", "SketchUp"]}
      />

      {/* Row 2, Col 1-4 — Structural Engineering */}
      <GridItem
        area="md:[grid-area:2/1/3/5]"
        icon={<Cpu className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Structural Engineering"
        accent="Analysis"
        description="Computational analysis of frames, beams, slabs, and foundations. Ensuring safety and efficiency through engineering precision."
        tags={["ETABS", "AutoCAD", "Structural Analysis"]}
      />

      {/* Row 1-2, Col 5-8 — 3D Visualisation (tall) */}
      <GridItem
        area="md:[grid-area:1/5/3/8]"
        icon={<Eye className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="3D Visualisation & Rendering"
        accent="Creative"
        description="Photorealistic renders and real-time walkthroughs that communicate design intent with cinematic quality. Every pixel reflects a design decision."
        tags={["V-Ray", "Enscape", "3ds Max", "Lumion"]}
      />

      {/* Row 1, Col 8-13 — Technical Drafting */}
      <GridItem
        area="md:[grid-area:1/8/2/13]"
        icon={<Layers className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Technical Drafting"
        accent="Precision"
        description="Precision 2D documentation for construction sets, shop drawings, coordination drawings, and as-built records."
        tags={["AutoCAD", "Civil 3D", "Revit"]}
      />

      {/* Row 2, Col 8-13 — Project Management */}
      <GridItem
        area="md:[grid-area:2/8/3/13]"
        icon={<ClipboardList className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Project Management"
        accent="Leadership"
        description="Full lifecycle management — scheduling, cost estimation, quantity surveying, and resource allocation across complex project environments."
        tags={["Primavera P6", "Excel", "MS Project"]}
      />

      {/* Row 3, full width — Sustainable Design */}
      <GridItem
        area="md:[grid-area:3/1/4/13]"
        icon={<Leaf className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Sustainable Design & Green Building"
        accent="Green"
        description="Integrating passive design strategies, daylighting analysis, and green building principles. Every project considers its environmental footprint — from material selection to energy performance and long-term resilience."
        tags={["BIM", "Energy Analysis", "Daylighting", "LEED", "Passive Design"]}
      />

    </ul>
  );
}
