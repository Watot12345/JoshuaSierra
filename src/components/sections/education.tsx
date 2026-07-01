"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Education section: a compact alternating timeline of academic history.
 */
export function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic{" "}
              <span className="text-gradient-fire">foundation</span>
            </>
          }
          description="Formal training in computer science and human-computer interaction that shaped how I think about products."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-crimson/30"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(220,38,38,0.4), transparent 70%)",
                }}
              />

              {/* Icon */}
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(18,18,18,0.6))",
                }}
              >
                <GraduationCap className="h-6 w-6 text-white" />
              </div>

              {/* Duration */}
              <div className="relative mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {edu.startYear} — {edu.endYear}
              </div>

              {/* Degree */}
              <h3 className="relative mt-2 text-lg font-bold text-white">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="relative mt-1 text-sm font-medium" style={{ color: "#dc2626" }}>
                {edu.institution}
              </p>
              <p className="relative mt-0.5 text-xs text-muted-foreground">
                {edu.location}
              </p>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                {edu.description}
              </p>

              {/* GPA */}
              <div className="relative mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <Award className="h-4 w-4" style={{ color: "#dc2626" }} />
                <span className="text-xs text-muted-foreground">GPA</span>
                <span className="ml-auto text-sm font-bold text-white">{edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
