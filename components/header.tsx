import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary font-[var(--font-playfair)]">
            Samtalet.nu
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#samtal" className="text-foreground hover:text-primary transition-colors">
              Om Samtalet
            </Link>
            <Link href="#viktigt" className="text-foreground hover:text-primary transition-colors">
              Viktigt att Veta
            </Link>
            <Link href="#om-mig" className="text-foreground hover:text-primary transition-colors">
              Om Mig
            </Link>
            <Link href="#kontakt" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
