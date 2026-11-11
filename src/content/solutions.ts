export interface SolutionItem {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  shortSummary: string;
  overview: string;
  targetAudience: string[];
  keyCapabilities: string[];
  businessBenefits: string[];
  useCases: {
    title: string;
    description: string;
  }[];
  prerequisites: string[];
  limitationsAndNotes: string[];
  officialProviderLink: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface SolutionCategory {
  slug: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  highlights: string[];
  solutions: string[]; // slugs
}

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    slug: "connectivity",
    name: "Business Connectivity",
    headline: "High-Performance Dedicated Internet and Private Networks",
    description:
      "Enterprise-grade connectivity solutions engineered for continuous uptime, symmetric bandwidth, and multi-site secure networking across India.",
    iconName: "Network",
    highlights: [
      "Guaranteed symmetric bandwidth up to 10 Gbps",
      "Robust Service Level Agreement (SLA) with dual-ring fiber",
      "Dedicated bandwidth with low latency and static IP support",
      "Comprehensive multi-location MPLS and point-to-point links",
    ],
    solutions: [
      "smart-internet-leased-line",
      "mpls-vpn",
      "point-to-point-leased-line",
    ],
  },
  {
    slug: "business-communications",
    name: "Cloud Communications",
    headline: "Smart Cloud Telephony and Enterprise Voice Infrastructure",
    description:
      "Transform business voice operations with AI-ready cloud telephony, intelligent call routing, scalable SIP trunks, and contact centre platforms.",
    iconName: "PhoneCall",
    highlights: [
      "Smartflo cloud communication suite with web & mobile agent access",
      "Seamless integration with popular CRMs (Salesforce, Zoho, LeadSquared)",
      "SIP trunking with high concurrent call handling",
      "1800 national toll-free numbers with intelligent IVR routing",
    ],
    solutions: [
      "smartflo-cloud-telephony",
      "sip-trunk",
      "hosted-contact-center",
      "toll-free-services",
    ],
  },
  {
    slug: "business-messaging",
    name: "Business Messaging",
    headline: "Compliant Multi-Channel Customer Engagement Platforms",
    description:
      "Engage customers via official WhatsApp Business Platform and DLT-registered enterprise SMS for notifications, OTPs, and relationship marketing.",
    iconName: "MessageSquare",
    highlights: [
      "Official WhatsApp Business Platform API deployment and template approval support",
      "DLT-compliant high-speed transactional and promotional SMS gateway",
      "Real-time delivery reports and comprehensive campaign analytics",
      "Automated two-way conversational workflows and chatbots",
    ],
    solutions: ["whatsapp-business-platform", "smart-sms"],
  },
  {
    slug: "collaboration-productivity",
    name: "Collaboration & Productivity",
    headline: "Modern Workplace Tools for Distributed Enterprise Teams",
    description:
      "Empower your workforce with enterprise subscriptions, seamless cloud migration, and localized partner support for leading productivity suites.",
    iconName: "Users",
    highlights: [
      "Microsoft 365 licensing, deployment and domain migration",
      "Google Workspace setup, identity federation and Google Meet integration",
      "Centralized billing and dedicated partner onboarding support",
      "Robust data security, backup and device administration controls",
    ],
    solutions: ["microsoft-365", "google-workspace", "zoom-rooms"],
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    headline: "Secure, Scalable Enterprise Cloud Hosting & Disaster Recovery",
    description:
      "Flexible compute, sovereign Indian data centre hosting, and automated disaster recovery solutions designed for enterprise business continuity.",
    iconName: "Cloud",
    highlights: [
      "Tier-III/IV certified Indian data centres with low network latency",
      "Automated cloud backup and Disaster Recovery as a Service (DRaaS)",
      "High-availability compute and isolated virtual private clouds (VPC)",
      "Predictable billing with no hidden egress surcharges",
    ],
    solutions: ["tata-tele-cloud", "cloud-backup-dr"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    headline: "Proactive Perimeter and Threat Protection Solutions",
    description:
      "Safeguard your network, customer data, and applications with managed firewalls, DDoS mitigation, web application firewalls, and endpoint protection.",
    iconName: "ShieldCheck",
    highlights: [
      "Multi-gigabit upstream DDoS scrubbing and zero-day threat neutralization",
      "Cloud Web Application Firewall (WAF) guarding against OWASP Top 10 vulnerabilities",
      "Managed virtual firewalls with real-time intrusion prevention (IPS)",
      "Continuous threat monitoring and compliance audit readiness",
    ],
    solutions: [
      "ddos-mitigation",
      "web-application-firewall",
      "endpoint-security",
      "virtual-firewall",
    ],
  },
  {
    slug: "managed-services",
    name: "Managed Services",
    headline: "End-to-End Enterprise Network Architecture & NOC Operations",
    description:
      "Offload complex network operations with managed SD-WAN, enterprise Wi-Fi networks, and fully managed routing infrastructure with 24x7 monitoring.",
    iconName: "Cpu",
    highlights: [
      "Managed SD-WAN with application-aware traffic prioritization",
      "Turnkey enterprise campus Wi-Fi with captive portals and analytics",
      "Proactive 24x7 NOC monitoring and rapid fault resolution",
      "Transparent single-window management and periodic optimization reports",
    ],
    solutions: ["managed-sd-wan", "managed-wi-fi", "managed-router"],
  },
];

export const SOLUTIONS_DATA: Record<string, SolutionItem> = {
  "smart-internet-leased-line": {
    id: "sol_smart_internet",
    slug: "smart-internet-leased-line",
    name: "Smart Internet Leased Line",
    categorySlug: "connectivity",
    categoryName: "Business Connectivity",
    shortSummary:
      "High-speed dedicated symmetrical internet leased line with built-in cloud security and comprehensive SLA.",
    overview:
      "Smart Internet Leased Line (SILL) combines high-availability 1:1 dedicated internet bandwidth with integrated cloud-edge security. Unlike traditional broadband connections that suffer from shared bandwidth and fluctuating peak-hour speeds, SILL delivers consistent, symmetric upload and download speeds backed by an industry-leading Service Level Agreement (SLA). Built-in DNS-level security filters malware, phishing domains, and malicious web traffic before it reaches your local network.",
    targetAudience: [
      "Mid-market to large enterprises running cloud-hosted ERP, CRM, and voice services",
      "IT/ITeS companies requiring consistent high-bandwidth video conferencing and code deployments",
      "Financial services institutions requiring low-latency, deterministic network links",
      "Corporate headquarters and multi-floor branch offices",
    ],
    keyCapabilities: [
      "1:1 dedicated, uncontended symmetrical bandwidth from 10 Mbps up to 10 Gbps",
      "Dual-last-mile fiber redundancy for high network availability",
      "Integrated DNS-based threat filtering protecting against malware, phishing, and botnets",
      "Static IPv4 and IPv6 allocation with reverse DNS configuration support",
      "Self-service digital portal for real-time bandwidth utilization, latency, and packet loss monitoring",
    ],
    businessBenefits: [
      "Eliminates bandwidth contention and buffer delays during peak business hours",
      "Guarantees SLA-backed uptime with proactive monitoring and dedicated service managers",
      "Enhances security posture without requiring expensive on-premises firewall appliances for smaller branch sites",
      "Provides transparent performance visibility through automated SLA credit reporting",
    ],
    useCases: [
      {
        title: "Enterprise Cloud Application Access",
        description:
          "Ensures reliable, jitter-free performance for mission-critical SaaS tools such as SAP, Salesforce, Microsoft 365, and AWS workloads.",
      },
      {
        title: "High-Definition Video Conferencing & VoIP",
        description:
          "Symmetric upload speeds ensure executive boardrooms and call centre agents experience zero voice dropouts or video freezing.",
      },
    ],
    prerequisites: [
      "Physical site survey and feasibility verification at the designated delivery address",
      "Internal network terminating equipment (router or firewall) capable of receiving Gigabit Ethernet handoff",
      "Authorized customer signatory for telecom lease agreements",
    ],
    limitationsAndNotes: [
      "Service availability and exact delivery timelines depend on fiber feasibility at the specific postal address",
      "Standard contract terms require an annual or multi-year enterprise commitment",
      "DNS security features filter known malicious domains but do not replace comprehensive endpoint protection",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/connectivity/smart-internet/",
    faqs: [
      {
        question: "How does a leased line differ from standard business broadband?",
        answer:
          "Broadband is a shared medium with asymmetrical speeds (faster downloads than uploads) and contended bandwidth ratios. A Smart Internet Leased Line provides dedicated, 1:1 symmetrical bandwidth reserved exclusively for your business, backed by contractually enforced SLAs.",
      },
      {
        question: "What is the typical deployment timeline for a leased line?",
        answer:
          "Once the physical site feasibility survey is completed and the order is booked, fiber delivery typically ranges between 2 to 4 weeks depending on right-of-way permissions and building infrastructure.",
      },
      {
        question: "Can we upgrade our bandwidth later without changing physical cables?",
        answer:
          "Yes. In most installations where fiber terminating equipment supports higher speeds, bandwidth upgrades can be provisioned logically with minimal or zero downtime.",
      },
    ],
  },
  "mpls-vpn": {
    id: "sol_mpls_vpn",
    slug: "mpls-vpn",
    name: "MPLS VPN Private Networking",
    categorySlug: "connectivity",
    categoryName: "Business Connectivity",
    shortSummary:
      "Secure, fully meshed private networking connecting distributed enterprise branches, data centers, and factories.",
    overview:
      "Tata Tele Business Services MPLS VPN enables organizations to interconnect geographically dispersed offices, manufacturing facilities, warehouses, and data centers on a secure, private Pan-India IP backbone. By bypassing the public internet, MPLS VPN guarantees low latency, high throughput, and strict Quality of Service (QoS) classes for latency-sensitive applications like ERP queries, voice, and real-time inventory synchronization.",
    targetAudience: [
      "Enterprises with 5+ branches, retail outlets, or manufacturing plants across India",
      "Banks, NBFCs, and financial institutions adhering to strict RBI data transmission guidelines",
      "Pharmaceutical and healthcare networks running centralized core systems",
    ],
    keyCapabilities: [
      "Any-to-any and hub-and-spoke meshed private network topologies",
      "Granular Quality of Service (QoS) and Class of Service (CoS) traffic prioritization",
      "Private routing completely isolated from the public internet for maximum data security",
      "High reliability with self-healing redundant network rings across key Indian industrial corridors",
    ],
    businessBenefits: [
      "Predictable application performance for centralized SAP, Oracle, and Core Banking solutions",
      "Reduces branch security risk by eliminating direct open internet exposure",
      "Enables flexible expansion of new branch locations under a unified enterprise policy",
    ],
    useCases: [
      {
        title: "Retail & Branch Banking Interconnection",
        description:
          "Seamlessly connects regional branches to central data centers with sub-50ms latency and high data integrity.",
      },
      {
        title: "Supply Chain & Factory Integration",
        description:
          "Links manufacturing floors and remote distribution hubs to ERP systems in real time.",
      },
    ],
    prerequisites: [
      "Feasibility audit across all designated branch locations",
      "Enterprise IP addressing plan (private RFC 1918 subnets)",
    ],
    limitationsAndNotes: [
      "MPLS is an internal private network and requires a separate gateway or breakout for public internet access",
      "Pricing depends on the number of sites, bandwidth per node, and localized last-mile infrastructure",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/connectivity/mpls-vpn/",
    faqs: [
      {
        question: "Can we combine MPLS VPN with our existing Internet connections?",
        answer:
          "Yes. Many enterprises deploy a hybrid WAN or SD-WAN architecture where critical ERP data routes over private MPLS, while general SaaS traffic routes over Internet Leased Lines.",
      },
      {
        question: "Is data sent over MPLS encrypted?",
        answer:
          "MPLS provides logical private isolation separated from the public internet. For enhanced compliance, IPSec encryption tunnels can be layered on top of MPLS connections.",
      },
    ],
  },
  "smartflo-cloud-telephony": {
    id: "sol_smartflo",
    slug: "smartflo-cloud-telephony",
    name: "Smartflo Cloud Telephony",
    categorySlug: "business-communications",
    categoryName: "Cloud Communications",
    shortSummary:
      "Enterprise-grade cloud communication suite offering intelligent IVR, CRM integration, and hybrid agent operations.",
    overview:
      "Smartflo is the flagship cloud communication platform from Tata Tele Business Services, engineered to modernize enterprise voice operations. It replaces expensive on-premises EPABX hardware with a scalable, software-defined cloud communication system. Agents and managers can manage inbound and outbound calls through browser dashboards or mobile apps with enterprise security, live call analytics, call recording, and seamless two-way CRM integration.",
    targetAudience: [
      "Inside sales teams, telesales, and customer support desks",
      "Organizations with hybrid, remote, or field sales workforces",
      "Enterprises looking to eliminate capital expenditure on physical EPABX and telephone wiring",
      "Businesses needing strict call tracking, recording, and agent productivity metrics",
    ],
    keyCapabilities: [
      "Multi-level Interactive Voice Response (IVR) with custom visual flow designer",
      "Click-to-call, automated call distribution (ACD), and smart skill-based routing",
      "Native integrations with Salesforce, Zoho CRM, LeadSquared, Freshdesk, and HubSpot",
      "Real-time supervisor dashboard, live call monitoring, whispering, and barging",
      "100% cloud-hosted call recording with secure storage and granular playback permissions",
      "Custom REST APIs and webhooks for integration with internal ERPs and databases",
    ],
    businessBenefits: [
      "Enables work-from-anywhere agility without requiring fixed desk phones",
      "Reduces lead turnaround time by connecting inbound prospects directly to the right account manager",
      "Provides complete auditability and quality management through automatic call recordings",
      "Eliminates hardware maintenance contracts, AMC fees, and PRI line physical failures",
    ],
    useCases: [
      {
        title: "Inbound Customer Support & Lead Routing",
        description:
          "Intelligently routes incoming calls based on customer tier, caller language, or agent availability, minimizing customer wait times.",
      },
      {
        title: "High-Velocity Inside Sales Campaigns",
        description:
          "Sales reps click-to-dial directly from CRM leads; call duration, outcomes, and recordings are automatically synchronized.",
      },
    ],
    prerequisites: [
      "Stable business internet connection (minimum 100 kbps per concurrent agent voice stream)",
      "Standard web browser (Chrome, Edge) or modern smartphone for agent softphone usage",
      "KYC documentation for enterprise telecommunications registration",
    ],
    limitationsAndNotes: [
      "Voice quality relies on the underlying internet connection stability of the agent's location",
      "Outbound campaigns must comply with TRAI telemarketing and DND guidelines",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/communications/smartflo/",
    faqs: [
      {
        question: "Do our agents need physical desk phones to use Smartflo?",
        answer:
          "No. Smartflo operates via a modern web softphone in standard browsers, mobile apps on Android/iOS, or softphone applications, allowing agents to work from offices or homes.",
      },
      {
        question: "Can we integrate Smartflo with our custom in-house CRM?",
        answer:
          "Yes. Smartflo provides comprehensive REST APIs and Webhooks that allow your engineering team to trigger calls, capture call logs, and receive real-time call events in any internal software.",
      },
      {
        question: "Can we retain our existing phone numbers?",
        answer:
          "Depending on your existing telecom circle and number type, number porting or virtual number bridging can be configured. Our team will verify number feasibility during the consultation.",
      },
    ],
  },
  "sip-trunk": {
    id: "sol_sip_trunk",
    slug: "sip-trunk",
    name: "Enterprise SIP Trunk",
    categorySlug: "business-communications",
    categoryName: "Cloud Communications",
    shortSummary:
      "Scalable IP-based voice trunking replacing legacy PRI lines with flexible concurrent call channels.",
    overview:
      "Tata Tele Business Services SIP Trunking provides a direct, carrier-grade IP connection between your enterprise IP-PBX or contact center platform and the public switched telephone network (PSTN). Traditional PRI lines are limited to rigid 30-channel multiples and require physical copper/E1 cards. In contrast, SIP Trunking delivers high scalability from 10 to over 1,500 simultaneous voice channels over a single dedicated fiber connection.",
    targetAudience: [
      "Large contact centers and BPOs with high outbound and inbound call volumes",
      "Enterprises with IP-PBX systems (Avaya, Cisco, Asterisk, FreePBX, 3CX)",
      "Organizations wanting to consolidate multiple regional telephone lines into a single centralized pipe",
    ],
    keyCapabilities: [
      "Scales dynamically from 10 to 1,500+ concurrent voice calls without adding physical hardware",
      "Delivers carrier-grade G.711 / G.729 audio codecs for crystal-clear voice fidelity",
      "Direct inward dialing (DID) pool allocation across departments and executives",
      "Centralized billing and simplified telecommunications cost management",
    ],
    businessBenefits: [
      "Substantially lowers telecommunication costs compared to maintaining legacy PRI connections",
      "Eliminates hardware failure points associated with physical telecom line cards",
      "Enables rapid scalability during seasonal call surges without waiting for physical cable pulls",
    ],
    useCases: [
      {
        title: "BPO / Contact Center Consolidation",
        description:
          "Connects large enterprise dialers to the national telecom network with low call setup latency.",
      },
      {
        title: "Multi-Department Direct Inward Dialing",
        description:
          "Assigns unique phone extensions to hundreds of corporate staff members over one centralized trunk.",
      },
    ],
    prerequisites: [
      "Compatible IP-PBX or Session Border Controller (SBC) supporting SIP protocol RFC 3261",
      "Dedicated data link or fiber connection to ensure voice packet priority",
    ],
    limitationsAndNotes: [
      "Requires an enterprise Session Border Controller (SBC) or IP-PBX configured by qualified network engineers",
      "Telephony regulations in India prohibit interconnecting PSTN and VoIP on the same unmanaged PBX without authorized architecture",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/communications/sip-trunk/",
    faqs: [
      {
        question: "What is the difference between a PRI line and a SIP Trunk?",
        answer:
          "PRI uses legacy TDM copper lines restricted to blocks of 30 channels. SIP Trunking runs over IP/fiber, offering dynamic scalability in increments of your choice, lower hardware costs, and superior disaster recovery flexibility.",
      },
      {
        question: "Can we keep our existing Direct Inward Dialing (DID) numbers?",
        answer:
          "In many telecom circles, existing numbers can be ported to SIP trunks. Our team will verify porting feasibility for your circle.",
      },
    ],
  },
  "whatsapp-business-platform": {
    id: "sol_whatsapp",
    slug: "whatsapp-business-platform",
    name: "WhatsApp Business Platform",
    categorySlug: "business-messaging",
    categoryName: "Business Messaging",
    shortSummary:
      "Official enterprise WhatsApp messaging API for customer support, service alerts, and conversational commerce.",
    overview:
      "The WhatsApp Business Platform enables mid-market and enterprise organizations to connect with customers on India's most popular messaging channel. Through official Meta-authorized cloud APIs backed by TTBS infrastructure, businesses can send high-priority transactional notifications, OTPs, appointment reminders, delivery updates, and automated interactive customer service chatbots.",
    targetAudience: [
      "E-commerce, retail, and delivery businesses automating order tracking and customer queries",
      "Banks, fintechs, and insurance providers delivering statement updates and policy alerts",
      "Healthcare networks managing appointment scheduling and diagnostic report delivery",
      "Educational institutions communicating with prospective and enrolled students",
    ],
    keyCapabilities: [
      "Official Meta-verified enterprise API with high throughput message delivery",
      "Interactive message templates: quick-reply buttons, call-to-action links, and list pickers",
      "Automated conversational flows, FAQ bots, and live human agent escalation",
      "Rich media support: PDFs, images, video brochures, and location sharing",
      "Comprehensive analytics: sent, delivered, read, and response metrics",
    ],
    businessBenefits: [
      "Significantly higher engagement and open rates compared to traditional email",
      "Enhances brand trust with official business profile verification (Green Tick eligibility)",
      "Automates up to 60% of routine customer queries, freeing up human support personnel",
      "Enables frictionless 2-way conversations directly within the customer's preferred app",
    ],
    useCases: [
      {
        title: "Transactional Alerts & Customer Support",
        description:
          "Deliver OTPs, ticket confirmations, and order tracking with instant delivery and read confirmation.",
      },
      {
        title: "Lead Qualification & Inquiries",
        description:
          "Engage prospective website visitors via WhatsApp chat, capturing lead criteria automatically before handing over to sales.",
      },
    ],
    prerequisites: [
      "Verified Facebook Business Manager account",
      "Dedicated clean phone number that is not currently registered on personal or WhatsApp Business App",
      "Pre-approved message templates adhering to Meta messaging policies",
    ],
    limitationsAndNotes: [
      "All conversational marketing templates require prior approval from Meta",
      "Green Tick verification is granted exclusively at Meta's discretion based on brand notability",
      "Message costs are structured under Meta's conversation-based pricing model",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/marketing-solutions/whatsapp-business-platform/",
    faqs: [
      {
        question: "Can we use our existing company landline or toll-free number for WhatsApp?",
        answer:
          "Yes, virtual numbers and landlines can be registered on the WhatsApp Business API provided they can receive an OTP verification via voice call or SMS during onboarding.",
      },
      {
        question: "Does Vsanco Technologies guarantee the Green Verified Badge?",
        answer:
          "No agency or partner can guarantee the Green Tick. Meta grants verified badges based on their independent notability criteria. We assist you in preparing all prerequisite business manager documentation.",
      },
    ],
  },
  "smart-sms": {
    id: "sol_smart_sms",
    slug: "smart-sms",
    name: "Smart SMS Solutions",
    categorySlug: "business-messaging",
    categoryName: "Business Messaging",
    shortSummary:
      "Enterprise SMS gateway with DLT compliance, high throughput, and real-time delivery tracking.",
    overview:
      "Smart SMS provides a high-reliability enterprise messaging gateway engineered for time-critical transactional notifications, two-factor authentication (OTP), and scheduled promotional marketing campaigns. Full integration with India's Telecom Commercial Communications Customer Preference Regulations (TCCCPR) DLT platform ensures strict regulatory compliance and sender ID protection.",
    targetAudience: [
      "Financial institutions and online portals requiring sub-5-second OTP delivery",
      "Service businesses issuing automated appointment, renewal, and billing reminders",
      "Brands running large-scale seasonal promotional campaigns to opted-in audiences",
    ],
    keyCapabilities: [
      "High-speed direct telecom operator routing ensuring low latency for OTPs",
      "Full compliance with TRAI Distributed Ledger Technology (DLT) regulations",
      "Web-based campaign management portal and developer-friendly HTTP/SMPP APIs",
      "Detailed delivery status reports (DSR) with click-tracking analytics",
    ],
    businessBenefits: [
      "Universal reach across 100% of mobile phones without requiring internet access or app installation",
      "Guarantees critical transactional message delivery via multiple redundant operator routes",
      "Protects enterprise reputation through official 6-character alphabetic sender IDs",
    ],
    useCases: [
      {
        title: "Two-Factor Authentication & OTPs",
        description:
          "Delivers time-sensitive authentication codes with priority queuing within seconds.",
      },
      {
        title: "Account & Transaction Notifications",
        description:
          "Notifies users of debit/credit alerts, order dispatch updates, and service appointments.",
      },
    ],
    prerequisites: [
      "Enterprise registration on an authorized DLT telecom portal (Vilpower, PingConnect, etc.)",
      "Pre-approved Header (Sender ID) and Content Templates registered on the DLT platform",
    ],
    limitationsAndNotes: [
      "Promotional SMS can only be sent between 10:00 AM and 09:00 PM to non-DND numbers",
      "Messages failing DLT template variable character matching will be blocked by operator firewalls",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/marketing-solutions/smart-sms/",
    faqs: [
      {
        question: "What is DLT registration and why is it mandatory?",
        answer:
          "DLT (Distributed Ledger Technology) is a blockchain-based system mandated by TRAI in India to prevent spam. Every business sending commercial SMS must register their business entity, sender headers, and message templates before sending messages.",
      },
      {
        question: "Can Vsanco Technologies assist with our DLT registration?",
        answer:
          "Yes. Our team guides your business through entity registration, document submission, header approval, and template formatting.",
      },
    ],
  },
  "microsoft-365": {
    id: "sol_m365",
    slug: "microsoft-365",
    name: "Microsoft 365 for Business",
    categorySlug: "collaboration-productivity",
    categoryName: "Collaboration & Productivity",
    shortSummary:
      "Comprehensive cloud productivity, email, Microsoft Teams, and enterprise endpoint security suite.",
    overview:
      "Tata Tele Business Services is an authorized Microsoft Cloud Solutions Partner. Vsanco Technologies helps Indian businesses assess, procure, deploy, and support Microsoft 365 plans tailored to their workforce needs. From Exchange Online email and Microsoft Teams to Word, Excel, PowerPoint, OneDrive, and advanced Intune device security, M365 provides a unified productivity ecosystem backed by local INR billing.",
    targetAudience: [
      "Small and mid-sized businesses modernizing corporate email from legacy POP/IMAP systems",
      "Distributed organizations requiring secure remote collaboration and video meetings via Teams",
      "Enterprises needing centralized identity, single sign-on (SSO), and device compliance",
    ],
    keyCapabilities: [
      "50 GB / 100 GB enterprise mailbox per user with custom domain and anti-spam protection",
      "Desktop, web, and mobile versions of Office apps with automatic updates",
      "1 TB secure cloud storage per user on OneDrive for Business with ransomware detection",
      "Microsoft Teams for HD video meetings, team channels, and document co-authoring",
      "Advanced security: multi-factor authentication (MFA), Conditional Access, and BitLocker control",
    ],
    businessBenefits: [
      "Consolidates disparate software tools into one cost-effective subscription",
      "Simplifies IT administration with centralized user onboarding and offboarding",
      "Ensures business data remains protected even if an employee's laptop or phone is lost",
      "Local partner invoicing in Indian Rupees (INR) with GST compliance",
    ],
    useCases: [
      {
        title: "Enterprise Email Migration",
        description:
          "Migrates business email from shared web hosting to secure Microsoft Exchange Online with zero email loss.",
      },
      {
        title: "Secure Remote Workforce Operations",
        description:
          "Equips remote employees with Teams collaboration and automated file backup on OneDrive.",
      },
    ],
    prerequisites: [
      "Active corporate domain name (DNS management access required for domain verification)",
      "Employee count and role-based feature requirement assessment",
    ],
    limitationsAndNotes: [
      "Vsanco Technologies and TTBS provide subscription provisioning and tier-1 partner support; software features are governed by Microsoft terms",
      "Storage limits and app installations depend on the specific license tier chosen (Basic, Standard, Premium)",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/collaboration/microsoft-365/",
    faqs: [
      {
        question: "Can we mix and match different Microsoft 365 plans for different employees?",
        answer:
          "Yes. You can assign Business Basic to frontline workers and Business Standard or Premium to executive and finance staff on the same tenant, optimizing software spending.",
      },
      {
        question: "Will our existing emails be preserved during migration?",
        answer:
          "Yes. Our migration process copies all historical emails, folders, contacts, and calendar entries to Exchange Online with scheduled switchovers to prevent disruption.",
      },
    ],
  },
  "google-workspace": {
    id: "sol_gworkspace",
    slug: "google-workspace",
    name: "Google Workspace for Business",
    categorySlug: "collaboration-productivity",
    categoryName: "Collaboration & Productivity",
    shortSummary:
      "Cloud-native collaboration suite featuring professional Gmail, Google Meet, Drive, and real-time Docs.",
    overview:
      "Google Workspace delivers cloud-native productivity for businesses that value speed, seamless real-time collaboration, and frictionless communication. Through TTBS and Vsanco Technologies, organizations gain access to business-tier Gmail with custom domains, Google Drive shared storage, high-fidelity Google Meet video conferences, and centralized admin console management.",
    targetAudience: [
      "Startups, technology firms, and digital enterprises seeking browser-first collaboration",
      "Organizations with agile, fast-moving teams that co-edit documents and spreadsheets in real time",
      "Enterprises wanting enterprise-grade spam filtering and zero-maintenance email infrastructure",
    ],
    keyCapabilities: [
      "Professional business email on custom domain powered by Google's 99.9% uptime infrastructure",
      "Real-time collaborative editing in Google Docs, Sheets, and Slides with version history",
      "Secure Google Meet video meetings with background noise cancellation and screen sharing",
      "Centralized administrative console with two-step verification enforcement and mobile device management",
    ],
    businessBenefits: [
      "Zero client software installation required; runs securely in any web browser",
      "Industry-leading spam and phishing protection blocks 99.9% of email-borne threats",
      "Seamless integration with Android mobile devices and third-party SaaS platforms",
      "Flexible monthly or annual commitments billed in INR with tax invoices",
    ],
    useCases: [
      {
        title: "Collaborative Project Teams",
        description:
          "Multiple team members collaborate simultaneously on project spreadsheets, proposals, and presentations.",
      },
      {
        title: "Company-Wide Virtual Town Halls",
        description:
          "Host secure, high-quality video meetings for hundreds of attendees across distributed offices.",
      },
    ],
    prerequisites: [
      "Access to corporate domain DNS records (MX, SPF, DKIM verification)",
    ],
    limitationsAndNotes: [
      "Google Workspace requires active internet connectivity for full real-time collaboration, although offline mode is available for Docs/Sheets",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/collaboration/google-workspace/",
    faqs: [
      {
        question: "How difficult is it to migrate our existing emails to Google Workspace?",
        answer:
          "Google Workspace provides built-in migration tools (Data Migration Service) that migrate emails, calendars, and contacts seamlessly from your current provider.",
      },
    ],
  },
  "cloud-backup-dr": {
    id: "sol_cloud_backup",
    slug: "cloud-backup-dr",
    name: "Cloud Backup & Disaster Recovery",
    categorySlug: "cloud-infrastructure",
    categoryName: "Cloud & Infrastructure",
    shortSummary:
      "Automated, encrypted enterprise data backup and rapid disaster recovery to sovereign Indian cloud storage.",
    overview:
      "Protect critical enterprise databases, virtual machines, files, and ERP systems against ransomware, hardware failures, and site outages. TTBS Cloud Backup & Disaster Recovery solutions provide scheduled, deduplicated, and end-to-end encrypted backup pipelines to secure Tier-III Indian data centers, guaranteeing rapid Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO).",
    targetAudience: [
      "Enterprises hosting on-premises servers, accounting databases, or private cloud workloads",
      "Organizations complying with regulatory audit mandates for off-site data retention",
      "Businesses seeking insurance against ransomware encryption and catastrophic hardware loss",
    ],
    keyCapabilities: [
      "Continuous and scheduled automated backups for Windows, Linux, VMware, Hyper-V, and databases (SQL, Oracle)",
      "Military-grade AES-256 encryption in transit and at rest with customer-held encryption keys",
      "Global source-side deduplication and compression reducing bandwidth and storage consumption",
      "Disaster Recovery as a Service (DRaaS) option for rapid spin-up of virtualized servers in the cloud",
    ],
    businessBenefits: [
      "Safeguards company continuity against crippling ransomware extortion attacks",
      "Eliminates manual tape backups, external hard drives, and human error risks",
      "Fulfills ISO 27001, RBI, and industry data residency compliance obligations within India",
    ],
    useCases: [
      {
        title: "Ransomware Defense & Rapid Recovery",
        description:
          "Enables instant rollback to an immutable, uninfected snapshot within minutes of a security event.",
      },
      {
        title: "Financial Record Archival",
        description:
          "Automates retention of audited accounting databases for mandatory 7+ year compliance cycles.",
      },
    ],
    prerequisites: [
      "Adequate outbound internet bandwidth for initial snapshot upload",
      "Inventory of target servers, operating system versions, and storage volumes",
    ],
    limitationsAndNotes: [
      "First-time full backup duration depends on total data size and available upload bandwidth",
      "Specific RPO/RTO metrics are customized based on the recovery tier chosen",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/cloud-and-saas/cloud-backup/",
    faqs: [
      {
        question: "Where is our backup data physically hosted?",
        answer:
          "All data is stored in certified, enterprise-grade Tier-III/IV data centers located within Indian territorial borders, fulfilling all domestic data residency requirements.",
      },
    ],
  },
  "ddos-mitigation": {
    id: "sol_ddos",
    slug: "ddos-mitigation",
    name: "DDoS Mitigation Services",
    categorySlug: "cybersecurity",
    categoryName: "Cybersecurity",
    shortSummary:
      "Multi-gigabit upstream volumetric attack protection preserving web application uptime and customer trust.",
    overview:
      "Distributed Denial of Service (DDoS) attacks can overwhelm enterprise internet pipes and knock web portals offline in minutes. TTBS DDoS Mitigation operates directly at the carrier upstream level, intercepting malicious volumetric traffic at dedicated scrubbing centers before it ever reaches your company's perimeter firewall or internet leased line.",
    targetAudience: [
      "Online banking, payment gateways, and fintech platforms",
      "High-traffic e-commerce and retail portals during promotional events",
      "Public-facing enterprise customer portals and SaaS providers",
    ],
    keyCapabilities: [
      "Multi-Tbps scrubbing capacity absorbing volumetric SYN floods, UDP amplification, and DNS reflection attacks",
      "Layer 3, Layer 4, and Layer 7 behavioral anomaly detection and mitigation",
      "Always-on or on-demand scrubbing rerouting traffic via BGP within seconds",
      "Granular real-time attack traffic analytics and post-incident forensic reports",
    ],
    businessBenefits: [
      "Protects enterprise brand reputation and prevents costly revenue losses from downtime",
      "Safeguards internet leased line bandwidth from being saturated by malicious flood traffic",
      "Requires no heavy on-premises scrubbing appliances or manual rule tuning during an attack",
    ],
    useCases: [
      {
        title: "Mission-Critical Web Application Protection",
        description:
          "Maintains uninterrupted customer transaction processing during active cyber attacks.",
      },
    ],
    prerequisites: [
      "Enterprise owns public IP prefixes (/24 minimum for BGP route advertisement) or uses TTBS leased line IP allocation",
    ],
    limitationsAndNotes: [
      "DDoS mitigation protects against network and application flood attacks; it does not replace web application code vulnerability patching",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/cybersecurity/ddos-mitigation/",
    faqs: [
      {
        question: "Does DDoS mitigation add noticeable latency to legitimate visitors?",
        answer:
          "No. Carrier-grade scrubbing nodes utilize route optimization so legitimate clean traffic experiences sub-millisecond forwarding overhead.",
      },
    ],
  },
  "managed-sd-wan": {
    id: "sol_sdwan",
    slug: "managed-sd-wan",
    name: "Managed SD-WAN",
    categorySlug: "managed-services",
    categoryName: "Managed Services",
    shortSummary:
      "Software-defined WAN with dynamic application routing, zero-touch provisioning, and centralized policy control.",
    overview:
      "Managed SD-WAN (Software-Defined Wide Area Network) separates the network control plane from physical hardware, allowing enterprises to intelligently bond multiple network circuits—such as private MPLS, dedicated Internet Leased Lines, and broadband—into a unified, agile corporate network. Traffic is routed dynamically based on application importance, latency, and packet loss.",
    targetAudience: [
      "Multi-branch retail chains, logistics providers, and hospital networks",
      "Enterprises migrating heavily to cloud applications (AWS, Azure, SaaS)",
      "Organizations looking to reduce high recurring costs of secondary MPLS lines by augmenting with broadband",
    ],
    keyCapabilities: [
      "Dynamic path selection: automatically redirects voice and ERP traffic to the healthiest link in real time",
      "Centralized cloud orchestrator providing single-pane-of-glass network visibility across India",
      "Zero-touch provisioning: branch routers download policies automatically upon plugging into power and internet",
      "Integrated next-generation firewall and content filtering at branch edge devices",
    ],
    businessBenefits: [
      "Reduces branch telecom spend while multiplying available aggregate bandwidth",
      "Accelerates new branch site commissioning from weeks to days",
      "Enhances SaaS application performance by enabling direct internet breakout for trusted traffic",
    ],
    useCases: [
      {
        title: "Retail Chain Branch Rollout",
        description:
          "Connects hundreds of retail stores across tier-2 and tier-3 cities with automated failover between dual links.",
      },
      {
        title: "Hybrid Cloud Connectivity",
        description:
          "Directs cloud-bound SaaS traffic straight to the internet while keeping internal ERP traffic on secure tunnels.",
      },
    ],
    prerequisites: [
      "Underlying primary and secondary internet or private circuits at each site",
      "Branch network architecture review with TTBS solution architects",
    ],
    limitationsAndNotes: [
      "End-to-end SD-WAN performance still relies on the quality and latency of the underlying physical access networks",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/managed-services/sd-wan/",
    faqs: [
      {
        question: "Can SD-WAN work with our existing internet lines from different providers?",
        answer:
          "Yes. SD-WAN is transport-agnostic and can overlay connections from TTBS and third-party broadband or 4G/5G connections seamlessly.",
      },
    ],
  },
  "managed-wi-fi": {
    id: "sol_managed_wifi",
    slug: "managed-wi-fi",
    name: "Managed Enterprise Wi-Fi",
    categorySlug: "managed-services",
    categoryName: "Managed Services",
    shortSummary:
      "Turnkey enterprise campus wireless network with captive guest portals, security policies, and 24x7 monitoring.",
    overview:
      "Managed Wi-Fi from TTBS delivers comprehensive wireless network infrastructure as a service. From professional RF radio survey and access point hardware installation to cloud controller management, bandwidth throttling, and captive guest portals, your enterprise enjoys enterprise Wi-Fi without capital expenditure or internal maintenance overhead.",
    targetAudience: [
      "Corporate campuses, coworking spaces, and modern multi-floor offices",
      "Hospitals, educational universities, and training institutes",
      "Hotels, convention centres, and premium retail venues",
    ],
    keyCapabilities: [
      "Wi-Fi 6 enterprise access points supporting dense concurrent device connections",
      "Cloud-based centralized wireless LAN controller for seamless multi-floor roaming",
      "Customizable branded captive portal with SMS OTP authentication for guests",
      "Role-based bandwidth allocation prioritizing corporate staff over guest internet",
    ],
    businessBenefits: [
      "Delivers high-speed, dead-zone-free coverage across complex architectural layouts",
      "Ensures regulatory compliance with guest phone number authentication and session logging",
      "Managed 24x7 by dedicated NOC teams, resolving interference and AP issues proactively",
    ],
    useCases: [
      {
        title: "Corporate Headquarters Campus Coverage",
        description:
          "Enables executives to move between conference rooms, floors, and cafeteria without call disconnects.",
      },
      {
        title: "Hospitality & Guest Access Management",
        description:
          "Offers branded login screens and fair-use bandwidth limits for visiting clients and guests.",
      },
    ],
    prerequisites: [
      "Physical architectural floor plans for RF signal simulation and cable route planning",
      "Underlying internet leased line connection",
    ],
    limitationsAndNotes: [
      "Hardware remains managed under an operating lease model for the duration of the contract term",
    ],
    officialProviderLink: "https://www.tatatelebusiness.com/managed-services/managed-wifi/",
    faqs: [
      {
        question: "Who maintains the hardware if an access point fails?",
        answer:
          "The service includes full hardware replacement and on-site technician support under defined SLA turnaround times.",
      },
    ],
  },
};
