"use client"

import type { CSSProperties, ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { Sparkles } from "lucide-react"
import Reveal from "@/components/reveal"
import { cn } from "@/lib/utils"

type CtaBannerProps = {
  title: string
  text: string
  icon?: LucideIcon
  /** Buttons, usually <DownloadCvCta /> and/or <ContactCta />. */
  actions: ReactNode
  className?: string
}

/** Eye-catching call-to-action strip placed between sections. */
export default function CtaBanner({ title, text, icon: Icon = Sparkles, actions, className }: CtaBannerProps) {
  return (
    <Reveal direction="scale" className={cn("mx-auto mt-16 max-w-5xl", className)}>
      <div
        className="gradient-border glow-brand-lg relative overflow-hidden rounded-3xl p-8 sm:p-10"
        style={{ "--gb-fill": "#0f0f26" } as CSSProperties}
      >
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-float-delayed" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

        <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/40 animate-float">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
              <p className="mt-2 max-w-xl text-zinc-300">{text}</p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap justify-center gap-3">{actions}</div>
        </div>
      </div>
    </Reveal>
  )
}
