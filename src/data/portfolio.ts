// ============================================================================
// Portfolio Mock Data
// Realistic, production-grade mock data for the entire portfolio.
// ============================================================================

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaFigma,
  FaGitAlt,
  FaVuejs,
  FaAngular,
  FaSwift,
  FaAndroid,
  FaPhp,
  FaJava,
  FaRust,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiVercel,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiStripe,
  SiVite,
  SiRedux,
  SiExpo,
  SiFlutter,
  SiFramer,
} from "react-icons/si";
import { TbApi, TbCloud, TbBrandThreejs, TbPhoto, TbArtboard } from "react-icons/tb";
import {
  HiCodeBracket,
  HiCommandLine,
  HiSparkles,
  HiDevicePhoneMobile,
  HiPaintBrush,
  HiServer,
} from "react-icons/hi2";
import type {
  Profile,
  SocialLink,
  Skill,
  TechStackItem,
  Service,
  ExperienceItem,
  EducationItem,
  Certification,
  Project,
  Testimonial,
  Award,
  BlogPost,
  Language,
  NavItem,
} from "@/types/portfolio";

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "services", label: "Services", href: "#services" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export const profile: Profile = {
  fullName: "Adrian Mercer",
  firstName: "Adrian",
  lastName: "Mercer",
  title: "Senior Full-Stack Engineer & UI Architect",
  tagline: "I craft immersive digital experiences where engineering meets art.",
  bio: "Senior Full-Stack Engineer with 8+ years building award-winning web applications. I blend rigorous engineering with obsessive attention to design detail, shipping products that are as fast as they are beautiful.",
  longBio: [
    "I'm a Senior Full-Stack Engineer based in San Francisco, specializing in building scalable, performant, and visually stunning web applications. Over the past 8 years I've partnered with startups and Fortune 500 teams to ship products used by millions.",
    "My work sits at the intersection of engineering excellence and design craft. I obsess over the details — a 16ms paint reduction, a perfectly-eased transition, an accessible color ratio — because those details compound into experiences people love.",
    "When I'm not shipping, you'll find me contributing to open source, mentoring junior engineers, or speaking at conferences about web performance and motion design.",
  ],
  email: "adrian@mercer.dev",
  phone: "+1 (415) 555-0182",
  location: "San Francisco, California",
  availability: "Available for select freelance projects",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  resumeUrl: "/resume-adrian-mercer.pdf",
  yearsOfExperience: 8,
  projectsCompleted: 127,
  happyClients: 64,
  awardsWon: 14,
};

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------
export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/adrianmercer",
    icon: FaGithub,
    username: "@adrianmercer",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/adrianmercer",
    icon: FaLinkedin,
    username: "in/adrianmercer",
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/adrianmercer",
    icon: FaTwitter,
    username: "@adrianmercer",
  },
  {
    id: "dribbble",
    label: "Dribbble",
    href: "https://dribbble.com/adrianmercer",
    icon: FaDribbble,
    username: "@adrianmercer",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/adrianmercer.dev",
    icon: FaInstagram,
    username: "@adrianmercer.dev",
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const skills: Skill[] = [
  { id: "react", name: "React", level: 98, category: "Frontend", icon: FaReact },
  { id: "typescript", name: "TypeScript", level: 96, category: "Frontend", icon: SiTypescript },
  { id: "nextjs", name: "Next.js", level: 95, category: "Frontend", icon: SiNextdotjs },
  { id: "vue", name: "Vue.js", level: 82, category: "Frontend", icon: FaVuejs },
  { id: "angular", name: "Angular", level: 78, category: "Frontend", icon: FaAngular },
  { id: "tailwind", name: "Tailwind CSS", level: 97, category: "Frontend", icon: SiTailwindcss },
  { id: "framer", name: "Framer Motion", level: 90, category: "Frontend", icon: SiFramer },
  { id: "threejs", name: "Three.js", level: 75, category: "Frontend", icon: TbBrandThreejs },
  { id: "node", name: "Node.js", level: 94, category: "Backend", icon: FaNodeJs },
  { id: "python", name: "Python", level: 88, category: "Backend", icon: FaPython },
  { id: "graphql", name: "GraphQL", level: 85, category: "Backend", icon: SiGraphql },
  { id: "php", name: "PHP / Laravel", level: 72, category: "Backend", icon: FaPhp },
  { id: "java", name: "Java", level: 70, category: "Backend", icon: FaJava },
  { id: "rust", name: "Rust", level: 65, category: "Backend", icon: FaRust },
  { id: "postgresql", name: "PostgreSQL", level: 90, category: "Database", icon: SiPostgresql },
  { id: "mongodb", name: "MongoDB", level: 86, category: "Database", icon: SiMongodb },
  { id: "redis", name: "Redis", level: 80, category: "Database", icon: SiRedis },
  { id: "prisma", name: "Prisma", level: 92, category: "Database", icon: SiPrisma },
  { id: "docker", name: "Docker", level: 88, category: "DevOps", icon: FaDocker },
  { id: "kubernetes", name: "Kubernetes", level: 76, category: "DevOps", icon: SiKubernetes },
  { id: "aws", name: "AWS", level: 84, category: "DevOps", icon: FaAws },
  { id: "terraform", name: "Terraform", level: 70, category: "DevOps", icon: SiTerraform },
  { id: "figma", name: "Figma", level: 89, category: "Design", icon: FaFigma },
  { id: "photoshop", name: "Photoshop", level: 78, category: "Design", icon: TbPhoto },
  { id: "adobexd", name: "Adobe XD", level: 75, category: "Design", icon: TbArtboard },
  { id: "swift", name: "Swift", level: 68, category: "Mobile", icon: FaSwift },
  { id: "android", name: "Android", level: 66, category: "Mobile", icon: FaAndroid },
  { id: "flutter", name: "Flutter", level: 72, category: "Mobile", icon: SiFlutter },
];

// ---------------------------------------------------------------------------
// Tech Stack
// ---------------------------------------------------------------------------
export const techStack: TechStackItem[] = [
  { id: "ts", name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { id: "js", name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { id: "react", name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { id: "next", name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "Frontend" },
  { id: "vue", name: "Vue", icon: FaVuejs, color: "#4FC08D", category: "Frontend" },
  { id: "tw", name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { id: "redux", name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend" },
  { id: "vite", name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
  { id: "node", name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
  { id: "py", name: "Python", icon: FaPython, color: "#3776AB", category: "Backend" },
  { id: "gql", name: "GraphQL", icon: SiGraphql, color: "#E10098", category: "Backend" },
  { id: "api", name: "REST APIs", icon: TbApi, color: "#F97316", category: "Backend" },
  { id: "pg", name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { id: "mongo", name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { id: "redis", name: "Redis", icon: SiRedis, color: "#FF4438", category: "Database" },
  { id: "prisma", name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Database" },
  { id: "supabase", name: "Supabase", icon: SiSupabase, color: "#3FCF8E", category: "Database" },
  { id: "firebase", name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Database" },
  { id: "docker", name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps" },
  { id: "k8s", name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "DevOps" },
  { id: "aws", name: "AWS", icon: FaAws, color: "#FF9900", category: "DevOps" },
  { id: "cloud", name: "Cloud", icon: TbCloud, color: "#38BDF8", category: "DevOps" },
  { id: "vercel", name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "DevOps" },
  { id: "git", name: "Git", icon: FaGitAlt, color: "#F05032", category: "DevOps" },
  { id: "figma", name: "Figma", icon: FaFigma, color: "#F24E1E", category: "Design" },
  { id: "framer", name: "Framer", icon: SiFramer, color: "#0055FF", category: "Design" },
  { id: "stripe", name: "Stripe", icon: SiStripe, color: "#635BFF", category: "Backend" },
  { id: "wp", name: "WordPress", icon: FaWordpress, color: "#21759B", category: "Backend" },
  { id: "expo", name: "Expo", icon: SiExpo, color: "#FFFFFF", category: "Mobile" },
  { id: "flutter", name: "Flutter", icon: SiFlutter, color: "#02569B", category: "Mobile" },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "End-to-end development of high-performance web applications using modern frameworks and best practices.",
    icon: HiCodeBracket,
    features: [
      "Next.js & React expertise",
      "Server-side rendering & ISR",
      "API design & integration",
      "Performance optimization",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Engineering",
    description:
      "Pixel-perfect, accessible interfaces with fluid motion design and design-system thinking.",
    icon: HiPaintBrush,
    features: [
      "Design system architecture",
      "Framer Motion animations",
      "Accessibility (WCAG AA+)",
      "Responsive & adaptive layouts",
    ],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description:
      "Scalable, secure, and well-documented backends with clean data modeling and observability built in.",
    icon: HiServer,
    features: [
      "Node.js & Python services",
      "Database design & optimization",
      "Authentication & authorization",
      "Microservices & event-driven systems",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, containerization, and infrastructure-as-code for reliable, repeatable deployments.",
    icon: HiCommandLine,
    features: [
      "Docker & Kubernetes",
      "AWS & Vercel deployment",
      "CI/CD with GitHub Actions",
      "Monitoring & alerting",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with native-feeling performance and shared business logic.",
    icon: HiDevicePhoneMobile,
    features: [
      "React Native & Expo",
      "Flutter applications",
      "Offline-first architecture",
      "App Store & Play deployment",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description:
      "Architecture reviews, performance audits, and team mentorship to level up your engineering org.",
    icon: HiSparkles,
    features: [
      "Architecture & code reviews",
      "Performance & SEO audits",
      "Team mentoring & workshops",
      "Technology roadmaps",
    ],
  },
];

// ---------------------------------------------------------------------------
// Work Experience
// ---------------------------------------------------------------------------
export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Principal Frontend Engineer",
    company: "Nebula Labs",
    companyUrl: "https://example.com/nebula",
    location: "San Francisco, CA (Remote)",
    startDate: "Jan 2023",
    endDate: "Present",
    current: true,
    description:
      "Lead the frontend platform team building real-time collaboration tools used by 2M+ monthly active users.",
    achievements: [
      "Architected a design system adopted across 9 product teams, reducing UI delivery time by 40%.",
      "Cut Largest Contentful Paint by 62% through code-splitting, edge caching, and image optimization.",
      "Mentored 6 engineers, with 3 promoted to senior roles within 12 months.",
      "Drove migration from CRA to Next.js App Router, improving TTI by 48%.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "GraphQL", "AWS", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "Senior Full-Stack Engineer",
    company: "Vertex Studio",
    companyUrl: "https://example.com/vertex",
    location: "Austin, TX",
    startDate: "Mar 2020",
    endDate: "Dec 2022",
    current: false,
    description:
      "Built award-winning marketing sites and SaaS dashboards for venture-backed startups and agencies.",
    achievements: [
      "Shipped 30+ client projects with a 100% on-time delivery record.",
      "Won 3 Awwwards Site of the Day honors for interactive campaigns.",
      "Built a reusable CMS-driven component library used across 40+ sites.",
      "Implemented CI/CD pipelines reducing deployment time from 25 min to 4 min.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Framer Motion", "Vercel"],
  },
  {
    id: "exp-3",
    role: "Full-Stack Developer",
    company: "Brightwave Analytics",
    companyUrl: "https://example.com/brightwave",
    location: "New York, NY",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    current: false,
    description:
      "Developed data visualization dashboards and ETL pipelines for enterprise analytics clients.",
    achievements: [
      "Built a real-time dashboard rendering 500K data points at 60fps using canvas + WebGL.",
      "Designed a GraphQL API serving 12M requests/day with sub-100ms p95 latency.",
      "Reduced cloud spend by 35% through query optimization and caching.",
    ],
    technologies: ["Vue.js", "Python", "GraphQL", "PostgreSQL", "Redis", "AWS"],
  },
  {
    id: "exp-4",
    role: "Frontend Developer",
    company: "Pixel Forge Agency",
    companyUrl: "https://example.com/pixelforge",
    location: "Chicago, IL",
    startDate: "Jul 2016",
    endDate: "May 2018",
    current: false,
    description:
      "Started my career building responsive, animated marketing sites for local and national brands.",
    achievements: [
      "Delivered 50+ responsive websites with a focus on performance and accessibility.",
      "Introduced Git and code review practices to a team of 8 developers.",
      "Built the agency's first component library, reused across 60+ projects.",
    ],
    technologies: ["JavaScript", "jQuery", "PHP", "WordPress", "Sass", "Gulp"],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "M.S. in Human-Computer Interaction",
    institution: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    startYear: 2014,
    endYear: 2016,
    description:
      "Specialized in interaction design and front-end engineering. Thesis on motion design patterns for accessibility.",
    gpa: "3.92 / 4.00",
  },
  {
    id: "edu-2",
    degree: "B.S. in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    startYear: 2010,
    endYear: 2014,
    description:
      "Focus on software engineering, algorithms, and distributed systems. President of the Web Development Club.",
    gpa: "3.78 / 4.00",
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AWS Solutions Architect — Professional",
    issuer: "Amazon Web Services",
    issueDate: "Mar 2024",
    credentialId: "AWS-PRO-2024-08821",
    credentialUrl: "https://example.com/cert/aws-pro",
    icon: FaAws,
  },
  {
    id: "cert-2",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "Nov 2023",
    credentialId: "CKA-2023-7741",
    credentialUrl: "https://example.com/cert/cka",
    icon: SiKubernetes,
  },
  {
    id: "cert-3",
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    issueDate: "Aug 2022",
    credentialId: "PSM-I-9920441",
    credentialUrl: "https://example.com/cert/psm",
    icon: HiCommandLine,
  },
  {
    id: "cert-4",
    name: "Google UX Design Professional",
    issuer: "Google",
    issueDate: "Feb 2022",
    credentialId: "GOOG-UX-448102",
    credentialUrl: "https://example.com/cert/google-ux",
    icon: HiPaintBrush,
  },
  {
    id: "cert-5",
    name: "Meta Front-End Developer",
    issuer: "Meta",
    issueDate: "Jun 2021",
    credentialId: "META-FE-220917",
    credentialUrl: "https://example.com/cert/meta-fe",
    icon: HiCodeBracket,
  },
  {
    id: "cert-6",
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    issueDate: "Sep 2020",
    credentialId: "DCA-2020-5512",
    credentialUrl: "https://example.com/cert/dca",
    icon: FaDocker,
  },
];

// ---------------------------------------------------------------------------
// Awards
// ---------------------------------------------------------------------------
export const awards: Award[] = [
  {
    id: "awd-1",
    title: "Awwwards — Site of the Day",
    issuer: "Awwwards",
    year: 2024,
    description: "Recognized for the Nebula Labs product launch site.",
  },
  {
    id: "awd-2",
    title: "CSS Design Awards — Website of the Day",
    issuer: "CSS Design Awards",
    year: 2023,
    description: "Awarded for innovative interaction design on the Vertex Studio portfolio.",
  },
  {
    id: "awd-3",
    title: "FWA of the Day",
    issuer: "The FWA",
    year: 2023,
    description: "Honored for the immersive 'Atlas' brand campaign experience.",
  },
  {
    id: "awd-4",
    title: "Webby Award — Best Visual Design",
    issuer: "The Webby Awards",
    year: 2022,
    description: "Winner in the Best Visual Design - Function category.",
  },
  {
    id: "awd-5",
    title: "Awwwards — Developer Award",
    issuer: "Awwwards",
    year: 2021,
    description: "Recognized for technical excellence on the Brightwave dashboard.",
  },
  {
    id: "awd-6",
    title: "Communication Arts — Interactive Shortlist",
    issuer: "Communication Arts",
    year: 2020,
    description: "Shortlisted for interactive storytelling excellence.",
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "prj-1",
    title: "Atlas — Immersive Brand Experience",
    slug: "atlas",
    category: "Web Experience",
    shortDescription:
      "An award-winning WebGL-driven brand site with scroll-driven storytelling and 60fps motion.",
    fullDescription:
      "Atlas is an immersive single-page brand experience built for a luxury travel company. The site uses Three.js for procedural terrain generation, GSAP for scroll-driven choreography, and a custom WebGL shader pipeline to render atmospheric effects in real time. Every interaction was designed to feel cinematic while maintaining sub-2s load times through aggressive asset optimization and progressive enhancement.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200&h=800&fit=crop",
    ],
    techStack: ["Next.js", "Three.js", "GSAP", "TypeScript", "WebGL", "Vercel"],
    features: [
      "Procedural WebGL terrain with custom GLSL shaders",
      "Scroll-driven cinematic storytelling",
      "Adaptive quality scaling for low-end devices",
      "Sub-2s LCP with progressive image loading",
    ],
    githubUrl: "https://github.com/adrianmercer/atlas",
    liveUrl: "https://atlas.example.com",
    featured: true,
    year: 2024,
    role: "Lead Engineer & Creative Director",
    duration: "4 months",
    challenges:
      "The biggest challenge was delivering photorealistic real-time rendering on mobile devices. I solved this with a custom adaptive quality system that samples GPU capability at runtime and degrades shader complexity dynamically, keeping 60fps on mid-range phones while preserving visual fidelity on desktop.",
    results: [
      "Awwwards Site of the Day",
      "98 Lighthouse performance score on desktop",
      "3.2x increase in average session duration",
      "42% conversion lift on the booking flow",
    ],
  },
  {
    id: "prj-2",
    title: "Nebula — Realtime Collaboration Suite",
    slug: "nebula",
    category: "SaaS Platform",
    shortDescription:
      "A Figma-style multiplayer canvas handling 2M MAU with CRDT-based conflict resolution.",
    fullDescription:
      "Nebula is a real-time collaborative design platform serving over 2 million monthly active users. The canvas is powered by a Yjs CRDT layer that syncs state across dozens of concurrent editors without conflicts. The rendering engine uses a hybrid canvas + DOM approach to keep 60fps even with thousands of objects. A custom presence system shows live cursors, selections, and avatars with sub-50ms latency via WebSockets.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&h=800&fit=crop",
    ],
    techStack: ["React", "TypeScript", "Node.js", "WebSockets", "Yjs CRDT", "PostgreSQL", "Redis"],
    features: [
      "CRDT-based conflict-free real-time editing",
      "Hybrid canvas/DOM rendering at 60fps",
      "Live presence with sub-50ms cursor latency",
      "Offline-first with automatic sync on reconnect",
    ],
    githubUrl: "https://github.com/adrianmercer/nebula",
    liveUrl: "https://nebula.example.com",
    featured: true,
    year: 2023,
    role: "Principal Frontend Engineer",
    duration: "18 months",
    challenges:
      "Synchronizing state across 40+ concurrent editors without lag required a custom CRDT implementation and a delta-based WebSocket protocol. I built a benchmarking harness that simulated 100 concurrent sessions to validate latency under load before every release.",
    results: [
      "Scaled to 2M+ monthly active users",
      "p95 sync latency under 80ms",
      "99.97% uptime over 12 months",
      "Zero data-loss incidents",
    ],
  },
  {
    id: "prj-3",
    title: "Pulse — Developer Analytics Dashboard",
    slug: "pulse",
    category: "Dashboard",
    shortDescription:
      "A real-time analytics dashboard rendering 500K data points at 60fps using canvas + WebGL.",
    fullDescription:
      "Pulse is a high-density analytics dashboard for engineering teams. It ingests millions of events per minute and renders them as live, interactive charts. The charting layer is a custom WebGL engine that can plot 500K points while maintaining 60fps. A virtualized data grid handles 100K rows without jank, and a streaming WebSocket layer pushes updates with delta compression.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&h=800&fit=crop",
    ],
    techStack: ["Next.js", "TypeScript", "WebGL", "D3.js", "WebSockets", "PostgreSQL", "AWS"],
    features: [
      "Custom WebGL charting engine at 60fps",
      "Virtualized 100K-row data grid",
      "Streaming WebSocket with delta compression",
      "Saved views & shareable dashboard links",
    ],
    githubUrl: "https://github.com/adrianmercer/pulse",
    liveUrl: "https://pulse.example.com",
    featured: true,
    year: 2023,
    role: "Lead Engineer",
    duration: "6 months",
    challenges:
      "Rendering half a million data points smoothly meant I couldn't use SVG or even Canvas 2D. I built a custom WebGL renderer with instanced drawing and a level-of-detail system that decimates points based on zoom level, keeping the GPU workload constant.",
    results: [
      "60fps with 500K live data points",
      "Reduced dashboard load time by 70%",
      "Adopted by 14 enterprise customers",
      "99.99% uptime SLA achieved",
    ],
  },
  {
    id: "prj-4",
    title: "Verdant — Sustainable Commerce",
    slug: "verdant",
    category: "E-Commerce",
    shortDescription:
      "A headless commerce platform with a 99 Lighthouse score and AI-powered product discovery.",
    fullDescription:
      "Verdant is a headless e-commerce platform for sustainable brands. The storefront is built on Next.js with a fully server-rendered architecture, achieving a 99 Lighthouse performance score. Product discovery is powered by a vector search engine that understands natural-language queries. The cart and checkout are optimized for conversion with A/B-tested micro-interactions.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=800&fit=crop",
    ],
    techStack: ["Next.js", "TypeScript", "GraphQL", "Stripe", "PostgreSQL", "Vercel", "Tailwind CSS"],
    features: [
      "99 Lighthouse performance score",
      "AI-powered vector product search",
      "Server-rendered headless commerce",
      "Optimized multi-step checkout",
    ],
    githubUrl: "https://github.com/adrianmercer/verdant",
    liveUrl: "https://verdant.example.com",
    featured: true,
    year: 2022,
    role: "Full-Stack Engineer",
    duration: "5 months",
    challenges:
      "Balancing rich product imagery with a 99 performance score required a custom image pipeline with AVIF encoding, responsive srcsets, and a blur-up placeholder system. The AI search needed sub-200ms latency, so I pre-computed embeddings and used an in-memory HNSW index.",
    results: [
      "99 Lighthouse performance score",
      "28% increase in conversion rate",
      "1.4s average page load globally",
      "32% reduction in bounce rate",
    ],
  },
  {
    id: "prj-5",
    title: "Cadence — Music Production Studio",
    slug: "cadence",
    category: "Web App",
    shortDescription:
      "A browser-based DAW with Web Audio synthesis, MIDI sequencing, and cloud collaboration.",
    fullDescription:
      "Cadence brings professional music production to the browser. Built on the Web Audio API, it features a full synthesizer, drum machine, and MIDI sequencer. Projects sync to the cloud and can be shared with collaborators in real time. The audio engine runs entirely in an AudioWorklet for glitch-free performance, and the UI is rendered with a custom reactive system tuned for low-latency parameter changes.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop",
    ],
    techStack: ["React", "TypeScript", "Web Audio API", "AudioWorklet", "Node.js", "WebRTC"],
    features: [
      "Full Web Audio synthesizer & drum machine",
      "MIDI sequencing with piano roll",
      "Real-time cloud collaboration",
      "Glitch-free AudioWorklet engine",
    ],
    githubUrl: "https://github.com/adrianmercer/cadence",
    liveUrl: "https://cadence.example.com",
    featured: false,
    year: 2022,
    role: "Founder & Engineer",
    duration: "8 months",
    challenges:
      "Achieving professional-grade audio in the browser meant moving all DSP into an AudioWorklet to avoid main-thread jank. I also built a custom binary protocol for syncing project state to keep bandwidth low enough for mobile collaborators.",
    results: [
      "Featured on Product Hunt #2 product of the day",
      "12K active producers in first 6 months",
      "Sub-5ms audio latency on supported browsers",
      "4.8-star average user rating",
    ],
  },
  {
    id: "prj-6",
    title: "Wayfinder — Travel Planning AI",
    slug: "wayfinder",
    category: "AI Product",
    shortDescription:
      "An AI travel planner that generates personalized multi-city itineraries in seconds.",
    fullDescription:
      "Wayfinder uses a large language model to generate personalized travel itineraries based on user preferences, budget, and constraints. The backend orchestrates multiple AI calls, live pricing APIs, and a recommendation engine to produce a day-by-day plan with bookings. The frontend features a smooth, map-based interface with draggable itinerary cards and live availability.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=800&fit=crop",
    ],
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "OpenAI", "Mapbox", "PostgreSQL"],
    features: [
      "LLM-powered itinerary generation",
      "Live pricing & availability integration",
      "Interactive map with draggable cards",
      "Multi-constraint optimization engine",
    ],
    githubUrl: "https://github.com/adrianmercer/wayfinder",
    liveUrl: "https://wayfinder.example.com",
    featured: false,
    year: 2024,
    role: "Lead Engineer",
    duration: "3 months",
    challenges:
      "Coordinating multiple async AI and pricing calls while keeping the UI responsive required a streaming architecture. I built a Server-Sent Events pipeline that pushes partial itineraries to the client as each leg is computed, so users see their trip build in real time.",
    results: [
      "Average itinerary generated in 8 seconds",
      "92% user satisfaction with generated plans",
      "Featured in TechCrunch",
      "50K itineraries generated in first month",
    ],
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    id: "tst-1",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "Nebula Labs",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    quote:
      "Adrian is the rare engineer who cares as much about the pixel as the architecture. He shipped our design system in record time and it transformed how our whole org builds product. Simply the best frontend partner I've worked with.",
    date: "Jan 2024",
  },
  {
    id: "tst-2",
    name: "Marcus Webb",
    role: "Founder & CEO",
    company: "Verdant",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    quote:
      "We hired Adrian to rebuild our storefront and the results were staggering — a 99 Lighthouse score and a 28% conversion lift. He thinks like a founder, not just a developer, and that's invaluable.",
    date: "Nov 2023",
  },
  {
    id: "tst-3",
    name: "Elena Rodriguez",
    role: "Design Director",
    company: "Vertex Studio",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    quote:
      "Working with Adrian feels like cheating. I hand him a Figma file and what comes back is sharper, faster, and more polished than I imagined. He elevates every design he touches.",
    date: "Aug 2023",
  },
  {
    id: "tst-4",
    name: "David Park",
    role: "CTO",
    company: "Brightwave Analytics",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    quote:
      "Adrian took our most complex performance challenge — rendering 500K live data points — and made it look easy. His WebGL expertise and attention to latency are genuinely world-class.",
    date: "May 2023",
  },
  {
    id: "tst-5",
    name: "Aisha Patel",
    role: "Head of Engineering",
    company: "Wayfinder",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    quote:
      "Adrian architected our entire AI travel platform in three months. His streaming approach made the product feel instant, and his mentorship leveled up our whole team. A true 10x engineer.",
    date: "Mar 2024",
  },
  {
    id: "tst-6",
    name: "Tom Bradley",
    role: "Creative Director",
    company: "Atlas Travel",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    quote:
      "Our Atlas launch site won Awwwards Site of the Day, and none of it would have happened without Adrian. He pushed WebGL to its limits while keeping it buttery smooth on mobile. A creative technologist in the truest sense.",
    date: "Feb 2024",
  },
];

// ---------------------------------------------------------------------------
// Languages
// ---------------------------------------------------------------------------
export const languages: Language[] = [
  { id: "lang-1", name: "English", proficiency: "Native", level: 100 },
  { id: "lang-2", name: "Spanish", proficiency: "Professional", level: 85 },
  { id: "lang-3", name: "Mandarin", proficiency: "Conversational", level: 60 },
  { id: "lang-4", name: "French", proficiency: "Basic", level: 35 },
];

// ---------------------------------------------------------------------------
// Blog Previews
// ---------------------------------------------------------------------------
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building 60fps Charts with WebGL: A Practical Guide",
    excerpt:
      "How I rendered 500K data points at 60fps in the browser using instanced drawing and level-of-detail decimation.",
    slug: "webgl-60fps-charts",
    date: "Mar 12, 2024",
    readTime: "12 min read",
    category: "WebGL",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    url: "https://blog.adrianmercer.dev/webgl-60fps-charts",
  },
  {
    id: "blog-2",
    title: "The Architecture Behind Real-Time Collaboration",
    excerpt:
      "A deep dive into the CRDT and WebSocket architecture that powers Nebula's multiplayer canvas.",
    slug: "realtime-collaboration-architecture",
    date: "Jan 28, 2024",
    readTime: "15 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&h=500&fit=crop",
    url: "https://blog.adrianmercer.dev/realtime-collaboration-architecture",
  },
  {
    id: "blog-3",
    title: "Motion Design for Accessibility: Beyond the Fade",
    excerpt:
      "How to build delightful animations that respect reduced-motion preferences and cognitive accessibility.",
    slug: "motion-design-accessibility",
    date: "Dec 5, 2023",
    readTime: "9 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    url: "https://blog.adrianmercer.dev/motion-design-accessibility",
  },
];
