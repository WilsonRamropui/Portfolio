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

interface SoftwareItem {
  name: string;
  type: string;
  pct: number;
  icon: string;
  fallback: string;
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  tags?: string[];
  softwareItems?: SoftwareItem[];
  accent?: string;
}

/* ================================================================
   SOFTWARE CARD ITEM
   ================================================================ */
function SoftwareCardItem({ s }: { s: SoftwareItem }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
      setImgFailed(true);
    }
  }, []);

  return (
    <div className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors group relative overflow-hidden w-full mt-2">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-md bg-black/20 border border-white/5 shadow-inner overflow-hidden">
        {!imgFailed ? (
          <img
            ref={imgRef}
            src={s.icon}
            alt=""
            width={24}
            height={24}
            className="object-contain"
            onError={() => setImgFailed(true)}
            loading="lazy"
          />
        ) : (
          <span className="text-[1.2rem] leading-none opacity-80">{s.fallback}</span>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <div className="font-[family-name:var(--font-heading)] text-[13px] font-semibold text-white/90 tracking-wider uppercase truncate group-hover:text-white transition-colors">{s.name}</div>
          <div className="font-[family-name:var(--font-heading)] text-[9px] font-bold tracking-widest text-[#a1a1aa] opacity-40 group-hover:opacity-100 transition-opacity">{Math.round(s.pct * 100)}%</div>
        </div>
        <div className="font-serif text-[11px] italic tracking-wide text-[#71717a] mb-1.5 truncate group-hover:text-[#a1a1aa] transition-colors">{s.type}</div>
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-white/10 via-white/50 to-white/90 shadow-[0_0_8px_rgba(255,255,255,0.15)] origin-left transition-transform duration-1000 ease-out"
            style={{ transform: `scaleX(${s.pct})` }}
          />
        </div>
      </div>
    </div>
  );
}

const GridItem = ({ area, icon, title, description, tags, softwareItems, accent }: GridItemProps) => {
  return (
    <li className={`list-none ${area}`}>
      <div
        className="relative h-full"
        style={{
          /* Dark frosted glass — near-black translucent base */
          background: "linear-gradient(135deg, rgba(30,30,30,0.55) 0%, rgba(10,10,10,0.75) 100%)",
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
          clipPath: "polygon(0 0, 100% 0, 100% 6px, 6px 6px, 6px 100%, 0 100%)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H24V1.5H1.5V24H0V0Z' fill='rgba(255,255,255,0.25)' /%3E%3Cpath d='M4.5 6H24V4.5H4.5V24H6V6Z' fill='rgba(0,0,0,0.9)' /%3E%3Cpath d='M1.5 1.5H22.5V2.5H2.5V22.5H1.5V1.5Z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%", transform: "rotate(0deg)"
        }} />
        <div style={{
          position: "absolute", top: -2, right: -2, width: 24, height: 24, zIndex: 10, pointerEvents: "none",
          clipPath: "polygon(0 0, 100% 0, 100% 6px, 6px 6px, 6px 100%, 0 100%)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H24V1.5H1.5V24H0V0Z' fill='rgba(255,255,255,0.25)' /%3E%3Cpath d='M4.5 6H24V4.5H4.5V24H6V6Z' fill='rgba(0,0,0,0.9)' /%3E%3Cpath d='M1.5 1.5H22.5V2.5H2.5V22.5H1.5V1.5Z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%", transform: "rotate(90deg)"
        }} />
        <div style={{
          position: "absolute", bottom: -2, left: -2, width: 24, height: 24, zIndex: 10, pointerEvents: "none",
          clipPath: "polygon(0 0, 100% 0, 100% 6px, 6px 6px, 6px 100%, 0 100%)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H24V1.5H1.5V24H0V0Z' fill='rgba(255,255,255,0.25)' /%3E%3Cpath d='M4.5 6H24V4.5H4.5V24H6V6Z' fill='rgba(0,0,0,0.9)' /%3E%3Cpath d='M1.5 1.5H22.5V2.5H2.5V22.5H1.5V1.5Z' fill='rgba(255,255,255,0.05)' /%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%", transform: "rotate(270deg)"
        }} />
        <div style={{
          position: "absolute", bottom: -2, right: -2, width: 24, height: 24, zIndex: 10, pointerEvents: "none",
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
            {softwareItems && softwareItems.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "8px" }}>
                {softwareItems.map((s) => (
                  <SoftwareCardItem key={s.name} s={s} />
                ))}
              </div>
            ) : tags && tags.length > 0 && (
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start">
      
      {/* Left Column */}
      <ul className="flex flex-col gap-4 w-full m-0 p-0">
        {/* Technical Drafting (First) */}
        <GridItem
          area=""
        icon={<Layers className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Technical Drafting"
        accent="Precision"
        description="Precision 2D documentation for construction sets, shop drawings, coordination drawings, and as-built records."
        softwareItems={[
          { name: "AutoCAD", type: "CAD Drafting", pct: 0.95, icon: "https://img.icons8.com/color/96/autocad.png", fallback: "📐" },
          { name: "AutoCAD Civil 3D", type: "Civil Design", pct: 0.76, icon: "https://img.icons8.com/color/96/autocad.png", fallback: "🛣️" },
        ]}
      />

        {/* Architectural Design (Second) */}
        <GridItem
          area=""
        icon={<PenTool className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Architectural Design (BIM)"
        accent="Core"
        description="From concept massing to full construction documentation — floor plans, sections, elevations, and 3D spatial modelling."
        softwareItems={[
          { name: "Autodesk Revit", type: "BIM Software", pct: 0.90, icon: "https://img.icons8.com/color/96/autodesk-revit.png", fallback: "🏢" },
          { name: "SketchUp", type: "3D Modelling", pct: 0.88, icon: "https://img.icons8.com/color/96/google-sketchup.png", fallback: "🧊" },
        ]}
      />
      </ul>

      {/* Right Column */}
      <ul className="flex flex-col gap-4 w-full m-0 p-0">
        {/* 3D Visualisation (Third) */}
        <GridItem
          area=""
        icon={<Eye className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="3D Visualisation & Rendering"
        accent="Creative"
        description="Photorealistic renders and real-time walkthroughs that communicate design intent with cinematic quality. Every pixel reflects a design decision."
        softwareItems={[
          { name: "V-Ray", type: "Rendering Engine", pct: 0.82, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/V-Ray_logo.svg/240px-V-Ray_logo.svg.png", fallback: "🌟" },
          { name: "Enscape", type: "Real-Time Render", pct: 0.85, icon: "https://img.icons8.com/color/96/enscape--v1.png", fallback: "✨" },
          { name: "3ds Max", type: "3D Visualisation", pct: 0.78, icon: "https://img.icons8.com/color/96/3ds-max.png", fallback: "🌌" },
          { name: "Lumion", type: "Arch Visualisation", pct: 0.75, icon: "https://img.icons8.com/color/96/lumion.png", fallback: "🌿" },
        ]}
      />

        {/* Structural Engineering (Fourth) */}
        <GridItem
          area=""
        icon={<Cpu className="h-4 w-4 md:h-5 md:w-5" style={{ color: "#aaaaaa" }} />}
        title="Structural Engineering"
        accent="Analysis"
        description="Computational analysis of frames, beams, slabs, and foundations. Ensuring safety and efficiency through engineering precision."
        softwareItems={[
          { name: "ETABS", type: "Structural Analysis", pct: 0.80, icon: "https://img.icons8.com/color/96/structural-analysis.png", fallback: "⚙️" },
        ]}
      />
      </ul>

    </div>
  );
}
