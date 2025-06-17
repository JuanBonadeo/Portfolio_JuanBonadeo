"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const skillsGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Skills grid container animation
      gsap.fromTo(
        skillsGridRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Individual skill cards stagger animation
      const skillCards = gsap.utils.toArray(".skill-card")

      gsap.fromTo(
        skillCards,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotation: -10,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: {
            amount: 1.2,
            grid: "auto",
            from: "start",
          },
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Hover animations for each skill card
      skillCards.forEach((card: any) => {
        const icon = card.querySelector(".skill-icon")
        const text = card.querySelector(".skill-text")

        // Mouse enter animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -5,
            duration: 0.4,
            ease: "power2.out",
          })

          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.7,
            ease: "back.out(1.7)",
          })

          gsap.to(text, {
            scale: 1.1,
            color: "#3b82f6",
            duration: 0.3,
            ease: "power2.out",
          })
        })

        // Mouse leave animation
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          })

          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          })

          gsap.to(text, {
            scale: 1,
            color: "inherit",
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })

    }
    , sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t("skills.title")}
        </h2>

        <div ref={skillsGridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card bg-background border border-border rounded-lg p-6 text-center cursor-pointer relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className="skill-icon text-4xl">{skill.icon}</div>
                <span className="skill-text text-foreground font-medium text-sm transition-colors duration-300">
                  {skill.name}
                </span>
              </div>

              {/* Animated border effect */}
              <div
                className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-20"
                style={{
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
