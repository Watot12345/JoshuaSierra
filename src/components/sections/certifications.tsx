"use client";

import { motion } from "framer-motion";
import { ExternalLink, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Clean, formal certifications section.
 */
export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Continuously <span className="text-gradient-fire">learning</span>
            </>
          }
          description="Industry-recognized certifications validating expertise in architecture, full-stack development, and modern cloud ecosystems."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-foreground/30"
              >
                <div>
                  {/* Header row */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>

                  {/* Name */}
                  <h3 className="mt-3.5 text-sm font-bold text-foreground sm:text-base">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="mt-1 text-xs font-semibold text-primary sm:text-sm">
                    {cert.issuer}
                  </p>

                  {/* Issue date */}
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Issued {cert.issueDate}
                  </p>
                </div>

                {/* Credential id */}
                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3.5 text-xs text-muted-foreground">
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[11px] truncate">{cert.credentialId}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
