"use client"

import { useEffect, useRef, useState } from "react"

type Options = {
  /** Fraction of the element that must be visible before it counts as "in view". */
  threshold?: number
  /** Extra margin around the viewport, e.g. "0px 0px -10% 0px" to trigger a bit later. */
  rootMargin?: string
  /** Stop observing after the first time the element becomes visible. */
  once?: boolean
}

/**
 * Tracks whether an element is inside the viewport using IntersectionObserver.
 * Falls back to "visible" when the API is unavailable so content is never hidden.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
