"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom crimson cursor that follows the mouse with a spring animation.
 * Shows a large outer ring that lags behind, and a small precise dot.
 */
export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const dotX = useSpring(cursorX, { damping: 35, stiffness: 500 });
  const dotY = useSpring(cursorY, { damping: 35, stiffness: 500 });
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleEnter = () => { isHovering.current = true; };
    const handleLeave = () => { isHovering.current = false; };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring — lags behind */}
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full border border-crimson/60 hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          borderColor: "rgba(220,38,38,0.5)",
          boxShadow: "0 0 12px rgba(220,38,38,0.3)",
        }}
      />
      {/* Inner dot — precise */}
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          backgroundColor: "#dc2626",
          boxShadow: "0 0 8px rgba(220,38,38,0.9)",
        }}
      />
    </>
  );
}
