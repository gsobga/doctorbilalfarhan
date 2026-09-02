import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BadgeCheck, GraduationCap, ShieldCheck, Star } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/booking";
import heroBg from "@/assets/hero-bg.jpg";

const description =
  "Awards and recognition for Bilal Farhan, MD, FACS: Texas Super Doctors 2023, 2024, and 2025, UTMB teaching recognition, Academy of Master Clinicians, and Centers of Excellence in HoLEP, artificial urinary sphincter, GreenLight, and female sling.";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Recognition — Bilal Farhan, MD, FACS" },
      { name: "description", content: description },
      { property: "og:title", content: "Awards & Recognition — Bilal Farhan, MD, FACS" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/awards" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/awards" }],
  }),
  component: AwardsPage,
});

const awards = [
  {
    icon: Star,
    title: "Texas Super Doctors",
    meta: "2023 • 2024 • 2025",
    body: "Recognized in Texas Super Doctors for three consecutive years, a peer-nominated and independently researched listing.",
  },
  {
    icon: GraduationCap,
    title: "Teaching Excellence",
    meta: "UTMB Teaching Awards",
    body: "Recognition reflecting Dr. Farhan's commitment to educating medical students and physicians in training.",
  },
  {
    icon: Award,
    title: "Academy of Master Clinicians",
    meta: "UTMB",
    body: "Institutional recognition of clinical excellence and dedication to patient care.",
  },
  {
    icon: BadgeCheck,
    title: "Fellowship-Trained Subspecialist",
    meta: "Reconstructive Urology",
    body: "Advanced fellowship training in functional and reconstructive urology at the University of California, Irvine.",
  },
];

const centers = [
  {
    title: "HoLEP",
    body: "Advanced BPH surgery, including large glands, retention, and catheter-dependent patients. 250+ procedures performed.",
  },
  {
    title: "Artificial Urinary Sphincter",
    body: "Implantation and revision surgery for moderate to severe male stress urinary incontinence.",
  },
  {
    title: "GreenLight",
    body: "Photoselective vaporization of the prostate for selected patients, including those on anticoagulation.",
  },
  {
    title: "Female Sling",
    body: "Midurethral and autologous sling surgery for female stress urinary incontinence, including revision cases.",
  },
];

const achievements = [
  "250+ HoLEP procedures performed",
  "Established the HoLEP program and surgical training curriculum at UTMB",
  "200+ humanitarian surgeries performed in Africa",
  "Associate Professor of Urology, UTMB, 2019 to 2026",
  "Program Director of Neurourology and Pelvic Reconstruction",
  "Care delivered in English and Arabic",
];

function AwardsPage() {
  return (
    <main>
      <Hero
        eyebrow="Recognition"
        title="Awards & Recognition"
        subtitle="Recognition for clinical care, education, and innovation across an academic and surgical career."
        image={heroBg}
        align="left"
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map(({ icon: Icon, title, meta, body }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="h-full rounded-lg border border-border bg-card p-8">
                <Icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                <h2 className="mt-5 font-serif text-2xl text-primary">{title}</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {meta}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Clinical Designations
            </p>
            <h2 className="mt-4 font-serif text-3xl text-primary lg:text-4xl">
              Centers of Excellence
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Designations reflecting concentrated surgical volume and advanced training in specific
              procedures, separate from academic awards.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {centers.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="h-full rounded-lg border border-border bg-card p-6">
                  <ShieldCheck className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-lg text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical achievements */}
      <section className="mx-auto max-w-4xl px-4 py-20 lg:px-6">
        <Reveal>
          <h2 className="font-serif text-3xl text-primary">Major clinical achievements</h2>
          <span className="mt-3 block h-px w-16 bg-accent" />
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a} delay={i * 50} as="li">
              <li className="flex gap-3 rounded-md border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {a}
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/academic-career"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Academic Career at UTMB
            </Link>
            <Link
              to="/global-surgery"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary"
            >
              Global Surgery &amp; Humanitarian Service
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
