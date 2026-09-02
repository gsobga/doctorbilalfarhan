import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  HeartPulse,
  PlayCircle,
  Stethoscope,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import { BOOKING_URL } from "@/lib/booking";
import { procedures } from "@/lib/procedures";
import heroBg from "@/assets/hero-bg.jpg";
import maleUrologyImg from "@/assets/male-urology.jpg";
import femaleUrologyImg from "@/assets/female-urology.jpg";
import voidingImg from "@/assets/voiding-dysfunction.jpg";
import pelvicImg from "@/assets/pelvic-reconstruction.jpg";
import galleryLaser from "@/assets/gallery-laser.jpg";
import galleryDiagnostics from "@/assets/gallery-diagnostics.jpg";

const description =
  "Urology patient education organized by condition and procedure: BPH and HoLEP, overactive bladder, urinary incontinence, urethral stricture, pelvic organ prolapse, and kidney stones, plus procedure guides, preparation instructions, and educational videos.";

export const Route = createFileRoute("/patient-education")({
  head: () => ({
    meta: [
      { title: "Patient Education — Conditions & Procedures | Bilal Farhan, MD" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Patient Education — Conditions & Procedures | Bilal Farhan, MD",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/patient-education" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/patient-education" }],
  }),
  component: PatientEducationPage,
});

const pillars: {
  icon: typeof BookOpen;
  title: string;
  body: string;
  to: "/patient-education" | "/procedures" | "/preparing-for-your-procedure" | "/videos";
  hash?: string;
}[] = [
  {
    icon: BookOpen,
    title: "Understand Your Condition",
    body: "Plain-language explanations of the conditions treated in this practice.",
    to: "/patient-education",
    hash: "conditions",
  },
  {
    icon: Stethoscope,
    title: "Explore Treatment Options",
    body: "Balanced guides to every major procedure, including the alternatives.",
    to: "/procedures",
  },
  {
    icon: ClipboardList,
    title: "Prepare for Your Procedure",
    body: "Medications, anesthesia, what to bring, and how to get ready.",
    to: "/preparing-for-your-procedure",
  },
  {
    icon: HeartPulse,
    title: "After Your Procedure",
    body: "Catheter care, pain control, activity, and when to call the office.",
    to: "/preparing-for-your-procedure",
  },
  {
    icon: PlayCircle,
    title: "Educational Videos",
    body: "Short videos from Dr. Farhan explaining conditions and procedures.",
    to: "/videos",
  },
];

const conditions: {
  title: string;
  body: string;
  image: string;
  to:
    | "/bph-holep"
    | "/male-urology"
    | "/female-urology"
    | "/voiding-dysfunction"
    | "/pelvic-reconstruction"
    | "/kidney-stones";
}[] = [
  {
    title: "Enlarged Prostate / BPH",
    body: "Difficulty urinating, weak stream, incomplete emptying, and urinary retention.",
    image: galleryLaser,
    to: "/bph-holep",
  },
  {
    title: "Overactive Bladder",
    body: "Urgency, frequency, nighttime urination, and urgency urinary incontinence.",
    image: voidingImg,
    to: "/voiding-dysfunction",
  },
  {
    title: "Urinary Incontinence",
    body: "Male and female urinary leakage, including stress and urgency incontinence.",
    image: maleUrologyImg,
    to: "/male-urology",
  },
  {
    title: "Urethral Stricture",
    body: "Evaluation and treatment of urethral narrowing and recurrent strictures.",
    image: pelvicImg,
    to: "/pelvic-reconstruction",
  },
  {
    title: "Pelvic Organ Prolapse",
    body: "Evaluation and individualized nonsurgical and surgical treatment.",
    image: femaleUrologyImg,
    to: "/female-urology",
  },
  {
    title: "Kidney Stones",
    body: "Stone treatment, complex stone surgery, and long-term prevention.",
    image: galleryDiagnostics,
    to: "/kidney-stones",
  },
];

const resources = [
  {
    title: "New patient forms",
    body: "Registration, history, and consent forms are completed through the CLS Health patient portal before your visit.",
    href: "https://cls.health/patient-resources",
  },
  {
    title: "Billing & insurance",
    body: "Coverage, estimates, and payment options, including protections against surprise billing.",
    href: "https://cls.health/patient-resources",
  },
  {
    title: "Privacy practices",
    body: "How your health information is used and protected under HIPAA.",
    href: "https://cls.health/patient-resources",
  },
];

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Treatment is chosen after evaluation, testing where appropriate, and a conversation about your goals. The philosophy in this practice is simple: the treatment should fit the patient, not the other way around.",
  },
  {
    question: "Do I have to have surgery?",
    answer:
      "No. Whenever appropriate, treatment begins conservatively with behavioral changes, therapy, or medication and progresses to procedures only when needed or preferred.",
  },
  {
    question: "Can I get a second opinion here?",
    answer:
      "Yes. Second opinions are a routine part of this practice, particularly for complex, revision, or previously treated problems.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Your photo ID, insurance card, a complete medication list, prior operative reports and imaging if available, and a list of your questions.",
  },
];

function PatientEducationPage() {
  return (
    <main>
      <Hero
        eyebrow="Patient Education"
        title="Understand Your Condition. Explore Your Options."
        subtitle="Education organized by condition and procedure, so you can prepare for your visit, understand your choices, and know what to expect afterward."
        image={heroBg}
        align="left"
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
      />

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map(({ icon: Icon, title, body, to, hash }, i) => (
            <Reveal key={title} delay={i * 60}>
              <Link
                to={to}
                {...(hash ? { hash } : {})}
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h2 className="mt-4 font-serif text-lg leading-snug text-primary">{title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <ArrowRight className="mt-4 h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="scroll-mt-32 bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Conditions
            </p>
            <h2 className="mt-4 font-serif text-3xl text-primary lg:text-4xl">
              Start with what you are experiencing
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <Link
                  to={c.to}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <img
                    src={c.image}
                    alt=""
                    aria-hidden="true"
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl text-primary">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {c.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            Procedures
          </p>
          <h2 className="mt-4 font-serif text-3xl text-primary lg:text-4xl">
            Then understand the treatment options
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Every guide follows the same format: what the procedure is, who is a candidate, how it is
            performed, benefits, alternatives, risks, preparation, recovery, and frequently asked
            questions.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p, i) => (
            <Reveal key={p.slug} delay={i * 40}>
              <Link
                to="/procedures/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center justify-between gap-3 rounded-md border border-border bg-card px-5 py-4 text-sm font-medium text-primary transition-colors hover:border-accent/50"
              >
                {p.shortName}
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            to="/procedures"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Browse the full procedure library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Practice resources */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <h2 className="font-serif text-3xl text-primary lg:text-4xl">Forms &amp; practice resources</h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Administrative resources are managed through CLS Health.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-serif text-lg text-primary">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  <span className="mt-4 text-sm font-semibold text-accent">Open resource</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              This information is educational and does not replace medical advice. Do not send
              personal health information by email. For urgent symptoms, call the office or seek
              emergency care.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection heading="Patient Education FAQs" faqs={faqs} />
    </main>
  );
}
