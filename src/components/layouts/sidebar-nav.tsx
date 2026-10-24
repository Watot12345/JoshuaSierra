"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useThemeTransition } from "@/hooks/use-theme-transition";
import {
  FolderKanban,
  Briefcase,
  Layers,
  Monitor,
  GitBranch,
  GraduationCap,
  MessageSquareQuote,
  Mail,
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  Laptop,
  ArrowRight,
  Sparkles,
  Users,
  Award,
} from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AiAssistantModal } from "@/components/ui-custom/ai-assistant-modal";
import { SoundToggle } from "@/components/ui-custom/sound-toggle";

const NAV_LINKS = [
  { id: "projects", label: "Projects", href: "#projects", icon: FolderKanban },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "stack", label: "Tech Stack", href: "#stack", icon: Layers },
  { id: "education", label: "Education", href: "#education", icon: GraduationCap },
  { id: "github", label: "GitHub Activity", href: "#github-activity", icon: GitBranch },
  { id: "testimonials", label: "Recommendations", href: "#testimonials", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export function SidebarNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("projects");
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const { theme, resolvedTheme, changeTheme } = useThemeTransition();
  const mounted = useMounted();
  const pathname = usePathname();
  const router = useRouter();

  // Update active section on scroll or route
  useEffect(() => {
    if (pathname !== "/") {
      setActiveId("");
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom-of-page detection: If scrolled near or at the bottom, Contact is always active
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveId("contact");
        return;
      }

      // Proportional scroll position (~35% down viewport)
      const scrollPos = scrollY + windowHeight * 0.35;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        if (item.href.startsWith("#")) {
          const el = document.querySelector(item.href);
          if (el) {
            const top = el.getBoundingClientRect().top + scrollY;
            if (scrollPos >= top) {
              setActiveId(item.id);
              break;
            }
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id?: string
  ) => {
    e.preventDefault();
    if (id) {
      setActiveId(id);
    }
    setMobileOpen(false);

    if (href === "/gear") {
      if (pathname !== "/gear") {
        router.push("/gear");
      }
      return;
    }

    if (pathname !== "/") {
      router.push(href.startsWith("#") ? `/${href}` : href);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ── Fixed Desktop Left Sidebar (lg+) ── */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 xl:w-64 flex-col justify-between border-r border-border bg-card/60 backdrop-blur-md px-6 py-8 lg:flex">
        {/* Top: Brand info */}
        <div>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group block"
          >
            <h1 className="font-mono text-base font-bold tracking-tight text-foreground transition-opacity group-hover:opacity-75">
              {profile.fullName}
            </h1>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Software Engineer
            </p>
          </a>

          {/* Availability pill */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Available for Work &amp; Internship</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col gap-1 font-mono text-xs">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={cn(
                    "group flex items-center justify-between rounded-md px-2.5 py-2 transition-all duration-200",
                    isActive
                      ? "bg-muted font-semibold text-foreground shadow-2xs"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{link.label}</span>
                  </div>
                  <ArrowRight
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 transition-all duration-200",
                      isActive
                        ? "translate-x-0 opacity-100 text-foreground"
                        : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-40 text-muted-foreground"
                    )}
                  />
                </a>
              );
            })}

            {/* Questions? ask anyway... button */}
            <div className="pt-1.5 pb-0.5">
              <button
                type="button"
                onClick={() => setAiModalOpen(true)}
                className="group relative flex w-full items-center gap-2 rounded-lg border border-primary/25 bg-primary/5 px-2.5 py-2 text-foreground transition-all duration-200 hover:border-primary/45 hover:bg-primary/10 shadow-xs cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary shrink-0 animate-pulse" />
                <span className="font-mono text-xs font-medium truncate text-foreground/90 group-hover:text-foreground">
                  Questions? Ask anyway...
                </span>
              </button>
            </div>

            <div className="my-2 h-px bg-border" />

            {/* Workspace & Gear Page */}
            <Link
              href="/gear"
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 transition-colors hover:bg-muted/50 hover:text-foreground",
                pathname === "/gear"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Monitor className="h-3.5 w-3.5 shrink-0" />
              <span>Workspace &amp; Gear ↗</span>
            </Link>

            {/* Affiliations Page */}
            <Link
              href="/affiliations"
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 transition-colors hover:bg-muted/50 hover:text-foreground",
                pathname === "/affiliations"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Users className="h-3.5 w-3.5 shrink-0" />
              <span>Affiliations ↗</span>
            </Link>

            {/* Certifications Page */}
            <Link
              href="/certifications"
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 transition-colors hover:bg-muted/50 hover:text-foreground",
                pathname === "/certifications"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Award className="h-3.5 w-3.5 shrink-0" />
              <span>Certifications ↗</span>
            </Link>

            {/* Quick Resume Link */}
            <a
              href="/resume.pdf?v=2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
            >
              <FileText className="h-3.5 w-3.5 shrink-0" />
              <span>Resume (PDF) ↗</span>
            </a>
          </nav>
        </div>

        {/* Bottom: Theme Switcher, Sound & Email */}
        <div className="border-t border-border pt-4">
          {/* Theme & Sound controls */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-mono text-muted-foreground">Theme</span>
            <div className="flex items-center gap-2">
              <SoundToggle variant="icon-small" />
              {mounted ? (
                <div
                  className="inline-flex items-center rounded-full border border-border p-0.5 bg-muted/40"
                  role="group"
                  aria-label="Theme"
                >
                <button
                  type="button"
                  onClick={(e) => changeTheme("system", e)}
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full transition-colors",
                    theme === "system"
                      ? "bg-background text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  title="System theme"
                >
                  <Laptop className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  onClick={(e) => changeTheme("light", e)}
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full transition-colors",
                    theme === "light"
                      ? "bg-background text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  title="Light theme"
                >
                  <Sun className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  onClick={(e) => changeTheme("dark", e)}
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full transition-colors",
                    theme === "dark"
                      ? "bg-background text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  title="Dark theme"
                >
                  <Moon className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <div className="h-6 w-18 rounded-full bg-muted/50" />
            )}
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-muted-foreground">
            For internships, engineering roles &amp; collabs:
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-1 block font-mono text-xs font-medium text-foreground hover:text-muted-foreground truncate transition-colors"
          >
            {profile.email} ↗
          </a>
        </div>
      </aside>

      {/* ── Sticky Mobile Top Header (< lg) ── */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-5 py-3.5 backdrop-blur-md lg:hidden">
        <div>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-mono text-sm font-bold tracking-tight text-foreground"
          >
            {profile.fullName}
          </a>
          <span className="block text-[10px] font-mono text-muted-foreground">
            Software Engineer
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Ask AI quick trigger on mobile */}
          <button
            type="button"
            onClick={() => setAiModalOpen(true)}
            className="flex h-9 items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-2.5 text-xs font-mono font-medium text-foreground hover:bg-primary/20 transition-colors"
            title="Questions? Ask anyway..."
          >
            <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
            <span className="hidden sm:inline">Ask anyway...</span>
          </button>

          {/* Sound Toggle on Mobile */}
          <SoundToggle variant="icon" />

          {mounted && (
            <button
              type="button"
              onClick={(e) =>
                changeTheme(resolvedTheme === "dark" ? "light" : "dark", e)
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground"
            aria-label="Open navigation menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* ── Mobile Fullscreen Menu Drawer ── */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/98 p-6 lg:hidden backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <span className="font-mono text-sm font-bold text-foreground">
                {profile.fullName}
              </span>
              <div className="mt-1.5 flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Available for Work &amp; Internship</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="mt-6 flex flex-1 flex-col gap-2 font-mono text-sm">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={cn(
                    "group flex items-center justify-between rounded-lg px-3.5 py-2.5 transition-all duration-200",
                    isActive
                      ? "bg-muted font-bold text-foreground shadow-2xs"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{link.label}</span>
                  </div>
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 shrink-0 transition-all duration-200",
                      isActive
                        ? "translate-x-0 opacity-100 text-foreground"
                        : "-translate-x-1 opacity-0 text-muted-foreground"
                    )}
                  />
                </a>
              );
            })}

            {/* Questions? ask anyway... in Mobile Drawer */}
            <div className="pt-1 pb-1">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setAiModalOpen(true);
                }}
                className="flex w-full items-center gap-2.5 rounded-xl border border-primary/25 bg-primary/10 px-3.5 py-2.5 text-foreground transition-colors hover:bg-primary/20"
              >
                <Sparkles className="h-4 w-4 text-primary shrink-0 animate-pulse" />
                <span className="font-mono text-xs font-medium">Questions? Ask anyway...</span>
              </button>
            </div>

            <div className="my-2.5 h-px bg-border" />

            <Link
              href="/gear"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3.5 py-2.5 transition-colors hover:bg-muted/50 hover:text-foreground",
                pathname === "/gear"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Monitor className="h-4 w-4 shrink-0" />
              <span>Workspace &amp; Gear ↗</span>
            </Link>

            <Link
              href="/affiliations"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3.5 py-2.5 transition-colors hover:bg-muted/50 hover:text-foreground",
                pathname === "/affiliations"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Users className="h-4 w-4 shrink-0" />
              <span>Affiliations ↗</span>
            </Link>

            <Link
              href="/certifications"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3.5 py-2.5 transition-colors hover:bg-muted/50 hover:text-foreground",
                pathname === "/certifications"
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Award className="h-4 w-4 shrink-0" />
              <span>Certifications ↗</span>
            </Link>

            <a
              href="/resume.pdf?v=2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            >
              <FileText className="h-4 w-4" />
              <span>Download Resume (PDF) ↗</span>
            </a>
          </nav>

          <div className="border-t border-border pt-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">Theme</span>
              <div className="flex items-center gap-2">
                <SoundToggle variant="icon-small" />
                {mounted && (
                  <div className="inline-flex items-center rounded-full border border-border p-0.5 bg-muted/40">
                    <button
                      type="button"
                      onClick={(e) => changeTheme("system", e)}
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs",
                        theme === "system" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      )}
                    >
                      <Laptop className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => changeTheme("light", e)}
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs",
                        theme === "light" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      )}
                    >
                      <Sun className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => changeTheme("dark", e)}
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs",
                        theme === "dark" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                      )}
                    >
                      <Moon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Direct Contact:
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block font-mono text-xs font-semibold text-foreground truncate"
            >
              {profile.email} ↗
            </a>
          </div>
        </div>
      ) : null}

      {/* AI Assistant Interactive Modal */}
      <AiAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />
    </>
  );
}
