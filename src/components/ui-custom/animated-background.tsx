"use client";

/**
 * Atmospheric background:
 * - Light Mode: Warm, saturated sky-blue, emerald, and amber ambient glows over #FAF9F6.
 * - Dark Mode: Clean, subtle monochrome radial highlights over #09090b with zero purple tint.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Light Mode Top Ambient Glow / Dark Mode Clean Radial */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 h-[42rem] w-[58rem] rounded-full bg-gradient-to-b from-sky-400/[0.12] via-indigo-500/[0.07] to-transparent blur-3xl pointer-events-none dark:from-white/[0.04] dark:via-white/[0.01]" />

      {/* Light Mode Emerald Accent (Subtle in Dark) */}
      <div className="absolute -top-16 -right-20 h-[32rem] w-[32rem] rounded-full bg-emerald-400/[0.10] blur-3xl pointer-events-none dark:bg-emerald-500/[0.03]" />

      {/* Light Mode Soft Blue Glow (Subtle in Dark) */}
      <div className="absolute top-[35rem] -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.08] blur-3xl pointer-events-none dark:bg-transparent" />

      {/* Clean subtle dot grid pattern */}
      <div className="absolute inset-0 bg-dots opacity-[0.45] dark:opacity-[0.25]" />
    </div>
  );
}
