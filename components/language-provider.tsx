"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Full Stack Developer",
    "hero.tagline": "Creating modern web experiences",
    "hero.cta": "View Projects",

    // About
    "about.title": "About Me",
    "about.bio":
      "I'm a Full Stack Developer and Systems Engineering student at UTN, focused on frontend with React and Next.js. I build modern web apps using .NET, Python, Tailwind and more. With an intermediate English level (FCE certified) and a self-taught mindset, I've completed hands-on courses and built scrapers and real-world projects.",

    // Skills
    "skills.title": "Skills & Technologies",

    // Projects
    "projects.title": "Featured Projects",
    "projects.orlandi.description": "Modern real estate website with property listings and search functionality",
    "projects.oud.description": "Elegant ecommerce platform for premium perfumes with cart and checkout",
    "projects.teslo.description": "Tesla-inspired clothing store with modern design and shopping features",
    "projects.debon.description": "Professional software agency portfolio showcasing services and expertise",
    "projects.critio.description": "Movie reviews web app with user authentication and ratings",
    "projects.viewSite": "View Site",
    "projects.viewCode": "View Code",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's work together on your next project",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.sended": "Message Sent!",
    "contact.error": "Error sending message. Please try again later.",
    "contact.emailLabel": "Email",
    "contact.githubLabel": "GitHub",
    "contact.linkedinLabel": "LinkedIn",
  },
  es: {
    // Navigation
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Desarrollador Full Stack",
    "hero.tagline": "Creando experiencias web modernas",
    "hero.cta": "Ver Proyectos",

    // About
    "about.title": "Acerca de Mí",
    "about.bio":
      "Soy Desarrollador Full Stack y estudiante de Ingeniería en Sistemas en la UTN, enfocado en frontend con React y Next.js. Desarrollo aplicaciones web modernas con .NET, Python, Tailwind y más. Con nivel de inglés intermedio (FCE aprobado) y perfil autodidacta, hice cursos prácticos y proyectos reales con scrapers incluidos.",

    // Skills
    "skills.title": "Habilidades y Tecnologías",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.orlandi.description":
      "Sitio web inmobiliario moderno con listados de propiedades y funcionalidad de búsqueda",
    "projects.oud.description": "Plataforma de ecommerce elegante para perfumes premium con carrito y checkout",
    "projects.teslo.description": "Tienda de ropa inspirada en Tesla con diseño moderno y funciones de compra",
    "projects.debon.description": "Portfolio profesional de agencia de software mostrando servicios y experiencia",
    "projects.critio.description": "Aplicación web de reseñas de películas con autenticación de usuarios y calificaciones",
    "projects.viewSite": "Ver Sitio",
    "projects.viewCode": "Ver Código",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "Trabajemos juntos en tu próximo proyecto",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.sended": "¡Mensaje Enviado!",
    "contact.error": "Error al enviar el mensaje. Por favor, intenta más tarde.",
    "contact.emailLabel": "Email",
    "contact.githubLabel": "GitHub",
    "contact.linkedinLabel": "LinkedIn",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}
