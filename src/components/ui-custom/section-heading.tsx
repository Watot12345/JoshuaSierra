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
 * Reusable section heading with animated eyebrow, title, and description.
 * Used across every portfolio section for visual consistency.
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
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-crimson ${
          isCenter ? "mx-auto" : ""
        }`}
        style={{ borderColor: "rgba(220,38,38,0.3)", backgroundColor: "rgba(220,38,38,0.1)" }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "#dc2626" }}
        />
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
