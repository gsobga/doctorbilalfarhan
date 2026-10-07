import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { Hero } from "@/components/Hero";
import { FaqSection } from "@/components/FaqSection";
import galleryDiagnostics from "@/assets/male-reconstruction.jpg";
import maleIncontinenceImage from "@/assets/bilal-male-incontinence.webp.asset.json";
import holepImage from "@/assets/bilal-holep.png.asset.json";

export const Route = createFileRoute("/male-urology")({
  head: () => ({
    meta: [
      { title: "Male Urinary Incontinence | Houston Area | Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Explore care for male urinary leakage with Dr. Bilal Farhan in Webster, serving the Houston area. Learn about evaluation, male slings, and artificial urinary sphincters.",
      },
      { property: "og:title", content: "Male Urinary Incontinence | Houston Area | Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Explore care for male urinary leakage with Dr. Bilal Farhan in Webster, serving the Houston area. Learn about evaluation, male slings, and artificial urinary sphincters.",
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
  { question: "Do you treat incontinence after prostate cancer surgery?", answer: "Yes. Post-prostatectomy incontinence is a core focus, including male slings and artificial urinary sphincter placement, as well as revision of prior devices." },
  { question: "Are you accepting new patients?", answer: "Yes. Dr. Farhan sees new patients at CLS Health Center for Advanced Urology at 780 Clear Lake City Blvd, Bldg 2, Webster, TX 77598. Call 346-414-3426." },
];

function MaleUrologyPage() {
  return (
    <main>
      <Hero
        eyebrow="Urology for Men"
        title="Male Urinary Incontinence Care in the Houston Area"
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
        <div className="rounded-sm bg-card p-8 shadow-sm">
          <h2 className="mb-6 font-serif text-2xl">Continence Conditions Treated</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Urinary incontinence",
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
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <h2 className="text-center font-serif text-3xl text-foreground lg:text-4xl">
            Advanced Treatment Options
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {([
              {
                title: "Artificial Urinary Sphincter",
                description:
                  "Implanted control for moderate to severe urinary leakage.",
                slug: "artificial-urinary-sphincter",
              },
              {
                title: "Male Sling Surgery",
                description:
                  "A pump-free option for selected mild to moderate stress incontinence.",
                slug: "male-sling",
              },
            ] as const).map((treatment) => (
              <Link
                key={treatment.title}
                to="/procedures/$slug"
                params={{ slug: treatment.slug }}
                className="group rounded-sm border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
              >
                <h3 className="font-serif text-xl text-foreground">{treatment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {treatment.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read the patient guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <h2 className="font-serif text-3xl text-foreground lg:text-4xl">Related Men’s Urology Care</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            to="/bph-holep"
            className="group rounded-sm border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50"
          >
            <h3 className="font-serif text-xl text-foreground">Enlarged Prostate (BPH) and HoLEP</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {slides[0].description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              BPH treatment and HoLEP consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            to="/pelvic-reconstruction"
            className="group rounded-sm border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50"
          >
            <h3 className="font-serif text-xl text-foreground">Urethral Stricture and Urethroplasty</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {slides[2].description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Pelvic and urethral reconstruction
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </main>
  );
}
