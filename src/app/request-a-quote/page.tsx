import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Sparkles,
  Phone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Request a Formal Quotation | Vsanco Technologies",
  description:
    "Request an official customized commercial quotation and feasibility assessment for Tata Tele Business Services leased lines, Smartflo, and private networking.",
};

function QuoteFormContainer({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const initialSolution =
    typeof searchParams?.solution === "string"
      ? searchParams.solution
      : "general-enquiry";

  return (
    <LeadForm
      initialSolution={initialSolution}
      sourcePath="/request-a-quote"
      headline="Enterprise Solution Quotation Form"
      subheadline="Tell us your organization's locations, bandwidth or channel specifications, and our team will prepare a formal proposal."
    />
  );
}

export default function RequestAQuotePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Request a Quote" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-semibold mb-4 border border-white/15">
              <Sparkles className="w-4 h-4" />
              <span>Official Commercial Proposal Request</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Request a Custom Solution Quotation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Transparent, itemized pricing backed directly by Tata Teleservices Limited.
              Zero hidden fees, official GST invoices, and free site feasibility verification.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Reassurance & Proposal Process */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-ink mb-2">
                  What Happens Next?
                </h2>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  We value your time. Here is our step-by-step commitment when you submit an enquiry:
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-surface-muted flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-ink">
                      1. Solutions Engineer Assignment
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      A certified telecom specialist is assigned to review your technical specs within 4 business hours.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface-muted flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-ink">
                      2. Free Feasibility Survey
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      TTBS field teams conduct building fiber audits and verify last-mile route availability at zero cost.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-surface-muted flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-ink">
                      3. Formal Commercial Proposal
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      Receive an itemized quotation directly on official TTBS letterhead with SLA terms and transparent rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2 text-xs text-slate-700">
                <div className="font-bold text-brand-blue flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Security & Privacy Guarantee:</span>
                </div>
                <p className="leading-relaxed">
                  Your business contact information is treated with strict confidentiality. It will only be used by Vsanco Technologies and Tata Tele Business Services to prepare and deliver your quotation. We never sell your data to third parties.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-border flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-ink block">Need urgent advice?</span>
                  <span className="text-slate-600">Call our direct sales desk: 1800-266-1800</span>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form with Query Param pre-selection */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center">Loading quote form...</div>}>
                <QuoteFormContainer searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
