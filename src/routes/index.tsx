import { createFileRoute, Link } from "@tanstack/react-router";
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
import {
  Star,
  Phone,
  ArrowRight,
  ShieldCheck,
  Microscope,
  Activity,
  HeartPulse,
  Award,
  Stethoscope,
  Ear,
  Sparkles,
} from "lucide-react";

const description =
  "Bilal Farhan, MD, FACS — fellowship-trained functional and reconstructive urologist in Houston. Advanced expertise and individualized care for BPH and HoLEP, male and female incontinence, mesh complications, voiding dysfunction, urethral reconstruction, and complex kidney stones.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Bilal Farhan, MD, FACS — Advanced Urology in Houston, TX",
      },
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

const themes = [
  {
    title: "Individualized Treatment",
    body: "The treatment should fit the patient — not the other way around. Plans are built around your symptoms, anatomy, history, and goals.",
    icon: Sparkles,
  },
  {
    title: "Quality of Life",
    body: "Success is measured in sleep, work, travel, exercise, intimacy, confidence, and independence — not only in test results.",
    icon: HeartPulse,
  },
  {
    title: "Advanced Expertise",
    body: "Fellowship training, academic leadership, Centers of Excellence recognition, and complex reconstructive and revision surgery.",
    icon: Award,
  },
  {
    title: "Compassionate Care",
    body: "Listen first, understand each patient's background and priorities, explain clearly, and decide together. English and Arabic.",
    icon: Ear,
  },
];

const services = [
  {
    title: "BPH & HoLEP",
    description:
      "HoLEP, GreenLight laser, and other minimally invasive treatments for enlarged prostate, weak stream, and urinary retention.",
    image: galleryLaser,
    to: "/bph-holep",
    icon: Microscope,
  },
  {
    title: "Male Urology & Continence",
    description:
      "Artificial urinary sphincter, male sling, post-prostatectomy incontinence, and complex or revision continence reconstruction.",
    image: maleUrologyImg,
    to: "/male-urology",
    icon: ShieldCheck,
  },
  {
    title: "Female Urology & Mesh",
    description:
      "Mesh and non-mesh slings, urethral bulking, mesh complication management, revision surgery, and complex female continence care.",
    image: femaleUrologyImg,
    to: "/female-urology",
    icon: HeartPulse,
  },
  {
    title: "Voiding Dysfunction & OAB",
    description:
      "Urgency, frequency, refractory overactive bladder, neurogenic bladder, retention, Botox, sacral neuromodulation, and urodynamics.",
    image: voidingImg,
    to: "/voiding-dysfunction",
    icon: Activity,
  },
  {
    title: "Urethral & Pelvic Reconstruction",
    description:
      "Urethroplasty, buccal graft reconstruction, fistula repair, bladder diverticulectomy, prolapse repair, and robotic reconstruction.",
    image: pelvicImg,
    to: "/pelvic-reconstruction",
    icon: Stethoscope,
  },
  {
    title: "Kidney Stones",
    description:
      "Ureteroscopy and laser lithotripsy, standard PCNL, mini-PCNL, and supine PCNL for routine, recurrent, and complex stone disease.",
    image: galleryDiagnostics,
    to: "/kidney-stones",
    icon: Sparkles,
  },
];

const metrics = [
  { value: 250, suffix: "+", label: "HoLEP Procedures Performed" },
  { value: 4, suffix: "", label: "Centers of Excellence" },
  { value: 1, suffix: "", label: "HoLEP Program Established at UTMB" },
  { value: 2, suffix: "", label: "Languages: English & Arabic" },
];

const centersOfExcellence = [
  "HoLEP Center of Excellence",
  "GreenLight Laser Center of Excellence",
  "Artificial Urinary Sphincter (AUS) Center of Excellence",
  "Female Sling / Continence Surgery Center of Excellence",
];

const spectrum = [
  {
    title: "Understand the problem",
    body: "Symptoms, how they affect daily life, previous treatment, testing, priorities, and goals.",
  },
  {
    title: "Review every option",
    body: "Observation, lifestyle change, medication, and other non-surgical therapies come first when appropriate.",
  },
  {
    title: "Escalate only when it helps",
    body: "Minimally invasive procedures or advanced reconstructive surgery when they are the right fit — not by default.",
  },
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

      {/* Scheduling strip */}
      <section className="bg-sand">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 text-center lg:flex-row lg:px-6 lg:text-left">
          <div>
            <p className="font-serif text-xl text-foreground">
              In-person and telehealth appointments are available.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              10950 Resource Pkwy, Houston, TX 77089 • Need help scheduling? Call
              346-414-3426
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
            >
              Schedule an Appointment
            </Link>
            <a
              href="tel:3464143426"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-transform duration-500 hover:-translate-y-1"
            >
              <Phone className="h-4 w-4" />
              346-414-3426
            </a>
          </div>
        </div>
      </section>

      {/* Four themes */}
      <section className="relative">
        <AuroraBackground className="opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              How I Practice
            </p>
            <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
              The Treatment Should Fit the Patient
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              No two patients experience a urologic condition in exactly the same way. Care
              begins with listening — and ends with a plan built around you.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((t, i) => (
              <Reveal key={t.title} delay={i * 90} className="h-full">
                <div className="glass lift h-full rounded-2xl p-8">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <t.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-foreground">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 lg:px-6">
        <Reveal className="mb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
            Clinical Programs
          </p>
          <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
            Care We Provide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Functional, reconstructive, and minimally invasive urology for men and women —
            from routine concerns to complex and revision cases.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <Reveal delay={120} className="mt-10 text-center">
          <p className="mx-auto max-w-3xl rounded-2xl glass p-6 text-sm italic leading-relaxed text-muted-foreground">
            A diagnosis does not automatically mean surgery. Care spans conservative and
            non-surgical options, minimally invasive procedures, and complex reconstruction —
            individualized to symptoms, anatomy, medical history, previous treatment,
            lifestyle, priorities, and goals.
          </p>
        </Reveal>
      </section>

      {/* Metrics + Centers of Excellence */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <AuroraBackground variant="dark" className="opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              Professional Recognition
            </p>
            <h2 className="mt-4 font-serif text-4xl text-gradient-light lg:text-5xl">
              Centers of Excellence
            </h2>
            <p className="mt-5 leading-relaxed text-background/75">
              These recognitions support — they do not replace — the central goal: choosing
              the right treatment for the individual patient and improving function and
              quality of life.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {centersOfExcellence.map((c, i) => (
              <Reveal key={c} delay={i * 90}>
                <div className="flex items-center gap-4 rounded-2xl glass-dark p-6">
                  <Award className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm text-background/85">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 90}>
                <div className="rounded-2xl glass-dark p-8 text-center">
                  <p className="font-serif text-4xl text-accent lg:text-5xl">
                    <StatCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-background/70">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-sand">
        <AuroraBackground className="opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={drFarhanImg}
                  alt="Dr. Bilal Farhan, fellowship-trained functional and reconstructive urologist in Houston"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  width={600}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-4 max-w-[240px] rounded-2xl glass p-5 shadow-lg lg:-right-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
                    Fellowship Training
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    Functional & reconstructive urology, University of California, Irvine
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
                Philosophy of Care
              </p>
              <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
                Listen First. Then Individualize.
              </h2>
              <blockquote className="mt-6 space-y-4 border-l-2 border-accent pl-5 text-muted-foreground">
                <p className="leading-relaxed">
                  &ldquo;Every patient is different, even when the diagnosis is the same. My
                  first priority is to listen — to understand the symptoms, how they affect
                  daily life, what treatments have already been tried, and what matters most
                  to that individual.&rdquo;
                </p>
                <p className="leading-relaxed">
                  &ldquo;From there, we discuss the available options together. The goal is
                  not to choose the most aggressive treatment. It is to choose the right
                  treatment for that patient.&rdquo;
                </p>
                <p className="leading-relaxed">
                  &ldquo;Ultimately, successful urologic care is not simply about treating a
                  diagnosis. It is about restoring function, confidence, independence, and
                  quality of life.&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {spectrum.map((s) => (
                  <div key={s.title} className="rounded-xl bg-card p-5 shadow-sm">
                    <h3 className="font-serif text-base text-foreground">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent"
              >
                Meet Dr. Farhan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Second opinions */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <AuroraBackground variant="dark" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center lg:px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              Complex & Revision Care
            </p>
            <h2 className="mt-4 font-serif text-4xl text-gradient-light lg:text-5xl">
              Complex Problems Deserve a Thoughtful Second Look
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-primary-foreground/85">
              Recurrent urethral stricture, failed continence procedures, mesh-related
              complications, persistent retention, complex BPH, refractory overactive
              bladder, and recurrent stones — second opinions are welcome.
            </p>
            <Link
              to="/second-opinions"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-transform duration-500 hover:-translate-y-1"
            >
              Second Opinions & Revision Surgery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Quality of life */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
            Why It Matters
          </p>
          <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
            Treatment Should Return You to Your Life
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Leakage, urgency, retention, obstruction, recurrent stones, and pelvic floor
            disorders affect far more than a test result. The goal of treatment is to help
            patients return to the activities and quality of life that matter to them.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Daily activities",
            "Sleep",
            "Exercise",
            "Work",
            "Travel",
            "Intimacy",
            "Confidence",
            "Independence",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <span className="rounded-full glass px-5 py-2.5 text-sm text-foreground">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
          <Reveal className="mb-14 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              Patient Experience
            </p>
            <h2 className="mt-4 font-serif text-4xl text-gradient lg:text-5xl">
              In Patients&apos; Words
            </h2>
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
                  <p className="mt-5 text-sm font-medium text-foreground">
                    {review.author}
                  </p>
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
        </div>
      </section>

      {/* Areas + CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <AuroraBackground variant="dark" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-serif text-4xl text-gradient-light lg:text-5xl">
                Caring for the Houston Area
              </h2>
              <p className="mt-5 max-w-xl text-primary-foreground/85">
                Patients travel from across Southeast Houston and the Bay Area for advanced
                BPH, continence, reconstructive, and complex stone care. Hospital
                affiliations include Memorial Hermann Southeast, HCA Houston Healthcare
                Pearland, and HCA Houston Healthcare Clear Lake.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-transform duration-500 hover:-translate-y-1"
                >
                  Schedule an Appointment
                </Link>
                <a
                  href="tel:3464143426"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-500 hover:-translate-y-1"
                >
                  <Phone className="h-4 w-4" />
                  346-414-3426
                </a>
              </div>
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
