const FAQ_ITEMS = [
  {
    question: "Who is Joshua Arncel Sierra?",
    answer:
      "Joshua Arncel Sierra is a Full-Stack Software Engineer and 4th-year BSIT student at Bestlink College of the Philippines in Manila. He builds production web, mobile, and civic software platforms—including Civentral, SariSari App, SJDM Legislative Archive, SoleVerse, and Roppets CRM.",
  },
  {
    question: "What tech stack does Joshua Sierra specialize in?",
    answer:
      "He specializes in Next.js, React, TypeScript, Tailwind CSS, Node.js, PHP/Laravel, Supabase, PostgreSQL, MySQL, and cross-platform mobile development with React Native (Expo) and Flutter (Dart).",
  },
  {
    question: "What live production systems has Joshua Sierra built?",
    answer:
      "His deployed platforms include Civentral Health & Sanitation Portal (serving 1,000+ Caloocan City residents), SJDM Legislative Research & Ordinance Archive, SoleVerse eCommerce, Roppets CRM & Booking Portal, BCP Student Attendance Portal, and SariSari App.",
  },
  {
    question: "Is Joshua Sierra available for Software Engineering OJT or full-stack roles?",
    answer:
      "Yes. Joshua Arncel Sierra is actively open to Software Engineering Internships (OJT), junior full-stack engineering roles, and freelance web or mobile development collaborations based in Manila or remote.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function BrylFaq() {
  return (
    <section id="faq" className="py-12 border-b border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        07 — faq
      </h2>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-foreground/30"
          >
            <summary className="cursor-pointer list-none font-mono text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between gap-3">
              <span>{item.question}</span>
              <span className="font-mono text-xs text-muted-foreground group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
