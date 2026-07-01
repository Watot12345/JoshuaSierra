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
 * Skills section with category filter tabs and animated proficiency bars.
 */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title={
            <>
              A versatile{" "}
              <span className="text-gradient-fire">toolkit</span>
            </>
          }
          description="Deep expertise across the full stack — from pixel-perfect frontends to scalable infrastructure."
        />

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                activeCategory === cat
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
              )}
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg, #dc2626, #991b1b)",
                      boxShadow: "0 4px 15px -3px rgba(220,38,38,0.4)",
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-crimson/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-white transition-colors group-hover:text-crimson" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gradient-fire">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #dc2626, #f97316)",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
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
