"use client";

import {
  GraduationCap,
  Award,
  BadgeCheck,
  Users,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";

export function BrylEducation() {
  return (
    <section id="education" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          05 — education, credentials &amp; affiliations
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          background &amp; community
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
            <div className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-foreground/20">
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
            <div className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-foreground/20">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-4 w-4 text-foreground shrink-0" />
                  <h4 className="font-mono text-sm sm:text-base font-bold text-foreground">
                    TVL – ICT Track (Senior High School)
                  </h4>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  2020 — 2023
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground pl-6.5">
                <span className="font-semibold text-foreground">Paradise Farms National High School</span> · San Jose del Monte, Bulacan
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Seminars */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Certifications &amp; Credentials
            </h3>
            <span className="font-mono text-[11px] text-muted-foreground">
              Licenses &amp; Training
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {/* Active Seminar / Research Forum */}
            <div className="rounded-xl border border-border bg-card p-4 shadow-xs transition-all duration-200 hover:border-foreground/20 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                      <Award className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground truncate">
                      Research Seminar
                    </span>
                  </div>
                  <span className="shrink-0 rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-medium text-foreground">
                    2026
                  </span>
                </div>
                <h4 className="mt-2.5 font-mono text-xs sm:text-sm font-bold text-foreground">
                  AI Integration on Web Development
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Bestlink College of the Philippines · Focused on generative AI workflows, UI/UX modern practices, and web engineering.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                <BadgeCheck className="h-3 w-3 shrink-0" />
                <span>Verified Attendance &amp; Participation</span>
              </div>
            </div>

            {/* Placeholder: Industry Certifications */}
            <div className="group rounded-xl border border-dashed border-border bg-card/60 p-4 shadow-xs transition-all duration-200 hover:border-foreground/30 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground group-hover:text-foreground">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground truncate">
                      Certifications
                    </span>
                  </div>
                  <span className="shrink-0 rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                    In Progress
                  </span>
                </div>
                <h4 className="mt-2.5 font-mono text-xs sm:text-sm font-bold text-foreground">
                  Professional &amp; Cloud Certifications
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Targeting AWS Cloud Practitioner, Google Cloud, and Meta Developer tracks. Currently documenting completions.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                <Clock className="h-3 w-3 shrink-0" />
                <span>Credentials will be listed here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliations & Organizations */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Affiliations &amp; Community
            </h3>
            <span className="font-mono text-[11px] text-muted-foreground">
              Organizations &amp; Teams
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {/* Civentral */}
            <div className="rounded-xl border border-border bg-card p-4 shadow-xs transition-all duration-200 hover:border-foreground/20 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                      <Building2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground truncate">
                      Initiative &amp; Team
                    </span>
                  </div>
                  <span className="shrink-0 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    Active
                  </span>
                </div>
                <h4 className="mt-2.5 font-mono text-xs sm:text-sm font-bold text-foreground">
                  Civentral
                </h4>
                <p className="font-mono text-[11px] text-foreground/80 font-medium">
                  Co-Founder &amp; Engineering Lead · 2025 — Present
                </p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Civic technology and community platform initiative developing modern digital public infrastructure for residents.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                <Users className="h-3 w-3 shrink-0" />
                <span>Core Engineering Team</span>
              </div>
            </div>

            {/* Bestlink IT Society */}
            <div className="rounded-xl border border-border bg-card p-4 shadow-xs transition-all duration-200 hover:border-foreground/20 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground truncate">
                      Student Chapter
                    </span>
                  </div>
                  <span className="shrink-0 rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-medium text-foreground">
                    2024 — Present
                  </span>
                </div>
                <h4 className="mt-2.5 font-mono text-xs sm:text-sm font-bold text-foreground">
                  Collegiate Information Technology Society
                </h4>
                <p className="font-mono text-[11px] text-foreground/80 font-medium">
                  Bestlink College of the Philippines · Active Member
                </p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Engaging in technical seminars, coding hackathons, peer workshops, and department academic activities.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                <GraduationCap className="h-3 w-3 shrink-0" />
                <span>Department Academic Guild</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
