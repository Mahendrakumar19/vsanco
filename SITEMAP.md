# Sitemap and Information Architecture

## Primary navigation
1. Home
2. Solutions
   - Business Connectivity
   - Cloud Business Communications
   - Business Messaging
   - Collaboration & Productivity
   - Cloud Infrastructure
   - Cybersecurity
   - Managed Services
3. Solutions by Industry
4. Resources
5. About
6. Contact
7. **Request a Quote** (primary CTA)

Only publish categories and individual products that VMC Media is authorized to market.

## Route plan
| Route | Page | Priority | Indexing |
|---|---|---:|---|
| `/` | Home | P0 | Index |
| `/about` | About VMC Media & partner relationship | P0 | Index |
| `/solutions` | Solutions overview | P0 | Index |
| `/solutions/connectivity` | Business connectivity category | P0 | Index |
| `/solutions/business-communications` | Business communications category | P0 | Index |
| `/solutions/business-messaging` | Business messaging category | P0 | Index |
| `/solutions/collaboration-productivity` | Collaboration & productivity category | P1 | Index |
| `/solutions/cloud-infrastructure` | Cloud infrastructure category | P1 | Index |
| `/solutions/cybersecurity` | Cybersecurity category | P1 | Index |
| `/solutions/managed-services` | Managed services category | P1 | Index |
| `/solutions/[slug]` | Reusable approved solution detail template | P0 | Index if unique/useful |
| `/industries` | Industry overview | P1 | Index |
| `/industries/[slug]` | Industry-specific solution page | P1 | Index if useful |
| `/resources` | Resource centre | P1 | Index |
| `/resources/[slug]` | Article / guide | P1 | Index |
| `/faqs` | FAQs | P1 | Index |
| `/contact` | Contact | P0 | Index |
| `/request-a-quote` | Dedicated enquiry form | P0 | Index |
| `/thank-you` | Successful enquiry confirmation | P0 | Noindex |
| `/privacy-policy` | Privacy policy | P0 | Index |
| `/terms` | Terms of use | P0 | Index |
| `/partner-disclaimer` | Partner/product disclaimer | P0 | Index |

## Footer navigation
- Solutions (approved categories only)
- Industries (published pages only)
- Resources
- About
- Contact
- Privacy Policy
- Terms
- Partner Disclaimer
- Official TTBS website link

## URL rules
- Lowercase, hyphen-separated slugs.
- No dates in evergreen product URLs.
- Use canonical URLs without tracking parameters.
- Redirect retired URLs with relevant 301 redirects.
- Do not create thin pages for every product variant.
- Exclude thank-you, admin, API and staging routes from indexing.
- Generate `sitemap.xml` from published, indexable content.

## Navigation behavior
- Desktop: accessible mega-menu grouped by solution category; avoid more than two levels.
- Mobile: accordion navigation with persistent Request a Quote CTA.
- Header CTA appears on all marketing pages.
- Breadcrumbs appear on category, product and industry detail pages.
