"use client"

import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    key: "cw",
    pointsCount: 2,
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "Sequelize",
      "Supabase",
      "Firesbase",
      "Git",
      "GitHub",
      "GitHub Copilot",
      "OpenAI",
      "Postman",
      "VSCode",
      "SCRUM",
      "KANBAN"
    ],
  },
  {
    key: "engSsr",
    pointsCount: 3,
    technologies: [
      "React",
      "HTML",
      "CSS",
      "Materialize CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "Sequelize",
      "FastAPI",
      "Python",
      "Git",
      "GitHub",
      "GitHub Copilot",
      "OpenAI",
      "Postman",
      "VSCode",
      "PyCharm",
      "SCRUM",
      "KANBAN"
    ],
  },
  {
    key: "engJr",
    pointsCount: 5,
    technologies: [
      "React",
      "HTML",
      "CSS",
      "Materialize CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "Sequelize",
      "Git",
      "GitHub",
      "Postman",
      "VSCode",
    ],
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider">
          {t("experience.title")}
        </h2>
        <h4 className="text-lg font-semibold text-center text-gray-400 mb-8">
          {t("experience.subtitlePrefix")} {" "}
          <a
            href="/assets/Bruno Laszlo Virinni - CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-400"
          >
            {t("experience.subtitleLink")}
          </a>
          .
        </h4>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-indigo-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Timeline dot - positioned to avoid card overlap */}
                {/* {typeof window !== "undefined" && window.innerWidth > 900 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm hidden md:inline">A</span>
                  </div>
                )} */}

                {/* Experience card */}
                <div
                  className={`w-full max-w-lg ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                >
                  <div className="text-sm text-gray-400 mb-2">{t(`experience.items.${exp.key}.period`)}</div>

                    <Card className="bg-gray-700 border-gray-600 shadow-lg transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:bg-gray-900 hover:cursor-pointer hover:shadow-amber-100">
                    {/* White border animation */}
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {/* <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {exp.rating}
                        </span> */}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {t(`experience.items.${exp.key}.position`)}
                      </h3>
                      <h4 className="text-gray-100 mb-4">{t(`experience.items.${exp.key}.company`)}</h4>
                      <ul className="list-disc list-inside mb-4 text-gray-100 text-sm">
                        {Array.from({ length: exp.pointsCount }).map((_, pointIndex) => (
                          <li key={pointIndex}>
                            {t(`experience.items.${exp.key}.points.${pointIndex}`)}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
