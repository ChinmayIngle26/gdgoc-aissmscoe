# Palette Journal

## 2024-03-19 - Inaccurate aria-labels on copy-pasted components
**Learning:** Copy-pasted components often retain the `aria-label` of their source. In this case, `LinkedinButton` had the `aria-label="Join Whatsapp Group"`.
**Action:** Always check `aria-label` and `alt` attributes when duplicating components to ensure they accurately describe the new component's function.