"use client";

import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function BrylTestimonials() {
  // Quadruple items to ensure a seamless infinite loop on any screen width
  const loopItems = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section id="testimonials" className="py-12 border-b border-border overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            06 — recommendations
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
            Academic &amp; project endorsements
          </p>
        </div>

        <span className="font-mono text-[11px] text-muted-foreground">
          {testimonials.length} Endorsements
        </span>
      </div>

      {/* Infinite Marquee Track Container */}
      <div className="group relative w-full overflow-hidden py-2">
        {/* Left & Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/* Animated Infinite Track */}
        <div
          className={cn(
            "flex w-max gap-4 select-none animate-marquee-reverse",
            "group-hover:[animation-play-state:paused]"
          )}
          style={{ animationDuration: "42s" }}
        >
          {loopItems.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              data-sound="tick"
              className="w-[290px] sm:w-[350px] shrink-0 rounded-2xl border border-border bg-card/80 backdrop-blur-xs p-5 shadow-xs transition-all duration-200 hover:border-foreground/30 hover:bg-card hover:shadow-md flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 text-muted-foreground/30" />
                </div>
                <p className="font-serif italic text-xs sm:text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                {t.avatar ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-8 w-8 rounded-full object-cover border border-border"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-mono text-xs font-bold text-foreground">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-mono text-xs font-bold text-foreground truncate">
                    {t.name}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle helper */}
      <div className="mt-3 flex items-center justify-between px-1">
        <p className="font-mono text-[10px] text-muted-foreground">
          Hover over any card to pause and read.
        </p>
        <span className="font-mono text-[10px] text-muted-foreground">
          {testimonials.length} Endorsements
        </span>
      </div>
    </section>
  );
}
