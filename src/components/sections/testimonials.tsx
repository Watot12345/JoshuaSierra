"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";

/**
 * Testimonials section: auto-advancing carousel of client quotes
 * with star ratings, avatars, and manual navigation controls.
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
      className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What clients{" "}
              <span className="text-gradient-fire">say</span>
            </>
          }
          description="The measure of my work is the trust of the people I build for. Here's what they have to say."
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main quote card */}
          <div className="relative min-h-[340px] sm:min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-strong relative rounded-3xl border border-white/10 p-8 sm:p-10"
              >
                {/* Big quote mark */}
                <Quote
                  className="absolute right-8 top-8 h-16 w-16 opacity-10"
                  style={{ color: "#dc2626" }}
                />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current"
                      style={{ color: "#dc2626" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-6 text-pretty text-lg leading-relaxed text-white sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="h-14 w-14 rounded-full border-2 object-cover"
                    style={{ borderColor: "rgba(220,38,38,0.4)" }}
                  />
                  <div>
                    <p className="font-bold text-white">{active.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {active.role} · {active.company}
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {active.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-crimson/40 hover:bg-crimson/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-crimson/40 hover:bg-crimson/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 28 : 8,
                    backgroundColor:
                      i === index ? "#dc2626" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
