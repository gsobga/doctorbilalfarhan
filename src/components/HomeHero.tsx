import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Award, Activity } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";
import drFarhanImg from "@/assets/dr-farhan.jpg";

const focusAreas = [
  "HoLEP & BPH",
  "Male & Female Incontinence",
  "Mesh Complications",
  "Urethral Reconstruction",
  "Complex Kidney Stones",
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      {/* Portrait — full-bleed on the right, behind copy on mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 h-full w-full lg:w-[62%]">
          <img
            src={drFarhanImg}
            alt="Bilal Farhan, MD, FACS — fellowship-trained functional and reconstructive urologist in Houston"
            className="h-full w-full object-cover object-[65%_18%] lg:object-[center_15%]"
            width={800}
            height={1000}
          />
        </div>
        {/* navy wash: strong on the left, clearing over the face */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/25 lg:from-primary lg:via-primary/85 lg:via-40% lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/40 lg:from-primary/60 lg:via-transparent lg:to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_45%,color-mix(in_oklab,var(--glow)_18%,transparent),transparent_62%)]" />
      </div>

      <AuroraBackground variant="dark" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 bg-[var(--gradient-sheen)] opacity-[0.06] animate-sheen"
      />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-4 pb-14 pt-36 lg:min-h-[100svh] lg:justify-center lg:px-6 lg:pb-24 lg:pt-40">
        <div className="max-w-xl lg:max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/85 sm:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-glow animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
            </span>
            Center for Advanced Urology
          </span>

          <p className="mt-8 text-xs uppercase tracking-[0.34em] text-white/60">
            Functional • Reconstructive • Minimally Invasive
          </p>

          <h1 className="mt-4 font-serif text-[2.5rem] font-normal uppercase leading-[0.98] tracking-wide text-gradient-light sm:text-5xl lg:text-[4.4rem]">
            Bilal Farhan,
            <br />
            MD, FACS
          </h1>

          <p className="mt-5 font-serif text-2xl uppercase leading-tight tracking-wide text-white/90 lg:text-3xl">
            Advanced expertise.
            <br />
            Individualized urologic care.
          </p>

          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 lg:text-lg">
            Fellowship-trained functional and reconstructive urologist and former Associate
            Professor of Urology, caring for patients across Houston, Pearland, Clear Lake,
            and the Bay Area.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/75 backdrop-blur-sm transition-colors duration-500 hover:border-accent/50 hover:text-white"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-[var(--shadow-glow)] transition-transform duration-500 hover:-translate-y-1"
            >
              Request a consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:3464143426"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-500 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              346-414-3426
            </a>
          </div>
        </div>
      </div>

      {/* credential bar */}
      <div className="relative z-10 border-t border-white/10 bg-primary/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 lg:px-6">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-white">4× Center of Excellence</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                HoLEP • GreenLight • AUS • Female Sling
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-white">250+ HoLEP Procedures</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                Established the UTMB HoLEP program
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-5 w-5 shrink-0 rounded-full border-2 border-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-white">In-person & telehealth</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                10950 Resource Pkwy, Houston, TX 77089
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
