"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const rows = [
  { label: "Base salary", us: "$60k – $85k / year", agk: "Fixed monthly fee" },
  { label: "Benefits & taxes", us: "+20–30% loaded cost", agk: "Included" },
  { label: "Recruitment & training", us: "Weeks of effort + agency fees", agk: "We handle it" },
  { label: "Office, hardware, software", us: "Your overhead", agk: "Included" },
  { label: "Scale up / scale down", us: "Hire/fire cycles", agk: "Flexible by month" },
  { label: "Backup coverage", us: "PTO = work stops", agk: "Pod-based continuity" },
  { label: "Time to productivity", us: "60–90 days", agk: "2–4 weeks" },
];

export function CostComparison() {
  return (
    <section id="pricing" className="section relative">
      <Container>
        <SectionHeading
          eyebrow="Cost comparison"
          title={
            <>
              The real cost of a US in-house hire vs.{" "}
              <span className="text-gradient">an AGK dedicated team</span>
            </>
          }
          description="A side-by-side look at total cost of ownership. Most clients see meaningful savings within the first quarter."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-3xl border border-ink-100 shadow-soft bg-white"
        >
          {/* Header row — desktop only; mobile uses per-row inline labels */}
          <div className="hidden md:grid md:grid-cols-3">
            <div className="border-b border-ink-100 bg-ink-50/60 p-6 md:border-b-0 md:border-r">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                What you&apos;re comparing
              </div>
            </div>
            <div className="border-b border-ink-100 p-6 md:border-b-0 md:border-r">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                US In-house Accountant
              </div>
              <div className="mt-2 font-display text-2xl font-semibold text-ink-900">
                High fixed overhead
              </div>
            </div>
            <div className="relative bg-brand-gradient p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                AGK Dedicated Team
              </div>
              <div className="mt-2 font-display text-2xl font-semibold">
                Predictable &amp; scalable
              </div>
              <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                Recommended
              </span>
            </div>
          </div>

          {/* Mobile-only compact header */}
          <div className="md:hidden bg-brand-gradient p-5 text-white">
            <div className="text-xs font-bold uppercase tracking-wider text-white/80">
              US in-house vs AGK team
            </div>
            <div className="mt-1 font-display text-lg font-semibold">
              Side-by-side comparison
            </div>
          </div>

          <div className="divide-y divide-ink-100">
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-1 items-stretch md:grid-cols-3"
              >
                {/* Label */}
                <div className="border-b border-ink-100 bg-ink-50/40 px-5 py-4 text-sm font-semibold text-ink-900 md:border-b-0 md:border-r md:px-6 md:py-5">
                  {r.label}
                </div>
                {/* US value with mobile label */}
                <div className="flex items-center gap-3 border-b border-ink-100 px-5 py-4 text-sm text-ink-700 md:border-b-0 md:border-r md:px-6 md:py-5">
                  <X size={16} className="shrink-0 text-rose-500" />
                  <span>
                    <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-rose-600 md:hidden">
                      US in-house
                    </span>
                    {r.us}
                  </span>
                </div>
                {/* AGK value with mobile label */}
                <div className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-ink-900 md:px-6 md:py-5">
                  <Check size={16} className="shrink-0 text-emerald-600" />
                  <span>
                    <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-emerald-700 md:hidden">
                      AGK team
                    </span>
                    {r.agk}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-ink-100 bg-ink-50/40 px-6 py-6 sm:px-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-display text-lg font-semibold text-ink-900">
                Most clients save 50–70% on accounting overhead.
              </div>
              <div className="text-sm text-ink-600">
                Ask us for a custom ROI estimate based on your team size and scope.
              </div>
            </div>
            <Button href="#contact">Get my ROI estimate</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
