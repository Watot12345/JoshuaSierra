import type { Metadata } from "next";
import { AnimatedBackground } from "@/components/ui-custom/animated-background";
import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { BackToTop } from "@/components/layouts/back-to-top";
import { ProjectsCatalog } from "@/components/sections/projects-catalog";

export const metadata: Metadata = {
  title: "All Projects & Repositories — Joshua Arncel Sierra",
  description:
    "Complete portfolio catalog of 17 software projects, live municipal systems, mobile apps, and open-source code built by Joshua Arncel Sierra.",
  alternates: {
    canonical: "https://joshuasierra.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Navigation */}
      <SidebarNav />

      {/* Main Content Area */}
      <div className="min-h-screen lg:pl-60 xl:pl-64">
        <main className="mx-auto max-w-4xl px-5 sm:px-8 py-8 lg:py-14">
          <ProjectsCatalog />
        </main>
      </div>

      <BackToTop />
    </>
  );
}
