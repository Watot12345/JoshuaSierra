"use client";

import React from "react";
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
  SiDart,
  SiAndroid,
  SiApple,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiPrisma,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiVercel,
  SiRender,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  Database,
  Search,
  Landmark,
  Layers,
  Building2,
  BarChart3,
  QrCode,
  Globe,
  FileCode2,
  Workflow,
  Smartphone,
  WifiOff,
  CalendarCheck,
  FolderKanban,
  Calculator,
  UserCheck,
  Package,
  Code2,
  type LucideIcon,
} from "lucide-react";

type IconComponent = IconType | LucideIcon;

interface TechMeta {
  icon: IconComponent;
  colorClass: string;
  hoverBorder: string;
}

const TECH_META_MAP: Record<string, TechMeta> = {
  // Frontend
  React: {
    icon: SiReact,
    colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#61DAFB]",
    hoverBorder: "hover:border-[#0284c7]/40 dark:hover:border-[#61DAFB]/40",
  },
  "Next.js": {
    icon: SiNextdotjs,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  TypeScript: {
    icon: SiTypescript,
    colorClass: "text-[#3178C6] dark:text-muted-foreground dark:group-hover:text-[#3178C6]",
    hoverBorder: "hover:border-[#3178C6]/40",
  },
  JavaScript: {
    icon: SiJavascript,
    colorClass: "text-[#ca8a04] dark:text-muted-foreground dark:group-hover:text-[#F7DF1E]",
    hoverBorder: "hover:border-[#ca8a04]/40 dark:hover:border-[#F7DF1E]/40",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    colorClass: "text-[#06B6D4] dark:text-muted-foreground dark:group-hover:text-[#06B6D4]",
    hoverBorder: "hover:border-[#06B6D4]/40",
  },
  HTML5: {
    icon: SiHtml5,
    colorClass: "text-[#E34F26] dark:text-muted-foreground dark:group-hover:text-[#E34F26]",
    hoverBorder: "hover:border-[#E34F26]/40",
  },
  HTML: {
    icon: SiHtml5,
    colorClass: "text-[#E34F26] dark:text-muted-foreground dark:group-hover:text-[#E34F26]",
    hoverBorder: "hover:border-[#E34F26]/40",
  },
  CSS3: {
    icon: FaCss3Alt,
    colorClass: "text-[#1572B6] dark:text-muted-foreground dark:group-hover:text-[#1572B6]",
    hoverBorder: "hover:border-[#1572B6]/40",
  },
  Vite: {
    icon: SiVite,
    colorClass: "text-[#646CFF] dark:text-muted-foreground dark:group-hover:text-[#646CFF]",
    hoverBorder: "hover:border-[#646CFF]/40",
  },
  Bootstrap: {
    icon: SiBootstrap,
    colorClass: "text-[#7952B3] dark:text-muted-foreground dark:group-hover:text-[#7952B3]",
    hoverBorder: "hover:border-[#7952B3]/40",
  },

  // Backend & APIs
  PHP: {
    icon: SiPhp,
    colorClass: "text-[#777BB4] dark:text-muted-foreground dark:group-hover:text-[#777BB4]",
    hoverBorder: "hover:border-[#777BB4]/40",
  },
  Laravel: {
    icon: SiLaravel,
    colorClass: "text-[#FF2D20] dark:text-muted-foreground dark:group-hover:text-[#FF2D20]",
    hoverBorder: "hover:border-[#FF2D20]/40",
  },
  "Node.js": {
    icon: SiNodedotjs,
    colorClass: "text-[#5FA04E] dark:text-muted-foreground dark:group-hover:text-[#5FA04E]",
    hoverBorder: "hover:border-[#5FA04E]/40",
  },
  "Express.js": {
    icon: SiExpress,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  Python: {
    icon: SiPython,
    colorClass: "text-[#3776AB] dark:text-muted-foreground dark:group-hover:text-[#3776AB]",
    hoverBorder: "hover:border-[#3776AB]/40",
  },
  "REST API": {
    icon: TbApi,
    colorClass: "text-[#0D9488] dark:text-muted-foreground dark:group-hover:text-[#0D9488]",
    hoverBorder: "hover:border-[#0D9488]/40",
  },
  "REST APIs": {
    icon: TbApi,
    colorClass: "text-[#0D9488] dark:text-muted-foreground dark:group-hover:text-[#0D9488]",
    hoverBorder: "hover:border-[#0D9488]/40",
  },
  Redis: {
    icon: SiRedis,
    colorClass: "text-[#DC2626] dark:text-muted-foreground dark:group-hover:text-[#FF4438]",
    hoverBorder: "hover:border-[#DC2626]/40 dark:hover:border-[#FF4438]/40",
  },

  // Mobile
  "React Native": {
    icon: SiReact,
    colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#61DAFB]",
    hoverBorder: "hover:border-[#0284c7]/40 dark:hover:border-[#61DAFB]/40",
  },
  Expo: {
    icon: SiExpo,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  Flutter: {
    icon: SiFlutter,
    colorClass: "text-[#02569B] dark:text-muted-foreground dark:group-hover:text-[#54C5F8]",
    hoverBorder: "hover:border-[#02569B]/40 dark:hover:border-[#54C5F8]/40",
  },
  Dart: {
    icon: SiDart,
    colorClass: "text-[#0175C2] dark:text-muted-foreground dark:group-hover:text-[#0175C2]",
    hoverBorder: "hover:border-[#0175C2]/40",
  },
  Android: {
    icon: SiAndroid,
    colorClass: "text-[#16a34a] dark:text-muted-foreground dark:group-hover:text-[#3DDC84]",
    hoverBorder: "hover:border-[#16a34a]/40 dark:hover:border-[#3DDC84]/40",
  },
  iOS: {
    icon: SiApple,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },

  // Databases & Cloud
  PostgreSQL: {
    icon: SiPostgresql,
    colorClass: "text-[#4169E1] dark:text-muted-foreground dark:group-hover:text-[#4169E1]",
    hoverBorder: "hover:border-[#4169E1]/40",
  },
  MySQL: {
    icon: SiMysql,
    colorClass: "text-[#00758F] dark:text-muted-foreground dark:group-hover:text-[#4479A1]",
    hoverBorder: "hover:border-[#00758F]/40 dark:hover:border-[#4479A1]/40",
  },
  Supabase: {
    icon: SiSupabase,
    colorClass: "text-[#16a34a] dark:text-muted-foreground dark:group-hover:text-[#3ECF8E]",
    hoverBorder: "hover:border-[#16a34a]/40 dark:hover:border-[#3ECF8E]/40",
  },
  "Prisma ORM": {
    icon: SiPrisma,
    colorClass: "text-[#2D3748] dark:text-muted-foreground dark:group-hover:text-[#5A67D8]",
    hoverBorder: "hover:border-[#2D3748]/40 dark:hover:border-[#5A67D8]/40",
  },
  SQLite: {
    icon: SiSqlite,
    colorClass: "text-[#003B57] dark:text-muted-foreground dark:group-hover:text-[#0080CD]",
    hoverBorder: "hover:border-[#003B57]/40 dark:hover:border-[#0080CD]/40",
  },
  Vercel: {
    icon: SiVercel,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  Render: {
    icon: SiRender,
    colorClass: "text-[#111111] dark:text-muted-foreground dark:group-hover:text-[#46E3B7]",
    hoverBorder: "hover:border-foreground/40 dark:hover:border-[#46E3B7]/40",
  },
  Docker: {
    icon: SiDocker,
    colorClass: "text-[#2496ED] dark:text-muted-foreground dark:group-hover:text-[#2496ED]",
    hoverBorder: "hover:border-[#2496ED]/40",
  },
  Git: {
    icon: SiGit,
    colorClass: "text-[#F05032] dark:text-muted-foreground dark:group-hover:text-[#F05032]",
    hoverBorder: "hover:border-[#F05032]/40",
  },
  GitHub: {
    icon: SiGithub,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  Linux: {
    icon: SiLinux,
    colorClass: "text-[#d97706] dark:text-muted-foreground dark:group-hover:text-[#FCC624]",
    hoverBorder: "hover:border-[#d97706]/40 dark:hover:border-[#FCC624]/40",
  },
  Figma: {
    icon: SiFigma,
    colorClass: "text-[#F24E1E] dark:text-muted-foreground dark:group-hover:text-[#F24E1E]",
    hoverBorder: "hover:border-[#F24E1E]/40",
  },
  Postman: {
    icon: SiPostman,
    colorClass: "text-[#FF6C37] dark:text-muted-foreground dark:group-hover:text-[#FF6C37]",
    hoverBorder: "hover:border-[#FF6C37]/40",
  },

  // Architecture & Domain Tags
  "Relational Database": {
    icon: Database,
    colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#0284c7]/40",
  },
  "Cloud Database": {
    icon: Database,
    colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#0284c7]/40",
  },
  "Full-Text Search": {
    icon: Search,
    colorClass: "text-[#0D9488] dark:text-muted-foreground dark:group-hover:text-[#2DD4BF]",
    hoverBorder: "hover:border-[#0D9488]/40",
  },
  "Municipal Archive": {
    icon: Landmark,
    colorClass: "text-[#7C3AED] dark:text-muted-foreground dark:group-hover:text-[#A78BFA]",
    hoverBorder: "hover:border-[#7C3AED]/40",
  },
  "Web Architecture": {
    icon: Layers,
    colorClass: "text-[#D97706] dark:text-muted-foreground dark:group-hover:text-[#FBBF24]",
    hoverBorder: "hover:border-[#D97706]/40",
  },
  "Full-Stack": {
    icon: Layers,
    colorClass: "text-[#D97706] dark:text-muted-foreground dark:group-hover:text-[#FBBF24]",
    hoverBorder: "hover:border-[#D97706]/40",
  },
  "Modular Services": {
    icon: Layers,
    colorClass: "text-[#7C3AED] dark:text-muted-foreground dark:group-hover:text-[#A78BFA]",
    hoverBorder: "hover:border-[#7C3AED]/40",
  },
  "Hospitality Management": {
    icon: Building2,
    colorClass: "text-[#DC2626] dark:text-muted-foreground dark:group-hover:text-[#F87171]",
    hoverBorder: "hover:border-[#DC2626]/40",
  },
  "Performance KPIs": {
    icon: BarChart3,
    colorClass: "text-[#2563EB] dark:text-muted-foreground dark:group-hover:text-[#60A5FA]",
    hoverBorder: "hover:border-[#2563EB]/40",
  },
  "Data Visualization": {
    icon: BarChart3,
    colorClass: "text-[#2563EB] dark:text-muted-foreground dark:group-hover:text-[#60A5FA]",
    hoverBorder: "hover:border-[#2563EB]/40",
  },
  "QR Verification": {
    icon: QrCode,
    colorClass: "text-[#059669] dark:text-muted-foreground dark:group-hover:text-[#34D399]",
    hoverBorder: "hover:border-[#059669]/40",
  },
  "Production Portal": {
    icon: Globe,
    colorClass: "text-[#2563EB] dark:text-muted-foreground dark:group-hover:text-[#60A5FA]",
    hoverBorder: "hover:border-[#2563EB]/40",
  },
  "Web Scraping": {
    icon: FileCode2,
    colorClass: "text-[#D97706] dark:text-muted-foreground dark:group-hover:text-[#FBBF24]",
    hoverBorder: "hover:border-[#D97706]/40",
  },
  "Data Extraction": {
    icon: FileCode2,
    colorClass: "text-[#D97706] dark:text-muted-foreground dark:group-hover:text-[#FBBF24]",
    hoverBorder: "hover:border-[#D97706]/40",
  },
  Automation: {
    icon: Workflow,
    colorClass: "text-[#7C3AED] dark:text-muted-foreground dark:group-hover:text-[#C084FC]",
    hoverBorder: "hover:border-[#7C3AED]/40",
  },
  "Dispatch Logic": {
    icon: Workflow,
    colorClass: "text-[#7C3AED] dark:text-muted-foreground dark:group-hover:text-[#C084FC]",
    hoverBorder: "hover:border-[#7C3AED]/40",
  },
  "Mobile UI": {
    icon: Smartphone,
    colorClass: "text-[#059669] dark:text-muted-foreground dark:group-hover:text-[#34D399]",
    hoverBorder: "hover:border-[#059669]/40",
  },
  "Mobile App": {
    icon: Smartphone,
    colorClass: "text-[#059669] dark:text-muted-foreground dark:group-hover:text-[#34D399]",
    hoverBorder: "hover:border-[#059669]/40",
  },
  "Offline-First": {
    icon: WifiOff,
    colorClass: "text-[#E11D48] dark:text-muted-foreground dark:group-hover:text-[#FB7185]",
    hoverBorder: "hover:border-[#E11D48]/40",
  },
  "Event Booking": {
    icon: CalendarCheck,
    colorClass: "text-[#EA580C] dark:text-muted-foreground dark:group-hover:text-[#FB923C]",
    hoverBorder: "hover:border-[#EA580C]/40",
  },
  "Management System": {
    icon: FolderKanban,
    colorClass: "text-[#4F46E5] dark:text-muted-foreground dark:group-hover:text-[#818CF8]",
    hoverBorder: "hover:border-[#4F46E5]/40",
  },
  "Office Systems": {
    icon: FolderKanban,
    colorClass: "text-[#4F46E5] dark:text-muted-foreground dark:group-hover:text-[#818CF8]",
    hoverBorder: "hover:border-[#4F46E5]/40",
  },
  "Data Management": {
    icon: Database,
    colorClass: "text-[#0D9488] dark:text-muted-foreground dark:group-hover:text-[#2DD4BF]",
    hoverBorder: "hover:border-[#0D9488]/40",
  },
  "Payroll Computation": {
    icon: Calculator,
    colorClass: "text-[#16A34A] dark:text-muted-foreground dark:group-hover:text-[#4ADE80]",
    hoverBorder: "hover:border-[#16A34A]/40",
  },
  "Attendance Logging": {
    icon: UserCheck,
    colorClass: "text-[#2563EB] dark:text-muted-foreground dark:group-hover:text-[#60A5FA]",
    hoverBorder: "hover:border-[#2563EB]/40",
  },
  "Inventory Tracking": {
    icon: Package,
    colorClass: "text-[#D97706] dark:text-muted-foreground dark:group-hover:text-[#FBBF24]",
    hoverBorder: "hover:border-[#D97706]/40",
  },
};

const DEFAULT_META: TechMeta = {
  icon: Code2,
  colorClass: "text-foreground dark:text-muted-foreground dark:group-hover:text-foreground",
  hoverBorder: "hover:border-foreground/40",
};

export function TechIconBadge({ name }: { name: string }) {
  const meta = TECH_META_MAP[name] || DEFAULT_META;
  const Icon = meta.icon;

  return (
    <div
      className={`group relative flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-lg border border-border bg-card transition-all duration-200 hover:bg-muted/70 shadow-2xs cursor-default ${meta.hoverBorder}`}
      title={name}
      aria-label={name}
    >
      <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-all duration-200 group-hover:scale-115 shrink-0 ${meta.colorClass}`} />

      {/* Smooth hover tooltip pill */}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-md border border-border bg-popover px-2 py-0.5 text-[10px] font-mono font-medium text-popover-foreground shadow-md z-30"
      >
        {name}
      </span>
    </div>
  );
}

export function TechIconBadgeList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {items.map((tech) => (
        <TechIconBadge key={tech} name={tech} />
      ))}
    </div>
  );
}
