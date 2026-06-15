import React from "react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { aboutPageStyles as s } from "@/styles/dummy-styles";
import { Mail, FileText } from "lucide-react";
import MagicBento from "@/components/MagicBento";
import { MetallicCard } from "@/components/MetallicCard";
import LogoLoop from "@/components/LogoLoop";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiPython, SiMongodb, SiPostgresql, 
  SiDocker
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techLogos = [
  { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs color="#5FA04E" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython color="#3776AB" />, title: "Python", href: "https://www.python.org" },
  { node: <SiMongodb color="#47A248" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql color="#4169E1" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiDocker color="#2496ED" />, title: "Docker", href: "https://www.docker.com" },
  { node: <FaAws color="#FF9900" />, title: "AWS", href: "https://aws.amazon.com" },
];

export default function About() {
  const interests = [
    "AI & Machine Learning", 
    "System Architecture", 
    "Open Source", 
    "UI/UX Design", 
    "Tech Content Creation"
  ];

  return (
    <div className={s.pageContainer}>
      <div className={s.backgroundContainer}>
        <BackgroundBeamsWithCollision className={s.backgroundEffect} />
      </div>

      <div className={`${s.contentWrapper} w-full max-w-6xl mx-auto`}>
        <div className="z-10 relative">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-6 mb-4 lg:mb-0">
            <h1 className={`${s.mainHeading} text-center lg:text-left`}>About Me</h1>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-end gap-3 w-full lg:w-auto">
              <Link href="/resume.pdf" target="_blank" className={`${s.primaryButton} flex items-center justify-center gap-2`}>
                <FileText className="w-4 h-4" />
                Resume
              </Link>
              <Link href="/contact" className={`${s.secondaryButton} justify-center`}>
                <Mail className="w-4 h-4" />
                Let's Connect
              </Link>
              <Link href="/projects" className={`${s.secondaryButton} justify-center`}>
                View My Work
              </Link>
            </div>
          </div>

          {/* Main Content Split */}
          <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start w-full">
            
            {/* Left Side: Card (Scaled for mobile) */}
            <div className="w-full max-w-sm lg:w-[380px] flex-shrink-0 flex justify-center lg:sticky lg:top-24">
              <div className="w-full transform scale-100 sm:scale-105 lg:scale-100 origin-top lg:origin-top-left transition-transform">
                <MetallicCard name="WILSON RAMROPUI" />
              </div>
            </div>
            
            {/* Right Side: Text Content */}
            <div className="flex-1 space-y-10 lg:space-y-12 w-full px-2 sm:px-0">
              <section>
                <h2 className={`${s.sectionHeading} text-center lg:text-left`}>Who I am</h2>
                <p className={`${s.paragraph} text-center lg:text-left mx-auto lg:mx-0`}>
                  I'm Wilson Ramropui, a passionate software engineer focused on building robust, scalable digital products. 
                  With a background spanning both design and systems architecture, I strive to create seamless user experiences backed by solid engineering.
                </p>
              </section>

              <section>
                <h2 className={`${s.sectionHeading} text-center lg:text-left`}>What I do</h2>
                <p className={`${s.paragraph} text-center lg:text-left mx-auto lg:mx-0`}>
                  Currently, I'm working as a Founding Engineer, where I specialize in bringing zero-to-one ideas to life. 
                  I focus heavily on the intersection of AI, design, and full-stack development to build modern software solutions that solve real problems.
                </p>
              </section>

              <section>
                <h2 className={`${s.sectionHeading} text-center lg:text-left`}>My Journey</h2>
                <p className={`${s.paragraph} text-center lg:text-left mx-auto lg:mx-0`}>
                  My coding journey started years ago with simple web pages, which quickly snowballed into building full-fledged applications. 
                  Over the past 5 years, I've had the opportunity to build products from scratch, raise funding, and scale applications for enterprise clients.
                </p>
              </section>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-16 lg:mt-24 w-full">
            <h2 className={`${s.sectionHeading} text-center lg:text-left`}>Tech Stack</h2>
            <div className="w-full relative overflow-hidden mt-6" style={{ height: '100px' }}>
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={48}
                gap={80}
                hoverSpeed={0}
                fadeOut
                ariaLabel="Technology stack logos"
              />
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

          {/* What I Offer Section */}
          <div className="mt-16 lg:mt-24 mb-12">
            <h2 className={`${s.sectionHeading} text-center`}>What I Offer</h2>
            <div className="mt-8 flex justify-center w-full overflow-hidden px-2 sm:px-0">
              <div className="w-full transform scale-[0.85] sm:scale-100 origin-top transition-transform">
                <MagicBento 
                  textAutoHide={true}
                  enableStars={true}
                  enableSpotlight={true}
                  enableBorderGlow={true}
                  enableTilt={true}
                  enableMagnetism
                  clickEffect={true}
                  spotlightRadius={500}
                  particleCount={12}
                  glowColor="132, 0, 255"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}