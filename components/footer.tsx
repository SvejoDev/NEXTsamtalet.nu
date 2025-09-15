export function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground font-[var(--font-playfair)]">Samtalet.nu</h3>
          <p className="text-muted-foreground">Professionell samtalsbehandling med psykodynamisk inriktning</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Endast digitala samtal</p>
            <p>Bokning via SMS efter kontaktformulär</p>
            <p>Inte anslutet till Region Skånes vårdval</p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">© 2024 Samtalet.nu. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
