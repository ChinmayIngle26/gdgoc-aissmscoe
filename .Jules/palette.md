## 2024-05-24 - [Accessible Framer Motion Transitions]
**Learning:** When building custom interactive elements with Framer Motion (like hamburger menus or toggles), visual transitions alone are insufficient for screen readers. The `menuOpen` state needs to be explicitly tied to accessibility states to provide context.
**Action:** Explicitly tie accessibility states like `aria-expanded`, dynamic `aria-label` attributes (e.g., 'Open menu' vs 'Close menu'), and `aria-controls` referencing the ID of the expanded container to the React state variables controlling the visual transitions.
