"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import {
  Sparkles,
  X,
  Send,
  Loader2,
  RotateCcw,
  Bot,
  User,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const QUICK_QUESTIONS = [
  "Are you available for an internship (OJT)?",
  "What are your top production & AI systems?",
  "What is your tech stack and workstation setup?",
];

const INITIAL_MESSAGE: Message = {
  id: "welcome-msg",
  role: "assistant",
  content:
    "Hey! I'm Joshua. Feel free to ask me anything about my projects (like [Soleverse](https://sole-verse-chronos-main.vercel.app/) and [Civentral](https://healthsanitation.civentral.tech/)), my tech stack, or my availability for internships (OJT) and software roles.",
};

function parseInline(text: string, onClose: () => void, isUser: boolean) {
  // Matches markdown images ![alt](src), markdown links [label](url), and bold **text**
  const regex = /(!\[[^\]]*\]\([^)]+\)|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Check if markdown image ![alt](src)
    const imgMatch = part.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      const [, alt, src] = imgMatch;
      return (
        <span key={index} className="block my-2 overflow-hidden rounded-xl border border-border shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt || "Image"}
            className="w-full max-w-[220px] h-auto object-cover rounded-xl"
            loading="lazy"
          />
        </span>
      );
    }

    // Check if markdown link [label](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      const isInternal = url.startsWith("#");
      const isExternal = url.startsWith("http://") || url.startsWith("https://");

      if (isInternal) {
        return (
          <a
            key={index}
            href={url}
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setTimeout(() => {
                const el = document.querySelector(url);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 120);
            }}
            className={cn(
              "font-medium underline underline-offset-2 transition-colors cursor-pointer",
              isUser
                ? "text-primary-foreground hover:opacity-80"
                : "text-primary hover:text-primary/80 decoration-primary/40"
            )}
          >
            {label}
          </a>
        );
      }

      return (
        <a
          key={index}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={cn(
            "font-medium underline underline-offset-2 transition-colors inline-flex items-baseline gap-0.5",
            isUser
              ? "text-primary-foreground hover:opacity-80"
              : "text-primary hover:text-primary/80 decoration-primary/40"
          )}
        >
          <span>{label}</span>
          {isExternal && <span className="text-[10px] select-none">↗</span>}
        </a>
      );
    }

    // Check if bold **text**
    const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
    if (boldMatch) {
      return (
        <strong
          key={index}
          className={cn("font-semibold", isUser ? "text-primary-foreground" : "text-foreground")}
        >
          {boldMatch[1]}
        </strong>
      );
    }

    // Standard text
    return <span key={index}>{part}</span>;
  });
}

function FormattedContent({
  content,
  isUser,
  onClose,
}: {
  content: string;
  isUser: boolean;
  onClose: () => void;
}) {
  // Strip multi-asterisk anomalies
  const sanitized = content
    .replace(/\*{4,}/g, "")
    .replace(/\*{3}/g, "**");

  const lines = sanitized.split("\n");

  return (
    <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // Bullet list item
        if (/^[-*•]\s+/.test(trimmed)) {
          const itemText = trimmed.replace(/^[-*•]\s+/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-1 my-0.5">
              <span
                className={cn(
                  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                  isUser ? "bg-primary-foreground/70" : "bg-primary"
                )}
              />
              <div className="flex-1">
                {parseInline(itemText, onClose, isUser)}
              </div>
            </div>
          );
        }

        // Numbered list item
        const numMatch = trimmed.match(/^(\d+\.)\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-1.5 pl-1 my-0.5">
              <span
                className={cn(
                  "shrink-0 font-mono text-xs font-semibold",
                  isUser ? "text-primary-foreground/80" : "text-primary"
                )}
              >
                {numMatch[1]}
              </span>
              <div className="flex-1">
                {parseInline(numMatch[2], onClose, isUser)}
              </div>
            </div>
          );
        }

        // Standard paragraph
        return (
          <p key={idx}>
            {parseInline(line, onClose, isUser)}
          </p>
        );
      })}
    </div>
  );
}

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AiAssistantModal({ isOpen, onClose }: AiAssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSend = async (questionText?: string) => {
    const query = (questionText || input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: newMessages.slice(-6).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to receive reply");
      }

      const data = await res.json();
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "Thank you for asking! Feel free to reach out to Joshua directly at joshuaarncel@gmail.com.",
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content:
            "I'm temporarily unable to reach the server. I am actively available for Software Engineering Internships (OJT) and full-stack positions. Feel free to email me directly at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative flex flex-col w-full max-w-xl max-h-[88vh] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5 bg-muted/40">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card overflow-hidden shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/favicon.svg"
                alt="Joshua Sierra Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
                Joshua Sierra
              </h3>
              <p className="font-mono text-[10px] text-muted-foreground truncate">
                Interactive Portfolio Q&amp;A · Ask me anything
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              title="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Quick FAQ Suggestion Chips */}
        <div className="border-b border-border/60 bg-muted/20 px-4 py-2.5 overflow-x-auto no-scrollbar">
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Suggested Questions:
          </p>
          <div className="flex items-center gap-1.5 flex-nowrap sm:flex-wrap">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                disabled={isLoading}
                onClick={() => handleSend(q)}
                className="shrink-0 rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-foreground hover:border-foreground/30 hover:bg-muted transition-colors disabled:opacity-50 text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 min-h-[220px]">
          {messages.map((m) => {
            const isUser = m.role === "user";
            return (
              <div
                key={m.id}
                className={cn(
                  "flex items-start gap-2.5",
                  isUser ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs shadow-xs overflow-hidden",
                    isUser
                      ? "border-primary/30 bg-primary text-primary-foreground"
                      : "border-border bg-card"
                  )}
                >
                  {isUser ? (
                    <User className="h-3.5 w-3.5" />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src="/favicon.svg"
                      alt="Joshua Sierra"
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>

                <div
                  className={cn(
                    "max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm shadow-xs",
                    isUser
                      ? "bg-primary text-primary-foreground rounded-tr-xs"
                      : "border border-border bg-card text-foreground rounded-tl-xs"
                  )}
                >
                  <FormattedContent content={m.content} isUser={isUser} onClose={onClose} />
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-card overflow-hidden shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/favicon.svg"
                  alt="Joshua Sierra"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs text-muted-foreground shadow-xs">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
                <span className="font-mono text-xs">Joshua is typing...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Footer */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-border p-3 sm:p-3.5 bg-muted/30 flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about Joshua's skills, OJT, or projects..."
            disabled={isLoading}
            className="flex-1 rounded-xl border border-border bg-card px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 transition-opacity shadow-xs"
            title="Send Message"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-3.5 w-3.5" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
