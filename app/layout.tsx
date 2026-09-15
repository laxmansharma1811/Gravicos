import type { Metadata } from 'next'
import './layout.css'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s — Gravicos',
    default: 'Gravicos — Physics & Mathematics Education',
  },
  description:
    'Free video lessons and structured learning paths on Calculus, Physics, Classical Mechanics, Electromagnetism, Quantum Physics, and Linear Algebra by Gravicos.',
  keywords: ['Calculus', 'Physics', 'Mathematics', 'Classical Mechanics', 'Electromagnetism', 'Quantum Mechanics', 'Linear Algebra', 'Gravicos', 'STEM Education'],
  authors: [{ name: 'Gravicos' }],
  creator: 'Gravicos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gravicos.com',
    title: 'Gravicos — Physics & Mathematics Education',
    description: 'Free video lessons on Calculus, Physics, Classical Mechanics, Electromagnetism, and Quantum Physics.',
    siteName: 'Gravicos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gravicos — Physics & Mathematics Education',
    description: 'Free video lessons on Calculus, Physics, Classical Mechanics, Electromagnetism, and Quantum Physics.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%232563EB'/%3E%3Cpath d='M9 16.5C9 13.46 11.46 11 14.5 11H20V14H14.5C13.12 14 12 15.12 12 16.5C12 17.88 13.12 19 14.5 19H17V17H14.5V14H20V22H14.5C11.46 22 9 19.54 9 16.5Z' fill='white'/%3E%3C/svg%3E" />
      </head>
      <body>
        {/* Dark mode initialization script */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (theme === 'dark' || (!theme && prefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
