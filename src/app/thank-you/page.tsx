import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  BookOpen,
  Home,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Request Received | Vsanco Technologies",
  description: "Thank you for submitting your enterprise request.",
  robots: {
    index: false,
    follow: false,
  },
};

function ThankYouContent({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const leadId =
    typeof searchParams?.leadId === "string" ? searchParams.leadId : undefined;
  const solution =
    typeof searchParams?.solution === "string" ? searchParams.solution : undefined;

  return (
    <div className="max-w-2xl mx-auto bg-white border border-border rounded-card p-8 sm:p-12 shadow-card text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
        Submission Confirmed
      </span>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-ink mt-4 tracking-tight">
        Thank You for Your Enterprise Enquiry
      </h1>

      <p className="text-sm text-muted mt-3 leading-relaxed max-w-lg mx-auto">
        We have received your business details and requirements. A certified solutions consultant from Vsanco Technologies will review your specifications and verify initial physical feasibility.
      </p>

      {leadId && (
        <div className="mt-6 p-4 rounded-xl bg-surface-muted border border-border inline-block text-left text-xs max-w-sm w-full">
          <div className="flex justify-between items-center text-slate-500 mb-1">
            <span>Enquiry Reference ID:</span>
            <span className="font-mono font-bold text-ink text-sm bg-white px-2 py-0.5 rounded border border-border">
              {leadId}
            </span>
          </div>
          {solution && (
            <div className="flex justify-between items-center text-slate-500">
              <span>Selected Scope:</span>
              <span className="font-medium text-slate-700 capitalize">
                {solution.replace(/-/g, " ")}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Immediate Next Steps Timeline */}
      <div className="mt-8 text-left border-t border-border pt-6 space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          What to Expect Next:
        </h2>
        <div className="space-y-2 text-xs text-slate-700">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span>
              <strong>Initial Review:</strong> Our telecom engineering team reviews your site postal address and capacity specs.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span>
              <strong>Introductory Call:</strong> A consultant will connect during your preferred contact window to confirm details.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span>
              <strong>Formal Proposal:</strong> Receive an official, itemized Tata Tele Business Services commercial quote.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button href="/" variant="primary" size="md" className="gap-2 w-full sm:w-auto">
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Button>
        <Button
          href="/resources"
          variant="outline"
          size="md"
          className="gap-2 w-full sm:w-auto"
        >
          <BookOpen className="w-4 h-4" />
          <span>Explore Buyer Guides</span>
        </Button>
      </div>
    </div>
  );
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <section className="py-16 sm:py-24 bg-surface-muted min-h-[70vh] flex items-center justify-center px-4">
      <Suspense fallback={<div className="text-center">Loading confirmation...</div>}>
        <ThankYouContent searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
