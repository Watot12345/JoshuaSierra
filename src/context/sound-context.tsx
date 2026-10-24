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
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  toggleSound: () => {},
  playTick: () => {},
  playClick: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  // CRITICAL REQUIREMENT: Default is MUTED (false)
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastTargetRef = useRef<Element | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Initialize from localStorage if explicitly set, otherwise defaults to false
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
   * Generates a crisp, subtle mechanical UI "tick" using Web Audio API synthesis.
   * Zero external audio files required, zero latency, ultra-lightweight.
   */
  const playTick = useCallback(
    (pitch: number = 1.0) => {
      if (!soundEnabled) return;
      try {
        const ctx = initContext();
        if (!ctx) return;

        const now = ctx.currentTime;

        // Bandpass filter centered at 2800Hz produces that tactile, satisfying tick
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(2800 * pitch, now);
        filter.Q.setValueAtTime(3.5, now);

        // Micro oscillator pop (12 milliseconds)
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1600 * pitch, now);
        osc.frequency.exponentialRampToValueAtTime(350, now + 0.012);

        // Soft volume envelope
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.014);
      } catch {
        // Audio error suppression
      }
    },
    [soundEnabled, initContext]
  );

  /**
   * Slightly deeper click for button presses
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
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.018);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.02);
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
        // Confirmation tick chime when unmuting
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

  /**
   * Global hover listener: whenever sound is unmuted, hovering over interactive
   * elements (buttons, links, tabs, cards, inputs) plays the tactile "tick" sound.
   */
  useEffect(() => {
    if (!soundEnabled) return;

    const handlePointerOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        'button, a, [role="button"], input, select, textarea, .cursor-pointer, [data-sound="tick"], summary'
      );
      if (!target || target === lastTargetRef.current) return;
      lastTargetRef.current = target;

      const now = Date.now();
      // 40ms throttle to prevent sound clipping on rapid mouse traversal
      if (now - lastTimeRef.current > 40) {
        lastTimeRef.current = now;
        playTick(1.0);
      }
    };

    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    return () => {
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, [soundEnabled, playTick]);

  return (
    <SoundContext.Provider
      value={{ soundEnabled, toggleSound, playTick, playClick }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
