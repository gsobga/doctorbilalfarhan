import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { FaqSection } from "@/components/FaqSection";
import galleryRobotic from "@/assets/gallery-robotic.jpg";
import galleryDiagnostics from "@/assets/gallery-diagnostics.jpg";
import galleryConsult from "@/assets/gallery-consult.jpg";
import galleryLaser from "@/assets/gallery-laser.jpg";
import voidingImg from "@/assets/voiding-dysfunction.jpg";

export const Route = createFileRoute("/voiding-dysfunction")({
  head: () => ({
    meta: [
      { title: "Voiding Dysfunction — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Expert diagnosis and treatment of voiding dysfunction and neuro-urology in Houston, TX. Dr. Bilal Farhan helps patients with difficult urination, urinary retention, and neurologic bladder conditions.",
      },
      { property: "og:title", content: "Voiding Dysfunction — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Expert diagnosis and treatment of voiding dysfunction and neuro-urology in Houston, TX. Dr. Bilal Farhan helps patients with difficult urination, urinary retention, and neurologic bladder conditions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VoidingDysfunctionPage,
});


const slides = [
  {
    title: "Urodynamic Testing",
    category: "Diagnostics",
    description: "Pressure-flow studies measure how the bladder stores and empties, distinguishing obstruction from underactivity and guiding treatment precisely.",
    image: galleryDiagnostics,
    facts: ["Objective pressure and flow data", "Clarifies neurogenic vs obstructive causes", "Performed in office in under an hour"],
  },
  {
    title: "Cystoscopy",
    category: "Diagnostics",
    description: "A slim camera examines the urethra and bladder lining for stricture, stones, inflammation, or anatomic causes of difficult urination.",
    image: galleryConsult,
    facts: ["Local anesthetic, office based", "Immediate visual diagnosis", "Guides same-day treatment planning"],
  },
  {
    title: "Neuromodulation & Bladder Botox",
    category: "Therapy",
    description: "Sacral neuromodulation and bladder Botox retrain or relax an overactive or poorly coordinated bladder, often reducing or eliminating catheter dependence.",
    image: galleryLaser,
    facts: ["Test phase before permanent implant", "Botox repeated every 6-9 months", "Also helps refractory urgency and retention"],
  },
  {
    title: "Reconstruction & Catheter-Free Solutions",
    category: "Surgery",
    description: "When outlet obstruction, stricture, or neurogenic disease limits emptying, reconstructive surgery and diversion options restore safe, independent voiding.",
    image: galleryRobotic,
    facts: ["Urethroplasty for stricture disease", "Options to reduce catheter dependence", "Long-term monitoring of kidney safety"],
  },
];

const faqs = [
  { question: "What causes voiding dysfunction?", answer: "Common causes include neurologic disease such as multiple sclerosis, Parkinson's, or spinal cord injury, pelvic surgery, prostate obstruction, urethral stricture, medications, and pelvic floor dyssynergia." },
  { question: "Do I have to keep using a catheter?", answer: "Not necessarily. Many patients reduce or stop catheterization after neuromodulation, Botox, or surgery to relieve obstruction. Dr. Farhan's goal is the safest catheter-free option available to you." },
  { question: "Is urodynamic testing uncomfortable?", answer: "It involves small catheters and takes about 30-45 minutes. Most patients describe it as mildly uncomfortable rather than painful, and it delivers information no other test provides." },
  { question: "Do you coordinate with neurologists?", answer: "Yes. Neuro-urologic care is collaborative. Dr. Farhan works alongside neurology and rehabilitation teams to protect kidney function while improving daily quality of life." },
];

function VoidingDysfunctionPage() {
  return (
    <main>
      <Hero
        eyebrow="Overactive Bladder & Voiding Dysfunction"
        title="Voiding Dysfunction"
        subtitle="Urgency, frequency, refractory overactive bladder, neurogenic bladder, urinary retention, and complex bladder dysfunction."
        image={voidingImg}
        cta={{ label: "Schedule an Appointment", to: "/contact" }}
        phone="346-414-3426"
      />

      <section className="mx-auto max-w-7xl px-4 pt-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              A Stepwise, Individualized Approach
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Treatment may range from behavioral and medical therapy to advanced therapies for refractory symptoms. Objective testing clarifies whether obstruction, bladder dysfunction, or both are responsible before advanced treatment is recommended.
            </p>
            <p className="mt-4 rounded-xl glass p-5 text-sm italic leading-relaxed text-muted-foreground">
              The emphasis is on a stepwise and individualized approach — starting with the least invasive option that can realistically achieve your goals.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-sm">
            <h3 className="font-serif text-2xl">Procedures & Treatments</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                  "Behavioral and medical therapy",
                  "Bladder Botox",
                  "Sacral neuromodulation",
                  "Percutaneous nerve evaluation / neuromodulation trial",
                  "Urodynamic testing",
                  "Treatment of complex voiding dysfunction and urinary retention",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              A diagnosis does not automatically mean surgery. Conservative and non-surgical
              options are reviewed first whenever they can achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Understanding Voiding Dysfunction
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Voiding dysfunction refers to problems with storing or releasing urine. These
              conditions can result from neurologic disease, pelvic nerve injury,
              medication side effects, prior surgery, or unknown causes. Dr. Bilal Farhan
              specializes in diagnosing the underlying cause and offering targeted
              treatments to restore bladder function.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              His fellowship training in functional urology and voiding dysfunction allows
              him to manage complex cases with urodynamic testing, neuromodulation, Botox,
              catheter-free solutions, and reconstructive surgery when needed.
            </p>
          </div>
          <div className="rounded-sm bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-2xl">Common Symptoms</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Weak or interrupted urine stream",
                "Difficulty starting urination",
                "Feeling of incomplete emptying",
                "Urinary retention",
                "Frequent or urgent urination",
                "Urinary leakage",
                "Pain with urination",
                "Neurogenic bladder",
                "Post-void dribbling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <h2 className="text-center font-serif text-3xl text-foreground lg:text-4xl">
            Diagnostic & Treatment Options
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Urodynamic Testing",
                description:
                  "Comprehensive bladder function studies to pinpoint the cause of symptoms.",
              },
              {
                title: "Cystoscopy",
                description:
                  "Minimally invasive bladder and urethra examination for accurate diagnosis.",
              },
              {
                title: "Sacral Neuromodulation",
                description:
                  "InterStim and Axonics therapies to restore bladder and bowel control.",
              },
              {
                title: "Bladder Botox",
                description:
                  "Targeted injections to relax an overactive or spastic bladder.",
              },
              {
                title: "Catheter-Free Solutions",
                description:
                  "Options to reduce dependence on catheters and improve independence.",
              },
              {
                title: "Reconstructive Surgery",
                description:
                  "Surgical options for complex urinary diversion or outlet obstruction.",
              },
            ].map((treatment) => (
              <div
                key={treatment.title}
                className="rounded-sm bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-serif text-xl text-foreground">{treatment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcedureGallery
        heading="Diagnostics & Therapies in Motion"
        intro="Voiding dysfunction is diagnosed with objective testing, not guesswork. Here is the pathway from measurement to targeted therapy."
        slides={slides}
      />

      <FaqSection faqs={faqs} />
    </main>
  );
}
