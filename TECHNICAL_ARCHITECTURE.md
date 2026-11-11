# Technical Architecture

## 1. Recommended stack
- Framework: Next.js (App Router), React, TypeScript.
- Styling: Tailwind CSS with semantic design tokens.
- UI primitives: accessible, maintained component primitives; Lucide icons.
- Forms: React Hook Form + Zod, with equivalent server-side validation.
- Content: MDX or typed local content for phase one; add a CMS only if non-developers need frequent editing.
- Backend: Next.js Route Handlers for lead submission; separate Node/Express service only if there is a real integration/operational reason.
- Database: optional MySQL + Prisma for leads/content if persistence, reporting or CRM sync is required. If a CRM is the system of record, avoid duplicate data storage unless needed.
- Email: configured SMTP or transactional email provider, credentials stored server-side.
- Analytics: GA4 or equivalent with consent-aware setup.
- Hosting: Linux VPS with Nginx/reverse proxy and PM2, or a managed Next.js-compatible platform. Choose one deployment path and document it.
- CI: GitHub Actions for lint, typecheck, tests and build.

## 2. High-level architecture
```text
Visitor browser
  ├─ Static/Server-rendered pages (Next.js)
  ├─ Consent-aware analytics
  └─ Lead form
       ↓ HTTPS POST
Next.js Route Handler
  ├─ Schema validation
  ├─ Rate limit / bot checks
  ├─ Consent + attribution normalization
  ├─ Optional database persistence
  ├─ CRM integration (server-to-server)
  └─ Email notification
       ↓
Sales inbox / CRM / lead dashboard
```

## 3. Rendering strategy
- Server-render public content pages by default for SEO and low client JS.
- Use static generation for evergreen category/product pages where content updates are infrequent.
- Use ISR/revalidation only if supported by the chosen content source and needed.
- Keep client components limited to navigation, forms, accordions and interactive tools.
- Use `next/image` and optimized fonts.

## 4. Suggested repository structure
```text
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      solutions/page.tsx
      solutions/[slug]/page.tsx
      industries/page.tsx
      industries/[slug]/page.tsx
      resources/page.tsx
      resources/[slug]/page.tsx
      faqs/page.tsx
      contact/page.tsx
      request-a-quote/page.tsx
      thank-you/page.tsx
      privacy-policy/page.tsx
      terms/page.tsx
      partner-disclaimer/page.tsx
    api/
      leads/route.ts
      health/route.ts
    sitemap.ts
    robots.ts
    layout.tsx
    not-found.tsx
    error.tsx
  components/
    layout/
    navigation/
    sections/
    solutions/
    forms/
    content/
    ui/
  content/
    solutions/
    industries/
    resources/
    faqs/
  lib/
    validation/
    email/
    crm/
    analytics/
    rate-limit/
    db/
    security/
  server/
    services/
  styles/
prisma/
  schema.prisma
tests/
  unit/
  integration/
  e2e/
public/
  images/
  icons/
```

## 5. Lead submission flow
1. Browser validates for usability.
2. Server route validates the payload independently.
3. Normalize phone number, trim fields, reject oversized inputs.
4. Verify consent is present when required.
5. Apply IP/session rate limiting and bot mitigation.
6. Add an idempotency/deduplication strategy.
7. Persist lead to CRM or database according to the agreed system of record.
8. Send sales notification; use retry-safe handling so email failure does not silently discard a stored lead.
9. Return success only after the chosen durable acceptance step succeeds.
10. Log event IDs and status without logging unnecessary personal data.

## 6. Environment variables
Use `.env.example` with names only; never commit real values.
```dotenv
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ANALYTICS_ID=
DATABASE_URL=
LEAD_NOTIFICATION_TO=
LEAD_NOTIFICATION_FROM=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
CRM_BASE_URL=
CRM_API_TOKEN=
RATE_LIMIT_STORE_URL=
BOT_PROTECTION_SECRET=
```
Only expose variables with `NEXT_PUBLIC_` when safe for the browser. Do not put credentials or private tokens there.

## 7. Integrations
- CRM: decide product and system of record before implementation.
- Email: use authenticated SMTP/transactional email, SPF/DKIM/DMARC configured for the sending domain.
- WhatsApp/call CTA: only use verified business number and approved process.
- TTBS/provider integrations: do not assume API access. Website phase one can route enquiries to sales; provider integrations require separate authorization and documentation.
- Analytics: minimize data sent; do not transmit form field values or personal data into analytics.

## 8. Operational requirements
- Separate local, staging and production configuration.
- Health endpoint must return minimal operational status without secrets.
- Error tracking should redact personal data.
- Add build, deploy, rollback and restore documentation.
- Pin supported runtime and package versions.
- Run dependency and secret scanning in CI.
