"use client"

import { ArrowUp, Github, Handshake, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"
import Reveal from "@/components/reveal"
import { ContactCta, DownloadCvCta, IconCta } from "@/components/cta-buttons"
import { mailto, site } from "@/lib/site"
import { scrollToTop } from "@/lib/scroll"

const socialLinks = [
  { name: "GitHub", icon: Github, href: site.github },
  { name: "LinkedIn", icon: Linkedin, href: site.linkedin },
  { name: "Email", icon: Mail, href: mailto },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10 mt-8 overflow-hidden text-white">
      {/* Gradient hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_70%)]" />

        {/* Closing CTA */}
        <Reveal direction="scale" className="text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/40 animate-float">
            <Handshake className="h-8 w-8 text-white" />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="gradient-text">{t("footer.ctaTitle")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-300">{t("footer.ctaText")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ContactCta label={t("footer.ctaButton")} variant="primary" size="lg" />
            <DownloadCvCta label={t("footer.ctaCv")} variant="secondary" size="lg" />
          </div>
        </Reveal>

        {/* Socials */}
        <Reveal delay={120} className="mt-14 flex justify-center gap-3">
          {socialLinks.map((link) => (
            <IconCta key={link.name} href={link.href} label={link.name}>
              <link.icon />
            </IconCta>
          ))}
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-zinc-500 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-zinc-300">Bruno Virinni</span>. {t("footer.rights")}
          </p>
          <p className="text-xs text-zinc-500">{t("footer.builtWith")}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-colors hover:text-white hover:cursor-pointer"
          >
            {t("footer.backToTop")}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-pink-500">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
