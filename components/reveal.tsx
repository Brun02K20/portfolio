"use client"

import type { CSSProperties, ElementType, ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in ms before the element animates in (useful for staggering grids). */
  delay?: number
  direction?: "up" | "left" | "right" | "scale"
  as?: ElementType
  style?: CSSProperties
}

/**
 * Fades/slides its children in the first time they scroll into view.
 * The visual states live in `.reveal` / `.reveal.is-visible` (globals.css).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      data-direction={direction}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
