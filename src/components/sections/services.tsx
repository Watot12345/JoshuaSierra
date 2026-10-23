"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Clean, formal services section detailing engineering capabilities.
 */
export function Services() {
  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Services that <span className="text-gradient-fire">ship value</span>
            </>
          }
          description="From a single landing page to a full platform, I offer end-to-end engineering and design services tailored to your goals."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-foreground/30"
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title + description */}
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-5 flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom link */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline sm:text-sm"
                >
                  Get started
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
