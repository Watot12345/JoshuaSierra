"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaCalendarAlt,
  FaFire,
  FaSpinner,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui-custom/section-heading";
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
    commits: "392",
    description: "392 contributions in 2026",
    url: "https://github.com/Watot12345?tab=overview&from=2026-08-01&to=2026-08-09",
    tag: "2026",
  },
  "2025": {
    commits: "249",
    description: "249 contributions in 2025",
    url: "https://github.com/Watot12345?tab=overview&from=2025-12-01&to=2025-12-31",
    tag: "2025",
  },
  "2024": {
    commits: "1",
    description: "1 contribution in 2024",
    url: "https://github.com/Watot12345?tab=overview&from=2024-12-01&to=2024-12-31",
    tag: "2024",
  },
  "All Time": {
    commits: "642",
    description: "642 total contributions across all years",
    url: "https://github.com/Watot12345",
    tag: "All Time",
  },
};

// Portfolio Crimson/Red Scale (Levels 0 - 4)
function getLevelColor(level: number) {
  switch (level) {
    case 1:
      return "#4a0b0b";
    case 2:
      return "#8b1111";
    case 3:
      return "#dc2626";
    case 4:
      return "#ff4d4d";
    default:
      return "#161b22";
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
  const [selectedYear, setSelectedYear] = useState<YearFilter>("2026");
  const [days, setDays] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [publicRepos, setPublicRepos] = useState<number | null>(null);
  const [totalText, setTotalText] = useState("");
  const [yearCommits, setYearCommits] = useState<number | null>(null);
  const [allTimeCommits, setAllTimeCommits] = useState<number | null>(null);
  const [liveYearTotals, setLiveYearTotals] = useState<Record<string, number>>({});
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const username = "Watot12345";
  const years: YearFilter[] = ["2026", "2025", "2024", "All Time"];
  const currentDetail = YEAR_DETAILS[selectedYear];

  // Fetch live repo count from GitHub API
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((d) => setPublicRepos(d.public_repos ?? null))
      .catch(() => {});
  }, []);

  // Fetch real contribution heatmap data per year
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setDays([]);
    setTotalText("");
    setHoveredDay(null);

    fetch(`/api/github-contributions?username=${username}&year=${selectedYear}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) {
          setDays(data.days ?? []);
          setTotalText(data.totalText ?? currentDetail.description);
          if (data.totalCount !== undefined) setYearCommits(data.totalCount);
          if (data.allTimeTotal !== undefined) setAllTimeCommits(data.allTimeTotal);
          if (data.yearTotals) setLiveYearTotals(data.yearTotals);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedYear, currentDetail.description]);

  // Group into 7-row Sunday-to-Saturday week columns
  const weeksMatrix = useMemo(() => {
    if (days.length === 0) return [];

    const matrix: (DayData | null)[][] = [];
    let currentWeek: (DayData | null)[] = [];

    // Parse the first day date to get its Sunday-relative weekday (0 = Sun, 6 = Sat)
    const firstDateStr = days[0].date;
    const parts = firstDateStr.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const dateObj = new Date(Date.UTC(year, month, day));
      const startDayOfWeek = dateObj.getUTCDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat

      // Fill leading empty cells in week 0
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

  // Dynamically calculate month label positions matching real GitHub month spacing
  const monthLabels = useMemo(() => {
    const labels: { name: string; weekIndex: number }[] = [];
    const seenMonths = new Set<string>();
    let lastWeekIndex = -4;

    weeksMatrix.forEach((week, wIndex) => {
      const validDay = week.find((d) => d !== null && d.date);
      if (validDay && validDay.date) {
        const parts = validDay.date.split("-");
        if (parts.length === 3) {
          const year = parts[0];
          const monthIndex = parseInt(parts[1], 10) - 1;
          const monthKey =
            selectedYear === "All Time" ? `${year}-${monthIndex}` : `${monthIndex}`;

          if (
            monthIndex >= 0 &&
            monthIndex < 12 &&
            !seenMonths.has(monthKey) &&
            wIndex - lastWeekIndex >= 3
          ) {
            labels.push({ name: MONTH_NAMES[monthIndex], weekIndex: wIndex });
            seenMonths.add(monthKey);
            lastWeekIndex = wIndex;
          }
        }
      }
    });
    return labels;
  }, [weeksMatrix, selectedYear]);

  // Zoomed cell sizing for legibility: 15px cell size, 3.5px gap (18.5px step)
  const CELL = 15;
  const GAP = 3.5;
  const STEP = CELL + GAP;
  const svgH = 7 * STEP; // ~130px
  const topMonthOffset = 22; // 22px top space for Month labels

  // Auto-scroll to align to current / recent contributions
  useEffect(() => {
    if (!loading && scrollContainerRef.current) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
      }, 120);
    }
  }, [days, loading]);

  const displayYearCommits =
    yearCommits !== null ? String(yearCommits) : currentDetail.commits;
  const displayAllTimeCommits =
    allTimeCommits !== null ? String(allTimeCommits) : "642";

  return (
    <section id="github-activity" className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
      {/* Crimson ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(220,38,38,0.5), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Open Source & Live Sync"
          title={
            <>
              GitHub <span className="text-gradient-fire">Contributions</span>
            </>
          }
          description={`Live real-time contribution calendar for @${username}`}
        />

        {/* ── Year Filter Tabs ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {years.map((year) => {
            const count =
              liveYearTotals[year] !== undefined
                ? liveYearTotals[year]
                : YEAR_DETAILS[year].commits;
            const isSelected = selectedYear === year;
            return (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95",
                  isSelected
                    ? "text-white scale-105 shadow-lg shadow-crimson/30"
                    : "text-muted-foreground hover:text-white hover:bg-white/5 border border-white/10"
                )}
                style={
                  isSelected
                    ? {
                        background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }
                    : { backgroundColor: "rgba(18,18,18,0.7)" }
                }
              >
                <FaCalendarAlt className="h-3.5 w-3.5" />
                <span>{year}</span>
                <span
                  className={cn(
                    "ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                    isSelected ? "bg-white/20 text-white" : "bg-white/10 text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Stat Cards ── */}
        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {[
            {
              icon: <FaFire className="h-6 w-6 text-crimson" />,
              label: `Commits (${selectedYear})`,
              value: displayYearCommits,
              highlight: true,
            },
            {
              icon: <FaCodeBranch className="h-6 w-6 text-crimson" />,
              label: "All-Time Commits",
              value: displayAllTimeCommits,
              highlight: false,
            },
            {
              icon: <FaStar className="h-6 w-6 text-crimson" />,
              label: "Public Repositories",
              value: publicRepos ? String(publicRepos) : "—",
              highlight: false,
            },
            {
              icon: <FaGithub className="h-6 w-6 text-crimson" />,
              label: "GitHub Handle",
              value: `@${username}`,
              highlight: false,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-4.5 transition-all duration-300 backdrop-blur-xl",
                card.highlight
                  ? "border-crimson/40 bg-crimson/10 shadow-lg shadow-crimson/10"
                  : "border-white/10 bg-[#121212]/80 hover:border-crimson/30 hover:bg-[#161616]"
              )}
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                    {card.label}
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${card.label}-${card.value}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={cn(
                        "font-black mt-0.5 truncate tracking-tight text-xl sm:text-2xl",
                        card.highlight ? "text-gradient-fire" : "text-white"
                      )}
                    >
                      {card.value}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Official GitHub Structure + Portfolio Crimson Theme Heatmap Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/12 bg-[#0c0d12]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl text-center"
        >
          {/* Card Header */}
          <div className="flex flex-col items-center justify-center gap-1.5 border-b border-white/10 pb-5 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {displayYearCommits} contributions in {selectedYear === "All Time" ? "all years" : selectedYear}
            </h3>

            {/* Hover Tooltip display badge matching GitHub exact tooltip text */}
            <div className="min-h-[30px] mt-1 flex items-center justify-center">
              {hoveredDay ? (
                <div className="inline-flex items-center gap-2 rounded-lg border border-crimson/40 bg-crimson/20 px-3.5 py-1 text-xs font-mono text-white shadow-md backdrop-blur-md">
                  <span
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ backgroundColor: getLevelColor(hoveredDay.level) }}
                  />
                  <span>{formatTooltipText(hoveredDay)}</span>
                </div>
              ) : (
                <span className="text-xs text-muted-foreground/75 inline-block font-mono">
                  Hover over squares for details · Scroll horizontally to navigate
                </span>
              )}
            </div>
          </div>

          {/* Centered Heatmap Grid Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.2 }}
              ref={scrollContainerRef}
              className="no-scrollbar overflow-x-auto pt-6 pb-2 scroll-smooth flex justify-center"
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center gap-3 py-20 text-muted-foreground">
                  <FaSpinner className="h-8 w-8 animate-spin text-crimson" />
                  <p className="text-sm font-mono text-slate-300">
                    Loading @{username} contribution graph…
                  </p>
                </div>
              ) : (
                <div className="mx-auto flex items-start gap-3 justify-center py-2 select-none">
                  {/* Left Day Labels: Mon (row 1), Wed (row 3), Fri (row 5) ONLY */}
                  <div
                    className="flex flex-col text-[11px] font-mono font-medium text-slate-400 shrink-0 pr-1 text-right"
                    style={{
                      gap: `${STEP - 11}px`,
                      paddingTop: `${topMonthOffset + STEP - 1}px`, // align with Mon (row 1)
                      width: "32px",
                    }}
                  >
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* SVG Grid: 15px cells, 3.5px gap, Sun-Sat 7 rows */}
                  <svg
                    width={weeksMatrix.length * STEP}
                    height={topMonthOffset + svgH}
                    className="overflow-visible"
                  >
                    {/* Month Labels inside SVG coordinate space */}
                    {monthLabels.map((lbl) => (
                      <text
                        key={`${lbl.name}-${lbl.weekIndex}`}
                        x={lbl.weekIndex * STEP}
                        y={14}
                        fill="#94a3b8"
                        fontSize="12"
                        fontFamily="monospace"
                        fontWeight="600"
                      >
                        {lbl.name}
                      </text>
                    ))}

                    {/* Daily contribution cells: 7 rows (Sun=0 .. Sat=6) */}
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
                              rx="3.5"
                              ry="3.5"
                              fill="transparent"
                            />
                          );
                        }

                        const color = getLevelColor(day.level);
                        const cellY = topMonthOffset + dIndex * STEP;
                        return (
                          <rect
                            key={`${day.date}-${wIndex}-${dIndex}`}
                            x={wIndex * STEP}
                            y={cellY}
                            width={CELL}
                            height={CELL}
                            rx="3.5"
                            ry="3.5"
                            fill={color}
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="1"
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            style={{
                              cursor: "pointer",
                            }}
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

          {/* Footer Legend with Crimson Palette */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 border-t border-white/10 pt-4 px-2">
            <span className="text-slate-400">
              Learn how we count contributions
            </span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className="inline-block rounded-md border border-white/10"
                  style={{
                    width: CELL,
                    height: CELL,
                    backgroundColor: getLevelColor(l),
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



