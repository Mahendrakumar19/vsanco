# API Specification

## `POST /api/leads`
Create a new enquiry.

### Request
```json
{
  "fullName": "Aarav Sharma",
  "companyName": "Example Industries",
  "businessEmail": "aarav@example.com",
  "phone": "+91XXXXXXXXXX",
  "jobTitle": "IT Manager",
  "city": "Noida",
  "state": "Uttar Pradesh",
  "solutionSlug": "business-communications",
  "message": "We need a cloud communication solution for multiple teams.",
  "consentGiven": true,
  "consentTextVersion": "2026-01",
  "sourcePath": "/solutions/business-communications",
  "utmSource": "search",
  "utmMedium": "organic",
  "utmCampaign": ""
}
```

### Validation
- JSON content type only.
- Enforce a request body size limit.
- `fullName`, `companyName`, `solutionSlug`, `consentGiven`, and consent version required.
- Business email and phone requirements depend on the approved lead policy.
- Validate email format and normalize phone numbers using a maintained library where appropriate.
- `solutionSlug` must be in the server-side approved allowlist.
- Trim whitespace, cap field lengths, reject unexpected fields or safely ignore them.
- `consentGiven` must be true where consent is required.
- Never trust client-supplied status, timestamps, CRM IDs, or provider metadata.

### Responses
**201 Created**
```json
{
  "ok": true,
  "leadId": "server-generated-id",
  "message": "Your request has been received."
}
```

**400 Bad Request**
```json
{
  "ok": false,
  "code": "VALIDATION_ERROR",
  "message": "Please review the highlighted fields."
}
```

**429 Too Many Requests**
```json
{
  "ok": false,
  "code": "RATE_LIMITED",
  "message": "Please wait before trying again."
}
```

**500/503 Service failure**
```json
{
  "ok": false,
  "code": "SUBMISSION_FAILED",
  "message": "We could not submit your request. Please try again or use the verified contact details."
}
```

Do not return stack traces, database errors, internal provider responses, or secrets.

## `GET /api/health`
- Return only minimal service status.
- Do not expose environment values, database connection strings, version inventories, or internal hostnames.
- If dependency health is included, report a coarse healthy/degraded status only.

## Future optional endpoints
- `GET /api/solutions` — only if solution content is database/CMS-backed.
- `POST /api/callback-requests` — may reuse `/api/leads` with a validated intent field.
- Admin CRUD endpoints — not in phase one unless authentication, authorization, audit and content workflow are separately designed.

## Operational behavior
- Use idempotency keys or deduplication to mitigate repeated submissions.
- Store first, notify second; retry notification without duplicating the lead.
- Do not send form values to analytics.
- Apply CORS restrictions only if the API is cross-origin; same-origin is preferred.
