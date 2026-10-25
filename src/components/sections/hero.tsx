"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { AnimatedText, FadeIn } from "@/components/ui-custom/animated-text";
import { MagneticButton } from "@/components/ui-custom/magnetic-button";

/**
 * Clean, formal hero section with crisp typography,
 * professional availability badge, and understated micro-interactions.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const stats = [
    { value: `${profile.yearsOfExperience}+`, label: "Years Experience" },
    { value: `${profile.projectsCompleted}+`, label: "Projects Shipped" },
    { value: `${profile.happyClients}+`, label: "Happy Clients" },
    { value: `${profile.awardsWon}`, label: "Certifications" },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      {/* ========================================================================= */}
      {/* MOBILE HERO (< 1024px)                                                    */}
      {/* ========================================================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col gap-4 text-center lg:hidden">
        {/* Profile Header Card */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-xs sm:p-7">
          {/* Centered Avatar */}
          <div className="relative mb-4 shrink-0 flex items-center justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-border shadow-md xs:h-28 xs:w-28">
              <img
                src={profile.avatar}
                alt={`${profile.fullName} portrait`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{profile.availability}</span>
          </div>

          {/* Greeting & Name */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground text-center">
            Hi, I&apos;m
          </p>
          <h1 className="mt-1 text-center text-3xl font-black leading-tight tracking-tight text-foreground xs:text-4xl sm:text-5xl">
            <span>{profile.firstName}</span>{" "}
            <span className="text-gradient-fire">{profile.lastName}</span>
          </h1>

          {/* Title */}
          <div className="mt-2 flex items-center justify-center text-center gap-1.5 text-sm font-medium text-muted-foreground xs:text-base">
            <Sparkles className="h-4 w-4 shrink-0 text-primary" />
            <span>{profile.title}</span>
          </div>

          {/* Bio Tagline */}
          <p className="mt-3.5 mx-auto text-center max-w-xs text-xs leading-relaxed text-muted-foreground xs:text-sm sm:max-w-sm sm:text-base">
            {profile.tagline}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex w-full items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 xs:h-12 xs:text-sm"
            >
              View My Work
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-xs font-semibold text-foreground transition-colors hover:bg-muted xs:h-12 xs:text-sm"
            >
              <Download className="h-4 w-4 shrink-0" />
              <span>CV</span>
            </a>
          </div>
        </div>

        {/* Quick Social Connectivity Row */}
        <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5 shadow-xs">
          <span className="text-xs font-medium text-muted-foreground">Connect:</span>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Metrics Row */}
        <div className="w-full">
          <div className="no-scrollbar flex w-full gap-2.5 overflow-x-auto snap-x snap-mandatory pb-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-1 min-w-[130px] shrink-0 snap-start flex-col items-center justify-center rounded-xl border border-border bg-card px-3.5 py-3 text-center shadow-xs"
              >
                <p className="text-xl font-bold text-foreground xs:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP HERO (lg: >= 1024px)                                              */}
      {/* ========================================================================= */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 hidden mx-auto max-w-7xl items-center gap-12 lg:grid lg:grid-cols-[1.2fr_0.8fr]"
      >
        {/* Left: text content */}
        <motion.div style={{ y: yText }} className="flex flex-col items-start">
          {/* Availability badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{profile.availability}</span>
            </div>
          </FadeIn>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <h1 className="mt-2 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedText text={profile.firstName} delay={0.2} />
            <br />
            <span className="text-gradient-fire">
              <AnimatedText text={profile.lastName} delay={0.4} />
            </span>
          </h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-4 flex items-center gap-2 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span>{profile.title}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
            >
              <span>View My Work</span>
            </MagneticButton>

            <MagneticButton
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground hover:border-foreground/30"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: avatar */}
        <motion.div
          style={{ y: yAvatar }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto flex justify-center lg:block"
        >
          <div className="relative">
            {/* Avatar container */}
            <div className="relative aspect-square w-64 overflow-hidden rounded-2xl border border-border bg-card shadow-lg sm:w-72 lg:w-80">
              <img
                src={profile.avatar}
                alt={`${profile.fullName} portrait`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badge - top */}
            <motion.div
              className="absolute -right-2 top-4 flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 shadow-md sm:-right-4 sm:top-8"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-lg">🚀</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-foreground">Available</p>
                <p className="text-[10px] text-muted-foreground">for projects</p>
              </div>
            </motion.div>

            {/* Floating badge - bottom */}
            <motion.div
              className="absolute -left-2 bottom-6 flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 shadow-md sm:-left-6 sm:bottom-10"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-lg">📜</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-foreground">{profile.awardsWon} Credential</p>
                <p className="text-[10px] text-muted-foreground">Certified</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Desktop Stats bar */}
      <motion.div
        style={{ opacity }}
        className="hidden lg:block relative z-10 mt-10 w-full px-4 sm:px-6 lg:absolute lg:bottom-12 lg:left-0 lg:right-0 lg:mt-0 lg:px-8"
      >
        <div className="mx-auto grid max-w-4xl grid-cols-4 gap-3 rounded-xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur-md">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 1.0 + index * 0.05 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </section>
  );
}
