import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone, MapPin, Mail, Clock, Building2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Schedule an Appointment — Bilal Farhan, MD, FACS" },
      {
        name: "description",
        content:
          "Schedule with Dr. Bilal Farhan in Southeast Houston: 346-414-3426. In-person and telehealth appointments for BPH, incontinence, voiding dysfunction, reconstruction, and kidney stones.",
      },
      { property: "og:title", content: "Schedule an Appointment — Bilal Farhan, MD, FACS" },
      {
        property: "og:description",
        content:
          "Schedule with Dr. Bilal Farhan in Southeast Houston: 346-414-3426. In-person and telehealth appointments for BPH, incontinence, voiding dysfunction, reconstruction, and kidney stones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
        cta={{ label: "Call 346-414-3426", to: "/contact" }}
      />


      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Contact Information
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Farhan sees patients at the CLS Health Center for Advanced Urology in
              Southeast Houston. New and existing patients can schedule by phone, through
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
                    10950 Resource Pkwy
                    <br />
                    Houston, TX 77089
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
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ways to Schedule</p>
                  <p className="text-sm text-muted-foreground">
                    By phone, online scheduling, or the patient portal when applicable.
                    In-person and telehealth appointments are available.
                  </p>
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
                    Per CLS Health scheduling — please call 346-414-3426 to confirm current
                    hours and availability.
                  </p>
                </div>
              </li>
            </ul>

          </div>

          <div className="rounded-sm bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-2xl">Request an Appointment</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="(346) 414-3426"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option>General Urology Consultation</option>
                  <option>BPH & HoLEP</option>
                  <option>Male Urology & Continence</option>
                  <option>Female Urology & Mesh Complications</option>
                  <option>Voiding Dysfunction & Overactive Bladder</option>
                  <option>Urethral & Pelvic Reconstruction</option>
                  <option>Kidney Stones</option>
                  <option>Second Opinion / Revision Surgery</option>
                  <option>Telehealth Visit</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Submit Request
              </button>
              <p className="text-xs text-muted-foreground">
                This form is for appointment requests only. Please do not include
                sensitive medical information — call 346-414-3426 to discuss protected
                health information securely. For medical emergencies, call 911 or visit the
                nearest emergency room.
              </p>
            </form>
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
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.0!2d-95.208806!3d29.585581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0b0b0b0b0b0%3A0x0!2zMTA5NTAgUmVzb3VyY2UgUGFya3dheSwgU3VpdGUgQSwgSG91c3RvbiwgVFggNzcwODk!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
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
