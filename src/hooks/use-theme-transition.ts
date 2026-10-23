"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

/**
 * Custom hook to toggle/set themes with a circular expanding clip-path
 * View Transition animation (inspired by Bryl Lim / modern portfolios).
 * If the browser does not support View Transitions or prefers reduced motion,
 * it falls back cleanly to the instant theme change.
 */
export function useThemeTransition() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const changeTheme = useCallback(
    (newTheme: string, event?: React.MouseEvent) => {
      // If same theme selected, do nothing
      if (newTheme === theme) return;

      if (
        typeof document === "undefined" ||
        !("startViewTransition" in document) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setTheme(newTheme);
        return;
      }

      // Origin coordinates from the clicked button or viewport center
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      if (event) {
        x = event.clientX;
        y = event.clientY;
      }

      // Max radius to fully cover all corners of the screen
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Start the View Transition
      const doc = document as Document & {
        startViewTransition: (callback: () => Promise<void> | void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      const transition = doc.startViewTransition(async () => {
        setTheme(newTheme);
        // Small tick to ensure the DOM class change has been applied by next-themes
        await new Promise((resolve) => setTimeout(resolve, 15));
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath,
          },
          {
            duration: 550,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)", // snappy circular pop curve
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [theme, setTheme]
  );

  return {
    theme,
    resolvedTheme,
    changeTheme,
    setTheme,
  };
}
