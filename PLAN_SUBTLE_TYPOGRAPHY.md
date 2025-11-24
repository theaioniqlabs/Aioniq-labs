# PLAN: Subtle Typography System Update

**MODE: PLAN**  
**Status: Awaiting APPROVAL**

---

## PRE-UPDATE SCAN RESULTS

### Typography Issues Found

#### ✅ **components/hero/Hero.tsx**
- **Line 115**: Uses `var(--typography-headline-size-desktop)` → **64px** (needs update to **28px**)
- **Line 116**: Uses `var(--typography-headline-line-height-desktop)` → **72px** (needs update to **32px**)
- **Line 147**: Uses `var(--typography-body-large-size-desktop)` → **18px** (needs update to **15px**)
- **Line 148**: Uses `var(--typography-body-large-line-height-desktop)` → **28px** (needs update to **22px**)
- **Line 99**: Uses `var(--typography-badge-size-desktop)` → **14px** (acceptable, keep as-is)

**Status**: All typography uses tokens (good), but values need adjustment to subtle scale.

#### ✅ **components/navigation/** (SKIP - Do NOT modify)
- MainNav.tsx: Uses tokens correctly
- Navigation.tsx: Uses tokens correctly
- **Action**: No changes needed (per user instructions)

#### ❌ **components/explore-grid/** (NOT FOUND)
- Component does not exist in codebase
- **Action**: Skip (will be created later if needed)

#### ❌ **components/featured-case/** (NOT FOUND)
- Component does not exist in codebase
- **Action**: Skip (will be created later if needed)

#### ✅ **Shared Typography Primitives** (NOT FOUND)
- No Heading.tsx or Text.tsx components found
- **Action**: Skip (will be created later if needed)

---

## PIXEL → TOKEN MAPPING TABLE

Based on screenshot reference `/mnt/data/9309a2b0-3a7c-4372-8cbc-3030a29cc646.png` and user requirements:

| Element | Current Token Value | New Subtle Scale | Line Height | Token Name | Justification |
|---------|-------------------|------------------|-------------|------------|---------------|
| **H1 (Headline)** | 64px / 72px | **28px / 32px** | 1.143 | `h1.subtle` | User requirement: subtle scale |
| **H2** | 48px / 56px | **24px / 28px** | 1.167 | `h2.subtle` | User requirement: subtle scale |
| **H3** | 36px / 42px | **18px / 24px** | 1.333 | `h3.subtle` | User requirement: subtle scale |
| **Body** | 16px / 1.6 | **15px / 22px** | 1.467 | `body.subtle` | User requirement: subtle scale |
| **Body Large** | 18px / 28px | **15px / 22px** | 1.467 | `body.subtle` | Match body subtle scale |
| **Small** | 14px / 1.5 | **13px / 18px** | 1.385 | `small.subtle` | User requirement: subtle scale |
| **Badge** | 14px / 1.4 | **14px / 1.4** | 1.4 | `badge` | Keep as-is (acceptable) |

**Note**: All values are desktop sizes. Responsive scaling will be maintained.

---

## FILES TO MODIFY

### 1. `/design/tokens.ts`
**Purpose**: Add subtle typography scale tokens alongside existing tokens

**Changes**:
- Add `h1.subtle` token: `28px / 32px`
- Add `h2.subtle` token: `24px / 28px`
- Add `h3.subtle` token: `18px / 24px`
- Add `body.subtle` token: `15px / 22px`
- Add `small.subtle` token: `13px / 18px`
- Keep existing tokens for backward compatibility (navbar, etc.)

### 2. `/styles/globals.css`
**Purpose**: Add CSS variables and utility classes for subtle typography scale

**Changes**:
- Add CSS variables for subtle scale tokens
- Add utility classes: `.text-h1-subtle`, `.text-h2-subtle`, `.text-h3-subtle`, `.text-body-subtle`, `.text-small-subtle`
- Add responsive breakpoints (tablet/mobile) for subtle scale
- Ensure system font stack for body (already implemented)
- Ensure Inter heading support (already implemented)

### 3. `/components/hero/Hero.tsx`
**Purpose**: Update Hero component to use subtle typography scale

**Changes**:
- Line 115: Replace `var(--typography-headline-size-desktop)` with `var(--typography-h1-subtle-size-desktop)`
- Line 116: Replace `var(--typography-headline-line-height-desktop)` with `var(--typography-h1-subtle-line-height-desktop)`
- Line 147: Replace `var(--typography-body-large-size-desktop)` with `var(--typography-body-subtle-size-desktop)`
- Line 148: Replace `var(--typography-body-large-line-height-desktop)` with `var(--typography-body-subtle-line-height-desktop)`
- Keep badge typography as-is (14px acceptable)

### 4. `/design/README-TYPOGRAPHY.md` (UPDATE)
**Purpose**: Document subtle typography scale alongside existing system

**Changes**:
- Add section for "Subtle Typography Scale"
- Document when to use subtle vs. standard scale
- Add usage examples for Hero component

### 5. `/tests/hero.test.tsx` (UPDATE)
**Purpose**: Update tests to reflect subtle typography changes

**Changes**:
- Update assertions for headline size (28px instead of 64px)
- Update assertions for body size (15px instead of 18px)
- Verify token usage (not hard-coded values)

---

## FILES TO CREATE

### 1. `/design/README-TYPOGRAPHY-SUBTLE.md` (OPTIONAL)
**Purpose**: Dedicated documentation for subtle typography scale

**Content**:
- When to use subtle scale (Hero, content sections)
- When to use standard scale (navbar, UI elements)
- Usage examples
- Token reference

---

## IMPLEMENTATION DETAILS

### Typography Scale Structure

```typescript
// In tokens.ts
typography: {
  // Existing tokens (keep for navbar, UI)
  headline: { ... }, // 64px (for navbar, large displays)
  h2: { ... },       // 48px (for navbar, large displays)
  h3: { ... },      // 36px (for navbar, large displays)
  body: { ... },    // 16px (for navbar, UI)
  
  // NEW: Subtle scale (for Hero, content)
  h1: {
    subtle: {
      size: { desktop: '28px', tablet: '26px', mobile: '24px' },
      lineHeight: { desktop: '32px', tablet: '30px', mobile: '28px' },
      weight: '700',
    },
  },
  h2: {
    subtle: {
      size: { desktop: '24px', tablet: '22px', mobile: '20px' },
      lineHeight: { desktop: '28px', tablet: '26px', mobile: '24px' },
      weight: '600',
    },
  },
  h3: {
    subtle: {
      size: { desktop: '18px', tablet: '17px', mobile: '16px' },
      lineHeight: { desktop: '24px', tablet: '22px', mobile: '20px' },
      weight: '600',
    },
  },
  body: {
    subtle: {
      size: { desktop: '15px', tablet: '15px', mobile: '14px' },
      lineHeight: { desktop: '22px', tablet: '22px', mobile: '20px' },
      weight: '400',
    },
  },
  small: {
    subtle: {
      size: { desktop: '13px', tablet: '13px', mobile: '12px' },
      lineHeight: { desktop: '18px', tablet: '18px', mobile: '16px' },
      weight: '400',
    },
  },
}
```

### CSS Variables Structure

```css
/* Subtle Typography Scale */
--typography-h1-subtle-size-desktop: 28px;
--typography-h1-subtle-size-tablet: 26px;
--typography-h1-subtle-size-mobile: 24px;
--typography-h1-subtle-line-height-desktop: 32px;
--typography-h1-subtle-line-height-tablet: 30px;
--typography-h1-subtle-line-height-mobile: 28px;
--typography-h1-subtle-weight: 700;

/* Similar for h2.subtle, h3.subtle, body.subtle, small.subtle */
```

### Utility Classes

```css
.text-h1-subtle {
  font-size: var(--typography-h1-subtle-size-desktop);
  line-height: var(--typography-h1-subtle-line-height-desktop);
  font-weight: var(--typography-h1-subtle-weight);
  font-family: var(--typography-font-family-heading);
}

.text-h2-subtle { ... }
.text-h3-subtle { ... }
.text-body-subtle { ... }
.text-small-subtle { ... }
```

---

## TESTING STRATEGY

### Tests to Update

1. **`/tests/hero.test.tsx`**
   - Update headline size assertion: `28px` (was `64px`)
   - Update body size assertion: `15px` (was `18px`)
   - Verify token usage (CSS variables, not hard-coded)

2. **`/tests/typography.test.tsx`** (UPDATE)
   - Add tests for subtle scale utility classes
   - Verify `.text-h1-subtle`, `.text-body-subtle` classes
   - Verify design tokens export subtle scale

### Tests to Skip

- **`/tests/nav.test.tsx`**: Do NOT modify (navbar tests)
- Navigation component tests: Do NOT modify

---

## ASSUMPTIONS & RISKS

### Assumptions

1. **Screenshot Reference**: `/mnt/data/9309a2b0-3a7c-4372-8cbc-3030a29cc646.png` shows Hero section with subtle typography
2. **Backward Compatibility**: Existing tokens (headline, h2, h3, body) remain for navbar/UI components
3. **Responsive Scaling**: Subtle scale will have tablet/mobile variants (proportional reduction)
4. **Font System**: Hybrid system (system body + Inter headings) already implemented
5. **Components**: `explore-grid` and `featured-case` don't exist yet (skip for now)

### Risks

1. **Visual Parity**: Subtle scale (28px H1) may look too small compared to reference
   - **Mitigation**: Verify against screenshot, adjust if needed
2. **Readability**: 15px body text may be below 16px minimum (per BEST_FONT_SYSTEM.md)
   - **Mitigation**: User explicitly requested 15px; document as exception
3. **Token Naming**: Adding `.subtle` suffix may conflict with existing structure
   - **Mitigation**: Use nested structure (`h1.subtle`) for clarity

---

## COMMANDS TO RUN

```bash
# Lint check
pnpm lint

# Run tests (hero only)
pnpm test tests/hero.test.tsx --run

# Run typography tests
pnpm test tests/typography.test.tsx --run

# Build check
pnpm build
```

---

## ESTIMATED TIME

- Token updates: **20 minutes**
- CSS variables & utilities: **30 minutes**
- Hero component update: **15 minutes**
- Documentation: **20 minutes**
- Test updates: **20 minutes**

**Total: ~1.5 hours**

---

## EXCLUSIONS (DO NOT MODIFY)

✅ **DO NOT TOUCH**:
- `/components/navigation/MainNav.tsx`
- `/components/navigation/Navigation.tsx`
- `/components/ui/CardNav/**`
- Any navbar, menu, topbar, brandbar components
- Client portal button
- Language switcher
- Dark mode toggle

---

## READY TO EXECUTE

**Status**: Plan complete, awaiting `APPROVED` from user.

**Summary**:
- ✅ Scanned codebase for typography issues
- ✅ Identified Hero component as only target (explore-grid/featured-case don't exist)
- ✅ Created pixel→token mapping table
- ✅ Defined subtle scale structure (H1: 28/32, H2: 24/28, H3: 18/24, Body: 15/22, Small: 13/18)
- ✅ Preserved existing tokens for navbar/UI components
- ✅ Documented all changes and test updates

**Next Step**: Wait for user to reply `APPROVED` before executing changes.

