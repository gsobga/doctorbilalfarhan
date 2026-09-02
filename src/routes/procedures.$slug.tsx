import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Download, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FaqSection } from "@/components/FaqSection";
import { BOOKING_URL } from "@/lib/booking";
import { getProcedure, procedures } from "@/lib/procedures";

export const Route = createFileRoute("/procedures/$slug")({
  loader: ({ params }) => {
    const procedure = getProcedure(params.slug);
    if (!procedure) throw notFound();
    return { procedure };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Procedure not found — Bilal Farhan, MD" }, { name: "robots", content: "noindex" }],
      };
    }
    const { procedure } = loaderData;
    const title = `${procedure.shortName} — Patient Guide | Bilal Farhan, MD, FACS`;
    const url = `https://drbilalfarhan.dev/procedures/${procedure.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: procedure.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: procedure.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: ProcedureNotFound,
  component: ProcedurePage,
});

function ProcedureNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-40 text-center lg:px-6">
      <h1 className="font-serif text-3xl text-primary">Procedure guide not found</h1>
      <p className="mt-4 text-muted-foreground">
        This guide may have moved. Browse the full procedure library instead.
      </p>
      <Link
        to="/procedures"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Procedure Library
      </Link>
    </main>
  );
}

function ProcedurePage() {
  const { procedure } = Route.useLoaderData();
  const related = procedures.filter(
    (p) => p.category === procedure.category && p.slug !== procedure.slug
  );

  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary pb-16 pt-36 text-primary-foreground lg:pt-44">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--glow)_35%,transparent),transparent_70%)] blur-2xl"
        />
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <Link
            to="/procedures"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Procedure Library
          </Link>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            {procedure.category}
          </p>
          <h1 className="mt-4 font-serif text-3xl leading-tight lg:text-5xl">{procedure.name}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
            {procedure.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <CalendarDays className="h-4 w-4" />
              Request an Appointment
            </a>
            {procedure.relatedCondition && (
              <Link
                to={procedure.relatedCondition.to}
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {procedure.relatedCondition.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:px-6">
        <div className="space-y-10">
          {procedure.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 40}>
              <article id={`s-${i}`} className="scroll-mt-32">
                <h2 className="font-serif text-2xl text-primary">{section.heading}</h2>
                <span className="mt-3 block h-px w-12 bg-accent" />
                {section.body && (
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                )}
                {section.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <nav className="rounded-lg border border-border bg-card p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              On this page
            </p>
            <ul className="mt-4 space-y-2">
              {procedure.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s-${i}`}
                    className="block text-sm leading-snug text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 space-y-3 rounded-lg border border-border bg-secondary/50 p-5">
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              A short video from Dr. Farhan explaining {procedure.shortName} is coming to this page.
            </p>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <Download className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              A downloadable {procedure.shortName} patient guide will be available here.
            </p>
            <Link
              to="/preparing-for-your-procedure"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Preparing for your procedure
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>

      <FaqSection heading={`${procedure.shortName}: Frequently Asked Questions`} faqs={procedure.faqs} />

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-20 lg:px-6">
          <Reveal>
            <h2 className="font-serif text-2xl text-primary">Related procedures</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  to="/procedures/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-medium text-primary">{p.shortName}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <h2 className="font-serif text-3xl">Listen first. Diagnose carefully. Explain the options. Decide together.</h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground"
          >
            <CalendarDays className="h-4 w-4" />
            Request an Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
