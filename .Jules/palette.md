## 2024-05-09 - Accessible Framer Motion Hamburger Menu
**Learning:** Hamburger menus controlled by Framer Motion state variables must communicate their state to screen readers.
**Action:** Always tie interactive element accessible states (`aria-expanded`, dynamic `aria-label`, `aria-controls` referencing an ID) to the React state controlling the visual transitions. Add `focus-visible` styling for keyboard navigation along with `whileFocus` / `whileHover` animations.
