import React from "react";
import type { Metadata } from "next";
import { ShieldAlert, ExternalLink, FileCheck, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TataTeleLogo } from "@/components/ui/Logos";

export const metadata: Metadata = {
  title: "Partner & Brand Disclaimer | Vsanco Technologies",
  description:
    "Official partner designation and intellectual property disclaimer clarifying the relationship between Vsanco Technologies and Tata Tele Business Services (TTBS).",
};

export default function PartnerDisclaimerPage() {
  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Partner Disclaimer" }]} />
        </div>
      </div>

      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold mb-3">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Mandatory Disclosure Notice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">
              Channel Partner & Brand Disclaimer
            </h1>
            <p className="text-xs text-muted mt-2">
              Published in accordance with telecom partner compliance guidelines
            </p>
          </div>

          <div className="p-6 rounded-card bg-amber-50/60 border border-amber-200 text-amber-950 space-y-3 text-sm">
            <h2 className="font-bold text-base text-amber-900">
              Clear Summary of Legal Relationship
            </h2>
            <p>
              <strong>Vsanco Technologies is an independent business entity operating as an Authorised Partner of Tata Tele Business Services (TTBS).</strong> Vsanco Technologies is not Tata Tele Business Services, Tata Teleservices Limited, Tata Teleservices (Maharashtra) Limited, or a subsidiary or holding entity of the Tata Group.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Official Provider Brand:
              </span>
              <span className="text-sm font-bold text-ink">
                Tata Tele Business Services (Tata Teleservices Limited)
              </span>
            </div>
            <TataTeleLogo variant="color" size="sm" />
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">1. Partner Authorization Scope</h2>
            <p>
              Vsanco Technologies is authorized to promote, market, consult on, and facilitate customer inquiries for enterprise telecommunication and cloud products offered under the Tata Tele Business Services brand portfolio.
            </p>
            <p>
              Our role is strictly consultative: we evaluate enterprise needs, coordinate site surveys, and facilitate direct connections with TTBS commercial teams. We do not independently own, operate, construct, or manage the underlying telecom network infrastructure or wireless towers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">2. Contracting, Invoicing & Service Delivery</h2>
            <p>
              Every telecommunication service, including but not limited to Smart Internet Leased Lines, MPLS VPN circuits, SIP Trunks, Smartflo Cloud Telephony licenses, and Toll-Free numbers, is provided under direct commercial contracts executed between the customer and <strong>Tata Teleservices Limited / Tata Teleservices (Maharashtra) Limited</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>All tax invoices are issued directly by Tata Teleservices Limited with official GST registration.</li>
              <li>Service Level Agreements (SLAs) and Mean Time to Restore (MTTR) guarantees are backed by Tata Tele Business Services carrier operations.</li>
              <li>Operational technical support and network escalation tickets are managed through the centralized TTBS Enterprise Helpdesk (1800-266-1515).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">3. Intellectual Property & Trademarks</h2>
            <p>
              The names &quot;Tata&quot;, &quot;Tata Tele Business Services&quot;, &quot;TTBS&quot;, &quot;Smartflo&quot;, and all related logos, product names, and brand designs are registered trademarks of their respective owners. Their display on this website is solely to accurately identify authorized offerings available through the partnership.
            </p>
            <p>
              Nothing on this website should be construed as granting any license or right to use any trademark displayed on the site without the express written permission of the respective trademark owner.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">4. Product Availability & Feasibility Disclaimer</h2>
            <p>
              Products, specifications, bandwidth tiers, and SLAs presented on this website are based on current official provider materials. However:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Service availability is strictly subject to localized physical fiber feasibility at the customer&apos;s specific postal address.</li>
              <li>Pricing may vary based on city, telecom circle, bandwidth requirements, last-mile media options, and contract tenure.</li>
              <li>No representation on this site constitutes a guarantee of immediate service delivery or specific uptime without a written agreement from TTBS.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">5. Official TTBS Portal Reference</h2>
            <p>
              For complete corporate information and official public filings of the telecom provider, please visit the official Tata Tele Business Services corporate website:
            </p>
            <div className="pt-1">
              <a
                href="https://www.tatatelebusiness.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-muted hover:bg-slate-200 border border-border text-xs sm:text-sm font-semibold text-brand-blue transition-colors"
              >
                <span>Visit Official TTBS Website (tatatelebusiness.com)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
