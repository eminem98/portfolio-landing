import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Eugenio Carramusa | Portfolio',
  description:
    'Portfolio personale di Eugenio Carramusa, sviluppatore web specializzato in siti eleganti e moderni.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      suppressHydrationWarning      /* evita il flash di contenuti in SSR/CSR */
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  )
}
