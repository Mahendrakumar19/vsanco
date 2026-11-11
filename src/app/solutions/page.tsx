import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Network,
  PhoneCall,
  MessageSquare,
  Users,
  Cloud,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Check,
  Filter,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SOLUTION_CATEGORIES, SOLUTIONS_DATA } from "@/content/solutions";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Tata Tele Business Services Solutions Catalog | Vsanco Technologies",
  description:
    "Explore the complete portfolio of approved Tata Tele Business Services offerings through Vsanco Technologies: business internet leased lines, Smartflo cloud telephony, WhatsApp API, and managed networks.",
};

const iconMap: Record<string, React.ReactNode> = {
  Network: <Network className="w-6 h-6 text-brand-blue" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-brand-blue" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-brand-blue" />,
  Users: <Users className="w-6 h-6 text-brand-blue" />,
  Cloud: <Cloud className="w-6 h-6 text-brand-blue" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-blue" />,
};

export default function SolutionsIndexPage() {
  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions Portfolio" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="cyan" className="mb-4">
              Authorized TTBS Portfolio
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Enterprise Solutions Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Explore officially approved Tata Tele Business Services offerings. Every
              solution is engineered for continuous uptime, predictable performance,
              and seamless operational scalability across India.
            </p>
          </div>
        </div>
      </section>

      {/* Category Section with Product Deep Links */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SOLUTION_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.slug}
                id={cat.slug}
                className="border border-border rounded-card p-6 sm:p-10 bg-surface-muted/30 shadow-subtle scroll-mt-24"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-white border border-blue-100 shadow-sm shrink-0">
                      {iconMap[cat.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                        Category 0{idx + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-ink mt-0.5">
                        {cat.name}
                      </h2>
                      <p className="text-sm font-medium text-slate-600 mt-1">
                        {cat.headline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      href={`/solutions/${cat.slug}`}
                      variant="outline"
                      size="sm"
                      className="bg-white"
                    >
                      Category Overview
                    </Button>
                    <Button
                      href={`/request-a-quote?solution=${encodeURIComponent(
                        cat.slug
                      )}`}
                      size="sm"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted mt-5 leading-relaxed max-w-4xl">
                  {cat.description}
                </p>

                {/* Highlights List */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 bg-white p-4 rounded-xl border border-border/80">
                  {cat.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Individual Products Grid */}
                <div className="mt-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-4">
                    Available Approved Products in this Category:
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.solutions.map((solSlug) => {
                      const sol = SOLUTIONS_DATA[solSlug];
                      if (!sol) return null;
                      return (
                        <Link
                          key={solSlug}
                          href={`/solutions/${solSlug}`}
                          className="bg-white border border-border rounded-xl p-5 hover:border-brand-blue hover:shadow-card transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <h3 className="font-bold text-sm text-ink group-hover:text-brand-blue transition-colors">
                              {sol.name}
                            </h3>
                            <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
                              {sol.shortSummary}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-brand-blue">
                            <span>Read Technical Spec</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
