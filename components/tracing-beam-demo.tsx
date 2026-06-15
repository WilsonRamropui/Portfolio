"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative min-h-[1000px]">
        {/* Your content goes here. The beam will trace alongside this container. */}
      </div>
    </TracingBeam>
  );
}
