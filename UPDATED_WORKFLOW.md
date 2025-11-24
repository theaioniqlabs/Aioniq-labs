# AiONIQ Cursor Workflow (Screenshots-first, strict)

1) PREPARE CONTEXT
   - Open only the files relevant to the task.
   - Ensure /docs/UPDATED_MASTER_PROJECT_MANUAL.md and /.cursorrules are present.

2) MODE: RESEARCH
   - Cursor reads the provided screenshot(s)/URLs. Output: short observations only.
   - List assets that must be added or replaced.

3) MODE: PLAN
   - Cursor drafts a step-by-step plan. Must include:
     1. File path(s) to change
     2. Component/function name(s)
     3. Tests to add/update
     4. Assets required (paths or URLs)
     5. Token mapping notes (pixel -> token)
     6. Assumptions and risks
   - User must reply "APPROVED" to proceed.

4) MODE: EXECUTE
   - Cursor performs only the edits in the PLAN.
   - Run lint + tests, paste logs.
   - If tests fail, return to PLAN.

5) DEPLOY / PR
   - Atomic commits. Use PR template.
   - Attach the PLAN in PR description.

Notes:
- Screenshot is treated as source of truth. If a Figma link is provided, prefer Figma Inspect values.
- Respect prefers-reduced-motion.
