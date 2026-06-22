"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { Lock, Activity, Fingerprint } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

interface MetallicCardProps {
  name?: string;
  role?: string;
  idNumber?: string;
}

// Card thickness in px — this controls the depth of the 3D model
const THICKNESS = 14;
const HALF = THICKNESS / 2;

// Chamfer size (must match the polygon clip-path below)
const CHAMFER = 24;
// Diagonal length of the chamfer face: 24√2 ≈ 34px
const CHAMFER_DIAG = Math.ceil(CHAMFER * Math.SQRT2);
// Translate offset to center each chamfer panel: CHAMFER/2 - CHAMFER_DIAG/2 ≈ -5
const CHAMFER_OFF = Math.round(CHAMFER / 2 - CHAMFER_DIAG / 2);

// Chamfered clip-path for front & back faces
const CLIP = "polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 24px 100%, 0 calc(100% - 24px), 0 24px)";
const chamferedPath = "M 24 0 L 336 0 L 360 24 L 360 544 L 336 568 L 24 568 L 0 544 L 0 24 Z";

const SciFiFrame = () => (
  <div className="absolute inset-0 pointer-events-none z-20">
    <svg viewBox="0 0 360 568" className="absolute inset-0 w-full h-full" fill="none">
      <path d={chamferedPath} stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
      <path d="M 32 12 L 328 12 L 348 32 L 348 536 L 328 556 L 32 556 L 12 536 L 12 32 Z"
        stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <path d="M 120 12 L 135 28 L 225 28 L 240 12"
        stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
      <path d="M 100 556 L 120 532 L 240 532 L 260 556"
        stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
      {[
        "M 12 45 L 12 80","M 45 12 L 80 12","M 348 45 L 348 80","M 315 12 L 280 12",
        "M 12 523 L 12 488","M 45 556 L 80 556","M 348 523 L 348 488","M 315 556 L 280 556",
      ].map((d, i) => <path key={i} d={d} stroke="rgba(255,255,255,0.50)" strokeWidth="2.5" />)}
      <text x="180" y="22" textAnchor="middle" fontFamily="monospace" fontSize="9"
        letterSpacing="3" fill="rgba(255,255,255,0.40)">#00001</text>
      <text x="180" y="551" textAnchor="middle" fontFamily="monospace" fontSize="10"
        fontWeight="bold" letterSpacing="4" fill="rgba(255,255,255,0.50)">3.472 WEHT</text>
    </svg>
  </div>
);

// ── Shared face base style ─────────────────────────────────────────────────
const FACE_BG = "linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 40%, #1e1e1e 70%, #2d2d2d 100%)";
const BACK_BG = "linear-gradient(215deg, #3a3a3a 0%, #2a2a2a 40%, #1e1e1e 70%, #2d2d2d 100%)";

const faceShared: React.CSSProperties = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden" as React.CSSProperties["backfaceVisibility"],
};

export const MetallicCard: React.FC<MetallicCardProps> = ({
  name = "ALEXANDER DOE",
  role = "DESIGN ENGINEER",
  idNumber = "8901-2345-6789",
}) => {
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  // Unbounded Y rotation (full 360° spin), clamped X tilt
  const rotY = useMotionValue(0);
  const rotX = useMotionValue(0);

  const sRotY = useSpring(rotY, { stiffness: 220, damping: 30, mass: 0.7 });
  const sRotX = useSpring(rotX, { stiffness: 220, damping: 30, mass: 0.7 });

  // Specular blob — ping-pongs with spin
  const specBlobX = useTransform(sRotY, (v) => {
    const norm = ((v % 360) + 360) % 360;
    return `${norm <= 180 ? (norm / 180) * 100 : ((360 - norm) / 180) * 100}%`;
  });
  const specBlobY = useTransform(sRotX, [-20, 20], ["20%", "80%"]);

  // Slow ambient shimmer
  const shimmer = useMotionValue(120);
  useEffect(() => {
    const c = animate(shimmer, [120, 220, 120], { duration: 8, repeat: Infinity, ease: "easeInOut" });
    return () => c.stop();
  }, [shimmer]);

  // ── Drag & Auto-spin ──────────────────────────────────────────────────────
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const vel = useRef(0);
  const rafRef = useRef<number | null>(null);

  const animationLoop = useCallback(() => {
    if (!isDragging.current && !isHovered.current) {
      if (Math.abs(vel.current) > 0.1) {
        vel.current *= 0.92;
        rotY.set(rotY.get() + vel.current);
      } else {
        vel.current = 0;
      }
      
      const currentX = rotX.get();
      if (Math.abs(currentX) > 0.1) {
        rotX.set(currentX * 0.92);
      } else {
        rotX.set(0);
      }
    }
    rafRef.current = requestAnimationFrame(animationLoop);
  }, [rotY, rotX]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animationLoop);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [animationLoop]);

  const onDown = useCallback((e: MouseEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX; lastY.current = e.clientY; vel.current = 0;
  }, []);

  const onEnter = useCallback(() => {
    isHovered.current = true;
  }, []);

  const onMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) {
      isHovered.current = true;
      // Hover-only tilt
      const el = cardWrapperRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const pctX = (e.clientX - r.left) / r.width - 0.5;
      const pctY = (e.clientY - r.top) / r.height - 0.5;
      
      // Intuitive tilt: mouse up -> tilt up, mouse right -> rotate right
      rotX.set(pctY * -30);
      
      const currentY = rotY.get();
      const nearest180 = Math.round(currentY / 180) * 180;
      rotY.set(nearest180 + (pctX * 40));
      return;
    }
    const dx = e.clientX - lastX.current;
    const dy = e.clientY - lastY.current;
    vel.current = dx * 1.0;
    rotY.set(rotY.get() + dx * 1.0);
    rotX.set(Math.max(-30, Math.min(30, rotX.get() + dy * 0.5)));
    lastX.current = e.clientX; lastY.current = e.clientY;
  }, [rotX, rotY]);

  const onUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onLeave = useCallback(() => {
    isHovered.current = false;
    isDragging.current = false;
  }, []);

  useEffect(() => {
    const el = cardWrapperRef.current;
    if (!el) return;
    const isMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isMouse) return;
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseup", onUp);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseup", onUp);
    };
  }, [onEnter, onDown, onMove, onUp, onLeave]);

  // Mobile touch
  const tLastX = useRef<number | null>(null);
  const tLastY = useRef<number | null>(null);
  const tVel = useRef(0);
  useEffect(() => {
    const el = cardWrapperRef.current;
    if (!el) return;
    const onTS = (e: TouchEvent) => {
      e.preventDefault(); isDragging.current = true;
      tLastX.current = e.touches[0].clientX; tLastY.current = e.touches[0].clientY; tVel.current = 0;
    };
    const onTM = (e: TouchEvent) => {
      if (!isDragging.current || tLastX.current === null) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - tLastX.current;
      const dy = e.touches[0].clientY - (tLastY.current ?? 0);
      tVel.current = dx * 1.4;
      rotY.set(rotY.get() + dx * 1.4);
      rotX.set(Math.max(-30, Math.min(30, rotX.get() + dy * 0.7)));
      tLastX.current = e.touches[0].clientX; tLastY.current = e.touches[0].clientY;
    };
    const onTE = (e: TouchEvent) => {
      e.preventDefault(); isDragging.current = false;
      tLastX.current = null; tLastY.current = null;
      vel.current = tVel.current;
    };
    el.addEventListener("touchstart", onTS, { passive: false });
    el.addEventListener("touchmove", onTM, { passive: false });
    el.addEventListener("touchend", onTE, { passive: false });
    el.addEventListener("touchcancel", onTE, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onTS);
      el.removeEventListener("touchmove", onTM);
      el.removeEventListener("touchend", onTE);
      el.removeEventListener("touchcancel", onTE);
    };
  }, [rotX, rotY]);

  // Pointer events fallback (works on both mouse & touch via PointerEvent API)
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return; // handled by mouse listeners
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    isDragging.current = true;
    tLastX.current = e.clientX;
    tLastY.current = e.clientY;
    tVel.current = 0;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    if (!isDragging.current || tLastX.current === null) return;
    const dx = e.clientX - tLastX.current;
    const dy = e.clientY - (tLastY.current ?? 0);
    tVel.current = dx * 1.4;
    rotY.set(rotY.get() + dx * 1.4);
    rotX.set(Math.max(-30, Math.min(30, rotX.get() + dy * 0.7)));
    tLastX.current = e.clientX;
    tLastY.current = e.clientY;
  }, [rotX, rotY]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    isDragging.current = false;
    tLastX.current = null;
    tLastY.current = null;
    vel.current = tVel.current;
  }, []);

  return (
    <div
      ref={cardWrapperRef}
      className="flex items-center justify-center p-8 w-full"
      style={{
        perspective: "900px",
        perspectiveOrigin: "50% 50%",
        cursor: "grab",
        userSelect: "none",
        touchAction: "none",          // prevents browser scroll hijack on mobile
        WebkitUserSelect: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* ── Rotating 3D container ── */}
      <motion.div
        style={{ rotateX: sRotX, rotateY: sRotY, transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative w-full max-w-[360px] aspect-[1/1.58]"
      >
        {/* ══════════════ FRONT FACE ══════════════ */}
        <div
          className="absolute inset-0 overflow-hidden flex flex-col justify-between"
          style={{
            ...faceShared,
            clipPath: CLIP,
            background: FACE_BG,
            transform: `translateZ(${HALF}px)`,
            boxShadow: "inset 0 2px 0 rgba(255,255,255,0.36), inset 0 -1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <SciFiFrame />
          {/* Glass sheen */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.09) 0%, transparent 50%, rgba(0,0,0,0.12) 100%)" }} />
          {/* Specular blob */}
          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ x: specBlobX, y: specBlobY, willChange: "transform" }}>
            <div className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{
                left: "-128px", top: "-128px",
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.01) 50%, transparent 70%)",
              }} />
          </motion.div>
          {/* Shimmer */}
          <motion.div className="absolute pointer-events-none"
            style={{
              left: "-50%", top: "-50%", width: "200%", height: "200%",
              rotateZ: shimmer,
              willChange: "transform",
              background: "linear-gradient(0deg, transparent 20%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 60%, transparent 80%)",
            }} />
          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.65)" }} />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full justify-between p-5 sm:p-8 pt-10 sm:pt-12">
            <div>
              <div className="flex justify-between items-center w-full mb-4 sm:mb-6 mt-2 sm:mt-4">
                <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded border border-zinc-500/50 bg-zinc-800/60 text-[9px] sm:text-[10px] font-bold text-zinc-300 tracking-wider">
                  <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> SECURE
                </div>
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[20px] sm:text-[28px] leading-tight font-bold text-white tracking-widest text-center mb-2 sm:mb-3 break-words w-full px-1">{name}</h2>
              <p className="text-zinc-400 text-[10px] sm:text-xs tracking-[0.20em] sm:tracking-[0.25em] font-medium text-center uppercase">{role}</p>
            </div>
            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between items-end w-full">
                <div>
                  <p className="text-zinc-500 text-[9px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase mb-1 sm:mb-1.5">ID NUMBER</p>
                  <p className="text-zinc-200 font-mono text-[11px] sm:text-sm tracking-wider font-semibold">{idNumber}</p>
                </div>
                <Fingerprint className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-400 opacity-80" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ BACK FACE ══════════════ */}
        <div
          className="absolute inset-0 overflow-hidden flex items-center justify-center"
          style={{
            ...faceShared,
            clipPath: CLIP,
            background: BACK_BG,
            transform: `rotateY(180deg) translateZ(${HALF}px)`,
            boxShadow: "inset 0 2px 0 rgba(255,255,255,0.36), inset 0 -1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <SciFiFrame />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(200deg, rgba(255,255,255,0.07) 0%, transparent 50%, rgba(0,0,0,0.10) 100%)" }} />
          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ x: specBlobX, y: specBlobY, willChange: "transform" }}>
            <div className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{
                left: "-128px", top: "-128px",
                background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.01) 50%, transparent 70%)",
              }} />
          </motion.div>
          <motion.div className="absolute pointer-events-none"
            style={{
              left: "-50%", top: "-50%", width: "200%", height: "200%",
              rotateZ: useTransform(shimmer, (a) => a + 30),
              willChange: "transform",
              background: "linear-gradient(0deg, transparent 20%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.04) 60%, transparent 80%)",
            }} />
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.65)" }} />
          <div className="relative z-10 flex flex-col items-center justify-center" style={{ opacity: 0.85 }}>
            <Lock className="w-16 h-16 text-white mb-4" />
            <p className="text-white text-sm tracking-[0.3em] font-bold">AUTHORIZED</p>
            <p className="text-white text-sm tracking-[0.3em] font-bold">PERSONNEL</p>
            <p className="text-white text-sm tracking-[0.3em] font-bold">ONLY</p>
          </div>
        </div>

        {/* LEFT EDGE — hard clip at chamfer corners */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0, left: `-${HALF}px`, width: `${THICKNESS}px`, height: "100%",
            transform: "rotateY(-90deg)",
            background: "linear-gradient(to right, rgba(255,255,255,0.14) 0%, #303033 20%, #252527 80%, rgba(255,255,255,0.08) 100%)",
            clipPath: `polygon(0 ${CHAMFER}px, 100% ${CHAMFER}px, 100% calc(100% - ${CHAMFER}px), 0 calc(100% - ${CHAMFER}px))`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden" as React.CSSProperties["backfaceVisibility"],
          }}
        />

        {/* RIGHT EDGE */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0, right: `-${HALF}px`, width: `${THICKNESS}px`, height: "100%",
            transform: "rotateY(90deg)",
            background: "linear-gradient(to left, rgba(255,255,255,0.14) 0%, #303033 20%, #252527 80%, rgba(255,255,255,0.08) 100%)",
            clipPath: `polygon(0 ${CHAMFER}px, 100% ${CHAMFER}px, 100% calc(100% - ${CHAMFER}px), 0 calc(100% - ${CHAMFER}px))`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden" as React.CSSProperties["backfaceVisibility"],
          }}
        />

        {/* TOP EDGE */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: `-${HALF}px`, left: 0, width: "100%", height: `${THICKNESS}px`,
            transform: "rotateX(90deg)",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, #303033 20%, #252527 80%, rgba(255,255,255,0.06) 100%)",
            clipPath: `polygon(${CHAMFER}px 0, calc(100% - ${CHAMFER}px) 0, calc(100% - ${CHAMFER}px) 100%, ${CHAMFER}px 100%)`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden" as React.CSSProperties["backfaceVisibility"],
          }}
        />

        {/* BOTTOM EDGE */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: `-${HALF}px`, left: 0, width: "100%", height: `${THICKNESS}px`,
            transform: "rotateX(-90deg)",
            background: "linear-gradient(to top, rgba(255,255,255,0.10) 0%, #303033 20%, #252527 80%, rgba(255,255,255,0.06) 100%)",
            clipPath: `polygon(${CHAMFER}px 0, calc(100% - ${CHAMFER}px) 0, calc(100% - ${CHAMFER}px) 100%, ${CHAMFER}px 100%)`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden" as React.CSSProperties["backfaceVisibility"],
          }}
        />

        {/*
          ══════════════════════════════════════════════════════
          CHAMFER CORNER PANELS — 4 diagonal faces at 45°
          Each is a CHAMFER_DIAG × THICKNESS rectangle rotated
          to exactly fill the diagonal gap at each corner.

          Transform derivation (verified algebraically):
            rotateX(-90deg) makes the face stand perpendicular.
            rotateZ(±45deg) angles it to the correct corner.
            translate3d offsets by (CHAMFER/2 - CHAMFER_DIAG/2)
            = CHAMFER_OFF ≈ -5px to hit the chamfer center.
          ══════════════════════════════════════════════════════
        */}
        {[
          // [position, transform]
          [{ top: 0, left: 0 },     `translate3d(${CHAMFER_OFF}px, ${-CHAMFER_OFF}px, 0) rotateZ(-45deg) rotateX(-90deg)`],
          [{ top: 0, right: 0 },    `translate3d(${-CHAMFER_OFF}px, ${-CHAMFER_OFF}px, 0) rotateZ(45deg) rotateX(-90deg)`],
          [{ bottom: 0, left: 0 },  `translate3d(${CHAMFER_OFF}px, ${CHAMFER_OFF}px, 0) rotateZ(45deg) rotateX(-90deg)`],
          [{ bottom: 0, right: 0 }, `translate3d(${-CHAMFER_OFF}px, ${CHAMFER_OFF}px, 0) rotateZ(-45deg) rotateX(-90deg)`],
        ].map(([pos, tfm], i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              ...(pos as React.CSSProperties),
              width: `${CHAMFER_DIAG}px`,
              height: `${THICKNESS}px`,
              transform: tfm as string,
              background: "linear-gradient(90deg, #2a2a2d, #222224 50%, #2a2a2d)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden" as React.CSSProperties["backfaceVisibility"],
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
