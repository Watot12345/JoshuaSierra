"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Clean, formal career experience timeline.
 */
export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Career Journey"
          title={
            <>
              Where I&apos;ve made an <span className="text-gradient-fire">impact</span>
            </>
          }
          description="Proven track record of building production products across startups, agencies, and government platforms."
        />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className={`relative pl-8 sm:pl-12 md:w-1/2 md:pl-0 ${
                    isLeft
                      ? "md:pr-10 md:text-right"
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  {/* Node dot */}
                  <div className="absolute left-4 top-2 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />

                  {/* Card */}
                  <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-colors hover:border-foreground/30">
                    {/* Header */}
                    <div
                      className={`flex flex-wrap items-center gap-2 text-xs text-muted-foreground ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      {exp.current ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                          Current
                        </span>
                      ) : null}
                    </div>

                    {/* Role */}
                    <h3 className="mt-2 text-base font-bold text-foreground sm:text-lg">{exp.role}</h3>

                    {/* Company */}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline sm:text-sm ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.company}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>

                    {/* Location */}
                    <p className={`mt-1 flex items-center gap-1.5 text-xs text-muted-foreground ${isLeft ? "md:justify-end" : ""}`}>
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul
                      className={`mt-3 flex flex-col gap-1.5 text-xs text-muted-foreground sm:text-sm ${
                        isLeft ? "md:items-end" : ""
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            isLeft ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-pretty">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div
                      className={`mt-4 flex flex-wrap gap-1.5 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
