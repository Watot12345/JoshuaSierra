"use client";

/**
 * Clean, subtle background with a very soft ambient glow and grid pattern.
 * Adapts seamlessly between light and dark modes without heavy animation overhead.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Subtle top ambient radial highlight */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[35rem] w-[50rem] rounded-full bg-gradient-to-b from-primary/[0.04] to-transparent blur-3xl pointer-events-none" />

      {/* Clean subtle dot grid pattern */}
      <div className="absolute inset-0 bg-dots opacity-[0.4] dark:opacity-[0.25]" />
    </div>
  );
}
