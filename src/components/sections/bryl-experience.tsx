"use client";

import { useState, useCallback, useRef } from "react";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { TechIconBadgeList } from "@/components/ui-custom/tech-icon-badge";
import { cn } from "@/lib/utils";

interface ExperienceRow {
  year: string;
  role: string;
  company: string;
  period: string;
  location: string;
  shortLabel: string;
  bullets: string[];
  stack: string[];
}

const EXPERIENCES: ExperienceRow[] = [
  {
    year: "2026",
    role: "Project-Based Developer",
    company: "Roppets",
    period: "Aug 2026 — Present",
    location: "Mandaluyong / Remote",
    shortLabel: "2026 · Roppets",
    bullets: [
      "Developed and shipped full-stack web features used by real end users in production environments.",
      "Built and maintained backend REST APIs using PHP and JavaScript.",
      "Refactored data-fetching patterns across the codebase, reducing component load times significantly.",
    ],
    stack: ["JavaScript", "HTML", "Tailwind CSS", "PHP", "REST APIs"],
  },
  {
    year: "2026",
    role: "Lead Developer (Capstone Project)",
    company: "Caloocan City Government",
    period: "June 2026 — Present",
    location: "Caloocan City",
    shortLabel: "2026 · Capstone",
    bullets: [
      "Architected database schema and server logic for healthsanitation.civentral.tech — a live government health and sanitation platform actively serving 1,000+ citizens in Caloocan City.",
      "Integrated Supabase real-time sync enabling instant status updates for citizen service requests.",
      "Delivered a production system that significantly reduced manual paperwork processing time for government staff.",
    ],
    stack: ["PHP", "JavaScript", "PostgreSQL", "Supabase", "React Native", "Tailwind CSS"],
  },
  {
    year: "2024",
    role: "Independent Full-Stack Developer",
    company: "Freelance & Public Sector Clients",
    period: "2024 — Present",
    location: "Philippines",
    shortLabel: "2024 · Freelance",
    bullets: [
      "Civentral Web & Mobile App (Caloocan City Government · 2026 – Present): Architected database schema and server logic for healthsanitation.civentral.tech — a live government health and sanitation platform actively serving 1,000+ citizens in South Caloocan City.",
      "SariSari Store POS System (Personal / Founder · 2026 – Present): Designed and developed an offline-first Android POS app that helps small neighborhood stores manage sales, stock levels, and customer credit without needing a stable internet connection.",
      "SaaS Platform & Mobile Apps (Personal / Client Projects · 2024– Present): SaaS app with multi-tenant architecture and subscription management, and cross-platform mobile apps via React Native (Expo) and Flutter with REST API integrations.",
    ],
    stack: ["PHP", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "React Native", "Expo", "Flutter", "SQLite", "Next.js", "TypeScript"],
  },
  {
    year: "2021",
    role: "Work Immersion Intern",
    company: "Barangay Gumaok West",
    period: "2021 — 2022",
    location: "San Jose del Monte, Bulacan",
    shortLabel: "2021 · Immersion",
    bullets: [
      "Completed public service work immersion; gained practical experience in government office workflows and digital record management.",
    ],
    stack: ["Office Systems", "Data Management"],
  },
];

export function BrylExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartXRef = useRef<number | null>(null);

  const exp = EXPERIENCES[currentIndex];

  const goToNext = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
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
    <section id="experience" className="py-12 border-b border-border">
      {/* Book Turn Keyframes */}
      <style>{`
        @keyframes experienceBookTurnNext {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-4deg) translateX(14px) scale(0.99);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateX(0) scale(1);
          }
        }
        @keyframes experienceBookTurnPrev {
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

      {/* Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="flex items-center gap-3">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            02 — experience
          </h2>
          <span className="font-mono text-[11px] text-muted-foreground">
            [ {String(currentIndex + 1).padStart(2, "0")} / {String(EXPERIENCES.length).padStart(2, "0")} ]
          </span>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Arrow navigation buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={goToPrev}
              data-sound="tick"
              aria-label="Previous role"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              data-sound="tick"
              aria-label="Next role"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted hover:text-foreground cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <span className="text-border">·</span>

          <a
            href="/resume.pdf?v=2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>full resume (pdf) ↗</span>
          </a>
        </div>
      </div>

      {/* Horizontal Timeline Quick Jump Pills */}
      <div className="mb-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {EXPERIENCES.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
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

      {/* Book-Flip / Horizontal Slide Experience Card */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden"
      >
        <div
          key={currentIndex}
          data-sound="tick"
          style={{
            animation: `${direction === "next" ? "experienceBookTurnNext" : "experienceBookTurnPrev"} 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          }}
          className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-foreground/30"
        >
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
            <div>
              <h3 className="font-mono text-sm sm:text-base font-bold text-foreground">
                {exp.role}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                <span className="font-semibold text-foreground">{exp.company}</span> · {exp.location}
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground shrink-0 mt-1 sm:mt-0">
              {exp.period}
            </span>
          </div>

          {/* Bullets */}
          <ul className="mt-3.5 flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tech Icons with Tooltips */}
          <div className="mt-4 pt-3 border-t border-border/60">
            <TechIconBadgeList items={exp.stack} />
          </div>
        </div>
      </div>
    </section>
  );
}
