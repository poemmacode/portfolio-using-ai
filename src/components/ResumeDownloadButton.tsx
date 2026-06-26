"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

interface ResumeDownloadButtonProps {
  variant?: "hero" | "nav" | "contact";
}

export default function ResumeDownloadButton({
  variant = "hero",
}: ResumeDownloadButtonProps) {
  const { t, lang } = useI18n();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [PDFDownloadLink, setPDFDownloadLink] = useState<any>(null);
  const [ResumePDF, setResumePDF] = useState<React.ComponentType<{ t: typeof t }> | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([
      import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
      import("./ResumePDF").then((m) => m.default),
    ]).then(([link, pdf]) => {
      setPDFDownloadLink(() => link);
      setResumePDF(() => pdf);
    });
  }, []);

  const fileName =
    lang === "es" ? "Emma_Estrada_CV.pdf" : "Emma_Estrada_Resume.pdf";

  const label =
    variant === "hero"
      ? t.hero.downloadCta
      : variant === "contact"
        ? t.contact.downloadCta
        : t.resume.downloadLabel;

  if (!PDFDownloadLink || !ResumePDF) {
    return (
      <PlaceholderButton variant={variant} label={label} />
    );
  }

  const doc = <ResumePDF t={t} />;

  return (
    <PDFDownloadLink
      document={doc}
      fileName={fileName}
      onMouseEnter={() => setReady(true)}
    >
      {({ loading }: { loading: boolean }) => {
        if (variant === "nav") {
          return (
            <button
              disabled={loading || !ready}
              className="text-fg-secondary hover:text-accent transition-colors duration-200 disabled:opacity-50 cursor-pointer"
              aria-label={label}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          );
        }

        if (variant === "hero") {
          return (
            <button
              disabled={loading || !ready}
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/10 hover:border-accent/40 hover:bg-white/[0.03] text-fg-primary font-medium transition-all duration-200 disabled:opacity-50 cursor-pointer"
            >
              {loading ? "..." : label}
            </button>
          );
        }

        return (
          <button
            disabled={loading || !ready}
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-accent hover:bg-accent-light text-bg-deep font-semibold transition-colors duration-200 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "..." : label}
          </button>
        );
      }}
    </PDFDownloadLink>
  );
}

function PlaceholderButton({
  variant,
  label,
}: {
  variant: string;
  label: string;
}) {
  if (variant === "nav") {
    return (
      <button disabled className="text-fg-secondary opacity-50" aria-label={label}>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>
    );
  }

  if (variant === "hero") {
    return (
      <button
        disabled
        className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/10 text-fg-primary font-medium opacity-50 cursor-pointer"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      disabled
      className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-accent text-bg-deep font-semibold opacity-50 cursor-pointer"
    >
      {label}
    </button>
  );
}
