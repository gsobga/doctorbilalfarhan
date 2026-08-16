import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FaqSection } from "@/components/FaqSection";
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

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <h2 className="text-center font-serif text-3xl text-foreground lg:text-4xl">
            Credentials at a Glance
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Board Certification",
                value: "Board-certified urologist",
                detail: "Practicing urology with a focus on functional and reconstructive care.",
              },
              {
                label: "Fellowship Training",
                value: "Two UC Irvine fellowships",
                detail:
                  "Functional urology, voiding dysfunction & pelvic reconstruction (2019) and male genitourinary reconstruction (2018).",
              },
              {
                label: "Academic Role",
                value: "Former Associate Professor, UTMB",
                detail:
                  "Founded and developed the HoLEP service program, expanding access to advanced BPH surgery.",
              },
              {
                label: "Languages",
                value: "English & Arabic",
                detail:
                  "Care delivered in the language patients and families are most comfortable using.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-sm bg-white p-6 shadow-sm lift">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-3 font-serif text-xl text-foreground">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-sm bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl">Where Dr. Farhan Practices</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                CLS Health Urology - Southeast Houston
                <br />
                10950 Resource Parkway, Suite A, Houston, TX 77089
                <br />
                Phone: (346) 414-3426 · Monday–Friday, 8:00 AM – 5:00 PM
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                New patients are welcome, and most major insurance plans are accepted,
                including Aetna, Blue Cross Blue Shield, Cigna, Humana, Medicare, Molina,
                United Healthcare, and Wellcare.
              </p>
            </div>
            <div className="rounded-sm bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl">Approach to Care</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Dr. Farhan treats conditions that shape everyday life — leakage, urgency,
                difficulty emptying, pain, and the anxiety that comes with them. Evaluation
                begins with objective testing so treatment is matched to the true cause, and
                conservative options are always discussed before surgery.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Because quality-of-life conditions require follow-up, he builds long-term
                relationships with patients, adjusting care as needs change over the years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        heading="Questions Patients Ask First"
        faqs={[
          {
            question: "What conditions does Dr. Farhan treat?",
            answer:
              "Male and female urinary incontinence, overactive bladder, voiding dysfunction and neurogenic bladder, BPH, urethral stricture, pelvic organ prolapse, genitourinary fistula, male prosthetic urology, and kidney stones.",
          },
          {
            question: "Do I need a referral?",
            answer:
              "A referral is not required for most plans, though some insurers ask for one. Call (346) 414-3426 and our team will confirm what your plan needs before your visit.",
          },
          {
            question: "What should I bring to my first appointment?",
            answer:
              "Bring your insurance card, a photo ID, a list of current medications, and any prior urology records, imaging, or operative reports. A short bladder diary is also helpful.",
          },
          {
            question: "Are second opinions available?",
            answer:
              "Yes. Dr. Farhan frequently evaluates patients after failed prior surgery, mesh complications, recurrent stricture, or persistent incontinence.",
          },
        ]}
      />

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
