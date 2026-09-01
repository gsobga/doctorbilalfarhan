import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { BOOKING_URL } from "@/lib/booking";
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-10 px-4 pb-16 pt-32 md:grid-cols-[1fr_minmax(0,0.9fr)] md:gap-8 lg:px-6 lg:pb-0 lg:pt-40">
        {/* Copy column */}
        <div className="max-w-xl md:pb-16 lg:pb-24">
          <h1 className="font-serif text-[2.5rem] font-normal uppercase leading-[0.95] tracking-wide text-white sm:text-5xl lg:text-[4rem]">
            Bilal Farhan, MD, FACS
          </h1>

          <p className="mt-6 font-serif text-xl uppercase leading-[1.15] tracking-wide text-white/90 lg:text-[1.9rem]">
            Advanced expertise.
            <br />
            Individualized urologic care.
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            HoLEP and BPH, male and female incontinence, mesh complications, urethral
            reconstruction, and complex kidney stones, from a fellowship-trained surgeon who
            listens first and plans with you.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-transform duration-500 hover:-translate-y-1"
            >
              Request a consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors duration-500 hover:bg-white/10"
            >
              Meet Dr. Farhan
            </Link>
          </div>
        </div>

        {/* Portrait column — blends into the navy field, no hard frame */}
        <div className="relative flex items-end justify-center md:justify-end">
          {/* soft aurora halo behind the figure */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[8%] left-1/2 h-[78%] w-[92%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_38%,color-mix(in_oklab,var(--glow)_42%,transparent),transparent_68%)] opacity-60 blur-2xl"
          />

          {/* substantial graphic behind the portrait */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[6%] left-1/2 z-[1] w-[110%] max-w-[580px] -translate-x-1/2 opacity-70"
          >
            {/* blurred color nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[72%] w-[72%] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--glow)_30%,transparent),transparent_70%)] blur-2xl" />
              <div className="absolute h-[46%] w-[46%] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--glow)_22%,transparent),transparent_70%)] blur-xl" />
            </div>

            <svg
              viewBox="0 0 400 400"
              fill="none"
              className="h-auto w-full animate-[spin_90s_linear_infinite]"
            >
              <defs>
                <linearGradient id="heroRingGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--glow)" stopOpacity="0.5" />
                  <stop offset="55%" stopColor="var(--glow)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.06" />
                </linearGradient>
                <radialGradient id="heroCoreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--glow)" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="var(--glow)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* central glow disc */}
              <circle cx="200" cy="200" r="130" fill="url(#heroCoreGrad)" />

              {/* outer solid ring */}
              <circle cx="200" cy="200" r="192" stroke="url(#heroRingGrad)" strokeWidth="1.5" />

              {/* tick marks on outer ring */}
              {[...Array(24)].map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const r1 = 184;
                const r2 = i % 6 === 0 ? 174 : 180;
                return (
                  <line
                    key={i}
                    x1={200 + r1 * Math.cos(angle)}
                    y1={200 + r1 * Math.sin(angle)}
                    x2={200 + r2 * Math.cos(angle)}
                    y2={200 + r2 * Math.sin(angle)}
                    stroke="white"
                    strokeWidth={i % 6 === 0 ? 1 : 0.5}
                    opacity={i % 6 === 0 ? 0.25 : 0.12}
                  />
                );
              })}

              {/* dashed middle ring */}
              <circle
                cx="200"
                cy="200"
                r="156"
                stroke="url(#heroRingGrad)"
                strokeWidth="1"
                strokeDasharray="6 10"
                opacity="0.55"
              />

              {/* inner thin ring */}
              <circle
                cx="200"
                cy="200"
                r="118"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="1 5"
                opacity="0.18"
              />

              {/* crosshair guides */}
              <path
                d="M200 40 V360 M40 200 H360"
                stroke="url(#heroRingGrad)"
                strokeWidth="0.5"
                opacity="0.12"
              />

              {/* sweeping accent arc */}
              <path
                d="M 60 200 A 140 140 0 0 1 340 200"
                stroke="var(--glow)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.28"
              />

              {/* counter-rotating inner ring + orbiting node */}
              <g
                className="animate-[spin_45s_linear_infinite_reverse]"
                style={{ transformOrigin: "200px 200px" }}
              >
                <circle
                  cx="200"
                  cy="200"
                  r="104"
                  stroke="url(#heroRingGrad)"
                  strokeWidth="1"
                  strokeDasharray="32 40"
                  opacity="0.45"
                />
                <circle
                  cx="304"
                  cy="200"
                  r="4"
                  fill="var(--glow)"
                  opacity="0.85"
                />
                <circle
                  cx="96"
                  cy="200"
                  r="2.5"
                  fill="white"
                  opacity="0.35"
                />
              </g>
            </svg>
          </div>

          {/* gradient wash that fades the cutout into the background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[42%] bg-gradient-to-t from-primary via-primary/55 to-transparent"
          />
          <img
            src={drFarhanCutout}
            alt="Bilal Farhan, MD, FACS, fellowship-trained functional and reconstructive urologist in Houston"
            className="relative z-10 block w-auto max-w-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)] max-h-[52svh] md:max-h-[72svh] lg:max-h-[92svh]"
            width={753}
            height={1024}
          />
        </div>
      </div>
    </section>

  );
}
