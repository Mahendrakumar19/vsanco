import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ShieldCheck,
  Stethoscope,
  Factory,
  GraduationCap,
  ShoppingBag,
  ArrowRight,
  Check,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { INDUSTRIES_DATA } from "@/content/industries";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Industry Telecom & Cloud Solutions | Vsanco Technologies",
  description:
    "Tailored telecommunication, cloud communications, and private networking architectures for IT, BFSI, healthcare, manufacturing, education, and retail enterprises across India.",
};

const industryIcons: Record<string, React.ReactNode> = {
  "it-ites": <Briefcase className="w-6 h-6 text-brand-blue" />,
  "bfsi-fintech": <ShieldCheck className="w-6 h-6 text-brand-blue" />,
  healthcare: <Stethoscope className="w-6 h-6 text-brand-blue" />,
  manufacturing: <Factory className="w-6 h-6 text-brand-blue" />,
  education: <GraduationCap className="w-6 h-6 text-brand-blue" />,
  "retail-ecommerce": <ShoppingBag className="w-6 h-6 text-brand-blue" />,
};

export default function IndustriesIndexPage() {
  const industries = Object.values(INDUSTRIES_DATA);

  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions by Industry" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="cyan" className="mb-4">
              Sector Specialization
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Enterprise Telecom Built for Your Industry
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Every vertical faces distinct uptime, compliance, latency, and customer
              engagement demands. Explore certified Tata Tele Business Services architectures
              tailored to your operational landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="bg-white border border-border rounded-card p-7 shadow-card hover:shadow-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-brand-blue group-hover:text-white transition-colors w-fit mb-5">
                    {industryIcons[ind.slug] || <Briefcase className="w-6 h-6 text-brand-blue" />}
                  </div>

                  <h2 className="text-xl font-bold text-ink group-hover:text-brand-blue transition-colors">
                    {ind.name}
                  </h2>
                  <p className="text-xs font-semibold text-brand-blue mt-1">
                    {ind.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-muted mt-3 leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Recommended Solutions:
                    </span>
                    {ind.recommendedSolutions.slice(0, 2).map((rec) => (
                      <div key={rec.slug} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        <span className="truncate">{rec.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="w-full text-xs font-bold text-brand-blue group-hover:text-brand-hover inline-flex items-center justify-between"
                  >
                    <span>Explore Industry Blueprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
