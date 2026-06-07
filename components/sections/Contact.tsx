"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  MapPin,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const services = [
  "Bookkeeping",
  "Accounting",
  "Accounts Payable",
  "Accounts Receivable",
  "Payroll Processing",
  "Financial Reporting",
  "FP&A",
  "Virtual CFO",
  "Not sure yet",
];

// 🔑 STEP TO ENABLE EMAIL DELIVERY:
// 1. Go to https://web3forms.com/
// 2. Enter your email (admin@anantglobalkpo.com) — they email you an access key
// 3. Paste it here, replacing the empty string below.
//    Free plan: unlimited submissions, no monthly cap.
const WEB3FORMS_ACCESS_KEY = "";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    // Path A: Web3Forms (sends email directly, no mail-client needed)
    if (WEB3FORMS_ACCESS_KEY) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New enquiry from ${form.name || "website"} — ${form.service}`,
            from_name: form.name,
            // The fields below go straight into the email body
            Name: form.name,
            Company: form.company,
            Email: form.email,
            Phone: form.phone,
            "Service interested in": form.service,
            Message: form.message,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setStatus("success");
          setForm({
            name: "",
            company: "",
            email: "",
            phone: "",
            service: services[0],
            message: "",
          });
          return;
        }
        throw new Error(data.message || "Submission failed");
      } catch (err) {
        setStatus("error");
        setErrorMsg(
          err instanceof Error
            ? err.message
            : "Couldn't reach the server. Please email us directly.",
        );
        return;
      }
    }

    // Path B: Fallback — open user's mail client.
    // This is what runs until you paste a Web3Forms key above.
    const subject = encodeURIComponent(
      `New enquiry from ${form.name || "website"} — ${form.service}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Service: ${form.service}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );
    // Try opening mail client. If nothing is registered, this silently
    // fails — so we also show the user the email address to copy.
    window.location.href = `mailto:admin@anantglobalkpo.com?subject=${subject}&body=${body}`;
    // After a short delay assume user either saw mail open OR doesn't
    // have one configured. Show a helpful state either way.
    setTimeout(() => {
      setStatus("error");
      setErrorMsg(
        "If your email app didn't open, please email us directly at admin@anantglobalkpo.com",
      );
    }, 1200);
  };

  const inputCls =
    "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 transition";

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="h-display mt-5 text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              Ready to build your{" "}
              <span className="text-gradient">offshore accounting team?</span>
            </h2>
            <p className="mt-5 max-w-md text-ink-600 leading-relaxed">
              Tell us a bit about your operation. We&apos;ll respond within one
              business day with next steps and an indicative scope.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:admin@anantglobalkpo.com"
                className="group flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 hover:border-brand-200 transition"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Mail size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-ink-500">Email</div>
                  <div className="break-all text-sm font-medium text-ink-900">
                    admin@anantglobalkpo.com
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto shrink-0 text-ink-400 group-hover:translate-x-1 transition"
                />
              </a>
              <a
                href="tel:+919327230005"
                className="group flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 hover:border-brand-200 transition"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Phone size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-ink-500">Phone</div>
                  <div className="text-sm font-medium text-ink-900">
                    +91 93272 30005
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto shrink-0 text-ink-400 group-hover:translate-x-1 transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aviagarwal31"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 hover:border-brand-200 transition"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Linkedin size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-ink-500">LinkedIn</div>
                  <div className="break-all text-sm font-medium text-ink-900">
                    linkedin.com/in/aviagarwal31
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto shrink-0 text-ink-400 group-hover:translate-x-1 transition"
                />
              </a>
              <a
                href="https://maps.google.com/?q=G+50+West+Field+Mall+Ghod+Dod+Rd+Surat+Gujarat+395001"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 hover:border-brand-200 transition"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <MapPin size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-ink-500">Office address</div>
                  <div className="text-sm font-medium leading-snug text-ink-900">
                    G 50, West Field Mall, Ghod Dod Rd,
                    <br className="hidden sm:block" />
                    Adarsh Society, Athwa, Surat,
                    <br className="hidden sm:block" />
                    Gujarat 395001, India
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="ml-auto mt-1 shrink-0 text-ink-400 group-hover:translate-x-1 transition"
                />
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-ink-100 bg-white p-5 shadow-soft sm:p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-600">
                  Thanks for reaching out. We&apos;ll get back to you within one
                  business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-ink-700">
                      Full name
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={inputCls}
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-ink-700">
                      Company
                    </span>
                    <input
                      required
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className={inputCls}
                      placeholder="Acme CPA Partners"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-ink-700">
                      Work email
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={inputCls}
                      placeholder="jane@acmecpa.com"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-ink-700">
                      Phone
                    </span>
                    <input
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className={inputCls}
                      placeholder="+1 555 123 4567"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-xs font-semibold text-ink-700">
                      Service interested in
                    </span>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className={inputCls}
                    >
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-xs font-semibold text-ink-700">
                      Tell us about your needs
                    </span>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputCls} resize-none`}
                      placeholder="Volume, software, team size, timeline..."
                    />
                  </label>
                </div>

                {status === "error" && (
                  <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-amber-800">
                    <AlertCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-ink-500">
                    By submitting, you agree to our privacy practices.
                  </p>
                  <Button
                    size="lg"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send enquiry <ArrowRight size={16} />
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
