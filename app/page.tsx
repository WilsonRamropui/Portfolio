import React from 'react';
import Link from 'next/link';
import { homePageStyles, spotlightStyles } from '@/styles/dummy-styles';
import { Spotlight } from '@/components/ui/spotlight';
import TextType from '@/components/TextType';
import ModelViewer from '@/components/ModelViewer';
import LayoutTextFlipDemo from '@/components/layout-text-flip-demo';
import GlowingEffectDemo from '@/components/glowing-effect-demo';
import { SplineSceneBasic } from '@/components/spline-scene-demo';
import { AnimatedStrokeText } from '@/components/AnimatedStrokeText';

export default function Home() {
  return (
    <div className={homePageStyles.container}>
      <Spotlight className={spotlightStyles.position} fill="#065a3eff" />
      <div className={homePageStyles.backgroundGrid.wrapper}>
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <div className={homePageStyles.gradientOverlay} />

      <div className="w-full flex justify-center mx-auto -mt-12 md:-mt-24 -mb-4 z-10">
        <div className="w-full max-w-md px-4 sm:px-6">
          <AnimatedStrokeText
            text="Wilson"
            className="text-white mx-auto"
          />
        </div>
      </div>

      <main className={homePageStyles.heroSection}>

        <div className="flex flex-col items-center md:items-start justify-center md:justify-start mb-2 h-[32px] md:h-[40px]">
          <TextType
            text={["I'm Wilson Ramropui", "A Design Engineer", "Building Cool Products"]}
            typingSpeed={120}
            deletingSpeed={50}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="font-raleway-dots text-lg md:text-2xl font-bold tracking-wide text-zinc-300"
          />
        </div>

        <h1 className={homePageStyles.h1}>
          Building Design Products
        </h1>

        <h2 className={homePageStyles.h2}>
          Engineering • Design • AI
        </h2>

        <div className="w-full flex justify-center md:justify-start mb-8 -mt-2">
          <LayoutTextFlipDemo />
        </div>

        <div className={homePageStyles.calloutCard.wrapper}>
          <div className={homePageStyles.calloutCard.innerContainer}>
            <div className={homePageStyles.calloutCard.textContainer}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
              <span className={homePageStyles.calloutCard.text}>Available for new opportunities</span>
            </div>
          </div>
        </div>

        <p className={homePageStyles.paragraph}>
          I turn fuzzy ideas into live Products (<em>quickly</em>) — full-stack AI Builder. Currently working as a Founding Engineer at{" "}
          <a className={homePageStyles.link} href="#">
            Invoice-AI
          </a>
          . I have built multiple products in past 5 years; raised $100K funding for my startup.
        </p>

        <div className={homePageStyles.article.wrapper}>
          <div className={homePageStyles.article.content}>
            <div className={homePageStyles.article.header}>
              <svg className={homePageStyles.article.headerIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Featured Work</span>
            </div>

            <div className="mt-6 w-full rounded-2xl overflow-hidden relative border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.3),0_20px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.3),0_40px_80px_-20px_rgba(0,0,0,0.8)] hover:border-white/[0.1]">
              {/* Top glass reflection */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {/* Bottom subtle glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              <ModelViewer
                url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                width="100%"
                height="400"
                autoRotate={false}
                enableMouseParallax={false}
                enableHoverRotation={false}
              />
            </div>

            <div className={homePageStyles.article.linkContainer}>
              <Link href="/projects" className={homePageStyles.article.link}>
                View Projects
                <svg className={homePageStyles.article.linkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto mt-12 mb-16">
          <GlowingEffectDemo />
        </div>

        <div className="w-full max-w-5xl mx-auto mt-12 mb-16 relative z-10">
          <SplineSceneBasic />
        </div>

      </main >
    </div >
  );
}
