import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { Hero } from "@/components/Hero";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { FaqSection } from "@/components/FaqSection";
import femaleSlingImage from "@/assets/bilal-female-sling.webp.asset.json";
import neuromodulationImage from "@/assets/bilal-sacral-neuromodulation.webp.asset.json";
import bladderBotoxImage from "@/assets/bilal-bladder-botox.webp.asset.json";
import galleryLaser from "@/assets/female-prolapse.jpg";
import femaleUrologyImg from "@/assets/female-urology.jpg";

export const Route = createFileRoute("/female-urology")({
  head: () => ({
    meta: [
      { title: "Women's Health — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Expert women's urology care in Houston, TX. Dr. Bilal Farhan treats urinary incontinence, pelvic organ prolapse, overactive bladder, and other pelvic health conditions.",
      },
      { property: "og:title", content: "Women's Health — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Expert female urology care in Houston, TX. Dr. Bilal Farhan treats urinary incontinence, pelvic organ prolapse, overactive bladder, and other pelvic health conditions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/female-urology" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/female-urology" }],
  }),
  component: FemaleUrologyPage,
});


const slides = [
  {
    title: "Bladder Botox",
    category: "In-Office Therapy",
    description: "OnabotulinumtoxinA injected into the bladder wall calms involuntary contractions that drive urgency, frequency, and leakage when medications fall short.",
    image: bladderBotoxImage.url,
    facts: ["Performed in office under local anesthesia", "Typically 15-20 minutes", "Effect generally lasts 6-9 months"],
  },
  {
    title: "Sacral Neuromodulation",
    category: "Minimally Invasive Therapy",
    description: "A small implanted device gently modulates the sacral nerves that coordinate bladder function. Patients trial the therapy before committing to the full implant.",
    image: neuromodulationImage.url,
    facts: ["Two-stage test-then-implant approach", "Treats urgency incontinence and retention", "MRI-conditional, rechargeable options"],
  },
  {
    title: "Female Sling Surgery",
    category: "Outpatient Surgery",
    description: "Mesh and native-tissue sling options restore support beneath the urethra for stress urinary incontinence caused by childbirth, aging, or prior surgery.",
    image: femaleSlingImage.url,
    facts: ["About one hour; outpatient or overnight", "Mesh and mesh-free options discussed", "Most patients resume light activity in days"],
  },
  {
    title: "Prolapse Repair & Reconstruction",
    category: "Advanced Surgery",
    description: "Vaginal, laparoscopic, and robotic approaches rebuild pelvic support for cystocele, rectocele, uterine, and vault prolapse, including revision of failed prior repairs.",
    image: galleryLaser,
    facts: ["Native tissue and graft-based techniques", "Robotic sacrocolpopexy available", "Combined continence repair when indicated"],
  },
];

const faqs = [
  { question: "Do I need surgery for urinary incontinence?", answer: "No. Most patients start with conservative care such as pelvic floor therapy, behavioral changes, or medication. Dr. Farhan only recommends procedures when less invasive options have not achieved your goals." },
  { question: "Is bladder Botox painful?", answer: "The injections are done through a small cystoscope with local anesthetic in the office. Most patients describe mild pressure and return to normal activity the same day." },
  { question: "Will my insurance cover treatment?", answer: "Most major plans accepted at CLS Health cover urologic evaluation and treatment, including Aetna, Blue Cross Blue Shield, Cigna, Humana, Medicare, and United Healthcare. Our team can verify benefits before your visit." },
  { question: "How do I schedule?", answer: "Call 346-414-3426 or request a consult online. Dr. Farhan is accepting new patients at CLS Health Center for Advanced Urology in Southeast Houston and speaks both English and Arabic." },
];

function FemaleUrologyPage() {
  return (
    <main>
      <Hero
        eyebrow="Women's Health & Pelvic Care"
        title="Women's Health"
        subtitle="Incontinence, prolapse, mesh-related complications, and complex revision care, with mesh, non-mesh, and non-surgical options discussed openly."
        image={femaleUrologyImg}
        cta={{ label: "Schedule an Appointment", to: BOOKING_URL }}
        phone="346-414-3426"
      />

      <section className="mx-auto max-w-7xl px-4 pt-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Female Urinary Incontinence and Pelvic Organ Prolapse
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Treatment includes surgical and non-surgical approaches individualized according to the type and severity of incontinence, anatomy, previous treatment or surgery, goals, and preferences.
            </p>
            <p className="mt-4 rounded-xl glass p-5 text-sm italic leading-relaxed text-muted-foreground">
              A mesh-related complication does not automatically mean complete mesh removal. Treatment is individualized according to symptoms, examination findings, anatomy, previous procedures, and patient goals. Female Sling / Continence Surgery Center of Excellence recognition.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-sm">
            <h3 className="font-serif text-2xl">Procedures &amp; Treatments</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {(
                [
                  { label: "Midurethral sling (mesh)", to: "/procedures/midurethral-sling" },
                  { label: "Autologous fascial sling (non-mesh)", to: "/procedures/midurethral-sling" },
                  { label: "Urethral bulking agent injection" },
                  { label: "Evaluation and management of mesh-related complications" },
                  { label: "Persistent or recurrent stress urinary incontinence" },
                  { label: "Complex female continence and reconstructive surgery" },
                ] as { label: string; to?: string }[]
              ).map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item.to ? (
                    <Link
                      to={item.to as string}
                      className="group inline-flex items-center gap-1 font-medium text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {item.label}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ) : (
                    item.label
                  )}
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
              sacral neuromodulation therapy, female sling procedures, and
              pelvic organ prolapse repair.
            </p>
          </div>
          <div className="rounded-sm bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-2xl">Conditions Treated</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Stress urinary incontinence",
                "Urgency urinary incontinence",
                "Overactive bladder",
                "Pelvic organ prolapse",
                "Recurrent UTIs",
                "Interstitial cystitis / bladder pain syndrome",
                "Voiding dysfunction",
                "Urethral stricture disease",
                "Urinary fistula (vesicovaginal, urethrovaginal)",
                "Urethral diverticulum",
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
                  "A minimally invasive therapy that gently restores communication between the bladder and the nerves that control it.",
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

      <ProcedureGallery
        heading="Inside the Procedures"
        intro="A closer look at the most common treatments Dr. Farhan performs for women, from in-office therapies to fellowship-level reconstructive surgery."
        slides={slides}
      />

      <FaqSection faqs={faqs} />
    </main>
  );
}
