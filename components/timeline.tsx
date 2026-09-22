"use client"

import type { CSSProperties, ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import Reveal from "@/components/reveal"
import { cn } from "@/lib/utils"

/** Vertical timeline: line on the left on mobile, centered with alternating cards on desktop. */
export function Timeline({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-70 lg:left-1/2 lg:-translate-x-1/2"
      />
      {/* Light pulse travelling down the line */}
      <div
        aria-hidden="true"
        className="absolute left-5 top-0 h-32 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-80 animate-timeline-run lg:left-1/2 lg:-translate-x-1/2"
      />
      <ol className="space-y-12">{children}</ol>
    </div>
  )
}

type TimelineItemProps = {
  index: number
  icon: LucideIcon
  /** Rendered above the card: period pill + optional badge. */
  period: ReactNode
  badge?: ReactNode
  children: ReactNode
  /** Colours of the rotating border beam. */
  beam?: [string, string]
}

export function TimelineItem({ index, icon: Icon, period, badge, children, beam }: TimelineItemProps) {
  const left = index % 2 === 0

  return (
    <li className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0">
      {/* Node on the line */}
      <div className="absolute left-5 top-1 z-10 -translate-x-1/2 lg:left-1/2">
        <span className="absolute inset-0 rounded-full bg-purple-500/70 animate-pulse-ring" />
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 ring-4 ring-[#0a0a1a]">
          <Icon className="h-4 w-4 text-white" />
        </span>
      </div>

      <div className={cn(left ? "lg:col-start-1" : "lg:col-start-2")}>
        <Reveal direction={left ? "left" : "right"} delay={80}>
          <div className={cn("mb-3 flex flex-wrap items-center gap-2", left && "lg:justify-end")}>
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-200 ring-1 ring-inset ring-indigo-400/30">
              {period}
            </span>
            {badge}
          </div>

          <div
            className="border-beam glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-500/20 sm:p-7"
            style={
              {
                "--beam-delay": `${-index * 1.9}s`,
                ...(beam ? { "--beam-a": beam[0], "--beam-b": beam[1] } : {}),
              } as CSSProperties
            }
          >
            {children}
          </div>
        </Reveal>
      </div>
    </li>
  )
}
