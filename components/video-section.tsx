'use client'

import { useState } from 'react'

export function VideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-card-foreground font-[var(--font-playfair)] mb-8">
            Lär Känna Mig Bättre
          </h2>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Laddar video...
                  </p>
                </div>
              </div>
            )}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RfpTBZm0sS8?si=AGOv3dt6qEztyST2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={handleVideoLoad}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
