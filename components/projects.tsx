"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      name: "Critio",
      description: t("projects.critio.description"),
      image: "projects/critio.jpeg",
      tech: ["Next.js", "React", "Tailwind", "Firebase"],
      url: "https://critio.vercel.app/",
      github: "https://github.com/JuanBonadeo/Critio"
    },
    {
      name: "Debon Solutions",
      description: t("projects.debon.description"),
      image:     "/projects/debon.jpeg",
      tech: ["React", "Next.js", "Tailwind", "TypeScript"],
      url: "https://www.debonsolutions.com/home",
      github: "https://github.com/JuanBonadeo/DebonSolutions",
    },
    {
      name: "Orlandi Propiedades",
      description: t("projects.orlandi.description"),
      image: "/projects/orlandi.jpeg",
      tech: ["React", "CSS", "JavaScript", "Firebase"],
      url: "https://www.orlandi-inmobiliaria.com/",
      github: "https://github.com/JuanBonadeo/Proyecto-Orlandi_propiedades",
    },
    {
      name: "Oud Parfam",
      description: t("projects.oud.description"),
      image: "/projects/oud.jpeg",
      tech: ["javascript", "React", "Tailwind", "Firebase"],
      url: "https://oudparfam.vercel.app/",
      github: "https://github.com/JuanBonadeo/OudRosarioParfam",
    },
    {
      name: "Teslo Shop",
      description: t("projects.teslo.description"),
      image: "/projects/teslo.jpeg",
      tech: ["Next.js", "React", "Prisma", "PostgreSQL"],
      url: "https://tesloshopnext.vercel.app",
      github: "https://github.com/JuanBonadeo/nextjs-teslo-shop",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">{t("projects.title")}</h2>

        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <Card key={project.name} className="stagger-item hover:shadow-lg transition-shadow">
              {project.image && (
                <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover zoom-out-hover"
                    sizes="(min-width: 768px) 50vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild size="sm">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("projects.viewSite")}
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {t("projects.viewCode")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
