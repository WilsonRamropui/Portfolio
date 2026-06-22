import React from "react";
import "./AnimatedStrokeText.css";
import { cn } from "@/lib/utils";

interface AnimatedStrokeTextProps {
  /**
   * The text to display with the animated stroke effect
   */
  text: string;
  /**
   * Additional classes for the text element
   */
  className?: string;
  /**
   * Additional classes for the svg container
   */
  svgClassName?: string;
}

export function AnimatedStrokeText({
  text,
  className,
  svgClassName,
}: AnimatedStrokeTextProps) {
  return (
    <svg
      viewBox="0 0 1200 350"
      className={cn("animated-stroke-svg", svgClassName)}
    >
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        className={cn("animated-stroke-text", className)}
      >
        {text}
      </text>
    </svg>
  );
}
