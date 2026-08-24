import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance & Financing — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Dr. Bilal Farhan accepts most major insurance plans at CLS Health Center for Advanced Urology in Southeast Houston. Verify your coverage and explore payment options.",
      },
      { property: "og:title", content: "Insurance & Financing — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Dr. Bilal Farhan accepts most major insurance plans at CLS Health Center for Advanced Urology in Southeast Houston. Verify your coverage and explore payment options.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsurancePage,
});

const insurancePlans = [
  "Aetna",
  "Ambetter Superior Health",
  "Blue Cross Blue Shield",
  "Cigna",
  "Community Health Choice",
  "Humana",
  "Medicare",
  "Molina Healthcare",
  "Multiplan",
  "United Healthcare",
  "Wellcare",
  "Wellpoint (Amerigroup)",
];

function InsurancePage() {
  return (
    <main>
      <Hero
        eyebrow="Accessible, Quality Care"
        title="Insurance & Financing"
        subtitle="We accept most major insurance plans and offer guidance to help you understand your coverage."
        image={heroBg}
        cta={{ label: "Request a Consult", to: "/contact" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Accepted Insurance Plans
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Farhan sees patients through CLS Health, which accepts a wide range of
              insurance plans. Insurance coverage varies by plan. Our team can assist with
              insurance verification and authorization requirements when necessary.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Many patients can schedule directly with Dr. Farhan. Certain plans may require
              a referral or prior authorization — our scheduling team can help determine the
              requirements for your individual plan before your visit.
            </p>
          </div>

          <div className="rounded-sm bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-2xl">Major Plans Include</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {insurancePlans.map((plan) => (
                <li key={plan} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {plan}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-muted-foreground">
              This is not an exhaustive list. Additional plans and employer-specific
              networks may be accepted.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Self-Pay & Financing Options
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                For patients without insurance or those seeking services not covered by
                insurance, our office can discuss self-pay options and payment expectations.
                Financial concerns should never stand in the way of necessary urologic care.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Self-pay pricing, payment plans, financing options, and international
                self-pay arrangements are administered through CLS Health. Please call
                346-414-3426 for current details — specific pricing is not published here.
              </p>
            </div>
            <div className="rounded-sm bg-primary p-8 text-primary-foreground">
              <h3 className="mb-4 font-serif text-2xl">Need Help?</h3>
              <p className="text-primary-foreground/90">
                Our team is happy to answer insurance and billing questions. Call us to
                verify your coverage before your visit.
              </p>
              <a
                href="tel:3464143426"
                className="mt-6 inline-block rounded-sm bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Call 346-414-3426
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
