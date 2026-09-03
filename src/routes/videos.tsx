import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, PlayCircle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/booking";
import { procedures } from "@/lib/procedures";
import heroBg from "@/assets/hero-bg.jpg";
import clipAsset from "@/assets/procedure-clip.mp4.asset.json";
import clipPoster from "@/assets/procedure-clip-poster.jpg.asset.json";


const description =
  "Short educational videos from Dr. Bilal Farhan explaining urologic conditions and procedures, including HoLEP, incontinence surgery, overactive bladder treatment, reconstruction, and kidney stone surgery.";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Educational Video Center — Bilal Farhan, MD, FACS" },
      { name: "description", content: description },
      { property: "og:title", content: "Educational Video Center — Bilal Farhan, MD, FACS" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/videos" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/videos" }],
  }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <main>
      <Hero
        eyebrow="Patient Education"
        title="Educational Video Center"
        subtitle="Short, plain-language videos from Dr. Farhan explaining conditions, treatment options, and what recovery really looks like."
        image={heroBg}
        align="left"
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-6">
        <Reveal>
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Dr. Farhan is currently recording a series of short educational videos. As each one is
            published it will appear here and on the matching procedure page, so you can watch the
            explanation alongside the written guide.
          </p>
        </Reveal>

        <SurgicalClip />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p, i) => (

            <Reveal key={p.slug} delay={i * 50}>
              <Link
                to="/procedures/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent/50"
              >
                <div className="flex h-40 items-center justify-center bg-primary/95">
                  <PlayCircle className="h-12 w-12 text-accent" strokeWidth={1.2} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {p.category}
                  </p>
                  <h2 className="mt-2 font-serif text-lg text-primary">
                    Dr. Farhan explains {p.shortName}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    Video coming soon. Read the full written guide in the meantime.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function SurgicalClip() {
  const [show, setShow] = useState(false);

  return (
    <Reveal delay={100}>
      <figure className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="relative bg-primary/95">
          {show ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={clipPoster.url}
              src={clipAsset.url}
              className="mx-auto max-h-[520px] w-full bg-black object-contain"
            />
          ) : (
            <button
              type="button"
              onClick={() => setShow(true)}
              className="flex w-full flex-col items-center justify-center gap-4 px-6 py-20 text-center transition-colors hover:bg-primary/80"
            >
              <AlertTriangle className="h-10 w-10 text-accent" strokeWidth={1.5} />
              <span className="max-w-md text-sm leading-relaxed text-primary-foreground/85">
                This clip contains real intraoperative surgical footage. It is intended for
                patient education and may be graphic for some viewers.
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground">
                <PlayCircle className="h-4 w-4" />
                Watch the procedure clip
              </span>
            </button>
          )}
        </div>
        <figcaption className="border-t border-border p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            In the Operating Room
          </p>
          <h2 className="mt-2 font-serif text-lg text-primary">
            Surgical procedure footage with Dr. Farhan
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            A short look inside the operating room during a reconstructive urologic procedure.
            A narrated explanation of this procedure is coming soon.
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
