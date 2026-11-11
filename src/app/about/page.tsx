import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Users2,
  Headphones,
  Award,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { PartnerTrustStrip } from "@/components/sections/PartnerTrustStrip";
import { TataTeleLogo, VsancoLogo } from "@/components/ui/Logos";

export const metadata: Metadata = {
  title: "About Vsanco Technologies | Authorised Partner Of TATA Tele Business Services",
  description:
    "Learn about Vsanco Technologies, an authorised partner of Tata Tele Business Services located near Noida City Centre Metro Station, Sector 32, Noida. Explore our consultative approach for internet leased lines and cloud communications.",
};

export default function AboutPage() {
  const steps = [
    {
      title: "1. Consultative Needs Assessment",
      description:
        "We begin by understanding your organizational layout, user distribution, application bandwidth demands, and current connectivity bottlenecks. We translate complex telecom catalogues into plain-language business outcomes.",
    },
    {
      title: "2. Technical & Physical Feasibility Verification",
      description:
        "We coordinate directly with Tata Tele Business Services field network engineering teams to run physical fiber route surveys, building access audits, and circle availability checks with zero upfront cost.",
    },
    {
      title: "3. Direct Invoicing & Service Provisioning",
      description:
        "All commercial agreements and monthly service invoices are executed directly with Tata Teleservices Limited. You benefit from official enterprise SLAs, GST tax compliance, and 24x7 NOC escalation.",
    },
    {
      title: "4. Ongoing Local Relationship Management",
      description:
        "Beyond initial provisioning, Vsanco Technologies remains your proactive local partner. Whenever you need bandwidth expansions, additional Smartflo agent seats, or account escalations, our dedicated Noida team is one call away.",
    },
  ];

  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 mb-4 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Authorised Partner of:
              </span>
              <TataTeleLogo variant="white" size="sm" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              A dedicated enterprise partner for business connectivity and communications.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              <strong>Vsanco Technologies</strong> operates as an authorised partner of <strong>Tata Tele Business Services (TTBS)</strong>. Based in Noida, we bridge the gap between enterprise telecommunication infrastructure and the real-world operational needs of businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Partnership Transparency Callout */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-card bg-blue-50/60 border border-blue-200/80">
            <h2 className="text-lg font-bold text-ink mb-2">
              Our Role & Operational Boundary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Vsanco Technologies is an authorised channel and marketing partner, not Tata Tele Business Services itself. All telecommunication services, internet leased lines, Smartflo cloud subscriptions, and private networking links are provisioned, contracted, and billed directly by <strong>Tata Teleservices Limited</strong>. This transparent structure gives you dedicated, responsive advisory from Vsanco Technologies, backed by the industrial reliability and carrier SLAs of Tata Tele Business Services.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <PartnerTrustStrip />

      {/* Office & Regional Presence Callout */}
      <section className="py-12 bg-surface-muted border-b border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-card border border-border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Noida Sector 32 Advisory Center</span>
              </span>
              <h3 className="text-xl font-bold text-ink">
                Conveniently Located at Regus, Logix City Centre
              </h3>
              <p className="text-sm text-muted max-w-2xl leading-relaxed">
                Operating near the Noida City Centre Metro Station in Sector 32, our team coordinates physical feasibility assessments, fiber route verifications, and enterprise consultations for NCR and Pan-India locations.
              </p>
            </div>
            <Button href="/contact" size="md">
              Visit or Contact Office
            </Button>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Our Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mt-1">
              How We Help You Choose & Deploy
            </h2>
            <p className="text-sm text-muted mt-2">
              We eliminate guesswork from corporate telecom procurement through a verified, four-stage consultative model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-card border border-border bg-surface-muted/40 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-base text-ink mb-2">{st.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Commitments */}
      <section className="py-16 bg-surface-muted/60 border-t border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <FileText className="w-6 h-6 text-brand-blue mb-3" />
              <h3 className="font-bold text-base text-ink mb-1.5">
                Zero Unverified Claims
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                We strictly communicate verified technical specifications, actual SLA metrics, and official provider capabilities. We do not promise speculative discounts or unsupported coverage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <Users2 className="w-6 h-6 text-brand-blue mb-3" />
              <h3 className="font-bold text-base text-ink mb-1.5">
                Objective Solution Sizing
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                We right-size your bandwidth, SIP channels, and software licenses based on current needs and realistic growth projections, avoiding unnecessary recurring overhead.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <Headphones className="w-6 h-6 text-brand-blue mb-3" />
              <h3 className="font-bold text-base text-ink mb-1.5">
                Responsive Escalations
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                If network or provisioning challenges arise, your business has an assigned relationship manager to coordinate directly with TTBS circle managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        headline="Discuss your enterprise requirements with Vsanco Technologies"
        subheadline="Schedule a conversation with our certified telecom consultants to explore suitable TTBS options for your facilities."
      />
    </>
  );
}
