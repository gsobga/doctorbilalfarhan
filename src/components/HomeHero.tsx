import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";
import drFarhanCutout from "@/assets/dr-farhan-cutout.png";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-primary lg:min-h-[100svh]">
      {/* ambient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[color-mix(in_oklab,var(--primary)_82%,black)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_35%,color-mix(in_oklab,var(--glow)_26%,transparent),transparent_62%)]" />
      </div>
      <AuroraBackground variant="dark" />

      {/* Portrait — foreground cutout, bleeding off the bottom right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] flex w-full justify-center lg:w-[58%] lg:justify-end">
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-[70%] w-[85%] rounded-full bg-[var(--gradient-aurora)] opacity-30 blur-3xl"
        />
        <img
          src={drFarhanCutout}
          alt="Bilal Farhan, MD, FACS — fellowship-trained functional and reconstructive urologist in Houston"
          className="relative h-[62%] max-h-none w-auto self-end object-contain object-bottom opacity-90 drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] sm:h-[70%] lg:h-[88%] lg:opacity-100"
          width={753}
          height={1024}
        />
      </div>

      {/* navy wash over the photo so copy stays legible */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-primary via-primary/45 to-transparent lg:bg-gradient-to-r lg:from-primary lg:via-primary/70 lg:via-45% lg:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-40 lg:px-6 lg:pb-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/70">
            Functional • Reconstructive • Minimally Invasive Urology
          </p>

          <h1 className="mt-5 font-serif text-[2.75rem] font-normal uppercase leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-[4.25rem]">
            Bilal Farhan, MD, FACS
          </h1>

          <p className="mt-6 font-serif text-2xl uppercase leading-[1.15] tracking-wide text-white/90 lg:text-[1.9rem]">
            Advanced expertise.
            <br />
            Individualized urologic care.
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            HoLEP and BPH, male and female incontinence, mesh complications, urethral
            reconstruction, and complex kidney stones — from a fellowship-trained surgeon who
            listens first and plans with you.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-transform duration-500 hover:-translate-y-1"
            >
              Request a consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors duration-500 hover:bg-white/10"
            >
              Meet Dr. Farhan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
