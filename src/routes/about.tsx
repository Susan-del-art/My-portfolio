import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import seated from "@/assets/susan-seated.jpg.asset.json";
import presenting from "@/assets/susan-presenting.jpg.asset.json";
import office from "@/assets/susan-office.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Susan Wakarindi — Executive VA & Operations Partner" },
      {
        name: "description",
        content:
          "Susan Wakarindi's story: from administration into executive support, operations, marketing, AI and automation — helping businesses work with structure, not stress.",
      },
      { property: "og:title", content: "About Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Professional, warm and practical support for founders and executives — built on systems, not heroics.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

const values = [
  ["Excellence", "Deliver work that creates real value, not just completed tasks."],
  ["Reliability", "Be someone clients and teams can trust to follow through."],
  ["Growth", "Keep learning and adapting with the tools available."],
  ["Innovation", "Use technology and AI to make work smarter, not more complicated."],
  ["Integrity", "Communicate honestly and take responsibility."],
  ["Collaboration", "Work alongside you, not simply execute instructions."],
];

const toolGroups = [
  ["Workspace & communication", ["Google Workspace", "Microsoft 365", "Slack"]],
  ["Projects & documentation", ["Notion", "Asana", "ClickUp", "Trello"]],
  ["Automation & AI", ["Zapier", "Make", "ChatGPT & AI assistants"]],
  ["Marketing & finance", ["Canva", "Calendly", "QuickBooks Online"]],
] as const;

function About() {
  return (
    <SiteLayout>
      {/* Narrow editorial header — deliberately different from the split hero on Home */}
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-3xl flex-col px-6 pb-14 pt-10 md:pt-20">
          <figure className="order-1 mb-10 md:order-2 md:mb-0 md:mt-12">
            <img
              src={seated.url}
              alt="Susan Wakarindi seated, in a navy suit"
              width={800}
              height={1200}
              className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
            />
          </figure>
          <div className="order-2 md:order-1">
            <p className="eyebrow">About</p>
            <h1 className="mt-6 text-3xl leading-[1.1] sm:text-5xl">
              From operational chaos to systems that hold.
            </h1>
            <p className="accent-serif mt-5 text-lg text-[var(--navy)] sm:text-xl">
              Behind every well-organised executive is a system that works.
            </p>
          </div>
        </div>
      </section>

      {/* Story — long-form, single column for readability */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm Susan Wakarindi, an Executive Virtual Assistant and Operations Partner working with
            founders, executives and small businesses. My path has moved with the digital workplace
            — from administrative and technology skills into executive support, operations,
            marketing, AI and automation.
          </p>
          <p>
            What I've learned along the way is simple: most teams aren't short on effort, they're
            short on structure. So my work is to absorb the load first, then design it away — the
            triage rules, SOPs, trackers and automations that keep the volume down permanently.
          </p>
          <p>
            I also believe professionals shouldn't be afraid to reinvent themselves. Alongside
            client work I share practical lessons with virtual assistants, freelancers and women
            building digital careers.
          </p>
          <p>
            I work in East Africa Time, which overlaps comfortably with European mornings and early
            US hours, and I communicate in short, predictable updates so you never have to chase me
            for a status.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <img
            src={presenting.url}
            alt="Susan Wakarindi presenting at a workshop"
            width={675}
            height={1200}
            className="aspect-[3/4] w-full rounded-2xl object-cover"
          />
          <img
            src={office.url}
            alt="Susan Wakarindi at her desk chair in an office setting"
            width={800}
            height={1200}
            className="aspect-[3/4] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Facts strip */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
              Training &amp; credentials
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Certification, Virtual Assistant — Elvis Warutumo (2025)</li>
              <li>Diploma, Business Management — KCA University (2023–2024)</li>
              <li>Certificate, Business Management — KCA University (2022–2023)</li>
              <li>Certification, Virtual Assistance — Ajira Digital (2023)</li>
              <li>Certification, Social Media Marketing — HubSpot Academy (2023)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">Focus areas</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Executive support · Operations &amp; SOPs · Marketing coordination · AI and automation
              · Back-office and documentation
            </p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
              Working details
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Based in Nairobi, Kenya — remote worldwide</li>
              <li>East Africa Time (UTC+3), Mon–Fri</li>
              <li>English &amp; Kiswahili</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values — compact numbered list, not six identical cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow">What I hold myself to</p>
        <dl className="mt-8 grid gap-x-12 sm:grid-cols-2">
          {values.map(([title, body], i) => (
            <div key={title} className="flex gap-5 border-b border-border py-5">
              <span className="font-display text-sm text-[var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="font-display font-semibold text-primary">{title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* Tools — grouped */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="eyebrow">Tools I work in</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {toolGroups.map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-primary">{group}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-12 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
        >
          Work with me
        </Link>
      </section>
    </SiteLayout>
  );
}
