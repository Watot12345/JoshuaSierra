"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { AnimatedText, FadeIn } from "@/components/ui-custom/animated-text";
import { MagneticButton } from "@/components/ui-custom/magnetic-button";

/**
 * Animated hero section with parallax scroll, staggered text reveal,
 * floating avatar, stats counter, and CTA buttons.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  const stats = [
    { value: `${profile.yearsOfExperience}+`, label: "Years Experience" },
    { value: `${profile.projectsCompleted}+`, label: "Projects Shipped" },
    { value: `${profile.happyClients}+`, label: "Happy Clients" },
    { value: `${profile.awardsWon}`, label: "Awards Won" },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
      >
        {/* Left: text content */}
        <motion.div style={{ y: yText }} className="flex flex-col items-start">
          {/* Availability badge */}
          <FadeIn delay={0.1}>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
              style={{
                borderColor: "rgba(220,38,38,0.3)",
                backgroundColor: "rgba(220,38,38,0.08)",
                color: "#fca5a5",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: "#dc2626" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#dc2626" }}
                />
              </span>
              {profile.availability}
            </div>
          </FadeIn>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <h1 className="mt-2 text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedText text={profile.firstName} delay={0.3} />
            <br />
            <span className="text-gradient-fire">
              <AnimatedText text={profile.lastName} delay={0.6} />
            </span>
          </h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-4 flex items-center gap-2 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            <Sparkles className="h-5 w-5" style={{ color: "#dc2626" }} />
            {profile.title}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #dc2626, #991b1b)",
                  boxShadow: "0 8px 30px -5px rgba(220,38,38,0.5)",
                }}
              >
                View My Work
              </span>
            </MagneticButton>

            <MagneticButton
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </span>
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-10 flex items-center gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-crimson/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: avatar / visual */}
        <motion.div
          style={{ y: yAvatar }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative mx-auto hidden lg:block"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute -inset-6 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(220,38,38,0.4), transparent 70%)",
              }}
            />

            {/* Rotating dashed ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-dashed border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Avatar container */}
            <div className="relative aspect-square w-80 overflow-hidden rounded-full border-2 border-white/10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.2), transparent 50%, rgba(220,38,38,0.1))",
                }}
              />
              <img
                src={profile.avatar}
                alt={`${profile.fullName} portrait`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating badge - top */}
            <motion.div
              className="absolute -right-4 top-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#121212]/80 px-4 py-2.5 backdrop-blur"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Available</p>
                <p className="text-[10px] text-muted-foreground">for projects</p>
              </div>
            </motion.div>

            {/* Floating badge - bottom */}
            <motion.div
              className="absolute -left-6 bottom-12 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#121212]/80 px-4 py-2.5 backdrop-blur"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-2xl">🏆</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">{profile.awardsWon} Awards</p>
                <p className="text-[10px] text-muted-foreground">Awwwards & more</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-28 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[#121212]/60 p-6 backdrop-blur md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-black text-gradient-fire sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-white"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}
