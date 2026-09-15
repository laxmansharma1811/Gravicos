import type { Metadata } from 'next'
import './layout.css'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://gravicos.com'),
  title: {
    template: '%s | Gravicos',
    default: 'Gravicos — Physics & Maths for NEB +2 Science Students',
  },
  description:
    'Free video lessons for Nepali +2 Science and Management students. Master NEB Class 11 and 12 Physics, Mathematics, Calculus, and Quantum Mechanics with Gravicos.',
  keywords: [
    'NEB Class 11 Physics',
    'NEB Class 12 Mathematics',
    'Nepali +2 Science lessons',
    'Physics in Nepali',
    'Maths for Management Nepali',
    'IOE Entrance Preparation',
    'CEE Entrance Preparation',
    'Gravicos YouTube',
    'NEB Exam preparation',
    'Class 11 Science Nepal',
    'Class 12 Science Nepal'
  ],
  authors: [{ name: 'Gravicos Education' }],
  creator: 'Gravicos',
  openGraph: {
    type: 'website',
    locale: 'en_NP',
    url: 'https://gravicos.com',
    title: 'Gravicos — Physics & Maths for NEB +2 Science Students',
    description: 'Free video lessons for Nepali +2 Science and Management students. Master NEB Class 11 and 12 Physics and Mathematics.',
    siteName: 'Gravicos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gravicos — NEB Physics & Mathematics',
    description: 'Free video lessons for Nepali +2 Science and Management students.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Gravicos',
  url: 'https://gravicos.com',
  logo: 'https://yt3.googleusercontent.com/RxdcgkBLG7YEgti937GBA6lPc3urEE0_tIS_anKz1_dHeO9jqrhauMcN1iSeTADdjRk6y0Mqjw=s160-c-k-c0x00ffffff-no-rj',
  description: 'An educational platform dedicated to teaching Mathematics and Physics for NEB +2 Science and Management students in Nepal.',
  sameAs: [
    'https://www.youtube.com/@gravicos'
  ],
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
        <link rel="icon" href="https://yt3.googleusercontent.com/RxdcgkBLG7YEgti937GBA6lPc3urEE0_tIS_anKz1_dHeO9jqrhauMcN1iSeTADdjRk6y0Mqjw=s160-c-k-c0x00ffffff-no-rj" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
