import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    period: "08.2024 - present",
    position: "Sr. FullStack Developer; Team Leader & CoFounder",
    company: "CodeandoWeb - Digital Business Solutions",
    description: (
      <ul className="list-disc list-inside mb-4 text-gray-100 text-sm">
        <li>
          Digital solutions for businesses: commercial websites, management systems, and payment gateways.
        </li>
        <li>
          Requirements gathering, scope definition, and project estimation in direct contact with clients.
        </li>
      </ul>
    ),
    // rating: "8/9/10",
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
    period: "06.2024 - 01.2026",
    position: "Ssr. FullStack Developer & Team Leader",
    company: "EngTrade - Servicios de Consultoría",
    description: (
      <ul className="list-disc list-inside mb-4 text-gray-100 text-sm">
        <li>
          Active participation in software architecture and technical planning, considering scalability, availability, and long-term maintenance.
        </li>
        <li>
          Participation in multiple software projects with an end-to-end product vision, from analysis and design to development and deployment, including commercial platforms and ERP systems.
        </li>
        <li>
          Estimation and planning of software projects, aligning technical solutions with product and business requirements.
        </li>
      </ul>
    ),
    // rating: "8/9/10",
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
    period: "12.2021 - 06.2024",
    position: "Jr. FullStack Developer",
    company: "EngTrade - Servicios de Consultoría",
    description: (
      <ul className="list-disc list-inside mb-4 text-gray-100 text-sm">
        <li>
          Development of software products in JavaScript
        </li>
        <li>
          Increasing the scalability of existing systems
        </li>
        <li>
          Optimizing queries in databases
        </li>
        <li>
          Designing intuitive and user-friendly user interfaces
        </li>
        <li>
          Training of new employees within the organization.
        </li>
      </ul>
    ),
    // rating: "7/8",
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
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider">
          Experience
        </h2>
        <h4 className="text-lg font-semibold text-center text-gray-400 mb-8">
          My professional journey so far. More details{" "}
          <a
            href="/assets/Bruno Laszlo Virinni - CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-400"
          >
            here
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
                  <div className="text-sm text-gray-400 mb-2">{exp.period}</div>

                    <Card className="bg-gray-700 border-gray-600 shadow-lg transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:bg-gray-900 hover:cursor-pointer hover:shadow-amber-100">
                    {/* White border animation */}
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {/* <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {exp.rating}
                        </span> */}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-gray-100 mb-4">{exp.company}</h4>
                      {exp.description}

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
