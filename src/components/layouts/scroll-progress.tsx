"use client";

import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

/**
 * Fixed crimson scroll progress bar at the very top of the viewport.
 * Width scales with the page scroll progress (0 → 1).
 * Enhanced with a glowing trailing dot.
 */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, #7f1d1d, #dc2626, #ef4444, #f97316)",
          boxShadow: "0 0 16px rgba(220,38,38,0.8), 0 0 4px rgba(239,68,68,0.6)",
        }}
      />
      {/* Glowing dot at the progress tip */}
      <motion.div
        className="fixed top-0 z-[61] h-[3px] w-6 rounded-full"
        style={{
          left: `calc(${progress} * (100% - 24px))`,
          background: "radial-gradient(circle, #ffffff 0%, #f97316 40%, transparent 80%)",
          boxShadow: "0 0 12px rgba(249,115,22,1), 0 0 24px rgba(220,38,38,0.8)",
          opacity: progress > 0.01 ? 1 : 0,
        }}
      />
    </>
  );
}
