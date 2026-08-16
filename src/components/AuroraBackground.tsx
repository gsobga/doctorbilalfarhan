interface AuroraBackgroundProps {
  variant?: "light" | "dark";
  grid?: boolean;
  className?: string;
}

export function AuroraBackground({
  variant = "light",
  grid = true,
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`absolute -inset-[20%] aurora-field animate-aurora ${
          variant === "light" ? "opacity-25" : "opacity-50"
        }`}
      />
      {grid && <div className="absolute inset-0 grid-field animate-grid opacity-60" />}
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-glow/20 blur-3xl animate-float" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-glow-2/20 blur-3xl animate-float-slow" />
    </div>
  );
}
