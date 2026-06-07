"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  PiggyBank,
  Users,
  Clock,
  Workflow,
  Expand,
  Lock,
  MessageSquareText,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    icon: GraduationCap,
    title: "Qualified professionals",
    desc: "Chartered Accountants and accounting specialists, not generalist VAs.",
  },
  {
    icon: PiggyBank,
    title: "Significant cost savings",
    desc: "Reduce accounting costs materially compared to in-house US hiring.",
  },
  {
    icon: Users,
    title: "Dedicated resources",
    desc: "A team that becomes a true extension of your firm — same people, every day.",
  },
  {
    icon: Clock,
    title: "Time-zone flexibility",
    desc: "Working hours overlap with US business hours for real-time collaboration.",
  },
  {
    icon: Workflow,
    title: "Process driven",
    desc: "Documented SOPs, review checklists and quality controls on every engagement.",
  },
  {
    icon: Expand,
    title: "Scalable",
    desc: "Scale resources up during busy season, dial back when volume drops.",
  },
  {
    icon: Lock,
    title: "Secure",
    desc: "Confidentiality agreements, restricted access and secure workflows by default.",
  },
  {
    icon: MessageSquareText,
    title: "Responsive",
    desc: "Fast communication, proactive updates and a single point of accountability.",
  },
];

export function WhyAgk() {
  return (
    <section id="why-agk" className="section relative">
      <Container>
        <SectionHeading
          eyebrow="Why AGK"
          title={
            <>
              The reasons firms{" "}
              <span className="text-gradient">stay with us for years</span>
            </>
          }
          description="We're not a staffing agency — we're an accounting partner that takes operational ownership of the work."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.04 }}
              className="group bg-white p-7 hover:bg-ink-50/60 transition-colors"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition">
                <p.icon size={18} />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
