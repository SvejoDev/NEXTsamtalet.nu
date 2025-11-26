"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "#samtal", label: "Om Samtalet" },
  { href: "#viktigt", label: "Viktigt att Veta" },
  { href: "#om-mig", label: "Om Mig" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-[var(--font-playfair)] text-2xl font-bold text-primary">
            Samtalet.nu
          </Link>
          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-foreground transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            aria-label="Öppna navigationsmeny"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>
        <div className={`${isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300 md:hidden`}>
          <div className="mt-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-foreground transition-colors hover:text-primary"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
