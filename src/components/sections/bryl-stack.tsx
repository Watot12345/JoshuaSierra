"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiRedis,
  SiExpo,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiPrisma,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiLinux,
  SiVercel,
  SiFigma,
  SiPostman,
  SiAnthropic,
  SiGoogle,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

interface StackItem {
  name: string;
  icon: IconType;
}

interface StackCategory {
  name: string;
  items: StackItem[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Vite", icon: SiVite },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "REST APIs", icon: TbApi },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    name: "Mobile",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "Flutter", icon: SiFlutter },
      { name: "Android", icon: SiAndroid },
      { name: "iOS", icon: SiApple },
    ],
  },
  {
    name: "Database & Storage",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Vercel", icon: SiVercel },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    name: "Tools & AI Workflow",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
      { name: "Claude AI", icon: SiAnthropic },
      { name: "Google AI", icon: SiGoogle },
    ],
  },
];

export function BrylStack() {
  return (
    <section id="stack" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          03 — stack
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          hover icons for names
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {STACK_CATEGORIES.map((category) => (
          <div
            key={category.name}
            className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-6"
          >
            <span className="font-mono text-xs font-semibold text-foreground w-36 shrink-0 pt-2">
              {category.name}
            </span>

            {/* Grid of Icon Badges */}
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-muted hover:text-foreground shadow-xs cursor-default"
                    title={item.name}
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-115 shrink-0" />

                    {/* Smooth hover tooltip pill */}
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-md border border-border bg-popover px-2 py-0.5 text-[11px] font-mono font-medium text-popover-foreground shadow-md z-30"
                    >
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
