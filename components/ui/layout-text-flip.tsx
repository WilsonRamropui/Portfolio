"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="font-cormorant-base text-xl font-medium tracking-wide text-zinc-200 md:text-2xl"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="relative inline-flex items-center justify-center overflow-hidden px-5 py-2 font-cormorant-base text-xl font-medium tracking-wide text-zinc-100 md:text-3xl"
        style={{
          backgroundColor: "rgba(20, 20, 20, 0.45)",
          backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.01) 35%, rgba(0, 0, 0, 0.5) 100%)",
          backdropFilter: "blur(12px) saturate(1.2)",
          WebkitBackdropFilter: "blur(12px) saturate(1.2)",
          borderRadius: "12px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), inset 2px 2px 4px rgba(255, 255, 255, 0.25), inset -3px -3px 6px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)"
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
