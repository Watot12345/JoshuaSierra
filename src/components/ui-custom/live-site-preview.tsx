"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ExternalLink, Eye, ImageIcon, Loader2, RotateCw } from "lucide-react";
import { ActiveDot } from "@/components/ui-custom/active-dot";
import { cn } from "@/lib/utils";

interface LiveSitePreviewProps {
  title: string;
  liveUrl?: string;
  image?: string;
  defaultMode?: "live" | "image";
  className?: string;
  viewportClassName?: string;
  fallbackContent?: ReactNode;
}

function getDisplayHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function LiveSitePreview({
  title,
  liveUrl,
  image,
  defaultMode = "live",
  className,
  viewportClassName,
  fallbackContent,
}: LiveSitePreviewProps) {
  const initialMode = liveUrl ? defaultMode : "image";
  const [mode, setMode] = useState<"live" | "image">(initialMode);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const showLive = Boolean(liveUrl) && mode === "live";

  useEffect(() => {
    if (!showLive || isInView) return;
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [showLive, isInView]);

  const handleReload = () => {
    setIsLoaded(false);
    setReloadKey((prev) => prev + 1);
  };

  const handleModeSwitch = (nextMode: "live" | "image") => {
    if (nextMode === mode) return;
    if (nextMode === "live") {
      setIsLoaded(false);
    }
    setMode(nextMode);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-muted/40 flex flex-col",
        className
      )}
    >
      {/* Compact Browser Chrome Bar when liveUrl exists */}
      {liveUrl && (
        <div className="flex items-center justify-between gap-2 border-b border-border bg-card/90 px-3 py-1.5 font-mono text-[10px]">
          <div className="flex min-w-0 items-center gap-2">
            {showLive ? (
              <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                <ActiveDot size="xs" />
                LIVE
              </span>
            ) : (
              <span className="inline-flex shrink-0 items-center gap-1 text-muted-foreground">
                <ImageIcon className="h-3 w-3" />
                PREVIEW
              </span>
            )}
            <span className="truncate text-muted-foreground">
              {getDisplayHost(liveUrl)}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {image && (
              <div className="inline-flex items-center rounded-md border border-border bg-muted/60 p-0.5">
                <button
                  type="button"
                  data-sound="tick"
                  onClick={() => handleModeSwitch("live")}
                  className={cn(
                    "inline-flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors cursor-pointer",
                    showLive
                      ? "bg-background text-foreground font-semibold shadow-2xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  title="Interactive live site"
                >
                  <Eye className="h-2.5 w-2.5" />
                  <span>Live</span>
                </button>
                <button
                  type="button"
                  data-sound="tick"
                  onClick={() => handleModeSwitch("image")}
                  className={cn(
                    "inline-flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors cursor-pointer",
                    !showLive
                      ? "bg-background text-foreground font-semibold shadow-2xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  title="Static screenshot"
                >
                  <ImageIcon className="h-2.5 w-2.5" />
                  <span>Image</span>
                </button>
              </div>
            )}

            {showLive && (
              <button
                type="button"
                data-sound="tick"
                onClick={handleReload}
                aria-label={`Reload ${title} preview`}
                title="Reload live preview"
                className="flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
              >
                <RotateCw className="h-3 w-3" />
              </button>
            )}

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} in new tab`}
              title="Open in new tab"
              className="flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}

      {/* Viewport */}
      <div
        className={cn(
          "relative w-full bg-muted overflow-hidden",
          viewportClassName ?? "h-[320px] sm:h-[400px]"
        )}
      >
        {showLive && liveUrl ? (
          <>
            {!isLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-muted/90 font-mono text-xs text-muted-foreground pointer-events-none">
                <Loader2 className="h-5 w-5 animate-spin text-foreground/70" />
                <span>Loading interactive live site…</span>
              </div>
            )}
            {isInView && (
              <iframe
                key={`${liveUrl}-${reloadKey}`}
                src={liveUrl}
                title={`${title} — Live Interactive Preview`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer-when-downgrade"
                allow="focus-without-user-activation 'none'"
                onLoad={() => setIsLoaded(true)}
                className="h-full w-full border-0 bg-background"
              />
            )}
          </>
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          fallbackContent ?? (
            <div className="flex h-full w-full flex-col items-center justify-center p-3 font-mono text-xs">
              <span className="text-xs font-semibold text-foreground text-center">
                {title}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
