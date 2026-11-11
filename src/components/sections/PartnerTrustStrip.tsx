import React from "react";
import { Shield, FileCheck, Headset, Network } from "lucide-react";
import { TataTeleLogo } from "@/components/ui/Logos";

export const PartnerTrustStrip: React.FC = () => {
  return (
    <section className="bg-surface-muted border-y border-border py-8">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="mb-1">
                <TataTeleLogo variant="color" size="sm" />
              </div>
              <p className="text-xs text-muted mt-0.5 leading-relaxed">
                Vsanco Technologies is an authorized business partner with direct access to TTBS engineering.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-ink">Direct Operator Invoicing</h4>
              <p className="text-xs text-muted mt-0.5 leading-relaxed">
                Official billing and contracts executed directly with Tata Teleservices Limited.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-ink">Strict Carrier SLAs</h4>
              <p className="text-xs text-muted mt-0.5 leading-relaxed">
                Up to 99.5%+ uptime guaranteed with proactive 24x7 NOC monitoring and MTTR benchmarks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue border border-blue-100 shrink-0">
              <Headset className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-ink">Noida Advisory Desk</h4>
              <p className="text-xs text-muted mt-0.5 leading-relaxed">
                Local consultative guidance at Sector 32 paired with centralized 24x7 enterprise support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
