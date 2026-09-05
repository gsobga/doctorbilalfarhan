import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Play, Users, Activity, ClipboardList, ShieldCheck } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import drFarhanCutout from "@/assets/dr-farhan-cutout.png";
import clinicLobby from "@/assets/clinic-lobby.jpg";

const trustItems = [
  { icon: Users, lines: ["Fellowship-Trained", "Urologic Surgeon"] },
  { icon: Activity, lines: ["Advanced Technology", "& Minimally Invasive Care"] },
  { icon: ClipboardList, lines: ["Personalized Treatment", "Plans"] },
  { icon: ShieldCheck, lines: ["Centers of Excellence", "HoLEP • AUS"] },
];

const credibility = [
  { value: "UTMB", label: "Former Associate Professor" },
  { value: "2023–2025", label: "Texas Super Doctors" },
  { value: "250+", label: "HoLEP Procedures" },
  { value: "Teaching Awards", label: "UTMB Recognized Educator" },
  { value: "Patient Reviews", label: "Trusted Patient Care" },
  { value: "200+", label: "Humanitarian Surgeries in Africa" },
];

export function HomeHero() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* clinic background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={clinicLobby}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-8 px-4 pb-0 pt-36 md:grid-cols-[1fr_minmax(0,0.95fr)] lg:px-6 lg:pt-44">
          {/* Copy */}
          <div className="max-w-xl pb-16 lg:pb-24">
            <h1 className="font-serif text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-[3.5rem]">
              Bilal Farhan, MD, FACS
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Urologist &amp; Pelvic Surgeon
            </p>

            <p className="mt-6 font-serif text-xl text-primary lg:text-2xl">
              Advanced urologic care. Academic experience. Individualized treatment.
            </p>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Fellowship-trained urologic surgeon specializing in functional urology, urinary
              incontinence, voiding dysfunction, pelvic and urethral reconstruction, enlarged
              prostate and HoLEP, and complex stone disease.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_36px_-16px_color-mix(in_oklab,var(--primary)_80%,transparent)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <CalendarDays className="h-4 w-4" />
                Request an Appointment
              </a>
              <Link
                to="/patient-education"
                className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-card/70 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition-colors duration-300 hover:bg-card"
              >
                <Play className="h-4 w-4" />
                Explore Conditions &amp; Treatments
              </Link>
            </div>

            <div className="mt-9 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                Serving Houston, Pearland,
                <br />
                Clear Lake &amp; Surrounding Areas
              </span>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative flex items-end justify-center md:justify-end">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[6%] left-1/2 h-[70%] w-[88%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent_70%)] blur-2xl"
            />
            <img
              src={drFarhanCutout}
              alt="Bilal Farhan, MD, FACS, fellowship-trained urologist in Houston"
              className="relative z-10 block w-auto max-w-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(15,32,64,0.28)] max-h-[46svh] md:max-h-[68svh] lg:max-h-[80svh]"
              width={894}
              height={1118}
            />
          </div>
        </div>
      </section>

      {/* Credibility bar */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 lg:grid-cols-6 lg:px-6">
          {credibility.map((item) => (
            <div key={item.label} className="px-4 py-6 text-center">
              <p className="font-serif text-lg text-accent lg:text-xl">{item.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-primary-foreground/75">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            Trusted Urology Care
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl text-primary lg:text-4xl">
            Comprehensive care for men and women
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
            Expert evaluation and the latest treatments for a wide range of urologic conditions,
            with compassion, precision, and individualized solutions.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {trustItems.map(({ icon: Icon, lines }) => (
              <div key={lines[0]} className="flex flex-col items-center gap-3">
                <Icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                <p className="text-sm leading-snug text-foreground">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
