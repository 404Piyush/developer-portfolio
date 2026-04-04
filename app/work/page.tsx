import { MotionReveal } from "@/components/motion-reveal"
import { ProjectBrowser } from "@/components/project-browser"
import { projectSearchHints, workProjects } from "@/data/portfolio"

export default function WorkPage() {
  return (
    <div className="space-y-8 pb-10">
      <MotionReveal className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">lab / projects</p>
          <h1 className="mt-3 text-4xl font-black text-black sm:text-5xl">A project index for clients who want range, sharpness, and real engineering signal fast.</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75">
            This is less a gallery and more a proof board. Search by stack, category, source, or keyword and jump straight into the kind of work that matches the project in front of you.
          </p>
        </section>
        <section className="rotate-[2deg] rounded-[34px] border-[3px] border-black bg-aquamarine p-6 shadow-[8px_8px_0_#000]">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">filter logic</p>
          <p className="mt-4 text-lg font-black text-black">From Discord bots to Web3 systems to full-stack product work, the portfolio now moves as fast as the client does.</p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-black/80">
            Public repositories open directly. Private repos and client builds turn into walkthrough requests, so the page never collapses into vague placeholders.
          </p>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.08} className="rounded-[28px] border-[3px] border-black bg-bananaCream p-4 text-sm font-black text-black shadow-[6px_6px_0_#000]">
        Portfolio note: this view stays focused on capability, scope, and delivery range instead of fluff.
      </MotionReveal>

      <MotionReveal delay={0.12}>
        <ProjectBrowser projects={workProjects} hints={projectSearchHints} />
      </MotionReveal>

      <MotionReveal delay={0.18} className="rounded-[28px] border-[3px] border-black bg-lavender p-5 text-sm font-black text-black shadow-[6px_6px_0_#000]">
        If a project is private, the card still leads somewhere useful: a direct walkthrough request instead of a dead end.
      </MotionReveal>
    </div>
  )
}
