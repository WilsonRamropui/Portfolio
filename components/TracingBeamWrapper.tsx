"use client";

import { usePathname } from "next/navigation";
import { TracingBeam } from "@/components/ui/tracing-beam";

const hiddenPaths = ["/about", "/experience", "/contact"];

export function TracingBeamWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHidden = hiddenPaths.includes(pathname);

  if (isHidden) {
    return (
      <div className="w-full max-w-5xl px-6 md:px-12 mx-auto">
        {children}
      </div>
    );
  }

  return (
    <TracingBeam className="w-full max-w-5xl px-6 md:px-12">
      {children}
    </TracingBeam>
  );
}
