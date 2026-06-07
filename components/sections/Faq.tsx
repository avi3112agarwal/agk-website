"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "How do you keep client data secure?",
    a: "Every engagement starts with a signed NDA and access is granted on a least-privilege basis. We work inside your systems (or a hardened virtual environment), enforce MFA, restrict downloads, and log activity. We also align with industry standards around endpoint security, password management, and secure file transfer.",
  },
  {
    q: "How is pricing structured?",
    a: "We offer dedicated FTE plans (full-time team members billed monthly) and fixed-scope packages for clearly defined work like monthly bookkeeping or AP/AR. Pricing depends on seniority, scope, software, and turnaround expectations. Most clients land between $1,500 – $4,500 per FTE per month.",
  },
  {
    q: "How do we communicate day-to-day?",
    a: "Whatever you already use — Slack, Microsoft Teams, email, Zoom, Asana, ClickUp. Each engagement has a dedicated lead and a documented escalation path so you always know who to ping.",
  },
  {
    q: "Do your teams work in US time zones?",
    a: "Yes. We staff overlapping shifts so a meaningful portion of every workday overlaps with US business hours (Eastern through Pacific). Same-day turnaround is the default.",
  },
  {
    q: "Do you work with CPA firms during tax/audit season?",
    a: "Yes — this is one of our core specialties. We provide white-label staffing for tax preparation, bookkeeping cleanup, audit support, and client accounting services. We scale up during busy season and right-size after.",
  },
  {
    q: "Which accounting software do you support?",
    a: "QuickBooks Online & Desktop, Xero, NetSuite, Yardi, AppFolio, Sage, and Zoho Books — plus the surrounding stack (Bill.com, Ramp, Gusto, ADP, Hubdoc, Dext, etc.). If you run something niche, we'll ramp.",
  },
  {
    q: "Will I get the same people every day?",
    a: "Yes. Dedicated means dedicated — the same named resources work on your books every day. Pod structures provide backup coverage so PTO never stalls your work.",
  },
  {
    q: "What reporting do we receive?",
    a: "Weekly status updates, monthly close packages (P&L, balance sheet, cash flow, KPIs), and quarterly business reviews. Reporting cadence and formats are customized during onboarding.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most engagements go live in 2–4 weeks. Week 1: discovery and access. Week 2: knowledge transfer and shadow runs. Week 3–4: parallel operation and handover. Complex multi-entity setups can take 6–8 weeks.",
  },
  {
    q: "Can we scale the team up or down?",
    a: "Absolutely. You can add resources with 2–3 weeks of notice and reduce with 30 days' notice. No long-term lock-ins — we earn the business every month.",
  },
];

function Item({
  q,
  a,
  open,
  onClick,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-ink-100">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-base sm:text-lg font-semibold text-ink-900">
          {q}
        </span>
        <span
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition ${
            open ? "rotate-45 bg-ink-900 text-white border-ink-900" : ""
          }`}
        >
          <Plus size={16} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-ink-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions buyers ask us{" "}
              <span className="text-gradient">before they sign</span>
            </>
          }
          description="If you don't see your question here, ask us directly — we'll usually reply within a business day."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
