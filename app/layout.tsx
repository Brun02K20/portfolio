import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import I18nProvider from '@/components/i18n-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bruno Virinni | Fullstack Developer',
  description: 'Professional portfolio of Bruno Virinni, Fullstack Developer specialized in modern web technologies. Check out my projects and experience.',
  keywords: ['Bruno Virinni', 'Fullstack Developer', 'React', 'Next.js', 'Portfolio', 'JavaScript', 'Web Developer Argentina'],
  authors: [{ name: 'Bruno Virinni', url: 'https://brunovirinni.vercel.app' }],
  creator: 'Bruno Virinni',
  robots: 'index, follow',
  openGraph: {
    title: 'Bruno Virinni | Fullstack Developer',
    description: 'Explore the portfolio of Bruno Virinni, Fullstack Developer based in Argentina.',
    url: 'https://brunovirinni.vercel.app',
    siteName: 'Bruno Virinni Portfolio',
    locale: 'en_US, es_AR',
    type: 'website',
    images: [
      {
        url: 'https://brunovirinni.vercel.app/assets/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bruno Virinni Portfolio Screenshot',
      },
    ],
  },
  icons: {
    icon: '/images/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
