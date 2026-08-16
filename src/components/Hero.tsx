import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  cta?: { label: string; to: string };
  phone?: string;
  align?: "left" | "center";
  scrollHint?: boolean;
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

      <AuroraBackground variant="dark" />

      {/* scanning light beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-[var(--gradient-sheen)] opacity-[0.07] animate-sheen"
      />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 py-24 lg:px-6 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <div
            className={`mb-6 flex ${align === "center" ? "justify-center" : "justify-start"}`}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/85">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-glow animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
              </span>
              {eyebrow}
            </span>
          </div>
        )}
        <h1
          className={`font-serif text-4xl font-normal uppercase leading-[1.05] tracking-wide text-gradient-light md:text-6xl lg:text-7xl ${
            align === "center" ? "mx-auto max-w-5xl" : "max-w-4xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85 md:text-xl ${
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
            <Link
              to={cta.to}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary glow-ring transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="relative z-10">{cta.label}</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-y-0 -left-full w-1/2 bg-[var(--gradient-sheen)] opacity-40 transition-transform duration-700 group-hover:translate-x-[320%]" />
            </Link>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
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
