import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
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

function VoidingDysfunctionPage() {
  return (
    <main>
      <Hero
        eyebrow="Neuro-Urology & Bladder Control"
        title="Voiding Dysfunction"
        subtitle="Advanced care for patients with difficult, incomplete, or uncontrolled bladder emptying."
        image={voidingImg}
        cta={{ label: "Request a Consult", to: "/contact" }}
      />

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
    </main>
  );
}
