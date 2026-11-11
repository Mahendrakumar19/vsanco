"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";

export const QuickContactPill: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-elevated border border-border p-4 w-72 mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-ink">Vsanco Advisory Desk</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 focus-visible:outline-none"
              aria-label="Close contact popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-muted mt-2 leading-relaxed">
            Need urgent feasibility verification or Smartflo / leased line consultation?
          </p>

          <div className="mt-3.5 space-y-2">
            <a
              href="https://wa.me/919871000000?text=Hello%20Vsanco%20Technologies,%20I%20would%20like%20to%20inquire%20about%20Tata%20Tele%20Business%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:18002661800"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-navy hover:bg-navy-dark text-white text-xs font-bold transition-all shadow-sm active:scale-[0.99]"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>Call Toll-Free: 1800-266-1800</span>
            </a>
          </div>

          <div className="mt-2.5 pt-2 border-t border-border text-[10px] text-center text-slate-400">
            Authorised Partner • Tata Tele Business Services
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-navy hover:bg-navy-dark text-white shadow-elevated border border-white/20 transition-all active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        aria-label="Toggle quick contact options"
        aria-expanded={isOpen}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <span className="text-xs font-bold tracking-wide">
          {isOpen ? "Close Desk" : "Quick Inquiry"}
        </span>
        {isOpen ? (
          <X className="w-4 h-4 text-slate-300" />
        ) : (
          <MessageCircle className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
