## 2023-10-27 - Framer Motion Interactive Component Accessibility
**Learning:** For interactive components using Framer Motion's `whileHover` to reveal content, keyboard accessibility is critical. If `whileHover` isn't paired with `whileFocus`, keyboard users navigating with Tab cannot trigger the animation to read the hidden text. Also, native focus indicators must be explicitly provided (e.g., `focus-visible:ring-2`).
**Action:** Always pair `whileHover` with `whileFocus` for Framer Motion interactive elements, and add `focus-visible:ring` to ensure clear focus states.
