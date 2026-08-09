"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Animated, parallax-style background with floating gradient orbs,
 * a subtle grid overlay, and crimson accent glows.
 * Purely decorative — fixed behind all content, pointer-events disabled.
 */
export function AnimatedBackground() {
  // Pre-compute floating particle positions so they're stable across renders.
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${(i * 53) % 100}%`,
        top: `${(i * 37) % 100}%`,
        size: 1.5 + ((i * 7) % 5),
        duration: 7 + ((i * 3) % 12),
        delay: (i * 0.5) % 8,
      })),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Radial crimson glow — top-left (large) */}
      <motion.div
        className="absolute -left-40 -top-40 h-[55rem] w-[55rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.22) 0%, transparent 60%)" }}
        animate={{ x: [0, 70, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radial crimson glow — bottom-right (large) */}
      <motion.div
        className="absolute -bottom-48 -right-40 h-[60rem] w-[60rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 60%)" }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Crimson glow — top-right accent */}
      <motion.div
        className="absolute -right-20 top-1/4 h-[30rem] w-[30rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 65%)" }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Crimson glow — bottom-left accent */}
      <motion.div
        className="absolute -left-20 bottom-1/4 h-[28rem] w-[28rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(185,28,28,0.15) 0%, transparent 65%)" }}
        animate={{ x: [0, 50, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Center ambient orb */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(38,38,38,0.55) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.id % 3 === 0 ? "rgba(239,68,68,0.7)" : p.id % 3 === 1 ? "rgba(220,38,38,0.5)" : "rgba(185,28,28,0.4)",
            boxShadow: p.id % 2 === 0 ? "0 0 10px rgba(220,38,38,0.8)" : "0 0 6px rgba(239,68,68,0.5)",
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, p.id % 2 === 0 ? 12 : -12, 0],
            opacity: [0, 1, 0],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
