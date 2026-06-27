## 2025-01-24 - Accessible Expandable Floating Action Buttons
**Learning:** Expanding action buttons utilizing Framer Motion's `whileHover` can become inaccessible for keyboard navigation. Additionally, floating button containers block interaction on underlying elements. Screen readers vocalize purely decorative icons inside interactive buttons with `aria-label` attributes.
**Action:** Pair `whileHover` with `whileFocus` to ensure focusability for keyboard users. Combine with Tailwind's `focus-visible:ring-2 focus-visible:outline-none` for explicit visible focus indicators. Apply `pointer-events-none` to fixed containers with `*:pointer-events-auto` applied to child elements to make only the buttons interactive. Append `alt=""` and `aria-hidden="true"` to strictly decorative graphics where contextual `aria-label`s are already defined.

## 2025-01-25 - Accessible Hover-Revealed Actions
**Learning:** Interactive elements revealed solely via `group-hover` are inaccessible to keyboard users, as tab navigation does not trigger hover states.
**Action:** Always pair `group-hover` with `group-focus-within` on the container element. Combine this with appropriate `aria-label`s on icon-only links and explicit focus indicators (e.g., `focus-visible:ring-2 focus-visible:outline-none`) to ensure keyboard navigability and screen reader support.
