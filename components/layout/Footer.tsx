import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const columns = [
  {
    title: "Services",
    items: [
      { href: "#services", label: "Bookkeeping" },
      { href: "#services", label: "Accounting" },
      { href: "#services", label: "Accounts Payable" },
      { href: "#services", label: "Accounts Receivable" },
      { href: "#services", label: "Payroll" },
      { href: "#services", label: "Virtual CFO" },
    ],
  },
  {
    title: "Industries",
    items: [
      { href: "#industries", label: "CPA Firms" },
      { href: "#industries", label: "Accounting Firms" },
      { href: "#industries", label: "Real Estate" },
      { href: "#industries", label: "E-commerce" },
      { href: "#industries", label: "SaaS" },
      { href: "#industries", label: "SMEs" },
    ],
  },
  {
    title: "Company",
    items: [
      { href: "#about", label: "About" },
      { href: "#why-agk", label: "Why AGK" },
      { href: "#process", label: "Our Process" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo invert />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              Chartered Accountant-led offshore accounting partner for CPA firms
              and growing businesses worldwide.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:admin@anantglobalkpo.com"
                className="flex items-center gap-3 text-ink-300 hover:text-white transition"
              >
                <Mail size={16} className="text-accent-400" />
                admin@anantglobalkpo.com
              </a>
              <a
                href="tel:+919327230005"
                className="flex items-center gap-3 text-ink-300 hover:text-white transition"
              >
                <Phone size={16} className="text-accent-400" />
                +91 93272 30005
              </a>
              <a
                href="https://maps.google.com/?q=G+50+West+Field+Mall+Ghod+Dod+Rd+Surat+Gujarat+395001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-ink-400 hover:text-white transition"
              >
                <MapPin size={16} className="text-accent-400 mt-0.5 shrink-0" />
                <span>
                  G 50, West Field Mall, Ghod Dod Rd,
                  <br />
                  Adarsh Society, Athwa, Surat, Gujarat 395001
                </span>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-white text-sm tracking-tight">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="text-sm text-ink-400 hover:text-white transition"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-6 border-t border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Anant Global KPO. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aviagarwal31"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-ink-300 hover:bg-brand-700 hover:text-white transition"
            >
              <Linkedin size={16} />
            </a>
            <Link href="#" className="text-xs text-ink-500 hover:text-ink-300">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-ink-500 hover:text-ink-300">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
