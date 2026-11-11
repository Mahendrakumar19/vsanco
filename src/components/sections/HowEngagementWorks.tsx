import React from "react";
import { ClipboardList, SearchCheck, CheckCircle } from "lucide-react";

export const HowEngagementWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <ClipboardList className="w-6 h-6 text-brand-blue" />,
      title: "Requirement Discovery",
      description:
        "Submit your business goals, site locations, user counts, and current telecom pain points. Our certified specialists review your needs.",
    },
    {
      step: "02",
      icon: <SearchCheck className="w-6 h-6 text-brand-blue" />,
      title: "Physical Feasibility & Architecture",
      description:
        "TTBS network field engineers verify physical fiber reach, building rights-of-way, and deliver a tailored, itemized commercial quote.",
    },
    {
      step: "03",
      icon: <CheckCircle className="w-6 h-6 text-brand-blue" />,
      title: "Direct Contract & Activation",
      description:
        "Contracts are signed directly with Tata Teleservices Limited. Services are provisioned with 24x7 NOC monitoring and SLA guarantees.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Structured Onboarding
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mt-1.5">
            How Engagement Works with Vsanco Technologies
          </h2>
          <p className="text-base text-muted mt-2">
            A transparent, three-step consultative path from initial enquiry to active service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="bg-white border border-border rounded-card p-7 shadow-card relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center text-xs font-semibold text-brand-blue">
                <span>Phase {idx + 1} Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
