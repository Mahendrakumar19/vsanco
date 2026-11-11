# Design System

## 1. Brand principles
- Credible, modern, business-first.
- Clear over clever.
- Use restrained motion and a strong typographic hierarchy.
- VMC Media is the website brand; TTBS is the provider/partner ecosystem. Do not merge identities.
- Do not use Tata red/blue, logo, fonts, or other brand assets in a way that suggests an official TTBS corporate site. Follow approved brand guidelines if available.

## 2. Initial visual tokens
These are proposed starting tokens, subject to VMC brand approval.

### Colors
- `--color-ink: #101828` — primary text
- `--color-navy: #10243A` — deep hero/footer background
- `--color-blue: #1769AA` — primary action
- `--color-blue-hover: #12558A`
- `--color-cyan: #38BDF8` — limited highlight
- `--color-surface: #FFFFFF`
- `--color-surface-muted: #F5F8FC`
- `--color-border: #DCE4EE`
- `--color-text-muted: #526174`
- `--color-success: #16794B`
- `--color-error: #B42318`
- `--color-warning: #9A6700`

Use semantic tokens rather than hardcoding color values in components. Check contrast for every text/background combination.

### Typography
- Primary: Inter or another licensed, performant sans-serif approved by brand.
- Display: same family with strong weights; avoid decorative display fonts.
- Body: 16–18px desktop, comfortable line-height 1.55–1.7.
- H1: responsive clamp, approximately 40–64px desktop and 34–42px mobile.
- H2: 30–44px desktop.
- H3: 22–28px.
- Eyebrow: 12–14px, medium/semi-bold, uppercase sparingly.
- Use `next/font` or self-hosted font files where licensing permits.

### Spacing
Use a 4px base scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120.
- Content max width: 1200–1280px.
- Standard section vertical padding: 80–104px desktop; 48–64px mobile.
- Card padding: 24–32px desktop; 20–24px mobile.

### Shape and depth
- Buttons: 10–12px radius.
- Cards: 14–18px radius.
- Inputs: 10–12px radius, visible focus ring.
- Borders first; subtle shadows only for floating menus and elevated elements.
- Avoid excessive glassmorphism, glowing outlines, and gradients on every section.

## 3. Components
- `SiteHeader`
- `DesktopMegaMenu`
- `MobileNavigation`
- `PrimaryButton`, `SecondaryButton`, `TextLink`
- `HeroSection`
- `PartnerTrustStrip`
- `SolutionCard`
- `SolutionCategoryGrid`
- `FeatureList`
- `UseCaseCard`
- `IndustryCard`
- `ProcessSteps`
- `FAQAccordion`
- `Breadcrumbs`
- `LeadForm`
- `FormField`
- `ConsentCheckbox`
- `RelatedSolutions`
- `ResourceCard`
- `SiteFooter`
- `CookieConsent` only if needed based on analytics/cookie setup
- `Toast` / `InlineStatus`
- `SkipToContent`

## 4. Interaction rules
- Minimum target size: aim for 44×44 CSS pixels for touch controls.
- Every interactive element has hover, focus-visible, disabled, and error states as relevant.
- No hover-only critical functionality.
- Mobile menu closes after navigation and supports Escape.
- Mega-menu supports keyboard navigation and sensible focus handling.
- Form errors are linked to fields and announced accessibly.
- Respect `prefers-reduced-motion`.
- External links are indicated where appropriate and use safe link attributes.

## 5. Responsive breakpoints
Suggested Tailwind-style breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Rules:
- 1-column mobile layouts; avoid narrow two-column forms.
- Hero visual moves below/alongside text on mobile without hiding CTA.
- Cards: 1 column mobile, 2 tablet, 3–4 desktop depending on content.
- Mega-menu becomes an accessible accordion.
- Tables must scroll or transform into stacked data on small screens.
- Avoid fixed-width text and overflow from long product names.

## 6. Imagery
- Prefer licensed photography, original illustrations, approved partner assets, and diagrams.
- Use a consistent illustration style.
- Avoid fake dashboards that imply product capabilities.
- Provide alt text for meaningful images; decorative images use empty alt.
- Use AVIF/WebP and responsive image sizing.
- Never download/copy Brixbyte or TTBS images without rights.
