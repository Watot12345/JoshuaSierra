import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Sierra — Full-Stack Software Engineer",
  description:
    "Portfolio of Joshua Sierra, a Full-Stack Software Engineer based in Manila, Philippines. Built a live government health platform (civentral.tech) serving 1,000+ citizens. Open for freelance & full-time opportunities.",
  keywords: [
    "Joshua Sierra",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "PHP Developer",
    "Manila Philippines",
    "Portfolio",
    "Civentral",
    "Government Web App",
  ],
  authors: [{ name: "Joshua Sierra" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Joshua Sierra — Full-Stack Software Engineer",
    description:
      "Built a live government health platform serving 1,000+ citizens while still in college. Open to freelance & partnerships.",
    url: "https://civentral.tech",
    siteName: "Joshua Sierra Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Sierra — Full-Stack Software Engineer",
    description: "Built a live government health platform serving 1,000+ citizens while still in college.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
