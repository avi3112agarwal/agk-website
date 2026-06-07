export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Offshore accounting collaboration illustration"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#ECFEFF" />
        </linearGradient>
        <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#0F172A" floodOpacity="0.10" />
        </filter>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1E40AF" floodOpacity="0.18" />
        </filter>
      </defs>

      <rect x="20" y="20" width="520" height="480" rx="36" fill="url(#bgGrad)" />

      {/* Decorative orbits */}
      <circle cx="280" cy="260" r="200" stroke="#BFDBFE" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.7" />
      <circle cx="280" cy="260" r="150" stroke="#A5F3FC" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.7" />

      {/* Dashboard card (back) */}
      <g filter="url(#cardShadow)">
        <rect x="70" y="90" width="330" height="220" rx="18" fill="url(#cardGrad)" />
        <rect x="90" y="110" width="120" height="14" rx="7" fill="#E2E8F0" />
        <rect x="90" y="134" width="80" height="10" rx="5" fill="#F1F5F9" />

        {/* chart bars */}
        <rect x="90" y="180" width="22" height="90" rx="6" fill="#DBEAFE" />
        <rect x="120" y="200" width="22" height="70" rx="6" fill="#BFDBFE" />
        <rect x="150" y="170" width="22" height="100" rx="6" fill="#93C5FD" />
        <rect x="180" y="150" width="22" height="120" rx="6" fill="url(#brandGrad)" />
        <rect x="210" y="190" width="22" height="80" rx="6" fill="#BFDBFE" />
        <rect x="240" y="160" width="22" height="110" rx="6" fill="#67E8F9" />

        {/* line chart panel */}
        <rect x="280" y="150" width="100" height="120" rx="10" fill="#F8FAFC" />
        <path d="M290 240 L305 220 L320 230 L335 200 L350 215 L365 180 L375 190" stroke="url(#brandGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="375" cy="190" r="4" fill="#06B6D4" />
      </g>

      {/* Document card (front-left) */}
      <g filter="url(#cardShadow)">
        <rect x="50" y="280" width="200" height="160" rx="16" fill="#FFFFFF" />
        <rect x="68" y="300" width="80" height="10" rx="5" fill="#0F172A" />
        <rect x="68" y="318" width="120" height="6" rx="3" fill="#CBD5E1" />
        <rect x="68" y="332" width="100" height="6" rx="3" fill="#E2E8F0" />

        <rect x="68" y="360" width="164" height="1" fill="#E2E8F0" />
        <rect x="68" y="375" width="60" height="8" rx="4" fill="#94A3B8" />
        <rect x="172" y="375" width="60" height="8" rx="4" fill="#0F172A" />

        <rect x="68" y="395" width="60" height="8" rx="4" fill="#94A3B8" />
        <rect x="172" y="395" width="60" height="8" rx="4" fill="#0F172A" />

        <rect x="68" y="415" width="60" height="8" rx="4" fill="#94A3B8" />
        <rect x="172" y="415" width="60" height="8" rx="4" fill="#1E40AF" />
      </g>

      {/* KPI pill (top right) */}
      <g filter="url(#softShadow)">
        <rect x="350" y="60" width="160" height="64" rx="18" fill="#0F172A" />
        <circle cx="378" cy="92" r="14" fill="url(#brandGrad)" />
        <path d="M372 92 L376 96 L384 88" stroke="#FFFFFF" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="400" y="78" width="80" height="8" rx="4" fill="#334155" />
        <rect x="400" y="92" width="60" height="8" rx="4" fill="#94A3B8" />
        <rect x="400" y="105" width="40" height="6" rx="3" fill="#475569" />
      </g>

      {/* Floating badge bottom right */}
      <g filter="url(#softShadow)">
        <rect x="380" y="340" width="140" height="100" rx="18" fill="#FFFFFF" />
        <circle cx="408" cy="372" r="16" fill="#ECFEFF" />
        <path d="M400 372 L406 378 L416 366" stroke="#06B6D4" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="432" y="362" width="70" height="8" rx="4" fill="#0F172A" />
        <rect x="432" y="376" width="50" height="6" rx="3" fill="#94A3B8" />
        <rect x="398" y="400" width="104" height="6" rx="3" fill="#E2E8F0" />
        <rect x="398" y="414" width="80" height="6" rx="3" fill="#F1F5F9" />
      </g>

      {/* Connecting dotted arc */}
      <path d="M220 200 Q 330 100 430 90" stroke="#06B6D4" strokeWidth="1.4" strokeDasharray="3 5" fill="none" />
      <path d="M230 380 Q 320 350 400 380" stroke="#1E40AF" strokeWidth="1.4" strokeDasharray="3 5" fill="none" />
    </svg>
  );
}
