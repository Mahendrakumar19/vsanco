import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "navy" | "cyan" | "green" | "muted";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  className,
}) => {
  const styles = {
    blue: "bg-blue-50 text-brand-blue border-blue-200/60",
    navy: "bg-navy/10 text-navy border-navy/20",
    cyan: "bg-sky-50 text-sky-800 border-sky-200",
    green: "bg-emerald-50 text-emerald-800 border-emerald-200",
    muted: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
