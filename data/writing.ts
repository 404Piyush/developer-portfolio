export type WritingPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tags: string[]
  body: string[]
}

export const writingPosts: WritingPost[] = [
  {
    slug: "building-veltrix-l2",
    title: "Building Veltrix L2: From Chain Spec to Working Bridge",
    excerpt:
      "How I stood up a working OP-Stack rollup, including the genesis config, bridge UI, and the withdrawal lifecycle from initiate to finalize.",
    date: "2026-04-12",
    readingTime: "9 min",
    tags: ["Web3", "OP Stack", "Solidity"],
    body: [
      "Most L2 write-ups start with the contracts. This one starts with the directory layout, because that is the part I got wrong three times before the chain ever produced a block.",
      "An OP-Stack rollup is not a single program. It is at least four: op-geth (execution), op-node (sequencer), op-batcher (L1 publisher), and op-proposer (state root submission). Each one has its own flags, its own L1 contract addresses, and its own data format. If any of them drift, the chain halts in a way that does not look like an error — it looks like the chain is just slow.",
      "The first version of Veltrix used the standard monorepo and tried to wire everything through docker-compose. The sequencer would start, the batcher would crash on every submission, and the proposer would silently fall behind. After two days of digging, the bug was a typo in a contract address in the rollup.json. The L1 bindings pointed at a contract that did not exist on Sepolia, so every batcher transaction reverted without surfacing in the logs.",
      "Once the chain spec was right, the next wall was the bridge. The mental model is straightforward: deposits go through OptimismPortal.depositTransaction on L1, and withdrawals go through L2ToL1MessagePasser.initiateWithdrawal on L2. The implementation is less straightforward because the L1 portion has to wait for the state root to be proposed and finalized, which on a real chain takes about a week. The only way to test this end-to-end without burning a calendar week per cycle is to run a devnet with a zero-second challenge period and a controlled proposer.",
      "The bridge UI ended up being the part with the most real-world debugging. Three states matter: initiated (L2 transaction succeeded but not yet proven), proven (state root on L1 matches the L2 output), and finalized (challenge period elapsed). Each of these needs its own UI state, its own retry path when the L1 RPC is rate-limited, and its own copy explaining to the user why their withdrawal is taking seven days. Polling the L1 every fifteen seconds with exponential backoff is the most reliable pattern; websockets sound nice but Sepolia public RPCs drop them constantly.",
      "If I had to do it again I would skip the docker-compose orchestration and start with a single binary that bundles geth, op-node, and op-batcher with a shared config file. The OP Stack team is moving in that direction. For now the lesson is the same as every other multi-process system: make the failure mode visible. A silently slow chain is worse than a loudly broken one.",
    ],
  },
  {
    slug: "patterns-discord-bots-that-survive",
    title: "Patterns for Discord Bots That Survive Real Communities",
    excerpt:
      "Six patterns I have learned shipping production Discord bots for paying clients: verification, moderation, economy, and the failure modes nobody warns you about.",
    date: "2026-02-21",
    readingTime: "7 min",
    tags: ["Bots", "Python", "discord.py"],
    body: [
      "Most Discord bot tutorials stop at slash commands and a single event handler. Real communities break the naive design within a day. Here are the patterns that have actually held up under load.",
      "Pattern 1: rate limits are not optional. Discord returns 429 with a Retry-After header. A naïve loop that hits it will get the bot globally rate-limited within minutes. Wrap every REST call in a per-bucket limiter that respects Retry-After and falls back to exponential backoff if the header is missing. discord.py has built-in support, but the default is too generous; tighten it.",
      "Pattern 2: never trust user input as a string. A captcha system that takes the user's text response and compares it as a string is broken the moment someone pastes the answer from another channel. Use a per-guess nonce that expires, and store the answer hashed in a transient table. Even better: do the verification in a DM with the bot, not in the public channel.",
      "Pattern 3: economy systems need transaction logs. A user balance that lives in a single row of a single table will get out of sync the first time two operations race. Every balance change should be a row in a transactions table, and the balance is a materialized sum. Auditing is then a SELECT, not a forensic exercise.",
      "Pattern 4: moderation actions need an audit trail. Kick, ban, timeout, and message delete should all write to a mod_log table with the moderator, the target, the reason, and the source (manual command, auto-mod rule, report). The first time a community has a dispute about who banned whom, this table is the only thing that saves you.",
      "Pattern 5: slash command UIs are not the whole UX. Buttons, select menus, and modals handle the cases that text input cannot. A verification flow that needs three pieces of information should use a modal, not three slash command arguments. The UX difference is enormous and the implementation cost is small.",
      "Pattern 6: test against an empty server. A bot that works on a 50-member server will often fail on a 5,000-member one because of how the gateway batches events. Build a synthetic test that floods the bot with realistic event rates and watch what happens to the queue depth. If you are using aio-pika, your queue is your lifeline. If you are not, you are one angry message away from a rate limit.",
    ],
  },
  {
    slug: "writing-c-from-scratch",
    title: "Writing C From Scratch: What Three Months in a Public Curriculum Teaches You",
    excerpt:
      "Notes from the first three months of my gpu-engineering curriculum: what worked, what I would cut, and how the discipline translates to systems work elsewhere.",
    date: "2025-12-30",
    readingTime: "11 min",
    tags: ["Systems", "C", "Learning"],
    body: [
      "Three months in, the curriculum has produced three standalone C11 libraries with passing test suites, microbenchmarks, and CI on Linux plus macOS. The libraries are pipe-shell (a POSIX-ish command interpreter), arena-allocator (a bump arena memory allocator), and bst-library (a generic binary search tree). None of them are impressive in isolation. What is impressive is the discipline that produced them: every project ships with tests, a benchmark, public API documentation, and a CI matrix.",
      "What worked: week-by-week project scope. Each week has a tight deliverable. Week 5 is stack vs heap, week 7 is virtual memory, week 9 is fork/exec/wait. The projects grow out of the previous weeks. The arena allocator in week 8 exists because the parser in week 7 needed faster allocations than malloc provided. That compounding is what makes the curriculum feel like a real engineering apprenticeship rather than a tutorial series.",
      "What I would cut: the first two weeks on data representation. Bits, two's complement, IEEE 754 floats — important in the abstract, but a beginner cannot hold them alongside the goal of writing a working shell. I would push that content to week 13 or 14, after the student has written some real code and seen the float and integer behavior at runtime. The motivation is much higher then.",
      "The hardest thing to teach is the test-first habit. C does not have a culture of testing like Python or Go does. Writing tests in C requires understanding linking, build systems, and the difference between a test binary and a library. The curriculum spends a week on this and it still feels rushed. I am considering a two-week unit on testing infrastructure alone.",
      "The most surprising thing I have learned is how much the discipline translates outside C. Writing memory-aware code, reasoning about cache lines, profiling before optimizing, reading assembly to understand what the compiler did — these habits show up in every language I touch now. JavaScript performance regressions, Python GIL behavior, even CSS layout thrash. The instinct to measure first and assume nothing is a systems skill, and it generalizes.",
      "If you are considering a similar curriculum: do not try to be exhaustive. The point is not to cover all of C. The point is to ship enough small projects that the discipline becomes muscle memory. Three months of disciplined C will teach you more about software engineering than three years of reading about it.",
    ],
  },
  {
    slug: "deploying-fastapi-nextjs-rabbitmq",
    title: "Deploying FastAPI, Next.js 15, and RabbitMQ Without Losing a Weekend",
    excerpt:
      "The DevObservatory stack: what I learned shipping a FastAPI backend, Next.js frontend, and RabbitMQ async worker as one Render deployment.",
    date: "2026-03-18",
    readingTime: "8 min",
    tags: ["Full-Stack", "FastAPI", "DevOps"],
    body: [
      "DevObservatory is a developer-observability platform: orgs, projects, API keys, async event ingestion, and a worker that persists events to Postgres. The stack is FastAPI, Next.js 15, RabbitMQ, Postgres, Redis, MinIO, and Docker Compose. It runs on Render.",
      "The deployment story has three moving parts: the API, the worker, and the frontend. Render treats each as a separate service. The trick is to keep them on the same git repo with the same Dockerfile and a runtime flag that switches behavior.",
      "Single Dockerfile, three services. The Dockerfile builds the FastAPI app, then starts one of three things based on the SERVICE env var: api, worker, or migrate. The frontend is a separate Next.js Dockerfile. The compose file in dev uses three local containers; in production Render spins up the same three services pointed at managed Postgres and managed RabbitMQ.",
      "The thing that almost cost me a weekend was the migration story. Alembic migrations need to run before the API and the worker start. Render has a release command, so the API service's release command runs alembic upgrade head. But the worker also needs the schema. The fix was to run migrations from a one-off job before the worker is deployed. Render's pre-deploy command makes this easy.",
      "Async ingestion via RabbitMQ is the load-bearing decision. POST /events publishes to the events queue with mandatory=True and a publish confirms callback. The worker consumes with manual ack only after the row is committed. If the worker dies mid-consume, RabbitMQ re-delivers. If the API dies mid-publish, the client gets a 503 and retries with the same idempotency key. No events are lost.",
      "Health checks matter more than I expected. Each service has a /healthz endpoint that returns 200 only if it can reach its dependencies. Postgres, RabbitMQ, Redis. The API's healthz pings Postgres. The worker's healthz pings Postgres and RabbitMQ. Render's auto-restart is configured to use the healthz endpoint, so a service that can't reach its dependencies gets killed and restarted until the dependency is back. This avoids the silent-hang scenario where a service is up but useless.",
      "If you are building something similar: spend the time to get the Dockerfile right first. A clean multi-service Dockerfile is the difference between a deploy that takes 30 seconds and a deploy that takes 30 minutes of rebuilding layers.",
    ],
  },
]