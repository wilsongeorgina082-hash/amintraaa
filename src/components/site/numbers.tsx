"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "./reveal";

type Counter = {
  target: number;
  suffix: string;
  label: string;
  support: string;
};

const COUNTERS: Counter[] = [
  {
    target: 1,
    suffix: "",
    label: "Point of contact",
    support: "You work directly with me.",
  },
  {
    target: 4,
    suffix: "",
    label: "Simple steps",
    support: "Talk. Build. Review. Launch.",
  },
  {
    target: 5,
    suffix: "",
    label: "Ways I can help",
    support: "Design, build, setup, launch and updates.",
  },
  {
    target: 100,
    suffix: "%",
    label: "Your domain",
    support: "Set up in your own name.",
  },
];

/**
 * Counts upward from zero once the section enters the viewport.
 * 1.6s, smooth ease-out, runs once. Respects reduced motion.
 */
function useCountUp(target: number, start: boolean) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || reduceMotion) return;
    const duration = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, reduceMotion]);

  // Reduced motion: show the final number with no animation.
  return start && reduceMotion ? target : value;
}

function CounterItem({
  counter,
  first,
}: {
  counter: Counter;
  first: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const value = useCountUp(counter.target, inView);

  return (
    <div
      ref={ref}
      className={`border-t border-line pt-6 lg:border-t-0 lg:pt-1 ${
        first ? "" : "lg:border-l lg:border-line/80 lg:pl-8"
      }`}
    >
      <p
        aria-label={`${counter.target}${counter.suffix}`}
        className="text-[clamp(2.9rem,5.5vw,4.3rem)] font-medium leading-none tracking-[-0.03em] text-ink tabular-nums"
      >
        {String(value).padStart(2, "0")}
        {counter.suffix && (
          <span className="text-[0.52em] text-sky-600">{counter.suffix}</span>
        )}
      </p>
      <h3 className="mt-4 text-[15.5px] font-medium tracking-[-0.01em] text-ink">
        {counter.label}
      </h3>
      <p className="mt-1 text-[14px] leading-[1.6] text-muted-ink">
        {counter.support}
      </p>
    </div>
  );
}

/**
 * The Amintra Way — minimal editorial number section.
 * Large numbers, small labels, thin separators. No cards.
 */
export function Numbers() {
  return (
    <section
      id="the-amintra-way"
      aria-labelledby="numbers-heading"
      className="border-y border-line/70 bg-white"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[34rem] text-center">
          <Reveal>
            <p className="meta-label text-sky-700">The Amintra way</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="numbers-heading"
              className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
            >
              Simple by design.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-muted-ink">
              A few simple things about how I work.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {COUNTERS.map((counter, i) => (
            <CounterItem key={counter.label} counter={counter} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
