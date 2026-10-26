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
  Mic,
  MicOff,
} from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

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
    "Hey! I'm Joshua. Feel free to ask me anything about my projects (like [Civentral](https://healthsanitation.civentral.tech/), [SariSari App](https://watot12345.github.io/sarisariApp/), and [Soleverse](https://sole-verse-chronos-main.vercel.app/)), my tech stack, or my availability for an internship (OJT) and full-stack developer roles.",
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
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const currentTranscriptRef = useRef<string>("");
  const handleSendRef = useRef<(text?: string) => void>(() => {});

  // Check speech recognition capability on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSupport = !!(
        window.SpeechRecognition || window.webkitSpeechRecognition
      );
      setIsSpeechSupported(hasSupport);
    }
  }, []);

  const sendRecordedTranscript = () => {
    const text = currentTranscriptRef.current.trim();
    if (text) {
      currentTranscriptRef.current = "";
      handleSendRef.current(text);
    }
  };

  const stopListening = (shouldAutoSend = false) => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      try {
        recognitionRef.current.abort();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    setIsListening(false);

    if (shouldAutoSend) {
      sendRecordedTranscript();
    } else {
      currentTranscriptRef.current = "";
    }
  };

  const startListening = () => {
    setSpeechError(null);
    currentTranscriptRef.current = "";
    if (typeof window === "undefined") return;

    const SpeechRecognitionClass =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setSpeechError("Speech recognition is not supported on this browser.");
      return;
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }

      // Instantiate fresh instance synchronously on user touch/click for mobile security policy
      const recognition = new SpeechRecognitionClass();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
      };

      recognition.onresult = (event: any) => {
        let transcript = "";
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript) {
          currentTranscriptRef.current = transcript;
          setInput(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event?.error);
        setIsListening(false);
        currentTranscriptRef.current = "";
        if (event?.error === "not-allowed") {
          setSpeechError(
            "Microphone permission blocked. Please allow mic access in browser settings."
          );
        } else if (event?.error === "no-speech") {
          setSpeechError(null);
        } else if (event?.error === "network") {
          setSpeechError("Network error. Please check your internet connection.");
        } else if (event?.error) {
          setSpeechError(`Voice error: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        recognitionRef.current = null;
        // Auto-send transcribed text when speech recognition finishes
        sendRecordedTranscript();
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error("Error starting speech recognition:", err);
      setIsListening(false);
      currentTranscriptRef.current = "";
      setSpeechError("Could not start microphone. Please check permissions.");
    }
  };

  const toggleListening = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (isListening) {
      // Tap while listening stops and auto-sends captured text
      stopListening(true);
    } else {
      startListening();
    }
  };

  // Stop listening if modal is closed (without auto-sending)
  useEffect(() => {
    if (!isOpen && isListening) {
      stopListening(false);
    }
  }, [isOpen, isListening]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
          inputRef.current?.focus();
        }
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
    currentTranscriptRef.current = "";
    stopListening(false);
    setSpeechError(null);

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

  handleSendRef.current = handleSend;

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

        {/* Quick FAQ Suggestion Questions (Vertical: top-to-bottom) */}
        <div className="border-b border-border/60 bg-muted/20 px-4 py-2">
          <p className="mb-1.5 font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground select-none">
            Suggested Questions:
          </p>
          <div className="flex flex-col gap-1 w-full">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                disabled={isLoading}
                onClick={() => handleSend(q)}
                className="w-full text-left rounded-lg border border-border/70 bg-card/80 px-2.5 py-1.5 font-mono text-[10.5px] text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted active:scale-[0.99] transition-all disabled:opacity-50 select-none cursor-pointer flex items-center justify-between gap-2 group shadow-2xs"
              >
                <span className="leading-snug truncate">{q}</span>
                <span className="text-[10px] text-muted-foreground group-hover:text-foreground shrink-0 opacity-60 group-hover:opacity-100">
                  ↗
                </span>
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

        {/* Speech Error Banner (e.g. Permission Denied) */}
        {speechError && (
          <div className="flex items-center justify-between gap-2 border-t border-red-500/20 bg-red-500/10 px-4 py-2 font-mono text-[11px] text-red-600 dark:text-red-400">
            <span className="truncate">{speechError}</span>
            <button
              type="button"
              onClick={() => setSpeechError(null)}
              className="p-1 hover:opacity-75 cursor-pointer shrink-0"
              title="Dismiss error"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Input Footer with Highlighted Chat Box & Speech-to-Text */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-border p-3 sm:p-3.5 bg-muted/40 flex items-center gap-2"
        >
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening
                  ? "Listening... speak now (auto-sends when done)"
                  : "Ask a question about Joshua's skills, OJT, or projects..."
              }
              disabled={isLoading}
              className={cn(
                "w-full rounded-xl border-2 bg-background px-3.5 py-2 text-base sm:text-sm text-foreground transition-all duration-150 shadow-xs focus:outline-none",
                isListening
                  ? "border-emerald-500/80 ring-2 ring-emerald-500/25 placeholder:text-emerald-600 dark:placeholder:text-emerald-400"
                  : "border-primary/25 placeholder:text-muted-foreground/70 hover:border-primary/45 focus:border-primary focus:ring-2 focus:ring-primary/20"
              )}
            />
          </div>

          {/* Standalone Mic Button - Optimized for Mobile Touch & Desktop */}
          <button
            type="button"
            onClick={toggleListening}
            onPointerDown={(e) => e.stopPropagation()}
            disabled={isLoading}
            title={
              isListening
                ? "Listening... tap to send or stop"
                : isSpeechSupported
                ? "Voice to text (Speech Recognition)"
                : "Speech recognition not supported in this browser"
            }
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-150 select-none active:scale-95 touch-manipulation cursor-pointer disabled:opacity-40",
              isListening
                ? "bg-emerald-500 text-white border-emerald-600 animate-pulse shadow-md ring-2 ring-emerald-500/30"
                : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted shadow-2xs"
            )}
          >
            {isListening ? (
              <MicOff className="h-4 w-4" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
          </button>

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-all duration-150 shadow-xs active:scale-95 cursor-pointer touch-manipulation"
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
