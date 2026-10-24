"use client";

import {
  ExternalLink,
  Github,
  Code2,
  Rocket,
  GraduationCap,
} from "lucide-react";
import { TechIconBadgeList } from "@/components/ui-custom/tech-icon-badge";

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
}

const PROJECTS_DATA: ProjectItem[] = [
  // ── FEATURED HIGHLIGHTS & LIVE PRODUCTION PLATFORMS ──
  {
    id: "civentral-web",
    category: "gov",
    badge: "Capstone Platform",
    role: "Capstone Lead Developer",
    tag: "South Caloocan City · Live",
    title: "Civentral Health & Sanitation Portal",
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
  return (
    <section id="projects" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            01 — projects
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
            4 featured production systems &amp; live platforms
          </p>
        </div>

        <a
          href="https://github.com/Watot12345"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          all repositories (@Watot12345) ↗
        </a>
      </div>

      {/* 2-Column Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            data-sound="tick"
            className="group relative rounded-2xl border border-border bg-card/90 backdrop-blur-xs p-5 shadow-xs transition-all duration-200 hover:border-foreground/40 hover:bg-card hover:shadow-md flex flex-col justify-between"
          >
            <div>
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-1.5">
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

              {/* Media Thumbnail */}
              <div data-sound="tick" className="mt-3 overflow-hidden rounded-xl border border-border bg-muted aspect-[16/9] cursor-pointer">
                {project.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-3 font-mono text-xs">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card shadow-xs">
                      {project.category === "personal" ? (
                        <Rocket className="h-4 w-4 text-foreground" />
                      ) : project.category === "school" ? (
                        <GraduationCap className="h-4 w-4 text-foreground" />
                      ) : (
                        <Code2 className="h-4 w-4 text-foreground" />
                      )}
                    </div>
                    <span className="mt-1.5 text-[10px] font-semibold text-foreground text-center line-clamp-1">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Text Description */}
              <div className="mt-3">
                <h3 className="font-mono text-sm font-bold text-foreground">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="font-mono text-[11px] font-semibold text-muted-foreground mt-0.5">
                    Role: <span className="text-foreground">{project.role}</span>
                  </p>
                )}
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="mt-3">
                <TechIconBadgeList items={project.tech} />
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-foreground hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Live Site ↗</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline"
                  >
                    <Github className="h-3 w-3" />
                    <span>Code ↗</span>
                  </a>
                )}
              </div>

              <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
