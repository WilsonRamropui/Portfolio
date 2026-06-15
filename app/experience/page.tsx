import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timelineStyles as s } from "@/styles/dummy-styles";
import { Monitor } from "lucide-react";
import Ferrofluid from "@/components/Ferrofluid";

export default function Experience() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div className="relative p-6 md:p-8 rounded-3xl bg-zinc-950/20 backdrop-blur-3xl backdrop-saturate-[1.5] border border-white/10 border-t-white/30 border-l-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-zinc-950/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_0_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/40 pointer-events-none rounded-3xl" />
          <h4 className="relative text-xl md:text-2xl font-bold text-zinc-100 mb-2">Lebsack Ltd Group</h4>
          <p className="relative text-zinc-400 mb-4">
            Managing IT services, overseeing cloud infrastructure, and ensuring high-availability systems for enterprise clients.
          </p>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-sm text-zinc-300">Cloud Migration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-sm text-zinc-300">System Architecture</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div className="relative p-6 md:p-8 rounded-3xl bg-zinc-950/20 backdrop-blur-3xl backdrop-saturate-[1.5] border border-white/10 border-t-white/30 border-l-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-zinc-950/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_0_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/40 pointer-events-none rounded-3xl" />
          <h4 className="relative text-xl md:text-2xl font-bold text-zinc-100 mb-2">Keebler-Brown Inc</h4>
          <p className="relative text-zinc-400 mb-4">
            Designing professional gym environments, developing internal booking systems, and creating digital fitness experiences.
          </p>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="text-sm text-zinc-300">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span className="text-sm text-zinc-300">Full-Stack Dev</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={`${s.container} relative overflow-hidden bg-black`}>
      <div className="absolute inset-0 z-0 opacity-50">
        <Ferrofluid
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          speed={0.2}
          scale={1}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.14}
          sharpness={3}
          shimmer={1}
          glow={2}
          flowDirection="left"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.3}
        />
      </div>

      <div className={`${s.innerContainer} relative z-10 pointer-events-none`}>
        <div className="pointer-events-auto">
          <div className="mb-10">
            <h1 className={s.mainTitle}>Experience</h1>
            <p className={s.mainParagraph}>My career journey and professional experience.</p>
          </div>
          
          <Timeline data={data} />

          <div className="mt-20">
            <div className={s.techSectionHeader}>
              <div className={s.techSectionIconContainer}>
                <Monitor className={s.techSectionIcon} />
              </div>
              <div>
                <h2 className={s.techSectionTitle}>Tech Stack</h2>
                <p className={s.techSectionSubtitle}>Technologies I work with daily</p>
              </div>
            </div>
            
            <div className={s.techGrid}>
              {[
                { title: "Frontend", content: "React, Next.js, Tailwind CSS, TypeScript" },
                { title: "Backend", content: "Node.js, Express, Python, Django" },
                { title: "Database", content: "MongoDB, PostgreSQL, Redis" },
                { title: "DevOps", content: "Docker, AWS, CI/CD, Git" },
              ].map((tech, idx) => (
                <div key={idx} className={s.techCard}>
                  <h3 className={s.techCardTitle}>{tech.title}</h3>
                  <p className={s.techCardContent}>{tech.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
