import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useMotion } from "@/components/MotionProvider";

export type ProcedureSlide = {
  title: string;
  category: string;
  description: string;
  image: string;
  facts: string[];
};

interface ProcedureGalleryProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  slides: ProcedureSlide[];
}

const AUTOPLAY_MS = 6500;

export function ProcedureGallery({
  eyebrow = "Procedure Gallery",
  heading,
  intro,
  slides,
}: ProcedureGalleryProps) {
  const { reduced } = useMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const go = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length);
      setProgress(0);
    },
    [slides.length]
  );

  const autoplayOn = playing && !reduced;

  useEffect(() => {
    if (!autoplayOn) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const pct = Math.min(1, (now - start) / AUTOPLAY_MS);
      setProgress(pct);
      if (pct >= 1) {
        setIndex((i) => (i + 1) % slides.length);
        setProgress(0);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [autoplayOn, index, slides.length]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <section className="relative overflow-hidden bg-hero py-20 text-hero-foreground">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-field opacity-40 motion-safe:animate-grid"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 aurora-field opacity-30 motion-safe:animate-aurora"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <p className="text-[11px] uppercase tracking-[0.35em] text-hero-foreground/70">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl lg:text-4xl">{heading}</h2>
        {intro && (
          <p className="mt-4 max-w-2xl leading-relaxed text-hero-foreground/80">{intro}</p>
        )}

        <div
          ref={containerRef}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={heading}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
          className="mt-10 rounded-lg glass-dark p-3 outline-none focus-visible:ring-2 focus-visible:ring-glow/70 sm:p-4"
        >
          <div className="relative overflow-hidden rounded-md">
            <div
              className="flex motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <article
                  key={slide.title}
                  aria-hidden={i !== index}
                  className="grid w-full shrink-0 gap-0 md:grid-cols-2"
                >
                  <div className="relative h-56 overflow-hidden sm:h-72 md:h-full md:min-h-[360px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                        i === index && !reduced ? "scale-110" : "scale-100"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-hero/80 via-hero/10 to-transparent"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {slide.category}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
                    <h3 className="font-serif text-2xl lg:text-3xl">{slide.title}</h3>
                    <p className="leading-relaxed text-hero-foreground/80">
                      {slide.description}
                    </p>
                    <ul className="mt-2 grid gap-2">
                      {slide.facts.map((fact) => (
                        <li
                          key={fact}
                          className="flex items-start gap-2 text-sm text-hero-foreground/75"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex flex-wrap items-center gap-3 px-1">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous procedure"
              className="rounded-full border border-white/25 p-2 text-white/90 transition-colors hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next procedure"
              className="rounded-full border border-white/25 p-2 text-white/90 transition-colors hover:bg-white/15"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex flex-1 items-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show ${slide.title}`}
                  aria-current={i === index}
                  className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20"
                >
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-accent"
                    style={{
                      width:
                        i < index
                          ? "100%"
                          : i === index
                            ? `${Math.max(reduced ? 100 : 8, progress * 100)}%`
                            : "0%",
                    }}
                  />
                </button>
              ))}
            </div>

            {!reduced && (
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause gallery" : "Play gallery"}
                className="rounded-full border border-white/25 p-2 text-white/90 transition-colors hover:bg-white/15"
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
