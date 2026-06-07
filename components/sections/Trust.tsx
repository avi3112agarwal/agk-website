"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Award, Globe2, Users, FileCheck } from "lucide-react";

const items = [
  { icon: Award, label: "Chartered Accountant led team" },
  { icon: FileCheck, label: "US GAAP knowledge" },
  { icon: ShieldCheck, label: "Data security focused" },
  { icon: Globe2, label: "Global delivery model" },
  { icon: Users, label: "Dedicated team structure" },
];

export function Trust() {
  return (
    <section className="relative border-y border-ink-100 bg-ink-50/60">
      <Container className="py-8 lg:py-10">
        <div className="grid grid-cols-2 gap-y-6 gap-x-8 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-3 text-ink-700"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-700 shadow-soft transition-all group-hover:bg-brand-gradient group-hover:text-white group-hover:shadow-glow">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium leading-tight">{label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
