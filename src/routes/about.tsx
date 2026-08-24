import { createFileRoute, Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/booking";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import drFarhanImg from "@/assets/dr-farhan.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const description =
  "Bilal Farhan, MD, FACS is a fellowship-trained functional and reconstructive urologist and former Associate Professor of Urology, now practicing in Houston with CLS Health.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Bilal Farhan, MD, FACS — Houston Urologist" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "About Dr. Bilal Farhan, MD, FACS — Houston Urologist",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const credentials = [
  {
    label: "Specialty Training",
    value: "Fellowship-Trained Urologist",
    detail:
      "Functional urology, reconstructive urology, male reconstruction, female pelvic medicine, voiding dysfunction, and pelvic reconstruction.",
  },
  {
    label: "Academic Role",
    value: "Former Associate Professor, UTMB",
    detail:
      "Developed advanced clinical programs, trained residents and fellows, and established the HoLEP service program.",
  },
  {
    label: "Surgical Volume",
    value: "250+ HoLEP Procedures",
    detail:
      "Including large and complex prostates and patients presenting in urinary retention.",
  },
  {
    label: "Languages",
    value: "English & Arabic",
    detail:
      "Arabic-speaking patients can discuss sensitive or complex urologic concerns directly with Dr. Farhan in their preferred language.",
  },
];

const education = [
  {
    title: "Medical Education",
    body: "Medical school in Iraq, followed by a five-year urology residency in Jordan.",
  },
  {
    title: "Advanced Fellowship Training — UC Irvine",
    body: "Research and clinical fellowship training in functional urology, reconstructive urology, male reconstruction, female pelvic medicine, voiding dysfunction, and pelvic reconstruction.",
  },
  {
    title: "Clinical Instructor — UCI School of Medicine",
    body: "Served as Clinical Instructor before joining the University of Texas Medical Branch (UTMB).",
  },
  {
    title: "Academic Urology — UTMB",
    body: "Associate Professor of Urology; established the HoLEP service and program, managed complex urologic conditions, and taught residents and fellows.",
  },
];

const awards = [
  "HoLEP Center of Excellence",
  "GreenLight Laser Center of Excellence",
  "Artificial Urinary Sphincter (AUS) Center of Excellence",
  "Female Sling / Continence Surgery Center of Excellence",
  "Academy of Master Clinicians — 2023",
  "Recognition for excellence in resident education",
  "Established the HoLEP service/program at UTMB",
  "250+ HoLEP procedures performed",
  "National and international invited speaker",
  "Published clinical researcher",
  "Editorial and journal peer-review activities",
];

const academic = [
  "Clinical research and clinical trials",
  "Resident and fellow education",
  "Surgical workshops and simulation training",
  "National and international invited lectures",
  "Journal peer review",
  "Editorial activities",
  "AUA BPH Guideline peer-review activities",
];

const interests = [
  "Functional Urology",
  "Urinary Incontinence",
  "Female Urology",
  "Voiding Dysfunction",
  "Pelvic Reconstruction",
  "BPH",
  "Reconstructive Urology",
  "Endourology",
  "Kidney Stone Disease",
];

function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="Center for Advanced Urology • CLS Health"
        title="Bilal Farhan, MD, FACS"
        subtitle="Fellowship-Trained Functional & Reconstructive Urologist • Former Associate Professor of Urology"
        image={heroBg}
        cta={{ label: "Schedule an Appointment", to: BOOKING_URL }}
        phone="346-414-3426"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <img
              src={drFarhanImg}
              alt="Dr. Bilal Farhan, MD, FACS"
              className="w-full rounded-2xl object-cover shadow-xl"
              width={600}
              height={600}
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">
              Professional Story
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground lg:text-4xl">
              Listen First. Understand the Person. Then Treat.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Dr. Bilal Farhan is a fellowship-trained functional and reconstructive
                urologist and former Associate Professor of Urology at UTMB.
              </p>
              <p>
                His medical journey has taken him through Iraq, Jordan, and the United
                States, exposing him to different cultures, healthcare systems, and patient
                perspectives. These experiences shaped his approach to medicine: listen
                first, understand each patient&apos;s background and priorities, and
                individualize treatment around what matters most to them.
              </p>
              <p>
                His commitment to service has also included volunteer medical mission work
                in Africa, reinforcing his belief that excellent care is built not only on
                expertise, but also on compassion and human connection.
              </p>
              <p>
                During his academic career at UTMB, Dr. Farhan developed advanced clinical
                programs, trained residents and fellows, managed complex urologic
                conditions, and established the HoLEP service and program, performing more
                than 250 HoLEP procedures.
              </p>
              <p>
                His goal is to combine advanced expertise with personal, culturally
                respectful care focused on restoring function and improving quality of life.
              </p>
            </div>
            <p className="mt-6 rounded-xl glass p-5 font-serif text-lg text-foreground">
              Advanced expertise. Individualized treatment. Better quality of life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <Reveal>
            <h2 className="text-center font-serif text-3xl text-foreground lg:text-4xl">
              Credentials at a Glance
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, i) => (
              <Reveal key={item.label} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm lift">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 font-serif text-xl text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Education & Training
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6 border-l border-border pl-6">
              {education.map((e, i) => (
                <Reveal key={e.title} delay={i * 90}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
                    <h3 className="font-serif text-xl text-foreground">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {e.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Selected Awards & Recognition
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-3">
              {awards.map((a, i) => (
                <Reveal key={a} delay={i * 40}>
                  <li className="flex items-start gap-3 rounded-xl bg-card p-4 text-sm text-foreground shadow-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Research, Publications & Academic Activity
              </h2>
              <ul className="mt-6 space-y-3">
                {academic.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
              <a
                href="https://scholar.google.com/citations?user=q-bIPqoAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Publications on Google Scholar
              </a>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Academic & Clinical Interests
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="font-serif text-2xl">Where Dr. Farhan Practices</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  CLS Health — Center for Advanced Urology
                  <br />
                  10950 Resource Pkwy, Houston, TX 77089
                  <br />
                  Phone: 346-414-3426 · Fax: 346-400-4338
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Hospital affiliations: Memorial Hermann Southeast Hospital (Houston), HCA
                  Houston Healthcare Pearland, and HCA Houston Healthcare Clear Lake
                  (Webster).
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  In-person and telehealth appointments are available.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection
        heading="Questions Patients Ask First"
        faqs={[
          {
            question: "What conditions does Dr. Farhan treat?",
            answer:
              "BPH and voiding problems, male and female urinary incontinence, overactive bladder and voiding dysfunction, female urology and pelvic health including mesh-related complications, urethral stricture and reconstructive urology, kidney stone disease, and complex or revision urologic cases.",
          },
          {
            question: "Do I need a referral?",
            answer:
              "Many patients can schedule directly with Dr. Farhan. Certain insurance plans may require a referral or prior authorization. Our scheduling team can help determine the requirements for your individual plan.",
          },
          {
            question: "What should I bring to my first appointment?",
            answer:
              "Photo ID, insurance information, current medication list, relevant laboratory results, imaging, previous urology records, previous operative reports, and urodynamic studies when applicable. For second opinions and revision surgery, previous operative reports and imaging are particularly helpful.",
          },
          {
            question: "Are second opinions available?",
            answer:
              "Yes. Dr. Farhan frequently evaluates patients after unsuccessful prior treatment, including mesh complications, recurrent stricture, failed continence surgery, persistent retention, and recurrent stones.",
          },
        ]}
      />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-6">
          <h2 className="font-serif text-3xl lg:text-4xl">
            The treatment should fit the patient — not the other way around.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Schedule an Appointment
            </Link>
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
