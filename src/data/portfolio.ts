// ============================================================================
// Portfolio Data — Joshua Sierra
// Production portfolio data updated from PORTFOLIO_INFO.md.
// ============================================================================

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaFigma,
  FaGitAlt,
  FaVuejs,
  FaAngular,
  FaAndroid,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiVercel,
  SiSupabase,
  SiExpo,
  SiVite,
} from "react-icons/si";
import { TbApi, TbCloud } from "react-icons/tb";
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
  { id: "github-activity", label: "Contributions", href: "#github-activity" },
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
  fullName: "Joshua Sierra",
  firstName: "Joshua",
  lastName: "Sierra",
  title: "Full Stack Developer",
  tagline: "I build real products for real people — from clean web platforms to responsive mobile apps.",
  bio: "Full Stack Developer and 4th-year BSIT student with 2+ years building web and mobile software. Actively seeking an Internship (OJT) and junior developer opportunities.",
  longBio: [
    "I'm a full-stack developer and 4th-year BSIT student based in Manila, Philippines, specializing in full-stack web applications, clean REST APIs, and cross-platform mobile apps.",
    "My flagship project — Civentral Web & App — is a live government health and sanitation platform actively serving 1,000+ citizens in Caloocan City, built using PHP, React Native, Supabase, and PostgreSQL.",
    "I currently work as a Project-Based Developer at Roppets and serve as Capstone Lead for the Civentral project. I'm actively seeking an Internship (OJT) and junior full-stack developer roles.",
  ],
  email: "joshuaarncel@gmail.com",
  phone: "09368587433",
  location: "Manila, Philippines",
  availability: "Actively seeking Internship (OJT) & Full-Stack roles",
  avatar: "/profile.png",
  resumeUrl: "/resume.pdf?v=2",
  yearsOfExperience: 2,
  projectsCompleted: 15,
  happyClients: 2,
  awardsWon: 1,
};

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------
export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Watot12345",
    icon: FaGithub,
    username: "@Watot12345",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joshua-arncel-sierra-8bb444275",
    icon: FaLinkedin,
    username: "in/joshua-arncel-sierra",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590879324960",
    icon: FaFacebook,
    username: "Joshua Sierra",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/jus_wa143?vrfl=cmd6bzlkeDh6eGhi",
    icon: FaInstagram,
    username: "@jus_wa143",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@joshuasierra143",
    icon: FaTiktok,
    username: "@joshuasierra143",
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const skills: Skill[] = [
  { id: "react", name: "React", level: 70, category: "Frontend", icon: FaReact },
  { id: "typescript", name: "TypeScript", level: 70, category: "Frontend", icon: SiTypescript },
  { id: "nextjs", name: "Next.js", level: 50, category: "Frontend", icon: SiNextdotjs },
  { id: "tailwind", name: "Tailwind CSS", level: 90, category: "Frontend", icon: SiTailwindcss },
  { id: "vue", name: "Vue.js / Angular", level: 50, category: "Frontend", icon: FaVuejs },
  { id: "node", name: "Node.js", level: 40, category: "Backend", icon: FaNodeJs },
  { id: "python", name: "Python", level: 40, category: "Backend", icon: FaPython },
  { id: "php", name: "PHP", level: 80, category: "Backend", icon: FaPhp },
  { id: "postgresql", name: "PostgreSQL", level: 85, category: "Database", icon: SiPostgresql },
  { id: "mysql", name: "MySQL", level: 90, category: "Database", icon: SiPostgresql },
  { id: "supabase", name: "Supabase", level: 85, category: "Database", icon: SiSupabase },
  { id: "react-native", name: "React Native / Expo", level: 80, category: "Mobile", icon: FaAndroid },
  { id: "docker", name: "Docker", level: 80, category: "DevOps", icon: FaDocker },
  { id: "aws", name: "AWS / Vercel", level: 85, category: "DevOps", icon: FaAws },
  { id: "git", name: "Git / GitHub Actions", level: 90, category: "DevOps", icon: FaGitAlt },
];

// ---------------------------------------------------------------------------
// Tech Stack
// ---------------------------------------------------------------------------
export const techStack: TechStackItem[] = [
  { id: "ts", name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { id: "js", name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { id: "react", name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { id: "next", name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "Frontend" },
  { id: "tw", name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { id: "vite", name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
  { id: "node", name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
  { id: "php", name: "PHP", icon: FaPhp, color: "#777BB4", category: "Backend" },
  { id: "py", name: "Python", icon: FaPython, color: "#3776AB", category: "Backend" },
  { id: "api", name: "REST APIs", icon: TbApi, color: "#F97316", category: "Backend" },
  { id: "pg", name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { id: "mysql", name: "MySQL", icon: SiPostgresql, color: "#4479A1", category: "Database" },
  { id: "supabase", name: "Supabase", icon: SiSupabase, color: "#3FCF8E", category: "Database" },
  { id: "docker", name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps" },
  { id: "aws", name: "AWS", icon: FaAws, color: "#FF9900", category: "DevOps" },
  { id: "cloud", name: "Cloud", icon: TbCloud, color: "#38BDF8", category: "DevOps" },
  { id: "vercel", name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "DevOps" },
  { id: "git", name: "Git", icon: FaGitAlt, color: "#F05032", category: "DevOps" },
  { id: "figma", name: "Figma", icon: FaFigma, color: "#F24E1E", category: "Design" },
  { id: "expo", name: "Expo", icon: SiExpo, color: "#FFFFFF", category: "Mobile" },
  { id: "android", name: "React Native", icon: FaAndroid, color: "#3DDC84", category: "Mobile" },
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
      "React & Next.js development",
      "Tailwind CSS responsive design",
      "REST API design & integration",
      "Performance optimization",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Engineering",
    description:
      "Clean, accessible interfaces with responsive layouts and seamless component design.",
    icon: HiPaintBrush,
    features: [
      "Modern component architecture",
      "Framer Motion animations",
      "Accessibility & usability",
      "Responsive mobile-first layouts",
    ],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description:
      "Scalable backend API services and database models tailored for public portals and enterprise workflows.",
    icon: HiServer,
    features: [
      "Node.js, Express & PHP backends",
      "PostgreSQL & MySQL database design",
      "Supabase real-time integrations",
      "Authentication & security",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, containerization, and cloud deployment for fast, reliable application delivery.",
    icon: HiCommandLine,
    features: [
      "Docker containerization",
      "Vercel & AWS cloud hosting",
      "Git & GitHub Actions CI/CD",
      "Database deployment & monitoring",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications for iOS and Android with fast, responsive performance.",
    icon: HiDevicePhoneMobile,
    features: [
      "React Native & Expo Go",
      "Real-time Supabase sync",
      "Mobile UI styling with Tailwind",
      "Android & iOS builds",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description:
      "Web & mobile architecture guidance, code reviews, and IT troubleshooting for project success.",
    icon: HiSparkles,
    features: [
      "Architecture & code reviews",
      "Database optimization",
      "IT troubleshooting & networking",
      "Technical roadmaps",
    ],
  },
];

// ---------------------------------------------------------------------------
// Work Experience
// ---------------------------------------------------------------------------
export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Roppets",
    companyUrl: "https://roppets.vercel.app",
    location: "Quezon City, Philippines / Remote",
    startDate: "Aug 2026",
    endDate: "Present",
    current: true,
    description:
      "Full-stack developer building the client operations portal, CRM, and online event booking systems for Roppets Puppet Theater.",
    achievements: [
      "Engineered the full-stack portal at roppets.vercel.app featuring online event booking and client order tracking.",
      "Built internal CRM dashboards for booking dispatch, production workflows, and puppet show schedule coordination.",
      "Optimized query performance and asset delivery for high-traffic children's entertainment and event bookings.",
    ],
    technologies: ["PHP", "JavaScript", "Tailwind CSS", "MySQL", "Vercel"],
  },
  {
    id: "exp-2",
    role: "Lead Backend Developer (Capstone Project)",
    company: "Civentral — Health & Sanitation Management",
    companyUrl: "https://healthsanitation.civentral.tech",
    location: "Caloocan City, Philippines",
    startDate: "June 2026",
    endDate: "Present",
    current: true,
    description:
      "Capstone technical lead powering healthsanitation.civentral.tech — a civic health and sanitation platform deployed and piloted for Caloocan City.",
    achievements: [
      "Architected the database schema and server logic for the Civentral health portal using PHP and PostgreSQL.",
      "Integrated Supabase real-time sync enabling instant status updates for citizen service requests.",
      "Delivered a production system actively serving 1,000+ residents, reducing paperwork processing time significantly.",
    ],
    technologies: ["JavaScript", "PHP", "PostgreSQL", "Tailwind CSS", "Supabase"],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.S. in Information Technology",
    institution: "Bestlink College of the Philippines",
    location: "Quezon City, Philippines",
    startYear: 2024,
    endYear: 2027,
    description:
      "Specializing in Web Development, Networking, Systems Troubleshooting, Database Architecture, and IT Management.",
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Research Forum for AI Integration on Web Development",
    issuer: "Bestlink College of the Philippines",
    issueDate: "2026",
    credentialId: "BCP-AI-2026",
    credentialUrl: "https://civentral.tech",
    icon: HiSparkles,
  },
];

// ---------------------------------------------------------------------------
// Recognitions & Credentials
// ---------------------------------------------------------------------------
export const awards: Award[] = [
  {
    id: "cert-cred-1",
    title: "Research Forum for AI Integration on Web Development",
    issuer: "Bestlink College of the Philippines",
    year: 2026,
    description: "Technical research presentation and academic seminar credential (BCP-AI-2026)",
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "prj-1",
    title: "Civentral Health & Sanitation Management Portal",
    slug: "civentral-web",
    category: "Web App",
    shortDescription:
      "Live government web platform serving 1,000+ citizens — digital health & sanitation services for Caloocan City.",
    fullDescription:
      "Civentral Web is a production government platform deployed for Caloocan City's health and sanitation department. It replaced manual paper-based workflows with a fully digital system: citizens can submit requests, track their application status in real time, and receive updates — all online. Built with PHP, JavaScript, Tailwind CSS, and Supabase. The platform is live at civentral.tech and actively serves over 1,000 registered citizens.",
    image: "/civentral-web.png",
    gallery: [
      "/civentral-web.png",
      "/civentral-app.png",
    ],
    techStack: ["PHP", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    features: [
      "Digital health & sanitation record management for 1,000+ citizens",
      "Real-time application status tracking via Supabase",
      "Admin dashboard for city staff with reporting & analytics",
      "Responsive design — works on government kiosks, desktops & mobile",
    ],
    githubUrl: "https://github.com/Watot12345/Civentral_HealthSanitation--Web.git",
    liveUrl: "https://healthsanitation.civentral.tech/",
    featured: true,
    year: 2026,
    role: "Lead Developer",
    duration: "6 months",
    challenges:
      "Replacing paper-based government workflows with a reliable, real-time digital system that city staff and citizens could actually use — with no dedicated IT team on-site.",
    results: [
      "1,000+ registered citizens actively using the platform",
      "Eliminated manual paper processing for health & sanitation applications",
      "Zero downtime in production since deployment",
    ],
  },
  {
    id: "prj-2",
    title: "Civentral App",
    slug: "civentral-app",
    category: "Mobile App",
    shortDescription:
      "Cross-platform mobile companion to Civentral Web — citizen health & sanitation services on iOS & Android.",
    fullDescription:
      "Civentral App brings the full Civentral government platform to mobile. Citizens can book appointments, submit sanitation reports, request certificates, and receive real-time push notifications — all from their phone. Built with React Native, Expo, and Supabase, the app syncs instantly with the Civentral Web backend, giving city staff and citizens a seamless cross-platform experience.",
    image: "/civentral-app.png",
    gallery: [
      "/civentral-app.png",
      "/civentral-web.png",
    ],
    techStack: ["React Native", "Expo", "Supabase", "Tailwind CSS", "TypeScript"],
    features: [
      "Book health appointments & track status from your phone",
      "Submit sanitation reports with photo uploads",
      "Real-time push notifications for application updates",
      "Full data sync with Civentral Web via Supabase",
    ],
    githubUrl: "https://github.com/Raffy-3350/CitizenApp-HealthSanitation.git",
    liveUrl: "https://civentral.tech",
    featured: true,
    year: 2026,
    role: "Lead Developer",
    duration: "6 months",
    challenges:
      "Building a smooth cross-platform mobile experience that stays in sync with a live government backend while remaining accessible to citizens with low-end Android devices.",
    results: [
      "Deployed on Android & iOS — available to all Caloocan City residents",
      "Real-time sync with Civentral Web for instant updates",
      "Designed for accessibility: usable even on entry-level Android phones",
    ],
  },
];

// ---------------------------------------------------------------------------
// Recommendations / Endorsements
// ---------------------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    id: "tst-1",
    name: "Jorge Lucero",
    role: "Capstone Project Adviser & IT Faculty",
    company: "Bestlink College of the Philippines",
    rating: 5,
    quote:
      "Joshua took full ownership of the backend for our Civentral capstone project. Instead of just aiming to pass requirements, he pushed to deploy a working platform that could handle actual citizen records in Caloocan. His focus on shipping practical, reliable code really stands out.",
    date: "2026",
  },
  {
    id: "tst-2",
    name: "Ronald Roldan Jr.",
    role: "Capstone Technical Adviser & IT Faculty",
    company: "Bestlink College of the Philippines",
    rating: 5,
    quote:
      "As his technical adviser, I watched Joshua work through complex database normalization and live Supabase syncing on Civentral. Whenever technical bottlenecks came up, Joshua was the one diving into the queries to find solutions. He has strong problem-solving discipline.",
    date: "2026",
  },
  {
    id: "tst-3",
    name: "Danilo Liwanag",
    role: "Founder & Director",
    company: "Roppets Puppet Production",
    rating: 5,
    quote:
      "Joshua built our online event booking portal and internal management tools at Roppets. He listened carefully to what our team actually needed, stayed responsive throughout development, and delivered a portal we use every day. Very dependable developer to work with.",
    date: "2026",
  },
  {
    id: "tst-4",
    name: "Raffy Lapiz",
    role: "Capstone Co-Developer & Mobile Lead",
    company: "Civentral Team",
    rating: 5,
    quote:
      "Developing Civentral with Joshua was a great experience. As our backend lead, he kept the REST APIs and Supabase schemas clean and consistent, which made connecting the mobile app smooth. He was always ready to jump into calls to test endpoints and fix bugs together.",
    date: "2026",
  },
];

// ---------------------------------------------------------------------------
// Languages
// ---------------------------------------------------------------------------
export const languages: Language[] = [
  { id: "lang-1", name: "Tagalog", proficiency: "Native", level: 100 },
  { id: "lang-2", name: "English", proficiency: "Fluent", level: 90 },
];

// ---------------------------------------------------------------------------
// Blog Previews
// ---------------------------------------------------------------------------
export const blogPosts: BlogPost[] = [];
