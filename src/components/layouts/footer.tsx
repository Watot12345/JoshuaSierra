"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Heart } from "lucide-react";
import { profile, socialLinks, navItems } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui-custom/magnetic-button";

/**
 * Clean, formal footer with project CTA, navigation links, and contact info.
 * Adapts seamlessly between light and dark modes.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative mt-auto border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-16 overflow-hidden rounded-2xl border border-border bg-muted/60 p-8 sm:p-12 shadow-xs"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
                Let&apos;s build something <span className="text-gradient-fire">great</span>.
              </h3>
              <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
                Available for engineering roles, freelance platforms, and technical consulting.
              </p>
            </div>
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
            >
              <span className="flex items-center gap-2">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + bio */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold tracking-tight">
                JS
              </div>
              <span className="text-base font-bold text-foreground">{profile.fullName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {profile.tagline} {profile.bio}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="group flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>{profile.phone}</span>
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 transition-colors group-hover:text-foreground" />
                      <span>{social.username}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {profile.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Crafted with
            <Heart className="h-3 w-3 fill-current text-primary" />
            and engineered for performance
          </p>
        </div>
      </div>
    </footer>
  );
}
