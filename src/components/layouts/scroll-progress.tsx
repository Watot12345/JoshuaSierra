"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

/**
 * Fixed crimson scroll progress bar at the very top of the viewport.
 * Width scales with the page scroll progress (0 → 1).
 */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left"
      style={{
        scaleX: progress,
        background: "linear-gradient(90deg, #dc2626, #ef4444, #f97316)",
        boxShadow: "0 0 12px rgba(220,38,38,0.6)",
      }}
    />
  );
}
