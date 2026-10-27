import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/context/sound-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://joshuasierra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  title: {
    default: "Joshua Arncel Sierra — Full-Stack Software Engineer",
    template: "%s | Joshua Arncel Sierra",
  },
  description:
    "Official portfolio of Joshua Arncel Sierra, a Full-Stack Software Engineer and 4th-year BSIT student based in Manila, Philippines. Building production web and mobile systems that serve real users.",
  keywords: [
    "Joshua Arncel Sierra",
    "Joshua Sierra",
    "Joshua A. Sierra",
    "Joshua A Sierra",
    "Joshua Sierra Full-Stack Software Engineer",
    "Joshua Arncel Sierra Developer",
    "Full-Stack Software Engineer Philippines",
    "Full Stack Developer Manila",
    "Joshua Sierra Developer",
    "Joshua Sierra Portfolio",
    "Joshua Sierra Manila",
    "Watot12345",
    "Software Developer Philippines",
    "Full-Stack Developer Manila",
    "Laravel Developer Philippines",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer Philippines",
    "TypeScript",
    "PHP Developer",
    "Civentral",
    "SariSari App",
    "SoleVerse",
    "Roppets",
  ],
  authors: [{ name: "Joshua Arncel Sierra", url: SITE_URL }],
  creator: "Joshua Arncel Sierra",
  publisher: "Joshua Arncel Sierra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Joshua Arncel Sierra — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer and 4th-year BSIT student based in Manila, Philippines. Building production web and mobile systems that serve real users.",
    url: SITE_URL,
    siteName: "Joshua Arncel Sierra",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Joshua Arncel Sierra — Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Arncel Sierra — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer and 4th-year BSIT student based in Manila, Philippines. Building production web and mobile systems that serve real users.",
    images: ["/profile.png"],
    creator: "@joshuasierra143",
  },
  verification: {
    google: "xY0WGmsapSKYUump8-pCkrymzfVzMEcYG3ZZyy_CpLw",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Joshua Arncel Sierra",
  alternateName: [
    "Joshua Sierra",
    "Joshua A. Sierra",
    "Joshua A Sierra",
    "Watot12345",
    "Joshua Sierra Full-Stack Software Engineer",
    "Joshua Sierra Developer",
  ],
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer and 4th-year BSIT student at Bestlink College of the Philippines (Manila). Building production web and mobile systems that serve real users, including Civentral, SariSari App, and Roppets.",
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manila",
    addressCountry: "Philippines",
  },
  email: "joshuaarncel@gmail.com",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Bestlink College of the Philippines",
      sameAs: "https://bcp.edu.ph",
    },
    {
      "@type": "EducationalOrganization",
      name: "Paradise Farms National High School",
    },
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Civentral — Health & Sanitation Management",
      url: "https://healthsanitation.civentral.tech",
    },
    {
      "@type": "Organization",
      name: "Roppets",
      url: "https://roppets.vercel.app",
    },
    {
      "@type": "Organization",
      name: "Krypton Dev",
      url: "https://www.facebook.com/profile.php?id=61593412577165",
    },
    {
      "@type": "Organization",
      name: "JWorks",
      url: "https://www.facebook.com/profile.php?id=61591583158210",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Computer Systems Servicing NC II",
      credentialCategory: "National Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "Technical Education and Skills Development Authority (TESDA)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certificate of Participation — Research Colloquium",
      recognizedBy: {
        "@type": "Organization",
        name: "Bestlink College of the Philippines",
      },
    },
  ],
  owns: [
    {
      "@type": "SoftwareApplication",
      name: "Civentral",
      operatingSystem: "Web",
      applicationCategory: "Health & Sanitation Management System",
      url: "https://healthsanitation.civentral.tech",
    },
    {
      "@type": "SoftwareApplication",
      name: "SariSari App",
      operatingSystem: "Web / Mobile",
      applicationCategory: "Inventory & POS System",
      url: "https://watot12345.github.io/sarisariApp/",
    },
    {
      "@type": "SoftwareApplication",
      name: "Barangay San Agustin Community Focus System",
      operatingSystem: "Web",
      applicationCategory: "Local Government Portal",
      url: "https://barangay-san-agustin.onrender.com",
    },
    {
      "@type": "SoftwareApplication",
      name: "Soleverse Chronos",
      operatingSystem: "Web",
      applicationCategory: "E-Commerce Sneaker Platform",
      url: "https://sole-verse-chronos-main.vercel.app/",
    },
  ],
  sameAs: [
    "https://github.com/Watot12345",
    "https://www.linkedin.com/in/joshua-arncel-sierra-8bb444275",
    "https://www.facebook.com/profile.php?id=61590879324960",
    "https://www.instagram.com/jus_wa143",
    "https://www.tiktok.com/@joshuasierra143",
  ],
  knowsAbout: [
    "Full-Stack Software Engineering",
    "Web Application Development",
    "Laravel",
    "React",
    "React Native",
    "Node.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Python",
    "MySQL",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Mobile App Development",
    "Computer Systems Servicing (CSS NC II)",
  ],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Joshua Arncel Sierra",
  alternateName: [
    "Joshua Sierra Portfolio",
    "Joshua Arncel Sierra Portfolio",
  ],
  url: SITE_URL,
  author: {
    "@id": `${SITE_URL}/#person`,
  },
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
};

const jsonLdSiteNavigation = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      name: "Projects",
      description: "Products, live municipal systems, and open-source applications built by Joshua Arncel Sierra.",
      url: `${SITE_URL}/projects`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Certifications",
      description: "Professional certifications, technical research credentials, and academic recognitions earned by Joshua Arncel Sierra.",
      url: `${SITE_URL}/certifications`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Affiliations",
      description: "Civic technology initiatives, student chapters, and engineering organizations affiliated with Joshua Arncel Sierra.",
      url: `${SITE_URL}/affiliations`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Workspace & Gear",
      description: "Workstation rig, dual-monitor setup, Linux Mint environment, and development tools used by Joshua Arncel Sierra.",
      url: `${SITE_URL}/gear`,
    },
  ],
};

const jsonLdProfilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-01-01T00:00:00+08:00",
  dateModified: "2026-10-25T16:00:00+08:00",
  mainEntity: jsonLdPerson,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSiteNavigation) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>
            {children}
            <Toaster />
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
