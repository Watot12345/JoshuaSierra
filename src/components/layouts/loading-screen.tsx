"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/portfolio";

/**
 * Full-screen loading screen shown on initial mount.
 * Displays an animated crimson monogram + name, then fades out.
 */
export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 text-4xl font-black"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220,38,38,0.2), rgba(18,18,18,0.8))",
                boxShadow:
                  "0 0 60px -10px rgba(220,38,38,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-gradient-fire">AM</span>
            </div>
            {/* Rotating ring */}
            <motion.div
              className="absolute -inset-3 rounded-3xl border-2 border-transparent"
              style={{
                borderTopColor: "#dc2626",
                borderRightColor: "rgba(220,38,38,0.3)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.4em] text-muted-foreground"
          >
            {profile.fullName}
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-6 h-0.5 w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full"
              style={{
                background: "linear-gradient(90deg, #dc2626, #f97316)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
