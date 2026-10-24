import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedBackground } from "@/components/ui-custom/animated-background";
import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { BackToTop } from "@/components/layouts/back-to-top";
import { BrylGear } from "@/components/sections/bryl-gear";
import { socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Workspace & Gear — Joshua Arncel Sierra",
  description:
    "A transparent breakdown of the daily workstation rig, Linux Mint environment, and peripherals used by Joshua Arncel Sierra for full-stack engineering.",
  alternates: {
    canonical: "https://joshuasierra.vercel.app/gear",
  },
};

export default function GearPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Navigation (Fixed Left Sidebar on Desktop lg+, Sticky Header & Slide Drawer on Mobile) */}
      <SidebarNav />

      {/* Main Content Area: Offset by sidebar width on desktop */}
      <div className="min-h-screen lg:pl-60 xl:pl-64">
        <main className="mx-auto max-w-3xl px-5 sm:px-8 py-8 lg:py-14">
          {/* Page Hero Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
              <Link href="/" className="hover:text-foreground transition-colors">
                Joshua Sierra
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Workspace &amp; Gear</span>
            </div>
            <h1 className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Workspace &amp; Hardware
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A transparent breakdown of the daily workstation rig, optimized Linux Mint environment, and hardware peripherals I use to engineer, compile, and deploy full-stack systems and AI applications.
            </p>
          </div>

          {/* Gear Component (Specs + Divider + Peripherals) */}
          <BrylGear />

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
