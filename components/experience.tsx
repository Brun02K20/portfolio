"use client"

import { Briefcase, Building2, ExternalLink, FileText, Rocket } from "lucide-react"
import { useTranslation } from "react-i18next"
import SectionHeading from "@/components/section-heading"
import CtaBanner from "@/components/cta-banner"
import { Timeline, TimelineItem } from "@/components/timeline"
import { ContactCta, DownloadCvCta } from "@/components/cta-buttons"
import { useCvUrl } from "@/hooks/use-cv"

const experiences = [
  {
    key: "cw",
    pointsCount: 2,
    current: true,
    website: "https://evinox.com.ar",
    icon: Rocket,
    beam: ["#22d3ee", "#a855f7"] as [string, string],
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "Sequelize",
      "Supabase",
      "Firebase",
      "Git",
      "GitHub",
      "GitHub Copilot",
      "OpenAI",
      "Postman",
      "VSCode",
      "SCRUM",
      "KANBAN",
    ],
  },
  {
    key: "engSsr",
    pointsCount: 3,
    icon: Briefcase,
    beam: ["#6366f1", "#ec4899"] as [string, string],
    technologies: [
      "React",
      "HTML",
      "CSS",
      "Materialize CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "Sequelize",
      "FastAPI",
      "Python",
      "Git",
      "GitHub",
      "GitHub Copilot",
      "OpenAI",
      "Postman",
      "VSCode",
      "PyCharm",
      "SCRUM",
      "KANBAN",
    ],
  },
  {
    key: "engJr",
    pointsCount: 5,
    icon: Building2,
    beam: ["#a855f7", "#22d3ee"] as [string, string],
    technologies: [
      "React",
      "HTML",
      "CSS",
      "Materialize CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "Sequelize",
      "Git",
      "GitHub",
      "Postman",
      "VSCode",
    ],
  },
]

export default function Experience() {
  const { t } = useTranslation()
  const cvUrl = useCvUrl()

  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01"
          icon={Briefcase}
          title={t("experience.title")}
          subtitle={
            <>
              {t("experience.subtitlePrefix")}{" "}
              <a
                href={cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text-static font-semibold underline decoration-pink-400/60 decoration-2 underline-offset-4 transition hover:decoration-pink-400"
              >
                {t("experience.subtitleLink")}
              </a>
              .
            </>
          }
        />

        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.key}
              index={index}
              icon={exp.icon}
              beam={exp.beam}
              period={t(`experience.items.${exp.key}.period`)}
              badge={
                exp.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    {t("experience.current")}
                  </span>
                )
              }
            >
              <h3 className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-xl font-bold text-white transition-colors duration-300 group-hover:text-transparent">
                {t(`experience.items.${exp.key}.position`)}
              </h3>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-zinc-400">
                <Building2 className="h-4 w-4 shrink-0 text-indigo-400" />
                {t(`experience.items.${exp.key}.company`)}
              </p>

              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-zinc-300">
                {Array.from({ length: exp.pointsCount }).map((_, pointIndex) => (
                  <li key={pointIndex} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400" />
                    <span>{t(`experience.items.${exp.key}.points.${pointIndex}`)}</span>
                  </li>
                ))}

                {exp.website && (
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                    <span>
                      {t(`experience.items.${exp.key}.linkLabel`)}{" "}
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                      >
                        {new URL(exp.website).host}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </span>
                  </li>
                )}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </TimelineItem>
          ))}
        </Timeline>

        <CtaBanner
          icon={FileText}
          title={t("experience.cta.title")}
          text={t("experience.cta.text")}
          actions={
            <>
              <DownloadCvCta label={t("experience.cta.button")} />
              <ContactCta label={t("experience.cta.secondary")} />
            </>
          }
        />
      </div>
    </section>
  )
}
