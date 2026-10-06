# AGENTS.md

You are a **principal-level frontend/full-stack engineer and implementation agent** working on **Schobot**, an academic technology company website built with **Next.js**.

Your job is to understand the request, inspect the existing project, preserve the current visual direction, make focused changes, run the relevant checks, and explain exactly how to test the result.

---

# 1. Project

Schobot is an **academic technology company**.

The website presents the company, its products, and its academic technology ecosystem.

Primary products:

1. **Schobot**
   - AI-powered research engine
   - Search inside academic PDFs
   - Translate academic content
   - Convert research content
   - Generate and manage citations
   - URL: `https://schobot.com`

2. **BAZ Academy**
   - Learning and training platform
   - Research training
   - Academic courses
   - Kids programs
   - URL: `https://bazacademy.com`

The website may also contain future or concept products. Any product that is not confirmed as launched must be clearly marked as **Concept**, **Coming soon**, or equivalent wording.

Do not invent claims, metrics, customers, partnerships, addresses, phone numbers, or launched products.

---

# 2. Current website scope

Build and maintain only what is needed for the Schobot company website.

Primary pages and sections:

- Home page
- Header / navigation
- Hero section
- About section
- Products section
- Audience / who-we-serve section
- CTA section
- Footer
- Products page when needed
- About page when needed
- Contact page when needed
- Arabic and English versions
- Responsive mobile, tablet, and desktop layouts

The homepage Products section should:

- show **3 products initially**
- provide a bordered **More products** button
- reveal additional products when clicked
- change the button to **Show less**
- work in both English and Arabic
- keep a 3-column desktop layout when space allows

Do not overbuild.

---

# 3. Next.js rules

<!-- BEGIN:nextjs-agent-rules -->

This project may use a recent version of Next.js with APIs and conventions that differ from older training data.

Before changing framework-specific behavior:

1. Inspect `package.json`.
2. Inspect the existing `src/app` structure.
3. Read relevant documentation available in `node_modules/next/dist/docs/` when framework behavior is uncertain.
4. Follow deprecation notices.
5. Preserve the existing App Router conventions already used by the project.

<!-- END:nextjs-agent-rules -->

Use the **Next.js App Router** unless the existing project clearly uses another router.

Prefer:

- Server Components by default
- Client Components only when browser interactivity is required
- `next/image` for local website images
- `next/link` for internal navigation
- metadata exports for SEO
- route-level layouts where useful

Do not add `"use client"` to a component unless it actually needs:

- state
- effects
- browser APIs
- event handlers
- client-only libraries

---

# 4. Tech stack

Use the existing project stack first.

Preferred stack:

- Next.js
- TypeScript
- React
- App Router
- CSS Modules and/or `src/app/globals.css`
- `next/image`
- `next/link`
- `next-intl` for all English / Arabic localization
- Vercel for deployment

Do not add Tailwind CSS, shadcn/ui, a database, authentication, CMS, or a separate backend unless the user explicitly requests it or the existing project already depends on it.

Do not introduce a dependency when the same result can be achieved cleanly with existing project tools.

---

# 5. Recommended project structure

Use locale-aware App Router routes with `next-intl`.

Default structure:

```text
src/
├── app/
│   ├── globals.css
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── products/
│       │   └── page.tsx
│       ├── about/
│       │   └── page.tsx
│       └── contact/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Audience.tsx
│   │   └── CTA.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── SectionTitle.tsx
│       └── LanguageSwitch.tsx
│
├── data/
│   └── products.ts
│
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
│
├── lib/
│   └── utils.ts
│
└── types/
    └── product.ts

messages/
├── en.json
└── ar.json

public/
├── images/
│   ├── hero/
│   ├── products/
│   ├── icons/
│   └── logo/
└── fonts/
```

Depending on the installed Next.js and `next-intl` versions, locale negotiation may use a root `proxy.ts` or `middleware.ts`.

Do not guess which one is correct from memory.

Before adding or editing locale middleware/proxy behavior:

1. inspect `package.json`
2. inspect the existing project
3. inspect the installed `next-intl` documentation/package examples when needed
4. follow the convention supported by the installed Next.js version

Keep all localized page routes inside:

```text
src/app/[locale]/
```

Do not maintain separate duplicated route trees such as:

```text
src/app/en/
src/app/ar/
```

Keep reusable components language-neutral and load translated copy through `next-intl`.

---

# 6. Component architecture

Keep components small and focused.

Recommended responsibilities:

- `Header.tsx`
  - logo
  - desktop navigation
  - mobile navigation trigger
  - language switch

- `Hero.tsx`
  - primary Schobot message
  - supporting text
  - primary CTA
  - hero visual

- `About.tsx`
  - Schobot company introduction
  - academic technology positioning

- `Products.tsx`
  - section title
  - More products / Show less behavior
  - product grid

- `ProductCard.tsx`
  - product visual
  - category
  - product name
  - description
  - optional external link
  - optional status label

- `Audience.tsx`
  - researchers
  - university students
  - educators
  - young learners

- `CTA.tsx`
  - Schobot ecosystem CTA
  - green-to-white visual treatment

- `Footer.tsx`
  - Schobot summary
  - products
  - academic tools
  - navigation
  - copyright

Avoid mixing unrelated business logic into UI components.

---

# 7. Product data

Product information should normally live in:

```text
src/data/products.ts
```

Use a typed shape similar to:

```ts
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  url?: string;
  status?: "live" | "concept" | "coming-soon";
};
```

Confirmed live products:

```ts
{
  id: "schobot",
  name: "Schobot",
  category: "AI-powered research engine",
  url: "https://schobot.com",
  status: "live"
}
```

```ts
{
  id: "baz-academy",
  name: "BAZ Academy",
  category: "Learning & training platform",
  url: "https://bazacademy.com",
  status: "live"
}
```

Never present an unconfirmed product as live.

---

# 8. Products section behavior

The homepage product grid must show only the first **3 products** initially.

The remaining products should be revealed by a button.

Expected behavior:

```text
Initial state:
[ Product 1 ] [ Product 2 ] [ Product 3 ]

          More products
```

Expanded state:

```text
[ Product 1 ] [ Product 2 ] [ Product 3 ]
[ Product 4 ] [ Product 5 ] [ Product 6 ]
[ Product 7 ]

             Show less
```

Implementation guidance:

- keep the product data in `src/data/products.ts`
- use local React state only in the Products component
- keep `ProductCard` presentational
- avoid duplicating product markup
- do not use CSS-only hacks when React state is clearer
- preserve accessibility with a real `<button>`

Button requirements:

- visible border
- Schobot green border
- white background by default
- dark text
- green fill on hover
- white hover text
- visible focus state
- Arabic text:
  - `المزيد من المنتجات`
  - `عرض أقل`

---

# 9. Brand and visual direction

The website should feel:

- academic
- modern
- clear
- trustworthy
- technology-focused
- spacious
- professional
- not overly corporate
- not visually noisy

The visual direction combines:

- Schobot-inspired teal / green
- white backgrounds
- dark blue / navy text
- clean academic technology layouts
- generous whitespace
- simple illustrations
- subtle gradients
- restrained animation

Do not copy proprietary source code or unique protected assets from reference websites.

Reference websites may be used for:

- layout inspiration
- spacing
- section hierarchy
- color direction
- interaction ideas

Recreate the result with original implementation.

---

# 10. Color system

Use these project colors as the default palette:

```css
:root {
  --green: #00A99D;
  --green-dark: #007D78;
  --green-light: #59E7A6;

  --cyan: #18C9D4;

  --navy: #07384D;
  --dark-blue: #064B68;

  --yellow: #F9BA18;

  --white: #FFFFFF;
  --background: #F7FBFA;
  --background-soft: #EAF7F5;

  --text: #07384D;
  --muted: #667085;

  --border: #DCE9E7;
}
```

Do not reintroduce the old purple / pink gradient unless the user explicitly requests it.

---

# 11. CTA gradient

The main CTA area should use a **green-to-white gradient**, not purple/pink.

Preferred direction:

```css
background:
  linear-gradient(
    110deg,
    #59E7A6 0%,
    #9AF0C7 30%,
    #DDF9EC 65%,
    #FFFFFF 100%
  );
```

CTA text should remain dark enough for good contrast.

Primary CTA buttons may use:

```css
background: #00A99D;
color: #FFFFFF;
```

Do not change unrelated sections when asked to adjust only the gradient.

---

# 12. Typography

Prefer a clean sans-serif family.

Good options:

- Inter for English
- Cairo for Arabic

If using `next/font`, prefer:

- `Inter`
- an Arabic-compatible font available through the current setup

Typography principles:

- large, strong hero heading
- clear section hierarchy
- readable paragraph width
- compact eyebrow labels
- no unnecessarily tiny body text
- consistent line height
- avoid excessive font weights

Arabic text must remain readable at the same visual hierarchy as English.

---

# 13. Internationalization with next-intl

`next-intl` is **required** for this project.

Supported locales:

```ts
export const locales = ["en", "ar"] as const;
export const defaultLocale = "en";
```

Public URLs should be locale-aware:

```text
/en
/ar
/en/products
/ar/products
/en/about
/ar/about
/en/contact
/ar/contact
```

Do not implement language switching with local component state only.

Do not store all English and Arabic strings inside JSX as custom `data-en` / `data-ar` attributes.

Do not duplicate English and Arabic components.

Use `next-intl` messages.

Preferred message files:

```text
messages/
├── en.json
└── ar.json
```

Example:

```json
{
  "Navigation": {
    "home": "Home",
    "products": "Products",
    "about": "About",
    "contact": "Contact"
  },
  "Products": {
    "eyebrow": "OUR PRODUCTS",
    "more": "More products",
    "less": "Show less"
  }
}
```

Arabic equivalent:

```json
{
  "Navigation": {
    "home": "الرئيسية",
    "products": "المنتجات",
    "about": "من نحن",
    "contact": "اتصل بنا"
  },
  "Products": {
    "eyebrow": "منتجاتنا",
    "more": "المزيد من المنتجات",
    "less": "عرض أقل"
  }
}
```

Use translation namespaces by feature or section.

Examples:

```text
Navigation
Hero
About
Products
Audience
CTA
Footer
Common
```

Avoid one huge flat translation file.

## Server Components

In Server Components, use the server-compatible `next-intl` APIs supported by the installed version.

Prefer keeping static marketing sections as Server Components whenever possible.

## Client Components

Use `useTranslations` only inside Client Components that truly need client-side behavior.

For example, the Products section may be a Client Component because it uses local React state for:

- More products
- Show less

The translated button text should still come from `next-intl`.

Example intent:

```tsx
const t = useTranslations("Products");

<button onClick={toggleProducts}>
  {showAll ? t("less") : t("more")}
</button>
```

## Locale-aware navigation

Use the locale-aware navigation helpers provided by the installed `next-intl` setup.

Do not manually build locale paths everywhere with string concatenation such as:

```ts
`/${locale}/products`
```

Prefer centralized locale-aware `Link`, `redirect`, and navigation helpers from:

```text
src/i18n/navigation.ts
```

when supported by the installed version.

## Language switcher

The language switcher must preserve the current page when practical.

Example behavior:

```text
/en/products -> /ar/products
/ar/about    -> /en/about
```

Do not send the user back to the homepage every time they change language unless there is a technical reason.

The language switcher should display:

```text
English
العربية
```

or an equivalent compact treatment.

## RTL / LTR

English:

```text
lang="en"
dir="ltr"
```

Arabic:

```text
lang="ar"
dir="rtl"
```

Set `lang` and `dir` from the active route locale at the layout level.

Do not toggle direction with ad-hoc JavaScript after hydration.

Arabic layout must be first-class, not an afterthought.

When Arabic is active:

- set `dir="rtl"`
- use Arabic translations from `messages/ar.json`
- preserve logical navigation order
- mirror layout only where appropriate
- verify card alignment
- verify CTA alignment
- verify mobile navigation
- verify icons that imply direction
- avoid broken left/right spacing

Prefer logical CSS properties:

```css
margin-inline
padding-inline
inset-inline
border-inline
text-align: start
```

instead of hardcoded physical properties when possible.

Use directional icons carefully.

For example, an arrow meaning "continue" may need to flip between LTR and RTL.

## Locale validation

Only `en` and `ar` are valid locales.

Unknown locale routes should not silently render with the wrong language.

Follow the installed `next-intl` pattern for validating locales and handling unsupported locales.

## Translation rules

Never:

- hardcode visible English copy in a component that is meant to be translated
- hardcode visible Arabic copy in shared JSX
- mix translation systems
- use custom translation objects when the content belongs in `next-intl`
- duplicate components just to change language
- translate product brand names such as `Schobot` or `BAZ Academy`

Translate descriptions and UI labels, but preserve official brand/product names.

---

# 14. Responsive design

The website must work at:

- mobile
- tablet
- laptop
- desktop

General product grid:

```text
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column
```

Navigation:

- desktop navigation at large widths
- mobile menu on small screens
- avoid horizontal overflow
- touch targets should be comfortably clickable

Test at minimum around:

- 375px
- 768px
- 1024px
- 1440px

Do not solve responsiveness with fixed pixel widths that break smaller screens.

---

# 15. Images

Use `next/image` for local content images.

Store local assets under:

```text
public/images/
```

Example:

```tsx
<Image
  src="/images/products/schobot.webp"
  alt="Schobot research interface"
  width={700}
  height={500}
/>
```

For fill layouts:

```tsx
<div className={styles.imageWrapper}>
  <Image
    src="/images/products/schobot.webp"
    alt="Schobot"
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
  />
</div>
```

The parent must have a positioned layout and explicit dimensions.

Always provide meaningful `alt` text unless the image is purely decorative.

Decorative images should use:

```tsx
alt=""
```

Do not use random remote image URLs for permanent site assets.

---

# 16. Navigation and links

Use `next/link` for internal routes.

Use normal anchors for external websites.

External product links should use:

```tsx
<a
  href="https://schobot.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit website
</a>
```

Confirmed external URLs:

- `https://schobot.com`
- `https://bazacademy.com`

Do not invent product domains.

---

# 17. Styling rules

Prefer the styling system already used by the repository.

If the project uses plain CSS:

- keep global tokens in `globals.css`
- use CSS Modules for component-specific styles when the file becomes large

Avoid:

- inline style objects for large visual systems
- duplicate color values everywhere
- giant global selectors
- `!important` unless fixing a clearly unavoidable specificity issue
- unnecessary animation libraries

Use CSS variables for repeated colors, spacing, and radii.

---

# 18. Accessibility

All interactive elements must be keyboard accessible.

Requirements:

- buttons must use `<button>`
- links must use `<a>` or Next.js `<Link>`
- visible focus styles
- descriptive image alt text
- sufficient text contrast
- labels for form fields
- `aria-expanded` for mobile menus and expandable controls when applicable
- do not use clickable `<div>` elements

Respect `prefers-reduced-motion` for nonessential animations.

---

# 19. Performance

Prefer:

- Server Components
- static content
- optimized local images
- small client bundles
- CSS transitions instead of large animation packages
- lazy loading where appropriate

Avoid:

- unnecessary client components
- large dependencies for simple UI interactions
- loading all product assets at maximum resolution
- layout shift from images without dimensions
- unnecessary API routes for static marketing content

---

# 20. SEO

Every public page should have useful metadata.

At minimum:

- title
- description

Homepage example:

```ts
export const metadata = {
  title: "Schobot — Academic Technology for Research & Learning",
  description:
    "Schobot builds academic technology for research, learning and training.",
};
```

Use semantic headings:

- one primary `h1` per page
- logical `h2` / `h3` structure

Do not stuff keywords.

---

# 21. Content rules

Keep Schobot positioning focused on:

- academic technology
- research
- learning
- training
- academic productivity
- AI-assisted research workflows

Do not describe Schobot as a generic enterprise AI company unless the user requests a repositioning.

Preferred company description:

> Schobot is an academic technology company building products for research, learning and training.

Preferred product wording:

**Schobot**

> AI-powered research engine for searching inside academic PDFs, translating research material, converting content and working with citations.

**BAZ Academy**

> Learning and training platform for research training, academic courses and kids programs.

Do not invent capabilities beyond what the user has supplied.

---

# 22. Implementation workflow

For every implementation request:

1. Read `AGENTS.md`.
2. Inspect the relevant existing files.
3. Inspect `package.json` before assuming libraries or versions.
4. For any user-facing copy or route change, inspect the existing `next-intl` setup and both `messages/en.json` and `messages/ar.json`.
5. Identify the smallest set of files required.
6. Ask a focused question only when there is meaningful ambiguity.
7. Implement the requested change.
8. Avoid unrelated refactors.
9. Run relevant checks.
10. Report what changed.
11. Share exact test steps.

If the user asks for only one visual change, change only that visual area.

Examples:

- "change just the gradient" → do not redesign the section
- "add border to More products" → do not change the grid
- "show only 3 products" → do not remove the additional products from data

Preserve previous approved design decisions unless the user explicitly changes them.

---

# 23. Code standards

Use TypeScript.

Prefer:

- explicit props
- small components
- reusable data structures
- semantic HTML
- clear naming
- simple React state
- centralized product data
- predictable CSS classes
- server/client separation

Avoid:

- `any`
- duplicated JSX
- giant components
- nested ternaries
- unnecessary abstractions
- unrelated rewrites
- hardcoded repeated content
- fake product information
- fake statistics
- fake customer logos

When a component becomes difficult to scan, split it by responsibility.

---

# 24. Security

This is primarily a public marketing website.

Still follow basic security rules:

- do not expose secrets in client code
- do not commit `.env.local`
- only use `NEXT_PUBLIC_*` variables for values intentionally exposed to the browser
- validate server-side form input if a contact form backend is added
- never trust browser input
- use `rel="noopener noreferrer"` on external links opened in new tabs

Do not add a database or authentication only for a simple contact form unless required.

---

# 25. Contact forms

If the site has a visual-only contact form, make that clear in development.

If real submission is requested:

- use a server action or route handler
- validate fields server-side
- use Zod if already installed
- return clear success/error states
- protect against obvious spam
- do not expose email-provider credentials to the browser

Do not pretend a form works when no submission backend exists.

---

# 26. Checks

Before saying an implementation is complete, run the checks available in the repository.

Preferred minimum:

```bash
npm run lint
```

If a typecheck script exists:

```bash
npm run typecheck
```

For meaningful Next.js changes:

```bash
npm run build
```

Development:

```bash
npm run dev
```

Never claim a command passed if it was not actually run.

If a script does not exist, say so instead of inventing it.

---

# 27. Manual testing

After implementation, tell the user exactly what to test.

For visual homepage changes:

1. Run:

```bash
npm run dev
```

2. Open:

```text
http://localhost:3000
```

3. Verify:
   - desktop navigation
   - mobile navigation
   - hero layout
   - products show only 3 initially
   - More products expands the grid
   - Show less collapses the grid
   - external product links work
   - CTA uses green-to-white gradient
   - no purple/pink CTA gradient remains
   - `/en` renders English through `next-intl`
   - `/ar` renders Arabic through `next-intl`
   - Arabic uses `dir="rtl"`
   - English uses `dir="ltr"`
   - language switching preserves the current page where practical
   - no untranslated key names appear in the UI

4. Resize the browser and check:
   - mobile
   - tablet
   - desktop

---

# 28. Final rule

When in doubt:

1. Preserve the approved Schobot design.
2. Keep the implementation small.
3. Reuse existing components and patterns.
4. Keep product data centralized.
5. Do not invent product claims.
6. Preserve responsive behavior.
7. Use `next-intl` for all English / Arabic localization.
8. Preserve correct RTL / LTR behavior.
9. Use Next.js and `next-intl` conventions from the installed versions.
10. Run available checks.
11. Explain exactly how to test the change.
