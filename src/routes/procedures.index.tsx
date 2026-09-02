import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { procedures } from "@/lib/procedures";
import { BOOKING_URL } from "@/lib/booking";
import heroBg from "@/assets/hero-bg.jpg";

const description =
  "Procedure library from Dr. Bilal Farhan: patient-friendly guides to HoLEP, artificial urinary sphincter, male and female slings, bladder Botox, sacral neuromodulation, urodynamics, urethroplasty, ureteroscopy, and PCNL.";

export const Route = createFileRoute("/procedures/")({
  head: () => ({
    meta: [
      { title: "Procedure Library — Bilal Farhan, MD, FACS" },
      { name: "description", content: description },
      { property: "og:title", content: "Procedure Library — Bilal Farhan, MD, FACS" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/procedures" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/procedures" }],
  }),
  component: ProcedureLibraryPage,
});

const categories = [
  "Prostate & BPH",
  "Continence",
  "Bladder Function",
  "Reconstruction",
  "Stone Disease",
  "Diagnostics",
] as const;

function ProcedureLibraryPage() {
  return (
    <main>
      <Hero
        eyebrow="Patient Education"
        title="Procedure Library"
        subtitle="Balanced, plain-language explanations of the procedures Dr. Farhan performs, including who is a candidate, the alternatives, the risks, and what recovery actually looks like."
        image={heroBg}
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
        align="left"
      />

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-6">
        {categories.map((category) => {
          const items = procedures.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category} className="mb-14">
              <Reveal>
                <h2 className="font-serif text-2xl text-primary lg:text-3xl">{category}</h2>
                <span className="mt-3 block h-px w-16 bg-accent" />
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {items.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 60}>
                    <Link
                      to="/procedures/$slug"
                      params={{ slug: p.slug }}
                      className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-30px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
                    >
                      <h3 className="font-serif text-xl text-primary">{p.shortName}</h3>
                      <p className="mt-2 text-sm font-medium text-accent">{p.tagline}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {p.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Read the guide
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}

        <Reveal>
          <div className="rounded-lg border border-border bg-secondary/50 p-8 text-center">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Additional procedure guides, downloadable patient handouts, and short educational
              videos from Dr. Farhan are being added to this library over time.
            </p>
            <Link
              to="/preparing-for-your-procedure"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Preparing for Your Procedure
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
