import { z } from "zod";

export const APPROVED_SOLUTION_SLUGS = [
  "general-enquiry",
  "connectivity",
  "smart-internet-leased-line",
  "mpls-vpn",
  "point-to-point-leased-line",
  "business-communications",
  "smartflo-cloud-telephony",
  "sip-trunk",
  "hosted-contact-center",
  "toll-free-services",
  "business-messaging",
  "whatsapp-business-platform",
  "smart-sms",
  "collaboration-productivity",
  "microsoft-365",
  "google-workspace",
  "zoom-rooms",
  "cloud-infrastructure",
  "tata-tele-cloud",
  "cloud-backup-dr",
  "cybersecurity",
  "ddos-mitigation",
  "web-application-firewall",
  "endpoint-security",
  "virtual-firewall",
  "managed-services",
  "managed-sd-wan",
  "managed-wi-fi",
  "managed-router",
] as const;

export type ApprovedSolutionSlug = (typeof APPROVED_SOLUTION_SLUGS)[number];

export const leadSubmissionSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  companyName: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(150, "Company name must not exceed 150 characters"),
  businessEmail: z
    .string()
    .trim()
    .email("Please provide a valid work email address")
    .max(120, "Email must not exceed 120 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(18, "Phone number must not exceed 18 characters")
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/, "Please enter a valid business phone number"),
  jobTitle: z.string().trim().max(100).optional().default(""),
  city: z.string().trim().max(100).optional().default(""),
  state: z.string().trim().max(100).optional().default(""),
  solutionSlug: z.enum(APPROVED_SOLUTION_SLUGS, {
    errorMap: () => ({ message: "Please select a valid solution" }),
  }),
  locationsCount: z.string().trim().max(50).optional().default(""),
  preferredContactTime: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().max(2000, "Message cannot exceed 2000 characters").optional().default(""),
  consentGiven: z.literal(true, {
    errorMap: () => ({ message: "Consent is required to submit this enquiry" }),
  }),
  consentTextVersion: z.string().default("2026-01"),
  sourcePath: z.string().max(200).optional().default("/"),
  utmSource: z.string().max(100).optional().default(""),
  utmMedium: z.string().max(100).optional().default(""),
  utmCampaign: z.string().max(100).optional().default(""),
  utmContent: z.string().max(100).optional().default(""),
  utmTerm: z.string().max(100).optional().default(""),
  // Honeypot field for bot mitigation (must remain empty)
  websiteUrl: z.string().max(0, "Bot detected").optional().default(""),
});

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
