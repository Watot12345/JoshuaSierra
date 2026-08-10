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
      {/* ========================================================================= */}
      {/* MOBILE HERO (Custom layout tailored specifically for mobile < 1024px)   */}
      {/* ========================================================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col gap-4 text-center lg:hidden">
        {/* Native App Portrait Profile Header Card */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#121212]/80 p-6 text-center shadow-2xl backdrop-blur-md sm:p-7">
          {/* Ambient crimson background glow */}
          <div
            className="pointer-events-none absolute -top-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full opacity-55 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(220,38,38,0.65), transparent 70%)",
            }}
          />

          {/* Row 1: Centered Avatar (96px-112px) with scaled rotating dashed ring */}
          <div className="relative mb-3.5 shrink-0 flex items-center justify-center">
            <div
              className="absolute -inset-3 rounded-full opacity-65 blur-md"
              style={{
                background: "radial-gradient(circle, rgba(220,38,38,0.55), transparent 70%)",
              }}
            />
            <motion.div
              className="absolute -inset-2.5 rounded-full border border-dashed border-crimson/45"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/20 shadow-xl xs:h-28 xs:w-28">
              <img
                src={profile.avatar}
                alt={`${profile.fullName} portrait`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Row 2: Availability Badge */}
          <div
            className="mb-3 inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide shadow-sm"
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
            <span>{profile.availability}</span>
          </div>

          {/* Row 3: Greeting & Name */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground text-center">
            Hi, I&apos;m
          </p>
          <h1 className="mt-1 text-center text-3xl font-black leading-tight tracking-tight text-white xs:text-4xl sm:text-5xl">
            <span>{profile.firstName}</span>{" "}
            <span className="text-gradient-fire">{profile.lastName}</span>
          </h1>

          {/* Row 4: Title */}
          <div className="mt-2 flex items-center justify-center text-center gap-1.5 text-sm font-semibold text-muted-foreground xs:text-base">
            <Sparkles className="h-4 w-4 shrink-0 text-crimson" style={{ color: "#dc2626" }} />
            <span>{profile.title}</span>
          </div>

          {/* Row 5: Bio Tagline */}
          <p className="mt-3.5 mx-auto text-center max-w-xs text-xs leading-relaxed text-muted-foreground/90 xs:text-sm sm:max-w-sm sm:text-base">
            {profile.tagline}
          </p>

          {/* Row 6: Touch-Friendly Action Buttons (Side-by-Side) */}
          <div className="mt-6 flex w-full items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl text-xs font-semibold text-white shadow-lg transition-transform active:scale-[0.98] xs:h-12 xs:text-sm"
              style={{
                background: "linear-gradient(135deg, #dc2626, #991b1b)",
                boxShadow: "0 6px 22px -4px rgba(220,38,38,0.45)",
              }}
            >
              View My Work
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10 active:scale-[0.98] xs:h-12 xs:text-sm"
            >
              <Download className="h-4 w-4 shrink-0" />
              <span>CV</span>
            </a>
          </div>
        </div>

        {/* Quick Social Connectivity Row */}
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#121212]/60 px-4 py-2.5 backdrop-blur-md">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-crimson/40 hover:text-white active:scale-95"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Dynamic Metrics Horizontal Scroll Carousel */}
        <div className="w-full">
          <div className="no-scrollbar flex w-full gap-2.5 overflow-x-auto snap-x snap-mandatory pb-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-1 min-w-[135px] shrink-0 snap-start flex-col items-center justify-center rounded-xl border border-white/10 bg-[#121212]/80 px-3.5 py-3 text-center shadow-md backdrop-blur-md"
              >
                <p className="text-xl font-black text-gradient-fire xs:text-2xl">
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
      {/* DESKTOP HERO (Preserved for desktop lg: >= 1024px)                        */}
      {/* ========================================================================= */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 hidden mx-auto max-w-7xl items-center gap-12 lg:grid lg:grid-cols-[1.2fr_0.8fr]"
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
          <h1 className="mt-2 text-balance text-4xl font-black leading-[1.05] tracking-tight xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
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
          className="relative mx-auto flex justify-center lg:block"
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
            <div className="relative aspect-square w-64 overflow-hidden rounded-full border-2 border-white/10 sm:w-72 lg:w-80">
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
              className="absolute -right-2 top-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#121212]/80 px-3 py-2 backdrop-blur sm:-right-4 sm:top-8 sm:px-4 sm:py-2.5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xl sm:text-2xl">🚀</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Available</p>
                <p className="text-[10px] text-muted-foreground">for projects</p>
              </div>
            </motion.div>

            {/* Floating badge - bottom */}
            <motion.div
              className="absolute -left-2 bottom-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#121212]/80 px-3 py-2 backdrop-blur sm:-left-6 sm:bottom-12 sm:px-4 sm:py-2.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-xl sm:text-2xl">🏆</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">{profile.awardsWon} Awards</p>
                <p className="text-[10px] text-muted-foreground">Recognitions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Desktop-Only Legacy Stats bar */}
      <motion.div
        style={{ opacity }}
        className="hidden lg:block relative z-10 mt-10 w-full px-4 sm:px-6 lg:absolute lg:bottom-16 lg:left-0 lg:right-0 lg:mt-0 lg:px-8"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-[#121212]/60 p-4 sm:p-6 backdrop-blur md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl font-black text-gradient-fire sm:text-4xl">
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
