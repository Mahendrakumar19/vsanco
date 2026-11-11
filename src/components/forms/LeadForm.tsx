"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Building,
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { APPROVED_SOLUTION_SLUGS, ApprovedSolutionSlug } from "@/lib/validation/leads";

interface LeadFormProps {
  initialSolution?: string;
  sourcePath?: string;
  headline?: string;
  subheadline?: string;
  compact?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialSolution = "general-enquiry",
  sourcePath = "/",
  headline = "Request a Free Consultation & Quotation",
  subheadline = "Tell us your enterprise requirements and our certified telecom specialists will verify site feasibility and provide a customized proposal.",
  compact = false,
}) => {
  const router = useRouter();

  // Validate initialSolution is within allowlist
  const validInitialSolution = APPROVED_SOLUTION_SLUGS.includes(
    initialSolution as ApprovedSolutionSlug
  )
    ? (initialSolution as ApprovedSolutionSlug)
    : "general-enquiry";

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phone: "",
    jobTitle: "",
    city: "",
    state: "",
    solutionSlug: validInitialSolution,
    locationsCount: "1 Location",
    preferredContactTime: "Anytime during business hours",
    message: "",
    consentGiven: true,
    consentTextVersion: "2026-01",
    websiteUrl: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [leadReference, setLeadReference] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field error when user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourcePath,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.message || "Failed to submit request. Please check highlighted fields."
        );
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        return;
      }

      setStatus("success");
      setLeadReference(data.leadId || "");

      // Redirect to thank-you page after brief delay
      setTimeout(() => {
        router.push(
          `/thank-you?leadId=${encodeURIComponent(
            data.leadId || ""
          )}&solution=${encodeURIComponent(formData.solutionSlug)}`
        );
      }, 1000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please try again or reach our sales desk directly at 1800-266-1800."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-card p-8 text-center animate-in fade-in duration-200">
        <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-ink mb-2">
          Thank You! Your Request Has Been Received.
        </h3>
        <p className="text-sm text-slate-700 max-w-md mx-auto mb-4">
          Your enquiry reference ID is{" "}
          <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            {leadReference || "RECEIVED"}
          </span>
          . Our enterprise solutions specialist will contact you shortly to verify feasibility.
        </p>
        <p className="text-xs text-slate-500">Redirecting to confirmation page...</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-card p-6 sm:p-8 shadow-card">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
          {headline}
        </h3>
        <p className="text-sm text-muted mt-1.5 leading-relaxed">{subheadline}</p>
      </div>

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Submission Problem:</span> {errorMessage}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="websiteUrl">Leave this field blank</label>
          <input
            type="text"
            id="websiteUrl"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-1.5"
            >
              Full Name <span className="text-brand-blue">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-surface-muted/50 border rounded-input focus:bg-white transition-colors ${
                  fieldErrors.fullName ? "border-red-500" : "border-border"
                }`}
              />
            </div>
            {fieldErrors.fullName && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.fullName[0]}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-1.5"
            >
              Company Name <span className="text-brand-blue">*</span>
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Acme Technologies Pvt Ltd"
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-surface-muted/50 border rounded-input focus:bg-white transition-colors ${
                  fieldErrors.companyName ? "border-red-500" : "border-border"
                }`}
              />
            </div>
            {fieldErrors.companyName && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.companyName[0]}</p>
            )}
          </div>
        </div>

        {/* Row 2: Business Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="businessEmail"
              className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-1.5"
            >
              Work Email <span className="text-brand-blue">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                id="businessEmail"
                name="businessEmail"
                type="email"
                required
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-surface-muted/50 border rounded-input focus:bg-white transition-colors ${
                  fieldErrors.businessEmail ? "border-red-500" : "border-border"
                }`}
              />
            </div>
            {fieldErrors.businessEmail && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.businessEmail[0]}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-1.5"
            >
              Business Phone <span className="text-brand-blue">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-surface-muted/50 border rounded-input focus:bg-white transition-colors ${
                  fieldErrors.phone ? "border-red-500" : "border-border"
                }`}
              />
            </div>
            {fieldErrors.phone && (
              <p className="text-xs text-red-600 mt-1">{fieldErrors.phone[0]}</p>
            )}
          </div>
        </div>

        {/* Row 3: Solution Interest */}
        <div>
          <label
            htmlFor="solutionSlug"
            className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-1.5"
          >
            Solution of Interest <span className="text-brand-blue">*</span>
          </label>
          <select
            id="solutionSlug"
            name="solutionSlug"
            value={formData.solutionSlug}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-surface-muted/50 border border-border rounded-input focus:bg-white transition-colors"
          >
            <option value="general-enquiry">General TTBS Solutions Consultation</option>
            <optgroup label="Business Connectivity">
              <option value="smart-internet-leased-line">Smart Internet Leased Line (1:1 Dedicated)</option>
              <option value="mpls-vpn">MPLS VPN Private Networking</option>
              <option value="point-to-point-leased-line">Point-to-Point Leased Line</option>
            </optgroup>
            <optgroup label="Cloud Communications">
              <option value="smartflo-cloud-telephony">Smartflo Cloud Telephony Suite</option>
              <option value="sip-trunk">Enterprise SIP Trunking</option>
              <option value="hosted-contact-center">Hosted Cloud Contact Center</option>
              <option value="toll-free-services">1800 National Toll-Free Service</option>
            </optgroup>
            <optgroup label="Business Messaging">
              <option value="whatsapp-business-platform">WhatsApp Business Platform API</option>
              <option value="smart-sms">Smart SMS (Transactional & DLT Gateway)</option>
            </optgroup>
            <optgroup label="Collaboration & Cloud">
              <option value="microsoft-365">Microsoft 365 for Business</option>
              <option value="google-workspace">Google Workspace</option>
              <option value="cloud-backup-dr">Cloud Backup & Disaster Recovery</option>
            </optgroup>
            <optgroup label="Security & Managed Services">
              <option value="ddos-mitigation">DDoS Mitigation & Cloud WAF</option>
              <option value="managed-sd-wan">Managed SD-WAN</option>
              <option value="managed-wi-fi">Managed Enterprise Wi-Fi</option>
            </optgroup>
          </select>
        </div>

        {/* Optional Qualification Fields (expandable or hidden in compact mode) */}
        {!compact && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-xs font-medium text-slate-600 mb-1"
              >
                Job Title / Role
              </label>
              <div className="relative">
                <Briefcase className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. IT Manager / CTO"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-surface-muted/50 border border-border rounded-input focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-xs font-medium text-slate-600 mb-1"
              >
                City / Location
              </label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai, Noida, Bengaluru"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-surface-muted/50 border border-border rounded-input focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="locationsCount"
                className="block text-xs font-medium text-slate-600 mb-1"
              >
                Number of Sites
              </label>
              <select
                id="locationsCount"
                name="locationsCount"
                value={formData.locationsCount}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs bg-surface-muted/50 border border-border rounded-input focus:bg-white"
              >
                <option value="1 Location">1 Location</option>
                <option value="2-5 Locations">2-5 Locations</option>
                <option value="6-20 Locations">6-20 Locations</option>
                <option value="20+ Locations">20+ Locations (Pan-India)</option>
              </select>
            </div>
          </div>
        )}

        {/* Message / Requirement Description */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-1.5"
          >
            Brief Requirement Description (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 2 : 3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your bandwidth requirements, current setup, or specific business challenges..."
            className="w-full px-3.5 py-2.5 text-sm bg-surface-muted/50 border border-border rounded-input focus:bg-white transition-colors"
          />
        </div>

        {/* Mandatory Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="consentGiven"
              checked={formData.consentGiven}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-border text-brand-blue focus:ring-brand-blue"
              required
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I authorize Vsanco Technologies (Authorised TTBS Partner) to contact me via phone,
              email, or WhatsApp regarding this enterprise enquiry. I agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-brand-blue underline hover:text-brand-hover"
              >
                Privacy Policy
              </a>{" "}
              and understand my data will be handled securely.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <Button
            type="submit"
            size="lg"
            variant="primary"
            className="w-full gap-2 text-base font-semibold shadow-md"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Verifying & Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Enterprise Request</span>
              </>
            )}
          </Button>
          <p className="text-[11px] text-center text-slate-500 mt-2">
            No obligation • 100% Free site feasibility assessment • Direct TTBS SLA
          </p>
        </div>
      </form>
    </div>
  );
};
