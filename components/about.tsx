"use client"

import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">{t("about.title")}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=240&width=240"
                alt="Juan Cruz Bonadeo"
                className="w-56 h-56 rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-lg text-foreground/80 leading-relaxed">{t("about.bio")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
