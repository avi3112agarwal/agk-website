"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calculator,
  Landmark,
  CreditCard,
  ClipboardList,
  Target,
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  Users,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Tab = "cpa" | "business";

const cpaModels = [
  {
    icon: Users,
    title: "Client Portfolio Support Model",
    tagline: "Expand your delivery capacity while keeping client relationships in-house.",
    how: [
      "We manage a portfolio of your clients in the background.",
      "Our team handles bookkeeping, tax prep, and compliance.",
      "You retain full control over client communication.",
      "We provide regular reports and updates to your internal team.",
    ],
    ideal: "Firms looking to scale service delivery without hiring or disrupting client relationships.",
    benefits: [
      "White-labeled back-office support",
      "High-quality, timely deliverables",
      "Seamless collaboration with your team",
    ],
  },
  {
    icon: HelpCircle,
    title: "End-to-End Service Model",
    tagline: "We take care of everything — operations and client interaction.",
    how: [
      "Assign us a large or strategic client account.",
      "We deploy a dedicated team (Team-as-a-Service).",
      "Our team manages both service delivery and direct communication with the client.",
      "Transparent performance tracking with agreed SLAs and KPIs.",
    ],
    ideal: "Firms seeking a turnkey solution to delegate service delivery and focus on growth.",
    benefits: [
      "Complete client lifecycle management",
      "Scalable and flexible team structure",
      "Strategic, long-term partnership potential",
    ],
  },
];

const comparison = [
  ["Client Communication", "Managed by Your Firm", "Managed by Our Team"],
  ["Scope of Work", "Back-office tasks", "Full-service delivery"],
  ["Team Model", "Shared resources", "Dedicated team (TaaS)"],
  ["Branding", "White-labeled", "Your brand or co-branded"],
  ["Ideal Use Case", "Operational scale", "Full delegation"],
];

const businessServices = [
  {
    icon: BookOpen,
    category: "Core Accounting",
    title: "Book Cleanup, Setup & Maintenance",
    desc: "Ensuring your books are accurate, organized, and up-to-date for a clear financial picture.",
    aspects: [
      "Comprehensive review and correction of existing bookkeeping records.",
      "Chart of Accounts setup and optimization specific to your industry.",
    ],
  },
  {
    icon: Calculator,
    category: "Core Accounting",
    title: "Transaction Categorization & Data Entry",
    desc: "Meticulous handling of your financial data for precise reporting and analysis.",
    aspects: [
      "Meticulous categorization of all income and expense transactions.",
      "Accurate data entry into your preferred accounting software.",
    ],
  },
  {
    icon: Landmark,
    category: "Financial Control",
    title: "Bank, Credit Card & Gateway Reconciliation",
    desc: "Regular reconciliation to ensure financial integrity and identify discrepancies.",
    aspects: [
      "Monthly reconciliation of all bank and credit card accounts.",
      "Verification of payment gateway transactions (e.g., Stripe, PayPal).",
    ],
  },
  {
    icon: CreditCard,
    category: "Financial Control",
    title: "Accounts Receivable / Payable Management",
    desc: "Efficient management of your cash flow through diligent AR and AP processes.",
    aspects: [
      "Invoice generation and dispatch to customers.",
      "Tracking and follow-up on overdue customer payments.",
    ],
  },
  {
    icon: ClipboardList,
    category: "Reporting & Analysis",
    title: "Monthly Closings & Audit-Ready Financials",
    desc: "Timely monthly closings and preparation of financials ready for audit and strategic review.",
    aspects: [
      "Systematic month-end closing procedures.",
      "Preparation of key financial statements: Balance Sheet, Income Statement, Cash Flow.",
    ],
  },
  {
    icon: Target,
    category: "Strategic Finance",
    title: "Budgeting & Cash Flow Management",
    desc: "Expert budgeting and cash flow strategies to optimize your financial health and growth.",
    aspects: [
      "Collaborative budget development aligned with business goals.",
      "Cash flow forecasting and scenario analysis.",
    ],
  },
  {
    icon: LayoutDashboard,
    category: "Reporting & Analysis",
    title: "KPI Dashboards & Custom MIS Reports",
    desc: "Gain critical insights with custom KPI dashboards and MIS reports.",
    aspects: [
      "Identification of relevant KPIs for your business and industry.",
      "Design and development of interactive dashboards.",
    ],
  },
  {
    icon: TrendingUp,
    category: "Strategic Finance",
    title: "Profitability Analysis & Financial Reporting",
    desc: "Understand profitability drivers with in-depth analysis and clear financial reports.",
    aspects: [
      "Analysis of gross profit and net profit margins.",
      "Cost-volume-profit (CVP) analysis.",
    ],
  },
  {
    icon: ShieldCheck,
    category: "Financial Control",
    title: "Internal Controls & Process Improvement",
    desc: "Strengthen financial governance with robust internal controls and optimized processes.",
    aspects: [
      "Review and documentation of existing accounting processes.",
      "Design and implementation of effective internal control systems.",
    ],
  },
];

export function Services() {
  const [tab, setTab] = useState<Tab>("cpa");

  return (
    <section id="services" className="section relative">
      <Container>
        {/* Tab switcher */}
        <div className="mx-auto mb-12 inline-flex w-full max-w-md items-center rounded-2xl bg-ink-100 p-1.5 shadow-soft sm:flex">
          {[
            { id: "cpa" as const, label: "For CPA Firms" },
            { id: "business" as const, label: "For Business Owners" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "relative flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition-all",
                tab === t.id
                  ? "bg-brand-gradient text-white shadow-glow"
                  : "text-ink-600 hover:text-ink-900",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "cpa" ? (
            <motion.div
              key="cpa"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <SectionHeading
                eyebrow="Partnership models"
                title={
                  <>
                    Services for{" "}
                    <span className="text-gradient">CPA & Bookkeeping Firms</span>
                  </>
                }
                description="We empower CPA and bookkeeping firms to scale efficiently and deliver high-quality services through two flexible engagement models. Whether you want to expand your back-office capabilities or fully delegate client servicing, we have a model to fit your goals."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-2">
                {cpaModels.map((m, i) => (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-soft transition-all hover:shadow-glow hover:border-brand-200"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />

                    <div className="relative flex items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                        <m.icon size={22} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                        {m.title}
                      </h3>
                    </div>

                    <p className="mt-4 font-medium text-brand-700">{m.tagline}</p>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500">
                        How it works:
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {m.how.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500">
                        Ideal for:
                      </h4>
                      <p className="mt-2 text-sm text-ink-700">{m.ideal}</p>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500">
                        Benefits:
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {m.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                            <ArrowRight size={14} className="mt-1 shrink-0 text-brand-600" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Comparison table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="mt-16 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft"
              >
                <div className="border-b border-ink-100 px-8 py-6 text-center">
                  <h3 className="h-display text-2xl sm:text-3xl">
                    Partnership Model{" "}
                    <span className="text-gradient">Comparison</span>
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-ink-50">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink-600">
                          Feature
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink-600">
                          Client Portfolio Support
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink-600">
                          End-to-End Service
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map(([feature, a, b], i) => (
                        <tr
                          key={feature}
                          className={cn(
                            "border-t border-ink-100 transition-colors hover:bg-brand-50/30",
                            i % 2 === 1 && "bg-ink-50/30",
                          )}
                        >
                          <td className="px-6 py-4 text-sm font-semibold text-ink-900">
                            {feature}
                          </td>
                          <td className="px-6 py-4 text-sm text-ink-700">{a}</td>
                          <td className="px-6 py-4 text-sm text-ink-700">{b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="business"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <SectionHeading
                eyebrow="Services"
                title={
                  <>
                    Services for{" "}
                    <span className="text-gradient">Business Owners</span>
                  </>
                }
                description="Comprehensive accounting and bookkeeping services designed to give you a clear financial picture, ensure compliance, and support your business growth."
              />

              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {businessServices.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-glow"
                  >
                    <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                        <s.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-bold leading-snug text-ink-900">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-brand-600">
                          {s.category}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink-600">
                      {s.desc}
                    </p>

                    <div className="mt-4">
                      <h4 className="text-xs font-bold text-ink-700">Key aspects:</h4>
                      <ul className="mt-2 space-y-1.5">
                        {s.aspects.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-xs text-ink-600"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                            <span>{a}</span>
                          </li>
                        ))}
                        <li className="text-xs italic text-ink-500">And more…</li>
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-700 transition-all hover:gap-2 hover:text-brand-800"
                    >
                      Enquire Now <ArrowRight size={14} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
