"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Clean, formal education section.
 */
export function Education() {
  return (
    <section id="education" className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic <span className="text-gradient-fire">foundation</span>
            </>
          }
          description="Formal training in computer science that shaped how I engineer reliable systems."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-foreground/30"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>

              {/* Duration */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {edu.startYear} — {edu.endYear}
              </div>

              {/* Degree */}
              <h3 className="mt-2 text-base font-bold text-foreground sm:text-lg">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="mt-1 text-sm font-semibold text-primary">
                {edu.institution}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {edu.location}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {edu.description}
              </p>

              {/* GPA */}
              {edu.gpa && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3.5 py-2.5">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">GPA</span>
                  <span className="ml-auto text-xs font-bold text-foreground sm:text-sm">{edu.gpa}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
