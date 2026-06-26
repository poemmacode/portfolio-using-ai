"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t.about.heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">
              {t.about.heading.split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={100}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=700&fit=crop"
                  alt="Code on a screen"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-5">
              <p className="text-fg-primary leading-relaxed text-lg">
                {t.about.paragraphs[0]}
              </p>
              <p className="text-fg-secondary leading-relaxed">
                {t.about.paragraphs[1]}
              </p>
              <p className="text-fg-secondary leading-relaxed">
                {t.about.paragraphs[2]}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {t.about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="surface rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-fg-secondary mt-1 font-mono uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
