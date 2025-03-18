import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { PlayfulBackground } from "@/components/playful-background"
import { ComingSoonNavbar } from "@/components/coming-soon-navbar"
import { ComingSoonFooter } from "@/components/coming-soon-footer"

export default function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <PlayfulBackground />
      <ComingSoonNavbar />
      {children}
      <ComingSoonFooter />
    </ThemeProvider>
  )
}

