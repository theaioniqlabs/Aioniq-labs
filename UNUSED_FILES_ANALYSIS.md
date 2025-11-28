# Repository Analysis: Unused Files and Components

## Analysis Date
Generated: 2025-11-27

## Summary
This report identifies unused components, files, functions, CSS classes, assets, and duplicate/obsolete folders in the AIONIQ Labs codebase.

---

## 1. UNUSED COMPONENTS

### High Confidence

#### `components/ui/MagicBento.tsx`
- **File Path**: `components/ui/MagicBento.tsx`
- **Why Unused**: Component was removed from Hero.tsx (line 7 import and lines 74-93 usage deleted). No other imports found in codebase.
- **Confidence**: High
- **Suggested Action**: Delete (already marked for removal in previous conversation)

#### `components/navigation/Navigation.tsx`
- **File Path**: `components/navigation/Navigation.tsx`
- **Why Unused**: No imports found. MainNav.tsx is used in layout.tsx instead. Navigation.tsx appears to be an older/alternative implementation.
- **Confidence**: High
- **Suggested Action**: Delete (if MainNav is the preferred implementation)

#### `components/demo/DialogExample.tsx`
- **File Path**: `components/demo/DialogExample.tsx`
- **Why Unused**: Only imported in tests (shadcn.test.tsx) and mentioned in PLAN_SHADCN_INTEGRATION.md. Not used in production code.
- **Confidence**: High
- **Suggested Action**: Archive to `components/demo/` (keep for reference) or delete if tests are sufficient

#### `components/ui/aurora-background.tsx`
- **File Path**: `components/ui/aurora-background.tsx`
- **Why Unused**: No imports found in production code. Component exists but is never used.
- **Confidence**: High
- **Suggested Action**: Delete or archive if planned for future use

#### `components/ui/ImagePlaceholder.tsx`
- **File Path**: `components/ui/ImagePlaceholder.tsx`
- **Why Unused**: No imports found. Banner.tsx uses Next.js Image directly, Hero.tsx uses Banner component.
- **Confidence**: High
- **Suggested Action**: Delete (functionality appears replaced by Banner component)

### Medium Confidence

#### `components/ui/popover.tsx`
- **File Path**: `components/ui/popover.tsx`
- **Why Unused**: shadcn/ui component, but no imports found in production code. Only used in tests.
- **Confidence**: Medium (may be planned for future use)
- **Suggested Action**: Keep if part of shadcn/ui integration plan, otherwise delete

---

## 2. EMPTY/UNUSED DIRECTORIES

### High Confidence

#### `components/CardStack/`
- **File Path**: `components/CardStack/`
- **Why Unused**: Empty directory, no files found
- **Confidence**: High
- **Suggested Action**: Delete

#### `components/explore-grid/`
- **File Path**: `components/explore-grid/`
- **Why Unused**: Empty directory, no files found. ExploreSection.tsx exists in ui/ folder instead.
- **Confidence**: High
- **Suggested Action**: Delete

#### `components/trusted-band/`
- **File Path**: `components/trusted-band/`
- **Why Unused**: Empty directory, no files found
- **Confidence**: High
- **Suggested Action**: Delete

#### `components/ui/tilt/`
- **File Path**: `components/ui/tilt/`
- **Why Unused**: Empty directory, no files found
- **Confidence**: High
- **Suggested Action**: Delete

#### `app/(demo)/progressive-blur-demo/`
- **File Path**: `app/(demo)/progressive-blur-demo/`
- **Why Unused**: Empty directory, no files found
- **Confidence**: High
- **Suggested Action**: Delete

#### `public/assets/trusted/`
- **File Path**: `public/assets/trusted/`
- **Why Unused**: Empty directory, no files found
- **Confidence**: High
- **Suggested Action**: Delete

---

## 3. UNUSED UTILITY FILES

### Low Confidence (Keep for Reference)

#### `scripts/generate-banner-placeholders.js`
- **File Path**: `scripts/generate-banner-placeholders.js`
- **Why Unused**: Build/utility script, not imported. May be run manually when needed.
- **Confidence**: Low (utility scripts are typically not imported)
- **Suggested Action**: Keep (document usage in README if needed)

#### `scripts/generate-placeholders.js`
- **File Path**: `scripts/generate-placeholders.js`
- **Why Unused**: Build/utility script, not imported. May be run manually when needed.
- **Confidence**: Low (utility scripts are typically not imported)
- **Suggested Action**: Keep (document usage in README if needed)

---

## 4. UNUSED ASSETS

### High Confidence

#### `9309a2b0-3a7c-4372-8cbc-3030a29cc646.png` (root)
- **File Path**: `9309a2b0-3a7c-4372-8cbc-3030a29cc646.png`
- **Why Unused**: Duplicate of file in mnt/data/. Only referenced in references_example.json and documentation.
- **Confidence**: High
- **Suggested Action**: Delete (duplicate, keep mnt/data version)

#### `mnt/data/menu.png`
- **File Path**: `mnt/data/menu.png`
- **Why Unused**: No references found in code. Icon component uses SVG files from public/assets/icons/.
- **Confidence**: High
- **Suggested Action**: Delete or archive

#### `mnt/data/Untitled-1.jpg` (multiple locations)
- **File Path**: `mnt/data/Untitled-1.jpg`, `mnt/data/Figma web/Untitled-1.jpg`
- **Why Unused**: Generic filename, no references found in code.
- **Confidence**: Medium
- **Suggested Action**: Review and delete if not needed, or rename if it's a reference image

#### `mnt/data/Screenshot 2025-11-24 004820.png`
- **File Path**: `mnt/data/Screenshot 2025-11-24 004820.png`
- **Why Unused**: No references found in code. Appears to be a reference/documentation image.
- **Confidence**: Medium
- **Suggested Action**: Archive to docs/references/ if needed for documentation

#### `mnt/data/Screenshot 2025-11-25 013224.png`
- **File Path**: `mnt/data/Screenshot 2025-11-25 013224.png`
- **Why Unused**: No references found in code. Appears to be a reference/documentation image.
- **Confidence**: Medium
- **Suggested Action**: Archive to docs/references/ if needed for documentation

#### `mnt/data/Image section/preview.png`
- **File Path**: `mnt/data/Image section/preview.png`
- **Why Unused**: No references found in code. Appears to be a reference image.
- **Confidence**: Medium
- **Suggested Action**: Archive to docs/references/ if needed for documentation

#### `mnt/data/Figma web/Reference/5b38795dd6307a5e0569b12699cbe21c.jpg`
- **File Path**: `mnt/data/Figma web/Reference/5b38795dd6307a5e0569b12699cbe21c.jpg`
- **Why Unused**: No references found in code. Reference folder suggests it's documentation.
- **Confidence**: Medium
- **Suggested Action**: Keep in Reference folder (documentation purpose)

#### `mnt/data/Aioniq Logo.svg`
- **File Path**: `mnt/data/Aioniq Logo.svg`
- **Why Unused**: Logo is in public/assets/aioniq-logo.svg. This appears to be a duplicate.
- **Confidence**: Medium
- **Suggested Action**: Delete if duplicate, or verify which is the source file

#### `mnt/data/Web_AIoniQ Labs (Copy).fig`
- **File Path**: `mnt/data/Web_AIoniQ Labs (Copy).fig`
- **Why Unused**: Figma file, not used in code. Reference/documentation file.
- **Confidence**: Low (design files are typically not imported)
- **Suggested Action**: Keep in mnt/data/ for design reference

---

## 5. DUPLICATE FILES

### High Confidence

#### `mnt/data/UI-Design-direct-code.md` vs `mnt/data/UI-Design-direct-code.txt`
- **File Path**: `mnt/data/UI-Design-direct-code.md`, `mnt/data/UI-Design-direct-code.txt`
- **Why Duplicate**: Same content, different extensions. .md version is more recent and used.
- **Confidence**: High
- **Suggested Action**: Delete .txt version, keep .md

#### `components/ui/PageContainer.tsx` vs `mnt/data/Figma web/Code Download/components/layout/PageContainer.tsx`
- **File Path**: `components/ui/PageContainer.tsx` (used), `mnt/data/Figma web/Code Download/components/layout/PageContainer.tsx` (unused)
- **Why Duplicate**: Code Download folder contains exported code from Figma. Active version is in components/ui/.
- **Confidence**: High
- **Suggested Action**: Keep active version, Code Download folder is reference material

#### `mnt/data/Sliding-banner/` vs `public/assets/banners/`
- **File Path**: `mnt/data/Sliding-banner/` (reference), `public/assets/banners/` (used)
- **Why Duplicate**: Banner images exist in both locations. public/assets/ is the active location.
- **Confidence**: High
- **Suggested Action**: Keep public/assets/ version, mnt/data/ is reference

---

## 6. OBSOLETE/REFERENCE FOLDERS

### High Confidence

#### `mnt/data/Figma web/Code Download/`
- **File Path**: `mnt/data/Figma web/Code Download/`
- **Why Obsolete**: Contains exported code from Figma (48+ component files). These are reference files, not used in the active codebase. Active components are in `components/` directory.
- **Confidence**: High
- **Suggested Action**: Archive to `docs/figma-export/` or keep as reference material. Do not delete if needed for design reference.

#### `mnt/data/Magic-Bento/`
- **File Path**: `mnt/data/Magic-Bento/`
- **Why Obsolete**: MagicBento component was removed. Documentation folder for removed component.
- **Confidence**: High
- **Suggested Action**: Delete (component already removed)

---

## 7. UNUSED JSON/REFERENCE FILES

### Medium Confidence

#### `references_example.json`
- **File Path**: `references_example.json`
- **Why Unused**: Example/template file. Not imported in code.
- **Confidence**: Medium
- **Suggested Action**: Keep as template/documentation, or move to docs/

#### `mnt/data/references.json`
- **File Path**: `mnt/data/references.json`
- **Why Unused**: Reference data file. Only referenced in README.md, not imported in code.
- **Confidence**: Medium
- **Suggested Action**: Keep for documentation/reference

#### `mnt/data/references.banner.json`
- **File Path**: `mnt/data/references.banner.json`
- **Why Unused**: Reference data file. Not imported in code.
- **Confidence**: Medium
- **Suggested Action**: Keep for documentation/reference

#### `mnt/data/references.cardnav.json`
- **File Path**: `mnt/data/references.cardnav.json`
- **Why Unused**: Reference data file. Not imported in code.
- **Confidence**: Medium
- **Suggested Action**: Keep for documentation/reference

---

## 8. DOCUMENTATION/PLAN FILES

### Low Confidence (Keep for Reference)

#### `PLAN_SHADCN_INTEGRATION.md`
- **File Path**: `PLAN_SHADCN_INTEGRATION.md`
- **Why Unused**: Planning document, not code.
- **Confidence**: Low (documentation files are not imported)
- **Suggested Action**: Keep for reference or archive to docs/plans/

#### `PLAN_SUBTLE_TYPOGRAPHY.md`
- **File Path**: `PLAN_SUBTLE_TYPOGRAPHY.md`
- **Why Unused**: Planning document, not code.
- **Confidence**: Low (documentation files are not imported)
- **Suggested Action**: Keep for reference or archive to docs/plans/

#### `PLAN_TYPOGRAPHY_UPDATE.md`
- **File Path**: `PLAN_TYPOGRAPHY_UPDATE.md`
- **Why Unused**: Planning document, not code.
- **Confidence**: Low (documentation files are not imported)
- **Suggested Action**: Keep for reference or archive to docs/plans/

#### `UPDATED_MASTER_PROJECT_MANUAL.md`
- **File Path**: `UPDATED_MASTER_PROJECT_MANUAL.md`
- **Why Unused**: Documentation file, not code.
- **Confidence**: Low (documentation files are not imported)
- **Suggested Action**: Keep for reference or move to docs/

#### `UPDATED_WORKFLOW.md`
- **File Path**: `UPDATED_WORKFLOW.md`
- **Why Unused**: Documentation file, not code.
- **Confidence**: Low (documentation files are not imported)
- **Suggested Action**: Keep for reference or move to docs/

#### `cursor_prompt_template.txt`
- **File Path**: `cursor_prompt_template.txt`
- **Why Unused**: Template file for Cursor IDE, not code.
- **Confidence**: Low (template files are not imported)
- **Suggested Action**: Keep for development workflow

---

## 9. TEST FILES

### Low Confidence (Keep - Tests are Important)

All test files in `tests/` directory:
- `tests/hero-banner.test.tsx`
- `tests/hero.test.tsx`
- `tests/interactive-accordion.test.tsx`
- `tests/nav.test.tsx`
- `tests/shadcn.test.tsx`
- `tests/typography.test.tsx`
- `tests/setup.ts`

- **Why Listed**: Not imported in production code (expected for tests)
- **Confidence**: Low (tests should be kept)
- **Suggested Action**: Keep all test files

---

## 10. FIGMA EXPORT FILES (Reference Material)

### Low Confidence (Keep for Design Reference)

#### `mnt/data/Figma web/Elements.md`
- **File Path**: `mnt/data/Figma web/Elements.md`
- **Why Unused**: Figma HTML export, not code. Reference material.
- **Confidence**: Low (design reference files are not imported)
- **Suggested Action**: Keep for design reference or archive

#### `mnt/data/Figma web/Style.md`
- **File Path**: `mnt/data/Figma web/Style.md`
- **Why Unused**: Figma CSS export, not code. Reference material.
- **Confidence**: Low (design reference files are not imported)
- **Suggested Action**: Keep for design reference or archive

#### `mnt/data/Figma web/Inspects.md`
- **File Path**: `mnt/data/Figma web/Inspects.md`
- **Why Unused**: Figma HTML export, not code. Reference material.
- **Confidence**: Low (design reference files are not imported)
- **Suggested Action**: Keep for design reference or archive

#### `mnt/data/Figma web/AIONIQ Labs Web App Layout – Figma Make.pdf`
- **File Path**: `mnt/data/Figma web/AIONIQ Labs Web App Layout – Figma Make.pdf`
- **Why Unused**: PDF design file, not code. Reference material.
- **Confidence**: Low (design files are not imported)
- **Suggested Action**: Keep for design reference

---

## SUMMARY STATISTICS

- **Total Unused Components**: 5 (High confidence)
- **Total Empty Directories**: 6
- **Total Unused Assets**: 8+ (various confidence levels)
- **Total Duplicate Files**: 3+ pairs
- **Total Obsolete Folders**: 2
- **Total Reference Files**: 20+ (documentation/design reference)

---

## RECOMMENDED ACTIONS PRIORITY

### Immediate Deletion (High Confidence, No Dependencies)
1. Delete empty directories (6 folders)
2. Delete `components/ui/MagicBento.tsx` (already removed from usage)
3. Delete `components/navigation/Navigation.tsx` (if MainNav is preferred)
4. Delete `components/ui/aurora-background.tsx` (if not planned)
5. Delete `components/ui/ImagePlaceholder.tsx` (replaced by Banner)
6. Delete duplicate files (root PNG, .txt version of UI-Design)
7. Delete `mnt/data/Magic-Bento/` folder

### Review Before Deletion (Medium Confidence)
1. Review `components/demo/DialogExample.tsx` - keep if needed for testing
2. Review `components/ui/popover.tsx` - keep if part of shadcn integration
3. Review unused image assets - archive if needed for documentation

### Keep (Low Confidence - Reference/Documentation)
1. All documentation files (PLAN_*.md, UPDATED_*.md)
2. All test files
3. Figma export files (reference material)
4. Utility scripts (may be run manually)
5. Reference JSON files

---

## NOTES

- This analysis is based on static code analysis (grep for imports/exports)
- Dynamic imports or runtime loading may not be detected
- Some files may be used in build processes or CI/CD pipelines
- Review each item before deletion, especially medium/low confidence items
- Consider archiving instead of deleting for reference material

