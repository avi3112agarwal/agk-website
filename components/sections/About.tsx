"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Target, ShieldCheck, EyeOff, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Accuracy", desc: "Books that reconcile, reports that hold up to scrutiny." },
  { icon: ShieldCheck, title: "Integrity", desc: "We say what we'll do, and we do what we say." },
  { icon: EyeOff, title: "Confidentiality", desc: "Your data is treated like it's our own." },
  { icon: Zap, title: "Responsiveness", desc: "Proactive updates, no chasing for status." },
];

export function About() {
  return (
    <section id="about" className="section bg-ink-50/60 border-y border-ink-100">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">About AGK</span>
            <h2 className="h-display mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Your reliable{" "}
              <span className="text-gradient">accounting outsourcing partner</span>
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed">
              Anant Global KPO is a Chartered Accountant-led outsourcing firm
              focused on delivering accurate, reliable, and scalable accounting
              solutions for businesses and CPA firms worldwide. We combine
              accounting expertise, technology, and process excellence to help
              organizations operate more efficiently and make informed financial
              decisions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#contact">Talk to our team</Button>
              <Button variant="secondary" href="#process">
                See our process
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <v.icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
