"use client"

import type React from "react"
import {  useFormStatus } from "react-dom"
import { useActionState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { sendContactEmail, type ContactFormState } from "@/app/actions/send-email"

// Componente para el botón de envío (necesita estar separado para usar useFormStatus)
function SubmitButton({ pending }: { pending: boolean }) {
  const { t } = useLanguage()
  const { pending: formPending } = useFormStatus()
  
  return (
    <Button type="submit" className="w-full" disabled={formPending || pending}>
      {formPending || pending ? (
        <>
          <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-b-transparent border-white" />
          {t("contact.sending")}
        </>
      ) : (
        <>
          <Send className="w-4 h-4 mr-2" />
          {t("contact.send")}
        </>
      )}
    </Button>
  )
}

export function Contact() {
  const { t } = useLanguage()
  const formRef = useRef<HTMLFormElement>(null)

  const initialState: ContactFormState = {
    success: false,
    message: '',
  }

  const [state, formAction, pending] = useActionState(sendContactEmail, initialState)

  // Limpiar el formulario y el mensaje después de envío exitoso
  useEffect(() => {
    if (state.success) {
      // Limpiar el formulario
      formRef.current?.reset()
      
      // Limpiar el mensaje después de 5 segundos
      const timer = setTimeout(() => {
        // Para limpiar el estado, necesitamos hacer un dispatch con el estado inicial
        // Esto se puede hacer enviando un formData vacío o usando un action específico
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [state.success])

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
              <form ref={formRef} action={formAction} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder={t("contact.name")}
                    required
                    className={state.errors?.name ? 'border-red-500' : ''}
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("contact.email")}
                    required
                    className={state.errors?.email ? 'border-red-500' : ''}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.message")}
                    rows={4}
                    required
                    className={state.errors?.message ? 'border-red-500' : ''}
                  />
                </div>

                {/* Mensajes de estado */}
                {state.message && (
                  <div className={`flex items-center space-x-2  rounded-lg ${state.success
                      ? 'text-green-600 '
                      : 'text-red-600 '
                    }`}>
                    {state.success ? (
                      <><CheckCircle className="w-5 h-5" /> <span>{t("contact.sended")}</span></>
                    ) : (
                      <><AlertCircle className="w-5 h-5" /> <span>{t("contact.error")}</span></>
                    )}
                    
                  </div>
                )}

                <SubmitButton pending={pending} />
              </form>
            </CardContent>
          </Card>

          {/* Contact Links */}
          <div className="animate-on-scroll space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>

              <a
                href="https://github.com/JuanBonadeo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-blue-500/50 transition-colors"
              >
                <Github className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">{t("contact.githubLabel")}</div>
                  <div className="text-sm text-foreground/70">github.com/JuanBonadeo</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/juan-cruz-bonadeo-55a243188/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-blue-500/50 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">{t("contact.linkedinLabel")}</div>
                  <div className="text-sm text-foreground/70">linkedin/JuanBonadeo</div>
                </div>
              </a>

              <a
                href="mailto:juancruzbonadeo04@gmail.com"
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-blue-500/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">{t("contact.emailLabel")}</div>
                  <div className="text-sm text-foreground/70">juancruzbonadeo04@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}