"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export function BrylTestimonials() {
  return (
    <section id="testimonials" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          06 — recommendations
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          client & team feedback
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-xl border border-border bg-card p-5 shadow-xs flex flex-col justify-between"
          >
            <div>
              <Quote className="h-5 w-5 text-muted-foreground/30 mb-2" />
              <p className="font-serif italic text-sm sm:text-base leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-border pt-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-mono text-xs font-bold text-foreground">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-mono text-xs font-bold text-foreground">{t.name}</p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
