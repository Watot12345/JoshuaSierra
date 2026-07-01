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
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 53) % 100}%`,
        top: `${(i * 37) % 100}%`,
        size: 2 + ((i * 7) % 4),
        duration: 8 + ((i * 3) % 10),
        delay: (i * 0.7) % 6,
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

      {/* Radial crimson glow top-left */}
      <motion.div
        className="absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radial crimson glow bottom-right */}
      <motion.div
        className="absolute -bottom-40 -right-32 h-[45rem] w-[45rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.14) 0%, transparent 60%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft dark-gray ambient orb */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(38,38,38,0.6) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Vignette to deepen edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
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
            backgroundColor: "rgba(220,38,38,0.5)",
            boxShadow: "0 0 8px rgba(220,38,38,0.6)",
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0],
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
