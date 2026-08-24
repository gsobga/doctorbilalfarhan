import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import heroBg from "@/assets/hero-bg.jpg";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Read patient reviews for Dr. Bilal Farhan, a board-certified urologist in Houston, TX specializing in female & male urology, voiding dysfunction, and pelvic reconstruction.",
      },
      { property: "og:title", content: "Patient Reviews — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Read patient reviews for Dr. Bilal Farhan, a board-certified urologist in Houston, TX specializing in female & male urology, voiding dysfunction, and pelvic reconstruction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    text: "Dr. Farhan is truly exceptional. From the very first consultation, he takes the time to listen carefully, answer every question, and make you feel completely comfortable with your decision. His attention to detail, professionalism, and genuine care for his patients set him apart.",
    author: "Verified Patient",
    source: "CLS Health",
  },
  {
    text: "The entire team is welcoming and supportive, creating a seamless experience from start to finish. If you're looking for natural-looking results and a surgeon you can fully trust, Dr. Farhan is an outstanding choice.",
    author: "Verified Patient",
    source: "CLS Health",
  },
  {
    text: "Dr. Farhan explained my condition in a way I could understand and walked me through every treatment option. I never felt rushed, and the procedure went exactly as he described. Highly recommend.",
    author: "Verified Patient",
    source: "Online Review",
  },
  {
    text: "After years of dealing with urinary issues, I finally found a doctor who listened. Dr. Farhan's expertise in voiding dysfunction gave me my quality of life back.",
    author: "Verified Patient",
    source: "Online Review",
  },
  {
    text: "Professional, knowledgeable, and kind. Dr. Farhan performed my reconstructive surgery with excellent results. The follow-up care has been outstanding.",
    author: "Verified Patient",
    source: "Online Review",
  },
  {
    text: "I appreciate how Dr. Farhan takes a conservative approach first and only recommends surgery when truly necessary. He truly puts his patients first.",
    author: "Verified Patient",
    source: "Online Review",
  },
];

function ReviewsPage() {
  return (
    <main>
      <Hero
        eyebrow="What Patients Say"
        title="Patient Reviews"
        subtitle="Trusted care and lasting relationships with patients throughout Houston and the surrounding communities."
        image={heroBg}
        cta={{ label: "Request a Consult", to: "/contact" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
            Experiences From Our Patients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We are honored to be part of our patients' health journeys. These testimonials
            reflect the compassionate, patient-centered care Dr. Farhan strives to provide
            every day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex flex-col rounded-sm bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground">“{review.text}”</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{review.author}</p>
                <p className="text-xs text-muted-foreground">{review.source}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
          <h2 className="font-serif text-3xl text-foreground lg:text-4xl">Patient Stories</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Complex urologic problems often require collaboration across specialties. One
            published example describes a multidisciplinary reconstruction that restored a
            patient&apos;s quality of life during Dr. Farhan&apos;s time at UTMB.
          </p>
          <a
            href="https://www.utmb.edu/utmb/news-article/health-blog/2021/03/22/complex-collaboration-yields-new-quality-of-life-for-patient"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Read the UTMB patient story
          </a>
          <p className="mt-6 text-xs italic text-muted-foreground">
            No identifiable patient photograph, video, testimonial, or case information is
            published without appropriate written authorization.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-6">
          <h2 className="font-serif text-3xl lg:text-4xl">Share Your Experience</h2>
          <p className="mt-4 text-primary-foreground/90">
            Your feedback helps us continue to provide exceptional care. If you are a current
            or former patient, we welcome your review.
          </p>
          <a
            href="https://providers.cls.health/provider/bilal-farhan/7163923"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Leave a Review
          </a>
        </div>
      </section>
    </main>
  );
}
