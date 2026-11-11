import React from "react";
import Image from "next/image";

/**
 * Official Tata Tele Business Services Original Logo
 * Extracted directly from tatatelebusiness.com
 * - logo.svg: Official White/Cyan/Orange brand mark for dark navy backgrounds
 * - logo-black.svg: Official Black/Cyan/Orange brand mark for light backgrounds
 */
export const TataTeleLogo: React.FC<{
  className?: string;
  variant?: "color" | "white" | "monochrome";
  size?: "sm" | "md" | "lg" | "xl";
}> = ({ className = "", variant = "color", size = "md" }) => {
  const isWhite = variant === "white";
  const logoSrc = isWhite ? "/images/tata/logo.svg" : "/images/tata/logo-black.svg";

  const sizeClasses = {
    sm: "h-7 w-auto",
    md: "h-9 w-auto",
    lg: "h-11 sm:h-12 w-auto",
    xl: "h-14 w-auto",
  };

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="TATA Tele Business Services"
        className={`${sizeClasses[size]} object-contain select-none`}
        width={287}
        height={56}
        loading="eager"
      />
    </div>
  );
};

/**
 * Official Tata Corporate Blue Roundel / Emblem
 */
export const TataEmblem: React.FC<{
  className?: string;
  size?: "sm" | "md" | "lg";
}> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/tata/tata-blue.png"
        alt="Tata Emblem"
        className={`${sizeClasses[size]} object-contain`}
        width={45}
        height={45}
      />
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
      {/* Modern Vsanco V Emblem */}
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
