import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  Check,
  Server,
  Network,
  HelpCircle,
  Building,
  Info,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SOLUTION_CATEGORIES, SOLUTIONS_DATA, SolutionCategory, SolutionItem } from "@/content/solutions";
import { LeadForm } from "@/components/forms/LeadForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const categorySlugs = SOLUTION_CATEGORIES.map((c) => ({ slug: c.slug }));
  const productSlugs = Object.keys(SOLUTIONS_DATA).map((s) => ({ slug: s }));
  return [...categorySlugs, ...productSlugs];
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;

  // Check category
  const category = SOLUTION_CATEGORIES.find((c) => c.slug === slug);
  if (category) {
    return {
      title: `${category.name} Solutions for Businesses | Vsanco Technologies`,
      description: `Explore approved ${category.name} options through Vsanco Technologies. Discuss requirements, bandwidth feasibility, and next steps for your enterprise.`,
    };
  }

  // Check product
  const product = SOLUTIONS_DATA[slug];
  if (product) {
    return {
      title: `${product.name} for Businesses | Vsanco Technologies`,
      description: `${product.shortSummary} Review technical specifications, use cases, and request a free feasibility survey from Vsanco Technologies.`,
    };
  }

  return {
    title: "Solution Details | Vsanco Technologies",
  };
}

export default function SolutionDetailPage({ params }: Props) {
  const { slug } = params;

  const category = SOLUTION_CATEGORIES.find((c) => c.slug === slug);
  const product = SOLUTIONS_DATA[slug];

  if (!category && !product) {
    notFound();
  }

  // Case A: Render Category Page
  if (category) {
    const categoryProducts = category.solutions
      .map((s) => SOLUTIONS_DATA[s])
      .filter(Boolean);

    return (
      <>
        <div className="bg-surface-muted border-b border-border py-4">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: category.name },
              ]}
            />
          </div>
        </div>

        {/* Category Hero */}
        <section className="bg-navy text-white py-16 sm:py-20">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="cyan" className="mb-4">
                Approved TTBS Category
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {category.name}
              </h1>
              <p className="text-lg text-slate-300 mt-2 font-medium text-sky-200">
                {category.headline}
              </p>
              <p className="text-base text-slate-300 mt-4 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Category Products & Form Grid */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Products in this category */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-ink mb-4">
                    Authorized Offerings in {category.name}
                  </h2>
                  <p className="text-sm text-muted mb-6 leading-relaxed">
                    Select a product below to review detailed technical capabilities, SLA parameters, prerequisites, and official provider documentation.
                  </p>

                  <div className="space-y-4">
                    {categoryProducts.map((prod) => (
                      <div
                        key={prod.slug}
                        className="bg-white border border-border rounded-card p-6 shadow-card hover:border-brand-blue/60 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                              Product Overview
                            </span>
                            <h3 className="text-xl font-bold text-ink mt-0.5">
                              {prod.name}
                            </h3>
                          </div>
                          <Link
                            href={`/solutions/${prod.slug}`}
                            className="p-2 rounded-xl bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors shrink-0"
                            aria-label={`View ${prod.name}`}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>

                        <p className="text-sm text-muted mt-2.5 leading-relaxed">
                          {prod.shortSummary}
                        </p>

                        <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                          <span className="text-slate-500">
                            Backed by direct TTBS carrier contracts
                          </span>
                          <Link
                            href={`/solutions/${prod.slug}`}
                            className="font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
                          >
                            <span>Read Full Specification</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selection Considerations */}
                <div className="bg-surface-muted p-6 rounded-card border border-border">
                  <h3 className="font-bold text-base text-ink mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4 text-brand-blue" />
                    <span>Key Evaluation Considerations</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                      <span>Exact delivery address and physical building duct/fiber feasibility.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                      <span>Bandwidth sizing based on peak concurrent staff, VoIP streams, and cloud apps.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                      <span>Redundancy requirements: dual-ring fiber vs hybrid backup link.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Preselected Lead Form */}
              <div className="lg:col-span-5">
                <div className="sticky top-24">
                  <LeadForm
                    initialSolution={categoryProducts[0]?.slug || category.slug}
                    sourcePath={`/solutions/${category.slug}`}
                    headline={`Request ${category.name} Quote`}
                    subheadline="Submit your site locations and bandwidth needs for a verified feasibility assessment."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClosingCTA preselectedSolution={category.slug} />
      </>
    );
  }

  // Case B: Render Product Detail Page
  const parentCategory = SOLUTION_CATEGORIES.find(
    (c) => c.slug === product.categorySlug
  );

  const relatedProducts = Object.values(SOLUTIONS_DATA)
    .filter((p) => p.slug !== product.slug && p.categorySlug === product.categorySlug)
    .slice(0, 3);

  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              {
                label: product.categoryName,
                href: `/solutions/${product.categorySlug}`,
              },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="cyan">
                {product.categoryName}
              </Badge>
              <Badge variant="navy" className="bg-white/10 text-slate-200 border-white/20">
                Tata Tele Business Services Solution
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              {product.shortSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Comprehensive Spec & Architecture */}
            <div className="lg:col-span-7 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-ink mb-3">
                  Product Overview & Technical Description
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {product.overview}
                </p>
              </div>

              {/* Who it is for */}
              <div className="bg-surface-muted p-6 rounded-card border border-border">
                <h3 className="text-base font-bold text-ink mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5 text-brand-blue" />
                  <span>Ideal For Organizations That Need:</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {product.targetAudience.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Verified Capabilities */}
              <div>
                <h2 className="text-xl font-bold text-ink mb-4">
                  Core Verified Capabilities
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {product.keyCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-border bg-white flex items-start gap-3 shadow-subtle"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Enterprise Use Cases */}
              <div>
                <h2 className="text-xl font-bold text-ink mb-4">
                  Enterprise Use Cases
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.useCases.map((uc, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-border bg-surface-muted/40"
                    >
                      <h4 className="font-bold text-sm text-ink mb-1.5">
                        {uc.title}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites & Limitations */}
              <div className="p-6 rounded-card border border-amber-200 bg-amber-50/50 space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-amber-900 flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-amber-700" />
                    <span>Deployment Prerequisites</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-amber-800 leading-relaxed">
                    {product.prerequisites.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-amber-200/80">
                  <h4 className="font-bold text-sm text-amber-900 mb-2">
                    Operational Boundaries & Availability
                  </h4>
                  <ul className="space-y-1.5 text-xs text-amber-800 leading-relaxed">
                    {product.limitationsAndNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Product FAQs */}
              {product.faqs && product.faqs.length > 0 && (
                <div>
                  <FAQAccordion
                    items={product.faqs}
                    title={`${product.name} FAQs`}
                    subtitle="Specific technical and operational questions regarding this offering."
                  />
                </div>
              )}

              {/* Official TTBS Provider Reference Link */}
              <div className="p-4 rounded-xl border border-border bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                <span>
                  Official Tata Tele Business Services documentation:
                </span>
                <a
                  href={product.officialProviderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  <span>View Provider Source Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Preselected Lead Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <LeadForm
                  initialSolution={product.slug}
                  sourcePath={`/solutions/${product.slug}`}
                  headline={`Request Quote for ${product.name}`}
                  subheadline="Our certified solutions engineers will verify physical site feasibility and prepare a customized commercial proposal."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      {relatedProducts.length > 0 && (
        <section className="py-14 bg-surface-muted/60 border-t border-border">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-ink mb-6">
              Related Offerings in {product.categoryName}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/solutions/${rel.slug}`}
                  className="bg-white border border-border rounded-xl p-5 hover:border-brand-blue hover:shadow-card transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-sm text-ink group-hover:text-brand-blue transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
                      {rel.shortSummary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-brand-blue">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCTA preselectedSolution={product.slug} />
    </>
  );
}
