import { Card, CardContent } from "@/components/ui/card"

export function ConversationSection() {
  return (
    <section id="samtal" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground font-[var(--font-playfair)] mb-8 text-center">
            Samtalet och Lyssnandet
          </h2>

          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 font-[var(--font-playfair)]">
                  Varför ska man samtala med någon?
                </h3>
                <p className="text-card-foreground leading-relaxed text-pretty">
                  Jag tror att samtal under trygga former med givna ramar är en väg framåt och vidare. Mot insikt,
                  förståelse, reflektion men också för att se samband och kunna komma vidare. Men samtal är också ett
                  sätt att sortera i tankar och känslor men också för att på sikt skapa förståelse för hur saker och
                  ting blev som det blev, och detta kan förändra måendet i en positiv riktning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 font-[var(--font-playfair)]">
                  Vad kan jag som samtalspartner erbjuda dig?
                </h3>
                <p className="text-card-foreground leading-relaxed text-pretty">
                  I de samtal som jag erbjuder är min roll att reflektera och utmana dig kring det som vi samtalar om i
                  syfte att belysa, fördjupa och kanske se mönster och hitta andra vägar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 font-[var(--font-playfair)]">
                  Lyssnandets roll
                </h3>
                <p className="text-card-foreground leading-relaxed text-pretty">
                  Alla samtal är viktiga, men även lyssnandet behöver få sin plats. Att bli lyssnad på helt och fullt är
                  det kanske inte så ofta man blir. När man blir lyssnad på öppnas möjligheter till bland annat
                  reflektion, förändring, läkning och klarhet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
