"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-foreground/70">{t("contact.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="animate-on-scroll">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("contact.email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.message")}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Links */}
          <div className="animate-on-scroll space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>

              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-blue-500/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">{t("contact.emailLabel")}</div>
                  <div className="text-sm text-foreground/70">your.email@example.com</div>
                </div>
              </a>

              <a
                href="https://github.com/YourUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-blue-500/50 transition-colors"
              >
                <Github className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">{t("contact.githubLabel")}</div>
                  <div className="text-sm text-foreground/70">github.com/YourUsername</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/YourProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-blue-500/50 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">{t("contact.linkedinLabel")}</div>
                  <div className="text-sm text-foreground/70">linkedin.com/in/YourProfile</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
