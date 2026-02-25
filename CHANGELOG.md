# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 0.1.0 (2026-02-25)

### Features

- **Application shell**: Built Next.js 16 App Router application with sticky header, 5-page navigation, and responsive layout ([96ea917](https://github.com/garthpuckerin/garthpuckerin-veracyte/commit/96ea9174fc63582498fc88bcd92f72b760c6e9a3))
- **Overview page**: Hero section with role tags, 4 metric cards (25K+ users, 13+ years, 10K+ at Entrust, 5 LMS platforms), and "Why Garth x Veracyte" value proposition grid
- **Alignment page**: 9 requirement-to-evidence rows mapping Veracyte JD requirements to resume qualifications, plus categorized tool/skill groups (Learning Systems, Development, Integration & APIs, Enterprise & AI)
- **Experience page**: 9 expandable role cards covering full career history from American Express (2012) through AI-Native Learning Systems Architect (present), with company descriptions, highlights, and technology tags
- **AI Vision page**: Forward-looking Veracyte pitch covering AI-native content architecture, knowledge graph adaptive learning, and change management automation
- **Approach page**: 90-day onboarding plan in 3 phases (Listen & Map, Establish Infrastructure, Build & Deliver) with timeline visualization
- **Component library**: Reusable Tag, MetricCard, AlignRow, RoleCard, and Section components with consistent design system
- **Resume download**: PDF resume served from `/public` with download button in header navigation
- **Contact integration**: Direct mailto link (`garth.puckerin@me.com`) in header
- **Font system**: DM Sans loaded via `next/font/google` with CSS variable (`--font-dm-sans`) for optimized font delivery
- **Vercel deployment config**: `vercel.json` with security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)

### Bug Fixes

- **Header overflow**: Resolved nav button overlap and horizontal scrollbar by constraining header layout with `overflow: hidden`, `minWidth: 0`, and `scrollbarWidth: "none"` on nav element
- **ESLint compliance**: Replaced unescaped apostrophes with `&apos;` entities across AIVisionPage, AlignmentPage, and OverviewPage
- **Font loading**: Migrated from `<link>` tag to `next/font/google` to resolve `@next/next/no-page-custom-font` warning
- **Repo URLs**: Updated `.versionrc` commit and compare URLs to match GitHub remote ([8006219](https://github.com/garthpuckerin/garthpuckerin-veracyte/commit/80062198831981e8dbee06b35a212ea1f6e2ded1))

### Testing

- 9 component tests via Vitest + Testing Library + happy-dom covering Tag, MetricCard, AlignRow, Section, and RoleCard (expand/collapse interaction)

### Tooling

- **Linting**: ESLint with `next/core-web-vitals` and TypeScript configs
- **Formatting**: Prettier with `@trivago/prettier-plugin-sort-imports`
- **Git hooks**: Husky + lint-staged (pre-commit) + commitlint (conventional commits)
- **Versioning**: standard-version with custom `.versionrc` type sections
- **Build**: Next.js 16 with Turbopack, PostCSS with `@tailwindcss/postcss`, TypeScript strict mode
