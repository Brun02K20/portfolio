"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Mail, FolderOpen } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function About() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              alt="John Doe"
              fill
              className="rounded-full object-cover border-4 border-indigo-500"
            />
          </div>

          <h4 className="text-2xl font-bold text-white mb-6">Bruno Virinni - Fullstack Developer</h4>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-2">
              I'm a Fullstack Developer with over three years of experience in software development and a University Information Systems Developer Analyst, a graduate of the UTN, currently in my final year of Information Systems Engineering.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-2">
              Throughout my career, I've worked on various projects on both the backend and frontend, utilizing modern technologies to build efficient, scalable, and user-centric solutions. I stand out for my ability to quickly adapt to new environments and languages, and for my mindset focused on problem-solving and continuous improvement.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-2">
              In addition to my technical skills, I have soft skills that I consider essential: good disposition for teamwork, experience leading initiatives and collaborating with different profiles, and an intermediate level of English that allows me to interact with technical documentation and international teams.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              In my free time I enjoy exercising, spending time with friends, and playing video games.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/assets/Bruno Laszlo Virinni - CV .docx.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer shadow-sm shadow-indigo-500/50 hover:shadow-md transition-all duration-300">
              <Download className="h-4 w-4" />
              Download CV
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

            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:cursor-pointer"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:cursor-pointer"
              onClick={() => scrollToSection("#projects")}
            >
              <FolderOpen className="h-4 w-4" />
              Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
