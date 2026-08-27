import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Packages — Susan Wakarindi, Executive VA" },
      {
        name: "description",
        content:
          "Executive support, operations and SOPs, AI and automation, marketing coordination and back-office support — monthly retainers and focused systems sprints.",
      },
      {
        property: "og:title",
        content: "Executive VA & Operations Services — Susan Wakarindi",
      },
      {
        property: "og:description",
        content:
          "Retainers and sprints for executive support, operations systems, AI automation and marketing coordination.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    title: "Executive support & virtual assistance",
    intro: "Day-to-day load taken off your desk, with nothing dropped.",
    items: [
      "Email triage, drafting and follow-up",
      "Calendar management and scheduling",
      "Travel and meeting logistics",
      "Client communication and weekly priority briefings",
    ],
  },
  {
    n: "02",
    title: "Operations & systems",
    intro: "The structure that lets work be delegated instead of repeated.",
    items: [
      "SOP writing and documentation",
      "Workflow and project management (Asana, ClickUp, Notion)",
      "Process improvement and delegation planning",
      "Client onboarding and offboarding flows",
    ],
  },
  {
    n: "03",
    title: "AI & automation",
    intro: "Applied where it saves real hours — not for the sake of it.",
    items: [
      "AI-assisted drafting, research and summaries",
      "No-code automations (Zapier, Make)",
      "AI-supported workflows for repeat admin",
      "Tool selection and practical team training",
    ],
  },
  {
    n: "04",
    title: "Marketing & personal branding support",
    intro: "Consistent presence, coordinated in your voice.",
    items: [
      "LinkedIn presence and content scheduling",
      "Social media coordination from your assets",
      "Newsletter formatting and distribution",
      "Brand-consistent Canva design tidy-ups",
    ],
  },
  {
    n: "05",
    title: "Back office & bookkeeping support",
    intro: "The admin that quietly costs you money when it slips.",
    items: [
      "Invoicing and payment follow-up",
      "Expense logging and receipt filing",
      "Vendor and subscription tracking",
      "Monthly admin reporting",
    ],
  },
  {
    n: "06",
    title: "Documentation & business organisation",
    intro: "One place where your business knowledge actually lives.",
    items: [
      "Central knowledge base setup",
      "File structure and naming standards",
      "Tracker and dashboard building",
      "Handover packs your team can use",
    ],
  },
];

const engagements = [
  {
    name: "Monthly retainer",
    shape: "Ongoing · agreed hours each month",
    for: "You need consistent support: inbox, calendar, coordination and the systems around them, week after week.",
    includes: [
      "A set number of hours reserved each month",
      "Weekly priority briefing and end-of-week summary",
      "Documentation of everything I take over",
    ],
  },
  {
    name: "Systems sprint",
    shape: "Fixed scope · a few focused weeks",
    for: "One workflow is broken — onboarding, invoicing, reporting — and you want it documented, simplified and automated.",
    includes: [
      "Discovery and mapping of the current process",
      "Rebuilt workflow with SOPs and templates",
      "Automation where it fits, plus a handover walkthrough",
    ],
    featured: true,
  },
  {
    name: "Project support",
    shape: "Short term · defined deliverable",
    for: "A launch, an event, a migration or a backlog that needs a capable pair of hands for a defined period.",
    includes: [
      "Agreed deliverables and timeline",
      "Regular check-ins during the project",
      "Clean handover of files and documentation",
    ],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
            Support, structure and smarter ways of working.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I don't just manage tasks. I help create the structure that makes work easier to manage
            and businesses easier to grow.
          </p>
        </div>
      </section>

      {/* Services — numbered editorial rows, distinct from the card grids elsewhere */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group grid gap-6 rounded-2xl border-b border-border px-2 py-10 transition-colors duration-300 hover:bg-card md:grid-cols-[auto_1fr_1fr] md:gap-12 md:px-6"
          >
            <span className="font-display text-sm text-[var(--gold)] transition-transform duration-300 group-hover:-translate-y-0.5">
              {s.n}
            </span>
            <div>
              <h2 className="text-2xl leading-snug transition-colors group-hover:text-[var(--gold)]">
                {s.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.intro}</p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="border-l-2 border-[var(--gold)]/40 pl-4 transition-colors hover:border-[var(--gold)] hover:text-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Engagement models */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">Ways to work together</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-snug">
            Three shapes of engagement, priced after we've scoped the work.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {engagements.map((e) => (
              <div
                key={e.name}
                className={`flex flex-col rounded-2xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-lg ${
                  e.featured ? "border-[var(--gold)]" : "border-border"
                }`}
              >
                <h3 className="font-display text-xl">{e.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--gold)]">
                  {e.shape}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{e.for}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                  {e.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            Every engagement starts with a free 30-minute discovery call. Rates depend on scope and
            hours, and I share a written proposal before anything begins.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
          >
            Start with a call
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
