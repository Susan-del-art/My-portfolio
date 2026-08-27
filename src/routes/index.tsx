import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ArrowRight, Bot, CalendarCheck, Megaphone, Workflow } from "lucide-react";
import portrait from "@/assets/susan-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Susan Wakarindi — Executive Virtual Assistant & Operations Partner",
      },
      {
        name: "description",
        content:
          "Don't just work harder. Build better systems. Susan Wakarindi helps founders and executives move from operational chaos to organised, scalable systems.",
      },
      {
        property: "og:title",
        content: "Susan Wakarindi — Executive VA & Operations Partner",
      },
      {
        property: "og:description",
        content:
          "Executive support, operations systems, marketing coordination and AI automation for founders and growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: CalendarCheck,
    title: "Executive support",
    body: "Inbox, calendar, travel and client follow-up handled, so your attention stays on decisions.",
    to: "/services",
  },
  {
    icon: Workflow,
    title: "Operations & systems",
    body: "SOPs, workflows and documentation that turn recurring chaos into a repeatable process.",
    to: "/services",
  },
  {
    icon: Bot,
    title: "AI & automation",
    body: "Practical AI and no-code automation applied only where it genuinely saves hours.",
    to: "/services",
  },
  {
    icon: Megaphone,
    title: "Marketing coordination",
    body: "Content scheduling, LinkedIn presence and brand consistency, coordinated in your voice.",
    to: "/services",
  },
];

const signals = [
  "You're the bottleneck on work that isn't yours to do.",
  "The same questions get answered from scratch every week.",
  "Nothing is written down, so nothing can be delegated.",
  "Tools were added faster than the process behind them.",
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="grain">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr] md:gap-x-12 md:py-16">
          <div className="order-2 md:order-1">
            <p className="eyebrow">
              Executive Virtual Assistant · Operations · Marketing · AI Systems
            </p>
            <h1 className="mt-5 text-3xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Don't just work harder.
              <br />
              Build better systems.
            </h1>
            <p className="accent-serif mt-4 text-lg text-[var(--navy)] sm:text-xl">
              Structure creates freedom.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm Susan Wakarindi, an Executive Virtual Assistant and Operations Partner. I help
              founders, executives and growing businesses move from operational chaos to organised,
              efficient, scalable ways of working.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
              >
                Book a discovery call <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--navy)]/25 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-background"
              >
                See how I work
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold text-primary hover:text-[var(--gold)]"
              >
                More about me <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="order-1 border-b-2 border-[var(--gold)] pb-6 md:order-2">
            <img
              src={portrait.url}
              alt="Susan Wakarindi, Executive Virtual Assistant and Operations Partner"
              width={800}
              height={1200}
              className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">You might recognise this</p>
            <h2 className="mt-4 text-3xl leading-snug">
              Most teams aren't short on effort. They're short on structure.
            </h2>
          </div>
          <ul className="space-y-0">
            {signals.map((s) => (
              <li
                key={s}
                className="border-b border-border py-5 text-lg text-muted-foreground first:border-t"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">Four ways I support a business</p>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title}>
                <p.icon className="size-6 text-[var(--gold)]" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[var(--gold)]"
          >
            Full services &amp; ways to work together <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Close */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-primary p-10 text-[var(--beige)] md:p-14">
          <p className="eyebrow">Start here</p>
          <p className="accent-serif mt-5 max-w-2xl text-2xl leading-snug text-[var(--beige)] md:text-3xl">
            Tell me what's slowing your week down. We'll spend thirty minutes on it: no pitch, no
            obligation.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-opacity hover:opacity-90"
          >
            Book a free discovery call <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
