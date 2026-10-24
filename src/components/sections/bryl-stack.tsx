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
  SiRender,
  SiHostinger,
  SiCloudflare,
  SiRailway,
  SiFigma,
  SiPostman,
  SiClaude,
  SiGooglegemini,
} from "react-icons/si";
import { FaAws, FaCss3Alt, FaServer, FaAward } from "react-icons/fa";
import { TbApi, TbInfinity } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

// Custom SVG Icon for Dokploy (Open-source Docker PaaS)
const SiDokploy: IconType = (props) => (
  <svg viewBox="0 0 6323 5778" fill="currentColor" role="img" {...props}>
    <path d="M4638.51 44.5295C4616.52 81.8286 4611.45 115.575 4619.9 213.263C4636.82 433.505 4772.12 710.584 4924.33 842.019C5002.12 909.512 5196.61 1012.53 5245.66 1012.53C5284.56 1012.53 5282.87 1019.63 5213.53 1129.75C5140.8 1243.43 5024.11 1339.34 4890.5 1389.07C4743.36 1445.91 4455.85 1453.01 4234.3 1405.06C4016.13 1357.1 3931.57 1323.35 3211.11 977.006C2265.71 522.312 2253.87 516.984 2125.34 481.461C2017.1 451.267 1917.32 445.938 1316.93 435.281C853.533 428.177 601.539 429.953 538.964 444.162C334.325 485.013 156.745 632.434 70.4925 829.586C12.9907 961.021 -7.30411 1191.92 2.84328 1589.78C7.91697 1841.99 16.3731 1911.26 46.8153 2005.39C114.465 2213.2 226.086 2342.86 422.269 2445.88C1594.29 3055.1 1969.74 3206.07 2529.54 3294.88C2732.49 3326.85 3258.46 3330.4 3459.72 3303.76C3755.69 3261.13 4107.46 3161.66 4403.43 3033.78C4540.42 2975.17 4904.03 2776.24 5220.29 2587.97C5910.31 2177.68 6006.71 2111.96 6037.16 2030.26C6070.98 1934.35 5988.11 1811.79 5888.33 1811.79C5851.12 1811.79 5862.96 1806.47 5426.62 2069.34C4352.69 2715.85 4026.28 2865.05 3485.09 2957.41C3162.06 3014.24 2587.04 2987.6 2274.17 2902.35C1924.08 2806.44 1839.52 2770.91 1051.41 2383.71C552.493 2140.38 444.255 2079.99 395.209 2023.16C363.076 1984.08 336.016 1945.01 336.016 1934.35C336.016 1920.14 467.932 1916.59 787.575 1921.92L1240.82 1929.02L1435.32 2001.84C1541.86 2040.92 1744.81 2126.17 1883.49 2190.11C2296.15 2381.94 2610.72 2451.21 3058.9 2451.21C3490.16 2451.21 3872.38 2374.83 4305.33 2198.99C4910.8 1955.66 5342.06 1596.88 5545.01 1172.38C5565.3 1127.98 5585.6 1090.68 5587.29 1087.13C5590.67 1083.57 5660.01 1074.69 5742.88 1065.81C5940.76 1046.28 6084.51 978.782 6221.5 842.019L6322.97 740.779V520.536V302.071L6253.63 353.579C6177.53 412.192 6062.52 444.162 5920.46 444.162C5795.31 444.162 5661.7 508.104 5568.69 614.672L5497.65 692.823L5487.51 646.643C5451.99 500.999 5304.85 364.236 5115.44 300.294C4956.46 248.786 4893.88 206.159 4831.31 108.471C4800.87 64.0671 4770.42 21.4395 4760.28 14.335C4721.38 -14.0833 4665.57 1.90186 4638.51 44.5295ZM2057.69 806.496C2162.55 834.914 2250.49 873.99 2517.7 1007.2C2605.65 1051.6 2796.76 1142.19 2940.51 1211.46C3084.27 1280.73 3332.88 1397.95 3490.16 1472.55C3948.49 1691.02 4049.96 1726.54 4301.95 1754.96L4437.25 1770.94L4310.41 1833.11C4153.12 1911.26 4016.13 1960.99 3804.73 2016.05C3512.15 2090.65 3402.22 2104.86 3050.44 2104.86C2590.43 2103.08 2370.57 2056.9 1974.82 1872.18C1413.33 1611.09 1386.27 1603.99 801.104 1589.78C457.784 1580.9 356.311 1572.01 336.016 1552.48C278.514 1492.09 303.882 1019.63 373.223 914.841C412.121 854.452 474.697 806.496 552.493 779.854C577.862 770.973 904.27 767.421 1278.03 772.749C1814.15 778.078 1978.2 785.182 2057.69 806.496Z" />
    <path d="M1266.2 1060.49C1173.18 1097.79 1129.21 1207.91 1171.49 1294.94C1222.22 1394.4 1332.15 1417.49 1413.33 1342.89C1477.6 1286.06 1479.29 1174.16 1418.41 1112C1374.44 1065.82 1308.48 1042.73 1266.2 1060.49Z" />
  </svg>
);

// Custom SVG Icon for Cline (Autonomous AI Coding Agent)
const SiCline: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
    <path d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z" />
  </svg>
);

interface StackItem {
  name: string;
  icon: IconType;
  colorClass: string;
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
        colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#61DAFB]",
        hoverBorder: "hover:border-[#0284c7]/40 dark:hover:border-[#61DAFB]/40",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        colorClass: "text-[#3178C6] dark:text-muted-foreground dark:group-hover:text-[#3178C6]",
        hoverBorder: "hover:border-[#3178C6]/40",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        colorClass: "text-[#ca8a04] dark:text-muted-foreground dark:group-hover:text-[#F7DF1E]",
        hoverBorder: "hover:border-[#ca8a04]/40 dark:hover:border-[#F7DF1E]/40",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        colorClass: "text-[#06B6D4] dark:text-muted-foreground dark:group-hover:text-[#06B6D4]",
        hoverBorder: "hover:border-[#06B6D4]/40",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        colorClass: "text-[#E34F26] dark:text-muted-foreground dark:group-hover:text-[#E34F26]",
        hoverBorder: "hover:border-[#E34F26]/40",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        colorClass: "text-[#1572B6] dark:text-muted-foreground dark:group-hover:text-[#1572B6]",
        hoverBorder: "hover:border-[#1572B6]/40",
      },
      {
        name: "Vite",
        icon: SiVite,
        colorClass: "text-[#646CFF] dark:text-muted-foreground dark:group-hover:text-[#646CFF]",
        hoverBorder: "hover:border-[#646CFF]/40",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        colorClass: "text-[#7952B3] dark:text-muted-foreground dark:group-hover:text-[#7952B3]",
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
        colorClass: "text-[#777BB4] dark:text-muted-foreground dark:group-hover:text-[#777BB4]",
        hoverBorder: "hover:border-[#777BB4]/40",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        colorClass: "text-[#FF2D20] dark:text-muted-foreground dark:group-hover:text-[#FF2D20]",
        hoverBorder: "hover:border-[#FF2D20]/40",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        colorClass: "text-[#5FA04E] dark:text-muted-foreground dark:group-hover:text-[#5FA04E]",
        hoverBorder: "hover:border-[#5FA04E]/40",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "Python",
        icon: SiPython,
        colorClass: "text-[#3776AB] dark:text-muted-foreground dark:group-hover:text-[#3776AB]",
        hoverBorder: "hover:border-[#3776AB]/40",
      },
      {
        name: "REST APIs",
        icon: TbApi,
        colorClass: "text-[#0D9488] dark:text-muted-foreground dark:group-hover:text-[#0D9488]",
        hoverBorder: "hover:border-[#0D9488]/40",
      },
      {
        name: "Redis",
        icon: SiRedis,
        colorClass: "text-[#DC2626] dark:text-muted-foreground dark:group-hover:text-[#FF4438]",
        hoverBorder: "hover:border-[#DC2626]/40 dark:hover:border-[#FF4438]/40",
      },
    ],
  },
  {
    name: "Mobile",
    items: [
      {
        name: "React Native",
        icon: SiReact,
        colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#61DAFB]",
        hoverBorder: "hover:border-[#0284c7]/40 dark:hover:border-[#61DAFB]/40",
      },
      {
        name: "Expo",
        icon: SiExpo,
        colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        colorClass: "text-[#02569B] dark:text-muted-foreground dark:group-hover:text-[#54C5F8]",
        hoverBorder: "hover:border-[#02569B]/40 dark:hover:border-[#54C5F8]/40",
      },
      {
        name: "Android",
        icon: SiAndroid,
        colorClass: "text-[#16a34a] dark:text-muted-foreground dark:group-hover:text-[#3DDC84]",
        hoverBorder: "hover:border-[#16a34a]/40 dark:hover:border-[#3DDC84]/40",
      },
      {
        name: "iOS",
        icon: SiApple,
        colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
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
        colorClass: "text-[#4169E1] dark:text-muted-foreground dark:group-hover:text-[#4169E1]",
        hoverBorder: "hover:border-[#4169E1]/40",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        colorClass: "text-[#00758F] dark:text-muted-foreground dark:group-hover:text-[#4479A1]",
        hoverBorder: "hover:border-[#00758F]/40 dark:hover:border-[#4479A1]/40",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        colorClass: "text-[#16a34a] dark:text-muted-foreground dark:group-hover:text-[#3ECF8E]",
        hoverBorder: "hover:border-[#16a34a]/40 dark:hover:border-[#3ECF8E]/40",
      },
      {
        name: "Prisma ORM",
        icon: SiPrisma,
        colorClass: "text-[#2D3748] dark:text-muted-foreground dark:group-hover:text-[#5A67D8]",
        hoverBorder: "hover:border-[#2D3748]/40 dark:hover:border-[#5A67D8]/40",
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        colorClass: "text-[#003B57] dark:text-muted-foreground dark:group-hover:text-[#0080CD]",
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
        colorClass: "text-[#F05032] dark:text-muted-foreground dark:group-hover:text-[#F05032]",
        hoverBorder: "hover:border-[#F05032]/40",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        colorClass: "text-[#2088FF] dark:text-muted-foreground dark:group-hover:text-[#2088FF]",
        hoverBorder: "hover:border-[#2088FF]/40",
      },
      {
        name: "Docker",
        icon: SiDocker,
        colorClass: "text-[#2496ED] dark:text-muted-foreground dark:group-hover:text-[#2496ED]",
        hoverBorder: "hover:border-[#2496ED]/40",
      },
      {
        name: "Linux",
        icon: SiLinux,
        colorClass: "text-[#d97706] dark:text-muted-foreground dark:group-hover:text-[#FCC624]",
        hoverBorder: "hover:border-[#d97706]/40 dark:hover:border-[#FCC624]/40",
      },
      {
        name: "AWS",
        icon: FaAws,
        colorClass: "text-[#FF9900] dark:text-muted-foreground dark:group-hover:text-[#FF9900]",
        hoverBorder: "hover:border-[#FF9900]/40",
      },
    ],
  },
  {
    name: "Infrastructure & Hosting",
    items: [
      {
        name: "Dokploy",
        icon: SiDokploy,
        colorClass: "text-[#38BDF8] dark:text-muted-foreground dark:group-hover:text-[#38BDF8]",
        hoverBorder: "hover:border-[#38BDF8]/40",
      },
      {
        name: "Hostinger",
        icon: SiHostinger,
        colorClass: "text-[#673DE6] dark:text-muted-foreground dark:group-hover:text-[#673DE6]",
        hoverBorder: "hover:border-[#673DE6]/40",
      },
      {
        name: "HostForge",
        icon: FaServer,
        colorClass: "text-[#3B82F6] dark:text-muted-foreground dark:group-hover:text-[#3B82F6]",
        hoverBorder: "hover:border-[#3B82F6]/40",
      },
      {
        name: "InfinityFree",
        icon: TbInfinity,
        colorClass: "text-[#00A4E4] dark:text-muted-foreground dark:group-hover:text-[#00A4E4]",
        hoverBorder: "hover:border-[#00A4E4]/40",
      },
      {
        name: "AwardSpace",
        icon: FaAward,
        colorClass: "text-[#F97316] dark:text-muted-foreground dark:group-hover:text-[#F97316]",
        hoverBorder: "hover:border-[#F97316]/40",
      },
      {
        name: "Render",
        icon: SiRender,
        colorClass: "text-[#46E3B7] dark:text-muted-foreground dark:group-hover:text-[#46E3B7]",
        hoverBorder: "hover:border-[#46E3B7]/40",
      },
      {
        name: "Railway",
        icon: SiRailway,
        colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
      {
        name: "Cloudflare Tunnel",
        icon: SiCloudflare,
        colorClass: "text-[#F38020] dark:text-muted-foreground dark:group-hover:text-[#F38020]",
        hoverBorder: "hover:border-[#F38020]/40",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        colorClass: "text-black dark:text-muted-foreground dark:group-hover:text-white",
        hoverBorder: "hover:border-foreground/40",
      },
    ],
  },
  {
    name: "AI & Tools",
    items: [
      {
        name: "Gemini",
        icon: SiGooglegemini,
        colorClass: "text-[#1A73E8] dark:text-muted-foreground dark:group-hover:text-[#4285F4]",
        hoverBorder: "hover:border-[#4285F4]/40",
      },
      {
        name: "Claude",
        icon: SiClaude,
        colorClass: "text-[#CC785C] dark:text-muted-foreground dark:group-hover:text-[#CC785C]",
        hoverBorder: "hover:border-[#CC785C]/40",
      },
      {
        name: "ChatGPT",
        icon: RiOpenaiFill,
        colorClass: "text-[#10A37F] dark:text-muted-foreground dark:group-hover:text-[#10A37F]",
        hoverBorder: "hover:border-[#10A37F]/40",
      },
      {
        name: "Cline",
        icon: SiCline,
        colorClass: "text-[#0284c7] dark:text-muted-foreground dark:group-hover:text-[#38BDF8]",
        hoverBorder: "hover:border-[#38BDF8]/40",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        colorClass: "text-[#007ACC] dark:text-muted-foreground dark:group-hover:text-[#007ACC]",
        hoverBorder: "hover:border-[#007ACC]/40",
      },
      {
        name: "Postman",
        icon: SiPostman,
        colorClass: "text-[#FF6C37] dark:text-muted-foreground dark:group-hover:text-[#FF6C37]",
        hoverBorder: "hover:border-[#FF6C37]/40",
      },
      {
        name: "Figma",
        icon: SiFigma,
        colorClass: "text-[#F24E1E] dark:text-muted-foreground dark:group-hover:text-[#F24E1E]",
        hoverBorder: "hover:border-[#F24E1E]/40",
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
                    className={`group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-border bg-card transition-all duration-200 hover:bg-muted/70 shadow-xs cursor-default ${item.hoverBorder}`}
                    title={item.name}
                    aria-label={item.name}
                  >
                    <Icon className={`h-5 w-5 transition-all duration-200 group-hover:scale-115 shrink-0 ${item.colorClass}`} />

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
