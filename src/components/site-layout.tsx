import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "How I work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-primary">
              Susan Wakarindi
            </span>
            <span className="hidden text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground sm:block">
              Executive VA · Operations · Marketing · AI Systems
            </span>
          </Link>

          <nav className="hidden items-center gap-3 md:flex lg:gap-5 xl:gap-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
            >
              Book a call
            </Link>
          </nav>

          <button
            className="shrink-0 rounded-md p-2 text-primary transition-colors hover:bg-[var(--beige)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Off-canvas mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[var(--navy)]/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[min(80vw,18rem)] transform bg-background shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-6 py-5 pt-20">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-[var(--beige)] hover:text-primary [&.active]:bg-[var(--beige)] [&.active]:text-primary"
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 border-t border-border pt-6">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--gold)] hover:text-[var(--navy)]"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main>{children}</main>

      <footer className="mt-24 bg-primary text-[var(--beige)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-[var(--beige)]">
              Don't just work harder. Build better systems.
            </p>
            <p className="mt-3 max-w-md text-sm text-[var(--beige)]/75">
              Executive support, operations, marketing coordination and AI-powered systems for
              founders and growing businesses — remote, worldwide (EAT / UTC+3).
            </p>
            <p className="accent-serif mt-4 text-[var(--gold)]">
              Work Smarter. Operate Better. Grow Further.
            </p>
          </div>
          <div className="text-sm text-[var(--beige)]/75">
            <a
              href="mailto:susanwakarindi222@gmail.com"
              className="block font-medium text-[var(--gold)] transition-opacity hover:opacity-80"
            >
              susanwakarindi222@gmail.com
            </a>
            <p className="mt-2">© {new Date().getFullYear()} Susan Wakarindi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
