import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { FaqSection } from "@/components/FaqSection";
import galleryRobotic from "@/assets/gallery-robotic.jpg";
import galleryDiagnostics from "@/assets/gallery-diagnostics.jpg";
import galleryConsult from "@/assets/gallery-consult.jpg";
import galleryLaser from "@/assets/gallery-laser.jpg";
import pelvicImg from "@/assets/pelvic-reconstruction.jpg";

export const Route = createFileRoute("/pelvic-reconstruction")({
  head: () => ({
    meta: [
      { title: "Pelvic Reconstruction — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Fellowship-trained pelvic reconstructive urology in Houston, TX. Dr. Bilal Farhan performs complex urethroplasty, fistula repair, prolapse surgery, and genitourinary reconstruction.",
      },
      { property: "og:title", content: "Pelvic Reconstruction — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Fellowship-trained pelvic reconstructive urology in Houston, TX. Dr. Bilal Farhan performs complex urethroplasty, fistula repair, prolapse surgery, and genitourinary reconstruction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PelvicReconstructionPage,
});


const slides = [
  {
    title: "Urethroplasty",
    category: "Urethral Reconstruction",
    description: "Excisional and buccal mucosal graft repairs rebuild the urethra for stricture disease, trauma, and failed prior endoscopic treatment.",
    image: galleryRobotic,
    facts: ["Durable alternative to repeat dilation", "Graft harvested from inner cheek", "Tailored to stricture length and location"],
  },
  {
    title: "Fistula Repair",
    category: "Restoring Continence",
    description: "Vesicovaginal and urethrovaginal fistula repair closes abnormal connections caused by surgery, radiation, or obstructed labor, restoring continence and anatomy.",
    image: galleryConsult,
    facts: ["Transvaginal and abdominal approaches", "Tissue interposition flaps when needed", "High closure rates in experienced hands"],
  },
  {
    title: "Revision Sling & Mesh Surgery",
    category: "Complication Care",
    description: "Excision and revision for pain, erosion, obstruction, or recurrent leakage after prior sling or mesh procedures performed elsewhere.",
    image: galleryLaser,
    facts: ["Partial or complete mesh excision", "Simultaneous continence restoration", "Second-opinion evaluations welcome"],
  },
  {
    title: "Robotic & Post-Trauma Reconstruction",
    category: "Advanced Surgery",
    description: "Robotic sacrocolpopexy, ureteral reconstruction, and repair after pelvic fracture urethral injury bring minimally invasive precision to complex cases.",
    image: galleryDiagnostics,
    facts: ["Robotic precision, smaller incisions", "Pelvic fracture urethral injury repair", "Congenital and post-radiation cases"],
  },
];

const faqs = [
  { question: "I had surgery elsewhere that failed. Can you help?", answer: "Yes. A large share of Dr. Farhan's practice is revision and salvage surgery after failed slings, mesh complications, recurrent stricture, or persistent fistula." },
  { question: "What imaging or testing is needed first?", answer: "Depending on the problem, evaluation may include cystoscopy, retrograde urethrogram, urodynamics, and cross-sectional imaging so the reconstruction is planned precisely." },
  { question: "How long is recovery from reconstruction?", answer: "It varies by procedure. Many patients go home within one to two days with a temporary catheter, resuming normal activity over two to six weeks." },
  { question: "Do you see out-of-area patients?", answer: "Yes. Referrals and second opinions are welcome at CLS Health Urology - Southeast Houston. Call (346) 414-3426 to arrange an evaluation." },
];

function PelvicReconstructionPage() {
  return (
    <main>
      <Hero
        eyebrow="Complex Reconstructive Surgery"
        title="Pelvic Reconstruction"
        subtitle="Restoring form, function, and quality of life through advanced pelvic and genitourinary reconstruction."
        image={pelvicImg}
        cta={{ label: "Request a Consult", to: "/contact" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Rebuilding Function & Confidence
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Bilal Farhan is fellowship-trained in pelvic reconstructive urology and
              offers advanced surgical solutions for patients with complex pelvic and
              genitourinary conditions. His expertise includes urethral reconstruction,
              fistula repair, pelvic organ prolapse surgery, and revision surgery for
              complications from prior procedures.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether the condition is congenital, related to prior surgery, trauma, or
              childbirth, Dr. Farhan works closely with patients to develop a personalized
              reconstructive plan focused on durable outcomes and improved quality of life.
            </p>
          </div>
          <div className="rounded-sm bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-2xl">Conditions Treated</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Urethral stricture disease",
                "Pelvic organ prolapse",
                "Genitourinary fistula",
                "Urethrovaginal fistula",
                "Vesicovaginal fistula",
                "Complex incontinence",
                "Failed prior sling or mesh",
                "Pelvic fracture urethral injury",
                "Congenital urologic anomalies",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <h2 className="text-center font-serif text-3xl text-foreground lg:text-4xl">
            Reconstructive Procedures
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Urethroplasty",
                description:
                  "Open and minimally invasive urethral reconstruction for stricture disease.",
              },
              {
                title: "Fistula Repair",
                description:
                  "Precise repair of genitourinary fistulas to restore continence and anatomy.",
              },
              {
                title: "Pelvic Organ Prolapse Surgery",
                description:
                  "Native tissue and mesh-based approaches tailored to each patient.",
              },
              {
                title: "Revision Sling Surgery",
                description:
                  "Correction of complications from prior incontinence procedures.",
              },
              {
                title: "Robotic Reconstruction",
                description:
                  "Minimally invasive robotic approaches for selected complex cases.",
              },
              {
                title: "Post-Trauma Reconstruction",
                description:
                  "Restoration of urinary function after pelvic fracture or surgical injury.",
              },
            ].map((treatment) => (
              <div
                key={treatment.title}
                className="rounded-sm bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-serif text-xl text-foreground">{treatment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcedureGallery
        heading="Reconstructive Work, Step by Step"
        intro="Complex reconstruction demands planning, imaging, and technique. These are the procedures Dr. Farhan performs most for patients referred with difficult anatomy."
        slides={slides}
      />

      <FaqSection faqs={faqs} />
    </main>
  );
}
