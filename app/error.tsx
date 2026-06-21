"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] items-center justify-center py-16">
      <div className="card max-w-lg p-8 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-wide text-deepPink">Error</p>
        <h1 className="mt-2 text-3xl font-black">Something went wrong.</h1>
        <p className="mt-3 text-sm text-ink-soft">
          I have logged the error. You can try again or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button type="button" onClick={reset} className="btn btn-primary">
            Try again
          </button>
          <Link href="/" className="btn">
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}