
## 2024-10-24 - Floating Action Button Accessibility
**Learning:** Floating action button containers (like fixed sidebars) can invisibly block pointer events on underlying content. Also, Framer Motion's `whileHover` interactions are inaccessible to keyboard users unless explicitly paired with `whileFocus` and focus-visible indicators.
**Action:** Always apply `pointer-events-none` to fixed containers and `*:pointer-events-auto` to interactive children. Pair `whileHover` with `whileFocus` and `focus-visible` outline styles for all interactive motion components.
