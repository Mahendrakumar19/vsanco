import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RESOURCES_DATA, ResourceItem } from "@/content/resources";
import { SOLUTIONS_DATA } from "@/content/solutions";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(RESOURCES_DATA).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const resource = RESOURCES_DATA[params.slug];
  if (!resource) {
    return { title: "Buyer Guide | Vsanco Technologies" };
  }

  return {
    title: `${resource.title} | Vsanco Technologies`,
    description: resource.excerpt,
  };
}

export default function ResourceDetailPage({ params }: Props) {
  const resource = RESOURCES_DATA[params.slug];

  if (!resource) {
    notFound();
  }

  const relatedSolution = SOLUTIONS_DATA[resource.relatedSolutionSlug];

  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Resources", href: "/resources" },
              { label: resource.title },
            ]}
          />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="cyan" className="mb-4">
            {resource.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {resource.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Vsanco Technologies Engineering Review</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Published: {resource.publishedAt}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{resource.readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of contents */}
          <div className="mb-12 p-6 rounded-card bg-surface-muted border border-border">
            <h3 className="font-bold text-sm text-ink mb-3 uppercase tracking-wider">
              Table of Contents
            </h3>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
              {resource.tableOfContents.map((toc, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-brand-blue">{idx + 1}.</span>
                  <span>{toc}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Guide Sections */}
          <div className="space-y-10 text-slate-800 leading-relaxed">
            {resource.content.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-ink pt-2">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Related Solution Banner */}
          {relatedSolution && (
            <div className="mt-14 p-6 sm:p-8 rounded-card bg-gradient-to-br from-blue-50/60 to-white border border-blue-200">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                Featured Implementation Solution
              </span>
              <h3 className="text-xl font-bold text-ink">
                {relatedSolution.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {relatedSolution.shortSummary}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button
                  href={`/solutions/${relatedSolution.slug}`}
                  size="sm"
                  variant="primary"
                  className="gap-1.5"
                >
                  <span>Explore Technical Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button
                  href={`/request-a-quote?solution=${encodeURIComponent(
                    relatedSolution.slug
                  )}`}
                  size="sm"
                  variant="outline"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </article>

      <ClosingCTA />
    </>
  );
}
