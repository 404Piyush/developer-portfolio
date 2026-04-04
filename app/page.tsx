import Image from "next/image"
import Link from "next/link"
import { GetInTouch } from "@/components/get-in-touch"
import { MotionReveal } from "@/components/motion-reveal"
import { ProjectBrowser } from "@/components/project-browser"
import { SystemStatus } from "@/components/system-status"
import {
  allProjects,
  clientSignals,
  credibilityStats,
  experienceTimeline,
  featuredProjects,
  focusAreas,
  introCards,
  profile,
  projectSearchHints,
  upworkWins,
} from "@/data/portfolio"

export default function HomePage() {
  return (
    <div className="space-y-12 pb-10">
      <MotionReveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6 rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[10px_10px_0_#000] sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rotate-[-3deg] rounded-2xl border-[3px] border-black bg-lavender px-4 py-2 font-mono text-xs font-black text-black">
              {profile.title}
            </span>
            <span className="rounded-2xl border-[3px] border-black bg-bananaCream px-4 py-2 text-xs font-black text-black">
              {profile.location}
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-black leading-none text-black sm:text-6xl">{profile.hero}</h1>
            <p className="max-w-3xl text-base leading-relaxed text-black/75 sm:text-lg">{profile.summary}</p>
            <p className="max-w-3xl text-base leading-relaxed text-black/75">
              Web3 clients, automation clients, and product clients all get the same thing here: proof, range, and a fast way to contact you without hunting around the site.
            </p>
          </div>
          <SystemStatus />
          <div className="flex flex-wrap gap-3">
            <Link
              href={profile.github}
              target="_blank"
              className="rounded-2xl border-[3px] border-black bg-deepSkyBlue px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
            >
              GitHub →
            </Link>
            <Link
              href={profile.upwork}
              target="_blank"
              className="rounded-2xl border-[3px] border-black bg-deepPink px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
            >
              Upwork →
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl border-[3px] border-black bg-aquamarine px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
            >
              email me →
            </a>
            <Link
              href="#contact"
              className="rounded-2xl border-[3px] border-black bg-bananaCream px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
            >
              get in touch →
            </Link>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rotate-[2deg] overflow-hidden rounded-[32px] border-[3px] border-black bg-bananaCream shadow-[10px_10px_0_#000]">
            <div className="relative h-[320px]">
              <Image src="/images/professional-photo.jpg" alt="Piyush J. Utkar" fill className="object-cover" />
            </div>
          </div>
          <div className="rotate-[-2deg] rounded-[28px] border-[3px] border-black bg-white p-5 shadow-[8px_8px_0_#000]">
            <p className="font-mono text-xs font-black text-black/60">what a client can verify fast</p>
            <div className="mt-3 space-y-3">
              {profile.highlights.map((item) => (
                <div key={item} className="rounded-2xl border-[3px] border-black bg-[#fff8ef] p-3 text-sm font-bold text-black">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </MotionReveal>

      <MotionReveal delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {credibilityStats.map((item, index) => (
          <div
            key={item.label}
            className={`${item.tone} ${index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"} rounded-[28px] border-[3px] border-black p-5 shadow-[6px_6px_0_#000]`}
          >
            <p className="font-mono text-xs font-black uppercase tracking-wide text-black/65">{item.label}</p>
            <p className="mt-2 text-3xl font-black text-black">{item.value}</p>
          </div>
        ))}
      </MotionReveal>

      <MotionReveal delay={0.12} className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[32px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">where I create the most leverage</p>
          <div className="mt-4 space-y-3">
            {focusAreas.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border-[3px] border-black p-4 text-sm font-bold text-black ${
                  index % 4 === 0
                    ? "bg-bananaCream"
                    : index % 4 === 1
                      ? "bg-aquamarine"
                      : index % 4 === 2
                        ? "bg-deepSkyBlue"
                        : "bg-lavender"
                }`}
              >
                <p className="text-sm font-black uppercase tracking-wide">{item.title}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {introCards.map((card, index) => (
            <article
              key={card.title}
              className={`${card.color} ${index === 1 ? "rotate-[2deg]" : "rotate-[-2deg]"} rounded-[28px] border-[3px] border-black p-5 shadow-[6px_6px_0_#000]`}
            >
              <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">{card.title}</p>
              <p className="mt-3 text-sm font-bold leading-relaxed text-black/80">{card.body}</p>
            </article>
          ))}
        </section>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">featured proof</p>
            <h2 className="text-3xl font-black text-black">Projects that explain your range in one glance</h2>
          </div>
          <Link
            href="/work"
            className="rounded-2xl border-[3px] border-black bg-white px-4 py-2 text-sm font-black text-black shadow-[4px_4px_0_#000]"
          >
            browse the full catalog
          </Link>
        </div>
        <div className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-6">
          {featuredProjects.map((project, index) => (
            <article
              key={project.name}
              className={`${project.accent} ${
                index === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
              } rounded-[30px] border-[3px] border-black p-5 shadow-[8px_8px_0_#000]`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-black text-black">
                  {project.source} • {project.category}
                </span>
                <span className="rotate-[-3deg] rounded-xl border-[2px] border-black bg-white px-3 py-1 font-mono text-xs font-black text-black">
                  {project.visibility}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-black">{project.name}</h3>
              <p className="mt-2 text-xs font-black uppercase tracking-wide text-black/60">{project.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-black/80">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-xl border-[2px] border-black bg-white px-2.5 py-1 text-xs font-bold text-black">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={project.href}
                target="_blank"
                className="mt-5 inline-flex rounded-xl border-[3px] border-black bg-white px-4 py-2 text-sm font-black text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5"
              >
                {project.ctaLabel} →
              </Link>
            </article>
          ))}
        </div>
      </MotionReveal>

      <MotionReveal delay={0.2} className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-[32px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">recent delivery lanes</p>
          <div className="mt-4 space-y-3">
            {upworkWins.map((item) => (
              <div key={item.title} className={`${item.tone} rounded-2xl border-[3px] border-black p-4`}>
                <p className="text-sm font-black text-black">{item.title}</p>
                <p className="mt-1 font-mono text-xs font-bold text-black/65">{item.meta}</p>
                <p className="mt-2 text-sm text-black/75">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border-[3px] border-black bg-lavender p-6 shadow-[8px_8px_0_#000]">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">career shape</p>
          <div className="mt-4 space-y-3">
            {experienceTimeline.map((item) => (
              <div key={item.title} className={`${item.tone} rounded-2xl border-[3px] border-black p-4`}>
                <p className="text-sm font-black text-black">{item.title}</p>
                <p className="mt-1 font-mono text-xs font-black uppercase tracking-wide text-black/65">{item.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-black/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <section className="rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">searchable portfolio</p>
              <h2 className="text-3xl font-black text-black">Everything worth showing, surfaced in one place</h2>
            </div>
            <span className="rotate-[-2deg] rounded-2xl border-[3px] border-black bg-bananaCream px-4 py-2 font-mono text-xs font-black text-black">
              {allProjects.length} visible projects
            </span>
          </div>
          <ProjectBrowser projects={allProjects} hints={projectSearchHints} />
        </section>
      </MotionReveal>

      <MotionReveal delay={0.28} className="grid gap-4 lg:grid-cols-3">
        {clientSignals.map((item) => (
          <article key={item.source} className={`${item.tone} rounded-[28px] border-[3px] border-black p-5 shadow-[6px_6px_0_#000]`}>
            <p className="text-sm font-black leading-relaxed text-black">{item.quote}</p>
            <p className="mt-4 font-mono text-xs font-black uppercase tracking-wide text-black/65">{item.source}</p>
          </article>
        ))}
      </MotionReveal>

      <MotionReveal delay={0.32}>
        <GetInTouch
          title="If the brief is ambitious, messy, technical, or all three, this is where the conversation starts"
          description="The point of this site is to make one impression clearly: you are not hiring a template-level developer, you are hiring someone who can think through systems, ship the product, and make the result feel sharp."
        />
      </MotionReveal>
    </div>
  )
}
