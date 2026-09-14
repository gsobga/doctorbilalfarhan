import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Care",
    to: "/bph-holep",
    children: [
      { label: "BPH & HoLEP", to: "/bph-holep" },
      { label: "Men's Health & Continence", to: "/male-urology" },
      { label: "Women's Health", to: "/female-urology" },
      { label: "Voiding Dysfunction & OAB", to: "/voiding-dysfunction" },
      { label: "Urethral & Pelvic Reconstruction", to: "/pelvic-reconstruction" },
      { label: "Kidney Stones", to: "/kidney-stones" },
    ],
  },
  {
    label: "Patient Education",
    to: "/patient-education",
    children: [
      { label: "Patient Education Home", to: "/patient-education" },
      { label: "Procedure Library", to: "/procedures" },
      { label: "Preparing for Your Procedure", to: "/preparing-for-your-procedure" },
      { label: "Educational Videos", to: "/videos" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Meet Dr. Farhan", to: "/about" },
      { label: "Academic Career at UTMB", to: "/academic-career" },
      { label: "Awards & Recognition", to: "/awards" },
      { label: "Global Surgery & Humanitarian Service", to: "/global-surgery" },
    ],
  },
  { label: "Second Opinions", to: "/second-opinions" },
  
  { label: "Insurance", to: "/insurance" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-primary-foreground transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl saturate-150"
          : "bg-primary/95"
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-glow/60 to-transparent"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <div className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-serif text-2xl tracking-wide lg:text-3xl">
              Bilal Farhan, MD, FACS
            </span>
            <span className="mt-1.5 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-accent lg:text-sm">
              Center for Advanced Urology <span className="hidden sm:inline">· CLS Health</span>
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href="tel:3464143426"
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-primary-foreground/90 hover:text-white"
          >
            <Phone className="h-4 w-4 text-accent" />
            (346) 414-3426
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request a Consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          variant="ghost"
          size="icon"
          className="min-h-11 min-w-11 p-2 text-primary-foreground xl:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Desktop nav row */}
      <nav className="mx-auto hidden max-w-7xl items-center justify-center gap-6 px-4 pb-3 xl:flex">
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label} className="group relative">
              <Link
                to={item.to}
                activeProps={{ className: "text-primary-foreground border-b-2 border-accent" }}
                className="flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent py-2 text-sm font-medium uppercase tracking-[0.1em] text-primary-foreground/85 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
                <div className="invisible absolute left-0 top-full min-w-[280px] translate-y-2 rounded-b-md bg-card py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      activeProps={{ className: "bg-secondary text-primary" }}
                      className="block min-h-11 px-5 py-3 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
            </div>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              activeProps={{
                className: "text-white border-b-2 border-accent",
              }}
              className="whitespace-nowrap border-b-2 border-transparent py-2 text-sm font-medium uppercase tracking-[0.1em] text-primary-foreground/85 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>


      {/* Mobile nav */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-primary px-4 pb-6 xl:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                      className="flex min-h-11 w-full items-center justify-between py-3 text-left text-sm font-medium uppercase tracking-wider text-primary-foreground/90"
                      aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {openDropdown === item.label && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="block min-h-11 py-3 text-sm text-primary-foreground/80 hover:text-primary-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground/90 hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="tel:3464143426"
              className="mt-4 flex items-center gap-2 py-3 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4" />
              346-414-3426
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-sm bg-white px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Request Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
