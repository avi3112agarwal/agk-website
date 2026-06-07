"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calculator,
  Home,
  ShoppingBag,
  Cloud,
  Cpu,
  Briefcase,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const industries = [
  { icon: Calculator, title: "CPA Firms", desc: "White-label staffing for tax & audit season." },
  { icon: Building2, title: "Accounting Firms", desc: "Capacity that scales with your client book." },
  { icon: Home, title: "Real Estate", desc: "Yardi & AppFolio workflows, trust accounting." },
  { icon: ShoppingBag, title: "E-commerce", desc: "Multi-channel reconciliation & inventory accounting." },
  { icon: Cloud, title: "SaaS Companies", desc: "Deferred revenue, ARR reporting, runway visibility." },
  { icon: Cpu, title: "IT Services", desc: "Project-based billing, vendor management, payroll." },
  { icon: Briefcase, title: "Professional Services", desc: "Time tracking, WIP, partner-ready reports." },
  { icon: Store, title: "SMEs", desc: "Founder-friendly finance stack, tax-ready books." },
];

export function Industries() {
  return (
    <section id="industries" className="section bg-ink-50/60 border-y border-ink-100">
      <Container>
        <SectionHeading
          eyebrow="Industries we serve"
          title={
            <>
              Built around the way{" "}
              <span className="text-gradient">your industry works</span>
            </>
          }
          description="We pair teams who already speak your software, your reporting cadence, and your compliance vocabulary."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-ink-100 hover:border-brand-200 transition"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-50 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                  <it.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
