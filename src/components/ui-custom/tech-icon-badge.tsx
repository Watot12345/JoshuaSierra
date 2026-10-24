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
  SiHostinger,
  SiCloudflare,
  SiRailway,
  SiFigma,
  SiPostman,
  SiClaude,
  SiGooglegemini,
  SiGithubcopilot,
  SiMiro,
  SiObsidian,
  SiWebrtc,
  SiSocketdotio,
} from "react-icons/si";
import { FaCss3Alt, FaServer, FaAward } from "react-icons/fa";
import { TbApi, TbInfinity } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
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
  Video,
  type LucideIcon,
} from "lucide-react";

type IconComponent = IconType | LucideIcon;

const SiDokploy: IconType = (props) => (
  <svg viewBox="0 0 6323 5778" fill="currentColor" role="img" {...props}>
    <path d="M4638.51 44.5295C4616.52 81.8286 4611.45 115.575 4619.9 213.263C4636.82 433.505 4772.12 710.584 4924.33 842.019C5002.12 909.512 5196.61 1012.53 5245.66 1012.53C5284.56 1012.53 5282.87 1019.63 5213.53 1129.75C5140.8 1243.43 5024.11 1339.34 4890.5 1389.07C4743.36 1445.91 4455.85 1453.01 4234.3 1405.06C4016.13 1357.1 3931.57 1323.35 3211.11 977.006C2265.71 522.312 2253.87 516.984 2125.34 481.461C2017.1 451.267 1917.32 445.938 1316.93 435.281C853.533 428.177 601.539 429.953 538.964 444.162C334.325 485.013 156.745 632.434 70.4925 829.586C12.9907 961.021 -7.30411 1191.92 2.84328 1589.78C7.91697 1841.99 16.3731 1911.26 46.8153 2005.39C114.465 2213.2 226.086 2342.86 422.269 2445.88C1594.29 3055.1 1969.74 3206.07 2529.54 3294.88C2732.49 3326.85 3258.46 3330.4 3459.72 3303.76C3755.69 3261.13 4107.46 3161.66 4403.43 3033.78C4540.42 2975.17 4904.03 2776.24 5220.29 2587.97C5910.31 2177.68 6006.71 2111.96 6037.16 2030.26C6070.98 1934.35 5988.11 1811.79 5888.33 1811.79C5851.12 1811.79 5862.96 1806.47 5426.62 2069.34C4352.69 2715.85 4026.28 2865.05 3485.09 2957.41C3162.06 3014.24 2587.04 2987.6 2274.17 2902.35C1924.08 2806.44 1839.52 2770.91 1051.41 2383.71C552.493 2140.38 444.255 2079.99 395.209 2023.16C363.076 1984.08 336.016 1945.01 336.016 1934.35C336.016 1920.14 467.932 1916.59 787.575 1921.92L1240.82 1929.02L1435.32 2001.84C1541.86 2040.92 1744.81 2126.17 1883.49 2190.11C2296.15 2381.94 2610.72 2451.21 3058.9 2451.21C3490.16 2451.21 3872.38 2374.83 4305.33 2198.99C4910.8 1955.66 5342.06 1596.88 5545.01 1172.38C5565.3 1127.98 5585.6 1090.68 5587.29 1087.13C5590.67 1083.57 5660.01 1074.69 5742.88 1065.81C5940.76 1046.28 6084.51 978.782 6221.5 842.019L6322.97 740.779V520.536V302.071L6253.63 353.579C6177.53 412.192 6062.52 444.162 5920.46 444.162C5795.31 444.162 5661.7 508.104 5568.69 614.672L5497.65 692.823L5487.51 646.643C5451.99 500.999 5304.85 364.236 5115.44 300.294C4956.46 248.786 4893.88 206.159 4831.31 108.471C4800.87 64.0671 4770.42 21.4395 4760.28 14.335C4721.38 -14.0833 4665.57 1.90186 4638.51 44.5295ZM2057.69 806.496C2162.55 834.914 2250.49 873.99 2517.7 1007.2C2605.65 1051.6 2796.76 1142.19 2940.51 1211.46C3084.27 1280.73 3332.88 1397.95 3490.16 1472.55C3948.49 1691.02 4049.96 1726.54 4301.95 1754.96L4437.25 1770.94L4310.41 1833.11C4153.12 1911.26 4016.13 1960.99 3804.73 2016.05C3512.15 2090.65 3402.22 2104.86 3050.44 2104.86C2590.43 2103.08 2370.57 2056.9 1974.82 1872.18C1413.33 1611.09 1386.27 1603.99 801.104 1589.78C457.784 1580.9 356.311 1572.01 336.016 1552.48C278.514 1492.09 303.882 1019.63 373.223 914.841C412.121 854.452 474.697 806.496 552.493 779.854C577.862 770.973 904.27 767.421 1278.03 772.749C1814.15 778.078 1978.2 785.182 2057.69 806.496Z" />
    <path d="M1266.2 1060.49C1173.18 1097.79 1129.21 1207.91 1171.49 1294.94C1222.22 1394.4 1332.15 1417.49 1413.33 1342.89C1477.6 1286.06 1479.29 1174.16 1418.41 1112C1374.44 1065.82 1308.48 1042.73 1266.2 1060.49Z" />
  </svg>
);

const SiCline: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
    <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" />
  </svg>
);

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
  Miro: {
    icon: SiMiro,
    colorClass: "text-[#050038] dark:text-muted-foreground dark:group-hover:text-[#FFD02F]",
    hoverBorder: "hover:border-[#FFD02F]/40",
  },
  Obsidian: {
    icon: SiObsidian,
    colorClass: "text-[#7C3AED] dark:text-muted-foreground dark:group-hover:text-[#A78BFA]",
    hoverBorder: "hover:border-[#7C3AED]/40",
  },
  WebRTC: {
    icon: SiWebrtc,
    colorClass: "text-[#333333] dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  WebSockets: {
    icon: SiSocketdotio,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  "Real-Time Video": {
    icon: Video,
    colorClass: "text-[#10B981] dark:text-muted-foreground dark:group-hover:text-[#34D399]",
    hoverBorder: "hover:border-[#10B981]/40",
  },

  // AI Tools
  Gemini: {
    icon: SiGooglegemini,
    colorClass: "text-[#1A73E8] dark:text-muted-foreground dark:group-hover:text-[#4285F4]",
    hoverBorder: "hover:border-[#4285F4]/40",
  },
  "Google Gemini": {
    icon: SiGooglegemini,
    colorClass: "text-[#1A73E8] dark:text-muted-foreground dark:group-hover:text-[#4285F4]",
    hoverBorder: "hover:border-[#4285F4]/40",
  },
  Claude: {
    icon: SiClaude,
    colorClass: "text-[#CC785C] dark:text-muted-foreground dark:group-hover:text-[#CC785C]",
    hoverBorder: "hover:border-[#CC785C]/40",
  },
  "Claude AI": {
    icon: SiClaude,
    colorClass: "text-[#CC785C] dark:text-muted-foreground dark:group-hover:text-[#CC785C]",
    hoverBorder: "hover:border-[#CC785C]/40",
  },
  ChatGPT: {
    icon: RiOpenaiFill,
    colorClass: "text-[#10A37F] dark:text-muted-foreground dark:group-hover:text-[#10A37F]",
    hoverBorder: "hover:border-[#10A37F]/40",
  },
  Copilot: {
    icon: SiGithubcopilot,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  "GitHub Copilot": {
    icon: SiGithubcopilot,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  Cline: {
    icon: SiCline,
    colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#38BDF8]/40",
  },

  // Infrastructure & Hosting
  Dokploy: {
    icon: SiDokploy,
    colorClass: "text-[#38BDF8] dark:text-muted-foreground dark:group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#38BDF8]/40",
  },
  Hostinger: {
    icon: SiHostinger,
    colorClass: "text-[#673DE6] dark:text-muted-foreground dark:group-hover:text-[#673DE6]",
    hoverBorder: "hover:border-[#673DE6]/40",
  },
  HostForge: {
    icon: FaServer,
    colorClass: "text-[#3B82F6] dark:text-muted-foreground dark:group-hover:text-[#3B82F6]",
    hoverBorder: "hover:border-[#3B82F6]/40",
  },
  InfinityFree: {
    icon: TbInfinity,
    colorClass: "text-[#00A4E4] dark:text-muted-foreground dark:group-hover:text-[#00A4E4]",
    hoverBorder: "hover:border-[#00A4E4]/40",
  },
  AwardSpace: {
    icon: FaAward,
    colorClass: "text-[#F97316] dark:text-muted-foreground dark:group-hover:text-[#F97316]",
    hoverBorder: "hover:border-[#F97316]/40",
  },
  Railway: {
    icon: SiRailway,
    colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
    hoverBorder: "hover:border-foreground/40",
  },
  "Cloudflare Tunnel": {
    icon: SiCloudflare,
    colorClass: "text-[#F38020] dark:text-muted-foreground dark:group-hover:text-[#F38020]",
    hoverBorder: "hover:border-[#F38020]/40",
  },
  Cloudflare: {
    icon: SiCloudflare,
    colorClass: "text-[#F38020] dark:text-muted-foreground dark:group-hover:text-[#F38020]",
    hoverBorder: "hover:border-[#F38020]/40",
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
      className={`group relative flex h-7 w-7 sm:h-7.5 sm:w-7.5 items-center justify-center rounded-lg border border-border bg-card transition-all duration-200 hover:bg-muted/70 shadow-2xs cursor-pointer ${meta.hoverBorder}`}
      title={name}
      aria-label={name}
      data-sound="tick"
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
