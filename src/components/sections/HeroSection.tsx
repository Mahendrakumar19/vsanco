import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Activity,
  CheckCircle2,
  Server,
  PhoneCall,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TataTeleLogo } from "@/components/ui/Logos";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-dark text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Subtle Tech Grid / Ambient Lighting */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Prominent Partner Badge with Official Tata Logo */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Authorised Partner of:
              </span>
              <TataTeleLogo variant="white" size="sm" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Enterprise connectivity and cloud communication,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-white">
                engineered for performance.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Vsanco Technologies helps Indian enterprises evaluate requirements, verify
              local site feasibility, and deploy certified Tata Tele Business Services
              (TTBS) solutions—from dedicated Internet Leased Lines and Smartflo Cloud
              Telephony to WhatsApp Business API and secure SD-WAN.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/request-a-quote"
                size="lg"
                variant="cyan"
                className="gap-2 text-navy font-bold text-base shadow-lg"
              >
                <span>Talk to a Solutions Expert</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href="/solutions"
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Explore Solutions Catalog
              </Button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>99.5%+ SLA Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Zero Feasibility Cost</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Noida & Pan-India Scope</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture / Interactive Topology Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-card p-6 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2">
                  <TataTeleLogo variant="white" size="sm" />
                </div>
              </div>

              {/* Node Visualization Diagram */}
              <div className="space-y-4">
                {/* Node 1: Smart Internet */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Smart Internet Leased Line
                      </div>
                      <div className="text-[11px] text-slate-400">
                        1:1 Symmetric • Cloud Edge DNS Security
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    SLA Active
                  </span>
                </div>

                {/* Node 2: Smartflo Voice */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Smartflo Cloud Telephony & IVR
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Intelligent IVR • Two-Way CRM Sync
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    Multi-Agent
                  </span>
                </div>

                {/* Node 3: Private SD-WAN / MPLS */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        MPLS & Managed SD-WAN
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Pan-India Private Meshed IP Network
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    High QoS
                  </span>
                </div>
              </div>

              {/* Bottom Quick Metric Card */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Pan-India Carrier NOC Monitoring</span>
                </div>
                <Link
                  href="/solutions"
                  className="text-brand-cyan hover:underline font-semibold flex items-center gap-1"
                >
                  Solutions Index →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
