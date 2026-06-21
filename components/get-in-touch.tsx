"use client"

import { Briefcase, CalendarDays, Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { profile } from "@/data/profile"

const linkItems = [
  {
    label: "GitHub",
    href: profile.socials.find((s) => s.label === "GitHub")!.href,
    icon: Github,
    accent: "bg-deepSkyBlue",
    detail: "Public repositories",
  },
  {
    label: "LinkedIn",
    href: profile.socials.find((s) => s.label === "LinkedIn")!.href,
    icon: Linkedin,
    accent: "bg-aquamarine",
    detail: "Professional profile",
  },
  {
    label: "Upwork",
    href: profile.socials.find((s) => s.label === "Upwork")!.href,
    icon: Briefcase,
    accent: "bg-deepPink",
    detail: "Verified client history",
  },
  {
    label: "Calendly",
    href: profile.socials.find((s) => s.label === "Calendly")!.href,
    icon: CalendarDays,
    accent: "bg-bananaCream",
    detail: "Schedule a meeting",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: "bg-lavender",
    detail: profile.email,
  },
]

export function GetInTouch() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [projectType, setProjectType] = useState("Web3 build")
  const [details, setDetails] = useState("")
  const [result, setResult] = useState<{ type: "idle" | "ok" | "err"; message: string }>({
    type: "idle",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setResult({ type: "idle", message: "" })

    if (!accessKey) {
      // Fallback: open the user's mail client with a pre-filled message
      const subject = encodeURIComponent(`Portfolio inquiry — ${projectType}`)
      const body = encodeURIComponent(
        `Hi Piyush,\n\nProject type: ${projectType}\nCompany: ${company || "-"}\n\n${details}\n\n— ${name} (${email})`
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setResult({ type: "ok", message: "Opening your mail client — finish sending from there." })
      setSubmitting(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append("access_key", accessKey)
      formData.append("subject", `Portfolio inquiry — ${projectType}`)
      formData.append("name", name)
      formData.append("email", email)
      formData.append("message", `Project type: ${projectType}\nCompany: ${company || "-"}\n\n${details}`)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !data.success) {
        setResult({ type: "err", message: data.message ?? "Submission failed." })
        return
      }
      setResult({ type: "ok", message: "Message sent. I will reply within 24 hours." })
      setName("")
      setEmail("")
      setCompany("")
      setProjectType("Web3 build")
      setDetails("")
    } catch {
      setResult({ type: "err", message: "Network error. Please email me directly." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="card p-6 sm:p-8">
      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="eyebrow text-ink-muted">Get in touch</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Brief me on what you are building.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            The fastest way to start a working conversation. Tell me the shape of the project, the blockers,
            and the kind of help you want. I reply within 24 hours, IST or otherwise.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-3xl border-[3px] border-border bg-bg-muted p-5 shadow-[5px_5px_0_0_var(--border)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5 text-sm font-bold">
                <span>Name</span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-2xl border-[3px] border-border bg-bg-elevated px-4 py-3 text-sm font-medium outline-none focus:-translate-y-0.5"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-1.5 text-sm font-bold">
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border-[3px] border-border bg-bg-elevated px-4 py-3 text-sm font-medium outline-none focus:-translate-y-0.5"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <label className="space-y-1.5 text-sm font-bold">
                <span>Project type</span>
                <select
                  value={projectType}
                  onChange={(event) => setProjectType(event.target.value)}
                  className="w-full rounded-2xl border-[3px] border-border bg-bg-elevated px-4 py-3 text-sm font-medium outline-none focus:-translate-y-0.5"
                >
                  {["Web3 build", "Full-stack product", "Discord automation", "Backend systems", "Something custom"].map(
                    (option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </select>
              </label>
              <label className="space-y-1.5 text-sm font-bold">
                <span>Company or team</span>
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="w-full rounded-2xl border-[3px] border-border bg-bg-elevated px-4 py-3 text-sm font-medium outline-none focus:-translate-y-0.5"
                  placeholder="Startup, product, or team"
                />
              </label>
            </div>

            <label className="space-y-1.5 text-sm font-bold">
              <span>What are you building?</span>
              <textarea
                required
                rows={5}
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                className="w-full resize-none rounded-2xl border-[3px] border-border bg-bg-elevated px-4 py-3 text-sm font-medium outline-none focus:-translate-y-0.5"
                placeholder="Quick version: what you need, what is blocked, and what kind of help you want."
              />
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending…" : "Send inquiry"}
              </button>
              <Link
                href={profile.socials.find((s) => s.label === "Calendly")!.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <CalendarDays className="h-4 w-4" />
                Schedule a meet
              </Link>
            </div>
            {result.message ? (
              <p
                role="status"
                className={`text-sm font-bold ${result.type === "ok" ? "text-aquamarine" : "text-deepPink"}`}
              >
                {result.message}
              </p>
            ) : null}
          </form>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          {linkItems.map(({ label, href, icon: Icon, accent, detail }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className={`card-flat ${accent} flex items-start gap-4 p-4 transition hover:-translate-y-1`}
            >
              <span className="rounded-2xl border-[3px] border-border bg-bg-elevated p-2.5">
                <Icon className="h-5 w-5 text-ink" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-black text-ink">{label}</span>
                <span className="mt-1 block text-xs font-medium text-ink-soft">{detail}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}