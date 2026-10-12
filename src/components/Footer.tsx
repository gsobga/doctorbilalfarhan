import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Printer, Clock, Building2 } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

const footerGroups = [
  {
    heading: "Care",
    links: [
      { label: "BPH & HoLEP", to: "/bph-holep" },
      { label: "Male Urinary Incontinence", to: "/male-urology" },
      { label: "Women's Urology", to: "/female-urology" },
      { label: "Voiding Dysfunction & OAB", to: "/voiding-dysfunction" },
      { label: "Urethral & Pelvic Reconstruction", to: "/pelvic-reconstruction" },
      { label: "Kidney Stones", to: "/kidney-stones" },
      { label: "Second Opinions & Revision Care", to: "/second-opinions" },
    ],
  },
  {
    heading: "Patient Resources",
    links: [
      { label: "Patient Education", to: "/patient-education" },
      { label: "Procedure Library", to: "/procedures" },
      { label: "Preparing for Your Procedure", to: "/preparing-for-your-procedure" },
      { label: "Educational Videos", to: "/videos" },
      { label: "Insurance", to: "/insurance" },
      { label: "Contact & Scheduling", to: "/contact" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "About Dr. Farhan", to: "/about" },
      { label: "Academic Career", to: "/academic-career" },
      { label: "Awards & Recognition", to: "/awards" },
      { label: "Global Surgery & Humanitarian Service", to: "/global-surgery" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-background/60">
              CLS Health
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Center for Advanced Urology · CLS Health
            </p>
              <span className="mt-3 block font-serif text-2xl tracking-wide">
                Bilal Farhan, MD, FACS
              </span>
              <p className="mt-2 text-sm uppercase tracking-wider text-background/70">
                Functional • Reconstructive • Minimally Invasive Urology
              </p>
            </div>
            <p className="text-sm leading-relaxed text-background/80">
              Fellowship-trained functional and reconstructive urologist and former
              Associate Professor of Urology, caring for men and women in Houston,
              Pearland, Clear Lake, Webster, Friendswood, League City, and Pasadena.
            </p>
            <p className="mt-4 text-sm text-background/70">
              Care is available in English and Arabic.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-3 md:col-span-2 lg:col-span-2">
            {footerGroups.map((group) => (
              <div key={group.heading}>
                <h2 className="mb-4 font-serif text-lg">{group.heading}</h2>
                <ul className="space-y-2.5 text-sm text-background/80">
                  {group.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="rounded-sm hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div>
            <h2 className="mb-6 font-serif text-lg">Contact</h2>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  780 Clear Lake City Blvd, Bldg 2
                  <br />
                  Webster, TX 77598
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:3464143426" className="hover:text-white">
                  346-414-3426
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="h-4 w-4 shrink-0 text-accent" />
                <span>Fax 346-400-4338</span>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="h-4 w-4 shrink-0 text-accent opacity-0" aria-hidden />
                <a href="mailto:drfarhan@cls.health" className="hover:text-white">
                  drfarhan@cls.health
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  Memorial Hermann Southeast
                  <br />
                  HCA Houston Pearland
                  <br />
                  HCA Houston Clear Lake
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-serif text-lg">Appointments</h2>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>In-person and telehealth appointments available</span>
              </li>
              <li className="text-background/60">
                Mon–Fri 7 AM–5 PM · Sat 9 AM–1 PM · Sun closed
              </li>
            </ul>
            <div className="mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-white hover:text-foreground"
              >
                Schedule an Appointment
              </a>
              <p className="mt-3 text-xs text-background/60">
                Need help scheduling? Call 346-414-3426
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-4 border-t border-background/10 pt-8 text-xs leading-relaxed text-background/60">
          <p>
            Medical disclaimer: Information provided on this website is intended for
            general educational purposes and should not be considered a substitute for
            individualized medical evaluation, diagnosis, or treatment. Treatment
            recommendations vary based on each patient&apos;s medical history, examination,
            diagnostic testing, goals, and individual circumstances. Viewing this website
            or submitting an online inquiry does not establish a physician-patient
            relationship.
          </p>
          <p>
            Please do not send sensitive medical information through this website. Call
            346-414-3426 to discuss protected health information securely.
          </p>
          <p>&copy; {new Date().getFullYear()} Bilal Farhan, MD, FACS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
