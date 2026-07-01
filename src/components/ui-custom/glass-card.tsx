"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  strong?: boolean;
}

/**
 * Reusable glassmorphism card with optional hover lift and crimson glow.
 */
export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  strong = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-2xl transition-colors duration-300",
        hover && "hover:border-crimson/30",
        glow && "glow-crimson",
        className
      )}
      style={{
        ...(hover ? { borderColor: undefined } : {}),
      }}
      whileHover={
        hover
          ? { y: -6, transition: { duration: 0.3, ease: "easeOut" } }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
