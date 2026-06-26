import type { Translations } from "./i18n/en";

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  summary: string;
  experience: {
    company: string;
    role: string;
    period: string;
    highlights: string[];
    technologies: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  };
}

export function getResumeData(t: Translations): ResumeData {
  return {
    name: t.hero.name,
    title: t.hero.greeting,
    email: process.env.NEXT_PUBLIC_EMAIL || "poemmaestrada@gmail.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/emma-estrada-oficial/",
    summary: t.about.paragraphs.join(" "),
    experience: t.experience.entries.map((exp) => ({
      company: exp.company,
      role: exp.role,
      period: exp.period,
      highlights: [...exp.highlights],
      technologies: [...exp.technologies],
    })),
    skills: t.skills.categories.map((cat) => ({
      category: cat.title,
      items: cat.skills.map((s) => s.name),
    })),
    projects: t.projects.entries.map((proj) => ({
      title: proj.title,
      description: proj.description,
      technologies: [...proj.technologies],
    })),
    education: {
      degree: t.education.degree,
      institution: t.education.institution,
      year: t.education.year,
    },
  };
}
