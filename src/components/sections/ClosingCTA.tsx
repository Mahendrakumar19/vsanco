import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ClosingCTAProps {
  headline?: string;
  subheadline?: string;
  preselectedSolution?: string;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({
  headline = "Ready to upgrade your enterprise connectivity?",
  subheadline = "Speak with our certified solutions consultants to verify physical site feasibility, bandwidth availability, and receive a formal commercial proposal.",
  preselectedSolution,
}) => {
  const quoteUrl = preselectedSolution
    ? `/request-a-quote?solution=${encodeURIComponent(preselectedSolution)}`
    : "/request-a-quote";

  return (
    <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-semibold mb-4 border border-white/15">
          <ShieldCheck className="w-4 h-4" />
          <span>Free Site Feasibility • Official TTBS Partner</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
          {headline}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-3 leading-relaxed">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            href={quoteUrl}
            size="lg"
            variant="cyan"
            className="w-full sm:w-auto gap-2 text-navy font-bold text-base shadow-lg"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <a
            href="tel:18002661800"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-button text-sm font-semibold border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-brand-cyan" />
            <span>Call 1800-266-1800</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 mt-6">
          Direct billing & contracts with Tata Teleservices Limited • Guaranteed Carrier SLAs
        </p>
      </div>
    </section>
  );
};
