import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    period: "03.2021 - present",
    degree: "Information Systems Engineer",
    institution: "Universidad Tecnológica Nacional (UTN) - Argentina",
    subjects: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Software Engineering and Quality Assurance",
      "Web Development",
      "Computer Networks",
      "Artificial Intelligence",
      "Data Science",
    ],
  },
  {
    period: "01.2022 - 12.2023",
    degree: "Full Stack Web Development",
    institution: "Platzi - Online Courses",
    subjects: ["React", "Node.js", "PostgreSQL", "Express.js", "JWT", "HTML/CSS", "GitHub", "Git", "VSCode", "GitHub Copilot"],
  },
  {
    period: "03.2021 - 12.2023",
    degree: "University Information Systems Developer Analyst",
    institution: "Universidad Tecnológica Nacional (UTN) - Argentina",
    subjects: ["Software Development", "Information Systems Design", "Databases", "Information Systems Analysis", "Applications Backend"],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider">Education</h2>
        <h4 className="text-lg font-semibold text-center text-gray-400 mb-8">
          My academic background and ongoing learning journey.
        </h4>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-indigo-500"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Timeline dot - positioned to avoid card overlap */}
                {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">🎓</span>
                </div> */}

                {/* Education card */}
                <div className={`w-full max-w-lg ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                  <div className="text-sm text-gray-400 mb-2">{edu.period}</div>

                  <Card className="bg-gray-700 border-gray-600 shadow-lg transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-amber-100 hover:bg-gray-900 hover:cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {/* <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          Rating {edu.rating}
                        </span> */}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-gray-300 mb-4">{edu.institution}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, subjectIndex) => (
                          <span key={subjectIndex} className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-xs">
                            {subject}
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
  )
}
