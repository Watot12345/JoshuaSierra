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
 * Reusable card with subtle hover lift and formal borders.
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
        "rounded-xl border border-border bg-card text-card-foreground transition-all duration-200",
        hover && "hover:border-border/80 hover:shadow-xs",
        strong && "shadow-xs",
        className
      )}
      whileHover={
        hover
          ? { y: -2, transition: { duration: 0.15, ease: "easeOut" } }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
