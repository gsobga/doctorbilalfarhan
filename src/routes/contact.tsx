import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import heroBg from "@/assets/hero-bg.jpg";
import { PHONE_DISPLAY, PHONE_TEL, BOOKING_URL } from "@/lib/booking";
import { Phone, MapPin, Mail, Clock, Building2, CalendarCheck, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Schedule an Appointment — Bilal Farhan, MD, FACS" },
      {
        name: "description",
        content:
          "Schedule with Dr. Bilal Farhan in Webster, TX, serving the Houston area: 346-414-3426. In-person and telehealth appointments for BPH, incontinence, voiding dysfunction, reconstruction, and kidney stones.",
      },
      { property: "og:title", content: "Schedule an Appointment — Bilal Farhan, MD, FACS" },
      {
        property: "og:description",
        content:
          "Schedule with Dr. Bilal Farhan in Webster, TX, serving the Houston area: 346-414-3426. In-person and telehealth appointments for BPH, incontinence, voiding dysfunction, reconstruction, and kidney stones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://drbilalfarhan.dev/contact" },
    ],
    links: [{ rel: "canonical", href: "https://drbilalfarhan.dev/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <Hero
        eyebrow="In-Person & Telehealth Appointments"
        title="Schedule an Appointment"
        subtitle="Need help scheduling? Call 346-414-3426. Our team will help you find the right visit and confirm any insurance requirements."
        image={heroBg}
        cta={{ label: "Schedule Online", to: BOOKING_URL }}
        phone={PHONE_DISPLAY}
      />


      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Contact Information
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Farhan sees patients at the CLS Health Center for Advanced Urology in
              Webster, Texas, serving the Clear Lake and Southeast Houston communities. New
              and existing patients can schedule by phone, through
              online scheduling, or through the patient portal when applicable.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    CLS Health — Center for Advanced Urology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    780 Clear Lake City Blvd, Bldg 2
                    <br />
                    Webster, TX 77598
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone & Fax</p>
                  <a
                    href="tel:3464143426"
                    className="block text-sm text-muted-foreground hover:text-primary"
                  >
                    346-414-3426
                  </a>
                  <p className="text-sm text-muted-foreground">Fax: 346-400-4338</p>
                  <a
                    href="mailto:drfarhan@cls.health"
                    className="block text-sm text-muted-foreground hover:text-primary"
                  >
                    drfarhan@cls.health
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Please do not send medical information by email — use secure scheduling or call the office.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ways to Schedule</p>
                  <p className="text-sm text-muted-foreground">
                    Schedule online through our secure portal, by phone, or through the patient
                    portal when applicable. In-person and telehealth appointments are available.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Open the online scheduling portal →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Hospital Affiliations</p>
                  <p className="text-sm text-muted-foreground">
                    Memorial Hermann Southeast Hospital — Houston
                    <br />
                    HCA Houston Healthcare Pearland
                    <br />
                    HCA Houston Healthcare Clear Lake — Webster
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Office Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Monday – Friday: 7:00 AM – 5:00 PM
                    <br />
                    Saturday: 9:00 AM – 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </li>
            </ul>

          </div>

          <div className="self-start rounded-sm bg-card p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground">Request an Appointment</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Start an appointment request through our secure online scheduling portal, or call
              the office and our team will help you find the right visit.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex min-h-11 items-center justify-between gap-3 rounded-md bg-primary px-5 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5" />
                Open online scheduling
              </span>
              <ExternalLink className="h-4 w-4 opacity-80" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={PHONE_TEL}
              className="mt-3 flex min-h-11 items-center gap-3 rounded-md border border-primary/30 px-5 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Please do not send sensitive medical information by email. For medical
              emergencies, call 911 or visit the nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="font-serif text-2xl">What to Bring</h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Photo ID",
                  "Insurance information",
                  "Current medication list",
                  "Relevant laboratory results",
                  "Imaging",
                  "Previous urology records",
                  "Previous operative reports",
                  "Urodynamic studies when applicable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic text-muted-foreground">
                For second opinions and revision surgery, previous operative reports and
                imaging are particularly helpful.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="font-serif text-2xl">What to Expect</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                The first visit focuses on understanding the whole problem rather than
                simply selecting a procedure. That includes reviewing your symptoms,
                previous treatment, relevant testing, and how the condition affects your
                quality of life.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Available treatment options are then discussed together so you can
                participate in developing an individualized care plan.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="font-serif text-2xl">Referrals & Privacy</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Many patients can schedule directly with Dr. Farhan. Certain insurance plans
                may require a referral or prior authorization; our scheduling team can help
                determine the requirements for your individual plan.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Sensitive medical information should not be sent through a general contact
                form. Please call the office so information can be collected securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              780 Clear Lake City Blvd, Bldg 2, Webster, TX 77598
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=780+Clear+Lake+City+Blvd+Bldg+2,+Webster,+TX+77598"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <MapPin className="h-4 w-4" />
              Get directions
              <span className="sr-only">to 780 Clear Lake City Blvd, Bldg 2, Webster, TX 77598 (opens in a new tab)</span>
            </a>
          </div>
          <iframe
            title="Map of the office at 780 Clear Lake City Blvd, Bldg 2, Webster, TX"
            src="https://www.google.com/maps?q=780+Clear+Lake+City+Blvd+Bldg+2,+Webster,+TX+77598&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-sm"
          />
        </div>
      </section>
    </main>
  );
}
