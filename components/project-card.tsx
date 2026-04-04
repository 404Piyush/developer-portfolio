import Image from "next/image"
import Link from "next/link"
import type { ProjectShowcaseItem } from "@/data/portfolio"

type ProjectCardProps = ProjectShowcaseItem

export function ProjectCard({ name, subtitle, description, visibility, stack, href, ctaLabel, accent, image, year, source, category, tags }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border-[3px] border-black bg-white shadow-[8px_8px_0_#000] transition hover:-translate-y-1">
      <div className={`border-b-[3px] border-black p-4 ${accent}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-black text-black">
            {visibility}
          </span>
          <span className="font-mono text-xs font-black text-black">{year}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-xl border-[2px] border-black bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wide text-black">
            {source}
          </span>
          <span className="rounded-xl border-[2px] border-black bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wide text-black">
            {category}
          </span>
        </div>
      </div>
      {image ? (
        <div className="relative h-52 border-b-[3px] border-black bg-[#f8f8f8]">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      ) : (
        <div className={`flex h-52 items-center justify-center border-b-[3px] border-black ${accent}`}>
          <div className="space-y-3 px-6 text-center">
            <div className="rotate-[-4deg] rounded-2xl border-[3px] border-black bg-white px-6 py-4 font-mono text-xl font-black text-black shadow-[5px_5px_0_#000]">
              {name}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tags.slice(0, 2).map((tag) => (
                <span key={tag} className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wide text-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-black text-black">{name}</h3>
          <p className="text-sm font-medium text-black/70">{subtitle}</p>
        </div>
        <p className="text-sm leading-relaxed text-black/75">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-xl border-[2px] border-black bg-[#fff8ef] px-2.5 py-1 text-xs font-bold text-black">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((item) => (
            <span key={item} className="rounded-xl border-[2px] border-black bg-white px-2.5 py-1 text-[11px] font-black uppercase tracking-wide text-black/70">
              {item}
            </span>
          ))}
        </div>
        <Link
          href={href}
          target="_blank"
          className="mt-5 inline-flex rounded-xl border-[3px] border-black bg-deepPink px-4 py-2 text-sm font-black text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5"
        >
          {ctaLabel} →
        </Link>
      </div>
    </article>
  )
}
