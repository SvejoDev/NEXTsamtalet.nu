"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[var(--font-playfair)] leading-tight text-balance">
              VÄLKOMMEN TILL SAMTALET.NU!
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Söker du efter någon att samtala med om sådant som skaver inom dig, som är jobbigt och tungt och som
              behöver sättas ord på? SAMTALET.NU erbjuder digitala individuella kurativa, reflekterande, stödjande
              samtal där även lyssnandet från mig som samtalspartner har en viktig funktion.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            >
              Boka Ditt Samtal Här
            </Button>
          </div>
          <div className="relative order-first md:order-last ">
            <Image
              src="/images/mia.png"
              alt="Professionell terapeut"
              width={500}
              height={500}
              className="rounded-lg shadow-lg h-auto w-auto max-w-[500px] mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
