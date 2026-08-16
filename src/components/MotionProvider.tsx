import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Sparkles, Waves } from "lucide-react";

const STORAGE_KEY = "bf-motion-pref";

type MotionContextValue = {
  reduced: boolean;
  setReduced: (value: boolean) => void;
  toggle: () => void;
};

const MotionContext = createContext<MotionContextValue>({
  reduced: false,
  setReduced: () => {},
  toggle: () => {},
});

export function MotionProvider({ children }: { children: ReactNode }) {
  const [reduced, setReducedState] = useState(false);

  // Initialize after hydration: stored preference wins, otherwise the OS setting.
  useEffect(() => {
    let initial = false;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "reduced") initial = true;
      else if (stored === "full") initial = false;
      else initial = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      initial = false;
    }
    setReducedState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.dataset["motion"] = reduced ? "reduced" : "full";
  }, [reduced]);

  const setReduced = useCallback((value: boolean) => {
    setReducedState(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value ? "reduced" : "full");
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ reduced, setReduced, toggle: () => setReduced(!reduced) }),
    [reduced, setReduced]
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotion() {
  return useContext(MotionContext);
}

export function MotionToggle({ className = "" }: { className?: string }) {
  const { reduced, toggle } = useMotion();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={reduced}
      title={reduced ? "Turn animations on" : "Reduce animations"}
      className={`flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/90 transition-colors hover:bg-white/20 ${className}`}
    >
      {reduced ? <Waves className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
      <span className="hidden xl:inline">{reduced ? "Motion off" : "Motion on"}</span>
      <span className="xl:hidden">{reduced ? "Off" : "On"}</span>
    </button>
  );
}
