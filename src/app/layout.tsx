import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

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
    default: "Joshua Sierra — Software Engineer",
    template: "%s | Joshua Sierra",
  },
  description:
    "Portfolio of Joshua Sierra, a Software Engineer based in Manila, Philippines. Specializing in full-stack web platforms and cross-platform mobile apps. Co-Founder of Civentral.",
  keywords: [
    "Joshua Sierra",
    "Joshua Arncel Sierra",
    "Joshua Sierra Software Engineer",
    "Joshua Sierra Developer",
    "Joshua Sierra Portfolio",
    "Joshua Sierra Manila",
    "Watot12345",
    "Software Engineer Philippines",
    "Full-Stack Developer Manila",
    "Next.js Developer Philippines",
    "React Developer",
    "TypeScript",
    "PHP Developer",
    "Civentral",
    "SariSari App",
    "PennyFlow",
  ],
  authors: [{ name: "Joshua Sierra", url: SITE_URL }],
  creator: "Joshua Sierra",
  publisher: "Joshua Sierra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
    title: "Joshua Sierra — Software Engineer",
    description:
      "Software Engineer based in Manila, Philippines. Shipping production web & mobile platforms serving real users.",
    url: SITE_URL,
    siteName: "Joshua Sierra — Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Joshua Sierra — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Sierra — Software Engineer",
    description:
      "Software Engineer based in Manila, Philippines. Shipping production web & mobile platforms.",
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
  name: "Joshua Sierra",
  alternateName: ["Joshua Arncel Sierra", "Watot12345", "Joshua Sierra Developer"],
  jobTitle: "Software Engineer",
  description:
    "Software Engineer based in Manila, Philippines, specializing in full-stack web platforms and cross-platform mobile apps.",
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manila",
    addressCountry: "Philippines",
  },
  email: "joshuaarncel@gmail.com",
  sameAs: [
    "https://github.com/Watot12345",
    "https://www.linkedin.com/in/joshua-arncel-sierra-8bb444275",
    "https://www.facebook.com/profile.php?id=61590879324960",
    "https://www.instagram.com/jus_wa143",
    "https://www.tiktok.com/@joshuasierra143",
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "React Native",
    "Flutter",
    "Mobile App Development",
  ],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Joshua Sierra Portfolio",
  alternateName: "Joshua Sierra Software Engineer",
  url: SITE_URL,
  author: {
    "@type": "Person",
    name: "Joshua Sierra",
  },
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
