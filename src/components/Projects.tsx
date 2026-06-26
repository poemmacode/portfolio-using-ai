"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 px-6 bg-bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t.projects.heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">
              {t.projects.heading.split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.entries.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 100}>
              <div className="surface rounded-xl overflow-hidden group hover:border-white/10 transition-colors duration-200 h-full flex flex-col">
                <div className="relative overflow-hidden h-44">
                  <Image
                    src={
                      project.title === "Enterprise Inventory Integration"
                        ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                        : project.title === "Reservation & Hospitality Platform"
                          ? "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop"
                          : project.title === "Customer Communications Engine"
                            ? "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                            : "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                    }
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-fg-secondary text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-accent-light flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                    {project.technologies.map((tech) => (
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
