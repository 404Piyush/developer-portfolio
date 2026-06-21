export type WritingPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tags: string[]
  body: string
}

export const writingPosts: WritingPost[] = [
  {
    slug: "building-veltrix-l2",
    title: "Building Veltrix L2",
    excerpt:
      "What I got wrong three times before the chain ever produced a block, and the parts nobody warns you about.",
    date: "2026-04-12",
    readingTime: "7 min",
    tags: ["Web3", "OP Stack", "Solidity"],
    body: `Most L2 write-ups start with the contracts. I am starting with the directory layout, because that is the part I kept getting wrong.

## It's four programs, not one

An OP-Stack rollup is not a single thing. It is four:

- \`op-geth\` - the execution client
- \`op-node\` - the sequencer
- \`op-batcher\` - publishes batch data to L1
- \`op-proposer\` - submits state roots to L1

Each one has its own flags. Each one has its own L1 contract addresses. Each one expects a specific data format. If any of them drift out of sync the chain does not throw an error. It just gets slow. Slow in a way you only catch by staring at batcher logs for two days.

## The bug that cost me a weekend

First version of Veltrix used the standard monorepo and docker-compose. The sequencer started. The batcher crashed on every submission. The proposer silently fell behind. I spent two days grepping logs.

The bug was a typo in \`rollup.json\`. The L1 bindings pointed at a contract address that did not exist on Sepolia. Every batcher transaction reverted but did not show up as an error in the standard log stream. I only caught it by manually calling the address with \`cast\` and getting back "contract does not exist."

If I had built a single binary that bundles all four with a shared config file, I would have caught it in 20 minutes.

## The bridge

Once the chain was producing blocks the next wall was the bridge.

Mental model:

- deposit: \`OptimismPortal.depositTransaction\` on L1
- withdraw: \`L2ToL1MessagePasser.initiateWithdrawal\` on L2

Implementation is not the mental model. The L1 part has to wait for the state root to be proposed and finalized. On a real chain that takes about a week. The only way to test it end to end without burning a calendar week per cycle is a devnet with a zero-second challenge period and a controlled proposer.

## The bridge UI

This was where most of the real debugging happened.

Three states matter:

1. **initiated** - L2 tx succeeded, not yet proven
2. **proven** - state root on L1 matches the L2 output
3. **finalized** - challenge period elapsed

Each one needs its own UI state. Each one needs its own retry path because the L1 RPC rate-limits constantly. Each one needs copy that explains to the user why their withdrawal is taking seven days.

Pattern that actually works: poll L1 every 15 seconds with exponential backoff. WebSockets sound nice. Sepolia public RPCs drop them constantly.

## If I did it again

Single binary. Shared config file. Skip docker-compose entirely. The OP Stack team is moving in that direction anyway.

The lesson is the same as every other multi-process system I have ever built. Make the failure mode visible. A silently slow chain is worse than a loudly broken one.`,
  },
  {
    slug: "patterns-discord-bots-that-survive",
    title: "Patterns for Discord bots that survive",
    excerpt:
      "Six things I learned shipping bots for paying clients. Most tutorials skip all of them.",
    date: "2026-02-21",
    readingTime: "6 min",
    tags: ["Bots", "Python", "discord.py"],
    body: `Most Discord bot tutorials stop at slash commands and a single event handler. Real communities break the naive design within a day. Here is what has actually held up.

## 1. Rate limits are not optional

Discord returns 429 with a \`Retry-After\` header. A loop that hits it will get the bot globally rate-limited within minutes. Wrap every REST call in a per-bucket limiter. Respect \`Retry-After\`. Fall back to exponential backoff if the header is missing.

\`discord.py\` has built-in support but the defaults are too generous. Tighten them.

## 2. Never trust user input as a string

A captcha that compares text answers as strings is broken the second someone pastes the answer from another channel. Use a per-guess nonce that expires. Store the answer hashed in a transient table. Run the verification in a DM, not the public channel.

## 3. Economy systems need transaction logs

A balance column on a single row will drift the first time two operations race. Every balance change should be a row in a \`transactions\` table. The balance is a materialized sum. Auditing becomes a SELECT.

## 4. Moderation actions need an audit trail

Kick, ban, timeout, delete. Every action writes to a \`mod_log\` table: moderator, target, reason, source. The first time your community has a dispute about who banned whom, this table is the only thing that saves you.

## 5. Slash commands are not the whole UX

Buttons, select menus, modals. A verification flow that needs three pieces of information should use a modal, not three slash command arguments. The UX difference is enormous and the implementation cost is small.

## 6. Test against an empty server

A bot that works on a 50-member server will often fail on a 5,000-member one because of how the gateway batches events. Build a synthetic test that floods the bot with realistic event rates. Watch the queue depth.

If you are using \`aio-pika\`, the queue is your lifeline. If you are not, you are one angry message away from a rate limit.`,
  },
  {
    slug: "writing-c-from-scratch",
    title: "Writing C from scratch",
    excerpt:
      "Three months into a public C/GPU curriculum. What I am keeping, what I would cut, and the discipline that is leaking into every other language I touch.",
    date: "2025-12-30",
    readingTime: "9 min",
    tags: ["Systems", "C", "Learning"],
    body: `Three months in. Three standalone C11 libraries shipped:

- \`bst-library\` - generic binary search tree
- \`arena-allocator\` - bump arena memory allocator
- \`pipe-shell\` - POSIX-ish command interpreter

Each one has tests, a microbenchmark, public API docs, and CI on Linux plus macOS.

None of them are impressive in isolation. What is impressive is the discipline that produced them.

## What worked

Week by week project scope. Each week has a tight deliverable. The projects grow out of the previous weeks. The arena allocator in week 8 exists because the parser in week 7 needed faster allocations than \`malloc\` provided.

That compounding is what makes the curriculum feel like a real engineering apprenticeship instead of a tutorial series.

## What I would cut

The first two weeks on data representation. Bits. Two's complement. IEEE 754 floats. Important in the abstract, but a beginner cannot hold them alongside the goal of writing a working shell.

I would push that content to week 13 or 14. After the student has written some real code and seen the float and integer behavior at runtime. Motivation is much higher then.

## The test-first habit is hard

C does not have a culture of testing like Python or Go does. Writing tests in C means understanding linking, build systems, the difference between a test binary and a library. The curriculum spends a week on this and it still feels rushed.

I am considering a two-week unit on testing infrastructure alone.

## What surprised me

How much the discipline translates outside C. Memory-aware code. Cache line reasoning. Profile before optimizing. Read assembly to see what the compiler did. These habits show up in every language I touch now.

JavaScript perf regressions. Python GIL behavior. CSS layout thrash. The instinct to measure first and assume nothing is a systems skill. It generalizes.

## If you try this

Do not try to be exhaustive. The point is not to cover all of C. The point is to ship enough small projects that the discipline becomes muscle memory.

Three months of disciplined C teaches you more about software engineering than three years of reading about it.`,
  },
  {
    slug: "deploying-fastapi-nextjs-rabbitmq",
    title: "Deploying FastAPI, Next.js 15, and RabbitMQ without losing a weekend",
    excerpt:
      "The DevObservatory deploy story: one Dockerfile, three services, and the things that almost broke me.",
    date: "2026-03-18",
    readingTime: "7 min",
    tags: ["Full-Stack", "FastAPI", "DevOps"],
    body: `DevObservatory is a developer-observability platform. Orgs, projects, API keys, async event ingestion, a worker that persists events to Postgres. Stack is FastAPI, Next.js 15, RabbitMQ, Postgres, Redis, MinIO, Docker Compose. Runs on Render.

Three moving parts in deployment:

1. API
2. Worker
3. Frontend

Render treats each as a separate service. The trick is keeping them in one repo with one Dockerfile and a runtime flag that switches behavior.

## Single Dockerfile, three services

The Dockerfile builds the FastAPI app, then starts one of three things based on the \`SERVICE\` env var: \`api\`, \`worker\`, or \`migrate\`. The frontend is a separate Next.js Dockerfile.

In dev, compose runs three local containers. In production Render spins up the same three services against managed Postgres and managed RabbitMQ.

## The migration story

Alembic migrations need to run before the API and the worker start. Render has a release command, so the API service's release command runs \`alembic upgrade head\`. The worker also needs the schema though.

Fix: run migrations from a one-off job before the worker is deployed. Render's pre-deploy command makes this easy.

## RabbitMQ is load-bearing

POST \`/events\` publishes to the \`events\` queue with \`mandatory=True\` and a publish-confirms callback. The worker consumes with manual ack only after the row is committed.

- Worker dies mid-consume: RabbitMQ redelivers
- API dies mid-publish: client gets 503, retries with same idempotency key

No events lost. Took two iterations to get the retry logic right.

## Health checks matter more than I expected

Every service has a \`/healthz\` endpoint that returns 200 only if it can reach its dependencies. API pings Postgres. Worker pings Postgres and RabbitMQ. Render's auto-restart uses the healthz endpoint, so a service that loses its database gets killed and restarted instead of silently serving 500s.

This avoids the silent-hang scenario where the service is up but useless.

## If you build something similar

Get the Dockerfile right first. A clean multi-service Dockerfile is the difference between a 30-second deploy and a 30-minute rebuild.`,
  },
]