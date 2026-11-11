import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Vsanco Technologies",
  description:
    "Privacy Policy for Vsanco Technologies explaining data collection, consent, usage, security, and data subject rights in accordance with Indian data protection regulations.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        </div>
      </div>

      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <span className="text-xs font-bold uppercase text-brand-blue tracking-wider">
              Legal Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted mt-2">
              Last updated: January 2026 • Policy Version: 2026-01
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">1. Overview</h2>
            <p>
              Vsanco Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates this B2B website as an authorised partner of Tata Tele Business Services (TTBS). This Privacy Policy explains our practices regarding the collection, use, processing, and protection of business contact and inquiry information when you use our website (vsanco.com) or submit an enterprise enquiry for telecommunications solutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">2. Information We Collect</h2>
            <p>
              We adhere strictly to the principle of data minimization and collect only information required to evaluate, process, and respond to your enterprise request:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Contact Details:</strong> Full name, corporate email address, business phone number, job role, and company name.</li>
              <li><strong>Requirement Details:</strong> Selected solution interests, estimated locations/branch counts, and notes describing your business requirements.</li>
              <li><strong>Consent Records:</strong> Timestamp of submission, version of consent text accepted, and source route.</li>
              <li><strong>Technical Metadata:</strong> Coarse IP address and browser user-agent for rate limiting and bot prevention. We do not store raw personal data in application server logs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">3. Purpose and Legal Basis for Processing</h2>
            <p>
              We process submitted data exclusively for the following legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Responding to your consultation, callback, or quotation requests.</li>
              <li>Conducting physical site feasibility surveys through TTBS field teams.</li>
              <li>Preparing and presenting customized commercial proposals.</li>
              <li>Preventing automated spam, fraudulent submissions, and website abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">4. Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or trade your personal or business data to third parties. We share enquiry information solely with <strong>Tata Teleservices Limited / Tata Tele Business Services</strong> for the purpose of validating service availability, scheduling site feasibility audits, and issuing authorized commercial proposals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">5. Data Retention</h2>
            <p>
              Enquiry records are retained in our secure operational systems only for the duration required to process your transaction or maintain ongoing commercial relationship records, typically up to 24 months, after which they are safely purged.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">6. Your Rights</h2>
            <p>
              In accordance with applicable Indian data protection principles, you have the right to request access to the data we hold regarding your inquiry, request rectification of inaccurate records, or request deletion of your information from our advisory systems. Requests may be directed to our grievance officer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">7. Grievance Officer & Contact</h2>
            <p>
              For privacy inquiries, data correction, or grievance escalation, please contact:
            </p>
            <div className="p-4 rounded-xl bg-surface-muted border border-border text-xs sm:text-sm space-y-1">
              <div><strong>Grievance Officer:</strong> Vsanco Technologies Privacy Desk</div>
              <div><strong>Email:</strong> privacy@vsanco.com</div>
              <div><strong>Address:</strong> Regus, Logix City Centre, Sector 32, Near Noida City Centre Metro Station, Noida, UP 201301, India</div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
