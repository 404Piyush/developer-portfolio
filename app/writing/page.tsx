import type { Metadata } from "next"
import Link from "next/link"
import { MotionReveal } from "@/components/motion-reveal"
import { Markdown } from "@/components/markdown"
import { writingPosts } from "@/data/writing"

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical writing from Piyush Utkar on Web3, Discord bots, C systems work, and full-stack deployment.",
}

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(iso)
  )

export default function WritingPage() {
  return (
    <div className="space-y-10 pb-12 pt-2">
      <MotionReveal>
        <section className="card bg-bananaCream p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Writing</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] sm:text-5xl">
            Notes from the work.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Technical writeups on the projects I am shipping. Short, honest, grounded in the code I
            actually wrote. More posts land as I find the time to write them up properly.
          </p>
        </section>
      </MotionReveal>

      <div className="space-y-10">
        {writingPosts.map((post, index) => (
          <MotionReveal key={post.slug} delay={index * 0.04}>
            <article>
              <header className="border-b-[3px] border-border pb-5">
                <p className="font-mono text-xs font-bold text-ink-muted">
                  {formatDate(post.date)} · {post.readingTime}
                </p>
                <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">{post.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{post.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag bg-bg-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </header>
              <div className="pt-5">
                <Markdown source={post.body} />
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>

      <MotionReveal>
        <section className="card mt-12 p-6 text-center sm:p-8">
          <p className="text-sm font-bold text-ink-soft">
            Want to read more? <Link href="/#contact" className="underline">Send a request</Link>{" "}
            and I will write the next one.
          </p>
        </section>
      </MotionReveal>
    </div>
  )
}