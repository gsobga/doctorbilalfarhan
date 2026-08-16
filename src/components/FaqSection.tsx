import { Reveal } from "@/components/Reveal";

export type Faq = { question: string; answer: string };

export function FaqSection({
  heading = "Frequently Asked Questions",
  faqs,
}: {
  heading?: string;
  faqs: Faq[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 lg:px-6">
      <Reveal>
        <h2 className="text-center font-serif text-3xl text-foreground lg:text-4xl">
          {heading}
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-border rounded-sm border border-border bg-card">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 60}>
            <details className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-foreground">
                {faq.question}
                <span className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
