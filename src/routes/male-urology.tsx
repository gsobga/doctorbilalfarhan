import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { Hero } from "@/components/Hero";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { FaqSection } from "@/components/FaqSection";
import galleryDiagnostics from "@/assets/male-reconstruction.jpg";
import maleIncontinenceImage from "@/assets/bilal-male-incontinence.webp.asset.json";
import holepImage from "@/assets/bilal-holep.png.asset.json";

export const Route = createFileRoute("/male-urology")({
  head: () => ({
    meta: [
      { title: "Male Urinary Incontinence — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Advanced men's urology care in Houston, TX. Dr. Bilal Farhan specializes in BPH, urinary incontinence, erectile dysfunction, urethral stricture, and male prosthetic urology.",
      },
      { property: "og:title", content: "Male Urinary Incontinence — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Advanced male urology care in Houston, TX. Dr. Bilal Farhan specializes in BPH, urinary incontinence, erectile dysfunction, urethral stricture, and male prosthetic urology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/male-urology" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/male-urology" }],
  }),
  component: MaleUrologyPage,
});


const slides = [
  {
    title: "HoLEP",
    category: "Laser Prostate Surgery",
    description: "Holmium laser enucleation removes obstructing prostate tissue regardless of gland size, delivering durable relief with a very low retreatment rate. Dr. Farhan established the HoLEP service program at UTMB.",
    image: holepImage.url,
    facts: ["Size-independent alternative to TURP", "Often a single overnight stay", "Low risk of needing repeat surgery"],
  },
  {
    title: "Artificial Urinary Sphincter & Male Sling",
    category: "Prosthetic Urology",
    description: "For post-prostatectomy or moderate-to-severe incontinence, an implanted sphincter or sling restores control and independence from pads.",
    image: maleIncontinenceImage.url,
    facts: ["AUS for moderate to severe leakage", "Sling for mild to moderate cases", "Revision of failed prior implants"],
  },
  {
    title: "Urethroplasty",
    category: "Reconstruction",
    description: "Complex urethral reconstruction for stricture disease, including recurrent narrowing after prior endoscopic treatment.",
    image: galleryDiagnostics,
    facts: ["Buccal graft and excisional techniques", "A durable alternative to repeat dilation", "Fellowship-trained reconstructive expertise"],
  },
];

const faqs = [
  { question: "Which BPH procedure is right for me?", answer: "It depends on prostate size, symptoms, medications, and your goals. Dr. Farhan reviews HoLEP, GreenLight, and medication options with objective testing such as uroflow and ultrasound before recommending a path." },
  { question: "How long is recovery after HoLEP?", answer: "Most men go home within a day, keep a catheter briefly, and return to normal routines within one to two weeks with clear improvement in flow." },
  { question: "Do you treat incontinence after prostate cancer surgery?", answer: "Yes. Post-prostatectomy incontinence is a core focus, including male slings and artificial urinary sphincter placement, as well as revision of prior devices." },
  { question: "Are you accepting new patients?", answer: "Yes. Dr. Farhan sees new patients at CLS Health Center for Advanced Urology in Southeast Houston, 10950 Resource Pkwy, Houston, TX 77089. Call 346-414-3426." },
];

function MaleUrologyPage() {
  return (
    <main>
      <Hero
        eyebrow="Urology for Men"
        title="Male Urinary Incontinence"
        subtitle="Artificial urinary sphincter, male sling, post-prostatectomy incontinence, BPH, and complex or revision continence reconstruction."
        image={maleIncontinenceImage.url}
        cta={{ label: "Schedule an Appointment", to: BOOKING_URL }}
        phone="346-414-3426"
      />

      <section className="mx-auto max-w-7xl px-4 pt-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
               Male Urinary Incontinence
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Male urinary incontinence after prostate surgery, radiation, or previous procedures is treatable, and more than one option usually exists. Treatment is individualized to the degree of leakage, hand function, prior surgery, anatomy, and personal goals.
            </p>
            <p className="mt-4 rounded-xl glass p-5 text-sm italic leading-relaxed text-muted-foreground">
              Dr. Farhan treats straightforward and complex post-prostatectomy incontinence, including patients who have already undergone treatment or surgery.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-sm">
            <h3 className="font-serif text-2xl">Procedures &amp; Treatments</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {(
                [
                  { label: "Artificial Urinary Sphincter (AUS)", to: "/procedures/artificial-urinary-sphincter" },
                  { label: "Male Sling", to: "/procedures/male-sling" },
                  { label: "Complex male continence reconstruction" },
                  { label: "Revision of previous continence procedures" },
                  { label: "BPH treatment including HoLEP and GreenLight", to: "/procedures/holep" },
                  { label: "Urethral stricture and reconstructive surgery", to: "/procedures/urethroplasty" },
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
                "Post-prostatectomy incontinence",
                "Incontinence after radiation",
                "Failed prior continence procedures",
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

      <ProcedureGallery
        heading="Inside the Procedures"
        intro="From laser BPH surgery to prosthetic and reconstructive urology, here is how Dr. Farhan restores urinary and sexual function in men."
        slides={slides}
      />

      <FaqSection faqs={faqs} />
    </main>
  );
}
