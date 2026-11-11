import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-button select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold",
    md: "px-5 py-2.5 text-sm font-semibold",
    lg: "px-7 py-3.5 text-base font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-hover focus-visible:ring-brand-blue shadow-sm active:scale-[0.99]",
    secondary:
      "bg-navy text-white hover:bg-navy-dark focus-visible:ring-navy shadow-sm active:scale-[0.99]",
    outline:
      "border border-border bg-white text-ink hover:bg-surface-muted hover:border-slate-300 focus-visible:ring-brand-blue shadow-subtle",
    ghost:
      "text-ink hover:bg-surface-muted hover:text-brand-blue focus-visible:ring-brand-blue",
    cyan:
      "bg-brand-cyan text-navy font-bold hover:bg-sky-400 focus-visible:ring-brand-cyan shadow-sm active:scale-[0.99]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
