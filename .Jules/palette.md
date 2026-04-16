## 2024-04-16 - Accessible Custom Hamburger Menus
**Learning:** Custom hamburger menus built with `framer-motion` and empty `span` elements lack inherent accessible text and visible focus states by default when using Tailwind (especially if base outlines are removed).
**Action:** Always provide explicit `aria-label`, `aria-expanded` attributes, and clear visible focus states (like `focus-visible:ring-2 focus-visible:outline-none`) to ensure screen reader users understand the state and keyboard users can navigate to it.
