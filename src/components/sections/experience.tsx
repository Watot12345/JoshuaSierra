"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Experience section: a vertical timeline of work history with
 * animated reveal, achievement lists, and technology tags.
 */
export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Career Journey"
          title={
            <>
              Where I&apos;ve made an{" "}
              <span className="text-gradient-fire">impact</span>
            </>
          }
          description="Eight years of building products at companies of every size — from scrappy agencies to platforms serving millions."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px md:left-1/2 md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(220,38,38,0.4) 10%, rgba(220,38,38,0.4) 90%, transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative pl-8 sm:pl-12 md:w-1/2 md:pl-0 ${
                    isLeft
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Node dot */}
                  <div
                    className="absolute left-4 top-1.5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2"
                    style={{
                      backgroundColor: "#dc2626",
                      boxShadow: "0 0 0 4px rgba(220,38,38,0.2), 0 0 20px rgba(220,38,38,0.5)",
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-colors duration-300 hover:border-crimson/30">
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
                        <span
                          className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                          style={{
                            backgroundColor: "rgba(34,197,94,0.15)",
                            color: "#4ade80",
                          }}
                        >
                          Current
                        </span>
                      ) : null}
                    </div>

                    {/* Role */}
                    <h3 className="mt-2 text-lg font-bold text-white">{exp.role}</h3>

                    {/* Company */}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-1 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-crimson ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                      style={{ color: "#dc2626" }}
                    >
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.company}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>

                    {/* Location */}
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul
                      className={`mt-4 flex flex-col gap-2 text-sm text-muted-foreground ${
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
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: "#dc2626" }}
                          />
                          <span className="text-pretty">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div
                      className={`mt-5 flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
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
