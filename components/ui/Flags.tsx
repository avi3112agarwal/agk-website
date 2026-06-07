/**
 * Simplified inline SVG flags. Stylised (not pixel-perfect) so they
 * render crisply at any size and keep payload small.
 */
import { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base: P = { viewBox: "0 0 60 40", preserveAspectRatio: "xMidYMid slice" };

export function IndiaFlag(props: P) {
  return (
    <svg {...base} {...props}>
      <rect width="60" height="13.33" fill="#FF9933" />
      <rect y="13.33" width="60" height="13.33" fill="#fff" />
      <rect y="26.66" width="60" height="13.34" fill="#138808" />
      <g transform="translate(30 20)">
        <circle r="4.5" fill="none" stroke="#000080" strokeWidth="0.8" />
        <circle r="1.2" fill="#000080" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-4.5"
            stroke="#000080"
            strokeWidth="0.4"
            transform={`rotate(${i * 30})`}
          />
        ))}
      </g>
    </svg>
  );
}

export function UAEFlag(props: P) {
  return (
    <svg {...base} {...props}>
      <rect width="60" height="13.33" fill="#00732F" />
      <rect y="13.33" width="60" height="13.33" fill="#fff" />
      <rect y="26.66" width="60" height="13.34" fill="#000" />
      <rect width="15" height="40" fill="#FF0000" />
    </svg>
  );
}

export function USAFlag(props: P) {
  return (
    <svg {...base} {...props}>
      {/* 13 stripes */}
      {Array.from({ length: 13 }).map((_, i) => (
        <rect
          key={i}
          y={i * (40 / 13)}
          width="60"
          height={40 / 13}
          fill={i % 2 === 0 ? "#B22234" : "#fff"}
        />
      ))}
      {/* Canton */}
      <rect width="24" height={40 * (7 / 13)} fill="#3C3B6E" />
      {/* Stylised stars (just a few visible dots) */}
      {Array.from({ length: 5 }).flatMap((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={2.4 + col * 4.6}
            cy={2.4 + row * 3.6}
            r="0.7"
            fill="#fff"
          />
        )),
      )}
    </svg>
  );
}

export function CanadaFlag(props: P) {
  return (
    <svg {...base} {...props}>
      <rect width="60" height="40" fill="#fff" />
      <rect width="15" height="40" fill="#FF0000" />
      <rect x="45" width="15" height="40" fill="#FF0000" />
      {/* Stylised maple leaf */}
      <g transform="translate(30 20)" fill="#FF0000">
        <path d="M0 -10 L2 -4 L7 -5 L4 -1 L9 1 L4 3 L5 8 L0 5 L-5 8 L-4 3 L-9 1 L-4 -1 L-7 -5 L-2 -4 Z" />
      </g>
    </svg>
  );
}

export function AustraliaFlag(props: P) {
  return (
    <svg {...base} {...props}>
      <rect width="60" height="40" fill="#012169" />
      {/* Simplified Union Jack canton */}
      <g>
        <rect width="30" height="20" fill="#012169" />
        <path d="M0 0 L30 20 M30 0 L0 20" stroke="#fff" strokeWidth="2" />
        <path d="M0 0 L30 20 M30 0 L0 20" stroke="#C8102E" strokeWidth="1" />
        <path d="M15 0 V20 M0 10 H30" stroke="#fff" strokeWidth="3" />
        <path d="M15 0 V20 M0 10 H30" stroke="#C8102E" strokeWidth="1.5" />
      </g>
      {/* Commonwealth star */}
      <circle cx="15" cy="30" r="2.5" fill="#fff" />
      {/* Southern Cross (simplified) */}
      <circle cx="45" cy="8" r="1.4" fill="#fff" />
      <circle cx="50" cy="14" r="1.4" fill="#fff" />
      <circle cx="42" cy="18" r="1.4" fill="#fff" />
      <circle cx="48" cy="24" r="1.4" fill="#fff" />
      <circle cx="44" cy="30" r="1" fill="#fff" />
    </svg>
  );
}

export function NewZealandFlag(props: P) {
  return (
    <svg {...base} {...props}>
      <rect width="60" height="40" fill="#012169" />
      {/* Simplified Union Jack canton */}
      <g>
        <rect width="30" height="20" fill="#012169" />
        <path d="M0 0 L30 20 M30 0 L0 20" stroke="#fff" strokeWidth="2" />
        <path d="M0 0 L30 20 M30 0 L0 20" stroke="#C8102E" strokeWidth="1" />
        <path d="M15 0 V20 M0 10 H30" stroke="#fff" strokeWidth="3" />
        <path d="M15 0 V20 M0 10 H30" stroke="#C8102E" strokeWidth="1.5" />
      </g>
      {/* Southern Cross (4 red stars with white border) */}
      <g>
        <circle cx="48" cy="10" r="2" fill="#fff" />
        <circle cx="48" cy="10" r="1.2" fill="#C8102E" />
        <circle cx="54" cy="18" r="2" fill="#fff" />
        <circle cx="54" cy="18" r="1.2" fill="#C8102E" />
        <circle cx="44" cy="24" r="2" fill="#fff" />
        <circle cx="44" cy="24" r="1.2" fill="#C8102E" />
        <circle cx="50" cy="30" r="2" fill="#fff" />
        <circle cx="50" cy="30" r="1.2" fill="#C8102E" />
      </g>
    </svg>
  );
}
