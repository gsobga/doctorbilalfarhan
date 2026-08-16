import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import drFarhanImg from "@/assets/dr-farhan.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import femaleUrologyImg from "@/assets/female-urology.jpg";
import maleUrologyImg from "@/assets/male-urology.jpg";
import voidingImg from "@/assets/voiding-dysfunction.jpg";
import pelvicImg from "@/assets/pelvic-reconstruction.jpg";
import { Star, Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bilal Farhan, MD — Urologist in Houston, TX" },
      {
        name: "description",
        content:
          "Dr. Bilal Farhan is a board-certified urologist in Houston, TX specializing in female & male urology, voiding dysfunction, and pelvic reconstruction. Request a consultation today.",
      },
      {
        property: "og:title",
        content: "Bilal Farhan, MD — Urologist in Houston, TX",
      },
      {
        property: "og:description",
        content:
          "Board-certified urologist specializing in female & male urology, voiding dysfunction, and pelvic reconstruction in Houston, TX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Female Urology",
    description:
      "Specialized care for urinary incontinence, pelvic organ prolapse, overactive bladder, and pelvic floor disorders.",
    image: femaleUrologyImg,
    to: "/female-urology",
  },
  {
    title: "Male Urology",
    description:
      "Advanced treatment for BPH, urinary incontinence, erectile dysfunction, urethral stricture, and male prosthetic urology.",
    image: maleUrologyImg,
    to: "/male-urology",
  },
  {
    title: "Voiding Dysfunction",
    description:
      "Expert diagnosis and management of difficult urination, urinary retention, neurogenic bladder, and bladder control issues.",
    image: voidingImg,
    to: "/voiding-dysfunction",
  },
  {
    title: "Pelvic Reconstruction",
    description:
      "Complex reconstructive surgery including urethroplasty, fistula repair, prolapse surgery, and genitourinary reconstruction.",
    image: pelvicImg,
    to: "/pelvic-reconstruction",
  },
];

const highlights = [
  { label: "Board-Certified", value: "Urologist" },
  { label: "Fellowship-Trained", value: "Reconstructive Urology" },
  { label: "20+", value: "Years Experience" },
];

function HomePage() {
  return (
    <main>
      <Hero
        eyebrow="Urology & Pelvic Reconstruction in Houston, TX"
        title="Expert Urological Care for Women & Men"
        subtitle="Board-certified, trusted & patient-focused urology serving the Houston community."
        image={heroBg}
        cta={{ label: "Request a Consult", to: "/contact" }}
        phone="(346) 414-3426"
      />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-foreground lg:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive urologic care tailored to your unique needs, from routine
            conditions to complex reconstructive surgery.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="group relative flex flex-col overflow-hidden rounded-sm bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={450}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Dr. Farhan */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <img
                src={drFarhanImg}
                alt="Dr. Bilal Farhan"
                className="w-full rounded-sm shadow-lg"
                width={600}
                height={800}
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Meet Dr. Bilal Farhan
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Dr. Bilal Farhan is a board-certified urologist specializing in female and
                male urology, voiding dysfunction, and pelvic reconstruction. He is
                committed to providing evidence-based, patient-centered care and has
                advanced fellowship training in female urology and pelvic reconstruction.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The best thing about treating urinary incontinence is improving quality of
                life. Building long-term relationships with patients allows Dr. Farhan to
                provide ongoing support, guidance, and monitoring over time.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <p className="font-serif text-2xl text-foreground">{h.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-block rounded-sm border border-primary bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  More About Dr. Farhan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-foreground lg:text-4xl">Patient Reviews</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Trusted care and lasting relationships with patients throughout Houston.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              text: "Dr. Farhan is truly exceptional. From the very first consultation, he takes the time to listen carefully, answer every question, and make you feel completely comfortable.",
              author: "Verified Patient",
            },
            {
              text: "The entire team is welcoming and supportive, creating a seamless experience from start to finish. If you're looking for a urologist you can fully trust, Dr. Farhan is an outstanding choice.",
              author: "Verified Patient",
            },
            {
              text: "After years of dealing with urinary issues, I finally found a doctor who listened. Dr. Farhan's expertise in voiding dysfunction gave me my quality of life back.",
              author: "Verified Patient",
            },
          ].map((review, i) => (
            <div key={i} className="rounded-sm bg-card p-8 shadow-sm">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground">“{review.text}”</p>
              <p className="mt-4 text-sm font-medium text-foreground">{review.author}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/reviews"
            className="inline-block rounded-sm border border-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Read More Reviews
          </Link>
        </div>
      </section>

      {/* Insurance / CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl">Insurance & Financing</h2>
              <p className="mt-4 max-w-xl text-primary-foreground/90">
                We accept most major insurance plans and offer guidance on coverage and
                payment options. Our team is here to help make your care as accessible as
                possible.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/insurance"
                  className="inline-block rounded-sm bg-white px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  View Insurance Plans
                </Link>
                <a
                  href="tel:3464143426"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  (346) 414-3426
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "Aetna",
                "Blue Cross",
                "Cigna",
                "Humana",
                "Medicare",
                "United Healthcare",
              ].map((plan) => (
                <div
                  key={plan}
                  className="rounded-sm bg-white/10 px-4 py-3 text-center text-sm font-medium text-white backdrop-blur-sm"
                >
                  {plan}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
