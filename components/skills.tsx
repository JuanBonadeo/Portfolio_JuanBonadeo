"use client"

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiGreensock,
  SiDotnet,
  SiPython,
  SiNodedotjs,
  SiPrisma,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si"
import { useLanguage } from "@/components/language-provider"

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
  { name: "Astro", icon: <SiAstro className="text-purple-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "GSAP", icon: <SiGreensock className="text-green-600" /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-800" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-700" /> },
  { name: "Prisma", icon: <SiPrisma className="text-black dark:text-white" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">
          {t("skills.title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-background border border-border rounded-lg p-6 text-center hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-foreground font-medium text-sm">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
