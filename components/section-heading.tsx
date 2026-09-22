"use client"

import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import Reveal from "@/components/reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  /** Small label above the title, e.g. the section number. */
  eyebrow?: string
  icon?: LucideIcon
  title: string
  subtitle?: ReactNode
  className?: string
}

export default function SectionHeading({ eyebrow, icon: Icon, title, subtitle, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-14 text-center", className)}>
      {(eyebrow || Icon) && (
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">
          {Icon ? (
            <Icon className="h-3.5 w-3.5 text-pink-400" />
          ) : (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 to-pink-400" />
          )}
          {eyebrow}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>

      <div className="relative mx-auto mt-5 h-1 w-28 overflow-hidden rounded-full bg-white/10">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-gradient-fast" />
      </div>

      {subtitle && <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
