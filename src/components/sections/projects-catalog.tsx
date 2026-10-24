"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Search,
  Code2,
  Rocket,
  GraduationCap,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { ALL_PROJECTS, type ProjectCatalogItem } from "@/data/projects-data";
import { TechIconBadgeList } from "@/components/ui-custom/tech-icon-badge";
import { ActiveDot } from "@/components/ui-custom/active-dot";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | "gov" | "personal" | "client" | "school";

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "gov", label: "Government & Civic" },
  { id: "personal", label: "Startups & Personal" },
  { id: "client", label: "Client & Institutional" },
  { id: "school", label: "Academic Projects" },
];

export function ProjectsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tag.toLowerCase().includes(q) ||
        (project.role && project.role.toLowerCase().includes(q)) ||
        project.tech.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const liveSitesCount = useMemo(() => {
    return ALL_PROJECTS.filter((p) => p.liveUrl).length;
  }, []);

  return (
    <div>
      {/* Back button & page header */}
      <div className="mb-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mb-3"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>back to overview</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-border pb-5">
          <div>
            <h1 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              All Projects &amp; Repositories
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Complete catalog of 17 civic platforms, mobile apps, and full-stack software built by Joshua Sierra.
            </p>
          </div>

          <a
            href="https://github.com/Watot12345"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground hover:underline shrink-0"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub (@Watot12345) ↗</span>
          </a>
        </div>
      </div>

      {/* Quick stats strip */}
      <div className="mb-6 grid grid-cols-3 divide-x divide-border border-b border-border pb-5 text-left font-mono">
        <div className="pr-3">
          <span className="text-lg sm:text-xl font-bold text-foreground">
            {ALL_PROJECTS.length}
          </span>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
            Total Projects
          </p>
        </div>
        <div className="px-3">
          <span className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {liveSitesCount}
          </span>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
            Live Deployments
          </p>
        </div>
        <div className="pl-3">
          <span className="text-lg sm:text-xl font-bold text-foreground">
            100%
          </span>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
            Open Source / Verifiable
          </p>
        </div>
      </div>

      {/* Controls: Search input + Category Filter Pills */}
      <div className="mb-6 flex flex-col gap-3">
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, role, or tech stack (e.g. Next.js, PHP, Supabase)..."
            className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2 font-mono text-xs text-foreground placeholder:text-muted-foreground/70 focus:outline-hidden focus:ring-1 focus:ring-foreground transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count =
              cat.id === "all"
                ? ALL_PROJECTS.length
                : ALL_PROJECTS.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                data-sound="tick"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-mono text-xs transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "border border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 text-[10px]",
                    isActive
                      ? "bg-background/20 text-background"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            No projects found matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-3 font-mono text-xs text-foreground underline hover:no-underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              data-sound="tick"
              className="group relative rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-foreground/40 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Top badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {project.badge}
                  </span>

                  {project.liveUrl && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <ActiveDot size="xs" />
                      Live
                    </span>
                  )}

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-amber-600 dark:text-amber-400">
                      <Sparkles className="h-2.5 w-2.5" />
                      Featured
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

                {/* Media thumbnail */}
                <div data-sound="tick" className="overflow-hidden rounded-xl border border-border bg-muted aspect-[16/9] cursor-pointer">
                  {project.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                {/* Title & Description */}
                <div className="mt-3.5">
                  <h3 className="font-mono text-sm sm:text-base font-bold text-foreground">
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

                {/* Tech badges */}
                <div className="mt-3.5">
                  <TechIconBadgeList items={project.tech} />
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-xs">
                <div className="flex items-center gap-2.5">
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
      )}
    </div>
  );
}
