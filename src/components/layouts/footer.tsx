"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Heart } from "lucide-react";
import { profile, socialLinks, navItems } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui-custom/magnetic-button";

/**
 * Premium footer with newsletter CTA, quick links, social icons,
 * and a sticky-to-bottom layout. Pushed down naturally on long pages.
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
    <footer className="relative mt-auto border-t border-white/10 bg-[#080808]">
      {/* Top crimson glow line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(220,38,38,0.6), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(220,38,38,0.12), rgba(18,18,18,0.6))",
          }}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-balance text-2xl font-bold sm:text-3xl">
                Let&apos;s build something{" "}
                <span className="text-gradient-fire">extraordinary</span>.
              </h3>
              <p className="mt-2 max-w-lg text-muted-foreground">
                Available for select freelance projects and consulting engagements.
              </p>
            </div>
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
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
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-sm font-black"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.2), rgba(18,18,18,0.6))",
                }}
              >
                <span className="text-gradient-fire">JS</span>
              </div>
              <span className="text-lg font-bold">{profile.fullName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {profile.tagline} {profile.bio}
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-crimson" style={{ color: "#dc2626" }} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" style={{ color: "#dc2626" }} />
                {profile.phone}
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" style={{ color: "#dc2626" }} />
                {profile.location}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-crimson"
                    style={undefined}
                    onMouseEnter={(e) => {
                      (e.currentTarget.style.color = "#dc2626");
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      <Icon className="h-4 w-4 transition-colors group-hover:text-crimson" />
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {profile.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Crafted with
            <Heart className="h-3.5 w-3.5 fill-current" style={{ color: "#dc2626" }} />
            and a lot of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
