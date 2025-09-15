"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import "./globals.css"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  function Content({ children }: { children: React.ReactNode }) {
    // Access search params to ensure client boundary; no direct usage needed
    void useSearchParams()
    return <>{children}</>
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Content>{children}</Content>
      </Suspense>
      <Analytics />
    </>
  )
}
