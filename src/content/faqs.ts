export interface FAQGroup {
  category: string;
  categorySlug: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const FAQ_DATA: FAQGroup[] = [
  {
    category: "Partner Relationship & Engagement",
    categorySlug: "partner",
    items: [
      {
        question: "What is Vsanco Technologies' relationship with Tata Tele Business Services (TTBS)?",
        answer:
          "Vsanco Technologies is an authorised partner of Tata Tele Business Services. Operating from Noida Sector 32, we assist enterprise clients across India in understanding requirements, selecting suitable telecom and cloud solutions, coordinating technical feasibility assessments, and facilitating direct provisioning through TTBS.",
      },
      {
        question: "Who bills our business for the telecom and cloud services?",
        answer:
          "All official telecom services, leased lines, voice products, and cloud subscriptions are contracted and billed directly by Tata Teleservices Limited / Tata Tele Business Services with official GST tax invoices. Vsanco Technologies acts as your authorized advisory and onboarding partner.",
      },
      {
        question: "How does the consultation and quotation process work?",
        answer:
          "You submit your requirements through our online quote request or consultation form. Our solutions specialist contacts you to clarify technical specs (bandwidth, location, agent count). We then initiate a physical feasibility check and prepare an official, itemized commercial proposal directly from TTBS.",
      },
    ],
  },
  {
    category: "Business Connectivity & Leased Lines",
    categorySlug: "connectivity",
    items: [
      {
        question: "What is the typical deployment timeline for a Smart Internet Leased Line?",
        answer:
          "Following successful feasibility verification and commercial order booking, standard delivery timelines range from 2 to 4 weeks depending on the municipal right-of-way (RoW) permissions and internal building fiber access.",
      },
      {
        question: "What uptime SLA does Tata Tele Business Services provide?",
        answer:
          "TTBS Internet Leased Lines offer contractually guaranteed network availability of up to 99.5% to 99.9% depending on the redundancy tier selected, backed by 24x7 NOC monitoring and formal SLA penalty credits.",
      },
      {
        question: "Do you provide static IP addresses with Internet Leased Lines?",
        answer:
          "Yes. Each leased line comes with a dedicated pool of static IPv4 and IPv6 addresses, essential for hosting web servers, firewalls, VPN gateways, and biometric access controllers.",
      },
      {
        question: "Can our business upgrade bandwidth in the future?",
        answer:
          "Yes. In most installations where terminating media converters and switches support higher capacities, bandwidth upgrades can be provisioned logically within 24 to 48 hours without changing physical cabling.",
      },
    ],
  },
  {
    category: "Cloud Communications & Smartflo",
    categorySlug: "communications",
    items: [
      {
        question: "What is Smartflo and how does it replace our traditional EPABX?",
        answer:
          "Smartflo is a 100% cloud-hosted enterprise communication suite. It eliminates physical telephone exchange hardware, copper wiring, and PRI maintenance. Agents and managers make and receive calls through web browsers or mobile apps with built-in IVR, call recording, and CRM integration.",
      },
      {
        question: "Can our existing business phone numbers be ported to Smartflo?",
        answer:
          "Depending on your existing telecom circle and number type (fixed line, DID, or mobile), number porting or virtual number forwarding can be established. Our solutions architect will assess your number pool during onboarding.",
      },
      {
        question: "Which CRMs are supported natively by Smartflo?",
        answer:
          "Smartflo features out-of-the-box integrations with Salesforce, Zoho CRM, LeadSquared, Freshdesk, HubSpot, and Bitrix24, as well as comprehensive REST APIs and Webhooks for custom in-house software.",
      },
      {
        question: "Does Smartflo record customer calls automatically?",
        answer:
          "Yes. Inbound and outbound calls are recorded and securely encrypted in sovereign cloud storage with role-based playback permissions, meeting strict compliance and quality assurance mandates.",
      },
    ],
  },
  {
    category: "Business Messaging & Compliance",
    categorySlug: "messaging",
    items: [
      {
        question: "What is TRAI DLT registration and is it required for SMS?",
        answer:
          "DLT (Distributed Ledger Technology) is a blockchain-based platform mandated by TRAI in India to eliminate unauthorized commercial communications. Every enterprise sending transactional or promotional SMS must register their entity, sender headers, and content templates on an authorized operator portal.",
      },
      {
        question: "Can Vsanco Technologies help our company with DLT approval?",
        answer:
          "Yes. Our team provides step-by-step guidance on entity registration, documentation requirements, KYC verification, header approvals, and message template submissions to ensure smooth approval.",
      },
      {
        question: "How does the official WhatsApp Business Platform differ from the regular app?",
        answer:
          "The WhatsApp Business Platform API is built for multi-user enterprise operations, high-throughput automated broadcasts, programmatic CRM integrations, and interactive chatbots, whereas the free app is limited to individual phones and manual chats.",
      },
    ],
  },
  {
    category: "Support, Billing & Service Availability",
    categorySlug: "support",
    items: [
      {
        question: "How do we report technical faults or network issues once deployed?",
        answer:
          "You receive direct access to Tata Tele Business Services' 24x7 centralized customer support helpline, digital ticket management portal, and dedicated Enterprise Account Manager. Vsanco Technologies also remains available as your local relationship manager to escalate any operational concerns.",
      },
      {
        question: "Can we request a site feasibility check before committing?",
        answer:
          "Yes! We offer 100% free, no-obligation site feasibility surveys. Provide your exact company address, and our field network engineers will verify fiber proximity and technical availability.",
      },
    ],
  },
];
