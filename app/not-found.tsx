import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center py-16">
      <div className="card max-w-lg p-8 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-wide text-ink-muted">404</p>
        <h1 className="mt-2 text-3xl font-black">Page not found</h1>
        <p className="mt-3 text-sm text-ink-soft">
          The page you were looking for has moved or never existed.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <Link href="/work" className="btn">
            Browse work
          </Link>
        </div>
      </div>
    </div>
  )
}