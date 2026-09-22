"use client"

import type { CSSProperties } from "react";
import { ArrowUpRight, ExternalLink, FolderOpen, Github, Lightbulb } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import CtaBanner from "@/components/cta-banner";
import { Cta, ContactCta, DownloadCvCta } from "@/components/cta-buttons";

const projects = [
  {
    titleKey: "projects.items.doctorfyTitle",
    descriptionKey: "projects.items.doctorfyDesc",
    image: "/images/doctor-ty.png",
    technologies: ["React.js", "React Native", "Express", "Node.js", "MySQL", "Sequelize", "Materialize CSS", "JWT", "Payway API", "WAAPI", "Email Integration"],
    liveUrl: "https://doctorfy.com.ar/",
    githubUrl: "https://github.com/Brun02K20/plataforma_medica_frontend",
    githubUrl2: "https://github.com/Brun02K20/plataforma_medica_backend"
  },
  
  {
    titleKey: "projects.items.flexTitle",
    descriptionKey: "projects.items.flexDesc",
    image: "/images/flex-trainer.png",
    technologies: ["React.js", "Firebase", "Bootstrap", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "GitHub Copilot", "Email Integration"],
    liveUrl: "https://flextrainer-frontend-web.vercel.app",
    githubUrl: "https://github.com/Brun02K20/flextrainer_frontend_web",
    githubUrl2: "https://github.com/Brun02K20/flex_2",
  },
  {
    titleKey: "projects.items.kokusTitle",
    descriptionKey: "projects.items.kokusDesc",
    image: "/images/kokus.png",
    technologies: ["Next.js", "AWS", "Tailwind CSS", "Nest.js", "MySQL", "PHP", "TypeORM", "JWT", "GitHub Copilot", "Email Integration", "Mercado Pago API", "OpenAI API", "Google Maps API", "Arduino Integration"],
    liveUrl: "https://kokus.byalvear.com",
    githubUrl: "https://github.com/alveardevs/kokus-front",
    githubUrl2: "https://github.com/alveardevs/kokus-back",
  },
  {
    titleKey: "projects.items.workflowTitle",
    descriptionKey: "projects.items.workflowDesc",
    image: "/images/workflow.png",
    technologies: ["Node.js", "Markdown", "Javascript"],
    liveUrl: "https://www.npmjs.com/package/brunovdev-workflow",
    githubUrl: "https://github.com/Brun02K20/ai-agentic-environment",
  },
  {
    titleKey: "projects.items.tribalTitle",
    descriptionKey: "projects.items.tribalDesc",
    image: "/images/tribal_trend.png",
    technologies: ["Next.js", "Nest.js", "MySQL", "MongoDB", "Mercado Pago API", "JWT", "Tailwind CSS", "Google Auth API", "Docker", "GitHub Copilot", "Email Integration", "Linux Server", "Groq AI"],
    liveUrl: "https://tribaltrend.com.ar",
    githubUrl: "https://github.com/Brun02K20/tribal_front",
  },
  // {
  //   title: "Language Translator",
  //   description:
  //     "Google Translate clone with real-time translation capabilities, language detection, and clean user interface for seamless communication across languages. Integrated with Linguee API.",
  //   image: "/images/google-translate.png",
  //   technologies: ["React.js", "Bootstrap", "Translation API", "Node.js", "Express.js", "TypeScript"],
  //   liveUrl: "https://google-translate-clone-tau.vercel.app",
  //   githubUrl: "https://github.com/Brun02K20/translateAppBackend",
  // },
  // {
  //   title: "Tetris Game",
  //   description:
  //     "Classic Tetris game implementation with smooth animations and score tracking. Built using modern JavaScript and canvas rendering.",
  //   image: "/images/tetris-game.png",
  //   technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "TypeScript"],
  //   liveUrl: "https://brun02k20tetris.vercel.app",
  //   githubUrl: "https://github.com/Brun02K20/tetris",
  // },
  {
    titleKey: "projects.items.coffeeTitle",
    descriptionKey: "projects.items.coffeeDesc",
    image: "/images/coffee-website.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
    liveUrl: "https://arremiami.vercel.app/index.html",
    githubUrl: "https://github.com/Brun02K20/arre-cafe-frontend",
    githubUrl2: "https://github.com/Brun02K20/arre_backend"
  },
  // {
  //   titleKey: "projects.items.cardelliTitle",
  //   descriptionKey: "projects.items.cardelliDesc",
  //   image: "/images/cardelli.png",
  //   technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
  //   liveUrl: "https://cardelli-neumaticos.vercel.app",
  //   githubUrl: "https://github.com/MaximoRonco/cardelli_frontend",
  //   githubUrl2: "https://github.com/Brun02K20/cardelli_backend"
  // },
  {
    titleKey: "projects.items.mclTitle",
    descriptionKey: "projects.items.mclDesc",
    image: "/images/mcl.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
    liveUrl: "https://mcl-automotores.vercel.app",
    githubUrl: "https://github.com/MaximoRonco/mcl_frontend",
    githubUrl2: "https://github.com/Brun02K20/mcl_backend"
  },
  // {
  //   titleKey: "projects.items.alvarezTitle",
  //   descriptionKey: "projects.items.alvarezDesc",
  //   image: "/images/alvarez.png",
  //   technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
  //   liveUrl: "https://alvarezconstruccionenseco.vercel.app",
  //   githubUrl: "https://github.com/facute366/alvarez_frontend",
  //   githubUrl2: "https://github.com/Brun02K20/alvarez_back"
  // },
  // {
  //   titleKey: "projects.items.courseTitle",
  //   descriptionKey: "projects.items.courseDesc",
  //   image: "/images/course-manager.png",
  //   technologies: ["React.js", "Node.js", "Bootstrap", "Express.js", "Resend API"],
  //   liveUrl: "https://que-curso-juanliendo-brunovir.vercel.app",
  //   githubUrl: "https://github.com/juan-lien-do/que-curso",
  // },
  {
    titleKey: "projects.items.currencyTitle",
    descriptionKey: "projects.items.currencyDesc",
    image: "/images/currency-app.png",
    technologies: ["React Native", "Expo", "Chart.js", "DolarAPI", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Brun02K20/app_cotiz_dolar",
  },
  // {
  //   title: "Task Management App",
  //   description:
  //     "A comprehensive TO-DO application with task tracking, search functionality, and progress monitoring. Built with modern web technologies for optimal user experience.",
  //   image: "/images/todo-app.png",
  //   technologies: ["React.js", "CSS3", "HTML"],
  //   liveUrl: "https://brun02k20.github.io/todo_machine",
  //   githubUrl: "https://github.com/Brun02K20/app_cotiz_dolar",
  // },
  
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03"
          icon={FolderOpen}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
            return (
              <Reveal key={project.titleKey} delay={(index % 3) * 100} className="h-full">
                <article
                  className="border-beam glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ "--beam-delay": `${-index * 1.1}s` } as CSSProperties}
                >
                  {/* Cover */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.titleKey ? t(project.titleKey) : "Project image"}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d24] via-[#0d0d24]/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 transition-all duration-500 group-hover:from-indigo-500/25 group-hover:to-pink-500/25" />

                    {hasLiveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t(project.titleKey)} - ${t("projects.liveSite")}`}
                        className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-pink-500 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-xl font-bold text-white transition-colors duration-300 group-hover:text-transparent">
                      {project.titleKey ? t(project.titleKey) : ""}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {project.descriptionKey ? t(project.descriptionKey) : ""}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip !px-2 !py-0.5 !text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {hasLiveUrl && (
                        <Cta size="sm" href={project.liveUrl} external>
                          <ExternalLink />
                          {t("projects.liveSite")}
                        </Cta>
                      )}
                      <Cta size="sm" variant="secondary" href={project.githubUrl} external>
                        <Github />
                        {project.githubUrl2 ? t("projects.frontend") : t("projects.github")}
                      </Cta>
                      {project.githubUrl2 && (
                        <Cta size="sm" variant="secondary" href={project.githubUrl2} external>
                          <Github />
                          {t("projects.backend")}
                        </Cta>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <CtaBanner
          icon={Lightbulb}
          title={t("projects.cta.title")}
          text={t("projects.cta.text")}
          actions={
            <>
              <ContactCta label={t("projects.cta.button")} variant="primary" />
              <DownloadCvCta label={t("projects.cta.secondary")} variant="secondary" />
            </>
          }
        />
      </div>
    </section>
  );
}
