export interface ProjectCatalogItem {
  id: string;
  category: "gov" | "client" | "personal" | "school";
  badge: string;
  role?: string;
  tag: string;
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  metrics?: string;
  featured?: boolean;
}

export const ALL_PROJECTS: ProjectCatalogItem[] = [
  // ── 1. Capstone Government Platform ──
  {
    id: "civentral-web",
    category: "gov",
    badge: "Capstone Platform",
    role: "Capstone Lead Developer",
    tag: "South Caloocan City · Live",
    title: "Civentral Health & Sanitation Portal",
    description:
      "Official capstone web portal deployed for South Caloocan City. Digitized manual paper filings with real-time status updates and citizen record management for 1,000+ residents.",
    image: "/civentral-web.png",
    liveUrl: "https://healthsanitation.civentral.tech/",
    githubUrl: "https://github.com/Watot12345/Civentral_HealthSanitation--Web.git",
    tech: ["PHP", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    metrics: "1,000+ Active Citizens Served",
    featured: true,
  },

  // ── 2. Retail POS App ──
  {
    id: "sarisari-app",
    category: "personal",
    badge: "Startup Retail POS",
    role: "Founder & Developer",
    tag: "Flutter / Dart · Offline-First",
    title: "SariSari App — Retail POS & Inventory",
    description:
      "A mobile-first inventory and point-of-sale platform tailored for neighborhood retail stores (sari-sari stores) in the Philippines with offline-first transaction support and customer credit tracking.",
    image: "/sarisari.png",
    liveUrl: "https://watot12345.github.io/sarisariApp/",
    githubUrl: "https://github.com/Watot12345/sarisariApp.git",
    tech: ["Flutter", "Dart", "Mobile UI", "SQLite", "Offline-First"],
    metrics: "Live on GitHub Pages",
    featured: true,
  },

  // ── 3. Municipal Archive System ──
  {
    id: "sjdm-legislative",
    category: "client",
    badge: "Municipal Archive System",
    role: "Lead Full-Stack Developer",
    tag: "City of San Jose Del Monte · Live",
    title: "SJDM Legislative Research & Ordinance Archive",
    description:
      "Official municipal legislative records, city ordinance search engine, and council resolution archive platform live at lrpaies.sjdm-legislative.com.",
    image: "/sjdm-legislative.png",
    liveUrl: "https://lrpaies.sjdm-legislative.com",
    githubUrl: "https://github.com/Watot12345/sjdm-legislative-research.git",
    tech: ["PHP", "MySQL", "Full-Text Search", "Municipal Archive"],
    metrics: "Production Live Portal",
    featured: true,
  },

  // ── 4. Footwear eCommerce ──
  {
    id: "soleverse",
    category: "personal",
    badge: "Sneaker eCommerce Store",
    role: "Full-Stack Developer",
    tag: "React 19 & TanStack · Live",
    title: "SoleVerse — Premium Footwear & Sneaker Experience",
    description:
      "Modern footwear commerce platform engineered for performance, animated transitions, product filtering, responsive cart checkout, and interactive sneaker showcases deployed live at sole-verse-chronos-main.vercel.app.",
    image: "/soleverse.png",
    liveUrl: "https://sole-verse-chronos-main.vercel.app/",
    githubUrl: "https://github.com/Watot12345/sole-verse-chronos-main.git",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: "Live on Vercel",
    featured: true,
  },

  // ── 5. Public Sector Portal ──
  {
    id: "barangay-web",
    category: "gov",
    badge: "Public Sector Portal",
    role: "Full-Stack Developer",
    tag: "Barangay San Agustin",
    title: "Barangay San Agustin — Community & Resident Portal",
    description:
      "Integrated community platform for resident profiling, disaster relief operations, healthcare records, job matching, and scholarship assistance deployed live at barangay-san-agustin.onrender.com.",
    image: "/barangay-san-agustin.png",
    liveUrl: "https://barangay-san-agustin.onrender.com",
    githubUrl: "https://github.com/Watot12345/BarangayWeb",
    tech: ["HTML5", "JavaScript", "Tailwind CSS", "Render"],
    metrics: "12,000+ Resident Records",
  },

  // ── 6. Smart Expense Tracker ──
  {
    id: "expense-tracker",
    category: "personal",
    badge: "Fintech Web App",
    role: "Creator & Developer",
    tag: "TypeScript & React",
    title: "PennyFlow — Smart Expense Tracker & AI Coach",
    description:
      "Privacy-first financial tracker and AI coach featuring daily safe-to-spend limits, laser receipt OCR, subscription auditing, and offline-ready persistence live at watot12345.github.io/Expense-Tracker.",
    image: "/expense-tracker.png",
    liveUrl: "https://watot12345.github.io/Expense-Tracker/index.html",
    githubUrl: "https://github.com/Watot12345/Expense-Tracker.git",
    tech: ["TypeScript", "React", "Tailwind CSS", "Data Visualization"],
    metrics: "Live on GitHub Pages",
  },

  // ── 7. Institutional Attendance ──
  {
    id: "bcp-attendance",
    category: "client",
    badge: "Institutional Attendance",
    role: "Co-Developer",
    tag: "Bestlink College (BCP)",
    title: "BCP Student & Staff Attendance Portal",
    description:
      "Production school attendance monitoring portal deployed at attendancem.bcpsms1.com. Features QR check-in, real-time logging, and administrative reporting.",
    image: "/bcp-attendance.png",
    liveUrl: "https://attendancem.bcpsms1.com",
    githubUrl: "https://github.com/Watot12345/Attendance-_Management_System.git",
    tech: ["PHP", "MySQL", "QR Verification", "Production Portal"],
    metrics: "Production Live Portal",
  },

  // ── 8. Hospitality Operations ──
  {
    id: "performance-development",
    category: "client",
    badge: "Hospitality Operations",
    role: "Co-Developer",
    tag: "Oxford Suites Makati",
    title: "Oxford Suites Makati — Performance Development System",
    description:
      "Corporate staff performance evaluation, KPI tracking, and hospitality operations management system deployed for Oxford Suites Makati.",
    image: "/oxford-suites.png",
    liveUrl: "https://performancedevelopment.oxfordsuitesmakati.io/",
    githubUrl: "https://github.com/Watot12345/PerformanceDevelopment.git",
    tech: ["JavaScript", "Web Architecture", "Hospitality Management", "Performance KPIs"],
    metrics: "Production Live Portal",
  },

  // ── 9. Freight Logistics ──
  {
    id: "logistics-system",
    category: "school",
    badge: "Academic Project",
    role: "Main Developer",
    tag: "Fleet & Logistics Operations",
    title: "Logistics & Freight Tracking System",
    description:
      "Hotel & restaurant logistics management platform handling real-time cargo shipment tracking, smart warehousing inventory, fleet dispatch, and driver assignment deployed live at logistics-system-1cu0.onrender.com.",
    image: "/logistics-system.png",
    liveUrl: "https://logistics-system-1cu0.onrender.com",
    githubUrl: "https://github.com/Watot12345/Logistics-System.git",
    tech: ["PHP", "MySQL", "Dispatch Logic", "Relational Database", "Render"],
    metrics: "Live on Render",
  },

  // ── 10. Civentral Mobile App ──
  {
    id: "civentral-app",
    category: "gov",
    badge: "Cross-Platform Mobile App",
    role: "Co-Founder & Mobile Lead",
    tag: "Expo / Android & iOS",
    title: "Civentral Mobile App",
    description:
      "Companion mobile application for Caloocan citizens. Allows residents to submit service requests, receive live status notifications, and access city healthcare information on their phones.",
    image: "/civentral-app.png",
    githubUrl: "https://github.com/Raffy-3350/CitizenApp-HealthSanitation.git",
    tech: ["React Native", "Expo", "Supabase", "Tailwind CSS", "REST API"],
    metrics: "Real-time Push & Sync",
  },

  // ── 11. Roppets Production Management ──
  {
    id: "roppet-app",
    category: "client",
    badge: "Client Production System",
    role: "Main Developer",
    tag: "Theater & Events",
    title: "Roppets Puppet Production Management",
    description:
      "Internal production management, event scheduling, bookings, and inventory platform developed for Roppets Puppet Theater.",
    githubUrl: "https://github.com/Watot12345/roppet.git",
    tech: ["PHP", "MySQL", "Event Booking", "Management System"],
    metrics: "Internal Operations System",
  },

  // ── 12. Automated Job Crawler ──
  {
    id: "hjobscraper",
    category: "personal",
    badge: "Automation Tool",
    role: "Lead Developer",
    tag: "Web Crawler & Scraper",
    title: "HJobScraper — Automated Job Crawler",
    description:
      "Automated web crawler and job listing aggregator extracting real-time engineering opportunities and filtering openings by tech stack and location.",
    githubUrl: "https://github.com/Watot12345/hjobscraper.git",
    tech: ["Python", "Web Scraping", "Data Extraction", "Automation"],
    metrics: "Automated Data Pipeline",
  },

  // ── 13. Modular Cloud Ecosystem ──
  {
    id: "tenera-app",
    category: "personal",
    badge: "Personal Venture",
    role: "Co-Founder & Architect",
    tag: "Full-Stack Ecosystem",
    title: "Tenera Platform",
    description:
      "Modular full-stack web and cloud service ecosystem exploring automated business workflows, multi-tenant database models, and modern UI engineering.",
    githubUrl: "https://github.com/Watot12345/Tenera.git",
    tech: ["TypeScript", "Full-Stack", "Modular Services", "Cloud Database"],
    metrics: "Personal Venture",
  },

  // ── 14. Attendance & Payroll ──
  {
    id: "attendance-payroll",
    category: "school",
    badge: "Academic Project",
    role: "Main Developer",
    tag: "Enterprise System",
    title: "Attendance & Payroll Management System",
    description:
      "Automated employee attendance tracking with biometric/clock-in logging, tax calculations, government deductions, and automated payroll generation.",
    githubUrl: "https://github.com/Watot12345/Attendance-Management-payroll.git",
    tech: ["PHP", "MySQL", "Payroll Computation", "Attendance Logging"],
    metrics: "Full Payroll Automation",
  },

  // ── 15. Warehouse Inventory ──
  {
    id: "inventory-system",
    category: "school",
    badge: "Academic Project",
    role: "Main Developer",
    tag: "Warehouse Management",
    title: "Enterprise Inventory System",
    description:
      "Digital warehouse inventory tracking, stock in/out logging, reorder threshold alerts, and supplier record management.",
    githubUrl: "https://github.com/Watot12345/inventory-system.git",
    tech: ["PHP", "MySQL", "Inventory Tracking", "Bootstrap"],
    metrics: "Stock & Reorder Alerts",
  },

  // ── 16. BarkadaHub Campus App ──
  {
    id: "barkadahub-app",
    category: "school",
    badge: "Academic Project",
    role: "Co-Developer",
    tag: "Campus Social Platform",
    title: "BarkadaHub Mobile App",
    description:
      "Collaborative mobile social connection platform built for student groups and campus communities.",
    githubUrl: "https://github.com/zel-asp/BarkadaHubApp.git",
    tech: ["HTML5", "JavaScript", "Mobile App", "CSS3"],
    metrics: "Campus Mobile Hub",
  },

  // ── 17. Clinic & Salon Appointment System ──
  {
    id: "clinic-salon-system",
    category: "school",
    badge: "Academic Project",
    role: "Full-Stack Developer",
    tag: "Appointment & Booking",
    title: "Clinic & Salon Appointment Management System",
    description:
      "Digital appointment booking and client scheduling system with real-time calendar availability, service invoicing, and customer profile management.",
    githubUrl: "https://github.com/Watot12345/SalonAppointmentSystem.git",
    tech: ["PHP", "MySQL", "Appointment Booking", "Tailwind CSS"],
    metrics: "Operations System",
  },
];
