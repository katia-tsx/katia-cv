import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://katia-portfolio.vercel.app'),
  title: {
    default: 'Katia Pujols | Frontend Developer & Full Stack Developer',
    template: '%s | Katia Pujols'
  },
  description: 'Frontend Developer specializing in Next.js, React, TypeScript, and SAP Business One integration. Creating exceptional user experiences with modern web technologies.',
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'SAP Business One',
    'Web Development',
    'UI/UX',
    'JavaScript',
    'Tailwind CSS',
    'Portfolio',
    'Katia Pujols',
    'Katia Nathaly Pujols Almanzar'
  ],
  authors: [{ name: 'Katia Nathaly Pujols Almanzar', url: 'https://github.com/katia-tsx' }],
  creator: 'Katia Pujols',
  publisher: 'Katia Pujols',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://katia-portfolio.vercel.app',
    title: 'Katia Pujols | Frontend Developer & Full Stack Developer',
    description: 'Frontend Developer specializing in Next.js, React, TypeScript, and SAP Business One integration. Creating exceptional user experiences with modern web technologies.',
    siteName: 'Katia Pujols Portfolio',
    images: [
      {
        url: 'https://katia-portfolio.vercel.app/banner.png',
        width: 1200,
        height: 630,
        alt: 'Katia Pujols - Frontend Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katia Pujols | Frontend Developer & Full Stack Developer',
    description: 'Frontend Developer specializing in Next.js, React, TypeScript, and SAP Business One integration.',
    creator: '@katiadev',
    images: ['https://katia-portfolio.vercel.app/banner.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
