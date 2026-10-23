"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import type { TechStackItem } from "@/types/portfolio";

/**
 * Renders a single infinite-marquee row of tech icons.
 */
function MarqueeRow({
  items,
  reverse = false,
}: {
  items: TechStackItem[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden">
      {/* Dynamic fade edges based on theme background */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent sm:w-28" />

      <motion.div
        className="flex shrink-0 gap-3.5 pr-3.5"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.id}-${index}`}
              className="group flex h-20 w-32 shrink-0 flex-col items-center justify-center gap-2.5 rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-foreground/30 sm:h-22 sm:w-36"
            >
              <Icon
                className="h-7 w-7 transition-transform duration-200 group-hover:scale-110 sm:h-8 sm:w-8"
                style={{ color: tech.color }}
              />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

/**
 * Tech Stack section with clean marquee.
 */
export function TechStack() {
  const half = Math.ceil(techStack.length / 2);
  const rowOne = techStack.slice(0, half);
  const rowTwo = techStack.slice(half);

  return (
    <section id="tech-stack" className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tools I build <span className="text-gradient-fire">with</span>
            </>
          }
          description="A battle-tested stack refined over production environments — chosen for performance, reliability, and longevity."
        />

        <div className="mt-12 flex flex-col gap-3.5">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </div>
      </div>
    </section>
  );
}
