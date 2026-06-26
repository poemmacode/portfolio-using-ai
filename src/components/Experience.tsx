"use client";

import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t.experience.heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">
              {t.experience.heading.split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-12">
            {t.experience.entries.map((exp, idx) => (
              <ScrollReveal key={exp.company} delay={idx * 150}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-2.5 h-2.5 bg-accent rounded-full -translate-x-1.5 mt-3 ring-4 ring-bg-deep z-10" />

                  {/* Content */}
                  <div className="flex-1 ml-12 md:ml-0">
                    <div className="surface rounded-xl p-6 hover:border-white/10 transition-colors duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-accent-light font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-fg-secondary font-mono whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-fg-secondary text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-accent mt-1.5 text-[10px]">
                              &#9654;
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-accent/10 text-accent-light text-xs rounded-lg font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
