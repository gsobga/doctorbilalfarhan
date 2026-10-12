import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { procedures } from "@/lib/procedures";

const SITE = "https://drbilalfarhan.dev";

const labels: Record<string, string> = {
  about: "About",
  "bph-holep": "BPH & HoLEP",
  "male-urology": "Male Urinary Incontinence",
  "female-urology": "Women's Urology",
  "voiding-dysfunction": "Voiding Dysfunction & OAB",
  "pelvic-reconstruction": "Urethral & Pelvic Reconstruction",
  "kidney-stones": "Kidney Stones",
  "second-opinions": "Second Opinions",
  "patient-education": "Patient Education",
  insurance: "Insurance",
  contact: "Contact",
  "academic-career": "Academic Career",
  awards: "Awards & Recognition",
  "global-surgery": "Global Surgery",
  procedures: "Procedure Library",
  "preparing-for-your-procedure": "Preparing for Your Procedure",
  videos: "Educational Videos",
};

/** Visible breadcrumb trail plus matching BreadcrumbList JSON-LD, derived from the URL. */
export function Breadcrumbs({ className = "" }: { className?: string }) {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const items = [{ name: "Home", path: "/" }];
  parts.forEach((part, i) => {
    const path = "/" + parts.slice(0, i + 1).join("/");
    const name =
      i > 0 && parts[0] === "procedures"
        ? (procedures.find((p) => p.slug === part)?.name ?? part)
        : (labels[part] ?? part);
    items.push({ name, path });
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE : SITE + item.path,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-primary-foreground/75">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-primary-foreground">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="rounded-sm hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
