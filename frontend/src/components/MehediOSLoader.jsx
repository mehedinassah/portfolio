import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DURATION = 3200; // ~3.2s brew, plus a short hold + fade

export default function MehediOSLoader({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setProgress(100);
    setLeaving(true);
    setTimeout(() => onCompleteRef.current?.(), 450);
  };

  useEffect(() => {
    const ms = prefersReducedMotion ? 400 : DURATION;
    const start = Date.now();
    // wall-clock progress (robust to mobile rAF/interval throttling)
    const interval = setInterval(() => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / ms) * 100));
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 80);
    // guaranteed completion even if the tab was throttled/backgrounded
    const done = setTimeout(finish, ms + 250);
    return () => {
      clearInterval(interval);
      clearTimeout(done);
    };
  }, [prefersReducedMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink px-6 text-paper"
      initial={{ opacity: 1 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      aria-hidden={leaving}
    >
      {/* steam + cup */}
      <div className="relative">
        {!prefersReducedMotion ? (
          <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 gap-2.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="steam" style={{ animationDelay: `${i * 0.5}s` }} />
            ))}
          </div>
        ) : null}

        <div className="relative mx-auto h-28 w-24">
          {/* mug body, tea fills from the bottom */}
          <div className="absolute inset-0 overflow-hidden rounded-b-2xl border-2 border-paper bg-paper/5">
            <div
              className="absolute bottom-0 left-0 w-full transition-[height] duration-150 ease-linear"
              style={{ height: `${progress}%`, background: "linear-gradient(180deg,#cda06a,#a96f3b)" }}
            >
              <div className="h-1.5 w-full bg-[#e7cda1]/80" />
            </div>
          </div>
          {/* handle */}
          <div className="absolute -right-4 top-8 h-10 w-6 rounded-r-full border-2 border-l-0 border-paper" />
        </div>
      </div>

      <p className="mt-10 text-center font-display text-3xl uppercase leading-none md:text-4xl">
        Making chaa for me<span className="text-accent">.</span>
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-paper/60">Give me a sec 🍵</p>

      <div className="mt-8 w-full max-w-sm">
        <div className="h-2 w-full border-2 border-paper/40">
          <div
            className="h-full bg-accent transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
          <button type="button" onClick={finish} className="transition-colors hover:text-accent">
            [ skip ]
          </button>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
