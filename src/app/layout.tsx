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
  title: "Joshua Sierra — Senior Full-Stack Engineer & UI Architect",
  description:
    "Award-winning portfolio of Joshua Sierra, a Senior Full-Stack Engineer crafting immersive digital experiences where engineering meets art. 8+ years building scalable, performant web applications.",
  keywords: [
    "Joshua Sierra",
    "Full-Stack Engineer",
    "Frontend Architect",
    "React",
    "Next.js",
    "TypeScript",
    "WebGL",
    "UI Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Joshua Sierra" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Joshua Sierra — Senior Full-Stack Engineer & UI Architect",
    description:
      "Award-winning portfolio. Immersive digital experiences where engineering meets art.",
    url: "https://joshuasierra.dev",
    siteName: "Joshua Sierra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Sierra — Senior Full-Stack Engineer",
    description: "Award-winning portfolio. Immersive digital experiences.",
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
