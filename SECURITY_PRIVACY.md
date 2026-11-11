# Security, Privacy and Consent Requirements

## 1. Data minimization
Collect only information needed to respond to a business enquiry. Do not collect government IDs, payment data, health data or unrelated sensitive information in lead forms.

## 2. Consent and transparency
- Provide a clear privacy notice next to the form.
- State the purpose of collecting contact details and who may contact the user.
- Obtain consent where required; store the wording version and timestamp.
- Separate enquiry handling from optional promotional marketing consent.
- Do not pre-check optional marketing boxes.
- Review applicable Indian data-protection, telecom, messaging and marketing requirements with qualified counsel before launch.
- Cookie/analytics consent behavior must reflect the actual tools and applicable law.

## 3. Application security
- Enforce server-side validation and output encoding.
- Use HTTPS only in production.
- Apply rate limits and bot protection to public forms.
- Use CSRF protections where applicable to the authentication/session model.
- Add secure headers, including a carefully tested Content Security Policy.
- Keep dependencies patched and run automated dependency audits.
- Never expose private API keys, SMTP credentials, database URLs or CRM tokens in client bundles.
- Restrict CORS; prefer same-origin requests.
- Prevent open redirects and unsafe URL handling.
- Use least-privilege database credentials.
- Keep staging data separate from production leads.
- Avoid collecting or logging raw IP addresses unless there is a justified, documented need.

## 4. Email security
- Configure SPF, DKIM and DMARC for the sending domain.
- Use a verified sender address.
- Do not put untrusted user input in email headers.
- Escape or render user-submitted message content as plain text.
- Monitor delivery failures and prevent mail loops.

## 5. Access and operations
- Restrict CRM and lead database access by role.
- Use MFA on hosting, source control, analytics and CRM.
- Keep secrets in environment/secret management, not source code.
- Maintain audit trails for administrative changes where applicable.
- Back up data securely and test restoration.
- Define an incident response contact and procedure.

## 6. Retention and user requests
- Define retention and deletion schedules with the business owner and legal reviewer.
- Document how access, correction, deletion and grievance requests are handled where applicable.
- Ensure third-party processors and CRM vendors are reviewed for their role in processing.
- Delete test leads and avoid real personal data in development environments.

## 7. Partner and product claims
- Use exact approved channel/partner wording.
- Do not imply official ownership, endorsement beyond the documented relationship, or a direct corporate affiliation.
- Product/service contracts and availability may depend on the provider and location.
- No claims of guaranteed delivery, guaranteed blue tick, universal coverage, perfect security or guaranteed business outcomes.
