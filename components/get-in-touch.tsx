"use client"

import Link from "next/link"
import { BriefcaseBusiness, CalendarDays, Github, Linkedin, Mail, Send } from "lucide-react"
import { useMemo, useState } from "react"
import { profile } from "@/data/portfolio"

type GetInTouchProps = {
  id?: string
  title?: string
  description?: string
}

const links = [
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
    tone: "bg-deepSkyBlue",
    detail: "See the repositories",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    tone: "bg-aquamarine",
    detail: "Professional profile",
  },
  {
    label: "Upwork",
    href: profile.upwork,
    icon: BriefcaseBusiness,
    tone: "bg-deepPink",
    detail: "Verified client history",
  },
  {
    label: "Calendly",
    href: profile.calendly,
    icon: CalendarDays,
    tone: "bg-bananaCream",
    detail: "Schedule a meeting",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    tone: "bg-lavender",
    detail: profile.email,
  },
]

export function GetInTouch({
  id = "contact",
  title = "Make it ridiculously easy for a serious client to reach out",
  description = "The pitch here is simple: sharp systems thinking, strong delivery range, and enough engineering taste to turn complex product ideas into something clean, fast, and convincing.",
}: GetInTouchProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [projectType, setProjectType] = useState("Web3 build")
  const [details, setDetails] = useState("")

  const mailtoHref = useMemo(() => {
    const subject = `${projectType} inquiry from ${name || "a potential client"}`
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Company: ${company || "-"}`,
      `Project type: ${projectType}`,
      "",
      "Project details:",
      details || "-",
      "",
      "Sent from portfolio contact section.",
    ].join("\n")

    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [company, details, email, name, projectType])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = mailtoHref
  }

  return (
    <section id={id} className="rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
      <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">get in touch</p>
          <h2 className="text-3xl font-black leading-tight text-black sm:text-4xl">{title}</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base">{description}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-black/75">
            If the client wants someone who can translate rough ambition into shippable software, this section should feel like the obvious next step.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Web3 builds", "Discord automation", "Systems tooling", "Full-stack products"].map((item, index) => (
              <span
                key={item}
                className={`rounded-xl border-[3px] border-black px-3 py-2 text-xs font-black uppercase tracking-wide text-black ${
                  index % 4 === 0
                    ? "bg-bananaCream"
                    : index % 4 === 1
                      ? "bg-aquamarine"
                      : index % 4 === 2
                        ? "bg-deepSkyBlue"
                        : "bg-lavender"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[30px] border-[3px] border-black bg-[#fff8ef] p-5 shadow-[6px_6px_0_#000]">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-black text-black">
                <span>Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-2xl border-[3px] border-black bg-white px-4 py-3 text-sm font-medium text-black outline-none transition focus:-translate-y-0.5"
                />
              </label>
              <label className="space-y-2 text-sm font-black text-black">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border-[3px] border-black bg-white px-4 py-3 text-sm font-medium text-black outline-none transition focus:-translate-y-0.5"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <label className="space-y-2 text-sm font-black text-black">
                <span>Project type</span>
                <select
                  value={projectType}
                  onChange={(event) => setProjectType(event.target.value)}
                  className="w-full rounded-2xl border-[3px] border-black bg-white px-4 py-3 text-sm font-medium text-black outline-none transition focus:-translate-y-0.5"
                >
                  {["Web3 build", "Full-stack product", "Discord automation", "Backend systems", "Something custom"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-black text-black">
                <span>Company or team</span>
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Startup, product, or team name"
                  className="w-full rounded-2xl border-[3px] border-black bg-white px-4 py-3 text-sm font-medium text-black outline-none transition focus:-translate-y-0.5"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-black text-black">
              <span>What are you building?</span>
              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="Give the quick version: what you need, what is blocked, and what kind of help you want."
                rows={5}
                className="w-full resize-none rounded-2xl border-[3px] border-black bg-white px-4 py-3 text-sm font-medium text-black outline-none transition focus:-translate-y-0.5"
              />
            </label>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl border-[3px] border-black bg-deepPink px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                Send inquiry
              </button>
              <Link
                href={profile.calendly}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border-[3px] border-black bg-bananaCream px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
              >
                <CalendarDays className="h-4 w-4" />
                Schedule a meet
              </Link>
            </div>
          </form>
        </div>

        <div className="grid auto-rows-min gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {links.map(({ label, href, icon: Icon, tone, detail }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              className={`${tone} block rounded-[28px] border-[3px] border-black p-5 text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border-[3px] border-black bg-white p-3">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-black">{label}</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">{detail}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
