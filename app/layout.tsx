import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { profile } from "@/data/portfolio"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Piyush J. Utkar | Web3 & Systems Engineer",
  description: "Portfolio of Piyush J. Utkar, Full-Stack & Web3 Engineer focused on TRON, Arbitrum, and systems architecture.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-[#fff8ef] font-sans text-black antialiased`}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fee440_0,transparent_30%),radial-gradient(circle_at_90%_10%,#9b5de5_0,transparent_24%),radial-gradient(circle_at_10%_80%,#00f5d4_0,transparent_24%),linear-gradient(180deg,#fff8ef_0%,#fff0d2_100%)] opacity-55" />
        <SiteHeader />
        <main className="mx-auto mt-2 w-full max-w-6xl px-4 pb-16 pt-10 sm:mt-3 sm:px-6 sm:pt-12 lg:px-8">{children}</main>
        <footer className="border-t-[3px] border-black bg-[#fff8ef] py-8">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-black/70 sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <div className="flex items-center gap-4">
              <Link href={profile.github} target="_blank" className="font-mono font-bold hover:text-deepPink">
                GitHub
              </Link>
              <Link href={profile.linkedin} target="_blank" className="font-mono font-bold hover:text-deepSkyBlue">
                LinkedIn
              </Link>
              <Link href={profile.upwork} target="_blank" className="font-mono font-bold hover:text-deepSkyBlue">
                Upwork
              </Link>
              <Link href={profile.calendly} target="_blank" className="font-mono font-bold hover:text-deepPink">
                Calendly
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
