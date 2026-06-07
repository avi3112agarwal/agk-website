"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MapPin } from "lucide-react";

/**
 * Simplified continent paths in a 1000x500 equirectangular viewBox.
 * Hand-drafted polygons — enough fidelity to read as a real world map
 * (much better than dot pattern) while keeping SVG payload small.
 */
const CONTINENT_PATHS: string[] = [
  // North America (incl. Alaska, Canada, USA, Central America)
  "M 60 95 L 95 80 L 130 75 L 165 78 L 195 72 L 225 78 L 250 88 L 258 108 L 248 128 L 260 148 L 280 165 L 295 185 L 295 210 L 280 218 L 260 218 L 248 235 L 238 258 L 222 278 L 200 290 L 182 290 L 172 268 L 162 248 L 148 238 L 128 232 L 108 222 L 92 205 L 80 180 L 72 155 L 65 130 L 60 110 Z",
  // Alaska peninsula
  "M 30 105 L 60 95 L 65 115 L 50 128 L 32 122 Z",
  // Mexico / Central America
  "M 175 245 L 200 240 L 220 260 L 235 285 L 232 305 L 218 310 L 205 295 L 195 280 L 180 265 Z",
  // Greenland
  "M 320 75 L 360 65 L 395 72 L 405 95 L 395 125 L 370 138 L 340 135 L 320 118 L 312 95 Z",
  // South America
  "M 240 295 L 270 290 L 295 295 L 315 310 L 328 332 L 332 360 L 322 388 L 308 415 L 290 438 L 275 448 L 262 442 L 252 420 L 245 390 L 240 355 L 235 320 Z",
  // Europe (mainland)
  "M 470 130 L 495 120 L 525 115 L 555 118 L 585 125 L 600 142 L 595 162 L 575 175 L 545 180 L 515 175 L 490 168 L 472 152 Z",
  // Scandinavia
  "M 525 95 L 555 88 L 575 95 L 580 115 L 565 130 L 540 130 L 525 115 Z",
  // United Kingdom
  "M 455 145 L 470 140 L 478 158 L 472 172 L 458 170 L 452 158 Z",
  // Iceland
  "M 432 115 L 448 110 L 455 122 L 445 130 L 432 128 Z",
  // Africa
  "M 490 200 L 520 195 L 555 200 L 585 215 L 605 240 L 615 270 L 615 305 L 605 340 L 590 370 L 570 395 L 545 405 L 525 395 L 510 365 L 495 335 L 482 305 L 475 275 L 478 240 L 485 215 Z",
  // Madagascar
  "M 625 335 L 638 332 L 645 358 L 635 378 L 625 372 L 622 350 Z",
  // Asia mainland (huge — Russia, China, etc.)
  "M 595 105 L 640 88 L 695 82 L 755 85 L 810 92 L 855 105 L 890 122 L 905 145 L 900 168 L 880 182 L 855 192 L 825 195 L 800 195 L 778 205 L 760 218 L 740 222 L 720 215 L 705 210 L 690 222 L 678 240 L 660 248 L 645 240 L 632 220 L 622 200 L 612 178 L 602 152 L 597 128 Z",
  // Arabia
  "M 590 200 L 618 198 L 632 218 L 632 245 L 615 258 L 595 252 L 585 230 Z",
  // India
  "M 685 220 L 708 220 L 720 240 L 720 265 L 705 285 L 690 282 L 680 260 L 678 238 Z",
  // SE Asia / Indonesia (cluster)
  "M 760 248 L 790 252 L 818 262 L 832 280 L 822 295 L 798 298 L 775 290 L 762 275 Z",
  "M 838 295 L 858 295 L 868 308 L 858 318 L 840 315 Z",
  // Japan
  "M 870 165 L 880 158 L 890 172 L 893 188 L 882 198 L 872 192 L 868 178 Z",
  // Philippines
  "M 832 252 L 842 250 L 848 268 L 840 280 L 832 272 Z",
  // Australia
  "M 805 348 L 845 342 L 880 348 L 902 362 L 905 380 L 888 392 L 858 398 L 825 395 L 802 385 L 795 368 Z",
  // Tasmania
  "M 855 408 L 870 406 L 875 420 L 862 425 L 855 418 Z",
  // New Zealand (North)
  "M 920 400 L 938 395 L 942 415 L 928 422 L 920 415 Z",
  // New Zealand (South)
  "M 928 425 L 945 422 L 948 442 L 935 448 L 925 442 Z",
];

const VIEW_W = 1000;
const VIEW_H = 500;

const LOCATIONS = [
  { name: "Canada", x: 220, y: 130, primary: false },
  { name: "USA", x: 195, y: 195, primary: false },
  { name: "Dubai", x: 615, y: 222, primary: false },
  { name: "India", x: 700, y: 250, primary: true },
  { name: "Australia", x: 850, y: 370, primary: false },
  { name: "New Zealand", x: 935, y: 420, primary: false },
];

export function GlobalFootprint() {
  return (
    <section
      id="footprint"
      className="section relative overflow-hidden bg-gradient-to-br from-ink-50 via-white to-brand-50/40"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-brand-300/15 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">Worldwide reach</span>
            <h2 className="h-display mt-5 text-2xl leading-[1.15] sm:text-4xl sm:leading-[1.1] lg:text-5xl">
              Our Global{" "}
              <span className="text-gradient">Footprint</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
              We proudly serve businesses across{" "}
              <strong className="font-semibold text-ink-900">
                India, the UAE, the USA, Canada, Australia, and New Zealand
              </strong>{" "}
              — delivering accurate, time-zone-friendly accounting support that
              feels local, no matter where you operate.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {LOCATIONS.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white px-3 py-2.5 text-sm shadow-soft"
                >
                  <span className="relative inline-flex h-2.5 w-2.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-gradient" />
                  </span>
                  <span className="font-medium text-ink-800">
                    {l.name}
                    {l.primary && (
                      <span className="ml-1.5 rounded-full bg-brand-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-700">
                        HQ
                      </span>
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-white via-brand-50/30 to-white p-3 shadow-soft sm:rounded-3xl sm:p-6">
              {/* Subtle grid backdrop */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #1E40AF 1px, transparent 1px), linear-gradient(to bottom, #1E40AF 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <svg
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                className="relative h-auto w-full"
                role="img"
                aria-label="Global service map"
              >
                <defs>
                  <linearGradient id="continent-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                  <radialGradient id="pin-glow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                  </radialGradient>
                  <filter id="continent-shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1E40AF" floodOpacity="0.15" />
                  </filter>
                </defs>

                {/* Continents */}
                <g
                  fill="url(#continent-grad)"
                  stroke="#1D4ED8"
                  strokeWidth="0.6"
                  strokeOpacity="0.5"
                  filter="url(#continent-shadow)"
                >
                  {CONTINENT_PATHS.map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </g>

                {/* Animated arcs connecting India (HQ) to other locations */}
                {LOCATIONS.filter((l) => !l.primary).map((l, i) => {
                  const india = LOCATIONS.find((p) => p.primary)!;
                  const midX = (india.x + l.x) / 2;
                  const midY = Math.min(india.y, l.y) - 70;
                  const d = `M ${india.x} ${india.y} Q ${midX} ${midY} ${l.x} ${l.y}`;
                  return (
                    <path
                      key={l.name}
                      d={d}
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="1.6"
                      strokeOpacity="0.7"
                      strokeDasharray="5 5"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-40"
                        dur={`${3.5 + i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  );
                })}

                {/* Location pins */}
                {LOCATIONS.map((l) => (
                  <g key={l.name} transform={`translate(${l.x} ${l.y})`}>
                    <circle r="24" fill="url(#pin-glow)" />
                    <circle
                      r="6"
                      fill={l.primary ? "#0E7490" : "#06B6D4"}
                      opacity="0.45"
                    >
                      <animate
                        attributeName="r"
                        values="6;18;6"
                        dur={l.primary ? "2s" : "2.6s"}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.55;0;0.55"
                        dur={l.primary ? "2s" : "2.6s"}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      r={l.primary ? 8 : 6}
                      fill={l.primary ? "#0E7490" : "#0891B2"}
                      stroke="#fff"
                      strokeWidth="2.5"
                    />
                    {l.primary && (
                      <circle
                        r="3"
                        fill="#fff"
                      />
                    )}
                    <g transform={`translate(0 ${l.y > 380 ? 24 : -16})`}>
                      <rect
                        x="-32"
                        y="-10"
                        width="64"
                        height="16"
                        rx="8"
                        fill="#fff"
                        stroke={l.primary ? "#0E7490" : "#1D4ED8"}
                        strokeWidth="1"
                        opacity="0.95"
                      />
                      <text
                        x="0"
                        y="1"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="10"
                        fontWeight="800"
                        fill={l.primary ? "#0E7490" : "#1E40AF"}
                        style={{
                          fontFamily: "Inter, sans-serif",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {l.name.toUpperCase()}
                      </text>
                    </g>
                  </g>
                ))}
              </svg>

              {/* Corner badges */}
              <div className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Live network
              </div>
              <div className="pointer-events-none absolute left-4 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white/90 px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft backdrop-blur">
                <MapPin size={12} className="text-brand-700" />
                6 service regions
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
