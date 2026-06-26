"use client";

import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

function getLevelColor(level: string) {
  if (level === "Expert") return "bg-accent/15 text-accent-light border border-accent/20";
  return "bg-white/[0.03] text-fg-secondary border border-white/5";
}

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24 px-6 bg-bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t.skills.heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">
              {t.skills.heading.split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {t.skills.categories.map((category, idx) => (
            <ScrollReveal key={category.title} delay={idx * 100}>
              <div className="surface rounded-xl p-6 hover:border-white/10 transition-colors duration-200 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${getLevelColor(skill.level)}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
