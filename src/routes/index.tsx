import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { AuroraBackground } from "@/components/AuroraBackground";
import { StatCounter } from "@/components/StatCounter";
import drFarhanImg from "@/assets/dr-farhan.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import femaleUrologyImg from "@/assets/female-urology.jpg";
import maleUrologyImg from "@/assets/male-urology.jpg";
import voidingImg from "@/assets/voiding-dysfunction.jpg";
import pelvicImg from "@/assets/pelvic-reconstruction.jpg";
import {
  Star,
  Phone,
  ArrowRight,
  ShieldCheck,
  Microscope,
  Activity,
  HeartPulse,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bilal Farhan, MD — Urologist in Houston, TX" },
      {
        name: "description",
        content:
          "Dr. Bilal Farhan is a board-certified urologist in Houston, TX specializing in female & male urology, voiding dysfunction, and pelvic reconstruction. Request a consultation today.",
      },
      {
        property: "og:title",
        content: "Bilal Farhan, MD — Urologist in Houston, TX",
      },
      {
        property: "og:description",
        content:
          "Board-certified urologist specializing in female & male urology, voiding dysfunction, and pelvic reconstruction in Houston, TX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Female Urology",
    description:
      "Specialized care for urinary incontinence, pelvic organ prolapse, overactive bladder, and pelvic floor disorders.",
    image: femaleUrologyImg,
    to: "/female-urology",
    icon: HeartPulse,
  },
  {
    title: "Male Urology",
    description:
      "Advanced treatment for BPH, urinary incontinence, erectile dysfunction, urethral stricture, and male prosthetic urology.",
    image: maleUrologyImg,
    to: "/male-urology",
    icon: ShieldCheck,
  },
  {
    title: "Voiding Dysfunction",
    description:
      "Expert diagnosis and management of difficult urination, urinary retention, neurogenic bladder, and bladder control issues.",
    image: voidingImg,
    to: "/voiding-dysfunction",
    icon: Activity,
  },
  {
    title: "Pelvic Reconstruction",
    description:
      "Complex reconstructive surgery including urethroplasty, fistula repair, prolapse surgery, and genitourinary reconstruction.",
    image: pelvicImg,
    to: "/pelvic-reconstruction",
    icon: Microscope,
  },
];

const metrics = [
  { value: 20, suffix: "+", label: "Years of Practice" },
  { value: 5000, suffix: "+", label: "Patients Treated" },
  { value: 2, suffix: "", label: "Advanced Fellowships" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

const technology = [
  {
    title: "Precision Diagnostics",
    body: "Advanced urodynamics and imaging map bladder function with millimeter accuracy before a single decision is made.",
  },
  {
    title: "Minimally Invasive Surgery",
    body: "Robotic and endoscopic techniques reduce downtime and preserve function with meticulous, tissue-sparing precision.",
  },
  {
    title: "Data-Guided Follow-Up",
    body: "Structured outcome tracking over time so treatment adapts to how your body actually responds.",
  },
];

const marqueeItems = [
  "Board-Certified Urologist",
  "Female Pelvic Medicine",
  "Reconstructive Surgery",
  "Urodynamics",
  "Neurogenic Bladder",
  "Male Prosthetics",
  "Urethroplasty",
  "Overactive Bladder",
];

function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero
        eyebrow="Urology & Pelvic Reconstruction in Houston, TX"
        title="Expert Urological Care for Women & Men"
        subtitle="Board-certified, technology-driven and deeply patient-focused urology serving the Houston community."
        image={heroBg}
        cta={{ label: "Request a Consult", to: "/contact" }}
        phone="(346) 414-3426"
        scrollHint
      />

      {/* Marquee band */}
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

      {/* Metrics */}
      <section className="relative">
        <AuroraBackground className="opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 90}>
                <div className="glass lift rounded-2xl p-8 text-center">
                  <p className="font-serif text-4xl text-gradient lg:text-5xl">
                    <StatCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
        <Reveal className="mb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
            What We Treat
          </p>
          <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive urologic care tailored to your unique needs, from routine
            conditions to complex reconstructive surgery.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 110} className="h-full">
              <Link
                to={service.to}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-xl glass-dark p-2.5 text-white">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-glow to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <AuroraBackground variant="dark" className="opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              Precision Medicine
            </p>
            <h2 className="mt-4 font-serif text-4xl text-gradient-light lg:text-5xl">
              Technology in Service of Outcomes
            </h2>
            <p className="mt-5 leading-relaxed text-background/75">
              Every plan is built on objective data — not guesswork — so care is targeted,
              efficient, and measurable.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {technology.map((t, i) => (
              <Reveal key={t.title} delay={i * 120}>
                <div className="group h-full rounded-2xl glass-dark p-8 transition-transform duration-500 hover:-translate-y-2">
                  <p className="font-serif text-5xl text-accent/70">0{i + 1}</p>
                  <h3 className="mt-5 font-serif text-2xl text-background">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/70">
                    {t.body}
                  </p>
                  <span className="mt-6 block h-px w-0 bg-gradient-to-r from-glow to-transparent transition-all duration-700 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Farhan */}
      <section className="relative overflow-hidden bg-sand">
        <AuroraBackground className="opacity-60" grid={false} />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-glow/25 to-accent/20 blur-2xl" />
              <img
                src={drFarhanImg}
                alt="Dr. Bilal Farhan"
                className="relative w-full rounded-2xl shadow-[var(--shadow-elevated)]"
                width={600}
                height={600}
              />
              <div className="absolute -bottom-6 -right-2 animate-float rounded-2xl glass px-6 py-4 shadow-lg lg:right-8">
                <p className="font-serif text-2xl text-foreground">Fellowship</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Trained at UC Irvine
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
                Your Surgeon
              </p>
              <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
                Meet Dr. Bilal Farhan
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Dr. Bilal Farhan is a board-certified urologist specializing in female and
                male urology, voiding dysfunction, and pelvic reconstruction. He is
                committed to providing evidence-based, patient-centered care and has
                advanced fellowship training in female urology and pelvic reconstruction.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The best thing about treating urinary incontinence is improving quality of
                life. Building long-term relationships with patients allows Dr. Farhan to
                provide ongoing support, guidance, and monitoring over time.
              </p>

              <div className="mt-10">
                <Link
                  to="/about"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="relative z-10">More About Dr. Farhan</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-y-0 -left-full w-1/2 bg-[var(--gradient-sheen)] opacity-30 transition-transform duration-700 group-hover:translate-x-[320%]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
        <Reveal className="mb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Testimonials</p>
          <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
            Patient Reviews
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Trusted care and lasting relationships with patients throughout Houston.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
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
          ].map((review, i) => (
            <Reveal key={i} delay={i * 120} className="h-full">
              <div className="relative h-full overflow-hidden rounded-2xl glass p-8 lift">
                <span className="absolute right-6 top-2 font-serif text-7xl text-accent/20">
                  &ldquo;
                </span>
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
                <p className="mt-5 text-sm font-medium text-foreground">{review.author}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-block rounded-full border border-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-500 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
          >
            Read More Reviews
          </Link>
        </Reveal>
      </section>

      {/* Insurance / CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <AuroraBackground variant="dark" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-serif text-4xl text-gradient-light lg:text-5xl">
                Insurance & Financing
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/85">
                We accept most major insurance plans and offer guidance on coverage and
                payment options. Our team is here to help make your care as accessible as
                possible.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/insurance"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-wider text-primary glow-ring transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="relative z-10">View Insurance Plans</span>
                  <span className="absolute inset-y-0 -left-full w-1/2 bg-[var(--gradient-sheen)] opacity-40 transition-transform duration-700 group-hover:translate-x-[320%]" />
                </Link>
                <a
                  href="tel:3464143426"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" />
                  (346) 414-3426
                </a>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "Aetna",
                "Blue Cross",
                "Cigna",
                "Humana",
                "Medicare",
                "United Healthcare",
              ].map((plan, i) => (
                <Reveal key={plan} delay={i * 80}>
                  <div className="rounded-xl glass-dark px-4 py-4 text-center text-sm font-medium text-white transition-transform duration-500 hover:-translate-y-1">
                    {plan}
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
