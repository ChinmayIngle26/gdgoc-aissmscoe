## 2025-01-24 - Accessible Expandable Floating Action Buttons
**Learning:** Expanding action buttons utilizing Framer Motion's `whileHover` can become inaccessible for keyboard navigation. Additionally, floating button containers block interaction on underlying elements. Screen readers vocalize purely decorative icons inside interactive buttons with `aria-label` attributes.
**Action:** Pair `whileHover` with `whileFocus` to ensure focusability for keyboard users. Combine with Tailwind's `focus-visible:ring-2 focus-visible:outline-none` for explicit visible focus indicators. Apply `pointer-events-none` to fixed containers with `*:pointer-events-auto` applied to child elements to make only the buttons interactive. Append `alt=""` and `aria-hidden="true"` to strictly decorative graphics where contextual `aria-label`s are already defined.

## 2026-06-24 - Hamburger Menu Accessibility
**Learning:** Custom animated icon-buttons built with Framer Motion frequently omit standard ARIA attributes (`aria-label`, `aria-expanded`, `aria-controls`) and focus states, leading to poor screen reader and keyboard accessibility.
**Action:** Always ensure custom icon-buttons receive dynamic ARIA attributes reflecting their state and robust `focus-visible` styles for keyboard navigation.
