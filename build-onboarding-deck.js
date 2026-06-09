/**
 * AGK Client Onboarding Deck Builder — v2
 * Premium rebuild matching the website's design language.
 *
 * Run: node build-onboarding-deck.js
 */
const pptxgen = require("pptxgenjs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fi = require("react-icons/fi"); // Feather Icons — similar feel to Lucide on the website
const fa = require("react-icons/fa");
const fa6 = require("react-icons/fa6");
const md = require("react-icons/md");
const si = require("react-icons/si"); // Simple Icons — brand logos
const hi = require("react-icons/hi2");

// ============ Brand palette (matches website tokens) ============
const C = {
  // Inks
  text: "0F172A",
  textMute: "475569",
  textSub: "64748B",
  textFaint: "94A3B8",
  divider: "E2E8F0",
  border: "E2E8F0",
  bgSubtle: "F8FAFC",
  // Brand
  brand: "1E40AF", // brand-800
  brandDeep: "1E3A8A", // brand-900
  brand700: "1D4ED8",
  brand600: "2563EB",
  brand500: "3B82F6",
  brand400: "60A5FA",
  brand100: "DBEAFE",
  brand50: "EFF6FF",
  // Accent
  cyan: "06B6D4", // accent-500
  cyanBright: "22D3EE", // accent-400
  cyanDeep: "0E7490",
  cyanSoft: "CFFAFE",
  // Dark
  navy: "0F172A", // ink-900
  navyDeep: "070E1F",
  navy800: "1E293B",
  navy700: "334155",
  // Status
  emerald: "10B981",
  amber: "F59E0B",
  rose: "F43F5E",
  white: "FFFFFF",
};

// Typography — Segoe UI is Microsoft's premium UI font, ships with Windows + Office
const FONT_H = "Segoe UI Semibold";
const FONT_B = "Segoe UI";
const FONT_LIGHT = "Segoe UI Light";

// Slide dimensions (16x9 = 10 x 5.625)
const W = 10;
const H = 5.625;

// Icon cache to avoid re-rasterizing the same icon
const _iconCache = new Map();

async function iconPNG(IconComponent, color = "#FFFFFF", size = 256) {
  if (!IconComponent) {
    throw new Error(
      `iconPNG called with undefined icon. Color=${color}, size=${size}. ` +
        `Most likely an import name doesn't exist in react-icons.`,
    );
  }
  const key = `${IconComponent.name || "anon"}-${color}-${size}`;
  if (_iconCache.has(key)) return _iconCache.get(key);
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) }),
  );
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  const dataUri = "image/png;base64," + buf.toString("base64");
  _iconCache.set(key, dataUri);
  return dataUri;
}

// ============ Helpers ============
function shadow(opts = {}) {
  return {
    type: "outer",
    color: opts.color || "0F172A",
    blur: opts.blur != null ? opts.blur : 18,
    offset: opts.offset != null ? opts.offset : 4,
    angle: 90,
    opacity: opts.opacity != null ? opts.opacity : 0.08,
  };
}

function brandShadow() {
  return {
    type: "outer",
    color: "1E40AF",
    blur: 24,
    offset: 6,
    angle: 90,
    opacity: 0.18,
  };
}

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Anant Global KPO";
pres.title = "AGK Client Onboarding";
pres.subject = "Client onboarding deck";
pres.company = "Anant Global KPO";

// ============ Component helpers ============
function addLogoMark(slide, x, y, mode = "light") {
  // AGK monogram — gradient-style square (we simulate the gradient by
  // layering two ovals behind a brand-colored rounded square)
  const dark = mode === "dark";
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x,
    y,
    w: 0.5,
    h: 0.5,
    fill: { color: dark ? C.cyan : C.brand },
    line: { type: "none" },
    rectRadius: 0.08,
  });
  // small inner highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x + 0.05,
    y: y + 0.05,
    w: 0.4,
    h: 0.18,
    fill: { color: C.white, transparency: 80 },
    line: { type: "none" },
    rectRadius: 0.04,
  });
  slide.addText("AGK", {
    x,
    y,
    w: 0.5,
    h: 0.5,
    fontSize: 11,
    fontFace: FONT_H,
    color: C.white,
    bold: true,
    align: "center",
    valign: "middle",
    margin: 0,
    charSpacing: 1,
  });
  slide.addText("Anant Global KPO", {
    x: x + 0.6,
    y: y + 0.04,
    w: 3,
    h: 0.45,
    fontSize: 13,
    fontFace: FONT_H,
    color: dark ? C.white : C.text,
    bold: true,
    valign: "middle",
    margin: 0,
  });
}

function addHeader(slide, eyebrow, title, options = {}) {
  const color = options.color || C.brand;
  const titleColor = options.titleColor || C.text;
  slide.addText(eyebrow, {
    x: 0.5,
    y: 0.45,
    w: 6,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_H,
    color,
    bold: true,
    charSpacing: 6,
    margin: 0,
  });
  slide.addText(title, {
    x: 0.5,
    y: 0.78,
    w: 9,
    h: 0.7,
    fontSize: 30,
    fontFace: FONT_H,
    color: titleColor,
    bold: true,
    margin: 0,
  });
}

function addFooter(slide, pageNum, totalPages, dark = false) {
  const txtColor = dark ? "64748B" : C.textSub;
  slide.addText("Anant Global KPO  ·  Client Onboarding", {
    x: 0.4,
    y: H - 0.32,
    w: 4,
    h: 0.22,
    fontSize: 9,
    fontFace: FONT_B,
    color: txtColor,
    margin: 0,
  });
  slide.addText(`${String(pageNum).padStart(2, "0")} / ${String(totalPages).padStart(2, "0")}`, {
    x: W - 1.0,
    y: H - 0.32,
    w: 0.6,
    h: 0.22,
    fontSize: 9,
    fontFace: FONT_B,
    color: txtColor,
    align: "right",
    margin: 0,
  });
}

// Card with proper shadow + optional top accent
function card(slide, x, y, w, h, opts = {}) {
  // Background card
  slide.addShape(pres.shapes.RECTANGLE, {
    x,
    y,
    w,
    h,
    fill: { color: opts.fill || C.white },
    line: { color: opts.border || C.border, width: 0.5 },
    shadow: shadow({ blur: 16, offset: 3, opacity: 0.07 }),
  });
  // Top accent bar
  if (opts.accent) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x,
      y,
      w,
      h: 0.05,
      fill: { color: opts.accent },
      line: { type: "none" },
    });
  }
  // Left accent bar
  if (opts.leftAccent) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x,
      y,
      w: 0.06,
      h,
      fill: { color: opts.leftAccent },
      line: { type: "none" },
    });
  }
}

// Dark card for dark slides
function darkCard(slide, x, y, w, h, opts = {}) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x,
    y,
    w,
    h,
    fill: { color: opts.fill || "1E293B" },
    line: { color: opts.border || "334155", width: 0.5 },
  });
  if (opts.accent) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x,
      y,
      w,
      h: 0.04,
      fill: { color: opts.accent },
      line: { type: "none" },
    });
  }
  if (opts.leftAccent) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x,
      y,
      w: 0.06,
      h,
      fill: { color: opts.leftAccent },
      line: { type: "none" },
    });
  }
}

// Chip badge
function chip(slide, x, y, w, h, label, fill, color) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x,
    y,
    w,
    h,
    fill: { color: fill },
    line: { type: "none" },
    rectRadius: h / 2,
  });
  slide.addText(label, {
    x,
    y,
    w,
    h,
    fontSize: 9,
    fontFace: FONT_H,
    color,
    bold: true,
    align: "center",
    valign: "middle",
    margin: 0,
    charSpacing: 2,
  });
}

// Icon puck (filled colored circle with PNG icon centered)
async function iconCircle(slide, x, y, size, IconComp, bgColor, iconColor = "#FFFFFF") {
  slide.addShape(pres.shapes.OVAL, {
    x,
    y,
    w: size,
    h: size,
    fill: { color: bgColor },
    line: { type: "none" },
  });
  const pad = size * 0.28;
  const data = await iconPNG(IconComp, iconColor.startsWith("#") ? iconColor : "#" + iconColor, 256);
  slide.addImage({
    data,
    x: x + pad,
    y: y + pad,
    w: size - pad * 2,
    h: size - pad * 2,
  });
}

// Icon rounded-square tile (matches the website's icon containers)
async function iconTile(slide, x, y, size, IconComp, bgColor, iconColor = "#FFFFFF") {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x,
    y,
    w: size,
    h: size,
    fill: { color: bgColor },
    line: { type: "none" },
    rectRadius: size * 0.18,
  });
  const pad = size * 0.22;
  const data = await iconPNG(IconComp, iconColor.startsWith("#") ? iconColor : "#" + iconColor, 256);
  slide.addImage({
    data,
    x: x + pad,
    y: y + pad,
    w: size - pad * 2,
    h: size - pad * 2,
  });
}

// Big number card (for stats)
function statBlock(slide, x, y, w, h, value, label, color) {
  card(slide, x, y, w, h, { accent: color });
  slide.addText(value, {
    x: x + 0.1,
    y: y + 0.3,
    w: w - 0.2,
    h: 0.9,
    fontSize: 44,
    fontFace: FONT_H,
    color,
    bold: true,
    align: "center",
    valign: "middle",
    margin: 0,
  });
  slide.addText(label, {
    x: x + 0.1,
    y: y + 1.2,
    w: w - 0.2,
    h: 0.5,
    fontSize: 11,
    fontFace: FONT_B,
    color: C.textMute,
    align: "center",
    margin: 0,
  });
}

// Background decoration ovals (subtle brand glow blobs)
function decorOval(slide, x, y, size, color, opacity = 80) {
  slide.addShape(pres.shapes.OVAL, {
    x,
    y,
    w: size,
    h: size,
    fill: { color, transparency: opacity },
    line: { type: "none" },
  });
}

// ============ MAIN ============
const TOTAL = 16;

async function buildDeck() {
  // ================================================================
  // SLIDE 1 — COVER
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.navy };

    // Large decorative blobs
    decorOval(s, -3.5, -2.5, 8, C.brand, 70);
    decorOval(s, 7, 3, 7, C.cyan, 78);
    decorOval(s, 4, -1, 4, C.cyanBright, 85);

    // Subtle grid pattern simulation (small white dots)
    for (let gx = 0.5; gx < W; gx += 1.5) {
      for (let gy = 0.5; gy < H; gy += 1.5) {
        s.addShape(pres.shapes.OVAL, {
          x: gx,
          y: gy,
          w: 0.02,
          h: 0.02,
          fill: { color: C.white, transparency: 85 },
          line: { type: "none" },
        });
      }
    }

    // Top-left logo
    addLogoMark(s, 0.5, 0.45, "dark");

    // Top-right year/version
    chip(s, W - 1.7, 0.55, 1.3, 0.32, "2026 EDITION", C.cyan, C.white);

    // Eyebrow
    s.addText("CLIENT ONBOARDING", {
      x: 0.5,
      y: 1.9,
      w: 9,
      h: 0.32,
      fontSize: 13,
      fontFace: FONT_H,
      color: C.cyanBright,
      bold: true,
      charSpacing: 8,
      margin: 0,
    });

    // Massive title
    s.addText("Welcome aboard.", {
      x: 0.5,
      y: 2.3,
      w: 9,
      h: 1.2,
      fontSize: 72,
      fontFace: FONT_H,
      color: C.white,
      bold: true,
      margin: 0,
    });

    // Subtitle
    s.addText(
      "Your guide to working with the AGK team — from kickoff through ongoing delivery.",
      {
        x: 0.5,
        y: 3.65,
        w: 8.5,
        h: 0.7,
        fontSize: 17,
        fontFace: FONT_B,
        color: "CBD5E1",
        margin: 0,
      },
    );

    // Bottom strip
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5,
      y: H - 0.85,
      w: 0.6,
      h: 0.04,
      fill: { color: C.cyanBright },
      line: { type: "none" },
    });
    s.addText("Prepared by Anant Global KPO  ·  Chartered Accountant-led", {
      x: 0.5,
      y: H - 0.7,
      w: 8,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT_B,
      color: "94A3B8",
      margin: 0,
    });
  }

  // ================================================================
  // SLIDE 2 — WELCOME
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    // Subtle background blob
    decorOval(s, -2, -2, 5, C.brand, 95);
    decorOval(s, 7, 3, 5, C.cyan, 96);

    addHeader(s, "WELCOME", "Thank you for choosing AGK.");

    // Quote-style intro
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5,
      y: 1.85,
      w: 0.04,
      h: 1.4,
      fill: { color: C.brand },
      line: { type: "none" },
    });
    s.addText(
      "You're not just another engagement on our roster. From this point you have a Chartered Accountant-led team that treats your books like our own.",
      {
        x: 0.7,
        y: 1.8,
        w: 5.4,
        h: 1.5,
        fontSize: 19,
        fontFace: FONT_LIGHT,
        color: C.text,
        margin: 0,
        paraSpaceAfter: 4,
      },
    );

    s.addText(
      "This deck walks you through everything to expect over the next 90 days — kickoff, onboarding, communication, reporting, and ongoing delivery.",
      {
        x: 0.7,
        y: 3.55,
        w: 5.4,
        h: 1.0,
        fontSize: 13,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      },
    );

    // Right-side preview cards
    const items = [
      { num: "01", label: "Who you'll work with", Icon: fi.FiUsers, color: C.brand },
      { num: "02", label: "How we onboard you", Icon: fi.FiClock, color: C.cyan },
      { num: "03", label: "How we communicate", Icon: fi.FiMessageCircle, color: C.brand },
      { num: "04", label: "How we report progress", Icon: fi.FiTrendingUp, color: C.cyan },
    ];
    const cardX = 6.4;
    const cardW = 3.1;
    const cardH = 0.78;
    const cardGap = 0.13;
    const cardY0 = 1.8;
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const y = cardY0 + i * (cardH + cardGap);
      card(s, cardX, y, cardW, cardH);
      await iconCircle(s, cardX + 0.18, y + (cardH - 0.5) / 2, 0.5, it.Icon, it.color);
      s.addText(it.num, {
        x: cardX + 0.85,
        y: y + 0.1,
        w: 0.5,
        h: 0.3,
        fontSize: 11,
        fontFace: FONT_H,
        color: it.color,
        bold: true,
        margin: 0,
        charSpacing: 2,
      });
      s.addText(it.label, {
        x: cardX + 0.85,
        y: y + 0.36,
        w: cardW - 0.95,
        h: 0.4,
        fontSize: 14,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        margin: 0,
      });
    }

    addFooter(s, 2, TOTAL);
  }

  // ================================================================
  // SLIDE 3 — ABOUT AGK
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    decorOval(s, 7, -2, 5, C.brand, 95);

    addHeader(s, "ABOUT AGK", "A CA-led outsourcing partner you can trust.");

    s.addText(
      "Anant Global KPO is a Surat-based accounting outsourcing firm serving CPA firms, accounting practices, and growing businesses across four continents.",
      {
        x: 0.5,
        y: 1.85,
        w: 5.3,
        h: 1.0,
        fontSize: 14,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      },
    );

    s.addText(
      "Our approach combines deep technical knowledge with modern tools and a collaborative leadership style — so your books move forward while you sleep.",
      {
        x: 0.5,
        y: 2.95,
        w: 5.3,
        h: 1.0,
        fontSize: 14,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      },
    );

    // Region chips
    s.addText("SERVING", {
      x: 0.5,
      y: 4.0,
      w: 6,
      h: 0.25,
      fontSize: 10,
      fontFace: FONT_H,
      color: C.textSub,
      bold: true,
      charSpacing: 4,
      margin: 0,
    });
    const regions = ["INDIA", "UAE", "USA", "CANADA", "AUSTRALIA", "NEW ZEALAND"];
    let cx = 0.5;
    for (const r of regions) {
      const w = 0.2 + r.length * 0.08;
      chip(s, cx, 4.3, w, 0.3, r, C.brand100, C.brand);
      cx += w + 0.1;
    }

    // 2x2 stat grid (right)
    const stats = [
      { val: "8+", lbl: "Years of experience", color: C.brand },
      { val: "25+", lbl: "Software platforms", color: C.cyan },
      { val: "<20m", lbl: "Response time", color: C.brand },
      { val: "60%", lbl: "Cost savings", color: C.cyan },
    ];
    const stX = 6.3;
    const stY = 1.7;
    const stW = 1.62;
    const stH = 1.5;
    const stGap = 0.15;
    for (let i = 0; i < stats.length; i++) {
      const x = stX + (i % 2) * (stW + stGap);
      const y = stY + Math.floor(i / 2) * (stH + stGap);
      statBlock(s, x, y, stW, stH, stats[i].val, stats[i].lbl, stats[i].color);
    }

    addFooter(s, 3, TOTAL);
  }

  // ================================================================
  // SLIDE 4 — FOUNDER (dark, dramatic)
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.navy };

    // Background decoration
    decorOval(s, -3, -2, 6, C.brand, 78);
    decorOval(s, 7, 3.5, 5, C.cyan, 82);
    decorOval(s, 4.5, -1, 4, C.cyanBright, 88);

    // Eyebrow + title
    s.addText("FOUNDER", {
      x: 0.5,
      y: 0.45,
      w: 6,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT_H,
      color: C.cyanBright,
      bold: true,
      charSpacing: 6,
      margin: 0,
    });
    s.addText("Meet your partner at the top.", {
      x: 0.5,
      y: 0.78,
      w: 9,
      h: 0.7,
      fontSize: 30,
      fontFace: FONT_H,
      color: C.white,
      bold: true,
      margin: 0,
    });

    // Photo with glow
    const photoPath = path.join(__dirname, "public", "team", "avi-agarwal.png");
    // Glow halo behind photo
    decorOval(s, 0.2, 1.5, 3.7, C.cyan, 60);
    // Photo background frame
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.4,
      y: 1.7,
      w: 3.4,
      h: 3.4,
      fill: { color: C.brand },
      line: { color: C.cyanBright, width: 1 },
      rectRadius: 0.12,
      shadow: brandShadow(),
    });
    s.addImage({
      path: photoPath,
      x: 0.5,
      y: 1.8,
      w: 3.2,
      h: 3.2,
      sizing: { type: "cover", w: 3.2, h: 3.2 },
      rounding: false,
    });

    // Right column
    s.addText("Avi Agarwal", {
      x: 4.2,
      y: 1.65,
      w: 5.5,
      h: 0.7,
      fontSize: 38,
      fontFace: FONT_H,
      color: C.white,
      bold: true,
      margin: 0,
    });
    s.addText("Founder · Chartered Accountant (CA / CPA equivalent)", {
      x: 4.2,
      y: 2.3,
      w: 5.5,
      h: 0.32,
      fontSize: 13,
      fontFace: FONT_B,
      color: C.cyanBright,
      margin: 0,
    });

    // Divider
    s.addShape(pres.shapes.RECTANGLE, {
      x: 4.2,
      y: 2.7,
      w: 0.8,
      h: 0.03,
      fill: { color: C.cyanBright },
      line: { type: "none" },
    });

    s.addText(
      "Five years of hands-on experience in accounting, taxation, and auditing. Certified QuickBooks ProAdvisor and ZOHO specialist. Known for precision, efficiency, and a collaborative style that builds high-performing teams.",
      {
        x: 4.2,
        y: 2.85,
        w: 5.4,
        h: 1.3,
        fontSize: 12,
        fontFace: FONT_B,
        color: "CBD5E1",
        margin: 0,
      },
    );

    // Credential pills with icons
    const creds = [
      { lbl: "CA", Icon: fa.FaAward },
      { lbl: "QuickBooks", Icon: fa.FaBookOpen },
      { lbl: "ZOHO", Icon: hi.HiSparkles },
      { lbl: "5+ Yrs", Icon: fi.FiUsers },
    ];
    let cx = 4.2;
    for (const cred of creds) {
      const w = 0.5 + cred.lbl.length * 0.12;
      // dark pill
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: cx,
        y: 4.3,
        w,
        h: 0.35,
        fill: { color: C.navy800 },
        line: { color: C.cyanDeep, width: 0.5 },
        rectRadius: 0.18,
      });
      await iconCircle(s, cx + 0.05, 4.35, 0.25, cred.Icon, C.cyan);
      s.addText(cred.lbl, {
        x: cx + 0.32,
        y: 4.3,
        w: w - 0.35,
        h: 0.35,
        fontSize: 9,
        fontFace: FONT_H,
        color: C.white,
        bold: true,
        valign: "middle",
        margin: 0,
      });
      cx += w + 0.1;
    }

    // Contact at bottom
    s.addText(
      "admin@anantglobalkpo.com   ·   +91 93272 30005   ·   linkedin.com/in/aviagarwal31",
      {
        x: 4.2,
        y: 4.85,
        w: 5.5,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_B,
        color: "94A3B8",
        margin: 0,
      },
    );

    addFooter(s, 4, TOTAL, true);
  }

  // ================================================================
  // SLIDE 5 — YOUR TEAM
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "YOUR DEDICATED TEAM", "The named people on your books — every day.");

    const team = [
      ["Avi Agarwal", "Founder / Partner", "AA", C.brand],
      ["Monika Ladha", "Team Leader", "ML", C.cyan],
      ["Yukta Lahoti", "Team Leader", "YL", C.brand],
      ["Vaibhav Rampuria", "Sr. Accountant", "VR", C.cyan],
      ["Bhakti Lahoti", "Sr. Accountant", "BL", C.brand],
      ["Sanskar Jain", "Jr. Accountant", "SJ", C.cyan],
      ["Naman Jain", "Jr. Accountant", "NJ", C.brand],
    ];

    const cardW = 2.05;
    const cardH = 1.55;
    const gap = 0.15;
    const xStart0 = 0.5;
    const yRow1 = 1.7;
    const yRow2 = yRow1 + cardH + gap;

    for (let i = 0; i < team.length; i++) {
      const [name, role, initials, col] = team[i];
      const isRow1 = i < 4;
      const idx = isRow1 ? i : i - 4;
      const xStart = isRow1 ? xStart0 : xStart0 + (cardW + gap) / 2;
      const x = xStart + idx * (cardW + gap);
      const y = isRow1 ? yRow1 : yRow2;

      card(s, x, y, cardW, cardH, { accent: col });

      // Initials avatar (gradient-style circle)
      s.addShape(pres.shapes.OVAL, {
        x: x + cardW / 2 - 0.34,
        y: y + 0.22,
        w: 0.68,
        h: 0.68,
        fill: { color: col },
        line: { color: C.white, width: 2 },
      });
      // Inner highlight
      s.addShape(pres.shapes.OVAL, {
        x: x + cardW / 2 - 0.25,
        y: y + 0.27,
        w: 0.5,
        h: 0.18,
        fill: { color: C.white, transparency: 75 },
        line: { type: "none" },
      });
      s.addText(initials, {
        x: x + cardW / 2 - 0.34,
        y: y + 0.22,
        w: 0.68,
        h: 0.68,
        fontSize: 18,
        fontFace: FONT_H,
        color: C.white,
        bold: true,
        align: "center",
        valign: "middle",
        margin: 0,
      });

      s.addText(name, {
        x: x + 0.1,
        y: y + 0.97,
        w: cardW - 0.2,
        h: 0.3,
        fontSize: 12,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        align: "center",
        margin: 0,
      });
      s.addText(role, {
        x: x + 0.1,
        y: y + 1.25,
        w: cardW - 0.2,
        h: 0.25,
        fontSize: 9,
        fontFace: FONT_B,
        color: C.textSub,
        align: "center",
        margin: 0,
      });
    }

    s.addText(
      "Dedicated means dedicated — same named resources, every day. Pod backup ensures PTO never stalls progress.",
      {
        x: 0.5,
        y: H - 0.7,
        w: 9,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textSub,
        italic: true,
        align: "center",
        margin: 0,
      },
    );

    addFooter(s, 5, TOTAL);
  }

  // ================================================================
  // SLIDE 6 — GLOBAL FOOTPRINT (NEW)
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    decorOval(s, -2, 4, 5, C.brand, 95);
    decorOval(s, 8, -2, 5, C.cyan, 96);

    addHeader(s, "GLOBAL FOOTPRINT", "Six countries. One delivery team.");

    // Left: copy
    s.addText(
      "From our hub in Surat, India, we serve businesses across four continents — delivering accurate, time-zone-friendly accounting support that feels local.",
      {
        x: 0.5,
        y: 1.85,
        w: 3.5,
        h: 1.4,
        fontSize: 13,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      },
    );

    // Region cards as a list
    const regions = [
      { code: "IN", name: "India", note: "HQ · Delivery hub", primary: true },
      { code: "AE", name: "UAE", note: "Service region" },
      { code: "US", name: "USA", note: "Service region" },
      { code: "CA", name: "Canada", note: "Service region" },
      { code: "AU", name: "Australia", note: "Service region" },
      { code: "NZ", name: "New Zealand", note: "Service region" },
    ];
    const lX = 0.5;
    const lY = 3.4;
    const lW = 1.4;
    const lH = 0.6;
    const lGap = 0.1;
    for (let i = 0; i < regions.length; i++) {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = lX + col * (lW + lGap);
      const y = lY + row * (lH + lGap);
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y,
        w: lW,
        h: lH,
        fill: { color: regions[i].primary ? C.brand : C.white },
        line: { color: regions[i].primary ? C.brand : C.border, width: 0.75 },
        rectRadius: 0.06,
      });
      s.addText(regions[i].code, {
        x: x + 0.1,
        y: y + 0.05,
        w: 0.5,
        h: 0.3,
        fontSize: 14,
        fontFace: FONT_H,
        color: regions[i].primary ? C.white : C.brand,
        bold: true,
        margin: 0,
      });
      s.addText(regions[i].name, {
        x: x + 0.1,
        y: y + 0.3,
        w: lW - 0.2,
        h: 0.25,
        fontSize: 9,
        fontFace: FONT_B,
        color: regions[i].primary ? C.cyanBright : C.textSub,
        margin: 0,
      });
    }

    // Right: stylised world map (continents as ellipses + pulse pins)
    const mapX = 4.6;
    const mapY = 1.7;
    const mapW = 5.0;
    const mapH = 3.3;

    // Map background frame
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: mapX,
      y: mapY,
      w: mapW,
      h: mapH,
      fill: { color: C.bgSubtle },
      line: { color: C.border, width: 0.5 },
      rectRadius: 0.08,
      shadow: shadow({ blur: 14, offset: 3, opacity: 0.06 }),
    });

    // Continents as soft ovals (very stylized)
    // North America
    s.addShape(pres.shapes.OVAL, {
      x: mapX + 0.3,
      y: mapY + 0.5,
      w: 1.2,
      h: 0.9,
      fill: { color: C.brand400, transparency: 35 },
      line: { type: "none" },
    });
    // South America
    s.addShape(pres.shapes.OVAL, {
      x: mapX + 0.9,
      y: mapY + 1.6,
      w: 0.5,
      h: 1.2,
      fill: { color: C.brand400, transparency: 35 },
      line: { type: "none" },
    });
    // Europe
    s.addShape(pres.shapes.OVAL, {
      x: mapX + 2.1,
      y: mapY + 0.6,
      w: 0.65,
      h: 0.5,
      fill: { color: C.brand400, transparency: 35 },
      line: { type: "none" },
    });
    // Africa
    s.addShape(pres.shapes.OVAL, {
      x: mapX + 2.15,
      y: mapY + 1.2,
      w: 0.85,
      h: 1.3,
      fill: { color: C.brand400, transparency: 35 },
      line: { type: "none" },
    });
    // Asia
    s.addShape(pres.shapes.OVAL, {
      x: mapX + 2.7,
      y: mapY + 0.4,
      w: 1.8,
      h: 1.2,
      fill: { color: C.brand400, transparency: 35 },
      line: { type: "none" },
    });
    // Australia
    s.addShape(pres.shapes.OVAL, {
      x: mapX + 3.7,
      y: mapY + 2.1,
      w: 0.8,
      h: 0.55,
      fill: { color: C.brand400, transparency: 35 },
      line: { type: "none" },
    });

    // Pins (small circles) with labels — use pre-rendered icon
    const pins = [
      { x: mapX + 0.9, y: mapY + 0.95, label: "USA", color: C.cyan },
      { x: mapX + 0.9, y: mapY + 0.55, label: "CAN", color: C.cyan },
      { x: mapX + 2.65, y: mapY + 1.45, label: "UAE", color: C.cyan },
      { x: mapX + 3.1, y: mapY + 1.65, label: "IND", color: C.brand, hq: true },
      { x: mapX + 4.1, y: mapY + 2.4, label: "AUS", color: C.cyan },
      { x: mapX + 4.6, y: mapY + 2.75, label: "NZ", color: C.cyan },
    ];

    // Lines from India to other regions (simulating connections)
    const india = pins.find((p) => p.hq);
    for (const p of pins) {
      if (p.hq) continue;
      const dx = p.x - india.x;
      const dy = p.y - india.y;
      s.addShape(pres.shapes.LINE, {
        x: india.x + 0.08,
        y: india.y + 0.08,
        w: dx,
        h: dy,
        line: {
          color: C.cyan,
          width: 1,
          dashType: "dash",
          transparency: 30,
        },
      });
    }

    // Draw pins on top of lines
    for (const p of pins) {
      // Glow
      s.addShape(pres.shapes.OVAL, {
        x: p.x - 0.15,
        y: p.y - 0.15,
        w: 0.46,
        h: 0.46,
        fill: { color: p.color, transparency: 70 },
        line: { type: "none" },
      });
      // Pin
      s.addShape(pres.shapes.OVAL, {
        x: p.x,
        y: p.y,
        w: 0.16,
        h: 0.16,
        fill: { color: p.color },
        line: { color: C.white, width: 1 },
      });
      // Label pill
      const pillW = 0.5;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: p.x - (pillW - 0.16) / 2,
        y: p.y - 0.35,
        w: pillW,
        h: 0.22,
        fill: { color: p.hq ? p.color : C.white },
        line: { color: p.color, width: 0.5 },
        rectRadius: 0.11,
      });
      s.addText(p.label, {
        x: p.x - (pillW - 0.16) / 2,
        y: p.y - 0.35,
        w: pillW,
        h: 0.22,
        fontSize: 7,
        fontFace: FONT_H,
        color: p.hq ? C.white : p.color,
        bold: true,
        align: "center",
        valign: "middle",
        margin: 0,
      });
    }

    addFooter(s, 6, TOTAL);
  }

  // ================================================================
  // SLIDE 7 — ONBOARDING TIMELINE
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "ONBOARDING TIMELINE", "From kickoff to go-live in 4 weeks.");

    const phases = [
      {
        week: "Week 1",
        title: "Discovery",
        Icon: fi.FiSearch,
        points: ["Kickoff & goal setting", "Access to your systems", "Document inventory"],
        color: C.brand,
      },
      {
        week: "Week 2",
        title: "Knowledge Transfer",
        Icon: fi.FiBookOpen,
        points: ["SOP documentation", "Walk-throughs with your team", "Shadow runs on live data"],
        color: C.brand600,
      },
      {
        week: "Weeks 3–4",
        title: "Parallel Run",
        Icon: fi.FiRefreshCw,
        points: ["We do, you review", "Quality checks & feedback", "Process refinement"],
        color: C.cyan,
      },
      {
        week: "Week 4+",
        title: "Go Live",
        Icon: fi.FiCheckCircle,
        points: ["Operational ownership", "Daily/weekly reporting", "QBR cadence begins"],
        color: C.cyanBright,
      },
    ];

    // Timeline track
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5,
      y: 2.55,
      w: 9,
      h: 0.04,
      fill: { color: C.divider },
      line: { type: "none" },
    });

    const colW = 2.15;
    const gap = 0.12;
    for (let i = 0; i < phases.length; i++) {
      const p = phases[i];
      const x = 0.5 + i * (colW + gap);

      // Step puck on the track
      await iconCircle(s, x + colW / 2 - 0.25, 2.32, 0.5, p.Icon, p.color);

      // Week label
      s.addText(p.week.toUpperCase(), {
        x,
        y: 1.85,
        w: colW,
        h: 0.3,
        fontSize: 11,
        fontFace: FONT_H,
        color: p.color,
        bold: true,
        align: "center",
        charSpacing: 3,
        margin: 0,
      });

      // Card below
      const cardY = 3.1;
      const cardH = 2.0;
      card(s, x, cardY, colW, cardH);
      s.addText(p.title, {
        x: x + 0.18,
        y: cardY + 0.15,
        w: colW - 0.3,
        h: 0.4,
        fontSize: 16,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        margin: 0,
      });

      const bulletItems = p.points.map((pt, idx) => ({
        text: pt,
        options: {
          bullet: { code: "25CF" },
          breakLine: idx < p.points.length - 1,
          fontSize: 11,
          color: C.textMute,
          paraSpaceAfter: 4,
        },
      }));
      s.addText(bulletItems, {
        x: x + 0.18,
        y: cardY + 0.6,
        w: colW - 0.25,
        h: cardH - 0.7,
        fontFace: FONT_B,
        paraSpaceAfter: 4,
        margin: 0,
      });
    }

    addFooter(s, 7, TOTAL);
  }

  // ================================================================
  // SLIDE 8 — COMMUNICATION
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "COMMUNICATION", "We meet you where your team already works.");

    const channels = [
      { Icon: fa6.FaSlack, name: "Slack", desc: "Daily async updates", color: "611F69" },
      { Icon: fa.FaMicrosoft, name: "MS Teams", desc: "Live collaboration", color: "4B53BC" },
      { Icon: md.MdEmail, name: "Email", desc: "Formal correspondence", color: C.brand },
      { Icon: si.SiZoom, name: "Zoom", desc: "Weekly status calls", color: "2D8CFF" },
      { Icon: fa.FaWhatsapp, name: "WhatsApp", desc: "Urgent escalations", color: "25D366" },
      { Icon: si.SiGmail, name: "Gmail / Outlook", desc: "Document sharing", color: "EA4335" },
    ];

    const cardW = 2.95;
    const cardH = 1.4;
    const gap = 0.18;
    const startX = (W - (3 * cardW + 2 * gap)) / 2;
    const startY = 1.85;

    for (let i = 0; i < channels.length; i++) {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = startX + col * (cardW + gap);
      const y = startY + row * (cardH + 0.2);
      const ch = channels[i];

      card(s, x, y, cardW, cardH);
      await iconTile(s, x + 0.25, y + (cardH - 0.7) / 2, 0.7, ch.Icon, ch.color);

      s.addText(ch.name, {
        x: x + 1.1,
        y: y + 0.3,
        w: cardW - 1.2,
        h: 0.4,
        fontSize: 15,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        margin: 0,
      });
      s.addText(ch.desc, {
        x: x + 1.1,
        y: y + 0.75,
        w: cardW - 1.2,
        h: 0.4,
        fontSize: 11,
        fontFace: FONT_B,
        color: C.textSub,
        margin: 0,
      });
    }

    s.addText(
      "Each engagement gets a single point of accountability and a documented escalation path. You always know who to ping.",
      {
        x: 0.5,
        y: H - 0.7,
        w: 9,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textSub,
        italic: true,
        align: "center",
        margin: 0,
      },
    );

    addFooter(s, 8, TOTAL);
  }

  // ================================================================
  // SLIDE 9 — REPORTING CADENCE
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "REPORTING CADENCE", "You'll never wonder what's going on.");

    const cadence = [
      {
        freq: "WEEKLY",
        title: "Status Update",
        Icon: fi.FiCalendar,
        desc: "Brief written summary of progress, blockers, and next week's plan.",
        items: ["Tasks completed", "Open items", "Hours used vs. budget"],
        color: C.brand,
      },
      {
        freq: "MONTHLY",
        title: "Close Package",
        Icon: fi.FiFileText,
        desc: "Full month-end deliverables ready for review or audit.",
        items: [
          "Balance Sheet, P&L, Cash Flow",
          "Bank & card reconciliations",
          "AR / AP aging reports",
          "KPI dashboard",
        ],
        color: C.cyan,
      },
      {
        freq: "QUARTERLY",
        title: "Business Review",
        Icon: fi.FiPieChart,
        desc: "60-min review with senior leadership on insights and roadmap.",
        items: [
          "Trends & variances",
          "Cash flow forecast",
          "Process improvement",
        ],
        color: C.brand600,
      },
    ];

    const cardW = 3.0;
    const cardH = 3.3;
    const gap = 0.15;
    const startX = (W - (3 * cardW + 2 * gap)) / 2;
    const startY = 1.7;

    for (let i = 0; i < cadence.length; i++) {
      const x = startX + i * (cardW + gap);
      const c = cadence[i];

      card(s, x, startY, cardW, cardH, { accent: c.color });

      // Header row: icon + freq chip
      await iconCircle(s, x + 0.22, startY + 0.22, 0.5, c.Icon, c.color);
      chip(s, x + 0.85, startY + 0.32, 1.05, 0.28, c.freq, c.color, C.white);

      // Title
      s.addText(c.title, {
        x: x + 0.22,
        y: startY + 0.85,
        w: cardW - 0.4,
        h: 0.5,
        fontSize: 19,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        margin: 0,
      });

      // Description
      s.addText(c.desc, {
        x: x + 0.22,
        y: startY + 1.4,
        w: cardW - 0.4,
        h: 0.7,
        fontSize: 11,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      });

      // Items
      const itemBullets = c.items.map((it, idx) => ({
        text: it,
        options: {
          bullet: { code: "25CF" },
          breakLine: idx < c.items.length - 1,
          color: C.text,
          fontSize: 10,
          paraSpaceAfter: 3,
        },
      }));
      s.addText(itemBullets, {
        x: x + 0.22,
        y: startY + 2.15,
        w: cardW - 0.35,
        h: 1.1,
        fontFace: FONT_B,
        paraSpaceAfter: 3,
        margin: 0,
      });
    }

    addFooter(s, 9, TOTAL);
  }

  // ================================================================
  // SLIDE 10 — TOOLS & SOFTWARE (brand logos as colored tiles)
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "TOOLS & SOFTWARE", "Day-one productive on your stack.");

    // Each tool — use SimpleIcons brand logos where available
    const tools = [
      { name: "QuickBooks", desc: "Online & Desktop", Icon: si.SiQuickbooks, color: "2CA01C" },
      { name: "Xero", desc: "Cloud accounting", Icon: si.SiXero, color: "13B5EA" },
      { name: "Oracle NetSuite", desc: "Enterprise ERP", Icon: fa6.FaCubes, color: "C74634" },
      { name: "Sage", desc: "Mid-market", Icon: si.SiSage, color: "00DC84" },
      { name: "Zoho Books", desc: "SMB suite", Icon: si.SiZoho, color: "E42527" },
      { name: "Yardi", desc: "Real estate", Icon: fa.FaBuilding, color: "003366" },
      { name: "AppFolio", desc: "Property mgmt", Icon: fa.FaHome, color: "15406C" },
      { name: "Wave", desc: "Bookkeeping", Icon: fa.FaWaveSquare, color: "1B6BFF" },
    ];

    const cardW = 2.2;
    const cardH = 1.0;
    const gap = 0.15;
    const cols = 4;
    const startX = (W - (cols * cardW + (cols - 1) * gap)) / 2;
    const startY = 1.85;

    for (let i = 0; i < tools.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = startX + col * (cardW + gap);
      const y = startY + row * (cardH + gap);
      const t = tools[i];

      card(s, x, y, cardW, cardH);
      await iconTile(s, x + 0.18, y + 0.2, 0.6, t.Icon, t.color);
      s.addText(t.name, {
        x: x + 0.9,
        y: y + 0.2,
        w: cardW - 1.0,
        h: 0.35,
        fontSize: 13,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        margin: 0,
      });
      s.addText(t.desc, {
        x: x + 0.9,
        y: y + 0.52,
        w: cardW - 1.0,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textSub,
        margin: 0,
      });
    }

    s.addText(
      "Plus: Bill.com · Ramp · Gusto · ADP · Hubdoc · Dext · Slack · Teams · Notion · SharePoint · Box · Drive · Dropbox",
      {
        x: 0.5,
        y: H - 0.85,
        w: 9,
        h: 0.4,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textSub,
        italic: true,
        align: "center",
        margin: 0,
      },
    );

    addFooter(s, 10, TOTAL);
  }

  // ================================================================
  // SLIDE 11 — DATA SECURITY (dark)
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.navy };

    decorOval(s, 7, -2, 6, C.brand, 80);
    decorOval(s, -3, 3, 5, C.cyan, 88);

    s.addText("DATA SECURITY", {
      x: 0.5,
      y: 0.45,
      w: 6,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT_H,
      color: C.cyanBright,
      bold: true,
      charSpacing: 6,
      margin: 0,
    });
    s.addText("Your data is treated like it's our own.", {
      x: 0.5,
      y: 0.78,
      w: 9,
      h: 0.7,
      fontSize: 30,
      fontFace: FONT_H,
      color: C.white,
      bold: true,
      margin: 0,
    });

    const pillars = [
      { Icon: fa.FaFileSignature, title: "Signed NDA", desc: "Every team member signs an NDA before touching your data." },
      { Icon: fa.FaShieldAlt, title: "Multi-Factor Auth", desc: "Mandatory MFA on every system, app, and login we use." },
      { Icon: fa.FaUserLock, title: "Least Privilege", desc: "Access granted only to what's needed for the task — nothing more." },
      { Icon: fa.FaHistory, title: "Activity Logging", desc: "All access and changes are logged and auditable on request." },
      { Icon: fa.FaServer, title: "Secure Workflows", desc: "Hardened virtual environments; no local data downloads by default." },
      { Icon: fa.FaUsersCog, title: "Business Continuity", desc: "Pod-based teams ensure delivery survives any individual absence." },
    ];

    const cardW = 2.95;
    const cardH = 1.45;
    const gap = 0.15;
    const startX = (W - (3 * cardW + 2 * gap)) / 2;
    const startY = 1.85;

    for (let i = 0; i < pillars.length; i++) {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = startX + col * (cardW + gap);
      const y = startY + row * (cardH + gap);
      const p = pillars[i];

      darkCard(s, x, y, cardW, cardH, { leftAccent: C.cyanBright });
      await iconTile(s, x + 0.22, y + 0.22, 0.55, p.Icon, C.brand);
      s.addText(p.title, {
        x: x + 0.9,
        y: y + 0.22,
        w: cardW - 1.0,
        h: 0.4,
        fontSize: 14,
        fontFace: FONT_H,
        color: C.white,
        bold: true,
        margin: 0,
      });
      s.addText(p.desc, {
        x: x + 0.22,
        y: y + 0.85,
        w: cardW - 0.35,
        h: cardH - 0.95,
        fontSize: 10,
        fontFace: FONT_B,
        color: "CBD5E1",
        margin: 0,
      });
    }

    addFooter(s, 11, TOTAL, true);
  }

  // ================================================================
  // SLIDE 12 — SLA / KPIs
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "SERVICE COMMITMENTS", "What you can hold us to.");

    // Table
    const tblHeader = (txt) => ({
      text: txt,
      options: {
        fill: { color: C.navy },
        color: C.white,
        bold: true,
        fontFace: FONT_H,
        align: "left",
        valign: "middle",
      },
    });
    const rows = [
      [tblHeader("Metric"), tblHeader("Target")],
      ["Email response (working hours)", "< 4 hours"],
      ["Urgent escalation acknowledgement", "< 20 min"],
      ["Monthly close completion", "Day 5"],
      ["Reconciliation accuracy", "> 99%"],
      ["Team availability (US business hrs)", "≥ 6 hours overlap"],
      ["Quarterly business review", "Within 10 days of QE"],
    ];

    s.addTable(rows, {
      x: 0.5,
      y: 1.85,
      w: 5.4,
      h: 2.9,
      colW: [3.3, 2.1],
      rowH: 0.39,
      fontSize: 11,
      fontFace: FONT_B,
      color: C.text,
      border: { type: "solid", pt: 0.5, color: C.border },
      fill: { color: C.white },
    });

    // KPI callouts on right
    const kpis = [
      { val: "99%", lbl: "Reconciliation accuracy", color: C.brand, Icon: fi.FiTarget },
      { val: "<4h", lbl: "Avg. response time", color: C.cyan, Icon: fi.FiClock },
      { val: "Day 5", lbl: "Monthly close ready", color: C.brand600, Icon: fi.FiCalendar },
    ];
    const kx = 6.3;
    let ky = 1.85;
    for (const k of kpis) {
      card(s, kx, ky, 3.2, 0.9, { leftAccent: k.color });
      await iconCircle(s, kx + 0.2, ky + 0.2, 0.5, k.Icon, k.color);
      s.addText(k.val, {
        x: kx + 0.85,
        y: ky + 0.05,
        w: 1.1,
        h: 0.55,
        fontSize: 24,
        fontFace: FONT_H,
        color: k.color,
        bold: true,
        valign: "middle",
        margin: 0,
      });
      s.addText(k.lbl, {
        x: kx + 0.85,
        y: ky + 0.5,
        w: 2.3,
        h: 0.35,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      });
      ky += 1.0;
    }

    s.addText(
      "All SLAs are documented in your Engagement Letter. Misses trigger an automatic Root Cause Analysis shared within 48 hours.",
      {
        x: 0.5,
        y: H - 0.7,
        w: 9,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textSub,
        italic: true,
        align: "center",
        margin: 0,
      },
    );

    addFooter(s, 12, TOTAL);
  }

  // ================================================================
  // SLIDE 13 — KEY CONTACTS / ESCALATION
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "KEY CONTACTS", "Three-tier escalation, never a dead end.");

    const tiers = [
      {
        level: "LEVEL 1",
        title: "Day-to-day delivery",
        who: "Sr. / Jr. Accountant",
        sla: "Within 4 hours",
        desc: "Your first point of contact. Handles routine queries, daily updates, and transactional questions.",
        color: C.cyan,
        Icon: fi.FiUser,
      },
      {
        level: "LEVEL 2",
        title: "Team Leader",
        who: "Monika Ladha / Yukta Lahoti",
        sla: "Within 2 hours",
        desc: "Process issues, scope changes, quality escalations, or any time you'd like a senior perspective.",
        color: C.brand600,
        Icon: fi.FiUsers,
      },
      {
        level: "LEVEL 3",
        title: "Founder / Partner",
        who: "Avi Agarwal, CA",
        sla: "Within 1 hour",
        desc: "Strategic, contractual, or anything unresolved at L2. Direct phone and email access.",
        color: C.brand,
        Icon: fi.FiAward,
      },
    ];

    const cardW = 3.0;
    const cardH = 3.0;
    const gap = 0.15;
    const startX = (W - (3 * cardW + 2 * gap)) / 2;
    const startY = 1.85;

    for (let i = 0; i < tiers.length; i++) {
      const x = startX + i * (cardW + gap);
      const t = tiers[i];

      card(s, x, startY, cardW, cardH, { accent: t.color });

      // Top row: icon + level chip
      await iconCircle(s, x + 0.22, startY + 0.22, 0.55, t.Icon, t.color);
      chip(s, x + 1.0, startY + 0.32, 1.0, 0.28, t.level, t.color, C.white);

      s.addText(t.title, {
        x: x + 0.22,
        y: startY + 0.92,
        w: cardW - 0.4,
        h: 0.4,
        fontSize: 16,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        margin: 0,
      });
      s.addText(t.who, {
        x: x + 0.22,
        y: startY + 1.32,
        w: cardW - 0.4,
        h: 0.3,
        fontSize: 12,
        fontFace: FONT_B,
        color: t.color,
        bold: true,
        margin: 0,
      });
      s.addText(`Response: ${t.sla}`, {
        x: x + 0.22,
        y: startY + 1.65,
        w: cardW - 0.4,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textSub,
        margin: 0,
      });
      s.addText(t.desc, {
        x: x + 0.22,
        y: startY + 2.05,
        w: cardW - 0.4,
        h: 0.85,
        fontSize: 11,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      });
    }

    addFooter(s, 13, TOTAL);
  }

  // ================================================================
  // SLIDE 14 — KICKOFF CHECKLIST
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.white };

    addHeader(s, "KICKOFF CHECKLIST", "What we'll need from you in week 1.");

    const items = [
      {
        Icon: fi.FiKey,
        title: "Software access",
        desc: "Read/write logins to QuickBooks, Xero, NetSuite, banking, payroll — whichever you use.",
      },
      {
        Icon: fi.FiFile,
        title: "Last 3 months of records",
        desc: "Bank statements, credit card statements, recent reconciliations, and current trial balance.",
      },
      {
        Icon: fi.FiList,
        title: "Chart of Accounts",
        desc: "Current CoA and any custom classifications, departments, or locations to preserve.",
      },
      {
        Icon: fi.FiUsers,
        title: "Vendor & customer master",
        desc: "Active vendor and customer lists with default terms, payment methods, and special handling notes.",
      },
      {
        Icon: fi.FiCheckSquare,
        title: "Authorized signatories",
        desc: "Who can approve invoices, payment runs, journal entries, and reclassifications.",
      },
      {
        Icon: fi.FiMail,
        title: "Internal stakeholders",
        desc: "Engagement Lead, CFO/Controller, and accounting team contacts we'll coordinate with.",
      },
    ];

    const colW = 4.4;
    const rowH = 1.0;
    const gap = 0.2;
    const startX = 0.5;
    const startY = 1.85;

    for (let i = 0; i < items.length; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = startX + col * (colW + gap);
      const y = startY + row * (rowH + gap);
      const it = items[i];
      const accent = i % 2 === 0 ? C.brand : C.cyan;

      await iconCircle(s, x, y + (rowH - 0.55) / 2, 0.55, it.Icon, accent);

      // Number subtle
      s.addText(String(i + 1).padStart(2, "0"), {
        x: x + 0.65,
        y: y + 0.05,
        w: 0.5,
        h: 0.25,
        fontSize: 9,
        fontFace: FONT_H,
        color: accent,
        bold: true,
        charSpacing: 2,
        margin: 0,
      });
      s.addText(it.title, {
        x: x + 0.65,
        y: y + 0.25,
        w: colW - 0.7,
        h: 0.35,
        fontSize: 14,
        fontFace: FONT_H,
        color: C.text,
        bold: true,
        margin: 0,
      });
      s.addText(it.desc, {
        x: x + 0.65,
        y: y + 0.58,
        w: colW - 0.7,
        h: 0.5,
        fontSize: 10,
        fontFace: FONT_B,
        color: C.textMute,
        margin: 0,
      });
    }

    addFooter(s, 14, TOTAL);
  }

  // ================================================================
  // SLIDE 15 — OUR COMMITMENT (dark)
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.navy };

    decorOval(s, -3, 2, 6, C.brand, 80);
    decorOval(s, 8, -2, 5, C.cyan, 85);

    s.addText("OUR COMMITMENT", {
      x: 0.5,
      y: 0.45,
      w: 6,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT_H,
      color: C.cyanBright,
      bold: true,
      charSpacing: 6,
      margin: 0,
    });
    s.addText("Four principles we hold ourselves to.", {
      x: 0.5,
      y: 0.78,
      w: 9,
      h: 0.7,
      fontSize: 30,
      fontFace: FONT_H,
      color: C.white,
      bold: true,
      margin: 0,
    });

    const principles = [
      { Icon: fi.FiTarget, title: "Accuracy", desc: "Books that reconcile, reports that hold up to scrutiny.", color: C.cyan },
      { Icon: fi.FiShield, title: "Integrity", desc: "We say what we'll do, and we do what we say.", color: C.brand },
      { Icon: fi.FiLock, title: "Confidentiality", desc: "Your data is treated like it's our own.", color: C.cyan },
      { Icon: fi.FiZap, title: "Responsiveness", desc: "Proactive updates, no chasing for status.", color: C.brand },
    ];

    const cardW = 4.4;
    const cardH = 1.6;
    const gap = 0.2;
    const startX = (W - (2 * cardW + gap)) / 2;
    const startY = 2.0;

    for (let i = 0; i < principles.length; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = startX + col * (cardW + gap);
      const y = startY + row * (cardH + gap);
      const p = principles[i];

      darkCard(s, x, y, cardW, cardH);
      await iconTile(s, x + 0.3, y + (cardH - 0.8) / 2, 0.8, p.Icon, p.color);
      s.addText(p.title, {
        x: x + 1.3,
        y: y + 0.35,
        w: cardW - 1.4,
        h: 0.4,
        fontSize: 19,
        fontFace: FONT_H,
        color: C.white,
        bold: true,
        margin: 0,
      });
      s.addText(p.desc, {
        x: x + 1.3,
        y: y + 0.8,
        w: cardW - 1.4,
        h: 0.7,
        fontSize: 11,
        fontFace: FONT_B,
        color: "CBD5E1",
        margin: 0,
      });
    }

    addFooter(s, 15, TOTAL, true);
  }

  // ================================================================
  // SLIDE 16 — THANK YOU / NEXT STEPS
  // ================================================================
  {
    const s = pres.addSlide();
    s.background = { color: C.navy };

    // Background decoration
    decorOval(s, -4, -3, 8, C.brand, 75);
    decorOval(s, 6, 3, 7, C.cyan, 80);
    decorOval(s, 4, -1.5, 4, C.cyanBright, 88);

    addLogoMark(s, 0.5, 0.45, "dark");

    s.addText("NEXT STEPS", {
      x: 0.5,
      y: 1.55,
      w: 9,
      h: 0.3,
      fontSize: 13,
      fontFace: FONT_H,
      color: C.cyanBright,
      bold: true,
      charSpacing: 8,
      margin: 0,
    });

    s.addText("Let's get to work.", {
      x: 0.5,
      y: 1.9,
      w: 9,
      h: 1.1,
      fontSize: 64,
      fontFace: FONT_H,
      color: C.white,
      bold: true,
      margin: 0,
    });

    s.addText(
      "Your kickoff call is the next step — we'll send a calendar invite within 24 hours.",
      {
        x: 0.5,
        y: 3.1,
        w: 9,
        h: 0.4,
        fontSize: 16,
        fontFace: FONT_B,
        color: "CBD5E1",
        margin: 0,
      },
    );

    // Contact cards row
    const contacts = [
      { Icon: md.MdEmail, text: "admin@anantglobalkpo.com", color: C.cyan },
      { Icon: fi.FiPhone, text: "+91 93272 30005", color: C.brand400 },
      { Icon: fa.FaLinkedin, text: "linkedin.com/in/aviagarwal31", color: C.cyan },
    ];
    const cardW = 2.95;
    const cardH = 0.85;
    const gap = 0.15;
    const startX = (W - (3 * cardW + 2 * gap)) / 2;
    const startY = 3.95;

    for (let i = 0; i < contacts.length; i++) {
      const x = startX + i * (cardW + gap);
      const c = contacts[i];
      darkCard(s, x, startY, cardW, cardH, { leftAccent: c.color });
      await iconCircle(s, x + 0.18, startY + (cardH - 0.5) / 2, 0.5, c.Icon, c.color);
      s.addText(c.text, {
        x: x + 0.82,
        y: startY,
        w: cardW - 0.92,
        h: cardH,
        fontSize: 11,
        fontFace: FONT_B,
        color: C.white,
        bold: true,
        valign: "middle",
        margin: 0,
      });
    }

    s.addText(
      "Anant Global KPO  ·  G 50, West Field Mall, Ghod Dod Rd, Adarsh Society, Athwa, Surat, Gujarat 395001",
      {
        x: 0.5,
        y: H - 0.45,
        w: 9,
        h: 0.3,
        fontSize: 10,
        fontFace: FONT_B,
        color: "94A3B8",
        align: "center",
        margin: 0,
      },
    );
  }

  // ============================================================
  await pres.writeFile({ fileName: "AGK_Client_Onboarding_v2.pptx" });
  console.log("✓ Wrote AGK_Client_Onboarding_v2.pptx");
}

buildDeck().catch((err) => {
  console.error("BUILD FAILED:", err);
  process.exit(1);
});
