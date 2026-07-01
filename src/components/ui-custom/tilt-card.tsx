"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

/**
 * A 3D tilt card that rotates based on cursor position with optional glare.
 * Used for project cards and service cards.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 10,
  scale = 1.02,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(xSpring, [0, 1], [-maxTilt, maxTilt]);

  const glareX = useTransform(xSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(ySpring, [0, 1], ["0%", "100%"]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.15), transparent 45%)`
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = (): void => {
    x.set(0.5);
    y.set(0.5);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.3 } }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
      {glare && isHovering ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
          style={{ background: glareBackground }}
        />
      ) : null}
    </motion.div>
  );
}
