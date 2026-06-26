"use client";

import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-bg-surface/50">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                {t.contact.heading.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="gradient-text">
                  {t.contact.heading.split(" ").slice(-1)}
                </span>
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
              <p className="text-fg-secondary text-center max-w-xl mx-auto mb-12">
                {t.contact.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <ContactForm />

              <ScrollReveal delay={200}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t.contact.connect}
                    </h3>
                    <SocialLinks />
                  </div>

                  <div className="surface rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      {t.contact.quickInfo}
                    </h3>
                    <ul className="space-y-3 text-sm">
                      {t.contact.infoItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-fg-secondary"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
