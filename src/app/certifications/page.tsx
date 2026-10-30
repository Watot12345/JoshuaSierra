import type { Metadata } from "next";
import Link from "next/link";
import { Award, BadgeCheck, Clock, GraduationCap, Sparkles, ExternalLink, Image as ImageIcon } from "lucide-react";
import { AnimatedBackground } from "@/components/ui-custom/animated-background";
import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { BackToTop } from "@/components/layouts/back-to-top";
import { socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Technical research papers, TESDA NC II certifications, and academic recognitions earned by Full-Stack Engineer Joshua Arncel Sierra.",
  alternates: {
    canonical: "https://joshuasierra.vercel.app/certifications",
  },
};

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: string;
  credentialId?: string;
  credentialUrl?: string;
  status: "verified" | "in-progress" | "academic";
  description: string;
  topics: string[];
  imageUrl?: string;
  imageCaption?: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-ai-2026",
    title: "AI Integration on Web Development",
    issuer: "Bestlink College of the Philippines",
    year: "2026",
    type: "Research Seminar & Forum",
    credentialId: "BCP-AI-2026",
    credentialUrl: "https://civentral.tech",
    status: "verified",
    description:
      "Advanced technical seminar and research presentation exploring generative AI integration within modern web development stacks, developer workflow optimization, and scalable UI engineering.",
    topics: [
      "Generative AI integration into web apps",
      "Modern full-stack component patterns",
      "API optimization & automated pipelines",
      "Developer workflow & latency reduction",
    ],
  },
  {
    id: "cert-bsit",
    title: "Bachelor of Science in Information Technology",
    issuer: "Bestlink College of the Philippines",
    year: "2024 — 2027",
    type: "Degree Program (4th Year, 1st Semester)",
    status: "academic",
    description:
      "Formal collegiate curriculum specializing in Information Management, Relational Database Systems, Network Engineering, Software Engineering Methodologies, and Web Architecture.",
    topics: [
      "Database Architecture (PostgreSQL, MySQL)",
      "Systems Troubleshooting & Networking",
      "Full-Stack Web & Mobile Development",
      "IT Project Management & Capstone Defense",
    ],
  },
  {
    id: "cert-cloud-tracks",
    title: "Professional & Cloud Certifications",
    issuer: "AWS / Google Cloud / Meta Developer Programs",
    year: "In Progress",
    type: "Industry Credentials",
    status: "in-progress",
    description:
      "Currently pursuing cloud architecture and full-stack developer certifications to formalize hands-on experience in container orchestration, microservices deployment, and serverless compute.",
    topics: [
      "AWS Cloud Practitioner / Solution Foundations",
      "Google Cloud Infrastructure Basics",
      "Docker & Containerized Microservices",
      "Continuous Integration & Production Deployment",
    ],
  },
];

export default function CertificationsPage() {
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
              <span className="text-foreground font-semibold">Certifications</span>
            </div>
            <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Certifications &amp; Credentials
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Official technical research seminars, academic credentials, and continuous professional development tracks.
            </p>
          </div>

          {/* Cards List */}
          <div className="space-y-6">
            {CERTIFICATIONS.map((item) => (
              <div
                key={item.id}
                data-sound="tick"
                className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-foreground/30"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                      {item.status === "verified" ? (
                        <Award className="h-4 w-4" />
                      ) : item.status === "academic" ? (
                        <GraduationCap className="h-4 w-4" />
                      ) : (
                        <Sparkles className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h2 className="font-mono text-base font-bold text-foreground">
                        {item.title}
                      </h2>
                      <p className="font-mono text-xs text-foreground/80 font-medium mt-0.5">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    {item.status === "verified" && (
                      <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                        <BadgeCheck className="h-3 w-3" />
                        <span>Verified</span>
                      </span>
                    )}
                    {item.status === "in-progress" && (
                      <span className="inline-flex items-center gap-1 rounded-md border border-border/80 bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>In Progress</span>
                      </span>
                    )}
                    {item.status === "academic" && (
                      <span className="rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-medium text-foreground">
                        Degree Track
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Topics / Skills Tag List */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Certificate Scan / Document Image or Placeholder */}
                <div className="mt-4">
                  {item.imageUrl ? (
                    <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
                      <img
                        src={item.imageUrl}
                        alt={item.imageCaption || item.title}
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
                        Certificate Document / Scan Snapshot
                      </span>
                      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground max-w-sm">
                        {item.imageCaption || "Image placeholder — drop in your certificate PDF preview, diploma scan, or event photo"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Credential ID / Link if available */}
                {item.credentialId && (
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>Credential ID: <span className="text-foreground font-semibold">{item.credentialId}</span></span>
                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                      >
                        <span>Verify link</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
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
