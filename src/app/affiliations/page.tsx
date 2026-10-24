import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Users, GraduationCap, Globe, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { AnimatedBackground } from "@/components/ui-custom/animated-background";
import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { BackToTop } from "@/components/layouts/back-to-top";
import { socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Affiliations & Community — Joshua Arncel Sierra",
  description:
    "Engineering initiatives, student chapters, and civic technology organizations affiliated with Joshua Arncel Sierra.",
  alternates: {
    canonical: "https://joshuasierra.vercel.app/affiliations",
  },
};

interface AffiliationItem {
  id: string;
  name: string;
  role: string;
  period: string;
  badge: string;
  description: string;
  bullets: string[];
  links?: { label: string; href: string }[];
  tag: string;
  imageUrl?: string;
  imageCaption?: string;
}

const AFFILIATIONS: AffiliationItem[] = [
  {
    id: "civentral",
    name: "Civentral",
    role: "Co-Founder & Engineering Lead",
    period: "2025 — Present",
    badge: "Active · Core Team",
    description:
      "Civic technology and community platform initiative developing modern digital public infrastructure and health sanitation systems for local government units and residents.",
    bullets: [
      "Architected backend microservices and database schema for healthsanitation.civentral.tech, actively serving 1,000+ citizens in South Caloocan City.",
      "Lead engineering sprints covering web portals (PHP, JavaScript, Tailwind) and mobile app delivery (React Native, Expo).",
      "Collaborate directly with city stakeholders to replace manual paperwork with automated digital tracking.",
    ],
    links: [
      { label: "Live Platform (healthsanitation.civentral.tech)", href: "https://healthsanitation.civentral.tech" },
      { label: "Initiative Portal (civentral.tech)", href: "https://civentral.tech" },
    ],
    tag: "Civic Technology",
  },
  {
    id: "cits",
    name: "Collegiate Information Technology Society",
    role: "Active Member · Student Chapter",
    period: "2024 — Present",
    badge: "Department Guild",
    description:
      "Official academic organization representing BS Information Technology students at Bestlink College of the Philippines.",
    bullets: [
      "Participate actively in department hackathons, technical symposia, and AI integration research conferences.",
      "Collaborate in peer-learning workshops on full-stack architecture, relational database management, and cloud hosting.",
      "Contribute to college software showcases and student technical mentorship.",
    ],
    tag: "Academic Guild",
  },
];

export default function AffiliationsPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Navigation (Fixed Left Sidebar on Desktop lg+, Sticky Header & Slide Drawer on Mobile) */}
      <SidebarNav />

      {/* Main Content Area: Offset by sidebar width on desktop */}
      <div className="min-h-screen lg:pl-60 xl:pl-64">
        <main className="mx-auto max-w-3xl px-5 sm:px-8 py-8 lg:py-14">
          {/* Breadcrumb / Page Hero Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-foreground transition-colors">
                Joshua Sierra
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Affiliations</span>
            </div>
            <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Affiliations &amp; Community
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Civic technology initiatives, engineering teams, and academic organizations I actively contribute to and lead.
            </p>
          </div>

          {/* Affiliation Cards List */}
          <div className="space-y-6">
            {AFFILIATIONS.map((item) => (
              <div
                key={item.id}
                data-sound="tick"
                className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-foreground/30"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                      {item.id === "civentral" ? (
                        <Building2 className="h-4 w-4" />
                      ) : (
                        <Users className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h2 className="font-mono text-base font-bold text-foreground">
                        {item.name}
                      </h2>
                      <p className="font-mono text-xs text-foreground/80 font-medium mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="mt-3.5 space-y-2 text-xs text-muted-foreground sm:text-sm">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Image Placeholder or Image Render */}
                <div className="mt-4">
                  {item.imageUrl ? (
                    <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
                      <img
                        src={item.imageUrl}
                        alt={item.imageCaption || item.name}
                        className="h-48 w-full object-cover sm:h-56"
                        loading="lazy"
                      />
                      {item.imageCaption && (
                        <p className="border-t border-border/60 bg-card/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
                          {item.imageCaption}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="group/img flex flex-col items-center justify-center rounded-lg border border-dashed border-border/80 bg-muted/20 px-4 py-6 text-center transition-colors hover:border-foreground/30 hover:bg-muted/30">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground group-hover/img:text-foreground">
                        <ImageIcon className="h-4 w-4" />
                      </div>
                      <span className="mt-2 font-mono text-xs font-semibold text-foreground">
                        Affiliation / Organization Photo
                      </span>
                      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground max-w-sm">
                        {item.imageCaption || "Image placeholder — drop in your organization photo, team snapshot, or ID"}
                      </p>
                    </div>
                  )}
                </div>

                {/* External Links if available */}
                {item.links && (
                  <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap gap-2.5">
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors"
                      >
                        <Globe className="h-3 w-3 shrink-0" />
                        <span>{link.label} ↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-14 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} Joshua Sierra</span>
              <span>·</span>
              <Link
                href="/"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                ← Return to Portfolio
              </Link>
            </div>

            {/* Social Icons Strip in Footer */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-muted hover:text-foreground"
                    title={`${s.label} (${s.username})`}
                    aria-label={s.label}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>

            <span>Engineered with Next.js &amp; TypeScript</span>
          </footer>
        </main>
      </div>

      <BackToTop />
    </>
  );
}
