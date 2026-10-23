"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  X,
  Calendar,
  User,
  Clock,
  Target,
  TrendingUp,
  Folder,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { MobileBottomSheet } from "@/components/ui-custom/mobile-bottom-sheet";
import { cn } from "@/lib/utils";

/**
 * Clean, formal projects section with interactive details modal.
 */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"All" | "Featured">("All");

  const visibleProjects =
    filter === "Featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Projects I&apos;m <span className="text-gradient-fire">proud of</span>
            </>
          }
          description="A selection of software platforms and web experiences I've engineered. Click any project to view case study details."
        />

        {/* Filter */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(["All", "Featured"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-lg px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                filter === f
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {f === "Featured" ? "⭐ Featured" : "All Projects"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.button
                key={project.id}
                layout
                type="button"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -3 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left shadow-xs transition-colors hover:border-foreground/30"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span className="absolute left-3.5 top-3.5 rounded-md border border-border/80 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-xs backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Featured badge */}
                  {project.featured ? (
                    <span className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-md border border-border/80 bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-xs backdrop-blur-md">
                      ⭐ Featured
                    </span>
                  ) : null}

                  {/* Quick links */}
                  <div className="absolute bottom-3.5 right-3.5 flex gap-2 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/90 text-foreground shadow-xs backdrop-blur-md transition-colors hover:bg-muted"
                      aria-label="View source on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/90 text-foreground shadow-xs backdrop-blur-md transition-colors hover:bg-muted"
                      aria-label="Visit live site"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Folder className="h-3.5 w-3.5" />
                    {project.year}
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 ? (
                      <span className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                        +{project.techStack.length - 4}
                      </span>
                    ) : null}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop details modal */}
      <div className="hidden md:block">
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>

      {/* Native mobile drag-to-dismiss bottom sheet */}
      <div className="md:hidden">
        <MobileBottomSheet
          open={Boolean(selectedProject)}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
          title={selectedProject?.title}
          category={selectedProject?.category}
        >
          {selectedProject ? (
            <ProjectDetailsContent project={selectedProject} />
          ) : null}
        </MobileBottomSheet>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Project Details Modal & Content
// ---------------------------------------------------------------------------
interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card text-card-foreground shadow-2xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="sticky right-4 top-4 z-30 float-right m-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-xs transition-colors hover:bg-muted"
              aria-label="Close project details"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/70 to-transparent p-6 sm:p-8">
                <span className="inline-block rounded-md border border-border bg-background/80 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-md">
                  {project.category}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  {project.title}
                </h2>
              </div>
            </div>

            <ProjectDetailsContent project={project} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ProjectDetailsContent({ project }: { project: Project }) {
  return (
    <div className="p-4 sm:p-6">
      {/* Meta grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <MetaItem icon={Calendar} label="Year" value={String(project.year)} />
        <MetaItem icon={User} label="Role" value={project.role} />
        <MetaItem icon={Clock} label="Duration" value={project.duration} />
        <MetaItem icon={Folder} label="Category" value={project.category} />
      </div>

      {/* Description */}
      <section className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Overview
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.fullDescription}
        </p>
      </section>

      {/* Features */}
      <section className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Key Features
        </h3>
        <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/40 p-3 text-xs text-foreground sm:text-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Challenges */}
      <section className="mt-6">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Target className="h-4 w-4 text-primary" />
          The Challenge
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.challenges}
        </p>
      </section>

      {/* Results */}
      <section className="mt-6">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <TrendingUp className="h-4 w-4 text-primary" />
          Results & Impact
        </h3>
        <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
          {project.results.map((result) => (
            <li
              key={result}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/40 p-3 text-xs font-medium text-foreground sm:text-sm"
            >
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {result}
            </li>
          ))}
        </ul>
      </section>

      {/* Tech stack */}
      <section className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Tech Stack
        </h3>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Gallery
        </h3>
        <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="aspect-video w-full rounded-lg border border-border object-cover"
            />
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:text-sm"
        >
          <Github className="h-4 w-4" />
          View Code
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 sm:text-sm"
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      </div>
    </div>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/40 p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </div>
      <p className="mt-1 text-xs font-bold text-foreground sm:text-sm">{value}</p>
    </div>
  );
}
