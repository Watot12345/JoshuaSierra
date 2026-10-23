"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import type { ContactFormResponse } from "@/types/portfolio";

export function BrylContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      hp_field: String(formData.get("hp_field") ?? ""),
    };

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: ContactFormResponse = await res.json();
      if (data.success) {
        setStatus("success");
        setFeedback(data.message);
        form.reset();
      } else {
        setStatus("error");
        setFeedback(data.message);
      }
    } catch {
      setStatus("error");
      setFeedback("Failed to send message. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="py-12">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          07 — get in touch
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          direct message
        </span>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          {/* Direct channels */}
          <div>
            <h3 className="font-mono text-sm font-bold text-foreground">
              Direct Channels
            </h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Open to full-time roles, freelance platforms, and technical consulting.
            </p>

            <div className="mt-5 flex flex-col gap-3 font-mono text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2.5 text-foreground hover:underline truncate"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2.5 text-foreground hover:underline"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span>{profile.phone}</span>
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>Manila, Philippines</span>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="mt-5 pt-4 border-t border-border">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-1.5">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:text-foreground"
                    >
                      <Icon className="h-3 w-3" />
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <input
              type="text"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              className="hidden opacity-0 pointer-events-none absolute w-0 h-0"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="bryl-name" className="block font-mono text-[11px] text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  id="bryl-name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="bryl-email" className="block font-mono text-[11px] text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  id="bryl-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bryl-subject" className="block font-mono text-[11px] text-muted-foreground mb-1">
                Subject
              </label>
              <input
                id="bryl-subject"
                name="subject"
                required
                placeholder="Software Engineer Role / Project"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="bryl-message" className="block font-mono text-[11px] text-muted-foreground mb-1">
                Message
              </label>
              <textarea
                id="bryl-message"
                name="message"
                required
                rows={4}
                placeholder="Hi Joshua, we would like to talk about..."
                className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-xs font-mono font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>{feedback}</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-2.5 text-xs font-mono text-destructive">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{feedback}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-14 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Joshua Sierra</span>

        {/* Social Icons Strip in Footer */}
        <div className="flex items-center gap-2">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-muted hover:text-foreground"
                title={`${s.label} (${s.username})`}
                aria-label={s.label}
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>

        <span>Engineered with Next.js & TypeScript</span>
      </footer>
    </section>
  );
}
