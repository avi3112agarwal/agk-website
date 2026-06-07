"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  CalendarClock,
  Layers,
  Timer,
  PiggyBank,
  Globe2,
} from "lucide-react";

type Stat = {
  icon: typeof CalendarClock;
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  {
    icon: CalendarClock,
    value: 8,
    suffix: "+",
    label: "Years of Experience",
    sub: "Across CPA & SME engagements",
  },
  {
    icon: Layers,
    value: 25,
    suffix: "+",
    label: "Software Expertise",
    sub: "Accounting, communication & doc tools",
  },
  {
    icon: Timer,
    prefix: "<",
    value: 20,
    suffix: "min",
    label: "Turnaround Time",
    sub: "Avg. response on client queries",
  },
  {
    icon: PiggyBank,
    value: 60,
    suffix: "%",
    label: "Up to Increased Savings",
    sub: "Vs. in-house US hiring",
  },
  {
    icon: Globe2,
    value: 5,
    suffix: "+",
    label: "Countries Served",
    sub: "India, USA, UAE, AU & NZ",
  },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val}</span>;
}

export function Stats() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-y border-ink-100 bg-gradient-to-br from-ink-900 via-brand-900 to-brand-800"
    >
      {/* Animated background flourishes */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl animate-blob-drift" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl animate-blob-drift" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
            Our journey so far
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.15] text-white sm:text-4xl sm:leading-[1.1] lg:text-5xl">
            Validated by our trusted clients.{" "}
            <span className="bg-gradient-to-r from-accent-400 to-brand-300 bg-clip-text text-transparent">
              Impact at a glance.
            </span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:mt-14 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all hover:border-accent-400/60 hover:bg-white/[0.08] sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-300">
                <s.icon size={18} />
              </div>

              <div className="mt-4 flex items-baseline gap-0.5 font-display text-3xl font-bold leading-none text-white sm:text-5xl">
                {s.prefix && <span className="text-accent-400">{s.prefix}</span>}
                <Counter to={s.value} />
                {s.suffix && (
                  <span className="text-accent-400">{s.suffix}</span>
                )}
              </div>

              <p className="mt-2 text-sm font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-brand-100/70">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
