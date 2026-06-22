'use client';

import { useEffect, useRef, useState } from 'react';
import './PreLoader.css';

// ─────────────────────────────────────────────────────────────
// Timing (all in ms):
//
//   600ms  → typing starts
//   45ms   → ms per character  (fast, crisp, satisfying)
//   22 ch  → 600 + 22×45 = 1590ms → phrase fully typed
//   ~1910ms → hold time (phrase is read)
//   3500ms → fade-out fires (exactly 3.5s)
//   4250ms → component removed from DOM (3500 + 750ms transition)
// ─────────────────────────────────────────────────────────────
const FADE_AFTER         = 800;  // ms — very fast (0.8s)
const REMOVE_AFTER       = 2300; // ms — 800 + 1500ms cinematic exit transition

// Particle config type
type Particle = { id: number; left: string; bottom: string; dur: string; delay: string; drift: string; };

function makeParticles(): Particle[] {
  return Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left:  `${5 + Math.random() * 90}%`,
    bottom:`${5 + Math.random() * 30}%`,
    dur:   `${3 + Math.random() * 4}s`,
    delay: `${Math.random() * 3}s`,
    drift: `${(Math.random() - 0.5) * 60}px`,
  }));
}

// ─────────────────────────────────────────────────────────────
// Reload detection via performance.timeOrigin fingerprint.
//
// performance.timeOrigin is a unique high-resolution timestamp
// minted fresh on every real browser page load / F5 / Ctrl+R.
// It does NOT change during Next.js client-side navigation
// (the JS runtime stays alive between route changes).
//
// Logic:
//   stored fingerprint ≠ current → real reload → show preloader
//   stored fingerprint = current → in-app nav  → skip
// ─────────────────────────────────────────────────────────────
const SHOW_FLAG = 'wilson_show_preloader';
const FP_KEY    = 'wilson_load_fp';

function isRealPageLoad(): boolean {
  if (typeof window === 'undefined') return false;
  const stored  = sessionStorage.getItem(FP_KEY);
  const current = String(Math.round(performance.timeOrigin));
  sessionStorage.setItem(FP_KEY, current);
  return stored !== current;
}

export default function PreLoader() {
  // Start as visible — renders on first paint with no flash
  // We'll hide it synchronously in useEffect if not needed
  const [visible,   setVisible]   = useState(true);
  const [fadeOut,   setFadeOut]   = useState(false);
  const [mounted,   setMounted]   = useState(false);
  // Particles generated client-side only to avoid hydration mismatch
  const [particles, setParticles] = useState<Particle[]>([]);

  const fadeTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const removeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    setParticles(makeParticles());

    // Always snap to top — preloader should start from the very top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (!isRealPageLoad()) {
      // Not a real reload — hide immediately with no animation
      document.documentElement.classList.remove('preloading');
      setVisible(false);
      return;
    }

    setVisible(true);

    // ── Fade-out at exactly 3.5s ───────────────────────────────
    fadeTimer.current = setTimeout(() => {
      setFadeOut(true);
      // Remove preloading class so page content becomes visible
      // as the preloader fades out (not after it's fully gone)
      document.documentElement.classList.remove('preloading');
    }, FADE_AFTER);

    // ── Remove from DOM after exit transition ──────────────────
    removeTimer.current = setTimeout(() => {
      setVisible(false);
    }, REMOVE_AFTER);

    return () => {
      if (fadeTimer.current)    clearTimeout(fadeTimer.current);
      if (removeTimer.current)  clearTimeout(removeTimer.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`preloader-overlay${fadeOut ? ' fade-out' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* ── Center: W + WILSON + PORTFOLIO + divider ── */}
      <div className="preloader-center">
        <div className="preloader-monogram-wrapper">
          {/* Pulsing glow halo — scale+opacity only, static box-shadow */}
          <div className="preloader-ring-glow" />
          <span className="preloader-monogram">W</span>
        </div>

        <h1 className="preloader-name">Wilson</h1>
        <p  className="preloader-sub">Portfolio</p>
        <div className="preloader-divider" />
      </div>

      {/* ── Particles — translate+opacity only ── */}
      <div className="preloader-particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="preloader-particle"
            style={{
              left:      p.left,
              bottom:    p.bottom,
              '--dur':   p.dur,
              '--delay': p.delay,
              '--drift': p.drift,
            } as React.CSSProperties}
          />
        ))}
      </div>



      {/* ── Progress bar (bottom edge) ── */}
      <div className="preloader-progress" />
    </div>
  );
}
