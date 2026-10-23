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
  hoverColor: string;
  hoverBorder: string;
}

interface StackCategory {
  name: string;
  items: StackItem[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    name: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
        hoverColor: "group-hover:text-[#61DAFB]",
        hoverBorder: "hover:border-[#61DAFB]/40",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        hoverColor: "group-hover:text-black dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        hoverColor: "group-hover:text-[#3178C6]",
        hoverBorder: "hover:border-[#3178C6]/40",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        hoverColor: "group-hover:text-[#F7DF1E]",
        hoverBorder: "hover:border-[#F7DF1E]/40",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        hoverColor: "group-hover:text-[#06B6D4]",
        hoverBorder: "hover:border-[#06B6D4]/40",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        hoverColor: "group-hover:text-[#E34F26]",
        hoverBorder: "hover:border-[#E34F26]/40",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        hoverColor: "group-hover:text-[#1572B6]",
        hoverBorder: "hover:border-[#1572B6]/40",
      },
      {
        name: "Vite",
        icon: SiVite,
        hoverColor: "group-hover:text-[#646CFF]",
        hoverBorder: "hover:border-[#646CFF]/40",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        hoverColor: "group-hover:text-[#7952B3]",
        hoverBorder: "hover:border-[#7952B3]/40",
      },
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      {
        name: "PHP",
        icon: SiPhp,
        hoverColor: "group-hover:text-[#777BB4]",
        hoverBorder: "hover:border-[#777BB4]/40",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        hoverColor: "group-hover:text-[#FF2D20]",
        hoverBorder: "hover:border-[#FF2D20]/40",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        hoverColor: "group-hover:text-[#5FA04E]",
        hoverBorder: "hover:border-[#5FA04E]/40",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        hoverColor: "group-hover:text-black dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "Python",
        icon: SiPython,
        hoverColor: "group-hover:text-[#3776AB]",
        hoverBorder: "hover:border-[#3776AB]/40",
      },
      {
        name: "REST APIs",
        icon: TbApi,
        hoverColor: "group-hover:text-[#0D9488]",
        hoverBorder: "hover:border-[#0D9488]/40",
      },
      {
        name: "Redis",
        icon: SiRedis,
        hoverColor: "group-hover:text-[#FF4438]",
        hoverBorder: "hover:border-[#FF4438]/40",
      },
    ],
  },
  {
    name: "Mobile",
    items: [
      {
        name: "React Native",
        icon: SiReact,
        hoverColor: "group-hover:text-[#61DAFB]",
        hoverBorder: "hover:border-[#61DAFB]/40",
      },
      {
        name: "Expo",
        icon: SiExpo,
        hoverColor: "group-hover:text-black dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        hoverColor: "group-hover:text-[#02569B] dark:group-hover:text-[#54C5F8]",
        hoverBorder: "hover:border-[#02569B]/40 dark:hover:border-[#54C5F8]/40",
      },
      {
        name: "Android",
        icon: SiAndroid,
        hoverColor: "group-hover:text-[#3DDC84]",
        hoverBorder: "hover:border-[#3DDC84]/40",
      },
      {
        name: "iOS",
        icon: SiApple,
        hoverColor: "group-hover:text-black dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
    ],
  },
  {
    name: "Database & Storage",
    items: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        hoverColor: "group-hover:text-[#4169E1]",
        hoverBorder: "hover:border-[#4169E1]/40",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        hoverColor: "group-hover:text-[#00758F] dark:group-hover:text-[#4479A1]",
        hoverBorder: "hover:border-[#00758F]/40 dark:hover:border-[#4479A1]/40",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        hoverColor: "group-hover:text-[#3ECF8E]",
        hoverBorder: "hover:border-[#3ECF8E]/40",
      },
      {
        name: "Prisma ORM",
        icon: SiPrisma,
        hoverColor: "group-hover:text-[#2D3748] dark:group-hover:text-[#5A67D8]",
        hoverBorder: "hover:border-[#2D3748]/40 dark:hover:border-[#5A67D8]/40",
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        hoverColor: "group-hover:text-[#003B57] dark:group-hover:text-[#0080CD]",
        hoverBorder: "hover:border-[#003B57]/40 dark:hover:border-[#0080CD]/40",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      {
        name: "Git",
        icon: SiGit,
        hoverColor: "group-hover:text-[#F05032]",
        hoverBorder: "hover:border-[#F05032]/40",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        hoverColor: "group-hover:text-black dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        hoverColor: "group-hover:text-[#2088FF]",
        hoverBorder: "hover:border-[#2088FF]/40",
      },
      {
        name: "Docker",
        icon: SiDocker,
        hoverColor: "group-hover:text-[#2496ED]",
        hoverBorder: "hover:border-[#2496ED]/40",
      },
      {
        name: "Linux",
        icon: SiLinux,
        hoverColor: "group-hover:text-[#FCC624]",
        hoverBorder: "hover:border-[#FCC624]/40",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        hoverColor: "group-hover:text-black dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "AWS",
        icon: FaAws,
        hoverColor: "group-hover:text-[#FF9900]",
        hoverBorder: "hover:border-[#FF9900]/40",
      },
    ],
  },
  {
    name: "Tools & AI Workflow",
    items: [
      {
        name: "Figma",
        icon: SiFigma,
        hoverColor: "group-hover:text-[#F24E1E]",
        hoverBorder: "hover:border-[#F24E1E]/40",
      },
      {
        name: "Postman",
        icon: SiPostman,
        hoverColor: "group-hover:text-[#FF6C37]",
        hoverBorder: "hover:border-[#FF6C37]/40",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        hoverColor: "group-hover:text-[#007ACC]",
        hoverBorder: "hover:border-[#007ACC]/40",
      },
      {
        name: "Claude AI",
        icon: SiAnthropic,
        hoverColor: "group-hover:text-[#D97706]",
        hoverBorder: "hover:border-[#D97706]/40",
      },
      {
        name: "Google AI",
        icon: SiGoogle,
        hoverColor: "group-hover:text-[#4285F4]",
        hoverBorder: "hover:border-[#4285F4]/40",
      },
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
                    className={`group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-200 hover:bg-muted/70 shadow-xs cursor-default ${item.hoverBorder}`}
                    title={item.name}
                    aria-label={item.name}
                  >
                    <Icon className={`h-5 w-5 transition-all duration-200 group-hover:scale-115 shrink-0 ${item.hoverColor}`} />

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
