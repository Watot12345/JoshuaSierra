"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Rocket,
  GraduationCap,
  Play,
  Pause,
  ArrowLeft,
  ArrowRight,
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
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right"); // Default left-to-right as requested

  // Sort projects so live sites appear first
  const sortedProjects = [...PROJECTS_DATA].sort(
    (a, b) => (b.liveUrl ? 1 : 0) - (a.liveUrl ? 1 : 0)
  );

  // Duplicate items for a seamless infinite loop across all resolutions
  const loopItems = [...sortedProjects, ...sortedProjects];

  return (
    <section id="projects" className="py-12 border-b border-border overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            01 — projects
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
            Production systems, municipal civic platforms, and engineering experiments
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <button
            type="button"
            onClick={() => setDirection((prev) => (prev === "right" ? "left" : "right"))}
            className="flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-foreground hover:bg-muted transition-colors cursor-pointer"
            title={`Direction: flowing ${direction === "right" ? "left to right" : "right to left"}`}
          >
            {direction === "right" ? (
              <>
                <ArrowRight className="h-3 w-3 text-primary" />
                <span className="hidden sm:inline">Flow: L → R</span>
              </>
            ) : (
              <>
                <ArrowLeft className="h-3 w-3 text-primary" />
                <span className="hidden sm:inline">Flow: R → L</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-foreground hover:bg-muted transition-colors cursor-pointer"
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
          >
            {isPaused ? (
              <>
                <Play className="h-3 w-3 text-emerald-500 fill-emerald-500" />
                <span className="hidden sm:inline">Resume</span>
              </>
            ) : (
              <>
                <Pause className="h-3 w-3" />
                <span className="hidden sm:inline">Pause</span>
              </>
            )}
          </button>

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

      {/* Infinite Marquee Track Container with pause-on-hover */}
      <div className="group relative w-full overflow-hidden py-2">
        {/* Left & Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/* Animated Infinite Track */}
        <div
          className={cn(
            "flex w-max gap-5 select-none",
            direction === "right" ? "animate-marquee-reverse" : "animate-marquee",
            "group-hover:[animation-play-state:paused]",
            isPaused && "[animation-play-state:paused]"
          )}
          style={{ animationDuration: "80s" }}
        >
          {loopItems.map((project, idx) => (
            <article
              key={`${project.id}-${idx}`}
              className="w-[300px] sm:w-[370px] shrink-0 rounded-2xl border border-border bg-card/90 backdrop-blur-xs p-5 shadow-xs transition-all duration-200 hover:border-foreground/40 hover:bg-card hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {project.badge}
                  </span>

                  {project.liveUrl && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
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
                <div className="mt-3 overflow-hidden rounded-xl border border-border bg-muted aspect-[16/9]">
                  {project.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
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
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
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
      </div>

      {/* Subtitle helper */}
      <div className="mt-3 flex items-center justify-between px-1">
        <p className="font-mono text-[10px] text-muted-foreground">
          Hover over any project card to pause and inspect.
        </p>
        <span className="font-mono text-[10px] text-muted-foreground">
          {PROJECTS_DATA.length} Production &amp; Open-Source Projects
        </span>
      </div>
    </section>
  );
}
