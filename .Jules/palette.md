## 2024-05-15 - Hamburger Menu Accessibility
**Learning:** Custom Framer Motion hamburger toggles often lack native ARIA attributes, leaving screen reader users without context about their purpose or state.
**Action:** Always explicitly tie `aria-expanded`, dynamic `aria-label`, and `aria-controls` to the React state variables controlling the visual menu transitions.
## 2024-05-15 - Focus Visibility on Reveal Elements
**Learning:** Elements hidden by `translate-y-full` and revealed on `group-hover:translate-y-0` are completely inaccessible to keyboard users because they cannot hover, and when they tab into the hidden links, the links receive focus but remain hidden off-screen or clipped by overflow.
**Action:** Always pair `group-hover` with `group-focus-within` to ensure hidden interactive elements become visible when keyboard navigation enters their container.
