"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Clean, formal section heading with subtle badge, high-contrast title, and description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-3.5 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3 }}
        className={`inline-flex items-center gap-2 rounded-full border border-border bg-muted/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/80 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className={`text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${
            isCenter ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
