"use client"

export function BokaSection() {
  return (
    <section id="kontakt" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Boka</p>
            <h2 className="text-3xl font-bold text-card-foreground" style={{ fontFamily: "var(--font-playfair)" }}>
              Boka ditt samtal
            </h2>
            <p className="text-muted-foreground">
              Använd den flytande knappen &quot;Boka nu&quot; nere i högra hörnet för att öppna bokningsfönstret.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Om knappen inte syns, uppdatera sidan eller inaktivera eventuella annonsblockerare.
          </p>
        </div>
      </div>
    </section>
  )
}
