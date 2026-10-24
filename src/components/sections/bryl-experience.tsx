"use client";

import { FileText } from "lucide-react";
import { TechIconBadgeList } from "@/components/ui-custom/tech-icon-badge";

interface ExperienceRow {
  year: string;
  role: string;
  company: string;
  period: string;
  location: string;
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
    bullets: [
      "Architected database schema and server logic for civentral.tech — a live government health and sanitation platform actively serving 1,000+ citizens in South Caloocan City.",
      "Integrated Supabase real-time sync enabling instant status updates for citizen service requests.",
      "Delivered a production system that significantly reduced manual paperwork processing time for government staff.",
    ],
    stack: ["PHP", "JavaScript", "PostgreSQL", "Supabase", "React Native", "Tailwind CSS"],
  },
  {
    year: "2022",
    role: "Independent Full-Stack Developer",
    company: "Freelance & Public Sector Clients",
    period: "2022 — Present",
    location: "Philippines",
    bullets: [
      "Built Health Sanitation Management System, Barangay San Roque Information System, and Attendance Management System for local government units and schools.",
      "Delivered Clinic & Salon management platforms handling appointments, patient records, staff scheduling, and billing.",
      "Engineered multi-tenant SaaS interfaces, e-commerce applications, and automated web scraping utilities.",
    ],
    stack: ["React", "Laravel", "PHP", "Node.js", "MySQL", "Next.js"],
  },
  {
    year: "2021",
    role: "Work Immersion Intern",
    company: "Barangay Gumaok West",
    period: "2021 — 2022",
    location: "San Jose del Monte, Bulacan",
    bullets: [
      "Completed public service work immersion; gained practical experience in government office workflows and digital record management.",
    ],
    stack: ["Office Systems", "Data Management"],
  },
];

export function BrylExperience() {
  return (
    <section id="experience" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          02 — experience
        </h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>full resume (pdf) ↗</span>
        </a>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            data-sound="tick"
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
            <div className="mt-4">
              <TechIconBadgeList items={exp.stack} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
