"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect } from "react";
import { FiChevronDown, FiLoader } from "react-icons/fi";
import { DraftingCompass } from "lucide-react";
import { twMerge } from "tailwind-merge";

/**
    IMPORTANT!!
  
    This component requires the following CSS class to be present for the inner glow:
  
    .ai-glow-spill-mask {
      mask-image: radial-gradient(
        ellipse 100% 100% at 50% 50%,
        transparent 50%,
        black 100%
      );
    }
   */

const AIGradientCardDemo = () => {
  return (
    <AIGradientAnimationCard />
  );
};

export const AIGradientBorder = ({
  children,
  className,
  duration = 3,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) => {
  const turn = useMotionValue(0);

  useEffect(() => {
    animate(turn, 1, {
      ease: "linear",
      duration,
      repeat: Infinity,
    });
  }, [duration, turn]);

  // Full 360-degree metallic silver gradient
  const gradient = useMotionTemplate`conic-gradient(from ${turn}turn, #a8a8a8, #f5f5f5, #8a8a8a, #ffffff, #a8a8a8, #f5f5f5, #8a8a8a, #a8a8a8)`;

  return (
    <div className={twMerge("relative p-px", className)}>
      <motion.div
        style={{ backgroundImage: gradient }}
        className="absolute inset-0 rounded-[inherit]"
      />

      <div className="relative rounded-[inherit] overflow-hidden">
        <div className="relative bg-neutral-900 rounded-[inherit]">{children}</div>
      </div>
    </div>
  );
};

const AIGradientAnimationCard = () => {
  return (
    <AIGradientBorder className="mx-auto w-full max-w-sm rounded-3xl border border-neutral-700">
      <div className="grid gap-6 bg-neutral-900 p-4 pb-6">
        <Logo />
        <UserQuestion />
        <AITextOutput />
        <LoadingSpinner />
      </div>
    </AIGradientBorder>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <DraftingCompass className="w-8 h-8 text-neutral-50" />
      <span className="text-white font-bold tracking-wider uppercase text-sm">Design Engine</span>
    </div>
  );
};

const UserQuestion = () => {
  return (
    <div className="p-4 flex items-center gap-2 rounded-2xl border border-neutral-700 bg-neutral-950 hover:bg-neutral-900 transition-colors cursor-pointer">
      <div className="flex items-center justify-center size-6 rounded-full bg-emerald-500 text-[10px] font-bold text-white shrink-0">
        W
      </div>

      <p className="text-xs text-neutral-500 flex-1 line-clamp-2">
        Convert conceptual ideas into a master blueprint for the new commercial complex.
      </p>

      <FiChevronDown className="text-neutral-500 shrink-0" />
    </div>
  );
};

const AITextOutput = () => {
  return (
    <p className="text-sm leading-relaxed text-neutral-300">
      Analyzing conceptual designs... Transforming architectural thoughts into detailed blueprints. Structural load calculations and framing plans are being generated to ensure standing stability.
    </p>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex gap-2 items-center">
      <FiLoader className="text-emerald-500 animate-spin" />
      <p className="text-xs text-neutral-500">Rendering structural blueprints...</p>
    </div>
  );
};

export default AIGradientCardDemo;
