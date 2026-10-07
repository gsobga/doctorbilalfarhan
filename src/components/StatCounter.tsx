interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

// Renders the final value directly so server HTML, crawlers, and screen readers
// always see the real number. Entrance motion comes from the surrounding <Reveal>.
export function StatCounter({ value, suffix = "", prefix = "", className = "" }: StatCounterProps) {
  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
