## 2024-07-06 - Floating Action Button Container Blocks Clicks
**Learning:** Using a fixed flex container for floating action buttons blocks clicks on the page content underneath the container's bounding box. Framer Motion elements using `whileHover` are inaccessible to keyboard users unless explicitly paired with `whileFocus`.
**Action:** Apply `pointer-events-none` to fixed wrappers and `pointer-events-auto` to interactive children. Always pair `whileHover` with `whileFocus` on Framer Motion components to ensure keyboard accessibility.
