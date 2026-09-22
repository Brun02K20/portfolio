"use client"

import type { CSSProperties, ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { BookOpen, Cloud, Code, Database, Monitor, Server, Wrench } from "lucide-react"
import { useTranslation } from "react-i18next"
import SectionHeading from "@/components/section-heading"
import Reveal from "@/components/reveal"

// importo iconos
// Frontend
import Astro from "@/icons/Astro"
import Bootstrap from "@/icons/Bootstrap"
import Chartjs from "@/icons/Chartjs"
import CSS from "@/icons/CSS"
import HTML5 from "@/icons/HTML"
import JavaScript from "@/icons/Javascript"
import Nextjs from "@/icons/Next"
import React from "@/icons/ReactIcon"
import Shadcnui from "@/icons/Shadcn"
import TailwindCSS from "@/icons/Tailwind"
import Expo from "@/icons/Expo"
// Mobile

// Backend
import Nodejs from "@/icons/Nodejs"
import Expressjs from "@/icons/Express"
import Dotenv from "@/icons/Dotenv"
import FastAPI from "@/icons/FastApi"
import C from "@/icons/CSharp"
import JWT from "@/icons/JWT"
import NestJS from "@/icons/Nest"
import Python from "@/icons/Python"
import MicrosoftNET from "@/icons/aspnet"
import TypeScript from "@/icons/Typescript"
import { Auth0 } from "@/icons/Auth0"

// DataBase
import MySQL from "@/icons/MySQL"
import { MongoDB } from "@/icons/mongo"
import PostgreSQL from "@/icons/Postgre"
import Sequelize from "@/icons/Sequelize"
import SQLite from "@/icons/SQLite"
import MicrosoftSQLServer from "@/icons/SQLServer"

// Tools
import Atlassian from "@/icons/Atlassian"
import Canva from "@/icons/Canva"
import Docker from "@/icons/Docker"
import Firebase from "@/icons/FireBase"
import Git from "@/icons/Git"
import GitHub from "@/icons/Github"
import GitLab from "@/icons/Gitlab"
import GitHubCopilot from "@/icons/Copilot"
import OpenAI from "@/icons/OpenAI"
import Postman from "@/icons/Postman"
import Supabase from "@/icons/SupaBase"
import Swagger from "@/icons/Swagger"
import Vercel from "@/icons/Vercel"
import PM2 from "@/icons/PM2"
import Linux from "@/icons/Linux"
import ClaudeAI from "@/icons/Claude"
import { MercadoPago } from "@/icons/mercadopago"
import { Groq } from "@/icons/groq"
import { Google as GoogleAuth } from "@/icons/googleauth"
import { ModelContextProtocol } from "@/icons/ModelContextProtocol"
import { AmazonWebServices } from "@/icons/AmazonWebServices"

type Category = {
  titleKey: string
  icon: LucideIcon
  /** Tailwind gradient stops for the category icon. */
  accent: string
  /** Colours of the rotating border beam. */
  beam: [string, string]
  skills: { name: string; icon: ReactNode }[]
}

const skillCategories: Category[] = [
  {
    titleKey: "skills.frontend",
    icon: Monitor,
    accent: "from-cyan-400 to-blue-500",
    beam: ["#22d3ee", "#3b82f6"],
    skills: [
      { name: "React", icon: <React /> },
      { name: "Next.js", icon: <Nextjs /> },
      { name: "Astro", icon: <Astro /> },
      { name: "Tailwind CSS", icon: <TailwindCSS /> },
      { name: "Bootstrap", icon: <Bootstrap /> },
      { name: "shadcn/ui", icon: <Shadcnui /> },
      { name: "Chart.js", icon: <Chartjs /> },
      { name: "HTML5", icon: <HTML5 /> },
      { name: "CSS3", icon: <CSS /> },
      { name: "JavaScript", icon: <JavaScript /> },
      { name: "Expo", icon: <Expo /> },
    ],
  },
  {
    titleKey: "skills.backend",
    icon: Server,
    accent: "from-emerald-400 to-teal-500",
    beam: ["#34d399", "#14b8a6"],
    skills: [
      { name: "Node.js", icon: <Nodejs /> },
      { name: "Express", icon: <Expressjs /> },
      { name: "NestJS", icon: <NestJS /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "dotenv", icon: <Dotenv /> },
      { name: "Python", icon: <Python /> },
      { name: "FastAPI", icon: <FastAPI /> },
      { name: "JWT", icon: <JWT /> },
      { name: "Auth0", icon: <Auth0 /> },
    ],
  },
  {
    titleKey: "skills.database",
    icon: Database,
    accent: "from-amber-400 to-orange-500",
    beam: ["#fbbf24", "#f97316"],
    skills: [
      { name: "MySQL", icon: <MySQL /> },
      { name: "MongoDB", icon: <MongoDB /> },
      { name: "PostgreSQL", icon: <PostgreSQL /> },
      { name: "Sequelize", icon: <Sequelize /> },
      { name: "SQLite", icon: <SQLite /> },
      { name: "Microsoft SQL Server", icon: <MicrosoftSQLServer /> },
    ],
  },
  {
    titleKey: "skills.tools",
    icon: Wrench,
    accent: "from-purple-400 to-pink-500",
    beam: ["#a855f7", "#ec4899"],
    skills: [
      { name: "Git", icon: <Git /> },
      { name: "GitHub", icon: <GitHub /> },
      { name: "GitLab", icon: <GitLab /> },
      { name: "GitHub Copilot", icon: <GitHubCopilot /> },
      { name: "OpenAI", icon: <OpenAI /> },
      { name: "Claude AI", icon: <ClaudeAI /> },
      { name: "Groq", icon: <Groq /> },
      { name: "MCP", icon: <ModelContextProtocol /> },
      { name: "Postman", icon: <Postman /> },
      { name: "Swagger", icon: <Swagger /> },
      { name: "Atlassian", icon: <Atlassian /> },
      { name: "Mercado Pago", icon: <MercadoPago /> },
      { name: "Google Auth", icon: <GoogleAuth /> },
    ],
  },
  {
    titleKey: "skills.cloud",
    icon: Cloud,
    accent: "from-sky-400 to-indigo-500",
    beam: ["#38bdf8", "#6366f1"],
    skills: [
      { name: "AWS", icon: <AmazonWebServices /> },
      { name: "Docker", icon: <Docker /> },
      { name: "Linux", icon: <Linux /> },
      { name: "PM2", icon: <PM2 /> },
      { name: "Firebase", icon: <Firebase /> },
      { name: "Vercel", icon: <Vercel /> },
      { name: "Supabase", icon: <Supabase /> },
    ],
  },
  {
    titleKey: "skills.learning",
    icon: BookOpen,
    accent: "from-rose-400 to-red-500",
    beam: ["#fb7185", "#ef4444"],
    skills: [
      { name: "C#", icon: <C /> },
      { name: "ASP .NET", icon: <MicrosoftNET /> },
      { name: "Canva", icon: <Canva /> },
    ],
  },
]

const totalSkills = skillCategories.reduce((count, category) => count + category.skills.length, 0)

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02"
          icon={Code}
          title={t("skills.title")}
          subtitle={
            <>
              {t("skills.subtitle")}
              <span className="mt-4 block">
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white">
                  <span className="gradient-text-static text-base font-black">{totalSkills}</span>
                  {t("skills.count")}
                </span>
              </span>
            </>
          }
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.titleKey} delay={(index % 3) * 100}>
              <div
                className="border-beam glass rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-500/15"
                style={
                  {
                    "--beam-a": category.beam[0],
                    "--beam-b": category.beam[1],
                    "--beam-delay": `${-index * 1.3}s`,
                  } as CSSProperties
                }
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-lg shadow-black/30`}
                    >
                      <category.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold text-white">{t(category.titleKey)}</h3>
                  </div>
                  <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-400 ring-1 ring-inset ring-white/10">
                    {category.skills.length}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className="group flex flex-col items-center gap-2 rounded-xl px-1 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-125 [&_svg]:h-8 [&_svg]:w-8">
                        {skill.icon}
                      </span>
                      <span className="text-[11px] font-medium leading-tight text-zinc-400 transition-colors group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
