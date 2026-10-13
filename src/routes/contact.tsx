import { createFileRoute } from "@tanstack/react-router";
import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Clock, Mail, MapPin } from "lucide-react";

const emptyForm = { name: "", email: "", need: "", message: "" };

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Susan Wakarindi | Book a Discovery Call" },
      {
        name: "description",
        content:
          "Tell Susan Wakarindi what's slowing your operations down and book a free 30-minute discovery call. Remote support worldwide, based in Nairobi (UTC+3).",
      },
      { property: "og:title", content: "Contact Susan Wakarindi" },
      {
        property: "og:description",
        content:
          "Book a free 30-minute discovery call for executive support, operations systems and AI-powered workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const nextSteps = [
  ["01", "You write", "Send a few lines about the work and where it's getting stuck."],
  ["02", "I reply", "Within one business day, with a couple of call times that suit your zone."],
  ["03", "We talk", "Thirty minutes, no pitch: we work out whether I'm the right fit."],
  ["04", "You decide", "A written proposal with scope, hours and rates. No obligation."],
];

const faqs = [
  [
    "What time zone do you work in?",
    "East Africa Time (UTC+3), Monday to Friday. That overlaps with European mornings and early US hours, and I agree fixed availability windows with each client.",
  ],
  [
    "How do we start?",
    "Always with a free 30-minute discovery call, followed by a written proposal. Retainers begin with a two-week settling-in period before we change any process.",
  ],
  [
    "Can you work with my existing tools?",
    "Yes. I work in Google Workspace, Microsoft 365, Notion, Asana, ClickUp, Trello, Slack, Canva, Calendly, QuickBooks and Zapier or Make. I'd rather improve your setup than replace it.",
  ],
  [
    "Is my information kept confidential?",
    "Yes. I'm happy to sign an NDA, and access to accounts and documents is handled through your own permission and password tooling.",
  ],
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [form, setForm] = useState(emptyForm);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const submission = {
      name: form.name.trim(),
      email: form.email.trim(),
      need: form.need.trim(),
      message: form.message.trim(),
    };

    if (Object.values(submission).some((value) => !value)) {
      setError("Please complete every field before sending your message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
      import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setError("The contact form is not configured yet. Please email Susan directly instead.");
      return;
    }

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          name: submission.name,
          email: submission.email,
          subject: `Website enquiry: ${submission.need}`,
          need: submission.need,
          message: submission.message,
        },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY },
      );
      setSubmittedName(submission.name);
      setForm(emptyForm);
      setSent(true);
    } catch {
      setError("Your message could not be sent. Please try again or email Susan directly.");
    } finally {
      setSending(false);
    }
  }

  const field =
    "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[var(--gold)]";

  return (
    <SiteLayout>
      {/* Header + contact facts side by side — no repeated grain hero band */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-20 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl">
              Let's find the hours hiding in your week.
            </h1>
            <p className="accent-serif mt-5 text-xl text-[var(--navy)]">
              Work Smarter. Operate Better. Grow Further.
            </p>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-[var(--gold)]" />
              <a className="hover:text-primary" href="mailto:susanwakarindi222@gmail.com">
                susanwakarindi222@gmail.com
              </a>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--gold)]" />
              Nairobi, Kenya (working with clients worldwide)
            </p>
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-[var(--gold)]" />
              Mon–Fri, 8am–5pm EAT (UTC+3). Replies within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + what happens next */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-border p-8 md:p-10">
          {sent ? (
            <div role="status" aria-live="polite">
              <h2 className="text-2xl">Thank you, {submittedName || "friend"}.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Your message has been submitted. I reply to every enquiry within one business day
                with times for a discovery call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-busy={sending}>
              <h2 className="text-2xl">Send a message</h2>
              {error && (
                <p className="mt-4 text-sm text-destructive" role="alert">
                  {error}{" "}
                  {error.includes("email Susan directly") && (
                    <a className="underline" href="mailto:susanwakarindi222@gmail.com">
                      Email Susan
                    </a>
                  )}
                </p>
              )}
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block text-sm">
                  Your name
                  <input
                    required
                    autoComplete="name"
                    name="name"
                    className={field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className="block text-sm">
                  Email
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    name="email"
                    className={field}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
              </div>
              <label className="mt-6 block text-sm">
                What do you need help with?
                <select
                  required
                  name="need"
                  className={field}
                  value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })}
                >
                  <option value="">Choose one</option>
                  <option>Executive support (inbox, calendar, travel)</option>
                  <option>Operations, SOPs &amp; project management</option>
                  <option>AI &amp; automation</option>
                  <option>Marketing &amp; personal branding support</option>
                  <option>Back office &amp; bookkeeping</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="mt-6 block text-sm">
                A little context
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={field}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>

        <aside>
          <p className="eyebrow">What happens next</p>
          <ol className="mt-6">
            {nextSteps.map(([n, title, body]) => (
              <li key={n} className="flex gap-4 border-b border-border py-5 first:border-t">
                <span className="font-display text-sm text-[var(--gold)]">{n}</span>
                <div>
                  <p className="font-display font-semibold text-primary">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <p className="eyebrow">Before you ask</p>
        <dl className="mt-8">
          {faqs.map(([q, a]) => (
            <div key={q} className="border-b border-border py-6">
              <dt className="font-display text-lg font-semibold text-primary">{q}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </SiteLayout>
  );
}
