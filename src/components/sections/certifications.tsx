"use client";

import { motion } from "framer-motion";
import { ExternalLink, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Certifications section: grid of credential cards with issuer,
 * issue date, credential id, and a link to verify.
 */
export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Continuously{" "}
              <span className="text-gradient-fire">learning</span>
            </>
          }
          description="Industry-recognized certifications that validate expertise across cloud, architecture, and design."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-crimson/40"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(220,38,38,0.4), transparent 70%)",
                  }}
                />

                {/* Header row */}
                <div className="relative flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(18,18,18,0.6))",
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>

                {/* Name */}
                <h3 className="relative mt-4 text-base font-bold leading-snug text-white">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="relative mt-2 text-sm font-medium" style={{ color: "#dc2626" }}>
                  {cert.issuer}
                </p>

                {/* Issue date */}
                <p className="relative mt-1 text-xs text-muted-foreground">
                  Issued {cert.issueDate}
                </p>

                {/* Credential id */}
                <div className="relative mt-4 flex items-center gap-1.5 border-t border-white/5 pt-4 text-xs text-muted-foreground">
                  <BadgeCheck className="h-3.5 w-3.5" style={{ color: "#dc2626" }} />
                  <span className="font-mono">{cert.credentialId}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
