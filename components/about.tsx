"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Mail, FolderOpen, Linkedin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function About() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const yOffset = mobileMenuOpen ? 0 : -40 // ajusta este valor según la altura de tu header
      const y = (element as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/assets/profile.jpeg"
              alt="Bruno Virinni"
              fill
              className="rounded-full object-cover border-4 border-indigo-500"
            />
          </div>

          <h4 className="text-2xl font-bold text-white mb-6">{t("about.role")}</h4>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-2">{t("about.p1")}</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-2">{t("about.p2")}</p>
            <p className="text-lg text-gray-300 leading-relaxed">{t("about.p3")}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/assets/Bruno Laszlo Virinni - CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer shadow-sm shadow-indigo-500/50 hover:shadow-md transition-all duration-300">
              <Download className="h-4 w-4" />
              {t("about.downloadCv")}
              </Button>
            </a>

            <a href="https://github.com/brun02k20" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:cursor-pointer"
              >
                <Github className="h-4 w-4" />
                Github
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/bruno-laszlo-virinni" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:cursor-pointer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>

            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:cursor-pointer"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="h-4 w-4" />
              {t("about.contactMe")}
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:cursor-pointer"
              onClick={() => scrollToSection("#projects")}
            >
              <FolderOpen className="h-4 w-4" />
              {t("about.projects")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
