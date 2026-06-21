import type { Metadata } from "next"
import Link from "next/link"
import { MotionReveal } from "@/components/motion-reveal"
import { writingPosts } from "@/data/writing"

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical writing from Piyush Utkar on Web3, Discord bots, and C systems work.",
}

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(iso)
  )

export default function WritingPage() {
  return (
    <div className="space-y-10 pb-12 pt-2">
      <MotionReveal>
        <section className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Writing</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] sm:text-5xl">
            Notes from the work.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Short technical writeups on the projects I am shipping. More posts land as I find the time to
            write them up properly.
          </p>
        </section>
      </MotionReveal>

      <MotionReveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {writingPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`card p-5 ${index % 3 === 0 ? "bg-bananaCream" : index % 3 === 1 ? "bg-aquamarine" : "bg-deepSkyBlue"}`}
            >
              <p className="font-mono text-xs font-bold text-ink">
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h2 className="mt-3 text-xl font-black">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag bg-bg-elevated">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-bold text-ink-muted">
                Full post coming soon — subscribe via{" "}
                <Link href="/#contact" className="underline">
                  email
                </Link>{" "}
                and I will send it when it lands.
              </p>
            </article>
          ))}
        </div>
      </MotionReveal>
    </div>
  )
}