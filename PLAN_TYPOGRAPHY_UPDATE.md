# TYPOGRAPHY SYSTEM UPDATE - PLAN

**Authoritative Reference**: `./docs/BEST_FONT_SYSTEM.md`  
**Recommended Approach**: Option B - Hybrid (System Body + Inter Headings)

---

## PRE-UPDATE SCAN RESULTS

### Files with Raw Pixel Typography Classes
1. **components/navigation/MainNav.tsx**
   - Line 322: `text-[18px] md:text-[22px]` (nav-card-label)
   - Line 329: `text-[15px] md:text-[16px]` (nav-card-link)

### Files with Inline fontSize CSS
1. **components/hero/Hero.tsx**
   - Line 99: `fontSize: 'var(--typography-badge-size-desktop)'` (uses token ✓)
   - Line 115: `fontSize: 'var(--typography-headline-size-desktop)'` (uses token ✓)
   - Line 147: `fontSize: 'var(--typography-body-large-size-desktop)'` (uses token ✓)

2. **components/navigation/Navigation.tsx**
   - Line 222: `fontSize: '16px'` (hard-coded ❌)

3. **components/ui/AvatarGroup.tsx**
   - Line 97: `fontSize: \`${avatarSize * 0.4}px\`` (calculated, acceptable for initials)

4. **components/ui/Button.tsx**
   - Line 28: `fontSize: 'var(--typography-button-size-default)'` (uses token ✓)

5. **components/ui/CardNav/CardItem.tsx**
   - Line 50: `fontSize: 'var(--typography-nav-title-size)'` (uses token ✓)
   - Line 74: `fontSize: 'var(--typography-body-large-size-desktop)'` (uses token ✓)

### Files with font-family Declarations
1. **styles/globals.css**
   - Line 177-179: System font stack (acceptable, will enhance)

### Summary
- **Issues Found**: 3 files with hard-coded px values
  - MainNav.tsx: 2 raw Tailwind px classes
  - Navigation.tsx: 1 inline 16px
  - AvatarGroup.tsx: 1 calculated (acceptable for dynamic sizing)

---

## TYPOGRAPHY SYSTEM PLAN

### 1. FILES TO MODIFY

#### Core Typography System
- `/design/tokens.ts` - Update typography tokens with subtle scale
- `/styles/globals.css` - Add system font stack + Inter support + utility classes
- `/design/README-TYPOGRAPHY.md` - New documentation file

#### Components to Update
- `/components/navigation/MainNav.tsx` - Replace raw px classes with tokens
- `/components/navigation/Navigation.tsx` - Replace hard-coded 16px with token
- `/components/hero/Hero.tsx` - Verify token usage (already good, may add utility classes)
- `/components/ui/Button.tsx` - Verify token usage (already good)
- `/components/ui/CardNav/CardItem.tsx` - Verify token usage (already good)

#### Tests
- `/tests/hero.test.tsx` - Update if typography classes change
- `/tests/nav.test.tsx` - Update if typography classes change
- `/tests/typography.test.tsx` - New test file for typography utilities

#### Font Loading (per BEST_FONT_SYSTEM.md)
- `/public/fonts/inter-var.woff2` - Inter variable font (required for Option B)
- `/app/layout.tsx` - Add Inter font preload and/or next/font optimization
  - Preload: `<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>`
  - OR use `next/font` for automatic optimization

---

### 2. LINE-BY-LINE CHANGES SUMMARY

#### `/design/tokens.ts`
- **Lines 104-166**: Refine typography scale with subtle increments
  - Add `h1`, `h2`, `h3`, `h4`, `h5`, `h6` tokens
  - Add `small`, `caption`, `overline` tokens
  - Refine existing `headline`, `body`, `badge`, `button`, `nav` tokens
  - Add `fontFamily` tokens (system stack + optional Inter)

#### `/styles/globals.css`
- **After line 160**: Add typography utility classes
  - `.text-headline-*` classes for headlines
  - `.text-body-*` classes for body text
  - `.text-nav-*` classes for navigation
  - `.font-heading` and `.font-body` classes
- **Line 177-179**: Update system font stack per BEST_FONT_SYSTEM.md (Option B)
  - Body: System font stack with line-height 1.6
  - Headings: Inter font-family with line-height 1.2
- **After line 194**: Add Inter @font-face declaration
  - Use WOFF2 format
  - Variable font (font-weight: 100 900)
  - font-display: swap
  - Self-hosted path: `/fonts/inter-var.woff2`

#### `/components/navigation/MainNav.tsx`
- **Line 322**: Replace `text-[18px] md:text-[22px]` with token-based classes
- **Line 329**: Replace `text-[15px] md:text-[16px]` with token-based classes

#### `/components/navigation/Navigation.tsx`
- **Line 222**: Replace `fontSize: '16px'` with `fontSize: 'var(--typography-body-default-size-desktop)'`

#### `/design/README-TYPOGRAPHY.md` (NEW)
- Document typography system
- Usage guidelines
- Token reference
- Inter font setup (if provided)

---

### 3. PIXEL → TOKEN MAPPING TABLE

| Element | Current px | New Token | Token Value | Justification |
|---------|------------|-----------|-------------|---------------|
| H1 (Headline) | 64px | `typography.headline.size.desktop` | 64px | Keep (matches reference) |
| H1 Line-height | 72px | `typography.headline.lineHeight.desktop` | 72px | Keep (1.125 ratio) |
| H2 | - | `typography.h2.size.desktop` | 48px | New (0.75x headline) |
| H3 | - | `typography.h3.size.desktop` | 36px | New (0.5625x headline) |
| H4 | - | `typography.h4.size.desktop` | 28px | New (0.4375x headline) |
| Body Large | 18px | `typography.body.large.size.desktop` | 18px | Keep |
| Body Default | 16px | `typography.body.default.size.desktop` | 16px | Keep |
| Body Small | - | `typography.body.small.size.desktop` | 14px | New |
| Nav Title | 24px | `typography.nav.title.size` | 24px | Keep |
| Nav Label (card) | 18px/22px | `typography.nav.label.size` | 18px/22px | New token |
| Nav Link | 15px/16px | `typography.nav.link.size` | 15px/16px | New token |
| Button | 16px | `typography.button.size.default` | 16px | Keep |
| Badge | 14px | `typography.badge.size.desktop` | 14px | Keep |
| Caption | - | `typography.caption.size` | 12px | New |
| Overline | - | `typography.overline.size` | 10px | New |

---

### 4. TYPOGRAPHY SCALE (SUBTLE)

Based on a subtle, harmonious scale:

```
Headline (H1): 64px / 72px (1.125)
H2:           48px / 56px (1.167)
H3:           36px / 42px (1.167)
H4:           28px / 36px (1.286)
Body Large:   18px / 28px (1.556)
Body Default: 16px / 24px (1.5)
Body Small:   14px / 20px (1.429)
Nav Title:    24px / 32px (1.333)
Nav Label:    18px / 24px (1.333) / 22px / 28px (md)
Nav Link:     15px / 20px (1.333) / 16px / 22px (md)
Button:       16px / 24px (1.5)
Badge:        14px / 20px (1.429)
Caption:      12px / 16px (1.333)
Overline:     10px / 14px (1.4)
```

---

### 5. FONT SYSTEM IMPLEMENTATION (AUTHORITATIVE: ./docs/BEST_FONT_SYSTEM.md)

**Recommended: Option B - Hybrid (System Body + Inter Headings)**

#### System Font Stack (Body) - 0ms load, 0 KB
```css
body {
  font-family: 
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
}
```

#### Inter Variable Font (Headings) - 50-100ms load, 70 KB
```css
/* Headings: Inter (Brand Identity) */
h1, h2, h3, h4, h5, h6 {
  font-family: "Inter", -apple-system, sans-serif;
  font-weight: 600;
  line-height: 1.2;
}

/* @font-face for Inter (self-hosted, WOFF2) */
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter-var.woff2") format("woff2");
  font-weight: 100 900; /* Variable font - all weights in one file */
  font-display: swap; /* Critical for performance */
}
```

**Performance Targets:**
- Body text: **0ms** (instant, system font)
- Headings: **50–100ms** (one font file, WOFF2)
- Total file size: **70 KB** (variable font)
- Lighthouse score: **90+**
- Zero layout shifts (font-display: swap)

**Implementation Requirements:**
- Use **WOFF2 format only** (30% smaller than WOFF)
- **Self-host fonts** (don't use CDN - 20-30% faster)
- Use **variable fonts** (one file = all weights, ~70 KB vs ~250 KB)
- Set `font-display: swap` (prevents blank text)
- Preload critical fonts (`<link rel="preload">` in layout.tsx)
- Optional: Subset fonts (remove unused characters, 40-60% smaller)

---

### 6. TEST UPDATES

#### `/tests/typography.test.tsx` (NEW)
- Test typography utility classes render correctly
- Test font-family application
- Test responsive typography tokens
- Test Inter font loading (if provided)

#### `/tests/hero.test.tsx`
- Verify headline uses correct token
- Verify body text uses correct token
- No changes if tokens remain same

#### `/tests/nav.test.tsx`
- Verify nav typography uses tokens
- Update assertions if classes change

---

### 7. RISKS AND MITIGATIONS

| Risk | Impact | Mitigation |
|------|--------|------------|
| Breaking visual layout | High | Keep existing token values, only add new tokens |
| Inter font not provided | Low | System stack fallback, Inter optional |
| Performance impact | Medium | Use `next/font` for Inter, lazy load if needed |
| Test failures | Medium | Update test assertions to match new classes |
| Token conflicts | Low | Review all components before changes |

---

### 8. ASSUMPTIONS

1. **Font System Documentation**: Using `./docs/BEST_FONT_SYSTEM.md` as authoritative reference
   - **Option B recommended**: System fonts for body + Inter for headings
   - Body: 16px, line-height 1.6, system font stack
   - Headings: Inter variable font, font-weight 600, line-height 1.2
   - Performance: 0ms body, 50-100ms headings, 70 KB total

2. **Visual Reference**: `/mnt/data/Hero section.png` exists and will be used to verify headline sizing

3. **Inter Font**: 
   - **Required**: Inter variable font (WOFF2) at `/public/fonts/inter-var.woff2`
   - If not provided, headings will use system stack with appropriate weights (graceful fallback)
   - Use `next/font` for optimization (recommended) OR `@font-face` with preload

4. **Backward Compatibility**: Existing token values preserved, new tokens added

5. **Components**: `explore-grid` and `featured-case` mentioned but not found in codebase. Will create tokens for future use.

6. **Readability Standards** (from BEST_FONT_SYSTEM.md):
   - Body text: 16-18px (minimum)
   - Line length: 50-75 characters (optimal)
   - Line height: 1.6 (body), 1.2 (headings)
   - Sans-serif only (15% more readable on screens)

---

### 9. NEEDED ASSETS

#### Required
- None (using system fonts)

#### Required (per BEST_FONT_SYSTEM.md Option B)
- `/public/fonts/inter-var.woff2` - Inter variable font (all weights 100-900 in one file, ~70 KB)

**Note**: If Inter font not provided, headings will gracefully fallback to system font stack with appropriate weights.

---

### 10. ESTIMATED TIME

- Token updates: 30 minutes
- CSS utility classes: 45 minutes
- Component updates: 30 minutes
- Documentation: 30 minutes
- Tests: 45 minutes
- Inter font integration (if provided): 30 minutes

**Total: ~3.5 hours** (without Inter) / **~4 hours** (with Inter)

---

### 11. BRANCH NAME SUGGESTION

```
typography/hybrid-system-update
```

---

## EXECUTION CHECKLIST

- [ ] Update `/design/tokens.ts` with refined typography scale
- [ ] Update `/styles/globals.css` with system stack + utilities
- [ ] Replace raw px classes in `MainNav.tsx`
- [ ] Replace hard-coded px in `Navigation.tsx`
- [ ] Create `/design/README-TYPOGRAPHY.md`
- [ ] Add Inter font support (if files provided)
- [ ] Update/create tests
- [ ] Run `pnpm lint && pnpm test`
- [ ] Verify visual parity with reference screenshot

---

## READY TO EXECUTE

Awaiting `APPROVED` to proceed with EXECUTE mode.

