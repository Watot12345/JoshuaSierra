import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { BackToTop } from "@/components/layouts/back-to-top";
import { AnimatedBackground } from "@/components/ui-custom/animated-background";
import { BrylHero } from "@/components/sections/bryl-hero";
import { BrylProjects } from "@/components/sections/bryl-projects";
import { BrylExperience } from "@/components/sections/bryl-experience";
import { BrylStack } from "@/components/sections/bryl-stack";
import { BrylGear } from "@/components/sections/bryl-gear";
import { BrylEducation } from "@/components/sections/bryl-education";
import { GithubContributions } from "@/components/sections/github-contributions";
import { BrylTestimonials } from "@/components/sections/bryl-testimonials";
import { BrylContact } from "@/components/sections/bryl-contact";

/**
 * Portfolio home — clean, formal, monochromatic layout inspired by Bryl Lim.
 * Features a fixed left sidebar on desktop (lg+), sticky navigation on mobile,
 * and a focused reading column delivering an authentic engineering narrative.
 */
export default function Home() {
  return (
    <>
      <AnimatedBackground />

      {/* Navigation (Fixed Left Sidebar on Desktop lg+, Sticky Header & Slide Drawer on Mobile) */}
      <SidebarNav />

      {/* Main Content Area: Offset by sidebar width on desktop */}
      <div className="min-h-screen lg:pl-60 xl:pl-64">
        <main className="mx-auto max-w-3xl px-5 sm:px-8 py-8 lg:py-14">
          <BrylHero />
          <BrylProjects />
          <BrylExperience />
          <BrylStack />
          <BrylGear />
          <BrylEducation />
          <GithubContributions />
          <BrylTestimonials />
          <BrylContact />
        </main>
      </div>

      <BackToTop />
    </>
  );
}
