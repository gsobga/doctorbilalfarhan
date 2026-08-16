import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bilal Farhan, MD" },
      {
        name: "description",
        content:
          "Contact Dr. Bilal Farhan's office in Houston, TX. Request a consultation for female urology, male urology, voiding dysfunction, or pelvic reconstruction.",
      },
      { property: "og:title", content: "Contact — Bilal Farhan, MD" },
      {
        property: "og:description",
        content:
          "Contact Dr. Bilal Farhan's office in Houston, TX. Request a consultation for female urology, male urology, voiding dysfunction, or pelvic reconstruction.",
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
        eyebrow="Get in Touch"
        title="Request a Consultation"
        subtitle="Take the first step toward better urologic health. Our team is ready to help you schedule your appointment."
        image={heroBg}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
              Contact Information
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Dr. Farhan sees patients at CLS Health Urology - Southeast Houston. New and
              existing patients can request an appointment by phone or through the CLS Health
              online booking system.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">CLS Health Urology - Southeast Houston</p>
                  <p className="text-sm text-muted-foreground">
                    10950 Resource Parkway, Suite A
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
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href="tel:3464143426"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    (346) 414-3426
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Appointments</p>
                  <p className="text-sm text-muted-foreground">
                    Schedule online through CLS Health provider profile
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
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday - Sunday: Closed
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
                  <option>Female Urology</option>
                  <option>Male Urology</option>
                  <option>Voiding Dysfunction</option>
                  <option>Pelvic Reconstruction</option>
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
                This form is for appointment requests only. For medical emergencies, please
                call 911 or visit the nearest emergency room.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-sand">
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
