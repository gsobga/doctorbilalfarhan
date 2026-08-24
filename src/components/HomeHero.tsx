import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ChevronDown, Award, Activity } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";
import drFarhanImg from "@/assets/dr-farhan.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const focusAreas = [
  "HoLEP & BPH",
  "Male & Female Incontinence",
  "Mesh Complications",
  "Urethral Reconstruction",
  "Voiding Dysfunction",
  "Complex Kidney Stones",
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* layered background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full scale-105 object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/97 via-primary/90 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent_60%)]" />
      </div>
      <AuroraBackground variant="dark" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-[var(--gradient-sheen)] opacity-[0.07] animate-sheen"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-6">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/85">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-glow animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
              </span>
              Center for Advanced Urology • CLS Health
            </span>
          </div>

          <h1 className="mt-7 font-serif text-4xl font-normal uppercase leading-[1.05] tracking-wide text-gradient-light md:text-6xl lg:text-[4.1rem]">
            Advanced Expertise.
            <br />
            Individualized Urologic Care.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85 lg:mx-0">
            <span className="font-medium text-white">Bilal Farhan, MD, FACS</span> —
            fellowship-trained functional and reconstructive urologist and former Associate
            Professor of Urology, caring for patients across Houston, Pearland, Clear Lake,
            and the Bay Area.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {focusAreas.map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-white/75 backdrop-blur-sm transition-colors duration-500 hover:border-accent/50 hover:text-white"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-[var(--shadow-glow)] transition-transform duration-500 hover:-translate-y-1"
            >
              Schedule an Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:3464143426"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-500 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              346-414-3426
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/55">
            10950 Resource Pkwy, Houston, TX 77089 • In-person & telehealth
          </p>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-[var(--gradient-aurora)] opacity-40 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-[2rem] border border-white/15"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 shadow-[var(--shadow-glow)]">
            <img
              src={drFarhanImg}
              alt="Bilal Farhan, MD, FACS — fellowship-trained functional and reconstructive urologist in Houston"
              className="aspect-[4/5] w-full object-cover object-top"
              width={800}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-serif text-2xl text-white">Bilal Farhan, MD, FACS</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/75">
                Functional • Reconstructive • Minimally Invasive Urology
              </p>
            </div>
          </div>

          {/* credential strip */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="glass-dark flex items-center gap-3 rounded-2xl px-4 py-3">
              <Award className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">4× Center of Excellence</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                  HoLEP • GreenLight • AUS • Female Sling
                </p>
              </div>
            </div>
            <div className="glass-dark flex items-center gap-3 rounded-2xl px-4 py-3">
              <Activity className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">250+ HoLEP Procedures</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/60">
                  Established the UTMB HoLEP program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-14 flex justify-center">
        <ChevronDown className="h-6 w-6 animate-bounce text-white/50" aria-hidden="true" />
      </div>
    </section>
  );
}
