"use client";

import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks the mouse position relative to the viewport.
 * Throttled with requestAnimationFrame for performance.
 * Returns { x: 0, y: 0 } on the server and before first interaction.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const updatePosition = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });
      ticking = false;
    };

    const onMouseMove = (e: MouseEvent): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => updatePosition(e));
        ticking = true;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return position;
}
