# DigiEmu Landing Page

Landing page for **DigiEmu** — an open deterministic verification standard with commercial enterprise infrastructure provided by Baumgartner Digital Infrastructure.

---

## Purpose

DigiEmu introduces a verification layer for AI-assisted decisions. Instead of relying on logs or post-hoc explanations, DigiEmu enables:

- Deterministic reconstruction of decision states
- Independent verification of state transitions
- Reproducible execution outcomes
- Auditable AI decision chains

---

## Positioning

**Open Standard. Commercial Infrastructure.**

- **DigiEmu Core** is positioned as a public standard for deterministic AI decision-state verification — transparent, reviewable and interoperable
- **Baumgartner Digital Infrastructure (BDI)** provides the commercial infrastructure for secure enterprise adoption, conformance testing, audit reporting and regulated-sector integration

---

## Core Concepts

### DigiEmu Core
Defines deterministic knowledge boundaries:

- Canonical JSON snapshots
- Inside-hash vs outside-hash separation
- SHA-256 state identity
- Replay-ready decision states
- EU AI Act traceability framing

### DigiEmu Proof
Verifies execution integrity:

- Replay verification
- Receipt continuity
- Chain validation
- PASS / FAIL verification output
- Tamper detection

---

## Site Structure

```
app/
  page.tsx              # Homepage with hero, features, use cases
  layout.tsx            # Root layout with metadata, footer
  sitemap.ts            # SEO sitemap
  robots.ts             # SEO robots.txt
  globals.css           # Global styles
  not-found.tsx         # 404 page

  # Content pages
  standard/page.tsx     # Public standard positioning
  core/page.tsx         # DigiEmu Core concept
  proof/page.tsx        # PASS/FAIL verification demo
  enterprise/page.tsx   # Commercial infrastructure
  use-cases/page.tsx    # Applied validation use cases
  licensing/page.tsx    # Open vs commercial licensing
  company/page.tsx      # BDI company information

  # Legal pages
  impressum/page.tsx    # Legal imprint
  privacy/page.tsx     # Privacy policy

components/
  Navbar.tsx            # Responsive navigation with mobile menu
  Footer.tsx            # Site footer with links

content/
  site.yaml             # All page content (YAML-driven CMS)

lib/
  site.ts               # Content loading utilities

public/
  logo-light.webp       # Brand logo
  og-core.png           # Open Graph image
  digiemu-core-proof-brief.pdf      # Technical brief
  digiemu-applied-research-onepager.pdf  # Research onepager
```

---

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS** with neumorphic shadow styling
- **Lucide React** icons
- **YAML** content system
- **Vercel** deployment

---

## Local Development

```bash
npm install
npm run dev
```

Open: http://localhost:3000

---

## Build

```bash
npm run build
```

---

## Deployment

Recommended: Vercel
Domain: https://digiemu.ch

---

## Contact

contact@digiemu.ch

---

## Built by

**Baumgartner Digital Infrastructure**