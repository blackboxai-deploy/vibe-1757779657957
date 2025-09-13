import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello World - Next.js App',
  description: 'A simple and modern Hello World page built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}