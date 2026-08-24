import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { FaqSection } from "@/components/FaqSection";
import galleryLaser from "@/assets/gallery-laser.jpg";
import galleryRobotic from "@/assets/gallery-robotic.jpg";
import galleryDiagnostics from "@/assets/gallery-diagnostics.jpg";
import galleryConsult from "@/assets/gallery-consult.jpg";
import maleUrologyImg from "@/assets/male-urology.jpg";

const description =
  "Advanced BPH care in Houston with HoLEP and GreenLight laser prostate surgery. Dr. Bilal Farhan has performed 250+ HoLEP procedures, including large and complex prostates and urinary retention.";

export const Route = createFileRoute("/bph-holep")({
  head: () => ({
    meta: [
      { title: "BPH & HoLEP Prostate Surgery in Houston — Bilal Farhan, MD" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "BPH & HoLEP Prostate Surgery in Houston — Bilal Farhan, MD",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BphPage,
});

const slides = [
  {
    title: "HoLEP",
    category: "Holmium Laser Enucleation of the Prostate",
    description:
      "A size-independent, tissue-removing laser treatment for the enlarged prostate. HoLEP is well suited to large glands, patients in urinary retention, and men who want a durable result.",
    image: galleryLaser,
    facts: [
      "250+ HoLEP procedures performed",
      "Effective for very large and complex prostates",
      "Tissue is sent for pathology review",
    ],
  },
  {
    title: "GreenLight Laser",
    category: "Photoselective Vaporization",
    description:
      "Laser vaporization of obstructing prostate tissue, often chosen for smaller glands or men who must remain on blood thinners.",
    image: galleryRobotic,
    facts: [
      "Center of Excellence recognition",
      "Often suitable for anticoagulated patients",
      "Typically same-day or overnight stay",
    ],
  },
  {
    title: "Evaluation & Urodynamics",
    category: "Diagnostics First",
    description:
      "Symptom scoring, uroflow, post-void residual, cystoscopy, imaging, and urodynamic testing when needed clarify whether obstruction, bladder dysfunction, or both are driving symptoms.",
    image: galleryDiagnostics,
    facts: [
      "Distinguishes obstruction from bladder dysfunction",
      "Guides procedure selection",
      "Avoids unnecessary surgery",
    ],
  },
  {
    title: "Non-Surgical & Minimally Invasive Options",
    category: "Stepwise Care",
    description:
      "Observation, fluid and medication adjustments, medical therapy, and other appropriate endoscopic or minimally invasive treatments are discussed before any operation is recommended.",
    image: galleryConsult,
    facts: [
      "A diagnosis does not automatically mean surgery",
      "Options reviewed together",
      "Plan matched to anatomy and goals",
    ],
  },
];

const faqs = [
  {
    question: "Is HoLEP right for every enlarged prostate?",
    answer:
      "No. HoLEP is one excellent option among several. The right treatment depends on prostate anatomy, symptom severity, bladder function, medical history, previous treatment, goals, and patient preference. Some men do best with medication, some with GreenLight or another endoscopic option, and some with HoLEP.",
  },
  {
    question: "My prostate is very large — am I still a candidate?",
    answer:
      "Usually yes. HoLEP is size-independent, which is why it is often recommended for very large glands that previously required open surgery. Dr. Farhan established the HoLEP program at UTMB and routinely treats large and complex prostates.",
  },
  {
    question: "I have a catheter because of urinary retention. Can that be reversed?",
    answer:
      "Many men in retention can be evaluated for catheter-free voiding. Assessment includes whether the bladder muscle still contracts effectively, which is why urodynamic testing is sometimes recommended before surgery.",
  },
  {
    question: "What if medication has already failed?",
    answer:
      "Failed medical therapy is one of the most common reasons for referral. It does not mean options are exhausted — it means the next step should be chosen based on objective testing rather than trial and error.",
  },
];

const excellence = [
  "HoLEP Center of Excellence",
  "GreenLight Laser Center of Excellence",
  "Established the HoLEP service at UTMB",
  "250+ HoLEP procedures performed",
];

function BphPage() {
  return (
    <main>
      <Hero
        eyebrow="Priority Program • Advanced BPH"
        title="BPH & HoLEP"
        subtitle="Advanced BPH treatment individualized to the patient — not simply the size of the prostate."
        image={maleUrologyImg}
        cta={{ label: "Schedule an Appointment", to: "/contact" }}
        phone="346-414-3426"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Enlarged Prostate & Voiding Problems
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Benign prostatic hyperplasia can cause weak stream, straining, frequency,
              night-time urination, incomplete emptying, and eventually urinary retention.
              These symptoms affect sleep, work, travel, exercise, and confidence — and the
              goal of treatment is to restore both function and everyday quality of life.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Care begins with understanding your symptoms, what has already been tried, and
              what matters most to you. From there, treatment may range from observation and
              lifestyle changes to medication, minimally invasive endoscopic treatment, or
              laser enucleation.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl glass p-8">
              <h3 className="font-serif text-2xl text-foreground">
                Experience & Recognition
              </h3>
              <ul className="mt-6 space-y-3">
                {excellence.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-muted-foreground">
                The goal is not to promote one procedure for every patient. Treatment is
                selected according to prostate anatomy, symptom severity, urinary function,
                medical history, goals, and patient preference.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ProcedureGallery
        eyebrow="Treatment Options"
        heading="From Medication to Laser Enucleation"
        slides={slides}
      />

      <FaqSection faqs={faqs} />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-6">
          <h2 className="font-serif text-3xl lg:text-4xl">
            Complex prostate? Get a considered opinion.
          </h2>
          <p className="mt-4 text-primary-foreground/85">
            Large glands, urinary retention, prior prostate procedures, and failed
            medication are all welcome reasons for consultation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Schedule an Appointment
            </Link>
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
