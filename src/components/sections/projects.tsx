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
import { cn } from "@/lib/utils";

/**
 * Projects section: filterable grid of featured project cards that
 * open a detailed modal with gallery, features, challenges, and results.
 */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"All" | "Featured">("All");

  const visibleProjects =
    filter === "Featured" ? projects.filter((p) => p.featured) : projects;

  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Projects I&apos;m{" "}
              <span className="text-gradient-fire">proud of</span>
            </>
          }
          description="A selection of products and experiences I've designed and engineered. Click any project to dive deeper."
        />

        {/* Filter */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(["All", "Featured"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                filter === f ? "text-white" : "text-muted-foreground hover:text-white"
              )}
              style={
                filter === f
                  ? {
                      background: "linear-gradient(135deg, #dc2626, #991b1b)",
                      boxShadow: "0 4px 15px -3px rgba(220,38,38,0.4)",
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {f === "Featured" ? "⭐ Featured" : "All Projects"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.button
                key={project.id}
                layout
                type="button"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-colors hover:border-crimson/40"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

                  {/* Category badge */}
                  <span
                    className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                  >
                    {project.category}
                  </span>

                  {/* Featured star */}
                  {project.featured ? (
                    <span
                      className="absolute right-4 top-4 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                      style={{
                        backgroundColor: "rgba(220,38,38,0.3)",
                        border: "1px solid rgba(220,38,38,0.5)",
                      }}
                    >
                      ⭐ Featured
                    </span>
                  ) : null}

                  {/* Quick links */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:bg-crimson"
                      aria-label="View source on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:bg-crimson"
                      aria-label="Visit live site"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Folder className="h-3.5 w-3.5" />
                    {project.year}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-crimson">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
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

      {/* Details modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

// ---------------------------------------------------------------------------
// Project Details Modal
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass-strong relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition-colors hover:bg-crimson"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                  style={{
                    backgroundColor: "rgba(220,38,38,0.3)",
                    border: "1px solid rgba(220,38,38,0.5)",
                  }}
                >
                  {project.category}
                </span>
                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <MetaItem icon={Calendar} label="Year" value={String(project.year)} />
                <MetaItem icon={User} label="Role" value={project.role} />
                <MetaItem icon={Clock} label="Duration" value={project.duration} />
                <MetaItem icon={Folder} label="Category" value={project.category} />
              </div>

              {/* Description */}
              <section className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Overview
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.fullDescription}
                </p>
              </section>

              {/* Features */}
              <section className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Features
                </h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "#dc2626" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenges */}
              <section className="mt-8">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <Target className="h-4 w-4" style={{ color: "#dc2626" }} />
                  The Challenge
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.challenges}
                </p>
              </section>

              {/* Results */}
              <section className="mt-8">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <TrendingUp className="h-4 w-4" style={{ color: "#dc2626" }} />
                  Results & Impact
                </h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2.5 rounded-xl border border-crimson/20 p-3 text-sm text-white"
                      style={{
                        backgroundColor: "rgba(220,38,38,0.06)",
                        borderColor: "rgba(220,38,38,0.2)",
                      }}
                    >
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#dc2626" }} />
                      {result}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech stack */}
              <section className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              <section className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Gallery
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {project.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="aspect-video w-full rounded-xl border border-white/10 object-cover"
                    />
                  ))}
                </div>
              </section>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #dc2626, #991b1b)",
                    boxShadow: "0 8px 25px -5px rgba(220,38,38,0.5)",
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
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
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5" style={{ color: "#dc2626" }} />
        {label}
      </div>
      <p className="mt-1.5 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
