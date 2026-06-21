// Tiny markdown renderer for writing posts. Handles the subset of CommonMark
// actually used in data/writing.ts: paragraphs, ## headings, - lists,
// 1. ordered lists, **bold**, `inline code`, and ```fenced code blocks```.
// No external dependencies.

import type { ReactNode } from "react"

type Block = { type: "p" | "h2" | "ul" | "ol" | "code"; lines: string[] }

function parseMarkdown(input: string): Block[] {
  const lines = input.split("\n")
  const blocks: Block[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Fenced code block
    if (line.startsWith("```")) {
      const codeLines: string[] = []
      i += 1
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i])
        i += 1
      }
      i += 1 // skip closing fence
      blocks.push({ type: "code", lines: codeLines })
      continue
    }

    // Heading
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", lines: [line.slice(3).trim()] })
      i += 1
      continue
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim())
        i += 1
      }
      blocks.push({ type: "ul", lines: items })
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, "").trim())
        i += 1
      }
      blocks.push({ type: "ol", lines: items })
      continue
    }

    // Blank line
    if (line.trim() === "") {
      i += 1
      continue
    }

    // Paragraph (collect until blank line or special block)
    const paraLines: string[] = [line]
    i += 1
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("```") &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      paraLines.push(lines[i])
      i += 1
    }
    blocks.push({ type: "p", lines: [paraLines.join(" ")] })
  }

  return blocks
}

// Inline parser: handles **bold**, `code`, leaves the rest as plain text.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = []
  let rest = text
  let i = 0
  let buffer = ""
  const flush = () => {
    if (buffer) {
      parts.push(buffer)
      buffer = ""
    }
  }

  while (rest.length > 0) {
    const boldMatch = rest.match(/^\*\*(.+?)\*\*/)
    const codeMatch = rest.match(/^`([^`]+)`/)

    if (boldMatch) {
      flush()
      parts.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-black text-ink">
          {boldMatch[1]}
        </strong>
      )
      rest = rest.slice(boldMatch[0].length)
      i += 1
    } else if (codeMatch) {
      flush()
      parts.push(
        <code
          key={`${keyPrefix}-c-${i}`}
          className="rounded-md border border-border bg-bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-ink"
        >
          {codeMatch[1]}
        </code>
      )
      rest = rest.slice(codeMatch[0].length)
      i += 1
    } else {
      buffer += rest[0]
      rest = rest.slice(1)
    }
  }
  flush()
  return parts
}

export function Markdown({ source }: { source: string }) {
  const blocks = parseMarkdown(source)
  return (
    <div className="space-y-5">
      {blocks.map((block, blockIndex) => {
        const key = `b-${blockIndex}`
        if (block.type === "h2") {
          return (
            <h3 key={key} className="mt-6 text-xl font-black text-ink">
              {renderInline(block.lines[0], key)}
            </h3>
          )
        }
        if (block.type === "p") {
          return (
            <p key={key} className="text-sm leading-relaxed text-ink-soft">
              {renderInline(block.lines[0], key)}
            </p>
          )
        }
        if (block.type === "ul") {
          return (
            <ul key={key} className="list-disc space-y-1.5 pl-6 text-sm text-ink-soft marker:text-ink-muted">
              {block.lines.map((line, idx) => (
                <li key={`${key}-li-${idx}`}>{renderInline(line, `${key}-li-${idx}`)}</li>
              ))}
            </ul>
          )
        }
        if (block.type === "ol") {
          return (
            <ol key={key} className="list-decimal space-y-1.5 pl-6 text-sm text-ink-soft marker:font-bold marker:text-ink">
              {block.lines.map((line, idx) => (
                <li key={`${key}-li-${idx}`}>{renderInline(line, `${key}-li-${idx}`)}</li>
              ))}
            </ol>
          )
        }
        if (block.type === "code") {
          return (
            <pre
              key={key}
              className="overflow-x-auto rounded-2xl border-[3px] border-border bg-[#111] p-4 font-mono text-[12.5px] leading-relaxed text-aquamarine shadow-[4px_4px_0_0_var(--border)]"
            >
              <code>{block.lines.join("\n")}</code>
            </pre>
          )
        }
        return null
      })}
    </div>
  )
}