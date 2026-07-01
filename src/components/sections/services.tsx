"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { TiltCard } from "@/components/ui-custom/tilt-card";

/**
 * Services section: grid of tilt-animated service cards with
 * feature lists and hover glow effects.
 */
export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Services that{" "}
              <span className="text-gradient-fire">ship value</span>
            </>
          }
          description="From a single landing page to a full platform, I offer end-to-end engineering and design services tailored to your goals."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard
                  className="h-full rounded-2xl"
                  maxTilt={6}
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-crimson/40">
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(220,38,38,0.4), transparent 70%)",
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(18,18,18,0.6))",
                      }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Title + description */}
                    <h3 className="relative mt-5 text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="relative mt-5 flex flex-col gap-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-muted-foreground"
                        >
                          <span
                            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                            style={{
                              backgroundColor: "rgba(220,38,38,0.15)",
                            }}
                          >
                            <Check
                              className="h-2.5 w-2.5"
                              style={{ color: "#dc2626" }}
                            />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom link */}
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-crimson opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: "#dc2626" }}
                    >
                      Get started
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
