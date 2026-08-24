import { createFileRoute, Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/booking";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { FaqSection } from "@/components/FaqSection";
import galleryLaser from "@/assets/gallery-laser.jpg";
import galleryRobotic from "@/assets/gallery-robotic.jpg";
import galleryDiagnostics from "@/assets/gallery-diagnostics.jpg";
import galleryConsult from "@/assets/gallery-consult.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const description =
  "Advanced kidney stone surgery in Houston: ureteroscopy, laser lithotripsy, standard PCNL, mini-PCNL, and supine PCNL for routine, large, recurrent, and complex stones.";

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
    ],
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
        subtitle="Routine, recurrent, large, and complex kidney and ureteral stones — treated with the approach that fits your anatomy, not a single default technique."
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
                {[
                  "Ureteroscopy",
                  "Laser lithotripsy",
                  "Advanced flexible ureteroscopy",
                  "Standard PCNL",
                  "Mini-PCNL",
                  "Supine PCNL",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
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
            Bring your prior imaging and operative reports — they often change the plan.
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
