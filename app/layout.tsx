import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { profile } from "@/data/profile"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const siteUrl = "https://404piyush.me"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.summary,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  keywords: [
    "Piyush Utkar",
    "Web3 engineer",
    "Solidity developer",
    "OP Stack",
    "Full-stack engineer",
    "Next.js",
    "FastAPI",
    "Discord bot developer",
    "C systems programming",
    profile.location,
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${profile.name} // LAB`,
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    creator: "@PiyushUtkar",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e10" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Inline script to set data-theme="dark" on first paint if the user
  // previously chose dark mode. Prevents FOUC. The site defaults to light
  // (no data-theme attribute) for first-time visitors.
  const themeScript = `(function(){try{var t=localStorage.getItem('pjulab-theme');if(t==='dark'){document.documentElement.dataset.theme='dark';}}catch(e){}})();`

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans text-ink`}>
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">{children}</main>
        <footer className="border-t-[3px] border-border bg-bg-muted py-8">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-ink-muted sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} {profile.name}. Built in Mumbai.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {profile.socials.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono font-bold hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}