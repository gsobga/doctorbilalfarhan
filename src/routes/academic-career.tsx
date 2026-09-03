import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, GraduationCap, Microscope, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/booking";
import heroBg from "@/assets/hero-bg.jpg";
import teachingSimulationAsset from "@/assets/teaching-simulation.jpg.asset.json";
import researchPosterAsset from "@/assets/research-poster-student.jpg.asset.json";
import lectureAswanAsset from "@/assets/lecture-aswan-2026.jpg.asset.json";
import teachingFasciaAsset from "@/assets/teaching-fascia-panel.jpg.asset.json";

const teachingSimulation = teachingSimulationAsset.url;
const researchPoster = researchPosterAsset.url;
const lectureAswan = lectureAswanAsset.url;
const teachingFascia = teachingFasciaAsset.url;

const description =
  "Academic medicine at UTMB, 2019 to 2026. Dr. Bilal Farhan served as Associate Professor of Urology and Program Director of Neurourology and Pelvic Reconstruction, and established the UTMB HoLEP program and surgical training curriculum.";

export const Route = createFileRoute("/academic-career")({
  head: () => ({
    meta: [
      { title: "Academic Career at UTMB — Bilal Farhan, MD, FACS" },
      { name: "description", content: description },
      { property: "og:title", content: "Academic Career at UTMB — Bilal Farhan, MD, FACS" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/academic-career" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/academic-career" }],
  }),
  component: AcademicCareerPage,
});

const pillars = [
  {
    icon: Users,
    title: "Clinical Practice",
    body: "A subspecialty practice in functional urology, voiding dysfunction, incontinence, and pelvic and urethral reconstruction, including complex revision surgery.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "Clinical teaching, operative mentorship, simulation, and structured surgical training for medical students, residents, and fellows.",
  },
  {
    icon: Microscope,
    title: "Program Development",
    body: "Building advanced urologic services, including the HoLEP program, and integrating them into resident surgical education.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Joined the UTMB faculty",
    body: "Arrived at the University of Texas Medical Branch after fellowship training in reconstructive urology at the University of California, Irvine.",
  },
  {
    year: "2020–2024",
    title: "Built a subspecialty practice",
    body: "Developed a referral practice in neurourology, voiding dysfunction, incontinence, and pelvic and urethral reconstruction while teaching residents in clinic and in the operating room.",
  },
  {
    year: "2023–2025",
    title: "Academic and program leadership",
    body: "Served as Program Director of Neurourology and Pelvic Reconstruction and advanced to Associate Professor of Urology.",
  },
  {
    year: "February 2025",
    title: "HoLEP program passes 100 procedures",
    body: "The HoLEP service he established at UTMB surpassed its first 100 procedures and became part of resident surgical education.",
  },
  {
    year: "2026",
    title: "Bringing academic practice to the community",
    body: "Now applying seven years of academic surgical experience to individualized patient care in Houston.",
  },
];

function AcademicCareerPage() {
  return (
    <main>
      <Hero
        eyebrow="Academic Medicine"
        title="Academic Medicine at UTMB"
        subtitle="2019 to 2026. Seven years of complex surgical care, resident and medical student education, research, and program development."
        image={heroBg}
        align="left"
        cta={{ label: "Request an Appointment", to: BOOKING_URL }}
      />

      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dr. Farhan joined UTMB in 2019 and spent seven years building an academic practice
            centered on functional urology, voiding dysfunction, pelvic reconstruction, and advanced
            minimally invasive surgery.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            He ultimately served as Associate Professor of Urology and Program Director of
            Neurourology and Pelvic Reconstruction, combining complex clinical practice with resident
            education, medical student teaching, research, and program development.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-card p-7">
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <h2 className="mt-4 font-serif text-xl text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HoLEP program */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Building the HoLEP Program
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl text-primary lg:text-4xl">
              From introducing HoLEP to building a surgical training program
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Dr. Farhan established the HoLEP service at UTMB and helped develop it into both a
                  clinical service and a surgical education program.
                </p>
                <p>
                  By February 2025, the program had surpassed its first 100 procedures. UTMB
                  recognized his leadership not only for expanding access to advanced BPH treatment
                  but also for incorporating HoLEP into resident surgical education.
                </p>
                <p>
                  He also led structured HoLEP training that combined didactic education, simulation,
                  and live operative training.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://www.utmb.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Read UTMB&rsquo;s HoLEP milestone feature
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    to="/procedures/$slug"
                    params={{ slug: "holep" }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    HoLEP patient guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-4">
                <figure>
                  <img
                    src={teachingSimulation}
                    alt="Dr. Farhan leading hands-on sacral neuromodulation simulation training with residents and faculty"
                    className="h-56 w-full rounded-lg object-cover"
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    Hands-on simulation training with residents and faculty at UTMB.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={researchPoster}
                    alt="Dr. Farhan mentoring a medical student presenting a UTMB urology research poster"
                    className="h-56 w-full rounded-lg object-cover"
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    Mentoring medical student research in urology.
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-4 py-20 lg:px-6">
        <Reveal>
          <h2 className="font-serif text-3xl text-primary">Seven years at UTMB</h2>
          <span className="mt-3 block h-px w-16 bg-accent" />
        </Reveal>
        <ol className="mt-10 space-y-8 border-l border-border pl-8">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 60} as="li">
              <li className="relative">
                <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.year}
                </p>
                <h3 className="mt-2 font-serif text-xl text-primary">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Teaching */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 lg:px-6">
          <Reveal>
            <div className="mb-10 grid gap-4 md:grid-cols-2">
              <figure>
                <img
                  src={lectureAswan}
                  alt="Dr. Farhan delivering an invited urology lecture at an international conference"
                  className="h-64 w-full rounded-lg object-cover"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
                <figcaption className="mt-2 text-xs text-primary-foreground/70">
                  Invited international lecture on urology.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={teachingFascia}
                  alt="Dr. Farhan teaching surgical technique during a panel discussion"
                  className="h-64 w-full rounded-lg object-cover"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
                <figcaption className="mt-2 text-xs text-primary-foreground/70">
                  Teaching surgical technique during an expert panel discussion.
                </figcaption>
              </figure>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              Teaching &amp; Academic Medicine
            </p>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl">Teaching the next generation</h2>
            <div className="mt-6 max-w-3xl space-y-5 text-[15px] leading-relaxed text-primary-foreground/85">
              <p>
                Education has remained an important part of Dr. Farhan&rsquo;s career. At UTMB, he
                participated in the education of medical students, residents, and fellows through
                clinical teaching, operative mentorship, simulation, and structured surgical
                training.
              </p>
              <p>
                His approach to academic medicine has emphasized sharing surgical knowledge and
                giving trainees increasing responsibility while maintaining high standards of patient
                safety and care.
              </p>
              <blockquote className="border-l-2 border-accent pl-5 font-serif text-xl italic text-white">
                Physicians should generously share their skills and knowledge with the next
                generation.
              </blockquote>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/awards"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
              >
                Awards &amp; Recognition
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/global-surgery"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Global Surgery &amp; Humanitarian Service
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
