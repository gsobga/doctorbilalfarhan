import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import { BOOKING_URL } from "@/lib/booking";
import heroBg from "@/assets/hero-bg.jpg";

const description =
  "Urology patient education from Dr. Bilal Farhan: understand BPH and HoLEP, incontinence, overactive bladder, mesh complications, urethral stricture, and kidney stones, plus CLS Health patient forms, billing, and privacy resources.";

export const Route = createFileRoute("/patient-education")({
  head: () => ({
    meta: [
      { title: "Patient Education & Resources — Bilal Farhan, MD" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Patient Education & Resources — Bilal Farhan, MD",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/patient-education" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/patient-education" }],
  }),
  component: PatientEducationPage,
});

const topics: {
  title: string;
  to:
    | "/bph-holep"
    | "/male-urology"
    | "/female-urology"
    | "/voiding-dysfunction"
    | "/pelvic-reconstruction"
    | "/kidney-stones";
  summary: string;
  points: string[];
}[] = [
  {
    title: "Enlarged Prostate (BPH) & HoLEP",
    to: "/bph-holep",
    summary:
      "An enlarged prostate blocks the flow of urine, which causes a weak stream, straining, frequent nighttime trips to the bathroom, and in some men, retention or catheter dependence.",
    points: [
      "Symptoms often build slowly, so many men adapt before seeking care.",
      "Medication helps some patients, but it does not remove the obstructing tissue.",
      "HoLEP removes the obstructing tissue regardless of prostate size and is durable long term.",
      "Learn what to expect before, during, and after a laser enucleation procedure.",
    ],
  },
  {
    title: "Male Incontinence & Post-Prostatectomy Leakage",
    to: "/male-urology",
    summary:
      "Leakage after prostate surgery or radiation is common, treatable, and not something to live with permanently.",
    points: [
      "Pelvic floor therapy is the usual first step for mild leakage.",
      "A male sling can correct mild to moderate stress leakage.",
      "An artificial urinary sphincter is the standard for more severe leakage.",
      "Treatment choice depends on pad use, prior radiation, and hand dexterity.",
    ],
  },
  {
    title: "Female Urology & Mesh Complications",
    to: "/female-urology",
    summary:
      "Stress incontinence, prolapse, recurrent infections, and complications from previously placed mesh all have evaluation pathways.",
    points: [
      "Pain, erosion, recurrent infection, or new leakage after mesh placement deserves formal evaluation.",
      "Not every mesh complication requires removal, and not every symptom is caused by mesh.",
      "Imaging and cystoscopy help identify the true source of symptoms.",
      "Revision and removal surgery is specialized work and should be done by a reconstructive urologist.",
    ],
  },
  {
    title: "Overactive Bladder & Voiding Dysfunction",
    to: "/voiding-dysfunction",
    summary:
      "Urgency, frequency, and urge leakage respond to a stepwise plan rather than a single treatment.",
    points: [
      "Bladder retraining, fluid timing, and pelvic floor therapy come first.",
      "Medication is added when behavioral steps are not enough.",
      "Bladder Botox and nerve stimulation are effective options for refractory symptoms.",
      "Urodynamic testing clarifies whether the problem is storage, emptying, or both.",
    ],
  },
  {
    title: "Urethral Stricture & Pelvic Reconstruction",
    to: "/pelvic-reconstruction",
    summary:
      "Scar tissue in the urethra narrows the channel and causes a slow stream, straining, and repeated infections.",
    points: [
      "Repeated dilation or incision often means the stricture keeps coming back.",
      "Urethroplasty is the reconstructive repair with the highest long-term success.",
      "Evaluation includes imaging of the urethra and a review of prior procedures.",
      "Complex and revision cases benefit from a reconstructive specialist.",
    ],
  },
  {
    title: "Kidney Stones",
    to: "/kidney-stones",
    summary:
      "Stones cause sudden flank pain, blood in the urine, nausea, and sometimes infection or blockage that needs urgent care.",
    points: [
      "Small stones may pass with hydration and medical therapy.",
      "Ureteroscopy with laser fragmentation treats most stones without incisions.",
      "PCNL is used for large, staghorn, or complex stones.",
      "Metabolic evaluation helps prevent the next stone from forming.",
    ],
  },
];

const visitSteps = [
  {
    step: "01",
    title: "Before your visit",
    body: "Complete the CLS Health new patient paperwork ahead of time, bring your insurance card and photo ID, and gather a current medication list along with any prior operative reports, imaging, or urodynamic studies.",
  },
  {
    step: "02",
    title: "During your visit",
    body: "Expect a focused history, a physical exam, and often a urinalysis. Some visits include bladder scanning, uroflow, or cystoscopy. Ask questions and bring a family member if that helps you remember details.",
  },
  {
    step: "03",
    title: "After your visit",
    body: "You will leave with a written plan. Results, messages, and follow-up appointments are available through the CLS Health patient portal, and our team is reachable by phone during contact center hours.",
  },
];

const clsResources = [
  {
    label: "Patient Care Guide",
    href: "https://cls-health.cdn.prismic.io/cls-health/Z92sDDxkOkZ2kJOu_CLS-HEALTH-PATIENT-CARE-GUIDE_2025.pdf",
    note: "Appointments, privacy, financial responsibility, and consent explained in one document.",
  },
  {
    label: "New Patient Intake Forms",
    href: "https://cls-health.cdn.prismic.io/cls-health/x7VTZHUnKA0cmg0x_CLS_Health_New_Patient_Intake_with_SMS_Consent.pdf",
    note: "Complete before your first appointment to shorten your check-in time.",
  },
  {
    label: "Notice of Privacy Practices (English)",
    href: "https://cls-health.cdn.prismic.io/cls-health/ahhffLK9tuLqEOwm_5.27.2026NoticeofPrivacyPractices-no-ai-intro-paragraph.pdf",
    note: "How your health information is used and protected.",
  },
  {
    label: "Aviso de Prácticas de Privacidad (Español)",
    href: "https://cls-health.cdn.prismic.io/cls-health/ahXCa7K9tuLqEKJC_AvisoDePracticasdePrivacidadCLSHealth.pdf",
    note: "Versión en español del aviso de privacidad.",
  },
  {
    label: "Surprise Billing Protections (Texas)",
    href: "https://www.tdi.texas.gov/medical-billing/surprise-balance-billing.html",
    note: "Your rights against balance billing under Texas and federal law.",
  },
  {
    label: "Report a Compliance Concern",
    href: "https://cls.health/report-a-concern",
    note: "Confidentially report concerns about privacy, billing, or patient safety.",
  },
  {
    label: "All CLS Health Patient Resources",
    href: "https://cls.health/patient-resources",
    note: "Portal information, FAQs, and the full resource library.",
  },
];

const faqs = [
  {
    question: "How do I complete my paperwork before my appointment?",
    answer:
      "Download the CLS Health new patient intake packet from the patient resources library, complete it, and bring it with you. Completing it in advance keeps your visit focused on your care rather than on forms.",
  },
  {
    question: "What is the patient portal and what can I do there?",
    answer:
      "CLS Health uses Healow, a secure portal available 24/7. You can view your records and certain test results, review past and upcoming appointments, request appointments, and message your care team.",
  },
  {
    question: "What insurance is accepted?",
    answer:
      "CLS Health accepts more than 80 health insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Confirm your specific plan and any referral or authorization requirement before scheduling.",
  },
  {
    question: "Why can't I be told the exact cost of my visit in advance?",
    answer:
      "The front desk can provide an estimate, but the full scope of medically necessary care is not known until you are examined. Insurance verification is not a guarantee of payment, so a balance may remain after your claim is processed. You can request a written estimate before tests or procedures.",
  },
  {
    question: "What is the difference between a deductible, copay, and coinsurance?",
    answer:
      "A deductible is the amount you pay before your plan begins covering expenses. A copay is a fixed amount due at the time of service. Coinsurance is a percentage of the cost set by your plan. It is possible to owe all three for the same visit.",
  },
  {
    question: "Can I be balance billed by an out-of-network provider?",
    answer:
      "For emergency services and for many services delivered at an in-network facility, you are protected and can only be billed your in-network cost-sharing amount. Texas also offers arbitration for state-regulated plans. You are never required to give up these protections.",
  },
  {
    question: "Will I receive text messages from the practice?",
    answer:
      "SMS consent is optional and is never required to schedule, register, or receive care. If you opt in, you may receive appointment reminders and clinic updates. Reply STOP at any time to opt out.",
  },
];

function PatientEducationPage() {
  return (
    <main>
      <Hero
        eyebrow="Understand Your Condition"
        title="Patient Education & Resources"
        subtitle="Clear explanations of the urologic conditions we treat, what to expect at your visit, and the CLS Health forms, billing, and privacy resources you may need."
        image={heroBg}
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Condition Library</p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl text-foreground lg:text-4xl">
            Learn about your condition before you decide on treatment
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Informed patients make better decisions. Each summary below explains the
            problem in plain language and links to a deeper page on how we evaluate and
            treat it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 60}>
              <article className="flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-serif text-2xl text-foreground">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {topic.summary}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {topic.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to={topic.to}
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-wider text-accent hover:underline"
                >
                  Read more
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              What to expect at your visit
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {visitSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="h-full rounded-sm bg-card p-8 shadow-sm">
                  <span className="font-serif text-3xl text-accent">{s.step}</span>
                  <h3 className="mt-3 font-serif text-xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Forms, privacy, and billing resources
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Dr. Farhan practices within CLS Health, so intake paperwork, privacy
                notices, portal access, and billing are handled through CLS Health
                systems. The documents below come directly from the CLS Health patient
                resources library.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                For billing questions, call the number listed on your statement. For
                general account questions, the CLS Health customer service center is
                reachable at 281-724-1860, Monday through Friday, 8 AM to 5 PM.
              </p>
              <Link
                to="/insurance"
                className="mt-6 inline-block rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Insurance & Financing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ul className="divide-y divide-border rounded-sm border border-border bg-card">
              {clsResources.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-5 transition-colors hover:bg-sand"
                  >
                    <span className="font-medium text-foreground">{r.label}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {r.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FaqSection heading="Patient Resource FAQs" faqs={faqs} />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-6">
          <h2 className="font-serif text-3xl lg:text-4xl">Still have questions?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/85">
            Education is part of the visit. Bring your questions and we will walk through
            the options together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Request an Appointment
            </a>
            <a
              href="tel:3464143426"
              className="rounded-sm border border-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Call 346-414-3426
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
