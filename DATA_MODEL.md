# Data Model

## Principle
A database is optional. If a CRM is the authoritative lead system, write directly to the CRM and retain only the minimum operational data needed. If local persistence is required, use the proposed model below and document retention.

## `Lead`
| Field | Type | Required | Notes |
|---|---|---:|---|
| `id` | UUID / cuid | Yes | Server-generated |
| `createdAt` | datetime | Yes | UTC |
| `updatedAt` | datetime | Yes | UTC |
| `fullName` | string | Yes | Length limit; trim |
| `companyName` | string | Yes | Length limit |
| `businessEmail` | string | Conditional | Required if phone is not accepted as contact method |
| `phone` | string | Conditional | Normalize; never assume valid only by regex |
| `jobTitle` | string | No | Optional |
| `city` | string | No | Optional |
| `state` | string | No | Optional |
| `solutionSlug` | string | Yes | Must match an approved solution or `general-enquiry` |
| `message` | string | No | Limit size; plain text |
| `locationsCount` | string/enum | No | Optional qualification |
| `preferredContactTime` | string/enum | No | Optional |
| `consentGiven` | boolean | Yes | Must reflect actual submission |
| `consentTextVersion` | string | Yes | Versioned consent wording |
| `consentAt` | datetime | Yes | UTC |
| `sourcePath` | string | No | Page route, sanitized |
| `utmSource` | string | No | Length limited |
| `utmMedium` | string | No | Length limited |
| `utmCampaign` | string | No | Length limited |
| `utmContent` | string | No | Length limited |
| `utmTerm` | string | No | Length limited |
| `status` | enum | Yes | `new`, `assigned`, `contacted`, `qualified`, `closed`, `spam` |
| `providerReference` | string | No | External CRM reference, if applicable |

## Optional supporting entities
### `Solution`
- `id`, `slug`, `title`, `category`, `summary`, `body`, `approvedForPublication`, `approvalReference`, `providerProductUrl`, `seoTitle`, `seoDescription`, `updatedAt`.
- Only approved products should be publicly queryable.

### `Resource`
- `id`, `slug`, `title`, `excerpt`, `body`, `author`, `publishedAt`, `updatedAt`, `status`, `seoTitle`, `seoDescription`, `references`.

### `AuditEvent` (only if needed)
- Store event type, actor/system, timestamp and object ID.
- Avoid storing raw form content or secrets in logs.

## Retention and access
- Define a documented retention period with the business and legal reviewer.
- Restrict lead access to authorized staff.
- Encrypt transport; rely on encrypted storage/backups where available.
- Provide a process for correction/deletion requests, subject to legal obligations.
- Never use leads for unrelated marketing without an appropriate lawful basis and consent where required.
