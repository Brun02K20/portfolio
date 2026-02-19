"use client"

import { useState } from "react"
import { Menu, X, User, Briefcase, Code, FolderOpen, GraduationCap, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

const navigation = [
  { key: "header.about", href: "#about", icon: User },
  { key: "header.experience", href: "#experience", icon: Briefcase },
  { key: "header.skills", href: "#skills", icon: Code },
  { key: "header.projects", href: "#projects", icon: FolderOpen },
  { key: "header.education", href: "#education", icon: GraduationCap },
  { key: "header.contact", href: "#contact", icon: Mail },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const yOffset = mobileMenuOpen ? 0 : -40 // ajusta este valor según la altura de tu header
      const y = (element as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
  }

  return (
    <>
      {/* Desktop horizontal navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-white">Bruno Virinni</h2>
            </div>

            <div className="flex items-center space-x-8">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:cursor-pointer"
              >
                <Globe className="h-4 w-4" />
                {i18n.language === "en" ? "ES" : "EN"}
              </button>
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:cursor-pointer hover:underline"
                >
                  <item.icon className="h-4 w-4" />
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile vertical menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 px-6 py-8 shadow-lg ">
            <div className="flex h-16 shrink-0 items-center mt-4">
              <h2 className="text-xl font-bold text-white">Bruno Virinni</h2>
            </div>
            <nav className="">
              <ul role="list" className="space-y-1">
                <li>
                  <button
                    onClick={toggleLanguage}
                    className="group flex w-full gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <Globe className="h-6 w-6 shrink-0" />
                    {i18n.language === "en" ? "ES" : "EN"}
                  </button>
                </li>
                {navigation.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="group flex w-full gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-400 hover:text-white hover:bg-gray-700 transition-colors hover:cursor-pointer"
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {t(item.key)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
