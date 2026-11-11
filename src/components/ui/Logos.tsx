import React from "react";

export const TataTeleLogo: React.FC<{
  className?: string;
  variant?: "color" | "white" | "monochrome";
  size?: "sm" | "md" | "lg";
}> = ({ className = "", variant = "color", size = "md" }) => {
  const isWhite = variant === "white";

  const sizeClasses = {
    sm: "h-6",
    md: "h-8 sm:h-9",
    lg: "h-11 sm:h-12",
  };

  const textColor = isWhite ? "#FFFFFF" : "#002F51";
  const subTextColor = isWhite ? "#93C5FD" : "#005088";
  const emblemColor = isWhite ? "#38BDF8" : "#005088";

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official Tata Emblem SVG */}
      <svg
        viewBox="0 0 24 24"
        className={`${sizeClasses[size]} w-auto aspect-square shrink-0`}
        fill={emblemColor}
        aria-label="Tata Emblem"
      >
        <path d="M9.774 11.568c.193-1.322.168-2.013-1.768-1.906c-2.223.124-4.476.265-7.849 1.027A5.6 5.6 0 0 0 0 12c0 1.52.618 2.99 1.787 4.254c1.06 1.144 2.556 2.095 4.326 2.752a15.5 15.5 0 0 0 2.014.588c.13-.527.959-3.907 1.616-7.823l.03-.202m14.07-.88c-3.372-.762-5.624-.902-7.846-1.026c-1.937-.107-1.962.584-1.768 1.906l.03.202c.657 3.916 1.486 7.296 1.616 7.823a15.5 15.5 0 0 0 2.014-.588c1.77-.657 3.266-1.608 4.326-2.752C23.382 14.99 24 13.52 24 12c0-.45-.069-.887-.156-1.312" />
      </svg>

      {/* Typography: TATA TELE BUSINESS SERVICES */}
      <div className="flex flex-col justify-center select-none">
        <span
          className="font-black text-sm sm:text-base tracking-[0.2em] leading-none uppercase"
          style={{ color: textColor, fontFamily: "system-ui, sans-serif" }}
        >
          TATA
        </span>
        <span
          className="text-[9px] sm:text-[10px] font-bold tracking-[0.08em] leading-tight uppercase mt-0.5"
          style={{ color: subTextColor }}
        >
          TELE BUSINESS SERVICES
        </span>
      </div>
    </div>
  );
};

export const VsancoLogo: React.FC<{
  className?: string;
  variant?: "light" | "dark";
}> = ({ className = "", variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      {/* V Emblem with tech aesthetic */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-navy flex items-center justify-center text-white font-black text-xl tracking-tight shadow-md shrink-0 border border-white/20">
        <span className="text-white drop-shadow-sm">V</span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black text-lg tracking-tight leading-tight ${
              isDark ? "text-ink" : "text-white"
            }`}
          >
            Vsanco
          </span>
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? "text-slate-500" : "text-slate-300"
            }`}
          >
            Technologies
          </span>
        </div>
        <span className="text-[10px] font-bold text-brand-blue tracking-wide uppercase">
          Authorised Partner • TTBS
        </span>
      </div>
    </div>
  );
};

export const PartnerLockup: React.FC<{
  className?: string;
  variant?: "light" | "dark";
}> = ({ className = "", variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 rounded-2xl ${
        isDark
          ? "bg-white border border-border shadow-subtle"
          : "bg-white/10 border border-white/15 backdrop-blur-sm"
      } ${className}`}
    >
      <VsancoLogo variant={isDark ? "dark" : "light"} />
      <div
        className={`h-8 w-px ${isDark ? "bg-slate-200" : "bg-white/20"} hidden sm:block`}
      />
      <div className="hidden sm:flex flex-col justify-center">
        <span
          className={`text-[9px] font-bold uppercase tracking-wider ${
            isDark ? "text-slate-400" : "text-slate-300"
          }`}
        >
          Authorised Partner of
        </span>
        <TataTeleLogo variant={isDark ? "color" : "white"} size="sm" />
      </div>
    </div>
  );
};
