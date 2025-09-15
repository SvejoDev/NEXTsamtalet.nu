import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Samtalet.nu - Psykodynamisk Terapi",
  description: "Professionell samtalsbehandling med psykodynamisk inriktning. Boka ditt samtal via SMS.",
  keywords: [
    // Primary keywords
    'samtala', 'digitala samtal', 'terapeut göteborg', 'samtalsterapi göteborg',
    'reflekterande samtal', 'stödjande samtal', 'samtalspartner', 'reflektion',
    'psykoterapi göteborg', 'kurator göteborg', 'socionom terapeut',
    
    // Secondary keywords  
    'individuell terapi', 'kurativa samtal', 'online terapi', 'digitalt stöd',
    'psykodynamisk terapi', 'personlig utveckling', 'psykisk hälsa',
    'terapeutiska samtal', 'lyssnande', 'välmående',
    
    // Long-tail keywords
    'boka samtal med terapeut göteborg', 'professionell samtalspartner',
    'digitala terapisamtal online', 'stödjande samtal för reflektion',
    'privat terapeut västra götaland', 'individuella samtal online',
    
    // Problem-focused
    'ångest', 'depression', 'stress', 'oro', 'kris', 'sorg', 'utmattning',
    'bearbeta', 'förändring', 'insikt', 'förståelse', 'klarhet',
    
    // Location variations
    'terapeut västra götaland', 'samtalsstöd göteborg', 'kurator väster'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
