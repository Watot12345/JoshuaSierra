"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Rocket,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  LayoutGrid,
  SlidersHorizontal,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { TechIconBadgeList } from "@/components/ui-custom/tech-icon-badge";
import { cn } from "@/lib/utils";

type ProjectCategory = "personal" | "client" | "gov" | "school" | "all";

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
    image: "/sjdm-legislative.png",
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
    image: "/oxford-suites.png",
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
    image: "/bcp-attendance.png",
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
    tag: "Barangay San Agustin",
    title: "Barangay San Agustin — Community & Resident Portal",
    description:
      "Integrated community platform for resident profiling, disaster relief operations, healthcare records, job matching, and scholarship assistance deployed live at barangay-san-agustin.onrender.com.",
    image: "/barangay-san-agustin.png",
    liveUrl: "https://barangay-san-agustin.onrender.com",
    githubUrl: "https://github.com/Watot12345/BarangayWeb",
    tech: ["HTML5", "JavaScript", "Tailwind CSS", "Render"],
    metrics: "12,000+ Resident Records",
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
    image: "/sarisari.png",
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
    badge: "AI Fintech App",
    role: "Creator & Developer",
    tag: "TypeScript & React",
    title: "PennyFlow — Smart Expense Tracker & AI Coach",
    description:
      "Privacy-first financial tracker and AI coach featuring daily safe-to-spend limits, laser receipt OCR, subscription auditing, and offline-ready persistence live at watot12345.github.io/Expense-Tracker.",
    image: "/expense-tracker.png",
    liveUrl: "https://watot12345.github.io/Expense-Tracker/index.html",
    githubUrl: "https://github.com/Watot12345/Expense-Tracker.git",
    tech: ["TypeScript", "React", "Tailwind CSS", "Data Visualization"],
    metrics: "Live on GitHub Pages",
  },
  {
    id: "emiringkay",
    category: "personal",
    badge: "Real-Time Video Chat",
    role: "Full-Stack Developer",
    tag: "WebRTC & WebSockets",
    title: "Emiringkay — Real-Time Video & Anonymous Chat Plaza",
    description:
      "Modern real-time social video chat and anonymous connection platform. Features mood-based vibe matching (Chill, Vent, Play, Spark, Debate), zero-latency WebRTC video calling, mask mode, and instant skipping deployed live at emiringkay-web.onrender.com.",
    image: "/emiringkay.png",
    liveUrl: "https://emiringkay-web.onrender.com",
    githubUrl: "https://github.com/Watot12345/esmiringkay.git",
    tech: ["WebRTC", "WebSockets", "Laravel", "PHP", "Tailwind CSS", "Render"],
    metrics: "Live on Render",
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
    tag: "Fleet & Logistics Operations",
    title: "Logistics & Freight Tracking System",
    description:
      "Hotel & restaurant logistics management platform handling real-time cargo shipment tracking, smart warehousing inventory, fleet dispatch, and driver assignment deployed live at logistics-system-1cu0.onrender.com.",
    image: "/logistics-system.png",
    liveUrl: "https://logistics-system-1cu0.onrender.com",
    githubUrl: "https://github.com/Watot12345/Logistics-System.git",
    tech: ["PHP", "MySQL", "Dispatch Logic", "Relational Database", "Render"],
    metrics: "Live on Render",
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
  const [filter, setFilter] = useState<ProjectCategory>("personal");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<"carousel" | "list">("carousel");

  const filtered =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  // Always ensure projects with liveUrl appear first
  const sorted = [...filtered].sort(
    (a, b) => (b.liveUrl ? 1 : 0) - (a.liveUrl ? 1 : 0)
  );

  const total = sorted.length;

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (total > 0 ? (prev + 1) % total : 0));
  }, [total]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (total > 0 ? (prev - 1 + total) % total : 0));
  }, [total]);

  // Handle category switch
  const handleFilterChange = (cat: ProjectCategory) => {
    setFilter(cat);
    setCurrentIndex(0);
  };

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlay || isHovered || viewMode !== "carousel" || total <= 1) return;
    const timer = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, viewMode, total, nextProject]);

  // Keyboard arrow navigation
  useEffect(() => {
    if (viewMode !== "carousel") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevProject();
      } else if (e.key === "ArrowRight") {
        nextProject();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, nextProject, prevProject]);

  // Touch Swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextProject();
    } else if (diff < -45) {
      prevProject();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const safeIndex = total > 0 ? Math.min(currentIndex, total - 1) : 0;

  const renderCardContent = (project: ProjectItem) => (
    <article className="group relative rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-200 hover:border-foreground/30 shadow-xs h-full flex flex-col justify-between">
      <div>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover grayscale-0 contrast-100 sm:dark:grayscale sm:dark:contrast-105 transition-all duration-300 sm:dark:group-hover:grayscale-0 group-hover:scale-105"
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

            {/* Tech Icons with Tooltips */}
            <div className="mt-3.5">
              <TechIconBadgeList items={project.tech} />
            </div>
          </div>
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

        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
          {project.category}
        </span>
      </div>
    </article>
  );

  return (
    <section id="projects" className="py-12 border-b border-border">
      {/* Header & Controls */}
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            01 — projects
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          {/* Auto-Slide Toggle */}
          {viewMode === "carousel" && (
            <button
              type="button"
              onClick={() => setIsAutoPlay((prev) => !prev)}
              className={cn(
                "flex items-center gap-1 rounded-md border border-border px-2.5 py-1 transition-colors cursor-pointer text-[11px]",
                isAutoPlay
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              title={isAutoPlay ? "Pause auto-slide" : "Start auto-slide"}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="h-3 w-3" />
                  <span className="hidden sm:inline">Auto-Slide: On</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" />
                  <span className="hidden sm:inline">Auto-Slide: Off</span>
                </>
              )}
            </button>
          )}

          {/* View Mode Switcher: Carousel Slider vs Full List */}
          <div className="flex items-center rounded-md border border-border bg-card p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("carousel")}
              className={cn(
                "flex items-center gap-1 rounded px-2 py-0.5 transition-colors cursor-pointer text-[11px]",
                viewMode === "carousel"
                  ? "bg-muted font-semibold text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Interactive Carousel Slider"
            >
              <SlidersHorizontal className="h-3 w-3" />
              <span className="hidden sm:inline">Slider</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={cn(
                "flex items-center gap-1 rounded px-2 py-0.5 transition-colors cursor-pointer text-[11px]",
                viewMode === "list"
                  ? "bg-muted font-semibold text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title="Show All Projects in List"
            >
              <LayoutGrid className="h-3 w-3" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>

          <a
            href="https://github.com/Watot12345"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline font-mono text-xs text-muted-foreground hover:text-foreground transition-colors ml-1"
          >
            @Watot12345 ↗
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-7 flex flex-wrap gap-1.5 font-mono text-xs">
        <button
          type="button"
          onClick={() => handleFilterChange("personal")}
          className={`rounded-md px-3 py-1 transition-colors cursor-pointer ${
            filter === "personal"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Personal Projects ({PROJECTS_DATA.filter((p) => p.category === "personal").length})
        </button>
        <button
          type="button"
          onClick={() => handleFilterChange("client")}
          className={`rounded-md px-3 py-1 transition-colors cursor-pointer ${
            filter === "client"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Client Systems ({PROJECTS_DATA.filter((p) => p.category === "client").length})
        </button>
        <button
          type="button"
          onClick={() => handleFilterChange("gov")}
          className={`rounded-md px-3 py-1 transition-colors cursor-pointer ${
            filter === "gov"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Government Platforms ({PROJECTS_DATA.filter((p) => p.category === "gov").length})
        </button>
        <button
          type="button"
          onClick={() => handleFilterChange("school")}
          className={`rounded-md px-3 py-1 transition-colors cursor-pointer ${
            filter === "school"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          School Projects ({PROJECTS_DATA.filter((p) => p.category === "school").length})
        </button>
        <button
          type="button"
          onClick={() => handleFilterChange("all")}
          className={`rounded-md px-3 py-1 transition-colors cursor-pointer ${
            filter === "all"
              ? "bg-muted font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({PROJECTS_DATA.length})
        </button>
      </div>

      {/* Projects Display: Interactive Carousel Slider vs List */}
      {viewMode === "carousel" ? (
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Side Floating Clickable Arrow Buttons */}
          <button
            type="button"
            onClick={prevProject}
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-lg backdrop-blur-md transition-all hover:bg-muted hover:scale-110 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary"
            aria-label="Previous project (←)"
            title="Previous project (←)"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextProject}
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-lg backdrop-blur-md transition-all hover:bg-muted hover:scale-110 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary"
            aria-label="Next project (→)"
            title="Next project (→)"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Overflow-Hidden Sliding Viewport */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${safeIndex * 100}%)` }}
            >
              {sorted.map((project, idx) => (
                <div key={`${project.id}-${idx}`} className="w-full shrink-0">
                  {renderCardContent(project)}
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Footer Navigation Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 font-mono text-xs">
            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {sorted.map((p, dotIdx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    safeIndex === dotIdx
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  )}
                  aria-label={`Jump to project ${dotIdx + 1}: ${p.title}`}
                  title={`${dotIdx + 1}. ${p.title}`}
                />
              ))}
            </div>

            {/* Quick Prev / Next Buttons & Counter */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevProject}
                className="flex items-center gap-1 rounded-md border border-border bg-card px-2.5 py-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer text-[11px]"
                title="Previous Project (←)"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>Prev</span>
              </button>

              <span className="text-[11px] font-semibold text-foreground px-1">
                {String(safeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextProject}
                className="flex items-center gap-1 rounded-md border border-border bg-card px-2.5 py-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer text-[11px]"
                title="Next Project (→)"
              >
                <span>Next</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Keyboard & Gesture Hint */}
          <div className="mt-2 flex items-center justify-between px-1 font-mono text-[10px] text-muted-foreground">
            <span>Click Left / Right arrows, swipe, or use keyboard keys ← →</span>
            {isAutoPlay && (
              <span className="text-emerald-500 font-semibold animate-pulse">
                ● Auto-cycling every 5s
              </span>
            )}
          </div>
        </div>
      ) : (
        /* Expanded List View */
        <div className="flex flex-col gap-6">
          {sorted.map((project) => (
            <div key={project.id}>{renderCardContent(project)}</div>
          ))}
        </div>
      )}
    </section>
  );
}
