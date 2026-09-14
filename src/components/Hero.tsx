import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  cta?: { label: string; to: string };
  phone?: string;
  align?: "left" | "center";
  scrollHint?: boolean;
  compact?: boolean;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  cta,
  phone,
  align = "center",
  scrollHint = false,
  compact = false,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full scale-105 object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,color-mix(in_oklab,black_55%,transparent))]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-field opacity-20" />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 py-24 lg:px-6 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <div
            className={`mb-6 flex ${align === "center" ? "justify-center" : "justify-start"}`}
          >
            <span className="inline-flex items-center gap-2 border-l-2 border-accent px-4 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-primary-foreground/85">
              {eyebrow}
            </span>
          </div>
        )}
        <h1
          className={`font-serif font-normal uppercase leading-[1.08] tracking-wide text-gradient-light ${
            compact ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-6xl lg:text-7xl"
          } ${
            align === "center" ? "mx-auto max-w-5xl" : "max-w-4xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-6 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/85 md:text-xl ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
        <div
          className={`mt-10 flex flex-col gap-4 sm:flex-row ${
            align === "center" ? "items-center justify-center" : "items-start"
          }`}
        >
          {cta && (
            (cta.to.startsWith("http") ? (
              <a
                href={cta.to}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="relative z-10">{cta.label}</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-y-0 -left-full w-1/2 bg-[var(--gradient-sheen)] opacity-40 transition-transform duration-700 group-hover:translate-x-[320%]" />
              </a>
            ) : (
              <Link
                to={cta.to}
                className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full bg-background px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="relative z-10">{cta.label}</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-y-0 -left-full w-1/2 bg-[var(--gradient-sheen)] opacity-40 transition-transform duration-700 group-hover:translate-x-[320%]" />
              </Link>
            ))
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          )}
        </div>
      </div>

      {scrollHint && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float text-white/60">
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </div>
      )}
    </section>
  );
}
