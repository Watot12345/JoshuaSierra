"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Clean, formal testimonials section with client endorsements.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + count) % count);
    },
    [count]
  );

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index]
  );

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate, paused]);

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative px-4 py-20 sm:px-6 lg:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What clients <span className="text-gradient-fire">say</span>
            </>
          }
          description="The measure of my work is the trust of the teams and clients I build for."
        />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main quote card */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs"
              >
                {/* Quote mark */}
                <Quote className="absolute right-6 top-6 h-12 w-12 text-muted-foreground/15" />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-5 text-pretty text-base leading-relaxed text-foreground sm:text-lg">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3.5 border-t border-border pt-5">
                  {active.avatar ? (
                    <img
                      src={active.avatar}
                      alt={active.name}
                      className="h-12 w-12 rounded-full border border-border object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted font-mono text-sm font-bold text-foreground border border-border">
                      {active.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-foreground text-sm sm:text-base">{active.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {active.role} · {active.company}
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground hidden xs:block">
                    {active.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
