import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import femaleUrologyImg from "@/assets/female-urology.jpg";

export const Route = createFileRoute("/female-urology")({
  head: () => ({
    meta: [
      { title: "Female Urology — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Expert female urology care in Houston, TX. Dr. Bilal Farhan treats urinary incontinence, pelvic organ prolapse, overactive bladder, and other pelvic health conditions.",
      },
      { property: "og:title", content: "Female Urology — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Expert female urology care in Houston, TX. Dr. Bilal Farhan treats urinary incontinence, pelvic organ prolapse, overactive bladder, and other pelvic health conditions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FemaleUrologyPage,
});

function FemaleUrologyPage() {
  return (
    <main>
      <Hero
        eyebrow="Specialized Care for Women"
        title="Female Urology"
        subtitle="Compassionate, evidence-based treatment for urinary and pelvic health conditions affecting women."
        image={femaleUrologyImg}
        cta={{ label: "Request a Consult", to: "/contact" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Restoring Comfort & Confidence
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Bilal Farhan provides specialized care for women experiencing urinary
              incontinence, pelvic organ prolapse, overactive bladder, recurrent urinary
              tract infections, and other pelvic floor disorders. His approach combines
              advanced minimally invasive techniques with personalized treatment plans
              designed around each patient’s goals and lifestyle.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With fellowship training in female urology and pelvic reconstruction, Dr.
              Farhan offers both surgical and non-surgical options, including bladder Botox,
              sacral neuromodulation (InterStim/Axonics), female sling procedures, and
              pelvic organ prolapse repair.
            </p>
          </div>
          <div className="rounded-sm bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-2xl">Conditions Treated</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Stress urinary incontinence",
                "Urge urinary incontinence",
                "Overactive bladder",
                "Pelvic organ prolapse",
                "Recurrent UTIs",
                "Interstitial cystitis / bladder pain",
                "Voiding dysfunction",
                "Urethral stricture disease",
                "Genitourinary fistula",
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
            Advanced Treatment Options
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Bladder Botox",
                description:
                  "Injections to calm an overactive bladder and reduce urgency and leakage.",
              },
              {
                title: "Sacral Neuromodulation",
                description:
                  "InterStim and Axonics therapies to help restore bladder control.",
              },
              {
                title: "Female Sling Surgery",
                description:
                  "Mesh and non-mesh sling options for stress urinary incontinence.",
              },
              {
                title: "Pelvic Organ Prolapse Repair",
                description:
                  "Reconstructive surgery to restore pelvic support and function.",
              },
              {
                title: "Urethroplasty & Fistula Repair",
                description:
                  "Specialized reconstructive procedures for complex urethral and fistula conditions.",
              },
              {
                title: "Robotic-Assisted Surgery",
                description:
                  "Minimally invasive techniques for faster recovery and less discomfort.",
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
