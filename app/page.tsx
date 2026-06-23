import React from 'react';
import Link from 'next/link';
import { homePageStyles } from '@/styles/dummy-styles';
import { Spotlight } from '@/components/ui/spotlight';
import FloorPlan3D from '@/components/FloorPlan3D';
import "./tools/skills.css";
import { AnimatedStrokeText } from '@/components/AnimatedStrokeText';
import { SweepButton } from "@/components/SweepButton";
import { LayoutGrid } from "lucide-react";

export default function Home() {
  return (
    <div className={homePageStyles.container}>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 z-[10]" fill="rgba(255, 255, 255, 0.5)" />
      {/* ── CINEMATIC BACKGROUND ── */}
      <div className="skills-bg-image" style={{ transform: 'translateZ(0)', willChange: 'transform' }} aria-hidden="true" />
      <div className="skills-bg-vignette" style={{ transform: 'translateZ(0)', willChange: 'transform' }} aria-hidden="true" />

      {/* ── GRID OVERLAY ── */}
      <div className={`${homePageStyles.backgroundGrid.wrapper} !z-[2]`} style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" style={{ transform: 'translateZ(0)', willChange: 'transform' }} />
      </div>

      <div className="w-full flex justify-center mx-auto -mt-4 md:-mt-16 -mb-4 z-10 relative">
        <div className="w-full max-w-md px-4 sm:px-6 select-none">
          <AnimatedStrokeText
            text="Wilson"
            className="text-white mx-auto select-none pointer-events-none"
          />
        </div>
      </div>

      <main className={`${homePageStyles.heroSection} !max-w-none w-full relative z-10`}>


        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-2xl mt-6 md:mt-8 lg:mt-12">
            <h1 className="skills-hero-title">
              Building Design Products
            </h1>

            <h2 className={homePageStyles.h2}>
              Engineering • Design
            </h2>



            <div className={homePageStyles.calloutCard.wrapper}>
              <div className={homePageStyles.calloutCard.innerContainer}>
                <div className={homePageStyles.calloutCard.textContainer}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                  <span className={homePageStyles.calloutCard.text}>Available for new opportunities</span>
                </div>
              </div>
            </div>

            <p className={homePageStyles.paragraph}>
              I’m an end-to-end civil engineer. I turn conceptual designs ideas and thoughts into a complete master plans and blueprints (structural and architectural plans) to standing structures. Currently serving as a Design Engineer at{" "}
              TEC
              . I have successfully delivered over 15 residential, commercial and institutional building during my working time.
            </p>
            <div className={`${homePageStyles.article.linkContainer} mt-8`}>
              <Link href="/showcase" className={homePageStyles.article.link}>
                View Projects
                <svg className={homePageStyles.article.linkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Right Column: 3D Floor Plan */}
          <div className="flex-1 w-full mt-0 lg:mt-0 flex justify-center lg:justify-end items-center lg:pr-4">
            <div className="flex flex-col-reverse lg:flex-col items-center">
              <FloorPlan3D />
              <div className="mb-6 sm:mb-10 lg:mb-0 lg:mt-12 w-full flex justify-center z-20">
                <Link href="/showcase" className="flex w-full sm:w-auto">
                  <SweepButton className="w-full flex items-center justify-center gap-2 px-8">
                    <LayoutGrid className="w-4 h-4" />
                    View Showcase
                  </SweepButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </main >
    </div >
  );
}
