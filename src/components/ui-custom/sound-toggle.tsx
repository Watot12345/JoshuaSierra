"use client";

import { useSound } from "@/context/sound-context";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

interface SoundToggleProps {
  variant?: "sidebar" | "icon" | "pill";
  className?: string;
}

export function SoundToggle({ variant = "icon", className }: SoundToggleProps) {
  const { soundEnabled, toggleSound } = useSound();
  const mounted = useMounted();

  if (!mounted) {
    if (variant === "sidebar") {
      return (
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
            <VolumeX className="h-3.5 w-3.5" />
            <span>Sound</span>
          </div>
          <div className="h-6 w-16 rounded-md bg-muted/40 animate-pulse" />
        </div>
      );
    }
    return (
      <div
        className={cn(
          "h-9 w-9 rounded-lg border border-border bg-card",
          className
        )}
      />
    );
  }

  if (variant === "sidebar") {
    return (
      <div className={cn("flex items-center justify-between", className)}>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
          {soundEnabled ? (
            <Volume2 className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
          ) : (
            <VolumeX className="h-3.5 w-3.5" />
          )}
          <span>UI Audio</span>
        </div>

        <button
          type="button"
          onClick={toggleSound}
          className={cn(
            "flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] transition-all cursor-pointer",
            soundEnabled
              ? "border-emerald-500/40 bg-emerald-500/10 font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
              : "border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
          title={
            soundEnabled
              ? "Sound is active (hover over elements to hear tick sounds). Click to mute."
              : "Sound is muted (default). Click to enable hover tick sounds."
          }
        >
          {soundEnabled ? (
            <>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Tick Sound</span>
            </>
          ) : (
            <>
              <VolumeX className="h-3 w-3" />
              <span>Muted</span>
            </>
          )}
        </button>
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={toggleSound}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs transition-colors cursor-pointer",
          soundEnabled
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
            : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted",
          className
        )}
        title={
          soundEnabled
            ? "Hover tick sounds enabled. Click to mute."
            : "Hover tick sounds muted (default). Click to enable."
        }
      >
        {soundEnabled ? (
          <>
            <Volume2 className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
            <span>Sound: On</span>
          </>
        ) : (
          <>
            <VolumeX className="h-3.5 w-3.5" />
            <span>Sound: Muted</span>
          </>
        )}
      </button>
    );
  }

  // Icon button (for sticky mobile headers, toolbars, etc.)
  return (
    <button
      type="button"
      onClick={toggleSound}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted cursor-pointer active:scale-95",
        soundEnabled && "border-emerald-500/40 text-emerald-600 dark:text-emerald-400",
        className
      )}
      aria-label={soundEnabled ? "Mute hover sound effects" : "Unmute hover sound effects"}
      title={
        soundEnabled
          ? "Hover tick sounds active. Click to mute."
          : "Sound muted (default). Click to enable hover tick sounds."
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
