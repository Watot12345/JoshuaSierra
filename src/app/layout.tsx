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
    default: "Joshua Arncel Sierra — Full Stack Developer",
    template: "%s | Joshua Arncel Sierra",
  },
  description:
    "Official portfolio of Joshua Arncel Sierra, a Full Stack Developer and 4th-year BSIT student based in Manila, Philippines. Building real-world web and mobile platforms.",
  keywords: [
    "Joshua Arncel Sierra",
    "Joshua Sierra",
    "Joshua A. Sierra",
    "Joshua A Sierra",
    "Joshua Sierra Full Stack Developer",
    "Joshua Arncel Sierra Developer",
    "Full Stack Developer Philippines",
    "Full Stack Developer Manila",
    "Joshua Sierra Developer",
    "Joshua Sierra Portfolio",
    "Joshua Sierra Manila",
    "Watot12345",
    "Software Developer Philippines",
    "Full-Stack Developer Manila",
    "Next.js Developer Philippines",
    "React Developer",
    "TypeScript",
    "PHP Developer",
    "Laravel Developer",
    "Civentral",
    "SariSari App",
    "SoleVerse",
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
    title: "Joshua Arncel Sierra — Full Stack Developer",
    description:
      "Full Stack Developer and 4th-year BSIT student based in Manila, Philippines. Building real-world web and mobile applications.",
    url: SITE_URL,
    siteName: "Joshua Arncel Sierra",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Joshua Arncel Sierra — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Arncel Sierra — Full Stack Developer",
    description:
      "Full Stack Developer and 4th-year BSIT student based in Manila, Philippines. Building real-world web and mobile applications.",
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
    "Joshua Sierra Developer",
    "Joshua Sierra AI Engineer",
  ],
  jobTitle: "AI & Full-Stack Software Engineer",
  description:
    "AI & Full-Stack Software Engineer based in Manila, Philippines. Specializing in intelligent web applications, AI integration, Next.js, TypeScript, and full-stack software development.",
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
      name: "Civentral",
      url: "https://healthsanitation.civentral.tech",
    },
    {
      "@type": "Organization",
      name: "Roppets",
      url: "https://roppets.vercel.app",
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
    "Artificial Intelligence",
    "AI Engineering",
    "Machine Learning Applications",
    "Software Engineering",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "React Native",
    "Mobile App Development",
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

const jsonLdBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `${SITE_URL}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Experience",
      item: `${SITE_URL}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Tech Stack",
      item: `${SITE_URL}/#stack`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Workspace & Gear",
      item: `${SITE_URL}/gear`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Contact",
      item: `${SITE_URL}/#contact`,
    },
  ],
};

const jsonLdProfilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-01-01T00:00:00+08:00",
  dateModified: "2026-10-24T12:00:00+08:00",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
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
