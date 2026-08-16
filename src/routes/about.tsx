import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import drFarhanImg from "@/assets/dr-farhan.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Bilal Farhan — Urologist in Houston, TX" },
      {
        name: "description",
        content:
          "Meet Dr. Bilal Farhan, a board-certified urologist in Houston, TX specializing in female & male urology, voiding dysfunction, and pelvic reconstruction.",
      },
      {
        property: "og:title",
        content: "About Dr. Bilal Farhan — Urologist in Houston, TX",
      },
      {
        property: "og:description",
        content:
          "Meet Dr. Bilal Farhan, a board-certified urologist in Houston, TX specializing in female & male urology, voiding dysfunction, and pelvic reconstruction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="Meet Your Urologist"
        title="Dr. Bilal Farhan"
        subtitle="Board-certified urologist with advanced fellowship training in functional and reconstructive urology."
        image={heroBg}
        cta={{ label: "Request a Consult", to: "/contact" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative mx-auto max-w-md lg:max-w-full">
            <img
              src={drFarhanImg}
              alt="Dr. Bilal Farhan"
              className="w-full rounded-sm shadow-lg"
              width={600}
              height={600}
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-primary p-6 text-primary-foreground shadow-xl lg:block">
              <p className="font-serif text-4xl">20+</p>
              <p className="mt-1 text-sm uppercase tracking-wider">Years of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Dedicated to Restoring Quality of Life
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Bilal Farhan is a board-certified urologist specializing in female and
              male urology, voiding dysfunction, and pelvic reconstruction. He is
              committed to providing evidence-based, patient-centered care and has advanced
              fellowship training in female urology and pelvic reconstruction.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The best thing about treating urinary incontinence is improving quality of
              life. Treating quality-of-life conditions often involves ongoing management
              and follow-up, which allows Dr. Farhan to develop long-term relationships with
              patients, providing support, guidance, and monitoring over time.
            </p>

            <blockquote className="mt-8 border-l-4 border-accent bg-sand p-6 italic text-foreground">
              “I want every patient to feel completely confident in their treatment
              decision and to take the time they need to feel fully comfortable with their
              care.”
            </blockquote>

            <div className="mt-10">
              <h3 className="mb-4 font-serif text-2xl">Education & Training</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Fellowship in Functional Urology, Voiding Dysfunction & Pelvic
                  Reconstruction — University of California, Irvine, 2019
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Fellowship in Male Genitourinary Reconstruction — University of
                  California, Irvine, 2018
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Urology Residency — Jordan University of Science and Technology
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Research Fellowship in Urology — University of California, Irvine
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 font-serif text-2xl">Clinical Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Male & Female Urinary Incontinence",
                  "Voiding Dysfunction",
                  "Pelvic Organ Prolapse",
                  "BPH",
                  "Urethral Stricture",
                  "Male Prosthetic Urology",
                  "Robotic Surgery",
                  "Kidney Stones",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-6">
          <h2 className="font-serif text-3xl lg:text-4xl">Serving the Houston Community</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Dr. Farhan previously served as Associate Professor of Urology at the University
            of Texas Medical Branch (UTMB), where he established and developed the HoLEP
            service program, expanding access to advanced minimally invasive surgical
            treatment for BPH.
          </p>
        </div>
      </section>
    </main>
  );
}
