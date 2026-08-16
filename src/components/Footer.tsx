import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { MotionToggle } from "@/components/MotionProvider";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <span className="font-serif text-2xl tracking-wide">Bilal Farhan, MD</span>
              <p className="mt-2 text-sm uppercase tracking-wider text-background/70">
                Urology & Pelvic Reconstruction
              </p>
            </div>
            <p className="text-sm leading-relaxed text-background/80">
              Board-certified urologist providing evidence-based, patient-centered care for
              female and male urology, voiding dysfunction, and pelvic reconstruction in
              Houston, TX.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">About Dr. Farhan</Link>
              </li>
              <li>
                <Link to="/female-urology" className="hover:text-white">Female Urology</Link>
              </li>
              <li>
                <Link to="/male-urology" className="hover:text-white">Male Urology</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white">Patient Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  CLS Health Urology - Southeast Houston
                  <br />
                  10950 Resource Parkway, Suite A
                  <br />
                  Houston, TX 77089
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:3464143426" className="hover:text-white">
                  (346) 414-3426
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>Schedule via CLS Health online booking</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg">Office Hours</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
              </li>
              <li className="text-background/60">Saturday - Sunday: Closed</li>
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-white hover:text-foreground"
              >
                Request a Consult
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-background/10 pt-8 text-center text-xs text-background/60">
          <MotionToggle />
          <p>
            &copy; {new Date().getFullYear()} Bilal Farhan, MD. All rights reserved. This
            website is for informational purposes and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
