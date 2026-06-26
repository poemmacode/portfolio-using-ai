"use client";

import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const { t } = useI18n();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">{t.education.heading}</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="surface rounded-xl p-8 text-center max-w-md mx-auto">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {t.education.degree}
            </h3>
            <p className="text-accent-light font-medium text-sm mb-1">
              {t.education.institution}
            </p>
            <p className="text-fg-secondary text-xs font-mono">
              {t.education.year}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
