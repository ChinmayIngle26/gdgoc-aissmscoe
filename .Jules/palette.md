## 2024-05-23 - Hamburger Menu Accessibility with Framer Motion
**Learning:** When building custom interactive elements like Framer Motion hamburger menus, you should explicitly tie accessibility states (`aria-expanded` and dynamic `aria-label` attributes) and `aria-controls` referencing the ID of the expanded container to the React state variables controlling the visual transitions.
**Action:** Always link React state (like `menuOpen`) to `aria-expanded` and `aria-label` attributes for icon-only custom toggle buttons.
