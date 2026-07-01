"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile, socialLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = navItems.map((item) => item.id);

/**
 * Sticky, glassmorphic navbar with scroll-aware styling,
 * active-section highlighting, and a mobile slide-down menu.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-strong border-b border-white/10 py-3"
            : "border-b border-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3"
            aria-label={`${profile.fullName} — home`}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-black transition-all duration-300 group-hover:border-crimson/50"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220,38,38,0.2), rgba(18,18,18,0.6))",
              }}
            >
              <span className="text-gradient-fire">AM</span>
            </div>
            <span className="hidden text-sm font-semibold tracking-wide sm:block">
              {profile.fullName}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-muted-foreground hover:text-white"
                    )}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-lg"
                        style={{
                          background: "rgba(220,38,38,0.15)",
                          border: "1px solid rgba(220,38,38,0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 sm:inline-block"
              style={{
                background:
                  "linear-gradient(135deg, #dc2626, #991b1b)",
                boxShadow: "0 0 20px -5px rgba(220,38,38,0.5)",
              }}
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="glass-strong absolute left-0 right-0 top-[72px] border-b border-white/10 px-4 py-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-crimson/15 text-white"
                            : "text-muted-foreground hover:bg-white/5 hover:text-white"
                        )}
                        style={
                          isActive
                            ? { backgroundColor: "rgba(220,38,38,0.15)" }
                            : undefined
                        }
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                {socialLinks.slice(0, 4).map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-crimson/40 hover:text-white"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
