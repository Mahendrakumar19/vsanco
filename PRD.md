# Product Requirements Document (PRD)

## 1. Product summary
**Product:** VMC Media — TTBS Partner Solutions Website  
**Type:** Public-facing B2B marketing and lead-generation website  
**Primary market:** Businesses in India  
**Primary conversion:** Qualified request for consultation / callback / quotation  
**Brand:** VMC Media (assumption to confirm)  
**Scope:** Only products and services that VMC Media is authorized to promote or resell through Tata Tele Business Services (TTBS).

## 2. Problem statement
Business buyers need to understand connectivity and business communication solutions without navigating a complex enterprise product catalogue. The website should translate relevant TTBS offerings into clear use cases, help visitors find a suitable solution, and route enquiries to the appropriate sales contact.

## 3. Goals
1. Establish a credible, premium B2B presence for VMC Media's TTBS partner solutions.
2. Explain approved offerings in business-outcome language, with technical details where useful.
3. Generate qualified enquiries with product-interest context.
4. Make it easy to request a callback or quotation from desktop and mobile.
5. Support search visibility for relevant business telecom and communication topics.
6. Give the business a maintainable content structure for products, industries, FAQs and articles.
7. Measure the visitor journey from landing page to submitted enquiry.

## 4. Non-goals
- Rebuilding the TTBS corporate website.
- Claiming VMC Media is Tata Tele Business Services or a Tata Group company.
- Publishing unverified rates, discounts, uptime promises, coverage, installation timelines or product guarantees.
- Offering unrelated VMC Media services such as general digital marketing, web development, AIWCRM, or custom software development.
- Building a customer portal, billing platform, provisioning workflow or telecom service-management console in phase one.
- Publishing product pages that VMC Media is not authorized to market.
- Copying Brixbyte page layouts, text, images, or brand assets.

## 5. Target audiences
### Primary
- Owners and decision-makers at small and medium businesses.
- IT and infrastructure managers seeking reliable business connectivity.
- Sales, customer-service and contact-centre leaders evaluating cloud communication.
- Operations managers needing multi-location connectivity or managed solutions.
- Marketing/communications teams looking for approved business messaging products.

### Secondary
- Procurement teams comparing solution categories.
- Businesses expanding branches, contact centres, remote work or customer communication.
- Industry-specific buyers in education, healthcare, retail, manufacturing, IT/ITeS and professional services, where supported by the approved catalogue.

## 6. User needs
- Understand what a product does in plain language.
- Determine whether a solution may fit their organization and use case.
- Compare relevant solution categories without unsupported claims.
- Know what information is required for a consultation.
- Submit an enquiry without friction.
- Trust the partner relationship and understand who will contact them.
- Find privacy information and accessible contact details.

## 7. Success metrics
Instrument these events in analytics, subject to consent and applicable privacy requirements:
- `view_solution_category`
- `view_solution_detail`
- `click_request_quote`
- `click_request_callback`
- `lead_form_start`
- `lead_form_validation_error`
- `lead_form_submit_success`
- `lead_form_submit_error`
- `click_phone`
- `click_email`
- `click_whatsapp` (only if an approved business number and workflow exist)

Suggested operational KPIs:
- Enquiry conversion rate by landing page.
- Qualified lead rate by product category.
- Form completion rate and abandonment.
- Organic impressions/clicks for solution pages.
- Lead response time (tracked in CRM, not inferred from frontend).
- Spam rate and duplicate-lead rate.

Do not publish numeric performance claims until there is verifiable evidence and approval.

## 8. Scope and features
### P0 — launch blockers
- Responsive home page.
- About/partner relationship page with approved wording.
- Solution category index.
- Detail page template for each approved product/solution.
- Industry/use-case pages only where they map to approved offerings.
- Contact and request-a-quote page.
- Server-validated lead form.
- Privacy policy and terms/disclaimer pages.
- SEO metadata, sitemap.xml, robots.txt, canonical URLs and Open Graph metadata.
- Analytics integration with consent-aware configuration.
- Accessibility, security and performance QA.
- Production error handling, spam protection and email notification.
- Clear partner and product disclaimers.

### P1 — recommended
- FAQ blocks and searchable FAQ page.
- Solution finder / guided enquiry wizard.
- Resource centre with approved explainers and downloadable brochures.
- CRM integration.
- Admin-managed product and article content.
- Lead-source attribution and UTM capture.
- Thank-you page with next-step instructions.

### P2 — later
- Case studies with written customer permission.
- Multi-language content (Hindi/English) if demand supports it.
- Advanced solution comparison.
- Lead scoring and CRM automation.
- Customer portal only as a separately scoped project.

## 9. Core user journeys
### Journey A: Need-led discovery
Home → Choose business need → Solution category → Solution detail → Request consultation → Confirmation.

### Journey B: Product-led discovery
Search engine → Product detail page → Benefits / fit / FAQs → Enquiry form → Confirmation.

### Journey C: Direct sales enquiry
Header CTA / Contact page → Form → Validation → Server submission → Sales notification / CRM → Confirmation.

### Journey D: Industry discovery
Industry page → Relevant approved solution cards → Product detail → Enquiry.

## 10. Functional requirements
- Header navigation supports keyboard use, mobile menu, visible focus, and clear active states.
- Every solution page has a unique title, description, CTA, and product-interest value.
- Form fields validate on client and server.
- Required fields: full name, business email or phone (business rules to decide whether both are required), company, solution interest, consent.
- Optional fields: job role, city/state, number of locations/users, preferred callback time, message.
- Form shows loading, success, validation error, server error, and retry states.
- Store consent timestamp and consent text/version with the lead.
- Never expose secrets, CRM credentials, SMTP passwords, or API keys to the browser.
- UTM parameters may be stored with a lead, subject to privacy review.
- Avoid collecting sensitive personal data not needed to process the enquiry.
- Contact details and operating hours must be verified by the business owner.

## 11. Non-functional requirements
- Mobile-first responsive design; support 360px width and up.
- Target WCAG 2.2 AA where practical.
- Target Core Web Vitals in the “good” range under representative real-user conditions.
- Use optimized images, font loading, caching, and minimal client-side JavaScript.
- TLS required in production.
- Server-side rate limiting and bot mitigation on forms.
- Structured logs without unnecessary personal data.
- Daily database backup if a database is used; test restore before launch.
- Staging and production environments must be separate.

## 12. Acceptance criteria
- All P0 routes render correctly on mobile, tablet and desktop.
- No unrelated service category is present.
- Every product claim maps to an approved source or written internal approval.
- All CTA destinations work and form submissions reach the configured recipient/CRM.
- Duplicate and malicious submissions are handled safely.
- Form success is shown only after server confirmation.
- Privacy, consent, analytics and cookies are reviewed before production.
- No broken links, major console errors, missing metadata or inaccessible keyboard traps.
- Lighthouse and automated accessibility checks are run; issues are triaged and documented.
- Brand, partner wording, logos and product catalogue are approved before launch.

## 13. Dependencies
- Confirmed brand name, domain and logo files.
- Written proof and exact wording for the TTBS partner relationship.
- Approved TTBS product/service list and permission to market each item.
- Official brand guidelines and asset-use permission.
- Verified business contact details.
- Lead recipient(s), CRM selection and response process.
- Privacy policy owner and legal review.
