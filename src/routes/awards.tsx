import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BadgeCheck, ExternalLink, GraduationCap } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/booking";
import heroBg from "@/assets/hero-bg.jpg";
import teachingAwardAsset from "@/assets/utmb-teaching-award.jpg.asset.json";

const teachingAward = teachingAwardAsset.url;

const description =
  "Verified awards and recognition for Bilal Farhan, MD, FACS, including teaching recognition and the Academy of Master Clinicians Clinician of the Month feature.";

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

      {/* Featured UTMB recognition */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex h-80 w-full items-center justify-center rounded-lg bg-muted">
                <img
                  src={teachingAward}
                  alt="Dr. Farhan holding a UTMB Outstanding Urology Teacher award plaque with colleagues"
                  className="max-h-full max-w-full rounded-lg object-contain"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Dr. Farhan recognized by UTMB&apos;s Academy of Master Clinicians.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                Featured Recognition
              </p>
              <h2 className="mt-4 font-serif text-3xl text-primary lg:text-4xl">
                Academy of Master Clinicians — Clinician of the Month
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                In March 2023, UTMB&apos;s Faculty Group Practice highlighted Dr. Farhan as the
                Academy of Master Clinicians&apos; Clinician of the Month, recognizing his clinical
                excellence and dedication to patient care.
              </p>
              <a
                href="https://www.utmb.edu/fgp/newsletter/article/newsletter/2023/03/09/amc-clinician-of-the-month-bilal-farhan-md-facs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Read the UTMB feature
                <ExternalLink className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

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
