"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function BrylHero() {
  return (
    <section id="home" className="pt-2 pb-10">
      <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {profile.fullName}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            I&apos;m a full-stack engineer based in Manila, Philippines. I build modern web platforms and mobile apps, and right now I focus on reliable architectures that serve real people.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Currently shipping production code at <strong className="text-foreground font-semibold">Roppets</strong> and leading <strong className="text-foreground font-semibold">Civentral</strong> — a live government health and sanitation platform actively serving 1,000+ citizens in South Caloocan City.
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
              href="/resume.pdf"
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

        {/* Profile Avatar */}
        <div className="relative shrink-0">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border shadow-xs sm:h-24 sm:w-24">
            <img
              src={profile.avatar}
              alt={profile.fullName}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-background">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
          </span>
        </div>
      </div>

      {/* ── Affiliations Strip ── */}
      <div className="my-7 grid grid-cols-3 divide-x divide-border border-y border-border py-4 text-left">
        <div className="pr-3">
          <span className="block font-mono text-xs font-bold text-foreground">
            Caloocan City Gov
          </span>
          <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Civentral Lead
          </span>
        </div>

        <div className="px-3">
          <span className="block font-mono text-xs font-bold text-foreground">
            Roppets
          </span>
          <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Software Engineer
          </span>
        </div>

        <div className="pl-3">
          <span className="block font-mono text-xs font-bold text-foreground truncate">
            Bestlink College
          </span>
          <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            BS IT · 4th Year
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
