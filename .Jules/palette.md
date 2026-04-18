
## 2024-05-18 - Navbar Hamburger Menu Accessibility
**Learning:** Found that custom animated interactive elements (like framer-motion menu buttons without native `<button>` labels) often miss ARIA attributes completely. Screen readers need `aria-expanded` tied to the state variable to announce open/close actions, and a clear `focus-visible` ring is necessary for keyboard navigation.
**Action:** Always check custom interactive elements (hamburgers, toggles, custom selects) for proper ARIA roles/labels, keyboard focus rings (`focus-visible:ring-2`), and state communication (`aria-expanded`, `aria-pressed`).
