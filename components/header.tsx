"use client"

import { useEffect, useState } from "react"
import { Menu, X, User, Briefcase, Code, FolderOpen, GraduationCap, Mail, Globe } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Cta, DownloadCvCta } from "@/components/cta-buttons"
import { scrollToSection, scrollToTop } from "@/lib/scroll"
import { cn } from "@/lib/utils"

const navigation = [
  { key: "header.about", href: "#about", icon: User },
  { key: "header.experience", href: "#experience", icon: Briefcase },
  { key: "header.skills", href: "#skills", icon: Code },
  { key: "header.projects", href: "#projects", icon: FolderOpen },
  { key: "header.education", href: "#education", icon: GraduationCap },
  { key: "header.contact", href: "#contact", icon: Mail },
]

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-3 hover:cursor-pointer"
      aria-label="Bruno Virinni"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-sm font-black text-white shadow-lg shadow-purple-500/40 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
        BV
      </span>
      <span className="text-lg font-bold tracking-tight text-white">
        Bruno <span className="gradient-text-static">Virinni</span>
      </span>
    </button>
  )
}

function LanguageToggle({
  label,
  current,
  onToggle,
  className,
}: {
  label: string
  current: string
  onToggle: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className={cn(
        "glass inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-bold tracking-wider text-zinc-200 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white hover:cursor-pointer",
        className,
      )}
    >
      <Globe className="h-3.5 w-3.5 text-cyan-300" />
      {current}
    </button>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#about")
  const { t, i18n } = useTranslation()

  // Compact, glassy bar once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll spy: highlight the link of the section crossing the middle of the viewport.
  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock page scroll while the drawer is open and close it with Escape.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [mobileMenuOpen])

  const go = (href: string) => {
    setMobileMenuOpen(false)
    // Wait for the drawer to unmount so the body scroll lock is released first.
    window.setTimeout(() => scrollToSection(href), mobileMenuOpen ? 60 : 0)
  }

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
  }

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Desktop                                                          */}
      {/* ---------------------------------------------------------------- */}
      <header className="fixed inset-x-0 top-0 z-50 hidden lg:block">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <nav
            className={cn(
              "flex h-16 items-center justify-between rounded-2xl px-5 transition-all duration-500",
              scrolled ? "glass-strong shadow-2xl shadow-black/40" : "border border-transparent bg-transparent",
            )}
          >
            <Logo onClick={scrollToTop} />

            <ul className="flex items-center gap-0.5 xl:gap-1">
              {navigation.map((item) => {
                const isActive = active === item.href
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => go(item.href)}
                      className={cn(
                        "relative flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium transition-all duration-300 hover:cursor-pointer xl:px-3.5 xl:text-sm",
                        isActive ? "text-white" : "text-zinc-400 hover:text-white",
                      )}
                    >
                      <item.icon className={cn("hidden h-4 w-4 transition-colors xl:block", isActive && "text-pink-400")} />
                      {t(item.key)}
                      <span
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition-all duration-300",
                          isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
                        )}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3">
              <LanguageToggle label={t("header.switchLanguage")} current={i18n.language === "en" ? "ES" : "EN"} onToggle={toggleLanguage} />
              <Cta size="sm" onClick={() => go("#contact")} ariaLabel={t("header.cta")} className="px-3 xl:px-4">
                <Mail />
                <span className="hidden xl:inline">{t("header.cta")}</span>
              </Cta>
            </div>
          </nav>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Mobile                                                           */}
      {/* ---------------------------------------------------------------- */}
      <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="px-4 pt-3">
          <div
            className={cn(
              "flex h-14 items-center justify-between rounded-2xl px-3 transition-all duration-500",
              scrolled || mobileMenuOpen ? "glass-strong shadow-xl shadow-black/40" : "bg-transparent",
            )}
          >
            <Logo onClick={scrollToTop} />
            <div className="flex items-center gap-2">
              <LanguageToggle label={t("header.switchLanguage")} current={i18n.language === "en" ? "ES" : "EN"} onToggle={toggleLanguage} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label={mobileMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
                aria-expanded={mobileMenuOpen}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-lg shadow-purple-500/40 transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="glass-strong absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col px-6 pb-8 pt-24 shadow-2xl animate-in slide-in-from-right duration-300">
            <nav className="flex-1">
              <ul className="space-y-1.5">
                {navigation.map((item, index) => {
                  const isActive = active === item.href
                  return (
                    <li
                      key={item.key}
                      className="animate-in fade-in slide-in-from-right-4 fill-mode-both duration-500"
                      style={{ animationDelay: `${index * 50 + 80}ms` }}
                    >
                      <button
                        type="button"
                        onClick={() => go(item.href)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold transition-all duration-300 hover:cursor-pointer",
                          isActive
                            ? "bg-gradient-to-r from-indigo-500/25 to-pink-500/25 text-white ring-1 ring-inset ring-indigo-400/30"
                            : "text-zinc-300 hover:bg-white/5 hover:text-white",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-lg",
                            isActive ? "bg-gradient-to-br from-indigo-500 to-pink-500 text-white" : "bg-white/5 text-zinc-300",
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                        </span>
                        {t(item.key)}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
              <DownloadCvCta label={t("about.downloadCv")} className="w-full" />
              <Cta variant="secondary" className="w-full" onClick={() => go("#contact")}>
                <Mail />
                {t("header.cta")}
              </Cta>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
