"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the active section.
 *
 * @param sectionIds - Array of section element ids to observe.
 * @param rootMargin - IntersectionObserver root margin (default offsets for sticky navbar).
 */
export function useActiveSection(
  sectionIds: string[],
  rootMargin: string = "-45% 0px -45% 0px"
): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeSection;
}
