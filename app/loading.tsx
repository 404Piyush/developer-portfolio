export default function Loading() {
  return (
    <div className="space-y-6 py-10" aria-busy="true" aria-live="polite">
      <div className="card h-40 animate-pulse" />
      <div className="card h-24 animate-pulse" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card h-32 animate-pulse" />
        <div className="card h-32 animate-pulse" />
        <div className="card h-32 animate-pulse" />
      </div>
    </div>
  )
}