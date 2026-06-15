import React from 'react';
import Link from 'next/link';
import { homePageStyles, spotlightStyles } from '@/styles/dummy-styles';
import { Spotlight } from '@/components/ui/spotlight';
import TextType from '@/components/TextType';
import ModelViewer from '@/components/ModelViewer';

export default function Home() {
  return (
    <div className={homePageStyles.container}>
      <Spotlight className={spotlightStyles.position} fill="#065a3eff" />
      <div className={homePageStyles.backgroundGrid.wrapper}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <div className={homePageStyles.gradientOverlay} />

      <main className={homePageStyles.heroSection}>
        <div className="flex flex-col items-center justify-center mb-6 h-[72px]">
          <TextType 
            text={["I'm Wilson Ramropui", "Building Digital Products", "Founding Engineer"]}
            typingSpeed={120}
            deletingSpeed={50}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 font-serif"
          />
        </div>

        <h1 className={homePageStyles.h1}>
          Building Digital <span className={homePageStyles.spanInline}>Products</span>
        </h1>

        <h2 className={homePageStyles.h2}>
          Engineering • Design • AI
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

            <div className="mt-6 w-full rounded-2xl overflow-hidden relative border border-white/20 bg-white/5 backdrop-blur-xl shadow-[inset_0_2px_15px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[inset_0_2px_25px_rgba(255,255,255,0.15),0_30px_60px_rgba(0,0,0,0.7)] hover:border-white/30">
              <ModelViewer
                url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                width="100%"
                height={400}
                autoRotate={true}
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

      </main>
    </div>
  );
}
