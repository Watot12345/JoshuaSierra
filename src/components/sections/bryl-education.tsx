"use client";

import { GraduationCap } from "lucide-react";

export function BrylEducation() {
  return (
    <section id="education" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          04 — education
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          academic background
        </span>
      </div>

      <div className="space-y-8">
        {/* Academic Foundation */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Academic Foundation
            </h3>
            <span className="font-mono text-[11px] text-muted-foreground">
              Formal Education
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            {/* College */}
            <div data-sound="tick" className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-foreground/20 cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-4 w-4 text-foreground shrink-0" />
                  <h4 className="font-mono text-sm sm:text-base font-bold text-foreground">
                    Bachelor of Science in Information Technology
                  </h4>
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
            <div data-sound="tick" className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-foreground/20 cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-4 w-4 text-foreground shrink-0" />
                  <h4 className="font-mono text-sm sm:text-base font-bold text-foreground">
                    TVL – ICT Track (Senior High School)
                  </h4>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  2020 — 2022
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground pl-6.5">
                <span className="font-semibold text-foreground">Paradise Farms National High School</span> · San Jose del Monte, Bulacan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
