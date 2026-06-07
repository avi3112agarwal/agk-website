"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, BookOpen, Sparkles, Users, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// To use real photos: drop files into /public/team/ and set the `photo` field
// (e.g. photo: "/team/avi-agarwal.jpg"). Otherwise gradient initials are shown.
const founder = {
  name: "Avi Agarwal",
  role: "Founder — Anant Global KPO",
  photo: "/team/avi-agarwal.jpg" as string | undefined,
  specialties: ["CA", "Taxation", "Audit", "Virtual CFO"],
  bioParagraphs: [
    "Avi Agarwal is a Chartered Accountant (equivalent to CPA) with over five years of hands-on experience in accounting, taxation, and auditing. Known for his precision and efficiency, he helps businesses and individuals navigate complex financial landscapes with confidence. As a certified QuickBooks ProAdvisor and ZOHO specialist, Avi leverages modern tools to streamline financial operations and ensure compliance. His approach combines deep technical knowledge with a collaborative leadership style, fostering strong client relationships and high-performing teams.",
    "Avi is dedicated to delivering customized financial strategies that support sustainable growth and long-term success.",
  ],
  credentials: [
    {
      icon: Award,
      title: "Chartered Accountant (CA)",
      desc: "Qualified professional ensuring accuracy and compliance.",
    },
    {
      icon: BookOpen,
      title: "QuickBooks ProAdvisor",
      desc: "Certified expert in QuickBooks for efficient financial management.",
    },
    {
      icon: Sparkles,
      title: "ZOHO Specialist",
      desc: "Skilled in ZOHO Suite to streamline business operations.",
    },
    {
      icon: Users,
      title: "5+ Years Experience",
      desc: "Proven experience in accounting, taxation, and auditing.",
    },
  ],
};

type Member = { name: string; role: string; photo?: string };
const team: Member[] = [
  { name: "Monika Ladha", role: "Team Leader", photo: "/team/monika.jpg" },
  { name: "Yukta Lahoti", role: "Team Leader", photo: "/team/yukta.jpg" },
  { name: "Vaibhav Rampuria", role: "Sr. Accountant", photo: "/team/vaibhav.jpg" },
  { name: "Bhakti Lahoti", role: "Sr. Accountant", photo: "/team/bhakti.jpg" },
  { name: "Sanskar Jain", role: "Jr. Accountant", photo: "/team/sanskar.jpg" },
  { name: "Naman Jain", role: "Jr. Accountant", photo: "/team/naman.jpg" },
];

const gradients = [
  "from-brand-500 to-accent-500",
  "from-brand-700 to-brand-400",
  "from-accent-500 to-brand-600",
  "from-brand-600 to-accent-400",
  "from-brand-400 to-accent-600",
  "from-brand-800 to-accent-500",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({
  name,
  src,
  gradient,
}: {
  name: string;
  src?: string;
  gradient: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex h-24 w-24 items-center justify-center rounded-full font-display text-xl font-bold text-white shadow-soft ring-4 ring-white",
        "bg-gradient-to-br",
        gradient,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          className="absolute inset-0 h-full w-full rounded-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : null}
      <span className="relative z-10 select-none">{getInitials(name)}</span>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-60" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Leadership & Team"
          title={
            <>
              Meet the people behind{" "}
              <span className="text-gradient">your numbers</span>
            </>
          }
          description="A Chartered Accountant-led team committed to accuracy, integrity, and your long-term success."
        />

        {/* ===== Founder card — dark theme ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-ink-900 via-[#0B1E3F] to-ink-900 shadow-glow"
        >
          {/* Background flourishes */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl animate-blob-drift" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl animate-blob-drift" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative grid gap-8 p-5 sm:p-8 md:p-10 lg:grid-cols-[minmax(280px,_420px)_1fr] lg:gap-12 lg:p-14">
            {/* ===== Left: portrait + identity ===== */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex flex-col"
            >
              {/* Portrait */}
              <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl sm:max-w-sm lg:mx-0 lg:max-w-none">
                {/* Glow ring behind photo */}
                <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/30 via-accent-500/20 to-transparent blur-2xl" />

                {founder.photo ? (
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                    {/* Subtle gradient overlay at bottom */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900/60 to-transparent" />
                  </div>
                ) : (
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500 font-display text-7xl font-bold text-white">
                    {getInitials(founder.name)}
                  </div>
                )}
              </div>

              {/* Identity block */}
              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-sm">
                  Founder
                </span>

                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {founder.name}
                </h3>
                <p className="mt-1 text-base font-medium text-accent-400">
                  {founder.role}
                </p>

                {/* Divider with gradient */}
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-brand-400 to-transparent" />

                {/* Specialties */}
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-ink-300">
                  {founder.specialties.map((s, i) => (
                    <span key={s} className="flex items-center gap-3">
                      <span>{s}</span>
                      {i < founder.specialties.length - 1 && (
                        <span className="text-ink-500">|</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Socials */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="mailto:admin@anantglobalkpo.com"
                    aria-label="Email Avi"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-300 transition hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-200"
                  >
                    <Mail size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aviagarwal31"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-300 transition hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-200"
                  >
                    <Linkedin size={17} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ===== Right: bio + credential cards ===== */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col"
            >
              <div className="space-y-5">
                {founder.bioParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-ink-200 sm:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Credential cards 2x2 */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {founder.credentials.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                    whileHover={{ y: -3 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all hover:border-brand-400/40 hover:bg-white/[0.06]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                        <c.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display text-sm font-bold leading-tight text-white sm:text-base">
                          {c.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-300 sm:text-sm">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== Team grid ===== */}
        <div className="mt-20">
          <div className="text-center">
            <span className="eyebrow">Our dedicated team</span>
            <h3 className="h-display mt-5 text-2xl sm:text-3xl lg:text-4xl">
              The skilled professionals ensuring{" "}
              <span className="text-gradient">your financial success</span>
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-ink-100 bg-white p-7 text-center shadow-soft transition-all hover:shadow-glow hover:border-brand-200"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative inline-block">
                  <div className="absolute -inset-2 rounded-full bg-brand-gradient opacity-0 blur-lg transition-opacity group-hover:opacity-30" />
                  <Avatar
                    name={m.name}
                    src={m.photo}
                    gradient={gradients[i % gradients.length]}
                  />
                </div>

                <h4 className="mt-5 font-display text-lg font-bold text-brand-700 group-hover:text-brand-800">
                  {m.name}
                </h4>
                <p className="mt-1 text-sm text-ink-600">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
