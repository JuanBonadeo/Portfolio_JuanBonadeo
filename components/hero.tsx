"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center animate-on-scroll">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=128&width=128"
              alt="Juan Cruz Bonadeo"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Juan Cruz Bonadeo
        </h1>

        <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6">{t("hero.title")}</h2>

        <p className="text-lg md:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto">{t("hero.tagline")}</p>

        <Button
          size="lg"
          onClick={scrollToProjects}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
        >
          {t("hero.cta")}
        </Button>
      </div>
    </section>
  )
}
