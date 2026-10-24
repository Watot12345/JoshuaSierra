"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TechIconBadgeList } from "@/components/ui-custom/tech-icon-badge";
import { cn } from "@/lib/utils";

interface ProjectItem {
  id: string;
  category: "gov" | "client" | "personal" | "school";
  badge: string;
  role?: string;
  tag: string;
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  metrics?: string;
  shortLabel: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "civentral-web",
    category: "gov",
    badge: "Capstone Platform",
    role: "Capstone Lead Developer",
    tag: "South Caloocan City · Live",
    title: "Civentral Health & Sanitation Portal",
    shortLabel: "01 · Civentral",
    description:
      "Official capstone web portal deployed for South Caloocan City. Digitized manual paper filings with real-time status updates and citizen record management for 1,000+ residents.",
    image: "/civentral-web.png",
    liveUrl: "https://healthsanitation.civentral.tech/",
    githubUrl: "https://github.com/Watot12345/Civentral_HealthSanitation--Web.git",
    tech: ["PHP", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    metrics: "1,000+ Active Citizens Served",
  },
  {
    id: "sarisari-app",
    category: "personal",
    badge: "Startup Retail POS",
    role: "Founder & Developer",
    tag: "Flutter / Dart · Offline-First",
    title: "SariSari App — Retail POS & Inventory",
    shortLabel: "02 · SariSari App",
    description:
      "A mobile-first inventory and point-of-sale platform tailored for neighborhood retail stores (sari-sari stores) in the Philippines with offline-first transaction support.",
    image: "/sarisari.png",
    liveUrl: "https://watot12345.github.io/sarisariApp/",
    githubUrl: "https://github.com/Watot12345/sarisariApp.git",
    tech: ["Flutter", "Dart", "Mobile UI", "SQLite", "Offline-First"],
    metrics: "Live on GitHub Pages",
  },
  {
    id: "sjdm-legislative",
    category: "client",
    badge: "Municipal Archive System",
    role: "Lead Full-Stack Developer",
    tag: "City of San Jose Del Monte · Live",
    title: "SJDM Legislative Research & Ordinance Archive",
    shortLabel: "03 · SJDM Archive",
    description:
      "Official municipal legislative records, city ordinance search engine, and council resolution archive platform live at lrpaies.sjdm-legislative.com.",
    image: "/sjdm-legislative.png",
    liveUrl: "https://lrpaies.sjdm-legislative.com",
    githubUrl: "https://github.com/Watot12345/sjdm-legislative-research.git",
    tech: ["PHP", "MySQL", "Full-Text Search", "Municipal Archive"],
    metrics: "Production Live Portal",
  },
  {
    id: "soleverse",
    category: "personal",
    badge: "Sneaker eCommerce Store",
    role: "Full-Stack Developer",
    tag: "React 19 & TanStack · Live",
    title: "SoleVerse — Premium Footwear & Sneaker Experience",
    shortLabel: "04 · SoleVerse",
    description:
      "Modern footwear commerce platform engineered for performance, animated transitions, product filtering, responsive cart checkout, and interactive sneaker showcases deployed live at sole-verse-chronos-main.vercel.app.",
    image: "/soleverse.png",
    liveUrl: "https://sole-verse-chronos-main.vercel.app/",
    githubUrl: "https://github.com/Watot12345/sole-verse-chronos-main.git",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: "Live on Vercel",
  },
];

export function BrylProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartXRef = useRef<number | null>(null);

  const project = PROJECTS_DATA[currentIndex];

  const goToNext = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  }, []);

  const goToIndex = useCallback((index: number) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section id="projects" className="py-12 border-b border-border">
      {/* Book Turn Keyframes */}
      <style>{`
        @keyframes projectBookTurnNext {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-4deg) translateX(14px) scale(0.99);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateX(0) scale(1);
          }
        }
        @keyframes projectBookTurnPrev {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(4deg) translateX(-14px) scale(0.99);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateX(0) scale(1);
          }
        }
      `}</style>

      {/* Header with Slide Counter and Left/Right Buttons */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="flex items-center gap-3">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            01 — projects
          </h2>
          <span className="font-mono text-[11px] text-muted-foreground">
            [ {String(currentIndex + 1).padStart(2, "0")} / {String(PROJECTS_DATA.length).padStart(2, "0")} ]
          </span>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Arrow navigation buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={goToPrev}
              data-sound="tick"
              aria-label="Previous project"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              data-sound="tick"
              aria-label="Next project"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <span className="text-border">·</span>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            <span>all projects (17) ↗</span>
          </Link>
        </div>
      </div>

      {/* Horizontal Project Quick Jump Pills */}
      <div className="mb-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {PROJECTS_DATA.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              type="button"
              data-sound="tick"
              onClick={() => goToIndex(idx)}
              className={cn(
                "group inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-mono text-xs transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-foreground text-background font-semibold shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isActive ? "bg-background" : "bg-muted-foreground/60 group-hover:bg-foreground"
                )}
              />
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Single Project Slide Focus Card with Swipe & Book-Turn */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden"
      >
        <article
          key={currentIndex}
          data-sound="tick"
          style={{
            animation: `${direction === "next" ? "projectBookTurnNext" : "projectBookTurnPrev"} 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          }}
          className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-foreground/30 flex flex-col justify-between"
        >
          <div>
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary-foreground">
                {project.badge}
              </span>

              {project.liveUrl && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Live Site
                </span>
              )}

              <span className="rounded-full border border-border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                {project.tag}
              </span>

              {project.metrics && (
                <span className="ml-auto font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {project.metrics}
                </span>
              )}
            </div>

            {/* Media Banner Thumbnail */}
            <div data-sound="tick" className="overflow-hidden rounded-xl border border-border bg-muted aspect-[16/9] cursor-pointer group/img">
              {project.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-3 font-mono text-xs">
                  <span className="text-xs font-semibold text-foreground text-center">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            {/* Title & Description */}
            <div className="mt-4">
              <h3 className="font-mono text-base sm:text-lg font-bold text-foreground">
                {project.title}
              </h3>
              {project.role && (
                <p className="font-mono text-xs font-semibold text-muted-foreground mt-1">
                  Role: <span className="text-foreground">{project.role}</span>
                </p>
              )}
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="mt-4 pt-3 border-t border-border/60">
              <TechIconBadgeList items={project.tech} />
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="mt-5 flex items-center justify-between border-t border-border pt-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Visit Live Site ↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>View Source (GitHub) ↗</span>
                </a>
              )}
            </div>

            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
