"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import type { TechStackItem } from "@/types/portfolio";

/**
 * Renders a single infinite-marquee row of tech icons.
 * Duplicates the list so the animation loops seamlessly.
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
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      <motion.div
        className="flex shrink-0 gap-4 pr-4"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.id}-${index}`}
              className="group flex h-24 w-36 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-crimson/30"
            >
              <Icon
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-white">
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
 * Tech Stack section: dual infinite marquees showcasing the full toolkit.
 */
export function TechStack() {
  const half = Math.ceil(techStack.length / 2);
  const rowOne = techStack.slice(0, half);
  const rowTwo = techStack.slice(half);

  return (
    <section id="tech-stack" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tools I build{" "}
              <span className="text-gradient-fire">with</span>
            </>
          }
          description="A battle-tested stack refined over hundreds of projects — chosen for performance, developer experience, and longevity."
        />

        <div className="mt-14 flex flex-col gap-4">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </div>
      </div>
    </section>
  );
}
