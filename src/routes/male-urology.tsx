import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import maleUrologyImg from "@/assets/male-urology.jpg";

export const Route = createFileRoute("/male-urology")({
  head: () => ({
    meta: [
      { title: "Male Urology — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Advanced male urology care in Houston, TX. Dr. Bilal Farhan specializes in BPH, urinary incontinence, erectile dysfunction, urethral stricture, and male prosthetic urology.",
      },
      { property: "og:title", content: "Male Urology — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Advanced male urology care in Houston, TX. Dr. Bilal Farhan specializes in BPH, urinary incontinence, erectile dysfunction, urethral stricture, and male prosthetic urology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaleUrologyPage,
});

function MaleUrologyPage() {
  return (
    <main>
      <Hero
        eyebrow="Expert Care for Men"
        title="Male Urology"
        subtitle="Comprehensive solutions for prostate, bladder, urinary, and reproductive health in men."
        image={maleUrologyImg}
        cta={{ label: "Request a Consult", to: "/contact" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Specialized Men’s Urological Health
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Bilal Farhan offers expert diagnosis and treatment for a wide range of male
              urologic conditions. With advanced fellowship training in functional and
              reconstructive urology, he provides both medical management and cutting-edge
              surgical options tailored to each patient’s needs.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From minimally invasive BPH treatments like HoLEP and GreenLight laser therapy
              to complex urethral reconstruction and male prosthetic urology, Dr. Farhan
              helps men regain function, confidence, and quality of life.
            </p>
          </div>
          <div className="rounded-sm bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-2xl">Conditions Treated</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Benign Prostatic Hyperplasia (BPH)",
                "Urinary incontinence",
                "Urethral stricture disease",
                "Erectile dysfunction",
                "Peyronie’s disease",
                "Male sling complications",
                "Post-prostatectomy incontinence",
                "Vasectomy / vasectomy reversal",
                "Kidney stones",
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
                title: "HoLEP",
                description:
                  "Holmium laser enucleation of the prostate for severe BPH with durable results.",
              },
              {
                title: "GreenLight Laser Therapy",
                description:
                  "Minimally invasive laser treatment to relieve urinary symptoms from BPH.",
              },
              {
                title: "Urethroplasty",
                description:
                  "Complex reconstructive surgery for urethral stricture disease.",
              },
              {
                title: "Artificial Urinary Sphincter (AUS)",
                description:
                  "Prosthetic device to treat moderate to severe male urinary incontinence.",
              },
              {
                title: "Male Sling Surgery",
                description:
                  "Minimally invasive option for selected cases of male stress incontinence.",
              },
              {
                title: "Kidney Stone Surgery",
                description:
                  "PCNL, mini-PCNL, and ureteroscopy for effective stone treatment.",
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
