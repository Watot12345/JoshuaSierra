import { cn } from "@/lib/utils";

interface ActiveDotProps {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  ping?: boolean;
}

export function ActiveDot({
  size = "md",
  className,
  ping = true,
}: ActiveDotProps) {
  const sizeMap = {
    xs: { outer: "h-1.5 w-1.5", core: "h-1.5 w-1.5" },
    sm: { outer: "h-2 w-2", core: "h-2 w-2" },
    md: { outer: "h-2.5 w-2.5", core: "h-2.5 w-2.5" },
    lg: { outer: "h-3.5 w-3.5", core: "h-3.5 w-3.5" },
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        dim.outer,
        className
      )}
      aria-hidden="true"
    >
      {ping && (
        <span
          className={cn(
            "absolute inline-flex rounded-full bg-emerald-400/80 animate-lively-ping",
            dim.core
          )}
        />
      )}
      <span
        className={cn(
          "relative inline-flex rounded-full bg-emerald-500 animate-lively-breathe",
          dim.core
        )}
      />
    </span>
  );
}
