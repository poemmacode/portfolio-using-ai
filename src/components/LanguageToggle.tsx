"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center rounded-full border border-white/10 overflow-hidden text-xs font-mono">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-all duration-200 cursor-pointer ${
          lang === "en"
            ? "bg-accent text-white"
            : "text-zinc-400 hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-2.5 py-1 transition-all duration-200 cursor-pointer ${
          lang === "es"
            ? "bg-accent text-white"
            : "text-zinc-400 hover:text-white"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
