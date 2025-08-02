import { Card, CardContent } from "@/components/ui/card"

// importo iconos
// Frontend
import Astro from "@/icons/Astro"
import Bootstrap from "@/icons/Bootstrap"
import Chartjs from "@/icons/Chartjs"
import CSS from "@/icons/CSS"
import HTML5 from "@/icons/HTML"
import JavaScript from "@/icons/Javascript"
import Nextjs from "@/icons/Next"
import React from "@/icons/ReactIcon"
import Shadcnui from "@/icons/Shadcn"
import TailwindCSS from "@/icons/Tailwind"
import Expo from "@/icons/Expo"

// Backend
import Nodejs from "@/icons/Nodejs"
import Expressjs from "@/icons/Express"
import Dotenv from "@/icons/Dotenv"
import FastAPI from "@/icons/FastApi"
import Java from "@/icons/Java"
import JWT from "@/icons/JWT"
import NestJS from "@/icons/Nest"
import Python from "@/icons/Python"
import Spring from "@/icons/Spring"
import TypeScript from "@/icons/Typescript"

// DataBase
import MySQL from "@/icons/MySQL"
import PostgreSQL from "@/icons/Postgre"
import Sequelize from "@/icons/Sequelize"
import SQLite from "@/icons/SQLite"
import MicrosoftSQLServer from "@/icons/SQLServer"

// Tools
import Atlassian from "@/icons/Atlassian"
import Canva from "@/icons/Canva"
import Docker from "@/icons/Docker"
import Firebase from "@/icons/FireBase"
import Git from "@/icons/Git"
import GitHub from "@/icons/Github"
import GitLab from "@/icons/Gitlab"
import GitHubCopilot from "@/icons/Copilot"
import OpenAI from "@/icons/OpenAI"
import Postman from "@/icons/Postman"
import PyCharm from "@/icons/Pycharm"
import Supabase from "@/icons/SupaBase"
import Swagger from "@/icons/Swagger"
import Vercel from "@/icons/Vercel"
import VisualStudioCode from "@/icons/VisualStudioCode"


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <React /> },
      { name: "Astro", icon: <Astro /> },
      { name: "Tailwind CSS", icon: <TailwindCSS /> },
      { name: "Bootstrap", icon: <Bootstrap /> },
      { name: "shadcn/ui", icon: <Shadcnui /> },
      { name: "Chart.js", icon: <Chartjs /> },
      { name: "HTML5", icon: <HTML5 /> },
      { name: "CSS3", icon: <CSS /> },
      { name: "JavaScript", icon: <JavaScript /> },
      {name: "Expo", icon: <Expo /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <Nodejs /> },
      { name: "Express", icon: <Expressjs /> },
      { name: "NestJS", icon: <NestJS /> },
      { name: "TypeScript", icon: <TypeScript /> },
      { name: "dotenv", icon: <Dotenv /> },
      { name: "Python", icon: <Python /> },
      { name: "FastAPI", icon: <FastAPI /> },
      { name: "JWT", icon: <JWT /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <MySQL /> },
      { name: "PostgreSQL", icon: <PostgreSQL /> },
      { name: "Sequelize", icon: <Sequelize /> },
      { name: "SQLite", icon: <SQLite /> },
      { name: "Microsoft SQL Server", icon: <MicrosoftSQLServer /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <Git /> },
      { name: "GitHub", icon: <GitHub /> },
      { name: "GitLab", icon: <GitLab /> },
      { name: "GitHub Copilot", icon: <GitHubCopilot /> },
      { name: "OpenAI", icon: <OpenAI /> },
      { name: "Firebase", icon: <Firebase /> },
      { name: "Postman", icon: <Postman /> },
      { name: "Swagger", icon: <Swagger /> },
      { name: "Vercel", icon: <Vercel /> },
      { name: "Supabase", icon: <Supabase /> },
      { name: "Atlassian", icon: <Atlassian /> },
      { name: "Visual Studio Code", icon: <VisualStudioCode /> },
      { name: "PyCharm", icon: <PyCharm /> },
    ],
  },
  // {
  //   title: "DevOps",
  //   skills: [
  //     { name: "Docker", icon: "🐳" },
  //     { name: "AWS", icon: "☁️" },
  //     { name: "Vercel", icon: "▲" },
  //     { name: "Netlify", icon: "🌐" },
  //     { name: "GitHub Actions", icon: "🔄" },
  //     { name: "Linux", icon: "🐧" },
  //   ],
  // },
  {
    title: "Learning",
    skills: [
      { name: "Next.js", icon: <Nextjs /> },
      { name: "Java", icon: <Java /> },
      { name: "Spring Boot", icon: <Spring /> },
      { name: "Docker", icon: <Docker /> },
      { name: "Canva", icon: <Canva /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-red-400">{category.title}</h3>

                <div className="grid grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center text-center">
                      <div className="text-xl mb-2">{skill.icon}</div>
                      <span className="text-xs text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
