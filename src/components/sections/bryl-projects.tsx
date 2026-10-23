"use client";

import { useState } from "react";
import { ExternalLink, Github, Code2, Sparkles, Rocket } from "lucide-react";

type ProjectCategory = "all" | "personal" | "gov" | "client";

interface ProjectItem {
  id: string;
  category: "gov" | "client" | "personal";
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
  // ── 1. Flagship Government Platforms ──
  {
    id: "civentral-web",
    category: "gov",
    badge: "Live Government Platform",
    role: "Co-Founder & Lead Dev",
    tag: "South Caloocan City",
    title: "Civentral Web",
    description:
      "A production digital health and sanitation services portal deployed for Caloocan City. Replaced manual paper filing with real-time status updates and digital citizen record management.",
    image: "/civentral-web.png",
    liveUrl: "https://civentral.tech",
    githubUrl: "https://github.com/Watot12345/Civentral_HealthSanitation--Web.git",
    tech: ["PHP", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    metrics: "1,000+ Active Citizens Served",
  },
  {
    id: "civentral-app",
    category: "gov",
    badge: "Cross-Platform Mobile App",
    role: "Co-Founder & Mobile Lead",
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

  // ── 2. Founder & Personal Projects ──
  {
    id: "sarisari-app",
    category: "personal",
    badge: "Startup Mobile App",
    role: "Founder & Lead Developer",
    tag: "Flutter / Dart",
    title: "SariSari App — Retail POS & Inventory",
    description:
      "A mobile-first inventory and point-of-sale platform tailored for neighbourhood retail stores (sari-sari stores) in the Philippines. Streamlines daily micro-transactions, supplier re-orders, and offline-capable credit bookkeeping.",
    githubUrl: "https://github.com/Watot12345/sarisariApp",
    tech: ["Flutter", "Dart", "Mobile UI", "SQLite", "Offline-First", "State Management"],
    metrics: "Founder Project",
  },
  {
    id: "mystartup-app",
    category: "personal",
    badge: "Startup Venture",
    role: "Founder / Co-Founder",
    tag: "Web Architecture",
    title: "MyStartUp Platform",
    description:
      "A digital business launchpad framework designed to rapidly prototype and launch digital micro-services, customer onboarding funnels, and automated payment/billing flows.",
    githubUrl: "https://github.com/Watot12345/MystartUp",
    tech: ["JavaScript", "Web Architecture", "REST APIs", "Modern UI", "Modular Design"],
    metrics: "Startup Venture",
  },
  {
    id: "tenera-app",
    category: "personal",
    badge: "Personal Venture",
    role: "Co-Founder & Creator",
    tag: "Full-Stack Ecosystem",
    title: "Tenera Platform",
    description:
      "Modular full-stack web and cloud service ecosystem exploring automated business workflows, multi-tenant database models, and responsive client interfaces.",
    githubUrl: "https://github.com/Watot12345/Tenera",
    tech: ["TypeScript", "Full-Stack", "Modular Services", "Cloud Database"],
    metrics: "Personal Venture",
  },
  {
    id: "soleverse-chronos",
    category: "personal",
    badge: "E-Commerce Storefront",
    role: "Creator & Lead Dev",
    tag: "Next.js & TypeScript",
    title: "SoleVerse Chronos Storefront",
    description:
      "Modern high-performance footwear and apparel storefront featuring dynamic product catalogs, cart state management, responsive checkout preview, and Vercel edge deployment.",
    liveUrl: "https://sole-verse-chronos-main.vercel.app",
    githubUrl: "https://github.com/Watot12345/sole-verse-chronos-main",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "State Management"],
    metrics: "Live on Vercel",
  },
  {
    id: "expense-tracker",
    category: "personal",
    badge: "Fintech Utility",
    role: "Personal Project",
    tag: "TypeScript & React",
    title: "Expense Tracker Utility",
    description:
      "Personal budgeting and expenditure logger with monthly analytics visualization, category tagging, and local persistence for financial health tracking.",
    githubUrl: "https://github.com/Watot12345/Expense-Tracker",
    tech: ["TypeScript", "React", "Data Visualization", "Tailwind CSS"],
    metrics: "Financial Analytics",
  },
  {
    id: "attendance-qr",
    category: "personal",
    badge: "Identity & Security",
    role: "Creator & Developer",
    tag: "QR Code Check-in",
    title: "Attendance Management with QR Login",
    description:
      "Real-time QR-code scanning attendance management platform with instant clock-in timestamps, role-based access, and automated timesheet reporting.",
    githubUrl: "https://github.com/Watot12345/Attendance-_Management_System",
    tech: ["PHP", "JavaScript", "QR Scanner Integration", "MySQL"],
    metrics: "Automated Clock-In",
  },

  // ── 3. Government & Public Sector Systems ──
  {
    id: "sjdm-legislative",
    category: "gov",
    badge: "City Council Archive",
    role: "Lead Backend Engineer",
    tag: "City of San Jose Del Monte",
    title: "SJDM Legislative Research Portal",
    description:
      "Legislative research repository and public ordinance search system engineered for city government researchers, legal staff, and local governance analysis.",
    githubUrl: "https://github.com/Watot12345/sjdm-legislative-research",
    tech: ["PHP", "MySQL", "Full-Text Search", "Document Management"],
    metrics: "City Council Portal",
  },
  {
    id: "barangay-web",
    category: "gov",
    badge: "Public Sector Portal",
    role: "Full-Stack Developer",
    tag: "Local Government Unit",
    title: "Barangay Resident & Attendance Portal",
    description:
      "Community digital records and resident issuance portal for barangay operations. Handles clearance requests, resident profiling, and official record issuance.",
    liveUrl: "https://barangay-web-sigma.vercel.app",
    githubUrl: "https://github.com/Watot12345/BarangayWeb",
    tech: ["HTML5", "JavaScript", "Tailwind CSS", "Vercel"],
    metrics: "Live on Vercel",
  },

  // ── 4. Client & Enterprise Systems ──
  {
    id: "clinic-management",
    category: "client",
    badge: "Client Management System",
    role: "Full-Stack Freelance",
    tag: "Healthcare & Services",
    title: "Clinic & Salon Management Systems",
    description:
      "End-to-end management systems built for local clinics and service businesses. Includes online appointment scheduling, patient records, staff assignment, and automated billing workflows.",
    githubUrl: "https://github.com/Watot12345",
    tech: ["Laravel", "PHP", "React", "MySQL", "Tailwind CSS"],
    metrics: "Full CRUD & Billing",
  },
  {
    id: "logistics-system",
    category: "client",
    badge: "Supply Chain System",
    role: "Backend Developer",
    tag: "Fleet Operations",
    title: "Logistics & Freight Tracking System",
    description:
      "End-to-end cargo shipment, driver assignment, vehicle dispatch, and warehouse freight tracker with automated delivery status updates.",
    githubUrl: "https://github.com/Watot12345/Logistics-System",
    tech: ["PHP", "MySQL", "Dispatch Logic", "Relational Database"],
    metrics: "Freight & Delivery Dispatch",
  },
];

export function BrylProjects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered = PROJECTS_DATA.filter((p) => {
    if (filter === "personal") return p.category === "personal";
    if (filter === "gov") return p.category === "gov";
    if (filter === "client") return p.category === "client";
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
          all repositories (@Watot12345) ↗
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="mb-7 flex flex-wrap gap-1.5 font-mono text-xs">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-md px-3 py-1 transition-colors ${
            filter === "all"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({PROJECTS_DATA.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter("personal")}
          className={`rounded-md px-3 py-1 transition-colors ${
            filter === "personal"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Personal & Startups ({PROJECTS_DATA.filter((p) => p.category === "personal").length})
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
          Government Platforms ({PROJECTS_DATA.filter((p) => p.category === "gov").length})
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
          Client Systems ({PROJECTS_DATA.filter((p) => p.category === "client").length})
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

              {project.role && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="h-2.5 w-2.5" />
                  {project.role}
                </span>
              )}

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
              {/* Thumbnail / Architecture schematic */}
              {project.image ? (
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-border bg-muted sm:w-48 sm:aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale contrast-105 transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative flex aspect-[16/10] w-full shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-muted/30 p-4 font-mono text-xs sm:w-48 sm:aspect-[4/3]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card shadow-xs">
                    {project.category === "personal" ? (
                      <Rocket className="h-5 w-5 text-foreground" />
                    ) : (
                      <Code2 className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                  <span className="mt-2 text-[11px] font-semibold text-foreground text-center">
                    {project.category === "personal" ? "Startup Architecture" : "System Architecture"}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {project.role ? project.role : "Open Source"}
                  </span>
                </div>
              )}

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
