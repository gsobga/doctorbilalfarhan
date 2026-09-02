import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Bed, Droplets, Pill, ShieldAlert, Stethoscope, Syringe, Briefcase } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/booking";
import { procedures } from "@/lib/procedures";
import heroBg from "@/assets/hero-bg.jpg";

const description =
  "Preparing for urologic surgery with Dr. Bilal Farhan: instructions for before surgery, medications and blood thinners, anesthesia, what to bring, catheter care, pain management, activity and returning to work, and when to seek help.";

export const Route = createFileRoute("/preparing-for-your-procedure")({
  head: () => ({
    meta: [
      { title: "Preparing for Your Procedure — Bilal Farhan, MD, FACS" },
      { name: "description", content: description },
      { property: "og:title", content: "Preparing for Your Procedure — Bilal Farhan, MD, FACS" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:url",
        content: "https://drbilalfarhan.dev/preparing-for-your-procedure",
      },
    ],
    links: [
      { rel: "canonical", href: "https://drbilalfarhan.dev/preparing-for-your-procedure" },
    ],
  }),
  component: PreparingPage,
});

const before = [
  {
    icon: Stethoscope,
    title: "Before Surgery",
    points: [
      "Complete any required labs, EKG, or medical clearance well before your date.",
      "Provide a urine sample so any infection is treated in advance.",
      "Stop smoking as early as possible; it meaningfully improves healing.",
      "Arrange a responsible adult to drive you home and stay with you the first night.",
      "Confirm your arrival time the business day before surgery.",
    ],
  },
  {
    icon: Pill,
    title: "Medications & Blood Thinners",
    points: [
      "Bring a complete, current medication list including supplements.",
      "Never stop a blood thinner on your own; the decision is made with your prescribing physician.",
      "Aspirin, clopidogrel, warfarin, apixaban, and rivaroxaban each have different hold instructions.",
      "Stop fish oil, vitamin E, and most herbal supplements about a week before surgery.",
      "Ask specifically about diabetes medications and GLP-1 agonists.",
    ],
  },
  {
    icon: Syringe,
    title: "Preparing for Anesthesia",
    points: [
      "Nothing to eat after midnight; clear liquids may be allowed until a set time.",
      "Take approved morning medications with a small sip of water.",
      "Tell the team about sleep apnea, prior anesthesia problems, or loose teeth.",
      "Use your CPAP machine as usual the night before and bring it if you are staying overnight.",
    ],
  },
  {
    icon: Briefcase,
    title: "What to Bring",
    points: [
      "Photo ID, insurance card, and your medication list.",
      "Loose, comfortable clothing and slip-on shoes.",
      "A case for glasses, contacts, dentures, or hearing aids.",
      "CPAP machine and any assistive devices if staying overnight.",
      "Leave jewelry, cash, and valuables at home.",
    ],
  },
];

const after = [
  {
    icon: Bed,
    title: "After Surgery",
    points: [
      "Expect fatigue for a few days; rest, but walk several times a day.",
      "Drink plenty of water unless you have been told to restrict fluids.",
      "Avoid constipation and straining; use a stool softener if needed.",
      "Keep all follow-up appointments even if you are feeling well.",
    ],
  },
  {
    icon: Droplets,
    title: "Catheter Care",
    points: [
      "Keep the drainage bag below the level of the bladder at all times.",
      "Wash the area where the catheter exits with soap and water daily.",
      "Secure the catheter to your leg so it is not pulled.",
      "Pink or lightly blood-tinged urine is expected; bright red urine with clots is not.",
      "Call immediately if the catheter stops draining or falls out.",
    ],
  },
  {
    icon: Activity,
    title: "Pain Management",
    points: [
      "Scheduled acetaminophen and an anti-inflammatory control most post-operative pain.",
      "Narcotic medication, when prescribed, is intended for short-term use only.",
      "Bladder spasms are common with a catheter and are treated with specific medication.",
      "Do not drive while taking narcotic pain medication.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Activity & Returning to Work",
    points: [
      "Walk daily starting the day of surgery to reduce clot risk.",
      "No lifting over ten pounds until cleared, generally two to six weeks depending on the procedure.",
      "Avoid cycling, straddling, and strenuous exercise until cleared.",
      "Desk work is often possible within a week; physical work usually takes longer.",
    ],
  },
];

const warning = [
  "Fever above 101.5°F or shaking chills",
  "Inability to urinate or a catheter that stops draining",
  "Heavy bleeding or clots that do not clear with fluids",
  "Chest pain, shortness of breath, or a swollen painful calf",
  "Pain that is not controlled by prescribed medication",
  "Redness, swelling, or drainage from an incision",
];

function PreparingPage() {
  return (
    <main>
      <Hero
        eyebrow="Patient Education"
        title="Preparing for Your Procedure"
        subtitle="Clear, practical instructions for before and after urologic surgery, plus procedure-specific guidance for each operation."
        image={heroBg}
        align="left"
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-6">
        <Reveal>
          <h2 className="font-serif text-3xl text-primary lg:text-4xl">Before Surgery</h2>
          <span className="mt-3 block h-px w-16 bg-accent" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {before.map(({ icon: Icon, title, points }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="h-full rounded-lg border border-border bg-card p-7">
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-xl text-primary">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <h2 className="font-serif text-3xl text-primary lg:text-4xl">After Surgery</h2>
            <span className="mt-3 block h-px w-16 bg-accent" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {after.map(({ icon: Icon, title, points }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="h-full rounded-lg border border-border bg-card p-7">
                  <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif text-xl text-primary">{title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* When to seek help */}
      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
        <Reveal>
          <div className="rounded-lg border-2 border-accent/40 bg-card p-8">
            <h2 className="font-serif text-2xl text-primary">When to Seek Help</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Call the office at{" "}
              <a href={PHONE_TEL} className="font-semibold text-primary">
                {PHONE_DISPLAY}
              </a>{" "}
              for any of the following. For chest pain, difficulty breathing, or heavy bleeding, call
              911 or go to the nearest emergency department.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {warning.map((w) => (
                <li key={w} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Procedure-specific */}
      <section className="mx-auto max-w-6xl px-4 pb-24 lg:px-6">
        <Reveal>
          <h2 className="font-serif text-3xl text-primary lg:text-4xl">
            Procedure-specific instructions
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Each procedure guide includes its own preparation, catheter, recovery, and
            return-to-activity instructions.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p, i) => (
            <Reveal key={p.slug} delay={i * 40}>
              <Link
                to="/procedures/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center justify-between gap-3 rounded-md border border-border bg-card px-5 py-4 text-sm font-medium text-primary transition-colors hover:border-accent/50"
              >
                {p.shortName}
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
