## 2024-05-24 - Framer Motion Keyboard Accessibility
**Learning:** Components using Framer Motion's `whileHover` do not automatically apply the same animations for keyboard focus, leading to an inaccessible experience for keyboard users.
**Action:** Always pair `whileHover` with `whileFocus` for Framer Motion interactive components to ensure animations are accessible via keyboard navigation.
