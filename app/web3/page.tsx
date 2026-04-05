import { BlockchainTerminal } from "@/components/blockchain-terminal"
import { GetInTouch } from "@/components/get-in-touch"
import { MotionReveal } from "@/components/motion-reveal"
import { ProjectBrowser } from "@/components/project-browser"
import { vaultEntries, web3Badges, web3Experience, web3Projects } from "@/data/portfolio"

export default function Web3Page() {
  return (
    <div className="space-y-10 pb-10">
      <MotionReveal className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">web3 page</p>
          <h1 className="mt-3 text-4xl font-black leading-none text-black sm:text-5xl">Web3 experience, previous work, and contact links on one page.</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75">
            This section now does the heavy lifting for a Web3 client: verified experience from the Upwork exports, public and private portfolio signals from GitHub, and direct contact paths without making them browse the rest of the site first.
          </p>
        </section>
        <section className="rotate-[2deg] rounded-[34px] border-[3px] border-black bg-deepPink p-6 shadow-[8px_8px_0_#000]">
          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">specialty snapshot</p>
          <div className="mt-4 space-y-3 text-black">
            <p className="text-2xl font-black">TRON + Arbitrum + system guts</p>
            <p className="text-sm leading-relaxed font-medium">
              The strongest pattern across your files is not just “I do Web3.” It is chain work paired with backend logic, product UX, integrations, and automation.
            </p>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <div className="flex flex-wrap gap-3">
          {web3Badges.map((badge) => (
            <span
              key={badge}
              className="rounded-2xl border-[3px] border-black bg-white px-4 py-2 font-mono text-sm font-black text-black shadow-[4px_4px_0_#000]"
            >
              {badge}
            </span>
          ))}
        </div>
      </MotionReveal>

      <MotionReveal delay={0.12}>
        <section className="rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">previous experience</p>
              <h2 className="text-3xl font-black text-black">Verified Web3 lanes from your exports and repo snapshot</h2>
            </div>
            <span className="rotate-[-2deg] rounded-2xl border-[3px] border-black bg-bananaCream px-4 py-2 font-mono text-xs font-black text-black">
              no fake case studies
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {web3Experience.map((entry, index) => (
              <article
                key={entry.title}
                className={`${index % 4 === 0 ? "bg-bananaCream" : index % 4 === 1 ? "bg-aquamarine" : index % 4 === 2 ? "bg-deepSkyBlue" : "bg-lavender"} rounded-[28px] border-[3px] border-black p-5 shadow-[5px_5px_0_#000]`}
              >
                <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">{entry.meta}</p>
                <p className="mt-3 text-lg font-black text-black">{entry.title}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">{entry.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.16}>
        <section className="rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">web3 portfolio</p>
              <h2 className="text-3xl font-black text-black">Search Web3 projects, wallet flows, and smart contract work instantly</h2>
            </div>
            <span className="rotate-[2deg] rounded-2xl border-[3px] border-black bg-deepPink px-4 py-2 font-mono text-xs font-black text-black">
              {web3Projects.length} web3 projects
            </span>
          </div>
          <ProjectBrowser projects={web3Projects} hints={["tron", "swap", "wallet", "dao", "solana", "arbitrum"]} defaultCategory="Web3" />
        </section>
      </MotionReveal>

      <MotionReveal delay={0.2}>
        <section className="rounded-[34px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">the vault</p>
              <h2 className="text-3xl font-black text-black">Why this page now closes the loop faster</h2>
            </div>
            <span className="rotate-[-2deg] rounded-2xl border-[3px] border-black bg-bananaCream px-4 py-2 font-mono text-xs font-black text-black">
              built for quick client decisions
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {vaultEntries.map((entry, index) => (
              <article
                key={entry.title}
                className={`${entry.tone} ${index === 1 ? "rotate-[2deg]" : "rotate-[-1deg]"} rounded-[28px] border-[3px] border-black p-5 shadow-[5px_5px_0_#000]`}
              >
                <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">{entry.title}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-black/80">{entry.text}</p>
              </article>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.24}>
        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <BlockchainTerminal />
          <div className="rounded-[32px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]">
            <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">systems + contracts</p>
            <ul className="mt-4 space-y-3 text-sm text-black">
              <li className="rounded-2xl border-[3px] border-black bg-deepSkyBlue p-4 font-bold">
                Proxy patterns, swaps, wallet flows, and chain-facing interfaces.
              </li>
              <li className="rounded-2xl border-[3px] border-black bg-aquamarine p-4 font-bold">
                Backend-heavy thinking with queues, event streams, monitoring, and APIs.
              </li>
              <li className="rounded-2xl border-[3px] border-black bg-bananaCream p-4 font-bold">
                Comfortable moving from smart contract logic into product UX instead of treating them like separate worlds.
              </li>
            </ul>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.28} className="rounded-[30px] border-[3px] border-black bg-deepSkyBlue p-5 shadow-[8px_8px_0_#000]">
        <p className="text-sm font-black text-black">
          Current direction: blockchain-first systems that preserve speed, protocol safety, and enough product personality that they do not feel dead on arrival.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.32}>
        <GetInTouch
          accessKey={process.env.WEB3FORMS_API_KEY ?? ""}
          id="web3-contact"
          title="Need a Web3 engineer who can handle contracts, systems thinking, and product polish in the same room?"
          description="This page already does the proof work. What comes next should feel easy: send the brief, book a call, or drop enough context to start a serious conversation."
        />
      </MotionReveal>
    </div>
  )
}
