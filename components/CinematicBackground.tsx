"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface CinematicBackgroundProps {
  className: string;
}

export function CinematicBackground({ className }: CinematicBackgroundProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Map mouse movement (-1 to 1) to a slight translation
  const translateX = useTransform(springX, [-1, 1], ["-25px", "25px"]);
  const translateY = useTransform(springY, [-1, 1], ["-25px", "25px"]);

  useEffect(() => {
    // Disable on touch devices for performance
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={className}
      style={{
        x: translateX,
        y: translateY,
        scale: 1.05, // Slight scale up to prevent edges from showing during parallax
      }}
      aria-hidden="true"
    />
  );
}
