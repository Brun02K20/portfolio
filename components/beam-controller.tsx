"use client"

import { useEffect } from "react"

/**
 * Keeps the rotating border animation (`.border-beam`) running only for cards
 * that are on or near the screen, so dozens of off-screen cards cost nothing.
 */
export default function BeamController() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll<HTMLElement>(".border-beam").forEach((el) => (el.dataset.beam = "on"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ;(entry.target as HTMLElement).dataset.beam = entry.isIntersecting ? "on" : "off"
        }
      },
      { rootMargin: "160px 0px" },
    )

    const observed = new Set<Element>()
    const observeAll = () => {
      document.querySelectorAll(".border-beam").forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          observer.observe(el)
        }
      })
    }
    observeAll()

    // Cards rendered later (e.g. after a language switch) are picked up too.
    const mutations = new MutationObserver(observeAll)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [])

  return null
}
