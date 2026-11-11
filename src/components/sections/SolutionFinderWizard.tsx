"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Network,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Question {
  id: string;
  title: string;
  description: string;
  options: {
    label: string;
    sublabel: string;
    value: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: "challenge",
    title: "What is your primary telecom or digital challenge?",
    description: "Select the operational issue your business is looking to solve right now.",
    options: [
      {
        label: "Frequent Internet Outages / Slow Speeds",
        sublabel: "Shared broadband is dropping during peak hours and impacting work.",
        value: "connectivity",
      },
      {
        label: "Legacy EPABX / Disconnected Phone Lines",
        sublabel: "Need cloud telephony with IVR, CRM integration, and remote agents.",
        value: "telephony",
      },
      {
        label: "Low Customer Response / Message Delivery Issues",
        sublabel: "Need official WhatsApp API and reliable high-speed transactional SMS.",
        value: "messaging",
      },
      {
        label: "Connecting Multiple Factories, Branches or Warehouses",
        sublabel: "Need secure private network interconnection with automatic failover.",
        value: "networking",
      },
      {
        label: "Cybersecurity & Web Application Threats",
        sublabel: "Need upstream DDoS protection, Web Application Firewall, or Cloud Backup.",
        value: "security",
      },
    ],
  },
  {
    id: "size",
    title: "How many users or branch locations are involved?",
    description: "Helps estimate required bandwidth throughput and channel concurrency.",
    options: [
      {
        label: "Single Location (Under 25 Users)",
        sublabel: "Growing office or single-site enterprise.",
        value: "small",
      },
      {
        label: "Mid-Market (25 to 150 Users)",
        sublabel: "Multiple teams, heavy cloud SaaS, and call handling.",
        value: "mid",
      },
      {
        label: "Large Enterprise / Multi-Site (150+ Users)",
        sublabel: "Multi-branch, contact center, or pan-India factory operations.",
        value: "enterprise",
      },
    ],
  },
];

interface Recommendation {
  solutionSlug: string;
  title: string;
  category: string;
  reason: string;
  recommendedBandwidthOrPlan: string;
  icon: React.ReactNode;
}

export const SolutionFinderWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  const handleSelect = (questionId: string, value: string) => {
    const nextAnswers = { ...answers, [questionId]: value };
    setAnswers(nextAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
  };

  const getRecommendation = (): Recommendation => {
    const challenge = answers.challenge || "connectivity";

    switch (challenge) {
      case "telephony":
        return {
          solutionSlug: "smartflo-cloud-telephony",
          title: "Smartflo Cloud Telephony Suite",
          category: "Cloud Communications",
          reason:
            "Smartflo completely eliminates physical EPABX hardware, giving your agents web and mobile calling with intelligent IVR, call recording, and native CRM synchronization.",
          recommendedBandwidthOrPlan: "Custom Agent Seats with Softphone Access",
          icon: <PhoneCall className="w-8 h-8 text-brand-blue" />,
        };
      case "messaging":
        return {
          solutionSlug: "whatsapp-business-platform",
          title: "WhatsApp Business Platform & Smart SMS",
          category: "Business Messaging",
          reason:
            "Official Meta WhatsApp API combined with DLT-compliant SMS gateway delivers over 80% open rates and automates customer support inquiries.",
          recommendedBandwidthOrPlan: "High-Throughput Enterprise API Gateway",
          icon: <MessageSquare className="w-8 h-8 text-brand-blue" />,
        };
      case "networking":
        return {
          solutionSlug: "managed-sd-wan",
          title: "Managed SD-WAN & MPLS VPN",
          category: "Managed Services",
          reason:
            "Bonds multiple circuits with automatic sub-second failover, ensuring branch billing registers and factory ERP systems stay online 24x7.",
          recommendedBandwidthOrPlan: "Centralized Orchestrator + Branch Edge Devices",
          icon: <Server className="w-8 h-8 text-brand-blue" />,
        };
      case "security":
        return {
          solutionSlug: "ddos-mitigation",
          title: "DDoS Mitigation & Cloud Backup DR",
          category: "Cybersecurity & Cloud",
          reason:
            "Protects web applications and perimeter networks against upstream volumetric attacks with Tier-III sovereign Indian data backup.",
          recommendedBandwidthOrPlan: "Upstream Scrubbing + Automated Cloud Backup",
          icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
        };
      case "connectivity":
      default:
        return {
          solutionSlug: "smart-internet-leased-line",
          title: "Smart Internet Leased Line (SILL)",
          category: "Business Connectivity",
          reason:
            "Delivers 1:1 dedicated, symmetrical bandwidth backed by 99.5%+ uptime SLA and built-in cloud edge DNS security to eliminate buffering permanently.",
          recommendedBandwidthOrPlan: "Symmetric Bandwidth (50 Mbps to 1 Gbps)",
          icon: <Network className="w-8 h-8 text-brand-blue" />,
        };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-16 sm:py-24 bg-surface-muted border-y border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Solution Finder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
            Find the Exact TTBS Offering for Your Organization
          </h2>
          <p className="text-sm text-muted mt-2">
            Answer two quick questions to see the recommended architecture and request a tailored quote.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-border rounded-card p-6 sm:p-10 shadow-card">
          {!completed ? (
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-border pb-3">
                <span>
                  Step {currentStep + 1} of {QUESTIONS.length}
                </span>
                <span className="text-brand-blue">
                  {Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Complete
                </span>
              </div>

              {/* Question header */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-ink">
                  {QUESTIONS[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  {QUESTIONS[currentStep].description}
                </p>
              </div>

              {/* Options list */}
              <div className="space-y-3 pt-2">
                {QUESTIONS[currentStep].options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() =>
                      handleSelect(QUESTIONS[currentStep].id, opt.value)
                    }
                    className="w-full text-left p-4 rounded-xl border border-border hover:border-brand-blue hover:bg-blue-50/40 transition-all duration-150 flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <div>
                      <div className="text-sm font-bold text-ink group-hover:text-brand-blue transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-muted mt-0.5">
                        {opt.sublabel}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Card */
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    Tailored Recommendation
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-medium text-slate-500 hover:text-brand-blue flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/70 to-white border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm shrink-0">
                  {recommendation.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    {recommendation.category}
                  </span>
                  <h3 className="text-xl font-bold text-ink">
                    {recommendation.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {recommendation.reason}
                  </p>
                  <div className="text-xs font-medium text-slate-500 pt-1">
                    <span className="font-semibold text-slate-700">Estimated Scope:</span>{" "}
                    {recommendation.recommendedBandwidthOrPlan}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  href={`/request-a-quote?solution=${encodeURIComponent(
                    recommendation.solutionSlug
                  )}`}
                  size="md"
                  variant="primary"
                  className="gap-2 flex-1 shadow-md"
                >
                  <span>Request Quote for This Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href={`/solutions/${recommendation.solutionSlug}`}
                  size="md"
                  variant="outline"
                  className="flex-1"
                >
                  View Product Details
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
