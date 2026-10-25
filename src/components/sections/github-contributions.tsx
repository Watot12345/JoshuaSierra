"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  FaGithub,
  FaSpinner,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

type YearFilter = "2026" | "2025" | "2024" | "All Time";

interface DayData {
  date: string;
  level: number;
}

const YEAR_DETAILS: Record<
  YearFilter,
  { commits: string; description: string; url: string; tag: string }
> = {
  "2026": {
    commits: "803",
    description: "803 contributions in 2026",
    url: "https://github.com/Watot12345",
    tag: "2026",
  },
  "2025": {
    commits: "249",
    description: "249 contributions in 2025",
    url: "https://github.com/Watot12345",
    tag: "2025",
  },
  "2024": {
    commits: "1",
    description: "1 contribution in 2024",
    url: "https://github.com/Watot12345",
    tag: "2024",
  },
  "All Time": {
    commits: "1053",
    description: "1053 total contributions across all years",
    url: "https://github.com/Watot12345",
    tag: "All Time",
  },
};

// Authentic GitHub Contribution Palette (Adapts to Dark/Light theme)
function getLevelColor(level: number, isDark = true) {
  if (isDark) {
    switch (level) {
      case 1:
        return "#0e4429";
      case 2:
        return "#006d32";
      case 3:
        return "#26a641";
      case 4:
        return "#39d353";
      default:
        return "#1c2128";
    }
  } else {
    switch (level) {
      case 1:
        return "#9be9a8";
      case 2:
        return "#40c463";
      case 3:
        return "#30a14e";
      case 4:
        return "#216e39";
      default:
        return "#ebedf0";
    }
  }
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatTooltipText(day: DayData | null) {
  if (!day || !day.date) return "";
  const parts = day.date.split("-");
  if (parts.length !== 3) return "";
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);

  const monthName = MONTH_NAMES[m];
  const countStr =
    day.level === 0
      ? "No contributions"
      : `${day.level} contribution${day.level > 1 ? "s" : ""}`;
  return `${countStr} on ${monthName} ${d}, ${y}`;
}

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const [selectedYear, setSelectedYear] = useState<YearFilter>("2026");
  const [days, setDays] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [publicRepos, setPublicRepos] = useState<number | null>(34);
  const [yearCommits, setYearCommits] = useState<number | null>(null);
  const [allTimeCommits, setAllTimeCommits] = useState<number | null>(null);
  const [liveYearTotals, setLiveYearTotals] = useState<Record<string, number>>({});
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const username = "Watot12345";
  const years: YearFilter[] = ["2026", "2025", "2024", "All Time"];
  const currentDetail = YEAR_DETAILS[selectedYear];

  // Fetch real contribution heatmap data and repo stats with timeout and fallback
  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      if (!cancelled) {
        controller.abort();
        setLoading(false);
      }
    }, 4500);

    setLoading(true);
    setDays([]);
    setHoveredDay(null);

    fetch(`/api/github-contributions?username=${username}&year=${selectedYear}`, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) {
          clearTimeout(timer);
          setDays(data.days ?? []);
          if (data.totalCount !== undefined) setYearCommits(data.totalCount);
          if (data.allTimeTotal !== undefined) setAllTimeCommits(data.allTimeTotal);
          if (data.yearTotals) setLiveYearTotals(data.yearTotals);
          if (typeof data.publicRepos === "number") setPublicRepos(data.publicRepos);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          clearTimeout(timer);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [selectedYear]);

  // Group into 7-row Sunday-to-Saturday week columns
  const weeksMatrix = useMemo(() => {
    if (days.length === 0) return [];

    const matrix: (DayData | null)[][] = [];
    let currentWeek: (DayData | null)[] = [];

    const firstDateStr = days[0].date;
    const parts = firstDateStr.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const dateObj = new Date(Date.UTC(year, month, day));
      const startDayOfWeek = dateObj.getUTCDay();

      for (let i = 0; i < startDayOfWeek; i++) {
        currentWeek.push(null);
      }
    }

    days.forEach((d) => {
      currentWeek.push(d);
      if (currentWeek.length === 7) {
        matrix.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      matrix.push(currentWeek);
    }

    return matrix;
  }, [days]);

  // Calculate month labels
  const monthLabels = useMemo(() => {
    const labels: { name: string; weekIndex: number }[] = [];
    const seenMonths = new Set<string>();
    let lastWeekIndex = -4;

    weeksMatrix.forEach((week, wIndex) => {
      const firstValidDay = week.find((d) => d !== null);
      if (firstValidDay) {
        const parts = firstValidDay.date.split("-");
        if (parts.length === 3) {
          const monthIdx = parseInt(parts[1], 10) - 1;
          const monthKey = `${parts[0]}-${parts[1]}`;
          if (!seenMonths.has(monthKey) && wIndex - lastWeekIndex >= 3) {
            seenMonths.add(monthKey);
            labels.push({ name: MONTH_NAMES[monthIdx], weekIndex: wIndex });
            lastWeekIndex = wIndex;
          }
        }
      }
    });

    return labels;
  }, [weeksMatrix]);

  const CELL = 13;
  const GAP = 3;
  const STEP = CELL + GAP;
  const topMonthOffset = 22;
  const svgH = 7 * STEP;

  const displayYearCommits =
    liveYearTotals[selectedYear] !== undefined
      ? String(liveYearTotals[selectedYear])
      : yearCommits !== null
      ? String(yearCommits)
      : currentDetail.commits;

  const displayAllTimeCommits =
    allTimeCommits !== null
      ? String(allTimeCommits)
      : YEAR_DETAILS["All Time"].commits;

  return (
    <section id="github-activity" className="py-12 border-b border-border">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          05 — github activity
        </h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          @{username} ↗
        </a>
      </div>

      {/* GitHub Contribution Heatmap Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs text-center"
      >
          {/* Card Header */}
          <div className="flex flex-col items-center justify-center gap-1.5 border-b border-border pb-5 text-center">
            <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
              {displayYearCommits} contributions in {selectedYear === "All Time" ? "all years" : selectedYear}
            </h3>

            {/* Hover Tooltip display badge */}
            <div className="min-h-[26px] mt-1 flex items-center justify-center">
              {hoveredDay ? (
                <div className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/80 px-3 py-1 text-xs font-mono text-foreground shadow-xs">
                  <span
                    className="h-2.5 w-2.5 rounded-xs"
                    style={{ backgroundColor: getLevelColor(hoveredDay.level, isDark) }}
                  />
                  <span>{formatTooltipText(hoveredDay)}</span>
                </div>
              ) : (
                <span className="text-xs text-muted-foreground inline-block font-mono">
                  Hover over squares for details
                </span>
              )}
            </div>
          </div>

          {/* Centered Heatmap Grid Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              ref={scrollContainerRef}
              className="no-scrollbar overflow-x-auto pt-6 pb-2 flex justify-center"
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
                  <FaSpinner className="h-6 w-6 animate-spin text-primary" />
                  <p className="text-xs font-mono">
                    Loading @{username} contribution graph…
                  </p>
                </div>
              ) : weeksMatrix.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 px-4 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/60 text-foreground">
                    <FaGithub className="h-5 w-5" />
                  </div>
                  <p className="font-mono text-xs font-semibold text-foreground">
                    {displayYearCommits} verified contributions in {selectedYear === "All Time" ? "all years" : selectedYear}
                  </p>
                  <p className="max-w-md text-xs text-muted-foreground leading-relaxed">
                    Live interactive contribution heatmap is accessible directly on GitHub.
                  </p>
                  <a
                    href={currentDetail.url || `https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-xs font-medium text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-muted shadow-xs"
                  >
                    <FaGithub className="h-3.5 w-3.5" />
                    <span>View Activity on GitHub (@{username}) ↗</span>
                  </a>
                </div>
              ) : (
                <div className="mx-auto flex items-start gap-2.5 justify-center py-2 select-none">
                  {/* Day Labels */}
                  <div
                    className="flex flex-col text-[10px] font-mono font-medium text-muted-foreground shrink-0 pr-1 text-right"
                    style={{
                      gap: `${STEP - 10}px`,
                      paddingTop: `${topMonthOffset + STEP - 2}px`,
                      width: "28px",
                    }}
                  >
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* SVG Grid */}
                  <svg
                    width={weeksMatrix.length * STEP}
                    height={topMonthOffset + svgH}
                    className="overflow-visible"
                  >
                    {monthLabels.map((lbl) => (
                      <text
                        key={`${lbl.name}-${lbl.weekIndex}`}
                        x={lbl.weekIndex * STEP}
                        y={14}
                        fill="currentColor"
                        className="text-muted-foreground"
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="600"
                      >
                        {lbl.name}
                      </text>
                    ))}

                    {weeksMatrix.map((week, wIndex) =>
                      week.map((day, dIndex) => {
                        if (!day) {
                          return (
                            <rect
                              key={`empty-${wIndex}-${dIndex}`}
                              x={wIndex * STEP}
                              y={topMonthOffset + dIndex * STEP}
                              width={CELL}
                              height={CELL}
                              rx="2.5"
                              ry="2.5"
                              fill="transparent"
                            />
                          );
                        }

                        const color = getLevelColor(day.level, isDark);
                        const cellY = topMonthOffset + dIndex * STEP;
                        return (
                          <rect
                            key={`${day.date}-${wIndex}-${dIndex}`}
                            x={wIndex * STEP}
                            y={cellY}
                            width={CELL}
                            height={CELL}
                            rx="2.5"
                            ry="2.5"
                            fill={color}
                            stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
                            strokeWidth="1"
                            data-sound="tick"
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            style={{ cursor: "pointer" }}
                          >
                            <title>{formatTooltipText(day)}</title>
                          </rect>
                        );
                      })
                    )}
                  </svg>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer Legend */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground border-t border-border pt-4 px-2">
            <span>Real-time GitHub activity</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className="inline-block rounded-xs border border-border"
                  style={{
                    width: CELL,
                    height: CELL,
                    backgroundColor: getLevelColor(l, isDark),
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
