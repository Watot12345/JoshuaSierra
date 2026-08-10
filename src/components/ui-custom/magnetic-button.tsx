"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  download?: boolean;
}

/**
 * A button (or anchor) that magnetically attracts toward the cursor.
 * Renders an <a> when href is provided, otherwise a <button>.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  href,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    // Disable magnetic offset calculations on touch screen devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = (): void => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    const isInternal = href.startsWith("#");
    return (
      <a
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        download={download}
        className={cn("inline-block w-full sm:w-auto text-center", className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("inline-block w-full sm:w-auto text-center", className)}
    >
      {content}
    </button>
  );
}
