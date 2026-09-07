import { useMemo, useState } from "react";
import { ClipboardList, Printer, RotateCcw } from "lucide-react";

type Questionnaire = {
  id: string;
  title: string;
  audience: string;
  intro: string;
  scale: string[];
  questions: string[];
  interpret: (score: number) => string;
  maxNote?: string;
};

const ipss: Questionnaire = {
  id: "ipss",
  title: "Prostate Symptom Score (IPSS)",
  audience: "For men with urinary symptoms from an enlarged prostate (BPH)",
  intro:
    "Over the past month, how often have you experienced the following? Select one answer for each question.",
  scale: ["Not at all", "Less than 1 in 5 times", "Less than half the time", "About half the time", "More than half the time", "Almost always"],
  questions: [
    "Incomplete emptying: a feeling that your bladder does not empty completely",
    "Frequency: urinating again less than two hours after you finished",
    "Intermittency: stopping and starting again several times while urinating",
    "Urgency: finding it difficult to postpone urination",
    "Weak stream: a weak urinary stream",
    "Straining: having to push or strain to begin urination",
    "Nocturia: how many times you get up to urinate from going to bed until getting up in the morning (0 = none, 5 = five or more times)",
  ],
  interpret: (s) =>
    s <= 7
      ? "Mild symptoms. Worth discussing if they bother you."
      : s <= 19
        ? "Moderate symptoms. An evaluation is usually worthwhile."
        : "Severe symptoms. An evaluation is recommended; effective treatments exist.",
};

const oab: Questionnaire = {
  id: "oab",
  title: "Overactive Bladder Screener (OAB-V8)",
  audience: "For men and women bothered by urgency, frequency, or leakage",
  intro:
    "How bothered have you been by the following over the past four weeks? Select one answer for each question.",
  scale: ["Not at all", "A little bit", "Somewhat", "Quite a bit", "A great deal", "A very great deal"],
  questions: [
    "Frequent urination during the daytime",
    "An uncomfortable urge to urinate",
    "A sudden urge to urinate with little or no warning",
    "Accidental loss of small amounts of urine",
    "Nighttime urination",
    "Waking up at night because you had to urinate",
    "An uncontrollable urge to urinate",
    "Urine loss associated with a strong desire to urinate",
  ],
  interpret: (s) =>
    s < 8
      ? "Your score is below the usual threshold for overactive bladder. Discuss any symptoms that still bother you."
      : "Your score is in the range consistent with overactive bladder. An evaluation can identify the cause and the right treatment.",
};

function Scorer({ q }: { q: Questionnaire }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(q.questions.length).fill(null)
  );

  const answered = answers.filter((a) => a !== null).length;
  const score = useMemo(
    () => answers.reduce<number>((sum, a) => sum + (a ?? 0), 0),
    [answers]
  );
  const complete = answered === q.questions.length;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8 print:border-0 print:p-0 print:shadow-none">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl text-primary lg:text-2xl">{q.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{q.audience}</p>
        </div>
        <div className="flex gap-2 print:hidden">
          <button
            type="button"
            onClick={() => setAnswers(Array(q.questions.length).fill(null))}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-accent/50 hover:text-primary"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Printer className="h-3.5 w-3.5" />
            Print / Save PDF
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{q.intro}</p>

      <div className="mt-6 space-y-6">
        {q.questions.map((question, qi) => (
          <fieldset key={question} className="rounded-xl bg-secondary/40 p-4 print:bg-transparent print:p-2">
            <legend className="sr-only">{question}</legend>
            <p className="text-sm font-medium text-foreground">
              <span className="mr-2 font-semibold text-accent">{qi + 1}.</span>
              {question}
            </p>
            <div className="mt-3 grid gap-1.5 sm:grid-cols-3 lg:grid-cols-6">
              {q.scale.map((label, vi) => (
                <label
                  key={label}
                  className={`flex cursor-pointer items-center gap-2 rounded-md border px-2.5 py-2 text-xs transition-colors ${
                    answers[qi] === vi
                      ? "border-accent bg-accent/10 font-semibold text-primary"
                      : "border-border bg-card text-muted-foreground hover:border-accent/40"
                  }`}
                >
                  <input
                    type="radio"
                    name={`${q.id}-${qi}`}
                    checked={answers[qi] === vi}
                    onChange={() =>
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[qi] = vi;
                        return next;
                      })
                    }
                    className="h-3.5 w-3.5 accent-[var(--accent)]"
                  />
                  <span>
                    <span className="font-semibold">{vi}</span> · {label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.18em] text-primary-foreground/70">
            Your score
          </p>
          <p className="font-serif text-3xl">
            {complete ? score : "—"}
            <span className="ml-1 text-sm text-primary-foreground/60">
              / {q.questions.length * (q.scale.length - 1)}
            </span>
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">
          {complete
            ? q.interpret(score)
            : `Answer all ${q.questions.length} questions to see your score (${answered} of ${q.questions.length} answered).`}
        </p>
      </div>
    </div>
  );
}

export function SymptomQuestionnaires() {
  const [active, setActive] = useState<string>(ipss.id);
  const questionnaires = [ipss, oab];
  const current = questionnaires.find((q) => q.id === active) ?? ipss;

  return (
    <div>
      <div className="flex flex-wrap gap-2 print:hidden">
        {questionnaires.map((q) => (
          <button
            key={q.id}
            type="button"
            onClick={() => setActive(q.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === q.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-primary hover:border-accent/50"
            }`}
          >
            <ClipboardList className="h-4 w-4" />
            {q.title}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <Scorer key={current.id} q={current} />
      </div>

      <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground print:hidden">
        These questionnaires are validated screening tools used in urology clinics. They do
        not diagnose a condition by themselves. Print or save your result and bring it to
        your appointment so Dr. Farhan can review it with you. Nothing you enter is stored
        or sent anywhere — the form works entirely on your device.
      </p>
    </div>
  );
}
