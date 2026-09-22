"use client"

import { useEffect, useState } from "react"
import { ArrowUp, Download, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"
import { site } from "@/lib/site"
import { scrollToSection, scrollToTop } from "@/lib/scroll"
import { cn } from "@/lib/utils"

/**
 * Sticky bottom-right actions: contact, download CV and back-to-top.
 * Appears after the hero and hides again once the contact section is on screen.
 */
export default function FloatingCta() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const pastHero = window.scrollY > 480
      const contact = document.querySelector<HTMLElement>("#contact")
      const contactOnScreen = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.55 : false
      setVisible(pastHero && !contactOnScreen)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex flex-row items-center gap-2 transition-all duration-500 sm:bottom-5 sm:right-5 sm:flex-col sm:items-end sm:gap-3",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("floating.top")}
        title={t("floating.top")}
        className="glass-strong hidden h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30 hover:cursor-pointer sm:flex"
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <a
        href={site.cvUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("floating.cv")}
        title={t("floating.cv")}
        className="group flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40 sm:h-12 sm:px-3.5 sm:hover:pr-5"
      >
        <Download className="h-5 w-5 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
          {t("floating.cv")}
        </span>
      </a>

      <button
        type="button"
        onClick={() => scrollToSection("#contact")}
        aria-label={t("floating.contact")}
        className="relative flex h-11 items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] px-4 text-sm font-bold text-white shadow-xl shadow-purple-500/40 transition-all duration-300 animate-gradient-x hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/50 hover:cursor-pointer sm:h-14 sm:px-5"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-pink-500/60 animate-pulse-ring" />
        <Mail className="h-5 w-5" />
        <span className="hidden sm:inline">{t("floating.contact")}</span>
      </button>
    </div>
  )
}
