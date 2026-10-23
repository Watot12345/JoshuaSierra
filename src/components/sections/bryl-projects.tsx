"use client";

import { useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectItem {
  id: string;
  badge: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  metrics?: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "civentral-web",
    badge: "Live Government Platform",
    tag: "South Caloocan City",
    title: "Civentral Web",
    description:
      "A digital health and sanitation services portal deployed for Caloocan City. Replaced manual paper filing with real-time status updates and digital citizen record management.",
    image: "/civentral-web.png",
    liveUrl: "https://civentral.tech",
    githubUrl: "https://github.com/Watot12345/Civentral_HealthSanitation--Web.git",
    tech: ["PHP", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    metrics: "1,000+ Active Citizens Served",
  },
  {
    id: "civentral-app",
    badge: "Cross-Platform Mobile App",
    tag: "Expo / Android & iOS",
    title: "Civentral Mobile App",
    description:
      "Companion mobile application for Caloocan citizens. Allows residents to submit service requests, receive live status notifications, and access city healthcare information on their phones.",
    image: "/civentral-app.png",
    liveUrl: "https://civentral.tech",
    githubUrl: "https://github.com/Raffy-3350/CitizenApp-HealthSanitation.git",
    tech: ["React Native", "Expo", "Supabase", "Tailwind CSS", "REST API"],
    metrics: "Real-time Push & Sync",
  },
  {
    id: "clinic-management",
    badge: "Production Client System",
    tag: "Healthcare & Services",
    title: "Clinic & Salon Management Systems",
    description:
      "End-to-end management systems built for local clinics and service businesses. Includes online appointment scheduling, patient records, staff assignment, and automated billing workflows.",
    image: "/1.png",
    githubUrl: "https://github.com/Watot12345",
    tech: ["Laravel", "PHP", "React", "MySQL", "Tailwind CSS"],
    metrics: "Full CRUD & Billing",
  },
  {
    id: "barangay-san-roque",
    badge: "Public Sector Portal",
    tag: "Local Government Unit",
    title: "Barangay Information & Attendance System",
    description:
      "Community digital record system for Barangay San Roque. Manages resident profiling, barangay clearance issuance, and staff attendance tracking.",
    image: "/profile.png",
    githubUrl: "https://github.com/Watot12345",
    tech: ["JavaScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    metrics: "Digitalized Records",
  },
];

export function BrylProjects() {
  const [filter, setFilter] = useState<"all" | "gov" | "client">("all");

  const filtered = PROJECTS_DATA.filter((p) => {
    if (filter === "gov") return p.id.includes("civentral") || p.id.includes("barangay");
    if (filter === "client") return p.id.includes("clinic");
    return true;
  });

  return (
    <section id="projects" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          01 — projects
        </h2>
        <a
          href="https://github.com/Watot12345"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          all repositories ↗
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="mb-7 flex gap-1.5 font-mono text-xs">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-md px-3 py-1 transition-colors ${
            filter === "all"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter("gov")}
          className={`rounded-md px-3 py-1 transition-colors ${
            filter === "gov"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Government Platforms
        </button>
        <button
          type="button"
          onClick={() => setFilter("client")}
          className={`rounded-md px-3 py-1 transition-colors ${
            filter === "client"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Client Systems
        </button>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group relative rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-200 hover:border-foreground/30 shadow-xs"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                {project.badge}
              </span>
              <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {project.tag}
              </span>
              {project.metrics && (
                <span className="ml-auto font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {project.metrics}
                </span>
              )}
            </div>

            {/* Content & Media Layout */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-border bg-muted sm:w-48 sm:aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Description */}
              <div className="flex-1 min-w-0">
                <h3 className="font-mono text-base font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Direct Action Links */}
                <div className="mt-4 flex items-center gap-3 font-mono text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Site ↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source Code ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
