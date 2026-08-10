"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

/**
 * Splits text into words and animates each with a staggered fade-up.
 * Great for hero headlines and section intros.
 */
export function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-center justify-center text-center lg:justify-start lg:text-left",
        className
      )}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-top"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once }}
            transition={{
              duration: 0.6,
              delay: delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

/**
 * Simple fade-in + slide-up wrapper for arbitrary content.
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
