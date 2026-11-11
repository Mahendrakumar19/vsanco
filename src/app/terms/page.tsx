import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use | Vsanco Technologies",
  description:
    "Terms of Use governing the use of the Vsanco Technologies TTBS partner portal, intellectual property rights, and commercial quotation terms.",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms of Use" }]} />
        </div>
      </div>

      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <span className="text-xs font-bold uppercase text-brand-blue tracking-wider">
              Legal Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-1">
              Terms of Use
            </h1>
            <p className="text-xs text-muted mt-2">
              Last updated: January 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website (vsanco.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">2. Nature of the Website</h2>
            <p>
              This website is an informational and lead-generation portal operated by Vsanco Technologies as an authorised partner of Tata Tele Business Services (Tata Teleservices Limited). It provides educational overviews and facilitates enterprise feasibility requests. It is not an automated billing, provisioning, or telecom carrier platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">3. Intellectual Property Rights</h2>
            <p>
              The original layout, design, copy, diagrams, and code on this website are the intellectual property of Vsanco Technologies.
            </p>
            <p>
              &quot;Tata&quot;, &quot;Tata Tele Business Services&quot;, &quot;TTBS&quot;, &quot;Smartflo&quot;, &quot;Smart Internet&quot;, and related logos and brand marks are the registered trademarks of Tata Sons Private Limited and Tata Teleservices Limited. They are referenced herein strictly under authorized partner guidelines to identify official provider solutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">4. Non-Binding Nature of Inquiries</h2>
            <p>
              Submission of a quotation request or feasibility inquiry does not constitute a binding commercial contract. Service availability, technical feasibility, final bandwidth rates, installation fees, and Service Level Agreements are subject to physical site verification and formal customer agreement execution directly with Tata Teleservices Limited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">5. Acceptable Use</h2>
            <p>
              You agree to use this website only for lawful business inquiries. You must not submit false contact details, inject malicious code, attempt unauthorized access, or use automated scrapers without prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">6. Limitation of Liability</h2>
            <p>
              While Vsanco Technologies makes reasonable efforts to present accurate, up-to-date information, all content is provided &quot;as is&quot; without warranties of any kind. Under no circumstances will Vsanco Technologies or its management be liable for any indirect, incidental, or consequential damages resulting from reliance on the informational content of this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-ink">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Noida, Gautam Buddha Nagar, Uttar Pradesh, India.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
