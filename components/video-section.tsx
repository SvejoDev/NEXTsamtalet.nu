export function VideoSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-card-foreground font-[var(--font-playfair)] mb-8">
            Lär Känna Mig Bättre
          </h2>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <video
              className="w-full h-full"
              controls
              preload="metadata"
            >
              <source src="/videos/samtaletNu.mp4" type="video/mp4" />
              Din webbläsare stödjer inte videouppspelning.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
