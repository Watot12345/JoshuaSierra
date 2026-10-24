"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { ActiveDot } from "@/components/ui-custom/active-dot";

export function BrylHero() {
  return (
    <section id="home" className="pt-2 pb-10">
      <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex-1 min-w-0">
          <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {profile.fullName}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            I&apos;m Joshua Arncel Sierra, a Full Stack Developer and 4th-year BSIT student based in Manila, Philippines. I build responsive web platforms, clean backend APIs, and modern mobile apps.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Currently developing project features at <strong className="text-foreground font-semibold">Roppets</strong>, serving as Lead Developer for <strong className="text-foreground font-semibold">Civentral</strong> — a live government capstone platform deployed for Caloocan City, and building startup tools like <strong className="text-foreground font-semibold">SariSari App</strong>. Actively seeking an <strong className="text-foreground font-semibold">Internship (OJT)</strong> and junior developer roles.
          </p>

          {/* Social links */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
            <a
              href="https://github.com/Watot12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline transition-colors"
            >
              github ↗
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-arncel-sierra-8bb444275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline transition-colors"
            >
              linkedin ↗
            </a>
            <a
              href="/resume.pdf?v=2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline transition-colors"
            >
              resume (pdf) ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground hover:underline transition-colors"
            >
              email ↗
            </a>
          </div>
        </div>

        {/* Profile Avatar — grayscale by default, reveals color on hover */}
        <div data-sound="tick" className="group relative shrink-0 self-center sm:self-start cursor-pointer">
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-2 border-border/80 bg-muted/40 shadow-sm transition-all duration-300 group-hover:border-foreground/50 sm:h-40 sm:w-40 md:h-44 md:w-44">
            <img
              src={profile.avatar}
              alt={profile.fullName}
              className="h-full w-full object-cover object-top grayscale-0 contrast-100 brightness-100 sm:dark:grayscale sm:dark:contrast-[1.08] sm:dark:brightness-[0.98] transition-all duration-500 ease-out sm:dark:group-hover:grayscale-0 sm:dark:group-hover:contrast-100 sm:dark:group-hover:brightness-100 group-hover:scale-105"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-xs ring-1 ring-border">
            <ActiveDot size="md" />
          </span>
        </div>
      </div>

      {/* ── Affiliations Strip ── */}
      <div className="my-7 grid grid-cols-3 divide-x divide-border border-y border-border py-4 text-left">
        <div className="pr-3">
          <span className="block font-mono text-xs font-bold text-foreground">
            Civentral Portal
          </span>
          <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Capstone Lead
          </span>
        </div>

        <div className="px-3">
          <span className="block font-mono text-xs font-bold text-foreground">
            Roppets
          </span>
          <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Project-Based Dev
          </span>
        </div>

        <div className="pl-3">
          <span className="block font-mono text-xs font-bold text-foreground truncate">
            Bestlink College
          </span>
          <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            BSIT · Seeking OJT
          </span>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div className="grid grid-cols-3 divide-x divide-border border-b border-border pb-6 text-left">
        <div className="pr-3">
          <span className="font-mono text-xl font-bold text-foreground sm:text-2xl">
            1,000+
          </span>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            citizens served
          </p>
        </div>

        <div className="px-3">
          <span className="font-mono text-xl font-bold text-foreground sm:text-2xl">
            2+ yrs
          </span>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            shipping code
          </p>
        </div>

        <div className="pl-3">
          <span className="font-mono text-xl font-bold text-foreground sm:text-2xl">
            Live
          </span>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Gov Platform
          </p>
        </div>
      </div>
    </section>
  );
}
