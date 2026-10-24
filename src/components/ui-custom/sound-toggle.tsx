"use client";

import { useSound } from "@/context/sound-context";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

interface SoundToggleProps {
  variant?: "icon" | "icon-small";
  className?: string;
}

export function SoundToggle({ variant = "icon", className }: SoundToggleProps) {
  const { soundEnabled, toggleSound } = useSound();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className={cn(
          variant === "icon-small"
            ? "h-7 w-7 rounded-full border border-border bg-muted/30"
            : "h-9 w-9 rounded-lg border border-border bg-card",
          className
        )}
      />
    );
  }

  // Compact circular button positioned right next to the Theme switcher
  if (variant === "icon-small") {
    return (
      <button
        type="button"
        onClick={toggleSound}
        className={cn(
          "relative flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer active:scale-95",
          soundEnabled
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-2xs hover:bg-emerald-500/20"
            : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
          className
        )}
        aria-label={soundEnabled ? "Mute tick sound effects" : "Enable tick sound effects"}
        title={
          soundEnabled
            ? "Sound: Active (Ticks on hover, clicks, and scroll). Click to mute."
            : "Sound: Muted (Default). Click to enable tick sounds."
        }
      >
        {soundEnabled ? (
          <>
            <Volume2 className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </>
        ) : (
          <VolumeX className="h-3.5 w-3.5" />
        )}
      </button>
    );
  }

  // Standard icon button (used in sticky mobile headers)
  return (
    <button
      type="button"
      onClick={toggleSound}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted cursor-pointer active:scale-95",
        soundEnabled && "border-emerald-500/40 text-emerald-600 dark:text-emerald-400",
        className
      )}
      aria-label={soundEnabled ? "Mute tick sound effects" : "Enable tick sound effects"}
      title={
        soundEnabled
          ? "Sound: Active (Ticks on hover, clicks, and scroll). Click to mute."
          : "Sound: Muted (Default). Click to enable tick sounds."
      }
    >
      {soundEnabled ? (
        <>
          <Volume2 className="h-4 w-4 animate-pulse text-emerald-500" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        </>
      ) : (
        <VolumeX className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );
}
