import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import working from "@/assets/susan-working.jpg.asset.json";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "How I Work | Process & Deliverables | Susan Wakarindi" },
      {
        name: "description",
        content:
          "The four-step process behind every engagement (discovery, absorb, systemise, hand over) and the concrete deliverables you receive along the way.",
      },
      { property: "og:title", content: "How I Work | Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Discovery, absorb, systemise, hand over: a clear working process and real deliverables, not vague promises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Work,
});

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "A free 30-minute call to understand the business, where time is leaking and what success would actually look like. You get a written summary of scope, hours and priorities before we commit.",
  },
  {
    n: "02",
    title: "Absorb",
    body: "I take the immediate load first (inbox, calendar, follow-ups, whatever is loudest) while observing how the work really flows. Two weeks of settling in before we change anything structural.",
  },
  {
    n: "03",
    title: "Systemise",
    body: "The recurring work becomes a system: triage rules, SOPs, templates, trackers and automation where it earns its place. The goal is that the task stops needing a hero to complete it.",
  },
  {
    n: "04",
    title: "Hand over & maintain",
    body: "Everything is documented in one place your team can reach. Weekly priority briefings and end-of-week summaries keep you informed without needing to ask for status.",
  },
];

const deliverables = [
  ["Standard operating procedures", "Step-by-step documents anyone on the team can follow."],
  ["Workflow boards", "Asana, ClickUp, Notion or Trello set up to match how you actually work."],
  [
    "Inbox & calendar system",
    "Triage labels, saved replies, scheduling rules and meeting hygiene.",
  ],
  ["Trackers & dashboards", "Live views of invoices, clients, content or projects."],
  ["Automations", "Zapier or Make flows that remove copy-paste work between tools."],
  ["Knowledge base", "One organised home for files, templates and process docs."],
];

const rhythm = [
  ["Monday", "Priority briefing: what matters this week, what needs your decision."],
  ["Daily", "Inbox and calendar handled; anything urgent flagged, not buried."],
  ["Friday", "End-of-week summary: what moved, what's blocked, what's next."],
  ["Monthly", "A short review of hours, what got systemised and what to improve."],
];

function Work() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">How I work</p>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
              A clear process beats a long list of promises.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Here is the honest version: the process I follow, what you receive, and the rhythm you
              can expect week to week.
            </p>
          </div>
          <img
            src={working.url}
            alt="Susan Wakarindi working at a laptop"
            width={1080}
            height={875}
            className="aspect-[5/4] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      {/* Process — vertical timeline, unique layout on the site */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <ol className="border-l border-border">
          {steps.map((s) => (
            <li key={s.n} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-[var(--gold)]" />
              <p className="font-display text-sm text-[var(--gold)]">{s.n}</p>
              <h2 className="mt-2 text-2xl">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Deliverables */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">What you actually receive</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-snug">
            Tangible artefacts you keep, whether we work together for a month or a year.
          </h2>
          <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {deliverables.map(([title, body]) => (
              <div key={title} className="border-b border-border py-5">
                <dt className="font-display font-semibold text-primary">{title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Communication rhythm */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Communication rhythm</p>
            <h2 className="mt-4 text-3xl leading-snug">
              You should never have to chase me for a status.
            </h2>
          </div>
          <div>
            {rhythm.map(([when, what]) => (
              <div
                key={when}
                className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-5 first:border-t"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  {when}
                </span>
                <span className="text-sm text-muted-foreground">{what}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/contact"
          className="mt-12 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
        >
          Tell me about your bottleneck
        </Link>
      </section>
    </SiteLayout>
  );
}
