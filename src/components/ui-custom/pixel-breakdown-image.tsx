"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface PixelBreakdownImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  pixelSize?: number;
}

interface PixelBlock {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  currentX: number;
  currentY: number;
  rot: number;
  vRot: number;
  alpha: number;
  scale: number;
}

export function PixelBreakdownImage({
  src,
  alt,
  className,
  pixelSize = 8,
}: PixelBreakdownImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const blocksRef = useRef<PixelBlock[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Initialize and render the pixelated monochrome canvas
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width) || 320;
      const height = Math.floor(rect.height) || 200;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      // Draw original image into an offscreen downscaled buffer for authentic pixel sampling
      const sampleCols = Math.ceil(width / pixelSize);
      const sampleRows = Math.ceil(height / pixelSize);

      const offscreen = document.createElement("canvas");
      offscreen.width = sampleCols;
      offscreen.height = sampleRows;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      // Fit image into offscreen canvas with aspect ratio preservation
      const imgAspect = img.width / img.height;
      const canvasAspect = width / height;
      let drawW = sampleCols;
      let drawH = sampleRows;
      let drawX = 0;
      let drawY = 0;

      if (imgAspect > canvasAspect) {
        drawH = sampleCols / imgAspect;
        drawY = (sampleRows - drawH) / 2;
      } else {
        drawW = sampleRows * imgAspect;
        drawX = (sampleCols - drawW) / 2;
      }

      offCtx.drawImage(img, drawX, drawY, drawW, drawH);
      const imgData = offCtx.getImageData(0, 0, sampleCols, sampleRows).data;

      const blocks: PixelBlock[] = [];
      const centerX = width / 2;
      const centerY = height / 2;

      for (let r = 0; r < sampleRows; r++) {
        for (let c = 0; c < sampleCols; c++) {
          const idx = (r * sampleCols + c) * 4;
          const red = imgData[idx];
          const green = imgData[idx + 1];
          const blue = imgData[idx + 2];
          const alpha = imgData[idx + 3];

          // Skip completely transparent pixels
          if (alpha < 15) continue;

          // Convert to high-contrast monochrome grayscale
          const gray = Math.round(0.299 * red + 0.587 * green + 0.114 * blue);

          const posX = c * pixelSize;
          const posY = r * pixelSize;

          // Precompute explosion physics vectors outwards from center
          const dx = posX - centerX;
          const dy = posY - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const speed = 3.5 + Math.random() * 4.5;

          blocks.push({
            x: posX,
            y: posY,
            size: pixelSize - 1, // subtle 1px gap for retro pixel matrix grid
            color: `rgb(${gray}, ${gray}, ${gray})`,
            vx: (dx / dist) * speed + (Math.random() - 0.5) * 4,
            vy: (dy / dist) * speed + (Math.random() - 0.5) * 4 - 1.5,
            currentX: posX,
            currentY: posY,
            rot: 0,
            vRot: (Math.random() - 0.5) * 0.4,
            alpha: 1,
            scale: 1,
          });
        }
      }

      blocksRef.current = blocks;

      // Initial draw of static monochrome pixel grid
      drawBlocks(ctx, width, height, 0);
      setIsLoaded(true);
    };

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [src, pixelSize]);

  const drawBlocks = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    progress: number
  ) => {
    ctx.clearRect(0, 0, width, height);

    const blocks = blocksRef.current;
    const len = blocks.length;

    for (let i = 0; i < len; i++) {
      const b = blocks[i];
      if (b.alpha <= 0.01) continue;

      ctx.save();
      ctx.globalAlpha = b.alpha;
      ctx.fillStyle = b.color;

      // Translate to block center, rotate, scale, and draw
      const halfSize = (b.size * b.scale) / 2;
      ctx.translate(b.currentX + halfSize, b.currentY + halfSize);
      ctx.rotate(b.rot);
      ctx.fillRect(-halfSize, -halfSize, b.size * b.scale, b.size * b.scale);

      ctx.restore();
    }
  };

  // Run the breakdown physics explosion when hovered
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isLoaded) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    if (isHovered) {
      startTimeRef.current = performance.now();
      const DURATION = 450; // ms to complete breakdown

      const animateExplosion = (now: number) => {
        const elapsed = now - (startTimeRef.current || now);
        const progress = Math.min(1, elapsed / DURATION);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const blocks = blocksRef.current;
        const len = blocks.length;

        for (let i = 0; i < len; i++) {
          const b = blocks[i];
          b.currentX = b.x + b.vx * easeOut * 9;
          b.currentY = b.y + b.vy * easeOut * 9;
          b.rot += b.vRot;
          b.scale = Math.max(0, 1 - progress * 0.85);
          b.alpha = Math.max(0, 1 - progress * 1.35);
        }

        drawBlocks(ctx, canvas.width, canvas.height, progress);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(animateExplosion);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };

      animFrameRef.current = requestAnimationFrame(animateExplosion);
    } else {
      // Reassemble / restore monochrome pixel grid
      startTimeRef.current = performance.now();
      const DURATION = 300;

      const animateReassemble = (now: number) => {
        const elapsed = now - (startTimeRef.current || now);
        const progress = Math.min(1, elapsed / DURATION);
        const easeOut = 1 - Math.pow(1 - progress, 2);

        const blocks = blocksRef.current;
        const len = blocks.length;

        for (let i = 0; i < len; i++) {
          const b = blocks[i];
          b.currentX = b.x * easeOut + b.currentX * (1 - easeOut);
          b.currentY = b.y * easeOut + b.currentY * (1 - easeOut);
          b.rot = b.rot * (1 - easeOut);
          b.scale = 0.3 + 0.7 * easeOut;
          b.alpha = easeOut;
        }

        drawBlocks(ctx, canvas.width, canvas.height, progress);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(animateReassemble);
        } else {
          // Reset all blocks firmly to original positions
          for (let i = 0; i < len; i++) {
            const b = blocks[i];
            b.currentX = b.x;
            b.currentY = b.y;
            b.rot = 0;
            b.scale = 1;
            b.alpha = 1;
          }
          drawBlocks(ctx, canvas.width, canvas.height, 0);
        }
      };

      animFrameRef.current = requestAnimationFrame(animateReassemble);
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovered, isLoaded]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-border bg-black/90 select-none cursor-pointer group/pixel",
        className
      )}
    >
      {/* Real, full-color original image underneath */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "h-full w-full object-contain p-2 transition-all duration-500 ease-out",
          isHovered
            ? "scale-105 filter-none opacity-100"
            : "scale-100 grayscale contrast-125 brightness-75 opacity-20"
        )}
      />

      {/* Monochrome Pixelated Breakdown Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          "absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-300",
          isHovered ? "opacity-80" : "opacity-100"
        )}
      />

      {/* Cyber/Retro Mode Badge */}
      <div className="absolute top-2 right-2 flex items-center gap-1.5 rounded-md border border-border/80 bg-background/90 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs shadow-xs transition-colors pointer-events-none">
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors",
            isHovered ? "bg-emerald-500 animate-ping" : "bg-muted-foreground"
          )}
        />
        <span className="text-muted-foreground group-hover/pixel:text-foreground">
          {isHovered ? "True Color" : "8-Bit Mono"}
        </span>
      </div>

      {/* Mobile Tap Hint */}
      <div className="sm:hidden absolute bottom-1.5 left-2 pointer-events-none font-mono text-[8px] text-muted-foreground/60 uppercase">
        Tap to {isHovered ? "pixelate" : "reveal"}
      </div>
    </div>
  );
}
