"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const projects = [
  {
    titleKey: "projects.items.doctorfyTitle",
    descriptionKey: "projects.items.doctorfyDesc",
    image: "/images/doctor-ty.png",
    technologies: ["React.js", "Express", "Node.js", "MySQL", "Sequelize", "Materialize CSS", "JWT", "Payway API", "WAAPI", "Email Integration"],
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
    technologies: ["Next.js", "AWS", "TailwindCSS", "Nest.js", "MySQL", "php", "TypeORM", "JWT", "GitHub Copilot", "Email Integration", "Mercado Pago API", "OpenAI API", "Google Maps API", "Arduino Integration"],
    liveUrl: "https://kokus.byalvear.com",
    githubUrl: "https://github.com/alveardevs/kokus-front",
    githubUrl2: "https://github.com/alveardevs/kokus-back",
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
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Nodejs", "Express.js", "MySQL", "Sequelize", "JWT"],
    liveUrl: "https://arremiami.vercel.app/index.html",
    githubUrl: "https://github.com/Brun02K20/arre-cafe-frontend",
    githubUrl2: "https://github.com/Brun02K20/arre_backend"
  },
  {
    titleKey: "projects.items.cardelliTitle",
    descriptionKey: "projects.items.cardelliDesc",
    image: "/images/cardelli.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Nodejs", "Express.js", "MySQL", "Sequelize", "JWT"],
    liveUrl: "https://cardelli-neumaticos.vercel.app",
    githubUrl: "https://github.com/MaximoRonco/cardelli_frontend",
    githubUrl2: "https://github.com/Brun02K20/cardelli_backend"
  },
  {
    titleKey: "projects.items.mclTitle",
    descriptionKey: "projects.items.mclDesc",
    image: "/images/mcl.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Nodejs", "Express.js", "MySQL", "Sequelize", "JWT"],
    liveUrl: "https://mcl-automotores.vercel.app",
    githubUrl: "https://github.com/MaximoRonco/mcl_frontend",
    githubUrl2: "https://github.com/Brun02K20/mcl_backend"
  },
  {
    titleKey: "projects.items.alvarezTitle",
    descriptionKey: "projects.items.alvarezDesc",
    image: "/images/alvarez.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Nodejs", "Express.js", "MySQL", "Sequelize", "JWT"],
    liveUrl: "https://alvarezconstruccionenseco.vercel.app",
    githubUrl: "https://github.com/facute366/alvarez_frontend",
    githubUrl2: "https://github.com/Brun02K20/alvarez_back"
  },
  {
    titleKey: "projects.items.courseTitle",
    descriptionKey: "projects.items.courseDesc",
    image: "/images/course-manager.png",
    technologies: ["React.js", "Node.js", "Bootstrap", "Express.js", "Resend API"],
    liveUrl: "https://que-curso-juanliendo-brunovir.vercel.app",
    githubUrl: "https://github.com/juan-lien-do/que-curso",
  },
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
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-700 border-gray-600 text-white overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.titleKey ? t(project.titleKey) : "Project image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.titleKey ? t(project.titleKey) : ""}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.descriptionKey ? t(project.descriptionKey) : ""}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-600 text-white px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      {t("projects.liveSite")}
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-600 flex items-center gap-2 bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-3 w-3" />
                      {project.githubUrl2 ? t("projects.frontend") : t("projects.github")}
                    </a>
                  </Button>
                  {project.githubUrl2 && (
                    <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-600 flex items-center gap-2 bg-transparent"
                  >
                    <a href={project.githubUrl2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-3 w-3" />
                      {t("projects.backend")}
                    </a>
                  </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
