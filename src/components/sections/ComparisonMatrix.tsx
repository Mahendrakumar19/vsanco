"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ComparisonMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"connectivity" | "telephony">(
    "connectivity"
  );

  const connectivityRows = [
    {
      feature: "Contention Ratio",
      ttbs: "1:1 Dedicated (Zero Contention / Reserved Bandwidth)",
      broadband: "1:10 to 1:50 Shared with neighbouring lines",
      isTtbsBetter: true,
    },
    {
      feature: "Bandwidth Symmetry",
      ttbs: "Strictly Symmetrical (100 Mbps Up = 100 Mbps Down)",
      broadband: "Asymmetrical (Upload throttled to 10-20% of download)",
      isTtbsBetter: true,
    },
    {
      feature: "Contractual Uptime SLA",
      ttbs: "99.5% to 99.9% backed by commercial penalty rebates",
      broadband: "Best-effort with zero financial recourse for outages",
      isTtbsBetter: true,
    },
    {
      feature: "Mean Time to Restore (MTTR)",
      ttbs: "< 4 Hours guaranteed with 24x7 NOC monitoring",
      broadband: "24 to 72 Hours depending on local cable technician availability",
      isTtbsBetter: true,
    },
    {
      feature: "Integrated Cloud Edge Security",
      ttbs: "DNS-level malware, phishing & botnet filtering built-in",
      broadband: "Basic consumer-grade router firewall only",
      isTtbsBetter: true,
    },
    {
      feature: "IP Addressing",
      ttbs: "Dedicated Static IPv4 and IPv6 subnet pool included",
      broadband: "Dynamic DHCP IP (expensive optional add-on)",
      isTtbsBetter: true,
    },
  ];

  const telephonyRows = [
    {
      feature: "Infrastructure & Hardware",
      ttbs: "Zero Hardware. 100% Cloud-hosted software-defined voice",
      broadband: "Heavy on-premises EPABX cabinet, E1 cards & copper wiring",
      isTtbsBetter: true,
    },
    {
      feature: "Work-From-Anywhere Mobility",
      ttbs: "Agents make & receive calls on web browsers and mobile apps",
      broadband: "Tied strictly to physical office desk phone extensions",
      isTtbsBetter: true,
    },
    {
      feature: "CRM & Software Integration",
      ttbs: "Native two-way sync with Salesforce, Zoho, LeadSquared & webhooks",
      broadband: "Requires expensive CTI third-party server appliances",
      isTtbsBetter: true,
    },
    {
      feature: "Call Recording & Compliance",
      ttbs: "100% Cloud encrypted audio with role-based playback audits",
      broadband: "Local hard drive storage with frequent corruption & storage caps",
      isTtbsBetter: true,
    },
    {
      feature: "Maintenance & AMC Costs",
      ttbs: "Zero AMC fees. Continuous cloud feature updates included",
      broadband: "High recurring hardware AMC fees and costly card replacements",
      isTtbsBetter: true,
    },
    {
      feature: "Scalability",
      ttbs: "Add agent softphone seats instantly with a mouse click",
      broadband: "Requires pulling physical copper cables and buying PRI cards",
      isTtbsBetter: true,
    },
  ];

  const rows = activeTab === "connectivity" ? connectivityRows : telephonyRows;

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Technical Benchmark
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mt-1.5">
            Why Enterprise Leaders Upgrade to Tata Tele Solutions
          </h2>
          <p className="text-base text-muted mt-2">
            Compare industrial carrier-grade infrastructure with standard consumer-grade alternatives.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-muted border border-border mt-8">
            <button
              type="button"
              onClick={() => setActiveTab("connectivity")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "connectivity"
                  ? "bg-navy text-white shadow-sm"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Smart Internet Leased Line vs Broadband
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("telephony")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "telephony"
                  ? "bg-navy text-white shadow-sm"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Smartflo Cloud Telephony vs Legacy EPABX
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-border rounded-card overflow-hidden shadow-card max-w-4xl mx-auto">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold">
            <div className="col-span-4 sm:col-span-4 text-slate-300">
              Technical Parameter
            </div>
            <div className="col-span-4 sm:col-span-4 text-sky-300 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-brand-cyan" />
              <span>Tata Tele Business Services</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-400">
              Standard / Legacy Alternatives
            </div>
          </div>

          <div className="divide-y divide-border">
            {rows.map((r, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm hover:bg-surface-muted/40 transition-colors items-center"
              >
                <div className="col-span-4 sm:col-span-4 font-bold text-ink pr-3">
                  {r.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 font-semibold text-slate-900 pr-3 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{r.ttbs}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-2">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{r.broadband}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar with Direct CTA */}
          <div className="bg-surface-muted p-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Backed by official Service Level Agreement from Tata Teleservices Limited</span>
            </div>
            <Button
              href={
                activeTab === "connectivity"
                  ? "/request-a-quote?solution=smart-internet-leased-line"
                  : "/request-a-quote?solution=smartflo-cloud-telephony"
              }
              size="sm"
              variant="primary"
              className="gap-1.5 shrink-0"
            >
              <span>Request Feasibility & Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
