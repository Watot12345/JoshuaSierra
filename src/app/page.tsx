import { LoadingScreen } from "@/components/layouts/loading-screen";
import { ScrollProgress } from "@/components/layouts/scroll-progress";
import { CustomCursor } from "@/components/layouts/custom-cursor";
import { Navbar } from "@/components/layouts/navbar";
import { BackToTop } from "@/components/layouts/back-to-top";
import { Footer } from "@/components/layouts/footer";
import { AnimatedBackground } from "@/components/ui-custom/animated-background";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { TechStack } from "@/components/sections/tech-stack";
import { GithubContributions } from "@/components/sections/github-contributions";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

/**
 * Portfolio home — a single-page, award-winning-style portfolio for
 * Joshua Sierra (Junior Full-Stack Software Engineer).
 */
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />

      <div className="relative flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <TechStack />
          <GithubContributions />
          <Services />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>

      <BackToTop />
    </>
  );
}
