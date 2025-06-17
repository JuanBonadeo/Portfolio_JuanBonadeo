"use client"

import { useLanguage } from "@/components/language-provider"

export function Skills() {
  const { t } = useLanguage()

  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Astro",
      logo: "https://astro.build/assets/press/astro-icon-light-gradient.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "GSAP",
      logo: "https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fdb37fd64c26b6e2e2e48.png",
    },
    {
      name: ".NET",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Prisma",
      logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">{t("skills.title")}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="stagger-item bg-background border border-border rounded-lg p-6 text-center hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.logo || "/placeholder.svg"}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain filter dark:brightness-0 dark:invert"
                    style={{
                      filter: skill.name === "Next.js" ? "invert(1)" : undefined,
                    }}
                  />
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
