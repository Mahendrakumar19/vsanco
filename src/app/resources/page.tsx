import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RESOURCES_DATA } from "@/content/resources";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Enterprise Telecom & Cloud Guides | Vsanco Technologies",
  description:
    "Original technical guides, migration checklists, and ROI playbooks for Indian IT decision-makers evaluating leased lines, cloud telephony, and SD-WAN networks.",
};

export default function ResourcesIndexPage() {
  const articles = Object.values(RESOURCES_DATA);

  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Resources & Buyer Guides" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="cyan" className="mb-4">
              Buyer Education
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Enterprise Telecom Knowledge Base
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Objective technical analyses, migration blueprints, and regulatory
              checklists written to help Indian IT leaders make informed telecommunication
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="bg-white border border-border rounded-card p-7 shadow-card hover:shadow-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span className="font-bold text-brand-blue uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readingTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.publishedAt}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-ink group-hover:text-brand-blue transition-colors">
                    {art.title}
                  </h2>

                  <p className="text-sm text-muted mt-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/resources/${art.slug}`}
                    className="text-xs font-bold text-brand-blue group-hover:text-brand-hover inline-flex items-center gap-1.5"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
