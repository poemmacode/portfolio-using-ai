"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const mailto = process.env.NEXT_PUBLIC_EMAIL || "poemmaestrada@gmail.com";
    const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(subject || "Contact from Portfolio")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;
    setStatus("success");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-fg-secondary mb-2"
            >
              {t.contact.nameLabel} *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/5 rounded-lg text-fg-primary placeholder-fg-secondary/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/30 transition-all text-sm"
              placeholder={t.contact.nameLabel}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-fg-secondary mb-2"
            >
              {t.contact.emailLabel} *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/5 rounded-lg text-fg-primary placeholder-fg-secondary/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/30 transition-all text-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-fg-secondary mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/5 rounded-lg text-fg-primary placeholder-fg-secondary/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/30 transition-all text-sm"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-fg-secondary mb-2"
          >
            {t.contact.messageLabel} *
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/5 rounded-lg text-fg-primary placeholder-fg-secondary/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/30 transition-all resize-none text-sm"
            placeholder={t.contact.messageLabel}
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-lg bg-accent hover:bg-accent-light text-bg-deep font-semibold transition-colors duration-200 cursor-pointer"
        >
          {t.contact.sendButton}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>

        {status === "success" && (
          <p className="text-accent text-sm">
            Opening your email client... If it didn&apos;t open, please email
            me directly.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">
            Please fill in all required fields.
          </p>
        )}
      </form>
    </ScrollReveal>
  );
}
