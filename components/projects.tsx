import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "DoctorFY - Medical Platform",
    description:
      "Medical appointment information system within 72 hours. More than 200 users on launch day. Featuring appointment scheduling, patient dashboard, waiting room system, and consultation management for healthcare professionals. Work done for ENGTRADE.",
    image: "/images/doctor-ty.png",
    technologies: ["React.js", "Express", "Node.js", "MySQL", "Sequelize", "Materialize CSS", "JWT", "Payway API", "WAAPI", "Email Integration"],
    liveUrl: "https://doctorfy.com.ar/",
    githubUrl: "https://github.com/Brun02K20/plataforma_medica_frontend",
  },
  {
    title: "Coffee To Go - Restaurant Website",
    description:
      "Modern coffee shop website with online ordering system, menu display, location services, and social media integration. Features clean design and mobile-responsive layout. Work done for ARRE.",
    image: "/images/coffee-website.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl: "https://arremiami.vercel.app/index.html",
    githubUrl: "https://github.com/Brun02K20/arre-cafe-frontend",
  },
  {
    title: "Flex Trainer",
    description:
      "Fitness tracking application with workout routines, progress monitoring, tutorial videos, QR scanning, and personalized training plans. Perfect for gym enthusiasts and fitness professionals. Work done as a thesis for my title as University Information Systems Developer Analyst",
    image: "/images/flex-trainer.png",
    technologies: ["React.js", "Firebase", "Bootstrap", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "GitHub Copilot", "Email Integration"],
    liveUrl: "https://flextrainer-frontend-web.vercel.app",
    githubUrl: "https://github.com/Brun02K20/flex_2",
  },
  {
    title: "Language Translator",
    description:
      "Google Translate clone with real-time translation capabilities, language detection, and clean user interface for seamless communication across languages. Integrated with Linguee API.",
    image: "/images/google-translate.png",
    technologies: ["React.js", "Bootstrap", "Translation API", "Node.js", "Express.js", "TypeScript"],
    liveUrl: "https://google-translate-clone-tau.vercel.app",
    githubUrl: "https://github.com/Brun02K20/translateAppBackend",
  },
  {
    title: "Tetris Game",
    description:
      "Classic Tetris game implementation with smooth animations and score tracking. Built using modern JavaScript and canvas rendering.",
    image: "/images/tetris-game.png",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "TypeScript"],
    liveUrl: "https://brun02k20tetris.vercel.app",
    githubUrl: "https://github.com/Brun02K20/tetris",
  },
  {
    title: "Course Management System",
    description:
      "Educational platform for managing academic courses, subjects, and student progress. Features organized curriculum structure and progress tracking.",
    image: "/images/course-manager.png",
    technologies: ["React.js", "Node.js", "Bootstrap", "Express.js", "Resend API"],
    liveUrl: "https://que-curso-juanliendo-brunovir.vercel.app",
    githubUrl: "https://github.com/juan-lien-do/que-curso",
  },
  {
    title: "Currency Exchange Platform",
    description:
      "Financial application for currency exchange rates, historical data analysis, and real-time market information with Argentine peso focus.",
    image: "/images/currency-app.png",
    technologies: ["React Native", "Expo", "Chart.js", "DolarAPI", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Brun02K20/app_cotiz_dolar",
  },
  {
    title: "Task Management App",
    description:
      "A comprehensive TO-DO application with task tracking, search functionality, and progress monitoring. Built with modern web technologies for optimal user experience.",
    image: "/images/todo-app.png",
    technologies: ["React.js", "CSS3", "HTML"],
    liveUrl: "https://brun02k20.github.io/todo_machine",
    githubUrl: "https://github.com/Brun02K20/app_cotiz_dolar",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Projects
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
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
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
                      Live Site
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-600 flex items-center gap-2 bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-3 w-3" />
                      Github
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
