import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Check,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { INDUSTRIES_DATA, IndustryItem } from "@/content/industries";
import { LeadForm } from "@/components/forms/LeadForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Badge } from "@/components/ui/Badge";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = INDUSTRIES_DATA[params.slug];
  if (!industry) {
    return { title: "Industry Solution | Vsanco Technologies" };
  }

  return {
    title: `${industry.name} Telecom & Cloud Solutions | Vsanco Technologies`,
    description: `${industry.description} Discover recommended Tata Tele Business Services architectures for ${industry.name}.`,
  };
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = INDUSTRIES_DATA[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.name },
            ]}
          />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="cyan" className="mb-4">
              Industry Architecture
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {industry.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-2 font-medium text-sky-200">
              {industry.headline}
            </p>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-12">
              {/* Sector Challenges */}
              <div>
                <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <span>Key Operational Challenges in {industry.name}</span>
                </h2>
                <div className="space-y-3">
                  {industry.challenges.map((ch, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-border bg-surface-muted/40 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      {ch}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended TTBS Solutions */}
              <div>
                <h2 className="text-2xl font-bold text-ink mb-4">
                  Recommended Tata Tele Business Services Blueprint
                </h2>
                <div className="space-y-4">
                  {industry.recommendedSolutions.map((sol) => (
                    <div
                      key={sol.slug}
                      className="bg-white border border-border rounded-card p-6 shadow-subtle hover:border-brand-blue/60 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-base font-bold text-ink">
                          {sol.name}
                        </h3>
                        <Link
                          href={`/solutions/${sol.slug}`}
                          className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
                        >
                          <span>Spec</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {sol.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-surface-muted p-6 rounded-card border border-border">
                <h3 className="text-base font-bold text-ink mb-3">
                  Measurable Business Outcomes
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {industry.keyBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              {industry.faqs && industry.faqs.length > 0 && (
                <div>
                  <FAQAccordion
                    items={industry.faqs}
                    title={`${industry.name} FAQs`}
                    subtitle="Common questions regarding vertical compliance and feasibility."
                  />
                </div>
              )}
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <LeadForm
                  initialSolution={industry.recommendedSolutions[0]?.slug || "general-enquiry"}
                  sourcePath={`/industries/${industry.slug}`}
                  headline={`Consult an ${industry.name} Specialist`}
                  subheadline="Discuss compliance requirements, bandwidth sizing, and feasibility for your sector."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
