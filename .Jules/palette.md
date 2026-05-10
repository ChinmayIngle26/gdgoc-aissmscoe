## 2024-05-10 - Keyboard Accessibility for Framer Motion Animations
**Learning:** When using Framer Motion animations triggered by hover states (`whileHover`), these animations are not accessible to keyboard users natively navigating via Tab.
**Action:** Always pair `whileHover` with `whileFocus` to ensure the same interactive animations are triggered for keyboard users. Combine this with Tailwind classes like `focus-visible:ring-2 focus-visible:outline-none` for clear visual focus indicators.
