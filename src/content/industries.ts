export interface IndustryItem {
  slug: string;
  name: string;
  headline: string;
  description: string;
  challenges: string[];
  recommendedSolutions: {
    slug: string;
    name: string;
    reason: string;
  }[];
  keyBenefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const INDUSTRIES_DATA: Record<string, IndustryItem> = {
  "it-ites": {
    slug: "it-ites",
    name: "IT & ITeS",
    headline: "High-Bandwidth, Low-Latency Infrastructure for Software & BPO Leaders",
    description:
      "Technology companies, software development firms, and contact centres require guaranteed uptime, symmetrical gigabit speeds, and cloud-ready voice infrastructure to deliver client SLAs across global time zones.",
    challenges: [
      "Frequent jitter and bandwidth throttling disrupting international client video calls and daily standups",
      "Managing complex hybrid workforce phone extensions across distributed cities",
      "High costs and operational overhead of maintaining legacy on-premises EPABX hardware",
      "Stringent client compliance mandates requiring ISO 27001 data isolation and DDoS mitigation",
    ],
    recommendedSolutions: [
      {
        slug: "smart-internet-leased-line",
        name: "Smart Internet Leased Line",
        reason: "1:1 dedicated symmetrical bandwidth ensures low latency to global cloud regions and CI/CD pipelines.",
      },
      {
        slug: "smartflo-cloud-telephony",
        name: "Smartflo Cloud Telephony",
        reason: "Enables developers, support desks, and inside sales reps to work remotely with native CRM integration.",
      },
      {
        slug: "sip-trunk",
        name: "Enterprise SIP Trunk",
        reason: "High concurrency voice channels for 24x7 customer support operations without line congestion.",
      },
      {
        slug: "ddos-mitigation",
        name: "DDoS Mitigation",
        reason: "Guards client-facing SaaS platforms and APIs against malicious volumetric attack downtime.",
      },
    ],
    keyBenefits: [
      "99.5%+ SLA backed connectivity with dual-ring fiber last mile",
      "Rapid agent onboarding with zero hardware dispatch required",
      "Single consolidated INR billing with full GST compliance",
    ],
    faqs: [
      {
        question: "Can Smartflo integrate with our Jira Service Management or HubSpot?",
        answer:
          "Yes. Smartflo provides pre-built connectors as well as open REST APIs and webhooks for real-time ticket creation and call logging.",
      },
      {
        question: "Can we get redundant leased lines from separate physical fiber paths?",
        answer:
          "Yes. TTBS offers dual-path fiber routing with automatic failover to eliminate single points of failure.",
      },
    ],
  },
  "bfsi-fintech": {
    slug: "bfsi-fintech",
    name: "BFSI & FinTech",
    headline: "Ultra-Secure, Regulated Connectivity and Compliant Communications",
    description:
      "Banks, non-banking financial companies (NBFCs), payment aggregators, and fintech startups operate under stringent RBI and SEBI data privacy mandates requiring private networks and tamper-evident customer messaging.",
    challenges: [
      "Ensuring financial transaction data never traverses the unencrypted public internet",
      "Fulfilling regulatory mandates for 100% call recording and immutable audit trails",
      "Preventing fraudulent phishing and spoofing with verified messaging headers",
      "Maintaining high availability during month-end settlements and high-volume transaction windows",
    ],
    recommendedSolutions: [
      {
        slug: "mpls-vpn",
        name: "MPLS VPN Private Networking",
        reason: "Completely isolated Pan-India private IP network linking regional branches, ATMs, and core banking systems.",
      },
      {
        slug: "smart-sms",
        name: "Smart SMS (Transactional Gateway)",
        reason: "Direct operator routing ensures sub-5-second OTP delivery for payment authentications with DLT compliance.",
      },
      {
        slug: "whatsapp-business-platform",
        name: "WhatsApp Business Platform",
        reason: "Enables secure delivery of account balance updates, loan eligibility notifications, and policy docs.",
      },
      {
        slug: "cloud-backup-dr",
        name: "Cloud Backup & Disaster Recovery",
        reason: "Automates immutable data replication to sovereign Tier-III Indian data centers for statutory retention.",
      },
    ],
    keyBenefits: [
      "Strict data localization within Indian borders complying with RBI directives",
      "Sub-second transactional messaging throughput during peak market trading hours",
      "End-to-end encrypted voice and data transport with complete regulatory audit compliance",
    ],
    faqs: [
      {
        question: "Does TTBS infrastructure comply with Indian data sovereignty regulations?",
        answer:
          "Yes. All TTBS data centers, voice media servers, and backup repositories are physically situated within India.",
      },
    ],
  },
  "healthcare": {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    headline: "Continuous 24x7 Connectivity and Reliable Patient Communication",
    description:
      "Hospitals, diagnostic chains, and telemedicine platforms require zero-downtime internet for electronic health records (EHR), high-volume toll-free helplines, and automated patient appointment reminders.",
    challenges: [
      "Missed emergency patient calls due to busy telephone lines or unmanaged receptionist desk phones",
      "High patient no-show rates for consultations, diagnostic scans, and elective procedures",
      "Slow transfer of bandwidth-intensive DICOM radiology imaging files between diagnostic centres and hospitals",
      "Need for secure, compliant patient record backups protected against targeted hospital ransomware attacks",
    ],
    recommendedSolutions: [
      {
        slug: "smartflo-cloud-telephony",
        name: "Smartflo Cloud Telephony",
        reason: "Intelligent multi-lingual IVR routes patient emergencies directly to on-call duty doctors 24x7.",
      },
      {
        slug: "whatsapp-business-platform",
        name: "WhatsApp Business Platform",
        reason: "Automates appointment booking reminders, digital lab report delivery, and doctor schedule updates.",
      },
      {
        slug: "smart-internet-leased-line",
        name: "Smart Internet Leased Line",
        reason: "Symmetric gigabit bandwidth transfers massive PACS/DICOM imaging files in seconds between facilities.",
      },
      {
        slug: "cloud-backup-dr",
        name: "Cloud Backup & DR",
        reason: "Safeguards critical patient medical histories with encrypted, air-gapped cloud backups.",
      },
    ],
    keyBenefits: [
      "Guaranteed 24x7 emergency call routing with zero busy signals",
      "Over 40% reduction in appointment no-shows via automated interactive WhatsApp reminders",
      "Rapid diagnostic report dispatch directly to patients' smartphones",
    ],
    faqs: [
      {
        question: "Can patients confirm or reschedule appointments over WhatsApp?",
        answer:
          "Yes. Interactive quick-reply buttons allow patients to confirm, cancel, or reschedule appointments with automated CRM sync.",
      },
    ],
  },
  "manufacturing": {
    slug: "manufacturing",
    name: "Manufacturing & Logistics",
    headline: "Connecting Factories, Warehouses, and Corporate Offices in Real Time",
    description:
      "Automotive, pharmaceutical, chemical, and heavy industrial manufacturers rely on integrated networks to track supply chain logistics, sync ERP records with factory floors, and coordinate dispatch schedules.",
    challenges: [
      "Remote industrial locations with unreliable local broadband connectivity",
      "Fragmented communication between central corporate headquarters and plant production teams",
      "Inability to prioritize real-time SAP/ERP inventory sync over general factory internet traffic",
      "High downtime costs whenever warehouse dispatch networks drop connection",
    ],
    recommendedSolutions: [
      {
        slug: "managed-sd-wan",
        name: "Managed SD-WAN",
        reason: "Bonds multiple network circuits with automatic failover, keeping factory dispatch systems permanently online.",
      },
      {
        slug: "mpls-vpn",
        name: "MPLS VPN Private Networking",
        reason: "Connects industrial manufacturing hubs directly into central ERP servers with guaranteed QoS.",
      },
      {
        slug: "smart-internet-leased-line",
        name: "Smart Internet Leased Line",
        reason: "High-capacity fiber connectivity for corporate offices, engineering design CAD sync, and video surveillance.",
      },
      {
        slug: "managed-wi-fi",
        name: "Managed Enterprise Wi-Fi",
        reason: "Ruggedized wireless network coverage across sprawling warehouse floors for handheld barcode scanners.",
      },
    ],
    keyBenefits: [
      "Zero-touch branch deployment accelerates new warehouse onboarding",
      "Eliminates warehouse dispatch stoppages with sub-second link failovers",
      "Centralized cloud visibility over every factory node across India",
    ],
    faqs: [
      {
        question: "Can SD-WAN prioritize SAP inventory sync over guest Wi-Fi in plants?",
        answer:
          "Yes. Application-aware routing ensures critical business packets receive first priority across all available links.",
      },
    ],
  },
  "education": {
    slug: "education",
    name: "Education & EdTech",
    headline: "Campus-Wide Digital Learning and Automated Student Engagement",
    description:
      "Universities, private colleges, K-12 school chains, and EdTech platforms need dense campus Wi-Fi, secure high-speed internet for virtual learning, and automated broadcast messaging for fees and exam alerts.",
    challenges: [
      "High device density choking campus Wi-Fi during lectures and exam periods",
      "High volume of inbound admission inquiries overwhelming university phone desks during admission cycles",
      "Need to send urgent exam dates, fee reminders, and attendance alerts to thousands of parents simultaneously",
      "Unrestricted internet access exposing students and institutional networks to malicious websites",
    ],
    recommendedSolutions: [
      {
        slug: "managed-wi-fi",
        name: "Managed Campus Wi-Fi",
        reason: "High-density Wi-Fi 6 access points with student authentication, content filtering, and bandwidth quotas.",
      },
      {
        slug: "smart-internet-leased-line",
        name: "Smart Internet Leased Line",
        reason: "Symmetric high-bandwidth pipes with built-in DNS filtering to block adult content and cyber threats.",
      },
      {
        slug: "smartflo-cloud-telephony",
        name: "Smartflo Cloud Telephony",
        reason: "Handles massive admission call volume surges with multi-agent queues, call recording, and skill routing.",
      },
      {
        slug: "smart-sms",
        name: "Smart SMS & WhatsApp Gateway",
        reason: "Broadcasts examination schedules, hall ticket links, and fee payment deadlines to parents with 100% reach.",
      },
    ],
    keyBenefits: [
      "Eliminates admission lead drop-offs during seasonal peak enrollment windows",
      "Comprehensive digital audit logs and regulatory compliant internet access controls",
      "Scalable infrastructure that grows effortlessly as student enrollment expands",
    ],
    faqs: [
      {
        question: "Can we restrict students from accessing social media and gaming during school hours?",
        answer:
          "Yes. Managed Wi-Fi and Smart Internet include time-based URL and category filtering policies.",
      },
    ],
  },
  "retail-ecommerce": {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    headline: "Omnichannel Communications and Resilient Store Networking",
    description:
      "Retail store chains, modern trade outlets, and online direct-to-consumer (D2C) brands require resilient point-of-sale (POS) connectivity, centralized customer care, and conversational WhatsApp engagement.",
    challenges: [
      "POS terminal checkout delays and failed digital payments caused by unstable store broadband",
      "Disconnected store phone numbers leading to lost customer inquiries and stock queries",
      "High abandoned cart rates and low email open rates for order updates and promotional announcements",
      "Difficulty managing network security across hundreds of distributed retail franchise outlets",
    ],
    recommendedSolutions: [
      {
        slug: "managed-sd-wan",
        name: "Managed SD-WAN",
        reason: "Ensures retail billing registers switch over instantaneously to backup links without interrupting card payments.",
      },
      {
        slug: "whatsapp-business-platform",
        name: "WhatsApp Business Platform",
        reason: "Sends automated order confirmations, delivery tracking links, and personalized loyalty offers directly on WhatsApp.",
      },
      {
        slug: "smartflo-cloud-telephony",
        name: "Smartflo Cloud Telephony",
        reason: "Unified customer service helpline that automatically distributes calls to local store managers or central support.",
      },
      {
        slug: "smart-sms",
        name: "Smart SMS Platform",
        reason: "Instant billing invoice SMS delivery with dynamic bitly links for paperless retail checkouts.",
      },
    ],
    keyBenefits: [
      "Zero payment terminal downtime during peak weekend shopping rushes",
      "Up to 3x higher click-through rates on promotional WhatsApp alerts compared to email",
      "Paperless digital invoice delivery directly to customer messaging apps",
    ],
    faqs: [
      {
        question: "How quickly can a new retail store be connected with SD-WAN?",
        answer:
          "With zero-touch provisioning, once the local broadband/4G lines are active, the SD-WAN router configures itself in minutes upon being connected.",
      },
    ],
  },
};
