"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Discovery call",
    desc: "Understand your volume, software, pain points and goals.",
  },
  {
    n: "02",
    title: "Process assessment",
    desc: "Map current workflows, gaps, and design the engagement.",
  },
  {
    n: "03",
    title: "Team allocation",
    desc: "Match a CA-led team to your industry and stack.",
  },
  {
    n: "04",
    title: "Knowledge transfer",
    desc: "Structured KT with documented SOPs and shadow runs.",
  },
  {
    n: "05",
    title: "Go live",
    desc: "Take operational ownership with daily/weekly reporting.",
  },
  {
    n: "06",
    title: "Continuous improvement",
    desc: "QBRs, automation, scope expansion as you grow.",
  },
];

export function Process() {
  return (
    <section id="process" className="section bg-ink-900 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our process"
          title={
            <span className="text-white">
              From first call to fully{" "}
              <span className="text-gradient">embedded team</span>
            </span>
          }
          description={
            <span className="text-ink-300">
              A repeatable, transparent onboarding playbook so you know what
              happens in week 1, week 4 and week 12.
            </span>
          }
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="relative rounded-2xl border border-ink-800 bg-ink-800/40 backdrop-blur p-7 hover:border-brand-600/60 transition"
            >
              <div className="font-display text-3xl font-semibold text-gradient">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
