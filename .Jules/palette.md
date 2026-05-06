## 2026-05-06 - Hamburger Menu Accessibility
**Learning:** Interactive visual toggles like Framer Motion hamburger menus often omit essential accessibility states, leaving screen reader users without context about the menu's state (open/closed) or its relationship to the expanding content.
**Action:** Explicitly bind `aria-expanded`, dynamic `aria-label` attributes, and `aria-controls` to the same React state controlling the visual transitions.
