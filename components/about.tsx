"use client"

import type { CSSProperties } from "react"
import Image from "next/image"
import { ArrowRight, Bot, FolderOpen, Github, Linkedin, Rocket, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Cta, ContactCta, DownloadCvCta, IconCta } from "@/components/cta-buttons"
import Typewriter from "@/components/typewriter"
import { site } from "@/lib/site"
import { scrollToSection } from "@/lib/scroll"
import { cn } from "@/lib/utils"

const chipIcons = [Zap, Bot, Rocket]
const chipPositions = [
  "-left-3 top-8 animate-float",
  "-right-6 top-[38%] animate-float-delayed",
  "left-4 -bottom-3 animate-float-slow",
]

/** Entrance animation for the hero: runs on load, no scroll needed. */
const enter = (delay: number, className = "") => ({
  className: cn("animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700", className),
  style: { animationDelay: `${delay}ms` } as CSSProperties,
})

export default function About() {
  const { t } = useTranslation()
  const roles = t("about.roles", { returnObjects: true }) as string[]
  const chips = t("about.chips", { returnObjects: true }) as string[]

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8 lg:pb-16 lg:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* ------------------------------------------------------------ */}
        {/* Copy + CTAs                                                  */}
        {/* ------------------------------------------------------------ */}
        {/* On mobile the CTAs come right after the headline; the paragraphs follow. */}
        <div className="flex flex-col text-center lg:block lg:text-left">
          <div {...enter(0, "order-1")}>
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="glass group inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-sm font-medium text-emerald-200 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              {t("about.availability")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <p {...enter(100, "order-2 mt-8 text-lg font-medium text-zinc-400")}>
            {t("about.greeting")}
          </p>

          <h1
            {...enter(180, "order-3 mt-1 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl")}
          >
            <span className="gradient-text">{t("about.name")}</span>
          </h1>
          <p className="sr-only order-4">{t("about.role")}</p>

          {/* Two lines are reserved at every width: the job titles wrap on narrow
              columns and the box must not resize while the text is typed. */}
          <div
            {...enter(260, "order-5 mt-4 min-h-[4rem] text-2xl font-bold text-white sm:min-h-[4.5rem] sm:text-3xl")}
          >
            <Typewriter words={roles} />
          </div>

          <div
            {...enter(340, "order-8 mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg lg:mx-0")}
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p className="text-zinc-400">{t("about.p3")}</p>
          </div>

          <div
            {...enter(420, "order-6 mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-10 lg:justify-start")}
          >
            <DownloadCvCta label={t("about.downloadCv")} size="lg" />
            <ContactCta label={t("about.contactMe")} size="lg" />
            <Cta variant="ghost" size="lg" onClick={() => scrollToSection("#projects")}>
              <FolderOpen />
              {t("about.projects")}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Cta>
            <div className="flex items-center gap-2 sm:ml-1">
              <IconCta href={site.github} label="GitHub">
                <Github />
              </IconCta>
              <IconCta href={site.linkedin} label="LinkedIn">
                <Linkedin />
              </IconCta>
            </div>
          </div>
          <p {...enter(500, "order-7 mt-4 text-sm text-zinc-500")}>
            {t("about.ctaHint")}
          </p>

        </div>

        {/* ------------------------------------------------------------ */}
        {/* Portrait                                                     */}
        {/* ------------------------------------------------------------ */}
        <div className="relative order-first mx-auto aspect-square w-56 animate-in fade-in zoom-in-90 fill-mode-both duration-1000 sm:w-80 lg:order-none lg:w-full lg:max-w-md">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-3xl animate-pulse-glow" />
          {/* Dashed orbit */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-spin-slower" />
          <div className="absolute inset-0 animate-spin-slower">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_16px_4px_rgba(34,211,238,0.6)]" />
          </div>
          {/* Spinning gradient ring */}
          <div className="absolute inset-6 rounded-full bg-[conic-gradient(from_0deg,#6366f1,#a855f7,#ec4899,#22d3ee,#6366f1)] animate-spin-slow" />
          <div className="absolute inset-[calc(1.5rem+4px)] rounded-full bg-[#0a0a1a]" />
          <div className="absolute inset-[calc(1.5rem+10px)] overflow-hidden rounded-full">
            <Image
              src="/assets/profile.jpeg"
              alt="Bruno Virinni"
              fill
              priority
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 448px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating chips */}
          {chips.map((chip, index) => {
            const Icon = chipIcons[index % chipIcons.length]
            return (
              <span
                key={chip}
                className={`glass absolute inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-black/30 ${chipPositions[index % chipPositions.length]}`}
              >
                <Icon className="h-3.5 w-3.5 text-pink-400" />
                {chip}
              </span>
            )
          })}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        type="button"
        onClick={() => scrollToSection("#experience")}
        aria-label={t("common.scrollDown")}
        className="mx-auto mt-16 hidden flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-white lg:flex hover:cursor-pointer"
      >
        {t("common.scrollDown")}
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-pink-400 animate-scroll-hint" />
        </span>
      </button>
    </section>
  )
}
