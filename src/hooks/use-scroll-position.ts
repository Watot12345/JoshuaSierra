"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current window scroll position (Y offset).
 * Throttled with requestAnimationFrame. SSR-safe (returns 0 on server).
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = (): void => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const onScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}
