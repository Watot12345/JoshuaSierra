"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import type { ContactFormResponse } from "@/types/portfolio";

type Status = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: undefined,
  },
];

/**
 * Contact section: split layout with contact info + social links
 * on the left and a validated form (POST /api/contact) on the right.
 */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
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
      setFeedback("Network error. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s create something{" "}
              <span className="text-gradient-fire">together</span>
            </>
          }
          description="Have a project in mind or just want to say hello? My inbox is always open. I'll get back to you within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white">Contact Information</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer a direct line? Reach me through any of these channels.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-crimson/30">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(18,18,18,0.6))",
                        }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="truncate text-sm font-medium text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      className="block transition-transform hover:scale-[1.02]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Follow Me
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-crimson/40 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl border border-white/10 p-6 sm:p-8"
            >
              {/* Spam Honeypot Field */}
              <input
                type="text"
                name="hp_field"
                tabIndex={-1}
                autoComplete="off"
                className="hidden opacity-0 pointer-events-none absolute w-0 h-0"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:border-crimson/50 focus:outline-none focus:ring-2 focus:ring-crimson/20"
                  />
                </Field>
                <Field label="Email Address" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:border-crimson/50 focus:outline-none focus:ring-2 focus:ring-crimson/20"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    minLength={3}
                    placeholder="Project inquiry"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:border-crimson/50 focus:outline-none focus:ring-2 focus:ring-crimson/20"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={6}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:border-crimson/50 focus:outline-none focus:ring-2 focus:ring-crimson/20"
                  />
                </Field>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #dc2626, #991b1b)",
                  boxShadow: "0 8px 25px -5px rgba(220,38,38,0.5)",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Feedback */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm"
                  style={{
                    backgroundColor: "rgba(34,197,94,0.1)",
                    borderColor: "rgba(34,197,94,0.3)",
                  }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                  <p className="text-green-200">{feedback}</p>
                </motion.div>
              ) : null}

              {status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm"
                  style={{
                    backgroundColor: "rgba(220,38,38,0.1)",
                    borderColor: "rgba(220,38,38,0.3)",
                  }}
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <p className="text-red-200">{feedback}</p>
                </motion.div>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
