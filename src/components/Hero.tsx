import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  cta?: { label: string; to: string };
  phone?: string;
  align?: "left" | "center";
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  cta,
  phone,
  align = "center",
}: HeroProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-6 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl font-serif text-4xl font-normal uppercase leading-[1.1] tracking-wide text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
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
              className="rounded-sm border border-white bg-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary"
            >
              {cta.label}
            </Link>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-sm border border-white/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
