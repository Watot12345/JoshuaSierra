"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaExternalLinkAlt,
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
  { commits: string; description: string; url: string; tag: string; apiYear: string }
> = {
  "2026": {
    commits: "389",
    description: "389 contributions in 2026",
    url: "https://github.com/Watot12345?tab=overview&from=2026-08-01&to=2026-08-09",
    tag: "2026",
    apiYear: "2026",
  },
  "2025": {
    commits: "249",
    description: "249 contributions in 2025",
    url: "https://github.com/Watot12345?tab=overview&from=2025-12-01&to=2025-12-31",
    tag: "2025",
    apiYear: "2025",
  },
  "2024": {
    commits: "1",
    description: "1 contribution in 2024",
    url: "https://github.com/Watot12345?tab=overview&from=2024-12-01&to=2024-12-31",
    tag: "2024",
    apiYear: "2024",
  },
  "All Time": {
    commits: "639",
    description: "639 total contributions across all years",
    url: "https://github.com/Watot12345",
    tag: "All Time",
    apiYear: "2026",
  },
};

// Crimson-scale colors matching real GitHub's green scale but in red
function getLevelColor(level: number) {
  switch (level) {
    case 1: return "#3d0000";
    case 2: return "#7f1d1d";
    case 3: return "#dc2626";
    case 4: return "#ff4040";
    default: return "#161b22";
  }
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function GithubContributions() {
  const [selectedYear, setSelectedYear] = useState<YearFilter>("2026");
  const [days, setDays] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [publicRepos, setPublicRepos] = useState<number | null>(null);
  const [totalText, setTotalText] = useState("");

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

    fetch(`/api/github-contributions?username=${username}&year=${currentDetail.apiYear}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) {
          setDays(data.days ?? []);
          setTotalText(data.totalText ?? currentDetail.description);
          setLoading(false);
        }
      })
      .catch(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [selectedYear, currentDetail.apiYear, currentDetail.description]);

  // Group into 7-day week columns
  const weeksMatrix = useMemo(() => {
    const weeks: DayData[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  }, [days]);

  const CELL = 14;   // cell size px
  const GAP  = 3;    // gap between cells px
  const STEP = CELL + GAP;
  const svgH = 7 * STEP;

  return (
    <section id="github-activity" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Open Source & Activity"
          title={
            <>
              GitHub <span className="text-gradient-fire">Contributions</span>
            </>
          }
          description="Real contribution data pulled live from my GitHub profile — switch year to see each calendar."
        />

        {/* ── Year Filter Tabs ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setSelectedYear(year)}
              className={cn(
                "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300",
                selectedYear === year ? "text-white scale-105 shadow-lg" : "text-muted-foreground hover:text-white"
              )}
              style={
                selectedYear === year
                  ? { background: "linear-gradient(135deg,#dc2626,#7f1d1d)", boxShadow: "0 0 20px rgba(220,38,38,0.45)" }
                  : { backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              <FaCalendarAlt className="h-3.5 w-3.5" />
              {year}
              {selectedYear === year && (
                <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
                  {currentDetail.commits}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Stat Cards ── */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <FaFire className="h-7 w-7" style={{ color:"#dc2626" }}/>, label: `Commits (${selectedYear})`, value: currentDetail.commits, highlight: true },
            { icon: <FaCodeBranch className="h-7 w-7" style={{ color:"#dc2626" }}/>, label: "All-Time Commits", value: "639", highlight: false },
            { icon: <FaStar className="h-7 w-7" style={{ color:"#dc2626" }}/>, label: "Public Repos", value: publicRepos ? String(publicRepos) : "—", highlight: false },
            { icon: <FaGithub className="h-7 w-7" style={{ color:"#dc2626" }}/>, label: "GitHub Handle", value: `@${username}`, highlight: false },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={cn(
                "glass rounded-2xl p-5 border flex items-center gap-4",
                card.highlight ? "border-crimson/40 bg-crimson/5" : "border-white/10"
              )}
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-white/5 shrink-0">
                {card.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground truncate">{card.label}</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${card.label}-${card.value}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={cn("font-black mt-0.5 truncate", card.highlight ? "text-3xl text-crimson" : "text-2xl text-white")}
                    style={card.highlight ? { color: "#dc2626" } : {}}
                  >
                    {card.value}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Big Heatmap Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong relative mt-8 overflow-hidden rounded-3xl border border-white/10"
        >
          {/* Card header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 pb-0">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-white">
                <FaGithub className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {selectedYear === "All Time" ? "All-Time" : selectedYear} Contribution Graph
                </h3>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedYear}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-muted-foreground mt-0.5"
                  >
                    {totalText || currentDetail.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <a
              href={currentDetail.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur transition-all hover:border-crimson hover:text-crimson"
            >
              Open on GitHub <FaExternalLinkAlt className="h-3 w-3" />
            </a>
          </div>

          {/* Heatmap */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto p-6 sm:p-8 pt-4"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3 py-20 text-muted-foreground">
                  <FaSpinner className="h-6 w-6 animate-spin" style={{ color:"#dc2626" }} />
                  <span className="text-sm font-medium">Loading {selectedYear} graph from github.com/{username}…</span>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/8 bg-[#0d1117] p-6 shadow-2xl" style={{ minWidth: "780px" }}>
                  {/* Month labels */}
                  <div
                    className="flex mb-2 text-[11px] font-mono text-slate-500"
                    style={{ paddingLeft: "36px", justifyContent: "space-between", paddingRight: "4px" }}
                  >
                    {MONTHS.map((m) => <span key={m}>{m}</span>)}
                  </div>

                  <div className="flex items-start gap-2">
                    {/* Weekday labels */}
                    <div
                      className="flex flex-col text-[10px] font-mono text-slate-600 shrink-0 pr-2"
                      style={{ gap: `${GAP + CELL - 12}px`, paddingTop: "1px", width: "28px" }}
                    >
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                      <span>Sun</span>
                    </div>

                    {/* SVG Grid */}
                    <svg
                      width={weeksMatrix.length * STEP}
                      height={svgH}
                      style={{ minWidth: "700px" }}
                    >
                      {weeksMatrix.map((week, wIndex) =>
                        week.map((day, dIndex) => {
                          const color = getLevelColor(day.level);
                          return (
                            <g key={`${day.date}-${dIndex}`}>
                              <rect
                                x={wIndex * STEP}
                                y={dIndex * STEP}
                                width={CELL}
                                height={CELL}
                                rx="3"
                                ry="3"
                                fill={color}
                                style={{
                                  transition: "fill 0.15s",
                                  cursor: day.level > 0 ? "pointer" : "default",
                                }}
                              >
                                <title>{`${day.date}  ·  Level ${day.level}`}</title>
                              </rect>
                              {/* Glow effect on active cells */}
                              {day.level >= 3 && (
                                <rect
                                  x={wIndex * STEP}
                                  y={dIndex * STEP}
                                  width={CELL}
                                  height={CELL}
                                  rx="3"
                                  ry="3"
                                  fill="transparent"
                                  stroke="#dc2626"
                                  strokeWidth="0.8"
                                  opacity="0.6"
                                />
                              )}
                            </g>
                          );
                        })
                      )}
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="mt-5 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-white/5 pt-4">
                    <span className="font-semibold text-slate-400">
                      {currentDetail.commits} contributions in {selectedYear === "All Time" ? "all years" : selectedYear}
                    </span>
                    <div className="flex items-center gap-2">
                      <span>Less</span>
                      {[0, 1, 2, 3, 4].map((l) => (
                        <span
                          key={l}
                          className="inline-block rounded-sm"
                          style={{ width: CELL, height: CELL, backgroundColor: getLevelColor(l) }}
                        />
                      ))}
                      <span>More</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/8 px-6 sm:px-8 py-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor:"#dc2626" }} />
              Live data fetched from github.com/{username} — not a README image
            </span>
            <a
              href={currentDetail.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 font-medium"
              style={{ color:"#dc2626" }}
            >
              View on GitHub &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
