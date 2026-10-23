"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Palette, Zap, Globe } from "lucide-react";
import { profile, languages, awards } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { FadeIn } from "@/components/ui-custom/animated-text";

const focusAreas = [
  { icon: Code2, label: "Clean, scalable code" },
  { icon: Palette, label: "Design-led engineering" },
  { icon: Zap, label: "Obsessive performance" },
  { icon: Globe, label: "Global-scale systems" },
];

/**
 * About section: bio, focus areas, languages, awards highlights.
 */
export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              The engineer behind the{" "}
              <span className="text-gradient-fire">experience</span>
            </>
          }
          description="A decade of turning ambitious ideas into shipped products. Here's a closer look at who I am and how I work."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left: bio + focus */}
          <div>
            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              {profile.longBio.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.08}>
                  <p className="text-pretty">{paragraph}</p>
                </FadeIn>
              ))}
            </div>

            {/* Focus areas */}
            <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 gap-3">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-xs"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{area.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: info card + languages */}
          <div className="flex flex-col gap-6">
            {/* Quick facts card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-border bg-card p-6 shadow-xs"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Facts
              </h3>
              <dl className="mt-4 flex flex-col gap-3 text-sm">
                <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
                  <dt className="shrink-0 text-muted-foreground">Name</dt>
                  <dd className="truncate text-right font-medium text-foreground">{profile.fullName}</dd>
                </div>
                <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
                  <dt className="shrink-0 text-muted-foreground">Email</dt>
                  <dd className="truncate text-right font-medium text-foreground">{profile.email}</dd>
                </div>
                <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
                  <dt className="shrink-0 text-muted-foreground">Location</dt>
                  <dd className="truncate text-right font-medium text-foreground">{profile.location}</dd>
                </div>
                <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
                  <dt className="shrink-0 text-muted-foreground">Experience</dt>
                  <dd className="font-medium text-foreground">
                    {profile.yearsOfExperience}+ years
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <dt className="shrink-0 text-muted-foreground">Availability</dt>
                  <dd className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Open
                  </dd>
                </div>
              </dl>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6 shadow-xs"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Languages
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {languages.map((lang) => (
                  <div key={lang.id}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-muted-foreground text-xs">{lang.proficiency}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Awards strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mt-14"
        >
          <h3 className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Recognitions & Awards
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30 shadow-xs"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{award.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {award.issuer} · {award.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
