import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Star, ArrowRight, User } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  image?: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "jackline-kihuga",
    name: "Jackline Kihuga",
    role: "ICPAK",
    company: "ICPAK",
    image: "",
    rating: 5,
    quote:
      "Susan has worked with us for nine months and the season has been impressive and outstanding. She is dependable, able to follow instructions, responds to management direction and commits herself to doing the best job possible. One of her strengths is that she adapts and learns fast in a new working environment and new responsibilities.",
  },
  {
    id: "elvis-warutumo",
    name: "Elvis Warutumo",
    role: "Tera Creations",
    company: "Tera Creations",
    image: "",
    rating: 5,
    quote:
      "Working with Susan as my personal assistant and admin at Tera Creations for the past ten months has been an absolute game-changer. Her attention to detail, exceptional organizational skills, and proactive approach have streamlined my entire workflow. From managing my calendar to handling client communications and day-to-day admin tasks, Susan's support has allowed me to focus on growing the business without the constant stress of small but critical tasks. She's not just an assistant, she's an integral part of the team, always anticipating needs and offering solutions before problems arise. If you're looking for someone reliable, efficient, and committed, Susan is the one. I highly recommend her.",
  },
  {
    id: "ian-gatheru",
    name: "Ian Gatheru",
    role: "Ace Mobility",
    company: "Ace Mobility",
    image: "",
    rating: 5,
    quote:
      "It was an honor to work alongside Susan and building a marketing strategy that's not just theoretical but actionable and results driven. She has really helped in refining not only our social media approach as Ace Mobility but the overall marketing strategy especially on knowing how to communicate our impact.",
  },
  {
    id: "amuku-philemon",
    name: "Amuku Philemon",
    role: "Operations & Team Lead",
    company: "",
    image: "",
    rating: 5,
    quote:
      "Susan demonstrates a sincere interest in other team members and offering solutions to their problems She always exceeds expectations for facilitating communication and collaboration with the team and Stakeholders. Effectively communicates laterally, upward, and downward. Keeps meetings organized and action-oriented by task.",
  },
  {
    id: "blanche-wangui",
    name: "Blanche Wangui",
    role: "Brand & Content Creator",
    company: "",
    image: "",
    rating: 5,
    quote:
      "Susan managed my LinkedIn for just one month, and the results were incredible. My posts finally had structure, my voice came through clearly, and engagement shot up. I started getting DMs from people I actually wanted to connect with. If you need someone who understands both strategy and storytelling, Susan is it.",
  },
  {
    id: "daniel-nzambuli",
    name: "Daniel Nzambuli",
    role: "Author & Speaker",
    company: "Your Mindset is Your LifeSet",
    image: "",
    rating: 5,
    quote:
      "Working with Susan for three months has been amazing for our brand. As our Social Media Manager and Marketing Assistant, she brought clarity and direction to our content. Her proactive communication and efficient execution made delegating seamless and highly impactful.",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive items per view: 1 on mobile/tablet (<1024px), 3 on desktop (>=1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic transition every 3 seconds, paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Compute visible items with circular index
  const visibleItems = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = (currentIndex + i) % total;
    visibleItems.push({ item: TESTIMONIALS[idx], originalIdx: idx });
  }

  return (
    <section
      id="testimonials-section"
      className="border-t border-border bg-[var(--sand)]/50 py-20 md:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="subhead-gold mb-3 text-xs tracking-widest uppercase">Testimonials</p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Professionals and business owners love how Susan makes their work easier.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Here are a few words from founders, executives, and team leaders.
          </p>
        </div>

        {/* Carousel controls bar */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="testimonial-prev-btn"
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              id="testimonial-next-btn"
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visibleItems.map(({ item, originalIdx }, index) => (
            <div
              key={`${item.id}-${originalIdx}-${index}`}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-xs transition-all duration-500 ease-in-out hover:border-[var(--gold)]/50 hover:shadow-md"
            >
              <div>
                {/* Avatar / Placeholder & Header */}
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-14 rounded-full border border-border object-cover"
                    />
                  ) : (
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-muted-foreground">
                      <User className="size-6 text-[var(--gold)]" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground">{item.name}</h3>
                    {(item.role || item.company) && (
                      <p className="text-xs text-muted-foreground">
                        {item.role}
                        {item.role && item.company && item.company !== item.role
                          ? ` · ${item.company}`
                          : ""}
                      </p>
                    )}
                  </div>
                </div>

                {/* Rating stars */}
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, starI) => (
                    <Star key={starI} className="size-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <span className="font-mono text-[10px] text-[var(--gold)]">VERIFIED CLIENT</span>
                <span>{item.company || "Executive Review"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((t, dotIdx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to testimonial ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? "w-8 bg-[var(--gold)]"
                  : "w-2 bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* CTA section: "Let's connect" button redirecting to home page */}
        <div className="mt-14 rounded-2xl border border-[var(--gold)]/30 bg-background/80 p-8 text-center backdrop-blur-xs md:p-10">
          <h3 className="font-serif text-2xl text-foreground md:text-3xl">
            Ready to streamline your business and reclaim your time?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Whether you need executive operations, workflow automation, or calendar management,
            let&apos;s build a system that works for you.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              id="testimonials-cta-btn"
              to="/contact"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--gold)] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:bg-[var(--gold)]/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
            >
              Let&apos;s connect
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
