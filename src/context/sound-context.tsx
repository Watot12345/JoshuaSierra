"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playTick: (pitch?: number) => void;
  playClick: () => void;
  playScrollTick: () => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  toggleSound: () => {},
  playTick: () => {},
  playClick: () => {},
  playScrollTick: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  // CRITICAL REQUIREMENT: Default is MUTED (false)
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Tracking for hover, click, and scroll interactions
  const lastTargetRef = useRef<Element | null>(null);
  const lastHoverTimeRef = useRef<number>(0);
  const lastScrollTimeRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const accumulatedWheelRef = useRef<number>(0);

  // Initialize from localStorage if explicitly set by user, otherwise defaults to false
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-sound-enabled");
      if (saved === "true") {
        setSoundEnabled(true);
      }
    } catch {
      // localStorage error fallback
    }
  }, []);

  const initContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  }, []);

  /**
   * Crisp, clearly audible tactile mechanical "tick" for HOVER events.
   * Engineered with optimal frequency (1400Hz -> 450Hz) and distinct volume (0.15)
   * so it is instantly audible and satisfying on laptop speakers, headphones, and monitors.
   */
  const playTick = useCallback(
    (pitch: number = 1.0) => {
      if (!soundEnabled) return;
      try {
        const ctx = initContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(2200 * pitch, now);
        filter.Q.setValueAtTime(3.0, now);

        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1400 * pitch, now);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.024);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.14, now); // Clearly audible volume
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.024);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.026);
      } catch {
        // Audio error suppression
      }
    },
    [soundEnabled, initContext]
  );

  /**
   * Distinct, firm mechanical "click" for button and link presses
   */
  const playClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.02);

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.022);
    } catch {
      // Audio error suppression
    }
  }, [soundEnabled, initContext]);

  /**
   * Subtle mechanical ratchet "tick" for scroll events (wheel or vertical drag)
   */
  const playScrollTick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(2100, now);
      filter.Q.setValueAtTime(3.0, now);

      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.015);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, now); // Gentle, tactile volume
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.017);
    } catch {
      // Audio error suppression
    }
  }, [soundEnabled, initContext]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("portfolio-sound-enabled", String(next));
      } catch {}

      if (next) {
        // Confirmation chime when unmuting
        setTimeout(() => {
          try {
            const ctx = initContext();
            if (!ctx) return;
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(1200, now);
            osc.frequency.setValueAtTime(1600, now + 0.04);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.085);
          } catch {}
        }, 15);
      }
      return next;
    });
  }, [initContext]);

  // 1. Global Hover "Tick" Listener (High sensitivity, fires on each distinct interactive element)
  useEffect(() => {
    if (!soundEnabled) return;

    const interactiveSelector = [
      'button',
      'a',
      '[role="button"]',
      '[role="link"]',
      '[role="tab"]',
      '[role="menuitem"]',
      '[role="option"]',
      '[role="switch"]',
      '[role="checkbox"]',
      '[role="radio"]',
      'input',
      'select',
      'textarea',
      'label',
      'summary',
      'details',
      '[tabindex]:not([tabindex="-1"])',
      '.cursor-pointer',
      '[data-sound="tick"]',
      // Content cards and interactive sections
      'article',
      '[data-card]',
      '.card-hover',
      '[class*="rounded-xl"][class*="border"]',
      '[class*="rounded-2xl"][class*="border"]',
      // Tech icons and interactive badges/tooltips
      '[title]',
      '[aria-label]',
      '[data-slot="badge"]',
      // SVG shapes that have pointer cursors (e.g. GitHub heatmap rects)
      'rect',
      'circle',
      'svg [style*="cursor: pointer"]',
      'svg [style*="cursor:pointer"]',
      '[style*="cursor: pointer"]',
      '[style*="cursor:pointer"]',
    ].join(', ');

    const handleMouseOver = (e: MouseEvent) => {
      const rawEl = e.target as HTMLElement | SVGElement | null;
      if (!rawEl) return;

      // Find closest interactive element or content card
      let target: Element | null = rawEl.closest?.(interactiveSelector) ?? null;

      // Fallback: check if element or its parent explicitly has cursor: pointer
      if (!target && rawEl instanceof Element) {
        try {
          const style = window.getComputedStyle(rawEl);
          if (style.cursor === "pointer") {
            target = rawEl;
          }
        } catch {}
      }

      if (!target) {
        lastTargetRef.current = null;
        return;
      }

      if (target === lastTargetRef.current) return;

      // Avoid re-ticking the enclosing card when moving off an inner child/badge back onto the card
      if (lastTargetRef.current && target.contains(lastTargetRef.current)) {
        lastTargetRef.current = target;
        return;
      }

      lastTargetRef.current = target;

      const now = Date.now();
      // Debounce slightly to keep rapid scrubbing sounding rhythmic and crisp
      if (now - lastHoverTimeRef.current > 18) {
        lastHoverTimeRef.current = now;
        const randomPitch = 0.96 + Math.random() * 0.1;
        playTick(randomPitch);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const rawEl = e.target as Element | null;
      if (!rawEl) return;
      const target = rawEl.closest?.(interactiveSelector) ?? rawEl;
      const related = e.relatedTarget as Element | null;
      if (!related || (target && !target.contains(related))) {
        if (lastTargetRef.current === target) {
          lastTargetRef.current = null;
        }
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [soundEnabled, playTick]);

  // 2. Global Click "Tick" Listener
  useEffect(() => {
    if (!soundEnabled) return;

    const clickSelector = [
      'button',
      'a',
      '[role="button"]',
      '[role="link"]',
      '[role="tab"]',
      'input',
      'select',
      'textarea',
      '.cursor-pointer',
      '[data-sound="tick"]',
      'summary',
      'rect',
      '[tabindex]:not([tabindex="-1"])',
      '[style*="cursor: pointer"]',
      '[style*="cursor:pointer"]',
    ].join(', ');

    const handlePointerDown = (e: MouseEvent) => {
      const rawEl = e.target as HTMLElement | SVGElement | null;
      if (!rawEl) return;

      let target: Element | null = rawEl.closest?.(clickSelector) ?? null;
      if (!target && rawEl instanceof Element) {
        try {
          if (window.getComputedStyle(rawEl).cursor === "pointer") {
            target = rawEl;
          }
        } catch {}
      }

      if (target) {
        playClick();
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [soundEnabled, playClick]);

  // 3. Global Scroll "Tick" Listener (Mousewheel & Vertical scroll tracking)
  useEffect(() => {
    if (!soundEnabled) return;

    if (typeof window !== "undefined") {
      lastScrollYRef.current = window.scrollY;
    }

    // Wheel event (mouse wheel / trackpad scroll increments)
    const handleWheel = (e: WheelEvent) => {
      accumulatedWheelRef.current += Math.abs(e.deltaY || e.deltaX || 0);

      const now = Date.now();
      if (accumulatedWheelRef.current >= 45 && now - lastScrollTimeRef.current > 40) {
        lastScrollTimeRef.current = now;
        accumulatedWheelRef.current = 0;
        playScrollTick();
      }
    };

    // Generic scroll event (touch swipe scroll, scrollbar drag, keyboard PageUp/Down)
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastScrollYRef.current);

      const now = Date.now();
      if (diff >= 60 && now - lastScrollTimeRef.current > 40) {
        lastScrollTimeRef.current = now;
        lastScrollYRef.current = currentY;
        playScrollTick();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [soundEnabled, playScrollTick]);

  return (
    <SoundContext.Provider
      value={{ soundEnabled, toggleSound, playTick, playClick, playScrollTick }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
