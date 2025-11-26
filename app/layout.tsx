import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
        <Script id="svejo-booking-config" strategy="afterInteractive">
          {`
            var APP_ID = "jx7b081n47vfk0e8w00dwtvskd7vz3q9";
            var WIDGET_ID = "samtaletnu";
            if (typeof window.svejoBookingSettings === "undefined") {
              window.svejoBookingSettings = [];
            }
            window.svejoBookingSettings.push({
              base_url: "https://boka.svejo.se/",
              app_id: APP_ID,
              widget_id: WIDGET_ID,
              floating: true,
              btn_text: {"sv": "Boka nu", "en": "Book now"},
              btn_style: { "size": "large", "bg": "#0b0911", "color": "#ffffff" }
            });
          `}
        </Script>
        <Script id="svejo-booking-loader" strategy="afterInteractive">
          {`
            (function() {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.async = true;
              script.src = "https://boka.svejo.se/widget.js";
              if (!document.querySelector('[src="' + script.src + '"]')) {
                var firstScript = document.getElementsByTagName("script")[0];
                firstScript.parentNode?.insertBefore(script, firstScript);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
