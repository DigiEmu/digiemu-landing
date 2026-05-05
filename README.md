# DigiEmu Landing Page

Official landing page for **DigiEmu** — a deterministic knowledge infrastructure for reproducible, verifiable and auditable AI decisions.

---

## Purpose

DigiEmu introduces a verification layer for AI-assisted decisions.

Instead of relying on logs or post-hoc explanations, DigiEmu enables:

- deterministic reconstruction of decision states  
- independent verification of state transitions  
- reproducible execution outcomes  
- auditable AI decision chains  

---

## Core Concepts

### DigiEmu Core
Defines deterministic knowledge boundaries:

- Canonical JSON snapshots  
- Inside-hash vs outside-hash separation  
- SHA-256 state identity  
- Reproducible state definition  

### DigiEmu Proof
Verifies execution integrity:

- Replay verification  
- Receipt continuity  
- Chain validation  
- PASS / FAIL verification output  

---

## Why It Matters

Modern AI systems operate in regulated and high-risk environments.

DigiEmu enables:

- **Verifiable AI decisions**  
- **Audit-ready execution evidence**  
- **Deterministic replay of decisions**  
- **Alignment with EU AI Act requirements**  

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- YAML-driven content system
- Vercel deployment

---

## Project Structure

```txt
app/
  page.tsx
  layout.tsx

content/
  site.yaml

lib/
  site.ts

public/
  logo-light.webp
  og-core.png
  digiemu-core-proof-brief.pdf
Content System
```

# All page content is defined in:

```text
content/site.yaml
```
Loaded via:
```text
lib/site.ts
```
This separates content from UI logic.

## Local Development
```text
npm install
npm run dev
```
Open:
```text
http://localhost:3000
```
---
Build
```text
npm run build
```
# Deployment

Recommended:

Vercel
Domain: https://digiemu.ch
Branding

---
## Built under:

# Baumgartner Digital Infrastructure

# Contact
```text
digiemu99@gmail.com
```