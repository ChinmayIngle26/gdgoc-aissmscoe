## 2025-01-24 - Accessible Expandable Floating Action Buttons
**Learning:** Expanding action buttons utilizing Framer Motion's `whileHover` can become inaccessible for keyboard navigation. Additionally, floating button containers block interaction on underlying elements. Screen readers vocalize purely decorative icons inside interactive buttons with `aria-label` attributes.
**Action:** Pair `whileHover` with `whileFocus` to ensure focusability for keyboard users. Combine with Tailwind's `focus-visible:ring-2 focus-visible:outline-none` for explicit visible focus indicators. Apply `pointer-events-none` to fixed containers with `*:pointer-events-auto` applied to child elements to make only the buttons interactive. Append `alt=""` and `aria-hidden="true"` to strictly decorative graphics where contextual `aria-label`s are already defined.

## 2025-02-19 - Accessible Hover-Reveal Social Links
**Learning:** Social links revealed via CSS `group-hover` become invisible and inaccessible to keyboard users tabbing through the page. Additionally, icon-only links require `aria-label`s for screen readers, and the SVGs themselves should be hidden from accessibility trees.
**Action:** Always pair `group-hover` with `group-focus-within` on the parent container. Apply explicit `focus-visible` styles to the links, use descriptive `aria-label`s, and set `aria-hidden="true"` on the child icons.
