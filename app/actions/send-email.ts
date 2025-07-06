// app/actions/send-email.ts
'use server'

import { useLanguage } from '@/components/language-provider.jsx'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// Schema de validación
const contactSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
  email: z.string().email('Email inválido'),
  message: z.string().min(1, 'El mensaje es requerido').max(1000, 'El mensaje es muy largo'),
})

export type ContactFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Extraer datos del formulario
    const rawFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    // Validar datos
    const validatedFields = contactSchema.safeParse(rawFormData)

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Por favor corrige los errores en el formulario',
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, message } = validatedFields.data

    // Verificar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada')
      return {
        success: false,
        message: 'Error de configuración del servidor. Por favor intenta más tarde.',
      }
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contacto@tudominio.com',
      to: process.env.CONTACT_EMAIL || 'juancruzbonadeo04@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Mensaje:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
            <p>Para responder, puedes hacer clic en "Responder" o enviar un email directamente a: ${email}</p>
          </div>
        </div>
      `,
      text: `
        Nuevo mensaje de contacto
        
        Nombre: ${name}
        Email: ${email}
        
        Mensaje:
        ${message}
        
        ---
        Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
        Para responder, envía un email a: ${email}
      `,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return {
        success: false,
        message: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      }
    }

    console.log('Email enviado exitosamente:', data)
    return {
      success: true,
      message: '¡Mensaje enviado exitosamente! Te responderé pronto.',
    }

  } catch (error) {
    console.error('Error inesperado:', error)
    return {
      success: false,
      message: 'Error inesperado. Por favor intenta de nuevo más tarde.',
    }
  }
}