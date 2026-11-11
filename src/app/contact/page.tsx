import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { TataTeleLogo, VsancoLogo } from "@/components/ui/Logos";

export const metadata: Metadata = {
  title: "Contact Vsanco Technologies | Authorised Partner Of TATA Tele Business Services",
  description:
    "Contact Vsanco Technologies at Regus, Logix City Centre, Sector 32, Noida (Near Noida City Centre Metro Station). Request a free site feasibility survey for Tata Tele Business Services.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-surface-muted border-b border-border py-4">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact & Feasibility" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 mb-4 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Authorised Partner of:
              </span>
              <TataTeleLogo variant="white" size="sm" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Vsanco Technologies
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              Connect with our enterprise solutions team in Noida. We conduct physical fiber
              feasibility assessments, verify bandwidth availability, and configure Smartflo
              cloud telephony for organizations across Delhi-NCR and Pan-India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Verified Contact Information & Operational Transparency */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-ink mb-2">
                  Direct Communication Channels
                </h2>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Visit our regional office in Sector 32 Noida or reach out directly to our certified TTBS enterprise advisory desk.
                </p>
              </div>

              <div className="space-y-5">
                <div className="p-5 rounded-2xl bg-surface-muted border border-border flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                      Office Address (Noida)
                    </span>
                    <div className="text-sm font-bold text-ink mt-0.5">
                      Vsanco Technologies
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Regus, Logix City Centre, Sector 32, Near Noida City Centre Metro Station, Noida, Uttar Pradesh 201301, India
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-blue">
                      <Navigation className="w-3 h-3" />
                      <span>Adjacent to Wave City Centre / Metro Station</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-muted border border-border flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                      Sales & Feasibility Hotline
                    </span>
                    <div className="text-base font-bold text-ink mt-0.5">
                      1800-266-1800 / +91-98710-00000
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      Toll-free across India • Mon–Sat 9:30 AM – 6:30 PM IST
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-muted border border-border flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                      Enterprise Email Inquiries
                    </span>
                    <div className="text-base font-bold text-ink mt-0.5">
                      sales@vsanco.com
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      Direct response from dedicated solution architects within 4 business hours
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-muted border border-border flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                      Working Hours
                    </span>
                    <div className="text-sm font-bold text-ink mt-0.5">
                      Monday to Saturday: 9:30 AM to 6:30 PM IST
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      Closed on Sundays and national public holidays
                    </span>
                  </div>
                </div>
              </div>

              {/* Support Separation Callout */}
              <div className="p-5 rounded-card bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Headphones className="w-4 h-4 text-brand-blue" />
                  <span>Existing Customer Support Escalations:</span>
                </div>
                <p className="leading-relaxed">
                  For active circuits and operational network fault tickets, please contact the <strong>Tata Tele Business Services 24x7 Enterprise Helpdesk</strong> directly at 1800-266-1515 with your TTBS Account Number for instant NOC dispatch.
                </p>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm
                sourcePath="/contact"
                headline="Request a Consultation & Feasibility Survey"
                subheadline="Submit your organization's requirements and our telecom team will conduct a physical feasibility audit and reach out."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
