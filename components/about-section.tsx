import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="om-mig" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground font-[var(--font-playfair)] mb-8 text-center">OM MIG</h2>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <Image
                    src="/images/mia.png"
                    alt="Terapeut"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:col-span-2 space-y-6">
                  <h3 className="text-2xl font-bold text-card-foreground font-[var(--font-playfair)]">
                    SOCIONOM OCH STEG 1-UTBILDAD TERAPEUT MED PSYKODYNAMISK INRIKTNING
                  </h3>
                  <p className="text-card-foreground leading-relaxed text-pretty">
                    Jag är utbildad socionom och har arbetat i många år med socialt arbete så som kurator i skola, inom
                    frivilligorganisationen BRIS samt inom den kommunala och privata sociala sektorn. Jag har även
                    kunskap och erfarenhet från kommunal familjerådgivning och har erfarenhet av parsamtal. Jag har en
                    vidareutbildning i psykoterapi; grundutbildning (Steg 1) i psykoterapi med psykodynamisk inriktning.
                    Jag går regelbundet i handledning hos en legitimerad psykoterapeut.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
