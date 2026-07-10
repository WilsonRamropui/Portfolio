import React from "react";
import Link from "next/link";
import { aboutPageStyles as s } from "@/styles/dummy-styles";
import "../projects/projects.css";
import { Mail, FileText } from "lucide-react";
import { MetallicCard } from "@/components/MetallicCard";
import { SweepButton } from "@/components/SweepButton";
import { CinematicBackground } from "@/components/CinematicBackground";

export default function About() {
  const interests = [
    "Structural Engineering",
    "BIM & 3D Modeling",
    "Parametric Design",
    "AutoCAD & Revit Workflows",
    "AI & Machine Learning", 
    "System Architecture", 
    "Open Source", 
    "UI/UX Design", 
    "Tech Content Creation"
  ];

  return (
    <div className={s.pageContainer}>
      <CinematicBackground className="prj-bg-image" />
      <div className="prj-bg-vignette" aria-hidden="true" />

      <div className={`${s.contentWrapper} w-full max-w-6xl mx-auto`}>
        <div className="z-10 relative">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-6 mb-4 lg:mb-0 -mt-12 md:mt-0">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-100 font-cinzel text-center lg:w-[380px]">About Me</h1>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-end gap-3 w-full lg:w-auto">
              <Link href="/resume.pdf" target="_blank" className={`${s.primaryButton} flex items-center justify-center gap-2`}>
                <FileText className="w-4 h-4" />
                Resume
              </Link>
              <Link href="/contact" className="flex w-full sm:w-auto">
                <SweepButton className="w-full flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Let&apos;s Connect
                </SweepButton>
              </Link>
              <Link href="/projects" className="flex w-full sm:w-auto">
                <SweepButton className="w-full flex items-center justify-center">
                  View My Work
                </SweepButton>
              </Link>
            </div>
          </div>

          {/* Main Content Split */}
          <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start w-full">
            
            {/* Left Side: Card (Scaled for mobile) */}
            <div className="w-full max-w-sm lg:w-[380px] flex-shrink-0 flex justify-center lg:sticky lg:top-24">
              <div className="w-full transform scale-90 sm:scale-100 lg:scale-100 origin-top lg:origin-top-left transition-transform">
                <MetallicCard name="WILSON RAMROPUI" />
              </div>
            </div>
            
            {/* Right Side: Text Content */}
            <div className="flex-1 space-y-10 lg:space-y-12 w-full px-2 sm:px-0">
              <section>
                <h2 className={`${s.sectionHeading} font-cinzel text-center lg:text-left`}>Who I am</h2>
                <p className={`${s.paragraph} text-center lg:text-left mx-auto lg:mx-0`}>
                  I&apos;m Wilson Ramropui. I&apos;m a civil engineer by trade, but I also have a deep passion for computer science and software development. I&apos;ve always been fascinated by how things are built, whether it&apos;s a physical structure or a complex codebase.
                </p>
              </section>

              <section>
                <h2 className={`${s.sectionHeading} font-cinzel text-center lg:text-left`}>What I do</h2>
                <p className={`${s.paragraph} text-center lg:text-left mx-auto lg:mx-0`}>
                  Currently, I work as a Design Engineer. My day-to-day involves drafting floor plans and creating structural designs. But my work doesn&apos;t stop there—I also write code. I love taking the same detail-oriented, logical approach I use in architecture and applying it to building software.
                </p>
              </section>

              <section>
                <h2 className={`${s.sectionHeading} font-cinzel text-center lg:text-left`}>My Journey</h2>
                <p className={`${s.paragraph} text-center lg:text-left mx-auto lg:mx-0`}>
                  My background is rooted in civil engineering, where I learned the fundamentals of structural design. Along the way, I started teaching myself programming languages because I was drawn to technology. What started as a curiosity quickly grew into a serious skill set. Today, I do a bit of both—designing real-world structures and writing code for the digital one.
                </p>
              </section>
            </div>
          </div>


          {/* Interests Section */}
          <div className="mt-12 lg:mt-16 text-center lg:text-left">
            <h2 className={s.sectionHeading}>Interests</h2>
            <div className={`${s.interestsContainer} justify-center lg:justify-start mt-6`}>
              {interests.map((interest, idx) => (
                <React.Fragment key={idx}>
                  <span className={s.interestItem}>{interest}</span>
                  {idx < interests.length - 1 && (
                    <span className={s.interestSeparator}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}