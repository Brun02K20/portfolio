"use client"

import { Award, BookOpen, Brain, GraduationCap, Landmark, Sparkles } from "lucide-react"
import { useTranslation } from "react-i18next"
import SectionHeading from "@/components/section-heading"
import { Timeline, TimelineItem } from "@/components/timeline"

const UTN = "Universidad Tecnológica Nacional (UTN) - Argentina"

const education = [
  {
    periodKey: "education.degree0Period",
    degreeKey: "education.degree0",
    institution: UTN,
    inProgress: true,
    icon: Brain,
    beam: ["#22d3ee", "#a855f7"] as [string, string],
    subjects: [
      "education.subjects.computerVision",
      "education.subjects.nlp",
      "education.subjects.machineLearning",
      "education.subjects.deepLearning",
      "education.subjects.aiIntegration",
      "education.subjects.aiAgents",
      "education.subjects.neuralNetworks",
      "education.subjects.mlops",
    ],
  },
  {
    periodKey: "education.degree1Period",
    degreeKey: "education.degree1",
    institution: UTN,
    icon: GraduationCap,
    beam: ["#6366f1", "#ec4899"] as [string, string],
    subjects: [
      "education.subjects.dsAlgo",
      "education.subjects.dbSystems",
      "education.subjects.seQa",
      "education.subjects.webDev",
      "education.subjects.networks",
      "education.subjects.ai",
      "education.subjects.dataScience",
    ],
  },
  {
    period: "01.2022 - 12.2023",
    degreeKey: "education.degree2",
    institutionKey: "education.institutionPlatzi",
    icon: BookOpen,
    beam: ["#34d399", "#22d3ee"] as [string, string],
    subjects: ["React", "Node.js", "PostgreSQL", "Express.js", "JWT", "HTML/CSS", "GitHub", "Git", "VSCode", "GitHub Copilot"],
  },
  {
    period: "03.2021 - 12.2023",
    degreeKey: "education.degree3",
    institution: UTN,
    icon: Award,
    beam: ["#a855f7", "#22d3ee"] as [string, string],
    subjects: [
      "education.subjects.softwareDev",
      "education.subjects.systemsDesign",
      "education.subjects.databases",
      "education.subjects.systemsAnalysis",
      "education.subjects.backendApps",
    ],
  },
]

export default function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="04" icon={GraduationCap} title={t("education.title")} subtitle={t("education.subtitle")} />

        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.degreeKey}
              index={index}
              icon={edu.icon}
              beam={edu.beam}
              period={edu.periodKey ? t(edu.periodKey) : edu.period}
              badge={
                edu.inProgress && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-2.5 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-inset ring-cyan-400/30">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    {t("education.inProgress")}
                  </span>
                )
              }
            >
              <h3 className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-xl font-bold text-white transition-colors duration-300 group-hover:text-transparent">
                {t(edu.degreeKey)}
              </h3>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-zinc-400">
                <Landmark className="h-4 w-4 shrink-0 text-indigo-400" />
                {edu.institutionKey ? t(edu.institutionKey) : edu.institution}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {edu.subjects.map((subject) => (
                  <span key={subject} className="chip">
                    {subject.startsWith("education.") ? t(subject) : subject}
                  </span>
                ))}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
