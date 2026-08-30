import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Printer, Clock, Building2 } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-background/60">
                CLS Health
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-accent">
                Center for Advanced Urology
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

          <div>
            <h4 className="mb-6 font-serif text-lg">Care We Provide</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <Link to="/bph-holep" className="hover:text-white">BPH & HoLEP</Link>
              </li>
              <li>
                <Link to="/male-urology" className="hover:text-white">Male Urology & Continence</Link>
              </li>
              <li>
                <Link to="/female-urology" className="hover:text-white">Female Urology & Mesh Complications</Link>
              </li>
              <li>
                <Link to="/voiding-dysfunction" className="hover:text-white">Voiding Dysfunction & OAB</Link>
              </li>
              <li>
                <Link to="/pelvic-reconstruction" className="hover:text-white">Urethral & Pelvic Reconstruction</Link>
              </li>
              <li>
                <Link to="/kidney-stones" className="hover:text-white">Kidney Stones</Link>
              </li>
              <li>
                <Link to="/second-opinions" className="hover:text-white">Second Opinions & Revision Care</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  10950 Resource Pkwy
                  <br />
                  Houston, TX 77089
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
            <h4 className="mb-6 font-serif text-lg">Appointments</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>In-person and telehealth appointments available</span>
              </li>
              <li className="text-background/60">
                Mon–Fri 7 AM–7 PM · Sat 9 AM–1 PM · Sun closed
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
