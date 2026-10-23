"use client";

import { useState } from "react";
import { ExternalLink, Github, Code2, Sparkles, Rocket, GraduationCap } from "lucide-react";

type ProjectCategory = "all" | "client" | "personal" | "gov" | "school";

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
  // ── LIVE SITES FIRST (Always pinned at top) ──
  {
    id: "civentral-web",
    category: "gov",
    badge: "Live Government Platform",
    role: "Co-Founder & Lead Dev",
    tag: "South Caloocan City",
    title: "Civentral Web",
    description:
      "Production digital health and sanitation services portal deployed for Caloocan City. Replaced manual paper filing with real-time status updates and digital citizen record management for 1,000+ residents.",
    image: "/civentral-web.png",
    liveUrl: "https://healthsanitation.civentral.tech/",
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
    githubUrl: "https://github.com/Raffy-3350/CitizenApp-HealthSanitation.git",
    tech: ["React Native", "Expo", "Supabase", "Tailwind CSS", "REST API"],
    metrics: "Real-time Push & Sync",
  },
  {
    id: "sjdm-legislative",
    category: "client",
    badge: "Municipal Archive System",
    role: "Main Developer",
    tag: "City of San Jose Del Monte",
    title: "SJDM Legislative Research & Ordinance Archive",
    description:
      "Official municipal legislative records, city ordinance search engine, and council resolution archive platform live at lrpaies.sjdm-legislative.com.",
    liveUrl: "https://lrpaies.sjdm-legislative.com",
    githubUrl: "https://github.com/Watot12345/sjdm-legislative-research.git",
    tech: ["PHP", "MySQL", "Full-Text Search", "Municipal Archive"],
    metrics: "Production Live Portal",
  },
  {
    id: "performance-development",
    category: "client",
    badge: "Hospitality Operations",
    role: "Co-Developer",
    tag: "Oxford Suites Makati",
    title: "Oxford Suites Makati — Performance Development System",
    description:
      "Corporate staff performance evaluation, KPI tracking, and hospitality operations management system deployed for Oxford Suites Makati.",
    liveUrl: "https://performancedevelopment.oxfordsuitesmakati.io/",
    githubUrl: "https://github.com/Watot12345/PerformanceDevelopment.git",
    tech: ["JavaScript", "Web Architecture", "Hospitality Management", "Performance KPIs"],
    metrics: "Production Live Portal",
  },
  {
    id: "bcp-attendance",
    category: "client",
    badge: "Institutional Attendance",
    role: "Co-Developer",
    tag: "Bestlink College (BCP)",
    title: "BCP Student & Staff Attendance Portal",
    description:
      "Production school attendance monitoring portal deployed at attendancem.bcpsms1.com. Features QR check-in, real-time logging, and administrative reporting.",
    liveUrl: "https://attendancem.bcpsms1.com",
    githubUrl: "https://github.com/Watot12345/Attendance-_Management_System.git",
    tech: ["PHP", "MySQL", "QR Verification", "Production Portal"],
    metrics: "Production Live Portal",
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

  // ── PERSONAL & STARTUPS ──
  {
    id: "hjobscraper",
    category: "personal",
    badge: "Automation Tool",
    role: "Lead Developer",
    tag: "Web Crawler & Scraper",
    title: "HJobScraper — Automated Job Crawler",
    description:
      "Automated web crawler and job listing aggregator extracting real-time engineering opportunities and filtering openings by tech stack and location.",
    githubUrl: "https://github.com/Watot12345/hjobscraper.git",
    tech: ["Python", "Web Scraping", "Data Extraction", "Automation"],
    metrics: "Automated Data Pipeline",
  },
  {
    id: "soleverse",
    category: "personal",
    badge: "E-Commerce Experience",
    role: "Creator & Developer",
    tag: "Next.js & Tailwind CSS",
    title: "SoleVerse — Footwear E-Commerce Platform",
    description:
      "Modern futuristic sneaker showcase and e-commerce web platform featuring interactive catalog navigation, dark aesthetic design, and responsive shopping workflows.",
    image: "/soleverse.png",
    liveUrl: "https://sole-verse-chronos-main-6vqzi6j5d-joshua-sierras-projects.vercel.app",
    githubUrl: "https://github.com/Watot12345/sole-verse-chronos-main.git",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: "Live on Vercel",
  },
  {
    id: "sarisari-app",
    category: "personal",
    badge: "Startup Mobile App",
    role: "Founder & Lead Developer",
    tag: "Flutter / Dart",
    title: "SariSari App — Retail POS & Inventory",
    description:
      "A mobile-first inventory and point-of-sale platform tailored for neighbourhood retail stores (sari-sari stores) in the Philippines with offline-first transaction support.",
    liveUrl: "https://watot12345.github.io/sarisariApp/",
    githubUrl: "https://github.com/Watot12345/sarisariApp.git",
    tech: ["Flutter", "Dart", "Mobile UI", "SQLite", "Offline-First"],
    metrics: "Live on GitHub Pages",
  },
  {
    id: "tenera-app",
    category: "personal",
    badge: "Personal Venture",
    role: "Co-Founder & Architect",
    tag: "Full-Stack Ecosystem",
    title: "Tenera Platform",
    description:
      "Modular full-stack web and cloud service ecosystem exploring automated business workflows, multi-tenant database models, and modern UI engineering.",
    githubUrl: "https://github.com/Watot12345/Tenera.git",
    tech: ["TypeScript", "Full-Stack", "Modular Services", "Cloud Database"],
    metrics: "Personal Venture",
  },
  {
    id: "expense-tracker",
    category: "personal",
    badge: "Fintech Utility",
    role: "Creator & Developer",
    tag: "TypeScript & React",
    title: "Expense Tracker Utility",
    description:
      "Personal budgeting and expenditure logger with monthly analytics visualization, category tagging, and local persistence for financial tracking.",
    githubUrl: "https://github.com/Watot12345/Expense-Tracker.git",
    tech: ["TypeScript", "React", "Data Visualization", "Tailwind CSS"],
    metrics: "Financial Analytics",
  },

  // ── CLIENT SYSTEMS (Continued) ──
  {
    id: "roppet-app",
    category: "client",
    badge: "Client Production System",
    role: "Main Developer",
    tag: "Theater & Events",
    title: "Roppets Puppet Production Management",
    description:
      "Internal production management, event scheduling, bookings, and inventory platform deployed live at roppets.onlinewebshop.net.",
    liveUrl: "http://roppets.onlinewebshop.net",
    githubUrl: "https://github.com/Watot12345/roppet.git",
    tech: ["PHP", "MySQL", "Event Booking", "Management System"],
    metrics: "Production Live Portal",
  },

  // ── SCHOOL / ACADEMIC PROJECTS ──
  {
    id: "attendance-payroll",
    category: "school",
    badge: "Academic Project",
    role: "Main Developer",
    tag: "Enterprise System",
    title: "Attendance & Payroll Management System",
    description:
      "Automated employee attendance tracking with biometric/clock-in logging, tax calculations, government deductions, and automated payroll generation.",
    githubUrl: "https://github.com/Watot12345/Attendance-Management-payroll.git",
    tech: ["PHP", "MySQL", "Payroll Computation", "Attendance Logging"],
    metrics: "Full Payroll Automation",
  },
  {
    id: "inventory-system",
    category: "school",
    badge: "Academic Project",
    role: "Main Developer",
    tag: "Warehouse Management",
    title: "Enterprise Inventory System",
    description:
      "Digital warehouse inventory tracking, stock in/out logging, reorder threshold alerts, and supplier record management.",
    githubUrl: "https://github.com/Watot12345/inventory-system.git",
    tech: ["PHP", "MySQL", "Inventory Tracking", "Bootstrap"],
    metrics: "Stock & Reorder Alerts",
  },
  {
    id: "logistics-system",
    category: "school",
    badge: "Academic Project",
    role: "Main Developer",
    tag: "Fleet Operations",
    title: "Logistics & Freight Tracking System",
    description:
      "End-to-end cargo shipment, driver assignment, vehicle dispatch, and warehouse freight tracker with automated delivery status updates.",
    githubUrl: "https://github.com/Watot12345/Logistics-System.git",
    tech: ["PHP", "MySQL", "Dispatch Logic", "Relational Database"],
    metrics: "Fleet & Cargo Dispatch",
  },
  {
    id: "barkadahub-app",
    category: "school",
    badge: "Academic Project",
    role: "Co-Developer",
    tag: "Campus Social Platform",
    title: "BarkadaHub Mobile App",
    description:
      "Collaborative mobile social connection platform built for student groups and campus communities.",
    githubUrl: "https://github.com/zel-asp/BarkadaHubApp.git",
    tech: ["HTML5", "JavaScript", "Mobile App", "CSS3"],
    metrics: "Campus Mobile Hub",
  },
];

export function BrylProjects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered = PROJECTS_DATA.filter((p) => {
    if (filter === "client") return p.category === "client";
    if (filter === "personal") return p.category === "personal";
    if (filter === "gov") return p.category === "gov";
    if (filter === "school") return p.category === "school";
    return true;
  });

  // Always ensure projects with liveUrl appear at the top
  const sorted = [...filtered].sort((a, b) => (b.liveUrl ? 1 : 0) - (a.liveUrl ? 1 : 0));

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
          onClick={() => setFilter("client")}
          className={`rounded-md px-3 py-1 transition-colors ${
            filter === "client"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Client Systems ({PROJECTS_DATA.filter((p) => p.category === "client").length})
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
          Personal Projects ({PROJECTS_DATA.filter((p) => p.category === "personal").length})
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
          onClick={() => setFilter("school")}
          className={`rounded-md px-3 py-1 transition-colors ${
            filter === "school"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          School Projects ({PROJECTS_DATA.filter((p) => p.category === "school").length})
        </button>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        {sorted.map((project) => (
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

              {project.liveUrl && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live Site
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
                    ) : project.category === "school" ? (
                      <GraduationCap className="h-5 w-5 text-foreground" />
                    ) : (
                      <Code2 className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                  <span className="mt-2 text-[11px] font-semibold text-foreground text-center">
                    {project.category === "personal"
                      ? "Personal Project"
                      : project.category === "school"
                      ? "Academic Project"
                      : "Client System"}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    System Architecture
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
