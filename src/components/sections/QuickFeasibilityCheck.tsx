"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const QuickFeasibilityCheck: React.FC = () => {
  const router = useRouter();
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedSpeed, setSelectedSpeed] = useState("100 Mbps Symmetrical");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationQuery.trim()) return;

    router.push(
      `/request-a-quote?solution=smart-internet-leased-line&city=${encodeURIComponent(
        locationQuery.trim()
      )}`
    );
  };

  return (
    <section className="bg-gradient-to-r from-navy-dark via-navy to-slate-900 py-12 text-white border-y border-white/10">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 border border-white/15 rounded-card p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan">
                <MapPin className="w-3.5 h-3.5" />
                <span>Noida Sector 32 & Pan-India Network Coverage</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Check Physical Fiber Feasibility for Your Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                TTBS maintains extensive dual-ring metro fiber routes across major Indian industrial corridors. Verify last-mile proximity with zero obligation.
              </p>
            </div>

            <form
              onSubmit={handleCheck}
              className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch gap-3 shrink-0"
            >
              <div className="relative min-w-[260px]">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  placeholder="Enter PIN code or City / Sector..."
                  className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm bg-white text-ink rounded-input border border-border focus:outline-none focus:ring-2 focus:ring-brand-cyan shadow-sm"
                />
              </div>

              <select
                value={selectedSpeed}
                onChange={(e) => setSelectedSpeed(e.target.value)}
                className="py-3 px-3 text-xs sm:text-sm bg-white text-ink rounded-input border border-border focus:outline-none focus:ring-2 focus:ring-brand-cyan shadow-sm"
              >
                <option value="50 Mbps Symmetrical">50 Mbps (1:1)</option>
                <option value="100 Mbps Symmetrical">100 Mbps (1:1)</option>
                <option value="500 Mbps Symmetrical">500 Mbps (1:1)</option>
                <option value="1 Gbps+ Enterprise">1 Gbps+ (Gigabit)</option>
              </select>

              <Button
                type="submit"
                variant="cyan"
                size="md"
                className="gap-2 shrink-0 font-bold text-navy"
              >
                <span>Verify Feasibility</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
