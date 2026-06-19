## 2025-01-24 - Accessible Expandable Floating Action Buttons
**Learning:** Expanding action buttons utilizing Framer Motion's `whileHover` can become inaccessible for keyboard navigation. Additionally, floating button containers block interaction on underlying elements. Screen readers vocalize purely decorative icons inside interactive buttons with `aria-label` attributes.
**Action:** Pair `whileHover` with `whileFocus` to ensure focusability for keyboard users. Combine with Tailwind's `focus-visible:ring-2 focus-visible:outline-none` for explicit visible focus indicators. Apply `pointer-events-none` to fixed containers with `*:pointer-events-auto` applied to child elements to make only the buttons interactive. Append `alt=""` and `aria-hidden="true"` to strictly decorative graphics where contextual `aria-label`s are already defined.

## 2025-01-24 - Keyboard Accessible Hover Overlays
**Learning:** Using Tailwind's `group-hover` for revealing elements (like social links over a profile card) makes them completely inaccessible via keyboard navigation.
**Action:** Always pair `group-hover` with `group-focus-within` on the parent container. Add `focus-visible:ring-2 focus-visible:outline-none` and descriptive `aria-label`s to the interactive child elements to ensure clear visible focus and screen reader support.
