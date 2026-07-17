import React from 'react';
import Link from 'next/link';
import { homePageStyles } from '@/styles/dummy-styles';
import { Spotlight } from '@/components/ui/spotlight';
import { DynamicFloorPlan as FloorPlan3D } from '@/components/DynamicFloorPlan';

import "./tools/skills.css";
import { AnimatedStrokeText } from '@/components/AnimatedStrokeText';
import { SweepButton } from "@/components/SweepButton";
import { LayoutGrid } from "lucide-react";
import { CinematicBackground } from "@/components/CinematicBackground";
import { StaggeredText } from "@/components/StaggeredText";

export default function Home() {
  return (
    <div className={homePageStyles.container}>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 z-[10]" fill="rgba(255, 255, 255, 0.5)" />
      {/* ── CINEMATIC BACKGROUND ── */}
      <CinematicBackground className="skills-bg-image" />
      <div className="skills-bg-vignette" aria-hidden="true" />

      <div className="w-full flex justify-center mx-auto -mt-4 md:-mt-16 -mb-4 z-10 relative">
        <div className="w-full max-w-md px-4 sm:px-6 select-none">
          <AnimatedStrokeText
            text="Wilson"
            className="text-white mx-auto select-none pointer-events-none"
          />
        </div>
      </div>

      <main className={`${homePageStyles.heroSection} !max-w-none w-full relative z-10`}>


        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6 md:gap-8 lg:gap-20 xl:gap-32 lg:mt-16 xl:mt-20 px-4 lg:px-8">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-2xl lg:max-w-4xl xl:max-w-5xl mt-8 md:mt-12 lg:mt-0 lg:-translate-y-12 xl:-translate-y-16">
            <StaggeredText text="Building Design Products" className="skills-hero-title lg:!text-[clamp(24px,2.8vw,48px)] lg:whitespace-nowrap" delay={0.3} />

            <h2 className={`${homePageStyles.h2} lg:!text-[clamp(14px,1.3vw,24px)]`}>
              Engineering • Design
            </h2>



            <div className={`${homePageStyles.calloutCard.wrapper} lg:mb-6 lg:mt-2`}>
              <div className={homePageStyles.calloutCard.innerContainer}>
                <div className={homePageStyles.calloutCard.textContainer}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                  <span className={`${homePageStyles.calloutCard.text} lg:!text-[clamp(12px,1vw,16px)]`}>Available for new opportunities</span>
                </div>
              </div>
            </div>

            <p className={`${homePageStyles.paragraph} lg:!text-[clamp(14px,1.4vw,24px)] lg:leading-relaxed`}>
              I’m an end-to-end civil engineer. I turn conceptual designs ideas and thoughts into a complete master plans and blueprints (structural and architectural plans) to standing structures. Currently serving as a Design Engineer at{" "}
              TEC
              . I have successfully delivered over 15 residential, commercial and institutional building during my working time.
            </p>
          </div>

          {/* Right Column: 3D Floor Plan */}
          <div className="flex-1 w-full mt-0 lg:mt-0 flex justify-center lg:justify-end items-center lg:pr-4">
            <div className="flex flex-col-reverse lg:flex-col items-center">
              <FloorPlan3D />
              <div className="mb-6 sm:mb-10 lg:mb-0 lg:mt-12 w-full flex justify-center relative z-20 transform-gpu will-change-transform">
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
