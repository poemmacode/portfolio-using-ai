"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

const navLinks = [
  { href: "#about", key: "about" as const },
  { href: "#skills", key: "skills" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#education", key: "education" as const },
  { href: "#contact", key: "contact" as const },
];

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-deep/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-bold font-[family-name:var(--font-jetbrains)] text-fg-primary hover:text-accent transition-colors"
        >
          {t.hero.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-200"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-fg-secondary hover:text-fg-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-deep/95 backdrop-blur-md border-t border-white/5">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="pt-2 border-t border-white/5">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
