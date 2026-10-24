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
   * Crisp tactile hover "tick" using Web Audio API synthesis
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
        filter.frequency.setValueAtTime(2900 * pitch, now);
        filter.Q.setValueAtTime(4.0, now);

        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1700 * pitch, now);
        osc.frequency.exponentialRampToValueAtTime(380, now + 0.011);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.011);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.012);
      } catch {
        // Audio error suppression
      }
    },
    [soundEnabled, initContext]
  );

  /**
   * Distinct click "tick" for button and link presses
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
      osc.frequency.setValueAtTime(1100, now);
      osc.frequency.exponentialRampToValueAtTime(250, now + 0.016);

      gain.gain.setValueAtTime(0.065, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.016);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.018);
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
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.008);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.025, now); // Gentle, non-intrusive volume
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.008);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.009);
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
            osc.frequency.setValueAtTime(1600, now + 0.035);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.075);
          } catch {}
        }, 15);
      }
      return next;
    });
  }, [initContext]);

  // 1. Global Hover "Tick" Listener
  useEffect(() => {
    if (!soundEnabled) return;

    const interactiveSelector =
      'button, a, [role="button"], input, select, textarea, .cursor-pointer, [data-sound="tick"], summary, article, nav a, [tabindex="0"]';

    const handlePointerOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(interactiveSelector);
      if (!target || target === lastTargetRef.current) return;
      lastTargetRef.current = target;

      const now = Date.now();
      if (now - lastHoverTimeRef.current > 30) {
        lastHoverTimeRef.current = now;
        // Subtle organic pitch variation
        const randomPitch = 0.95 + Math.random() * 0.12;
        playTick(randomPitch);
      }
    };

    const handlePointerOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(interactiveSelector);
      if (target && target === lastTargetRef.current) {
        const related = e.relatedTarget as HTMLElement | null;
        if (!related || !target.contains(related)) {
          // Cleared target so re-hovering will immediately register another tick
          lastTargetRef.current = null;
        }
      }
    };

    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    return () => {
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
    };
  }, [soundEnabled, playTick]);

  // 2. Global Click "Tick" Listener
  useEffect(() => {
    if (!soundEnabled) return;

    const handlePointerDown = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        'button, a, [role="button"], input, select, textarea, .cursor-pointer, [data-sound="tick"], summary, [tabindex="0"]'
      );
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
      // Trigger a tick every ~50px of accumulated scroll wheel distance
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
