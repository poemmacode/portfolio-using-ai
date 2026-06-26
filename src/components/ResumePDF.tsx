"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { Translations } from "@/lib/i18n/en";
import { getResumeData } from "@/lib/resumeData";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    borderBottom: "2 solid #1a1a1a",
    paddingBottom: 12,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: "#444",
    marginBottom: 6,
  },
  contactLine: {
    fontSize: 9,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 8,
    marginTop: 16,
    borderBottom: "1 solid #ccc",
    paddingBottom: 4,
  },
  summaryText: {
    fontSize: 10,
    color: "#333",
    lineHeight: 1.5,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 4,
  },
  expCompany: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  expRole: {
    fontSize: 10,
    color: "#444",
  },
  expPeriod: {
    fontSize: 9,
    color: "#666",
    fontFamily: "Helvetica-Oblique",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 8,
  },
  bullet: {
    width: 12,
    fontSize: 10,
    color: "#888",
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: "#333",
  },
  techLine: {
    fontSize: 9,
    color: "#555",
    marginTop: 4,
    fontFamily: "Helvetica-Oblique",
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingLeft: 8,
  },
  skillBullet: {
    width: 12,
    fontSize: 10,
    color: "#888",
  },
  skillCategory: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: "#333",
  },
  skillItems: {
    fontSize: 9.5,
    color: "#444",
    flex: 1,
  },
  projectTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 9.5,
    color: "#444",
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 9,
    color: "#666",
    fontFamily: "Helvetica-Oblique",
    marginBottom: 8,
  },
  eduDegree: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  eduInstitution: {
    fontSize: 10,
    color: "#444",
  },
  eduYear: {
    fontSize: 9,
    color: "#666",
  },
});

export default function ResumePDF({ t }: { t: Translations }) {
  const data = getResumeData(t);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.contactLine}>
            {data.email} | {data.linkedin}
          </Text>
        </View>

        {/* Professional Summary */}
        <Text style={styles.sectionTitle}>{t.resume.summary}</Text>
        <Text style={styles.summaryText}>{data.summary}</Text>

        {/* Work Experience */}
        <Text style={styles.sectionTitle}>{t.resume.workExperience}</Text>
        {data.experience.map((exp, i) => (
          <View key={i} style={{ marginBottom: 12 }}>
            <View style={styles.expHeader}>
              <View>
                <Text style={styles.expCompany}>{exp.company}</Text>
                <Text style={styles.expRole}>{exp.role}</Text>
              </View>
              <Text style={styles.expPeriod}>{exp.period}</Text>
            </View>
            {exp.highlights.map((h, j) => (
              <View key={j} style={styles.bulletRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{h}</Text>
              </View>
            ))}
            <Text style={styles.techLine}>
              Technologies: {exp.technologies.join(", ")}
            </Text>
          </View>
        ))}

        {/* Technical Skills */}
        <Text style={styles.sectionTitle}>{t.resume.technicalSkills}</Text>
        {data.skills.map((skill, i) => (
          <View key={i} style={styles.skillRow}>
            <Text style={styles.skillBullet}>•</Text>
            <Text style={styles.skillCategory}>{skill.category}: </Text>
            <Text style={styles.skillItems}>{skill.items.join(", ")}</Text>
          </View>
        ))}

        {/* Projects */}
        <Text style={styles.sectionTitle}>{t.resume.projects}</Text>
        {data.projects.map((proj, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={styles.projectTitle}>{proj.title}</Text>
            <Text style={styles.projectDesc}>{proj.description}</Text>
            <Text style={styles.projectTech}>
              {proj.technologies.join(", ")}
            </Text>
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionTitle}>{t.resume.education}</Text>
        <Text style={styles.eduDegree}>{data.education.degree}</Text>
        <Text style={styles.eduInstitution}>
          {data.education.institution}
        </Text>
        <Text style={styles.eduYear}>{data.education.year}</Text>
      </Page>
    </Document>
  );
}
