# PLAN: shadcn/ui Gradual Integration

**MODE: PLAN**  
**Status: Awaiting APPROVAL**

---

## PRE-CHECK RESULTS

### ✅ 1. Existing Radix Components
**Result**: No Radix UI components found
- No `@radix-ui` dependencies in `package.json`
- No Radix imports in codebase
- **Status**: Clean slate for shadcn/ui integration

### ✅ 2. components.json File
**Result**: Does not exist
- No `components.json` found in project root
- **Status**: Will be created during initialization

### ✅ 3. Folder Conflicts
**Result**: No conflicts detected
- `/components/ui` exists but contains custom components (Button, AvatarGroup, Banner, Icon, CardNav)
- No `/components/shared` folder
- No `/app/ui` folder
- **Status**: Safe to add shadcn components to `/components/ui` alongside existing components

### ✅ 4. Tailwind Config
**Result**: Compatible with shadcn/ui
- `tailwind.config.ts` exists
- Supports `@layer` directives (standard Tailwind)
- Uses TypeScript config format
- **Status**: Ready for shadcn/ui integration

### ✅ 5. :root Variable Overrides
**Result**: Custom tokens exist, but no conflicts
- `styles/globals.css` contains extensive `:root` variables
- All variables use custom naming (`--spacing-*`, `--typography-*`, `--color-*`)
- shadcn/ui uses different naming (`--background`, `--foreground`, `--primary`, etc.)
- **Status**: No naming conflicts expected, but will map shadcn tokens to AiONIQ tokens

---

## INTEGRATION PLAN

### 1. INSTALLATION & SETUP

#### Commands to Run:
```bash
# Initialize shadcn/ui
pnpm dlx shadcn-ui@latest init

# Install required Radix dependencies
pnpm add @radix-ui/react-dialog @radix-ui/react-popover

# Generate Dialog component
pnpm dlx shadcn-ui@latest add dialog

# Generate Popover component
pnpm dlx shadcn-ui@latest add popover
```

#### components.json Configuration:
**File**: `/components.json` (will be created)

**Configuration**:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

**Notes**:
- `rsc: true` - Next.js App Router support
- `cssVariables: true` - Use CSS variables (compatible with existing token system)
- `baseColor: "slate"` - Neutral base (can be customized later)
- `prefix: ""` - No Tailwind prefix (matches current setup)

---

### 2. FILE STRUCTURE

#### Files to Create:
```
/components/ui/
  ├── dialog.tsx          # shadcn Dialog component (generated)
  ├── popover.tsx         # shadcn Popover component (generated)
  ├── README.md           # NEW: Usage documentation
  └── [existing files]    # Keep all existing components untouched

/lib/
  └── utils.ts            # NEW: cn() utility function (required by shadcn)

/components/demo/
  └── DialogExample.tsx   # NEW: Demo component for testing

/tests/
  └── shadcn.test.tsx     # NEW: Tests for shadcn integration
```

#### Files to Modify:
```
/tailwind.config.ts       # Add shadcn theme configuration
/styles/globals.css       # Add shadcn CSS variables (mapped to AiONIQ tokens)
/package.json             # Add Radix dependencies (auto-updated)
```

#### Files to NOT Modify:
- ❌ `/components/ui/Button.tsx`
- ❌ `/components/ui/AvatarGroup.tsx`
- ❌ `/components/ui/Banner.tsx`
- ❌ `/components/ui/Icon.tsx`
- ❌ `/components/ui/CardNav/**`
- ❌ `/components/navigation/**`
- ❌ `/app/layout.tsx`
- ❌ `/design/tokens.ts` (read-only reference)

---

### 3. TOKEN MAPPING STRATEGY

#### shadcn/ui → AiONIQ Token Mapping:

**Colors**:
```css
/* In styles/globals.css - Add after existing :root variables */

/* shadcn/ui color tokens mapped to AiONIQ tokens */
--background: var(--color-background-primary);        /* #FFFFFF */
--foreground: var(--color-text-primary);               /* #1A1A1A */
--primary: var(--color-brand-primary);                 /* #1F2937 */
--primary-foreground: var(--color-text-inverse);      /* #FFFFFF */
--secondary: var(--color-background-secondary);       /* #F9FAFB */
--secondary-foreground: var(--color-text-primary);    /* #1A1A1A */
--muted: var(--color-background-tertiary);            /* #F3F4F6 */
--muted-foreground: var(--color-text-secondary);      /* #6B7280 */
--accent: var(--color-brand-primary-light);            /* #1F2937 */
--accent-foreground: var(--color-text-primary);       /* #1A1A1A */
--destructive: #ef4444;                                 /* Standard red */
--destructive-foreground: var(--color-text-inverse);  /* #FFFFFF */
--border: var(--color-button-secondary-border);        /* #D1D5DB */
--input: var(--color-button-secondary-border);         /* #D1D5DB */
--ring: var(--color-brand-primary);                    /* #1F2937 */
```

**Spacing & Radii**:
- shadcn uses Tailwind defaults (4px, 8px, 12px, 16px)
- AiONIQ tokens will be used via CSS variable overrides in component styles
- No conflicts expected (shadcn uses Tailwind classes, AiONIQ uses CSS variables)

**Typography**:
- shadcn components use Tailwind typography classes
- Will override with AiONIQ typography tokens in component customizations
- Apply `font-family: var(--typography-font-family-body)` to shadcn components

---

### 4. COMPONENT CUSTOMIZATION

#### Dialog Component Customization:
**File**: `/components/ui/dialog.tsx` (after generation)

**Changes**:
1. Add AiONIQ typography:
   ```tsx
   className={cn(
     "font-body", // Use AiONIQ body font
     // ... existing classes
   )}
   ```

2. Use AiONIQ radius tokens:
   ```tsx
   style={{
     borderRadius: 'var(--radii-card-default)', // 12px
   }}
   ```

3. Apply AiONIQ spacing:
   ```tsx
   style={{
     padding: 'var(--spacing-stack-gap-lg)', // 32px
   }}
   ```

#### Popover Component Customization:
**File**: `/components/ui/popover.tsx` (after generation)

**Changes**: Similar to Dialog
- Apply AiONIQ typography
- Use AiONIQ radius tokens
- Apply AiONIQ spacing

---

### 5. DOCUMENTATION

#### File: `/components/ui/README.md`

**Content**:
```markdown
# UI Components Directory

This directory contains both custom AiONIQ components and shadcn/ui primitives.

## Custom Components (Do NOT modify)

- `Button.tsx` - Custom button component
- `AvatarGroup.tsx` - Avatar group component
- `Banner.tsx` - Banner image component
- `Icon.tsx` - Icon component
- `CardNav/` - Navigation card components

## shadcn/ui Primitives

- `dialog.tsx` - Dialog/Modal primitive
- `popover.tsx` - Popover primitive

### When to Use shadcn/ui Primitives

- ✅ Building new features that need accessible primitives
- ✅ Need complex interactions (dialogs, popovers, dropdowns)
- ✅ Want to leverage Radix UI accessibility

### When to Use Custom Components

- ✅ Existing features (Button, AvatarGroup, Banner)
- ✅ Components that match AiONIQ design system exactly
- ✅ Navigation components (MainNav, CardNav)

### Token Mapping

shadcn/ui components use CSS variables that map to AiONIQ tokens:
- Colors: `--background` → `--color-background-primary`
- Typography: Uses `font-body` class (system fonts)
- Spacing: Uses AiONIQ spacing tokens via CSS variables
- Radius: Uses `--radii-card-default` (12px)

See `/design/tokens.ts` for full token reference.
```

---

### 6. DEMO COMPONENT

#### File: `/components/demo/DialogExample.tsx`

**Purpose**: Verify shadcn/ui integration works

**Content**:
```tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button' // Existing custom button
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function DialogExample() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>shadcn/ui Integration Test</DialogTitle>
          <DialogDescription>
            This dialog verifies that shadcn/ui components work correctly
            with AiONIQ design tokens and custom components.
          </DialogDescription>
        </DialogHeader>
        <p className="text-body">
          Dialog is working! shadcn/ui is successfully integrated.
        </p>
      </DialogContent>
    </Dialog>
  )
}
```

**Note**: This is a demo file only, not used in production.

---

### 7. TESTING STRATEGY

#### File: `/tests/shadcn.test.tsx`

**Tests to Include**:
1. **Import Test**: Verify shadcn components can be imported
2. **Render Test**: Verify DialogExample renders without errors
3. **Token Test**: Verify shadcn components use AiONIQ tokens
4. **No Regression**: Verify existing components still work

**Test Content**:
```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DialogExample } from '@/components/demo/DialogExample'
import { Dialog } from '@/components/ui/dialog'

describe('shadcn/ui Integration', () => {
  it('can import shadcn Dialog component', () => {
    expect(Dialog).toBeDefined()
  })

  it('renders DialogExample without errors', () => {
    render(<DialogExample />)
    expect(screen.getByText('Open Dialog')).toBeInTheDocument()
  })

  it('does not break existing components', () => {
    // Verify existing Button still works
    const { Button } = require('@/components/ui/Button')
    expect(Button).toBeDefined()
  })
})
```

---

### 8. TAILWIND CONFIG UPDATES

#### File: `/tailwind.config.ts`

**Changes** (add to `theme.extend`):
```typescript
theme: {
  extend: {
    // ... existing extends
    borderRadius: {
      lg: 'var(--radii-card-default)', // 12px
      md: 'var(--radii-button-default)', // 8px
      sm: '4px',
    },
    colors: {
      // shadcn/ui colors (mapped to CSS variables)
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      // ... other shadcn colors
    },
  },
}
```

**Note**: shadcn/ui uses HSL colors, but we'll map them to our existing RGB tokens via CSS variables.

---

### 9. CSS VARIABLES ADDITION

#### File: `/styles/globals.css`

**Changes** (add after existing `:root` variables):
```css
/* shadcn/ui color tokens (mapped to AiONIQ tokens) */
--background: 0 0% 100%; /* Maps to --color-background-primary */
--foreground: 0 0% 10%;   /* Maps to --color-text-primary */
--primary: 215 28% 17%;  /* Maps to --color-brand-primary (#1F2937) */
--primary-foreground: 0 0% 100%; /* Maps to --color-text-inverse */
/* ... additional mappings */
```

**Note**: shadcn/ui expects HSL format, so we'll convert RGB tokens to HSL.

---

### 10. RISKS & MITIGATIONS

#### Risk 1: Class Name Conflicts
**Mitigation**:
- shadcn/ui uses prefixed classes (e.g., `ui-dialog-*`)
- Custom components use different naming
- No conflicts expected

#### Risk 2: CSS Variable Conflicts
**Mitigation**:
- shadcn/ui uses different variable names (`--background` vs `--color-background-primary`)
- Will map shadcn variables to AiONIQ tokens
- No direct conflicts

#### Risk 3: Tailwind Config Conflicts
**Mitigation**:
- shadcn/ui extends Tailwind config, doesn't override
- Will add shadcn config to existing `extend` block
- Test after changes

#### Risk 4: Typography Conflicts
**Mitigation**:
- Apply AiONIQ typography classes to shadcn components
- Use `font-body` and `font-heading` utility classes
- Override default shadcn typography

#### Risk 5: Breaking Existing Components
**Mitigation**:
- Do NOT modify existing components
- Test existing components after integration
- Use separate test files for shadcn vs. existing components

---

### 11. EXECUTION CHECKLIST

- [ ] Run `pnpm dlx shadcn-ui@latest init`
- [ ] Configure `components.json` with correct paths
- [ ] Install Radix dependencies (`@radix-ui/react-dialog`, `@radix-ui/react-popover`)
- [ ] Generate Dialog component
- [ ] Generate Popover component
- [ ] Create `/lib/utils.ts` with `cn()` function
- [ ] Update `tailwind.config.ts` with shadcn theme
- [ ] Add shadcn CSS variables to `styles/globals.css` (mapped to AiONIQ tokens)
- [ ] Customize Dialog component with AiONIQ tokens
- [ ] Customize Popover component with AiONIQ tokens
- [ ] Create `/components/ui/README.md` documentation
- [ ] Create `/components/demo/DialogExample.tsx` demo
- [ ] Create `/tests/shadcn.test.tsx` tests
- [ ] Run `pnpm lint` to verify no errors
- [ ] Run `pnpm test` to verify all tests pass
- [ ] Verify existing components still work
- [ ] Test DialogExample in browser

---

### 12. FILES SUMMARY

#### Files to Create:
1. `/components.json` - shadcn/ui configuration
2. `/lib/utils.ts` - cn() utility function
3. `/components/ui/dialog.tsx` - Dialog component (generated)
4. `/components/ui/popover.tsx` - Popover component (generated)
5. `/components/ui/README.md` - Usage documentation
6. `/components/demo/DialogExample.tsx` - Demo component
7. `/tests/shadcn.test.tsx` - Integration tests

#### Files to Modify:
1. `/tailwind.config.ts` - Add shadcn theme
2. `/styles/globals.css` - Add shadcn CSS variables
3. `/package.json` - Add Radix dependencies (auto-updated)

#### Files to NOT Touch:
- All existing components in `/components/ui/`
- All navigation components
- Layout files
- Design tokens file

---

### 13. ESTIMATED TIME

- shadcn/ui initialization: **10 minutes**
- Component generation: **5 minutes**
- Token mapping & customization: **30 minutes**
- Documentation: **20 minutes**
- Testing: **20 minutes**
- Verification: **15 minutes**

**Total: ~1.5-2 hours**

---

## READY TO EXECUTE

**Status**: Plan complete, awaiting `APPROVED` from user.

**Summary**:
- ✅ Scanned project for conflicts (none found)
- ✅ Planned gradual integration strategy
- ✅ Defined token mapping approach
- ✅ Created test plan
- ✅ Documented all files to create/modify
- ✅ Identified risks and mitigations
- ✅ Preserved all existing components

**Next Step**: Wait for user to reply `APPROVED` before executing changes.

