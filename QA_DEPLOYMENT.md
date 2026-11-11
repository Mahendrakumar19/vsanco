# QA, Deployment and Operations

## 1. Before development
- [ ] Confirm brand, domain, logo and brand guidelines.
- [ ] Obtain written partner designation and permitted logo/asset rules.
- [ ] Confirm approved TTBS product list.
- [ ] Confirm contact details, lead recipient and response process.
- [ ] Decide CRM vs database system of record.
- [ ] Approve privacy policy, consent wording and retention period.
- [ ] Approve final page copy and product claims.

## 2. Quality assurance
### Functional
- [ ] Header links and all CTA destinations work.
- [ ] Mobile navigation opens/closes and supports keyboard.
- [ ] Every product page uses approved content and CTA.
- [ ] Form validates client-side and server-side.
- [ ] Valid submissions reach the intended system.
- [ ] Success is not shown on failed submissions.
- [ ] Email/CRM failure is logged and handled without losing the lead.
- [ ] Rate limiting and spam mitigation work.
- [ ] UTM attribution is sanitized and preserved where intended.
- [ ] 404, error and loading states are useful.

### Responsive
Test at minimum:
- [ ] 360×800 mobile
- [ ] 390×844 mobile
- [ ] 768×1024 tablet
- [ ] 1024×768 laptop/tablet landscape
- [ ] 1440×900 desktop
- [ ] 1920×1080 large desktop

### Accessibility
- [ ] Keyboard-only navigation.
- [ ] Visible focus styles.
- [ ] Skip-to-content link.
- [ ] Headings and landmarks are logical.
- [ ] Labels and errors are associated with form controls.
- [ ] Color contrast is checked.
- [ ] Images have correct alt behavior.
- [ ] Reduced-motion preference is respected.
- [ ] Accordions/menus are announced correctly by assistive technology.

### SEO and performance
- [ ] Unique metadata and canonical URL per page.
- [ ] Sitemap and robots are correct.
- [ ] No accidental `noindex` on public pages.
- [ ] Thank-you page is noindex.
- [ ] Structured data validated.
- [ ] Images optimized and sized correctly.
- [ ] No layout shifts caused by images/fonts.
- [ ] Core Web Vitals checked with representative data.
- [ ] No broken internal or external links.

### Security
- [ ] No secrets in repository or browser bundle.
- [ ] HTTPS and redirect behavior verified.
- [ ] Security headers tested.
- [ ] Form payload size and field limits enforced.
- [ ] Rate limits and bot checks verified.
- [ ] Dependency audit completed.
- [ ] Logs do not contain unnecessary personal data.
- [ ] Privacy/consent behavior reviewed.

## 3. CI checks
Suggested pull-request pipeline:
1. Install locked dependencies.
2. Lint.
3. Typecheck.
4. Unit tests.
5. Build.
6. Dependency/secret scan.
7. E2E smoke tests against staging (where configured).

## 4. Deployment options
### Option A: VPS
- Ubuntu LTS, supported Node.js LTS runtime.
- Run Next.js on a private localhost port under PM2 or an equivalent process manager.
- Nginx or existing reverse proxy terminates TLS and forwards requests.
- Firewall exposes only required ports.
- Keep app secrets in protected environment files or secret manager.
- Use a deploy user with least privilege; avoid running the app as root.
- Configure log rotation and process restart behavior.
- Configure TLS renewal and test it.
- Use a documented rollback procedure.

### Option B: Managed hosting
- Deploy via connected repository.
- Configure production environment variables.
- Attach verified domain and TLS.
- Confirm server route/runtime compatibility and data region needs.
- Configure preview and production environments separately.

## 5. Release procedure
1. Merge approved change to release branch.
2. Run CI checks.
3. Deploy to staging.
4. Test forms with controlled test records.
5. Verify analytics/consent and all redirects.
6. Obtain content/brand approval.
7. Back up relevant data/configuration.
8. Deploy production.
9. Smoke-test home, solution pages, contact and form submission.
10. Monitor errors, email delivery, leads and uptime.
11. Roll back if critical conversion/security issue appears.

## 6. Monitoring
- Availability and HTTP error rates.
- Server exceptions and failed lead submissions.
- Email/CRM delivery failures.
- Form spam and duplicate volume.
- Certificate expiry.
- Dependency/security advisories.
- Backups and restore test status.
- Search indexing and analytics anomalies.
