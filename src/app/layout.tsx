import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emma Estrada | Full-Stack Developer",
  description:
    "Full-Stack Developer with 8+ years of experience building web applications, APIs, enterprise integrations, and automation solutions.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Ruby on Rails",
    "Python",
    "PostgreSQL",
    "GraphQL",
    "Salesforce",
  ],
  authors: [{ name: "Emma Estrada" }],
  openGraph: {
    title: "Emma Estrada | Full-Stack Developer",
    description:
      "Full-Stack Developer with 8+ years of experience building web applications, APIs, enterprise integrations, and automation solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
