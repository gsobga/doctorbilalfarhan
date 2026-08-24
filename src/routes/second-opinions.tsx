import { createFileRoute, Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/booking";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import galleryConsult from "@/assets/gallery-consult.jpg";

const description =
  "Second opinions, complex cases, and revision urologic surgery in Houston. Dr. Bilal Farhan evaluates recurrent stricture, failed continence surgery, mesh complications, refractory OAB, and complex BPH.";

export const Route = createFileRoute("/second-opinions")({
  head: () => ({
    meta: [
      { title: "Second Opinions & Revision Urology — Bilal Farhan, MD" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Second Opinions & Revision Urology — Bilal Farhan, MD",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SecondOpinionsPage,
});

const welcomed = [
  "Second opinions and complex-case consultations",
  "Evaluation after unsuccessful treatment or surgery",
  "Recurrent urethral stricture",
  "Failed reconstructive procedures",
  "Complex BPH and very large prostates",
  "Persistent urinary retention",
  "Severe or recurrent urinary incontinence",
  "Failed continence procedures",
  "Artificial urinary sphincter evaluation or revision",
  "Mesh-related complications after pelvic or incontinence surgery",
  "Complex sling or mesh revision cases",
  "Refractory overactive bladder",
  "Complex or recurrent kidney stones",
  "Revision reconstructive surgery",
];

const steps = [
  {
    title: "Reconsider the diagnosis",
    body: "Persistent symptoms sometimes mean the underlying problem was never fully identified. The evaluation starts from the beginning, not from the last procedure.",
  },
  {
    title: "Review what has been tried",
    body: "Previous operative reports, imaging, urodynamic studies, and treatment history are reviewed in detail to understand what worked, what did not, and why.",
  },
  {
    title: "Test what still matters",
    body: "Additional examination or testing is performed only where it will change the recommendation.",
  },
  {
    title: "Decide the next step together",
    body: "The best next step may be another operation — or it may be non-surgical treatment, a different technique, or watchful management with clear expectations.",
  },
];

const faqs = [
  {
    question: "What should I bring to a second-opinion visit?",
    answer:
      "Previous operative reports, imaging (including discs or a portal link), urodynamic studies, prior urology records, a current medication list, relevant labs, photo ID, and insurance information. Operative reports and imaging are especially helpful for revision cases.",
  },
  {
    question: "Does a second opinion mean I will need surgery?",
    answer:
      "No. Many patients leave with a non-surgical plan or a clearer understanding of their condition. The purpose of the visit is to determine the right next step, which may or may not involve another operation.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "Many patients can schedule directly. Certain insurance plans may require a referral or prior authorization; our scheduling team can help determine the requirements for your individual plan.",
  },
  {
    question: "Is telehealth available for a second opinion?",
    answer:
      "Yes. In-person and telehealth appointments are available. Some evaluations will still require an in-person examination or testing.",
  },
];

function SecondOpinionsPage() {
  return (
    <main>
      <Hero
        eyebrow="Complex & Revision Care"
        title="Complex Problems Deserve a Thoughtful Second Look"
        subtitle="Patients with persistent symptoms or previous unsuccessful treatment often need more than another procedure."
        image={galleryConsult}
        cta={{ label: "Schedule an Appointment", to: BOOKING_URL }}
        phone="346-414-3426"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
            A Different Starting Point
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            My approach is to reconsider the diagnosis, understand what has already been
            tried, review previous testing and surgery, and determine the best next step,
            which may or may not involve another operation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} className="h-full">
              <div className="h-full rounded-2xl glass p-8 lift">
                <p className="font-serif text-4xl text-accent/70">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Patients I Welcome
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {welcomed.map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <li className="flex items-start gap-3 rounded-xl bg-card p-4 text-sm text-foreground shadow-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-6">
          <h2 className="font-serif text-3xl lg:text-4xl">
            Ready for a considered second opinion?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Schedule an Appointment
            </a>
            <a
              href="tel:3464143426"
              className="rounded-full glass-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Call 346-414-3426
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
