import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juan Bonadeos Profile',
  description: 'A portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
