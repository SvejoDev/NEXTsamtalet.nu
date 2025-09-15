import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function ImportantInfoSection() {
  return (
    <section id="viktigt" className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <AlertCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground font-[var(--font-playfair)]">
              VIKTIGT ATT VETA OM SAMTALET.NU
            </h2>
          </div>

          <div className="space-y-4">
            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Vi är inte ansluten till Region Skånes vårdval vilket innebär att samtalet bekostas av dig själv.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Varje samtal pågår i 45 minuter. Vanligtvis börjar vi med 1 samtal/vecka, men upplägget kan utformas
                  efter dina önskemål.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Jag erbjuder i dagsläget endast samtal digitalt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Tidsbokning sker endast via nedanstående kontaktformulär.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
