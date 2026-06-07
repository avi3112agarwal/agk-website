"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MessageSquare, FolderOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  accountingLogos,
  communicationLogos,
  documentLogos,
  softwareLogos,
} from "@/components/ui/BrandLogos";
import { cn } from "@/lib/utils";

type Cat = "accounting" | "communication" | "documents";

const categories = [
  {
    id: "accounting" as const,
    icon: Calculator,
    label: "Accounting & Related Software",
    short: "Accounting",
    desc: "Day-one productive on the platforms you already run on.",
    logos: accountingLogos,
    accent: "from-brand-500 to-brand-700",
  },
  {
    id: "communication" as const,
    icon: MessageSquare,
    label: "Communication Channels",
    short: "Communication",
    desc: "We meet you where your team already collaborates.",
    logos: communicationLogos,
    accent: "from-accent-500 to-brand-600",
  },
  {
    id: "documents" as const,
    icon: FolderOpen,
    label: "Document Storage & Sharing",
    short: "Documents",
    desc: "Secure file exchange across your preferred storage tools.",
    logos: documentLogos,
    accent: "from-brand-700 to-accent-500",
  },
];

export function Software() {
  const [tab, setTab] = useState<Cat>("accounting");
  const active = categories.find((c) => c.id === tab)!;
  const marquee = [...softwareLogos, ...softwareLogos];

  return (
    <section
      id="software"
      className="section relative overflow-hidden bg-white border-t border-ink-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Software & tools"
          title={
            <>
              The full stack we run{" "}
              <span className="text-gradient">your finance ops on</span>
            </>
          }
          description="From accounting platforms to the collaboration apps your team lives in — we adapt to your workflow, not the other way around."
        />

        {/* Category switcher */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-2 rounded-2xl border border-ink-100 bg-ink-50/60 p-2 sm:flex-row">
          {categories.map((c) => {
            const isActive = tab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setTab(c.id)}
                className={cn(
                  "relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all",
                  isActive
                    ? "bg-white text-ink-900 shadow-soft"
                    : "text-ink-600 hover:text-ink-900",
                )}
              >
                {isActive && (
                  <span
                    className={cn(
                      "absolute inset-x-3 -top-px h-0.5 rounded-full bg-gradient-to-r",
                      c.accent,
                    )}
                  />
                )}
                <c.icon size={16} className={isActive ? "text-brand-700" : ""} />
                <span className="hidden sm:inline">{c.label}</span>
                <span className="sm:hidden">{c.short}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            <p className="mx-auto max-w-xl text-center text-sm text-ink-600">
              {active.desc}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {active.logos.map((app, i) => (
                <motion.div
                  key={`${tab}-${app.name}-${i}`}
                  initial={{ opacity: 0, y: 14, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={cn(
                    "group relative flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-ink-100 bg-white px-5 shadow-soft transition-all hover:border-brand-300 hover:shadow-glow",
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100",
                      active.accent,
                    )}
                  />
                  <app.Logo className="h-9 w-auto opacity-85 transition group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Marquee strip — always shows full accounting roster */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-ink-100 bg-ink-50/40 py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12 px-6">
            {marquee.map((app, i) => (
              <app.Logo
                key={`${app.name}-${i}`}
                className="h-7 w-auto shrink-0 opacity-70"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
