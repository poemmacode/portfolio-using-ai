"use client";

import { useI18n } from "@/lib/i18n";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 text-left px-6 max-w-3xl mx-auto w-full">
        <div className="animate-fade-in-up">
          <div className="font-mono text-sm text-fg-secondary mb-6 tracking-wide">
            <span className="text-accent">$</span> whoami
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 font-[family-name:var(--font-jetbrains)]">
            {t.hero.name}
          </h1>

          <p className="text-xl md:text-2xl text-accent font-mono mb-6">
            {t.hero.greeting}
          </p>

          <p className="text-lg text-fg-secondary max-w-xl leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          <span className="inline-block w-[2px] h-5 bg-accent animate-cursor-blink align-middle" />
        </div>

        <div className="animate-fade-in-up [animation-delay:0.15s] opacity-0 flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-accent hover:bg-accent-light text-bg-deep font-semibold transition-colors duration-200"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/10 hover:border-accent/40 hover:bg-white/[0.03] text-fg-primary font-medium transition-all duration-200"
          >
            {t.hero.cta2}
          </a>
          <ResumeDownloadButton variant="hero" />
        </div>
      </div>
    </section>
  );
}
