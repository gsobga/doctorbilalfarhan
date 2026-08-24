import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Care",
    to: "/bph-holep",
    children: [
      { label: "BPH & HoLEP", to: "/bph-holep" },
      { label: "Male Urology & Continence", to: "/male-urology" },
      { label: "Female Urology & Mesh", to: "/female-urology" },
      { label: "Voiding Dysfunction & OAB", to: "/voiding-dysfunction" },
      { label: "Urethral & Pelvic Reconstruction", to: "/pelvic-reconstruction" },
      { label: "Kidney Stones", to: "/kidney-stones" },
    ],
  },
  { label: "Second Opinions", to: "/second-opinions" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
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
        <Link to="/" className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="text-[9px] uppercase tracking-[0.3em] text-primary-foreground/70">
              Center for Advanced Urology
            </span>
            <span className="mt-1.5 font-serif text-xl tracking-wide lg:text-2xl">
              Bilal Farhan, MD, FACS
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground/80">
              Functional • Reconstructive • Minimally Invasive
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground/90 transition-colors hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 min-w-[260px] rounded-b-md bg-white py-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-sand hover:text-primary"
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
                activeProps={{ className: "text-white underline underline-offset-8" }}
                className="py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href="tel:3464143426"
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-primary-foreground/90 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            346-414-3426
          </a>
          <Link
            to="/contact"
            className="rounded-sm border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary"
          >
            Schedule an Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-white xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-primary px-4 pb-6 xl:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium uppercase tracking-wider text-primary-foreground/90"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-primary-foreground/80 hover:text-white"
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
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-sm bg-white px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Schedule an Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
