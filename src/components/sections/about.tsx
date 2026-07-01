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
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
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

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left: bio + focus */}
          <div>
            {/* Bio paragraphs */}
            <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
              {profile.longBio.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <p className="text-pretty">{paragraph}</p>
                </FadeIn>
              ))}
            </div>

            {/* Focus areas */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <Icon className="h-5 w-5 shrink-0" style={{ color: "#dc2626" }} />
                    <span className="text-sm font-medium text-white">{area.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: info card + languages */}
          <div className="flex flex-col gap-6">
            {/* Quick facts card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Facts
              </h3>
              <dl className="mt-4 flex flex-col gap-3 text-sm">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted-foreground">Name</dt>
                  <dd className="font-medium text-white">{profile.fullName}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="font-medium text-white">{profile.email}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-white">{profile.location}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="font-medium text-white">
                    {profile.yearsOfExperience}+ years
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Availability</dt>
                  <dd className="flex items-center gap-1.5 font-medium text-white">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                    Open
                  </dd>
                </div>
              </dl>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Languages
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {languages.map((lang) => (
                  <div key={lang.id}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.proficiency}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #dc2626, #f97316)",
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Recognitions & Awards
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-crimson/30"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: "#dc2626" }}
                />
                <div>
                  <p className="text-sm font-semibold text-white">{award.title}</p>
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
