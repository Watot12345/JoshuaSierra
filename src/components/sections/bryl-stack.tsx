"use client";

const STACK_CATEGORIES = [
  {
    name: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5 / CSS3", "Vite", "Bootstrap"],
  },
  {
    name: "Backend & APIs",
    skills: ["PHP", "Laravel", "Python", "Node.js", "REST APIs", "Redis"],
  },
  {
    name: "Mobile",
    skills: ["React Native", "Expo Go", "Flutter", "Cross-Platform UI"],
  },
  {
    name: "Database & Storage",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Database Schema Design"],
  },
  {
    name: "DevOps & Cloud",
    skills: ["Git", "GitHub Actions", "Docker", "Linux CLI", "Vercel", "AWS"],
  },
  {
    name: "Tools & AI Workflow",
    skills: ["Figma", "Postman", "Claude AI", "Gemini", "AI Prompt Engineering"],
  },
];

export function BrylStack() {
  return (
    <section id="stack" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          03 — stack
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          tools & technologies
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {STACK_CATEGORIES.map((category) => (
          <div key={category.name} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
            <span className="font-mono text-xs font-semibold text-foreground w-36 shrink-0">
              {category.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground shadow-xs hover:border-foreground/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
