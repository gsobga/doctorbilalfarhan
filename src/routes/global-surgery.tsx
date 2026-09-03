import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Globe2, HeartHandshake, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { BOOKING_URL } from "@/lib/booking";
import heroBg from "@/assets/hero-bg.jpg";
import teamFamilies from "@/assets/global-team-families.jpg.asset.json";
import surgeryOr1 from "@/assets/global-surgery-or-1.jpg.asset.json";
import postopCare from "@/assets/global-postop-care.jpg.asset.json";
import surgeryOr2 from "@/assets/global-surgery-or-2.jpg.asset.json";

const description =
  "Global surgery and humanitarian service. Dr. Bilal Farhan has performed more than 200 surgeries across multiple specialties in Africa, working alongside local physicians, nurses, and surgical teams in resource-limited settings.";

export const Route = createFileRoute("/global-surgery")({
  head: () => ({
    meta: [
      { title: "Global Surgery & Humanitarian Service — Bilal Farhan, MD, FACS" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Global Surgery & Humanitarian Service — Bilal Farhan, MD, FACS",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/global-surgery" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/global-surgery" }],
  }),
  component: GlobalSurgeryPage,
});

const values = [
  {
    icon: Users,
    title: "Working alongside local teams",
    body: "Operating with local physicians, nurses, and surgical staff rather than in parallel to them, so care continues after the mission ends.",
  },
  {
    icon: HeartHandshake,
    title: "Knowledge sharing",
    body: "Teaching operative technique and perioperative care to local surgeons and trainees is treated as part of the work, not an add-on.",
  },
  {
    icon: Globe2,
    title: "Care in resource-limited settings",
    body: "Adapting surgical decision-making to what is available, safe, and sustainable in the communities being served.",
  },
];

function GlobalSurgeryPage() {
  return (
    <main>
      <Hero
        eyebrow="Global Surgery"
        title="Extending Surgical Care Beyond Borders"
        subtitle="Humanitarian surgical work in Africa, performed alongside local physicians, nurses, and surgical teams in resource-limited communities."
        image={heroBg}
        align="left"
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
      />

      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Dr. Farhan&rsquo;s commitment to medicine extends beyond his clinical and academic
              practice in the United States.
            </p>
            <p>
              Through humanitarian surgical work in Africa, he has worked alongside local physicians,
              nurses, and surgical teams to provide care in resource-limited communities.
            </p>
            <p>
              UTMB highlighted this work in 2026, reporting that Dr. Farhan had performed more than
              200 surgeries across multiple specialties throughout Africa, emphasizing teamwork,
              knowledge sharing, and dedication to care in resource-limited settings.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 rounded-lg border border-border bg-secondary/50 p-10 text-center">
            <StatCounter value={200} suffix="+" />
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Humanitarian surgeries in Africa
            </p>
          </div>
        </Reveal>
      </section>

      {/* Photo layout */}
      <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-6">
        <Reveal>
          <figure>
            <img
              src={teamFamilies.url}
              alt="Dr. Farhan with local medical team and families during a humanitarian surgical mission"
              className="h-[420px] w-full rounded-lg object-cover"
              width={1600}
              height={900}
              loading="lazy"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Dr. Farhan with local physicians, nurses, and families during a humanitarian surgical mission.
            </figcaption>
          </figure>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Reveal delay={80}>
            <figure>
              <img
                src={surgeryOr1.url}
                alt="Operating room during a humanitarian surgical mission"
                className="h-72 w-full rounded-lg object-cover"
                width={800}
                height={1067}
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                Operating alongside local surgical teams.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <figure>
              <img
                src={postopCare.url}
                alt="Dr. Farhan providing postoperative care to a young patient"
                className="h-72 w-full rounded-lg object-cover"
                width={800}
                height={800}
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                Postoperative care and recovery on the surgical mission.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={200}>
            <figure>
              <img
                src={surgeryOr2.url}
                alt="Dr. Farhan operating with a local surgeon during a humanitarian mission"
                className="h-72 w-full rounded-lg object-cover"
                width={800}
                height={1067}
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                Collaborative surgery with local colleagues.
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-6 text-xs text-muted-foreground">
            Identifiable patient photographs are published only where appropriate consent exists.
          </p>
          <a
            href="https://www.utmb.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Read the UTMB feature on Dr. Farhan&rsquo;s global work
            <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <h2 className="font-serif text-3xl text-primary lg:text-4xl">How the work is done</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-lg border border-border bg-card p-7">
                  <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-xl text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Meet Dr. Farhan
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
