import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { FaqSection } from "@/components/FaqSection";
import galleryLaser from "@/assets/stones-ureteroscopy.jpg";
import galleryRobotic from "@/assets/stones-pcnl.jpg";
import galleryDiagnostics from "@/assets/stones-diagnostics.jpg";
import galleryConsult from "@/assets/stones-prevention.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const description =
  "Advanced kidney stone surgery in Houston: ureteroscopy, laser lithotripsy, standard PCNL, mini-PCNL, and supine PCNL for large, recurrent, and complex stones, plus a plan to prevent the next stone.";

export const Route = createFileRoute("/kidney-stones")({
  head: () => ({
    meta: [
      { title: "Kidney Stones & Advanced Endourology — Bilal Farhan, MD" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Kidney Stones & Advanced Endourology — Bilal Farhan, MD",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/kidney-stones" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/kidney-stones" }],
  }),
  component: StonesPage,
});

const slides = [
  {
    title: "Ureteroscopy & Laser Lithotripsy",
    category: "Endoscopic Stone Surgery",
    description:
      "A small scope passed through the natural urinary tract allows the stone to be fragmented with a laser and removed, without any incision.",
    image: galleryLaser,
    facts: [
      "No incisions",
      "Advanced flexible ureteroscopy for upper-tract stones",
      "Usually outpatient",
    ],
  },
  {
    title: "Standard PCNL",
    category: "Percutaneous Stone Surgery",
    description:
      "For large or complex kidney stones, a small tract into the kidney allows high-volume stone clearance in a single procedure.",
    image: galleryRobotic,
    facts: [
      "Best clearance for large stone burden",
      "Used for staghorn and complex anatomy",
      "Short hospital stay",
    ],
  },
  {
    title: "Mini-PCNL & Supine PCNL",
    category: "Tailored Percutaneous Access",
    description:
      "Smaller tracts and supine positioning can reduce trauma and support combined endoscopic access in selected patients.",
    image: galleryDiagnostics,
    facts: [
      "Smaller tract options",
      "Supine access for selected anatomy",
      "Combined approaches when useful",
    ],
  },
  {
    title: "Prevention & Metabolic Review",
    category: "Reducing Recurrence",
    description:
      "Recurrent stone formers benefit from review of imaging, stone composition, fluid and dietary patterns, and medical history to lower the chance of the next stone.",
    image: galleryConsult,
    facts: [
      "Stone analysis reviewed",
      "Hydration and dietary guidance",
      "Follow-up imaging plan",
    ],
  },
];

const faqs = [
  {
    question: "How is the surgical approach chosen?",
    answer:
      "By stone size, location, composition, kidney anatomy, medical condition, previous treatment, and overall complexity. The objective is to choose the most appropriate approach for the individual patient rather than applying one technique to everyone.",
  },
  {
    question: "Do all stones need surgery?",
    answer:
      "No. Many small stones pass with hydration, medication, and observation. Treatment is recommended when the stone is unlikely to pass, causes obstruction or infection risk, or continues to affect daily life.",
  },
  {
    question: "I keep forming stones. Can that be addressed?",
    answer:
      "Yes. Recurrent stone disease deserves evaluation beyond the current stone, including review of prior imaging, stone analysis, and contributing factors, so the plan addresses prevention as well as removal.",
  },
];

function StonesPage() {
  return (
    <main>
      <Hero
        eyebrow="Advanced Endourology"
        title="Kidney Stone Disease"
        subtitle="Recurrent, large, and complex kidney and ureteral stones, treated with the approach that fits your anatomy, not a single default technique."
        image={heroBg}
        cta={{ label: "Schedule an Appointment", to: BOOKING_URL }}
        phone="346-414-3426"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Stones That Are Not Straightforward
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Stone disease ranges from a single small stone to large, recurrent, or
              staghorn stones in patients with complex anatomy or prior surgery. Dr. Farhan
              offers the full range of endoscopic and percutaneous techniques so the plan
              can be matched to the stone and the patient.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Success is measured not only by stone clearance, but by getting patients back
              to work, sleep, travel, and daily life with a plan to reduce recurrence.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl glass p-8">
              <h3 className="font-serif text-2xl text-foreground">Procedures Offered</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {(
                  [
                    { label: "Ureteroscopy", to: "/procedures/ureteroscopy" },
                    { label: "Laser lithotripsy", to: "/procedures/ureteroscopy" },
                    { label: "Advanced flexible ureteroscopy", to: "/procedures/ureteroscopy" },
                    { label: "Standard PCNL", to: "/procedures/pcnl" },
                    { label: "Mini-PCNL", to: "/procedures/pcnl" },
                    { label: "Supine PCNL", to: "/procedures/pcnl" },
                  ] as { label: string; to?: string }[]
                ).map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <Link
                      to={item.to as string}
                      className="group inline-flex items-center gap-1 font-medium text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {item.label}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prevention */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Prevention
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground lg:text-4xl">
              Lowering your chance of another stone
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Removing a stone treats today&apos;s problem. The next step is understanding why
              stones form for you, so the same cycle is less likely to repeat.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-lg border border-border bg-card p-7">
                <h3 className="font-serif text-xl text-foreground">Everyday habits</h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Drink enough water to keep your urine light in color, usually about two and a half to three liters a day.",
                    "Cut back on salt; salty food pushes more calcium into the urine.",
                    "Keep a normal amount of calcium from food. Cutting out calcium can actually raise stone risk.",
                    "Go easy on oxalate-rich foods such as spinach, nuts, and dark chocolate if your stones are the oxalate type.",
                    "Limit sodas and sugary drinks; water, and citrus drinks like lemonade, are kinder to the kidneys.",
                  ].map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-lg border border-border bg-card p-7">
                <h3 className="font-serif text-xl text-foreground">Finding the cause</h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Stone analysis: any stone or fragment you pass or we remove is sent to the lab to learn exactly what it is made of.",
                    "A 24-hour urine collection shows how much calcium, oxalate, uric acid, and citrate your kidneys pass in a day.",
                    "Simple blood tests check for contributing conditions.",
                    "Together, these results explain why your stones form and which changes will actually help you.",
                  ].map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="h-full rounded-lg border border-border bg-card p-7">
                <h3 className="font-serif text-xl text-foreground">Your prevention plan</h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "A plan tailored to your stone type, which may include diet changes, medication, or both.",
                    "Follow-up imaging at sensible intervals to confirm nothing new is forming.",
                    "Adjustments over time as your results change.",
                    "Prevention works: most patients who follow a plan form far fewer stones.",
                  ].map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProcedureGallery
        eyebrow="Treatment Options"
        heading="Choosing the Right Stone Procedure"
        slides={slides}
      />

      <FaqSection faqs={faqs} />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-6">
          <h2 className="font-serif text-3xl lg:text-4xl">Recurrent or complex stones?</h2>
          <p className="mt-4 text-primary-foreground/85">
            Bring your prior imaging and operative reports, they often change the plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Schedule an Appointment
            </a>
            <a
              href="tel:3464143426"
              className="rounded-full glass-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Call 346-414-3426
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
