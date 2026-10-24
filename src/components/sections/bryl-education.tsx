"use client";

import { GraduationCap, Award } from "lucide-react";

export function BrylEducation() {
  return (
    <section id="education" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          05 — education & credentials
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          academic foundation
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {/* College */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="h-4 w-4 text-foreground shrink-0" />
              <h3 className="font-mono text-sm sm:text-base font-bold text-foreground">
                Bachelor of Science in Information Technology
              </h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground shrink-0">
              2024 — 2027
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground pl-6.5">
            <span className="font-semibold text-foreground">Bestlink College of the Philippines</span> · Quezon City
          </p>
          <p className="mt-1 text-xs text-muted-foreground pl-6.5">
            Currently enrolled in 4th Year, 1st Semester · Specialization in Information Management.
          </p>
        </div>

        {/* High School */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="h-4 w-4 text-foreground shrink-0" />
              <h3 className="font-mono text-sm sm:text-base font-bold text-foreground">
                TVL – ICT Track (Senior High School)
              </h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground shrink-0">
              2020 — 2023
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground pl-6.5">
            <span className="font-semibold text-foreground">Paradise Farms National High School</span> · San Jose del Monte, Bulacan
          </p>
        </div>

        {/* Seminar / Certification */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="flex items-center gap-2.5">
              <Award className="h-4 w-4 text-foreground shrink-0" />
              <h3 className="font-mono text-sm sm:text-base font-bold text-foreground">
                Research Forum for AI Integration on Web Development
              </h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground shrink-0">
              2026
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground pl-6.5">
            Bestlink College of the Philippines · Focused on generative AI workflows, UI/UX modern practices, and web engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
