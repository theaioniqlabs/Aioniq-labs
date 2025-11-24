# AiONIQ Labs — Master Project Manual (Screenshots-first workflow)

Purpose: single source of truth for design tokens, component rules, architecture, and Cursor behavior.
This variant accepts screenshot/image references and hosted links as authoritative design inputs (Figma optional).

## Key changes (screenshots-first)
- Any component task must include a screenshot or a direct URL for that section.
- Cursor must map visible spacing/sizes from screenshots to tokens (manual mapping step).
- If images are low-res, Cursor requests 2x/hi-res assets.

## Project Overview (unchanged core stack)
- Next.js (app router) + TypeScript
- Tailwind CSS (with design tokens at /design/tokens.ts)
- shadcn/ui for primitives
- Vercel deploys (recommended)

## Per-task intake (required)
Every task must supply:
1. Section name (e.g., Hero, ExploreGrid)
2. Screenshot path or URL (example: /mnt/data/9309a2b0-3a7c-4372-8cbc-3030a29cc646.png)
3. Short content file (headline, subtext, CTAs)
4. Any assets (icons, logos) or an explicit "mock" flag

## Design tokens enforcement
- Tokens remain the single source for spacing, type, radii, colors.
- Cursor maps screenshot pixels to nearest token values and reports mismatches.

## Workflow modes (RESEARCH → PLAN → EXECUTE) enforced (see WORKFLOW.md)

## Accessibility, Testing, and Code Quality
- Same rules as before: semantic HTML, aria labels, tests, eslint/prettier.

## Example reference (screenshot path)
Use this local screenshot as a reference example:
/mnt/data/9309a2b0-3a7c-4372-8cbc-3030a29cc646.png
