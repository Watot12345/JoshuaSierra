"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import type { SkillCategory } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { cn } from "@/lib/utils";

const categories: (SkillCategory | "All")[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Design",
  "Mobile",
];

/**
 * Clean, formal skills section with category filters and proficiency bars.
 */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title={
            <>
              A versatile <span className="text-gradient-fire">toolkit</span>
            </>
          }
          description="Deep expertise across the full stack — from pixel-perfect frontends to scalable infrastructure."
        />

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/60">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
