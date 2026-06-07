import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Anant Global KPO"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-soft">
        <span className="font-display text-white text-sm font-bold tracking-tight">
          AGK
        </span>
        <span className="absolute -inset-0.5 rounded-xl bg-brand-gradient opacity-0 blur transition group-hover:opacity-40" />
      </span>
      <span
        className={cn(
          "font-display font-semibold text-[15px] tracking-tight leading-none",
          invert ? "text-white" : "text-ink-900",
        )}
      >
        Anant Global KPO
      </span>
    </Link>
  );
}
