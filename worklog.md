---
Task ID: portfolio-1
Agent: main (Z.ai Code)
Task: Build a complete, production-quality award-winning developer portfolio website with React 19, TypeScript, Tailwind CSS, Framer Motion, React Icons. Dark black/crimson glassmorphism theme with animated hero, about, skills, tech stack, services, experience timeline, education, certifications, projects+details modal, testimonials carousel, contact form, footer, scroll progress bar, sticky navbar, loading screen, back-to-top, animated background.

Work Log:
- Adapted the requested Vite+DaisyUI stack to the available Next.js 16 + Tailwind 4 + shadcn/ui environment (per sandbox constraints) while preserving every design requirement.
- Installed react-icons for brand/social icons.
- Created src/types/portfolio.ts with 16 strongly-typed interfaces (no `any`).
- Created src/data/portfolio.ts with realistic mock data: profile (Adrian Mercer), 5 social links, 28 skills across 6 categories, 30 tech-stack items, 6 services, 4 experience entries, 2 education items, 6 certifications, 6 awards, 6 projects (with galleries/features/challenges/results), 6 testimonials, 4 languages, 3 blog previews.
- Rewrote src/app/globals.css with premium black/crimson theme: glassmorphism utilities, crimson gradients, glow effects, grid/dots backgrounds, custom scrollbar, 8 keyframe animations, reduced-motion support.
- Updated src/app/layout.tsx with portfolio metadata + forced dark class.
- Built 4 custom hooks: use-scroll-progress, use-active-section (IntersectionObserver), use-mouse-position, use-scroll-position.
- Built 6 reusable UI components: section-heading, glass-card, animated-text (FadeIn+AnimatedText), magnetic-button (cursor-tracking), tilt-card (3D tilt + glare), animated-background (floating orbs + grid + particles).
- Built 5 layout components: scroll-progress (crimson top bar), loading-screen (animated monogram), navbar (sticky glass + active-section highlight + mobile menu), back-to-top (appears after scroll), footer (CTA banner + links + sticky via flex-col + mt-auto).
- Built 11 section components: hero (parallax + stats + floating badges), about (bio + languages + awards), skills (category filter + animated bars), tech-stack (dual infinite marquees), services (tilt cards), experience (alternating timeline), education (cards), certifications (credential cards), projects (filterable grid + details modal with gallery/challenges/results), testimonials (auto-advancing carousel), contact (validated form + API integration).
- Built POST /api/contact route with server-side validation.
- Assembled src/app/page.tsx with min-h-screen flex flex-col wrapper for sticky footer.
- Fixed react-icons import errors (SiAdobexd, SiAdobephotoshop → TbPhoto/TbArtboard; HiCode/HiDeviceMobile → HiCodeBracket/HiDevicePhoneMobile).
- Fixed TiltCard conditional hook violation (hoisted useTransform to top level).
- Removed unused eslint-disable directives.
- Lint passes clean (0 errors, 0 warnings).
- Dev server returns 200.

Stage Summary:
- Production-ready single-page portfolio at / route.
- All 20 requested features implemented: Animated Hero, About, Skills, Tech Stack, Services, Experience Timeline, Education, Certifications, Featured Projects, Project Details (modal), Testimonials, Contact Form, Footer, Scroll Animations, Animated Background, Loading Screen, Scroll Progress Bar, Sticky Navbar, Dark Theme, Smooth Scrolling, Back To Top Button.
- Agent Browser verification passed: page renders, all sections present, skills filter works (8 frontend / 28 total), project modal opens/closes, testimonials carousel navigates, contact form submits successfully (API returns success message), mobile menu works, back-to-top scrolls to 0, navbar smooth-scrolls, footer structure correct (min-h-screen flex flex-col + flex-1 main).
- VLM visual verification confirmed: dark black + crimson theme, glassmorphism cards, sticky glassmorphic navbar, no rendering bugs, clean professional layout.
- Zero hydration errors, zero console errors.
