"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export default function LayoutTextFlipDemo() {
  return (
    <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left w-full">
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center md:justify-start md:items-start gap-4 text-center md:text-left sm:mx-0 sm:mb-0 sm:flex-row w-full">
        <LayoutTextFlip
          text="Welcome "
          words={["To My Page", "Feel Free To Explore"]}
        />
      </motion.div>

    </div>
  );
}
