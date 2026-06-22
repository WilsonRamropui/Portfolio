"use client";
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import useDetectBrowser from "@/hooks/use-detect-browser"
import useScreenSize from "@/hooks/use-screen-size"
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter"

const TAB_CONTENT = [
  {
    title: "2026",
    files: [
      "tec-design-blueprints.pdf",
      "consultancy-projects.md",
      "civil-engineering-notes.txt",
    ],
  },
  {
    title: "2025",
    files: [
      "nielit-ai-ml-model.py",
      "cyber-security-audit.md",
      "iot-drone-control.cpp",
      "blockchain-ledger.js",
    ],
  },
  {
    title: "2024",
    files: [
      "btech-graduation-thesis.pdf",
      "structural-analysis.md",
      "fluid-mechanics-lab.md",
      "civil-engineering-finals.md",
    ],
  },
  {
    title: "2023",
    files: [
      "cad-modeling-basics.dwg",
      "material-science-report.pdf",
      "surveying-field-data.csv",
      "first-coding-project.md",
    ],
  },
]

export default function GooeyDemo() {
  const [activeTab, setActiveTab] = useState(0)
  const screenSize = useScreenSize()

  return (
    <div className="relative w-full h-full font-sans bg-transparent">
      <GooeySvgFilter
        id="gooey-filter"
        strength={screenSize.lessThan("md") ? 8 : 15}
      />

      <div className="w-full relative h-full">
        {/* 1. BACKGROUND LAYER (Gooey Filtered) 
            Solid white shapes inside the SVG filter, then the whole layer 
            is made 8% opaque. This creates a flawless glass highlight morph! */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ 
            filter: "url(#gooey-filter)",
            opacity: 0.08 
          }}
        >
          <div className="flex w-full">
            {TAB_CONTENT.map((_, index) => (
              <div key={index} className="relative flex-1 h-12 md:h-14">
                {activeTab === index && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-white"
                    style={{ borderRadius: "16px 16px 0 0" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
          {/* Content panel background */}
          <div className="w-full h-[240px] md:h-[280px] bg-white" />
        </div>

        {/* 2. FOREGROUND LAYER (Text & Interaction) 
            This layer bypasses the SVG filter so text stays crystal clear. */}
        <div className="relative z-10 w-full flex flex-col h-full">
          {/* Tabs */}
          <div className="flex w-full">
            {TAB_CONTENT.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="flex-1 h-12 md:h-14 flex items-center justify-center transition-colors cursor-pointer"
                style={{
                  color: activeTab === index ? "#e8b84b" : "rgba(255,255,255,0.4)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  fontWeight: activeTab === index ? 600 : 400,
                  letterSpacing: "0.1em",
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="w-full h-[240px] md:h-[280px] overflow-hidden pointer-events-none">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 md:p-8 pointer-events-auto"
              >
                <ul className="space-y-1">
                  {TAB_CONTENT[activeTab].files.map((file) => (
                    <li
                      key={file}
                      className="border-b pt-3 pb-3"
                      style={{ 
                        borderColor: "rgba(255,255,255,0.1)", 
                        color: "#f0e6d0",
                        fontFamily: "'Crimson Text', Georgia, serif",
                        fontSize: "16px",
                        letterSpacing: "0.02em"
                      }}
                    >
                      {file}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  )
}
