# Palette Journal
## 2024-10-24 - Interactive Component States and ARIA Ties
**Learning:** When building or modifying custom interactive elements (like Framer Motion hamburger menus or toggles), explicitly tie accessibility states like `aria-expanded` or `aria-pressed`, dynamic `aria-label` attributes (e.g., 'Open menu' vs 'Close menu'), and `aria-controls` referencing the ID of the expanded container to the React state variables controlling the visual transitions. Also, purely decorative child images or SVGs within it should use empty alt text (`alt=""`) and `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Use memory for similar interactive element patterns to ensure appropriate ARIA states reflect the state hooks handling the visual changes.
