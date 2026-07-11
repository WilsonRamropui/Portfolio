'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

/**
 * PageTransition — Cinema-grade instant swap
 * ────────────────────────────────────────────
 * Design rationale:
 *
 *  ❌ AnimatePresence mode="wait" (old approach):
 *     Old page fades OUT (240ms) → blank gap → new page fades IN (240ms)
 *     Total visible delay: ~480ms + a hard "blink" at the blank gap.
 *     Feels slow and cheap.
 *
 *  ✅ This approach — instant swap + enter-only fade:
 *     Old page disappears INSTANTLY (React unmounts it).
 *     New page fades in over 120ms from opacity 0 → 1.
 *     No blank gap. No double-animation. No blink.
 *     Feels like a premium SPA — instant yet smooth.
 *
 *  Why no y-axis movement?
 *     Vertical shifts during navigation cause the eye to track movement
 *     before reading content — adds perceived latency. Pure opacity is
 *     the fastest-feeling transition for multi-page apps.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.12,      // 120ms — barely perceptible, but smooth
        ease: 'easeOut',     // fast start, gentle settle — feels snappy
      }}
      style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', flex: 1, willChange: 'opacity' }}
    >
      {children}
    </motion.div>
  );
}
