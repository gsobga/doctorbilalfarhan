import { createFileRoute, Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/booking";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/Reveal";
import { AuroraBackground } from "@/components/AuroraBackground";
import { StatCounter } from "@/components/StatCounter";
import drFarhanImg from "@/assets/dr-farhan.jpg";
import femaleUrologyImg from "@/assets/female-urology.jpg";
import maleUrologyImg from "@/assets/male-urology.jpg";
import voidingImg from "@/assets/voiding-dysfunction.jpg";
import pelvicImg from "@/assets/pelvic-reconstruction.jpg";
import galleryLaser from "@/assets/gallery-laser.jpg";
import galleryDiagnostics from "@/assets/gallery-diagnostics.jpg";
import { Star, Phone, ArrowRight, ArrowUpRight } from "lucide-react";

const description =
  "Bilal Farhan, MD, FACS, fellowship-trained functional and reconstructive urologist in Houston. Advanced expertise and individualized care for BPH and HoLEP, male and female incontinence, mesh complications, voiding dysfunction, urethral reconstruction, and complex kidney stones.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bilal Farhan, MD, FACS — Advanced Urology in Houston, TX" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Bilal Farhan, MD, FACS — Advanced Urology in Houston, TX",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const conditions = [
  {
    title: "Enlarged Prostate (BPH)",
    body: "Weak stream, incomplete emptying, night-time urination, and urinary retention.",
    image: galleryLaser,
    to: "/bph-holep",
  },
  {
    title: "Male Incontinence",
    body: "Leakage after prostate surgery or radiation, and failed prior continence procedures.",
    image: maleUrologyImg,
    to: "/male-urology",
  },
  {
    title: "Female Incontinence",
    body: "Stress and mixed incontinence, recurrent leakage, and complex continence problems.",
    image: femaleUrologyImg,
    to: "/female-urology",
  },
  {
    title: "Mesh Complications",
    body: "Pain, erosion, exposure, and obstruction after sling or prolapse mesh placement.",
    image: pelvicImg,
    to: "/female-urology",
  },
  {
    title: "Overactive Bladder",
    body: "Urgency, frequency, refractory OAB, neurogenic bladder, and voiding dysfunction.",
    image: voidingImg,
    to: "/voiding-dysfunction",
  },
  {
    title: "Urethral Stricture",
    body: "Recurrent narrowing, failed dilation, and reconstruction after prior surgery.",
    image: pelvicImg,
    to: "/pelvic-reconstruction",
  },
  {
    title: "Kidney Stones",
    body: "Routine, recurrent, and complex or large-volume stone disease.",
    image: galleryDiagnostics,
    to: "/kidney-stones",
  },
];

const featuredTreatment = {
  title: "HoLEP for BPH",
  body: "Holmium laser enucleation of the prostate, a durable, size-independent treatment for enlarged prostate, performed by a surgeon who established a hospital HoLEP program.",
  points: [
    "250+ HoLEP procedures performed",
    "HoLEP Center of Excellence",
    "Catheter-free for most patients within days",
  ],
  image: galleryLaser,
  to: "/bph-holep",
};

const treatments = [
  {
    title: "Continence Surgery",
    body: "Artificial urinary sphincter, male sling, female slings, and urethral bulking.",
    points: ["AUS Center of Excellence", "Female Sling Center of Excellence"],
    to: "/male-urology",
  },
  {
    title: "Reconstructive Surgery",
    body: "Urethroplasty, buccal graft reconstruction, fistula repair, and mesh revision.",
    points: ["Complex and revision cases", "Robotic reconstruction"],
    to: "/pelvic-reconstruction",
  },
  {
    title: "Stone Surgery",
    body: "Ureteroscopy with laser lithotripsy, standard PCNL, mini-PCNL, and supine PCNL.",
    points: ["Minimally invasive approaches", "Recurrent stone prevention"],
    to: "/kidney-stones",
  },
];

const metrics = [
  { value: 250, suffix: "+", label: "HoLEP procedures performed" },
  { value: 4, suffix: "", label: "Centers of Excellence" },
  { value: 1, suffix: "", label: "HoLEP program established at UTMB" },
  { value: 2, suffix: "", label: "Languages: English & Arabic" },
];

const marqueeItems = [
  "Fellowship-Trained Functional & Reconstructive Urology",
  "Former Associate Professor of Urology",
  "HoLEP Center of Excellence",
  "AUS Center of Excellence",
  "Female Sling Center of Excellence",
  "GreenLight Center of Excellence",
  "250+ HoLEP Procedures",
  "Academy of Master Clinicians 2023",
];

const insights = [
  {
    kicker: "Article · Patient Story",
    title: "Complex reconstruction after years of failed treatment",
    to: "/reviews",
  },
  {
    kicker: "Article · BPH",
    title: "Choosing between HoLEP, GreenLight, and medication",
    to: "/bph-holep",
  },
  {
    kicker: "Article · Second Opinions",
    title: "When a complex urologic problem deserves another look",
    to: "/second-opinions",
  },
  {
    kicker: "Article · Access",
    title: "Insurance, self-pay, and financing at the practice",
    to: "/insurance",
  },
];

const reviews = [
  {
    text: "Dr. Farhan is truly exceptional. From the very first consultation, he takes the time to listen carefully, answer every question, and make you feel completely comfortable.",
    author: "Verified Patient",
  },
  {
    text: "The entire team is welcoming and supportive, creating a seamless experience from start to finish. If you're looking for a urologist you can fully trust, Dr. Farhan is an outstanding choice.",
    author: "Verified Patient",
  },
  {
    text: "After years of dealing with urinary issues, I finally found a doctor who listened. Dr. Farhan's expertise in voiding dysfunction gave me my quality of life back.",
    author: "Verified Patient",
  },
];

const areas = [
  "Houston",
  "Southeast Houston",
  "Pearland",
  "Clear Lake",
  "Webster",
  "Friendswood",
  "League City",
  "Pasadena",
  "Bay Area Houston",
];

function HomePage() {
  return (
    <main className="overflow-hidden">
      <HomeHero />

      {/* Credential marquee */}
      <div className="relative overflow-hidden border-y border-border bg-foreground py-4">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-background/70"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 1. Conditions */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-4 pt-24 lg:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
              Conditions
            </p>
            <h2 className="mt-4 font-serif text-4xl uppercase tracking-wide text-foreground lg:text-5xl">
              Conditions we treat
            </h2>
            <p className="mt-5 text-muted-foreground">
              From prostate and bladder symptoms to complex reconstruction, every visit starts
              with a clear conversation about what you are dealing with.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-24 lg:px-6">
          {conditions.map((c, i) => (
            <Link
              key={c.title}
              to={c.to}
              className="group w-[280px] shrink-0 snap-start sm:w-[320px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  loading="lazy"
                  width={480}
                  height={360}
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                  {String(i + 1).padStart(2, "0")} / {String(conditions.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg uppercase tracking-wide text-foreground">
                {c.title}
              </h3>
              <div className="mt-3 rounded-2xl bg-primary/5 p-5 transition-colors duration-500 group-hover:bg-primary/10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Overview
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Treatments */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
              Treatments
            </p>
            <h2 className="mt-4 font-serif text-4xl uppercase tracking-wide text-foreground lg:text-5xl">
              Care options that fit your situation
            </h2>
            <p className="mt-5 text-muted-foreground">
              A diagnosis does not automatically mean surgery. Options span conservative care,
              minimally invasive procedures, and advanced reconstruction, explained simply,
              planned with you.
            </p>
          </Reveal>

          {/* Featured */}
          <Reveal className="mt-14">
            <Link
              to={featuredTreatment.to}
              className="group grid overflow-hidden rounded-3xl bg-primary text-primary-foreground lg:grid-cols-2"
            >
              <div className="relative min-h-[280px] overflow-hidden">
                <img
                  src={featuredTreatment.image}
                  alt={featuredTreatment.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/70" />
              </div>
              <div className="p-10 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Featured treatment
                </p>
                <h3 className="mt-4 font-serif text-3xl uppercase tracking-wide lg:text-4xl">
                  {featuredTreatment.title}
                </h3>
                <p className="mt-4 text-primary-foreground/80">{featuredTreatment.body}</p>
                <ul className="mt-8 space-y-3 border-t border-white/15 pt-6">
                  {featuredTreatment.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 text-sm text-primary-foreground/85"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Numbered cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {treatments.map((t, i) => (
              <Reveal key={t.title} delay={i * 110} className="h-full">
                <Link
                  to={t.to}
                  className="group flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="font-serif text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl uppercase tracking-wide text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {t.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Your physician */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src={drFarhanImg}
                alt="Dr. Bilal Farhan, fellowship-trained functional and reconstructive urologist in Houston"
                className="w-full rounded-3xl object-cover shadow-xl"
                width={600}
                height={600}
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
                Your physician
              </p>
              <h2 className="mt-4 font-serif text-3xl uppercase tracking-wide text-foreground lg:text-4xl">
                Bilal Farhan, MD, FACS
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Fellowship-trained urologist · Functional, reconstructive & minimally invasive
              </p>
              <p className="mt-8 font-serif text-2xl leading-snug text-foreground">
                &ldquo;The treatment should fit the patient — not the other way
                around.&rdquo;
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Dr. Farhan is a fellowship-trained functional and reconstructive urologist and
                former Associate Professor of Urology. His practice centers on BPH and HoLEP,
                male and female incontinence, mesh complications, voiding dysfunction,
                urethral and pelvic reconstruction, and complex kidney stones.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                He completed fellowship training in functional and reconstructive urology at
                the University of California, Irvine, established the HoLEP program at UTMB,
                and cares for patients in English and Arabic across Houston, Pearland, Clear
                Lake, and the Bay Area.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-500 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
              >
                Full biography
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          {/* Track record */}
          <Reveal className="mt-20 text-center">
            <h3 className="font-serif text-3xl uppercase tracking-wide text-foreground">
              A track record you can see
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Training, surgical volume, and recognition that reflect how the practice works.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 90}>
                <div className="border-t border-border pt-6">
                  <p className="font-serif text-5xl text-primary">
                    <StatCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA band */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <AuroraBackground variant="dark" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <div>
            <h2 className="font-serif text-4xl uppercase tracking-wide lg:text-5xl">
              Ready when you are
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Request a consultation. We will walk through your options together and help you
              decide what comes next, in person or by telehealth.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-transform duration-500 hover:-translate-y-1"
            >
              Request Appointment
            </a>
            <a
              href="tel:3464143426"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors duration-500 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              346-414-3426
            </a>
          </div>
        </div>
      </section>

      {/* 5. Media & insights */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
              Media & insights
            </p>
            <h2 className="mt-4 font-serif text-4xl uppercase tracking-wide text-foreground lg:text-5xl">
              Worth reading before your visit
            </h2>
            <p className="mt-5 text-muted-foreground">
              Short reads to help you understand your options before we meet.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
            {insights.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <Link
                  to={item.to}
                  className="group flex h-full flex-col justify-between bg-card p-8 transition-colors duration-500 hover:bg-sand"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                    {item.kicker}
                  </p>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <h3 className="font-serif text-xl leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Patient experiences */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <Reveal className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
              Patient experiences
            </p>
            <h2 className="mt-4 font-serif text-4xl uppercase tracking-wide text-foreground lg:text-5xl">
              What patients say
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={i} delay={i * 120} className="h-full">
                <div className="h-full rounded-2xl bg-card p-8 shadow-sm">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-accent text-accent"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{review.text}</p>
                  <p className="mt-5 text-sm font-medium text-muted-foreground">
                    {review.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12">
            <Link
              to="/reviews"
              className="inline-block rounded-full border border-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-500 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
            >
              Read more reviews
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. Areas served */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <AuroraBackground variant="dark" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-serif text-4xl uppercase tracking-wide lg:text-5xl">
                Caring for the Houston area
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/80">
                Patients travel from across Southeast Houston and the Bay Area for advanced
                BPH, continence, reconstructive, and complex stone care. Hospital affiliations
                include Memorial Hermann Southeast, HCA Houston Healthcare Pearland, and HCA
                Houston Healthcare Clear Lake.
              </p>
              <p className="mt-5 text-sm text-primary-foreground/70">
                10950 Resource Pkwy, Houston, TX 77089 • In-person & telehealth
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {areas.map((area, i) => (
                <Reveal key={area} delay={i * 70}>
                  <div className="rounded-xl glass-dark px-4 py-4 text-center text-sm font-medium text-white transition-transform duration-500 hover:-translate-y-1">
                    {area}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
