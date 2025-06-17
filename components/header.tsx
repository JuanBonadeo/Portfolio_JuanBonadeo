"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { Sun, Moon, Menu, X } from "lucide-react"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { key: "nav.about", id: "about" },
    { key: "nav.skills", id: "skills" },
    { key: "nav.projects", id: "projects" },
    { key: "nav.contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Juan Cruz Bonadeo</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-sm font-medium">
              {language.toUpperCase()}
            </Button>

           

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
