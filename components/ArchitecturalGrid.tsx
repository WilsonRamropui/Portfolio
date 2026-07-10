"use client";

import React from "react";

export function ArchitecturalGrid() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
      }}
      aria-hidden="true"
    />
  );
}
