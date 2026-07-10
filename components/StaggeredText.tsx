"use client";

import { motion } from "framer-motion";
import React from "react";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function StaggeredText({ text, className = "", delay = 0 }: StaggeredTextProps) {
  // Split into words, then characters, preserving spaces
  const words = text.split(" ").map((word, wordIdx) => {
    return (
      <span key={wordIdx} className="inline-block whitespace-nowrap">
        {word.split("").map((char, charIdx) => {
          return (
            <motion.span
              key={`${wordIdx}-${charIdx}`}
              className="inline-block"
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + (wordIdx * 0.1) + (charIdx * 0.03),
              }}
            >
              {char}
            </motion.span>
          );
        })}
        {/* Add space after word unless it's the last word */}
        <span className="inline-block">&nbsp;</span>
      </span>
    );
  });

  return (
    <h1 className={className} aria-label={text}>
      {words}
    </h1>
  );
}
