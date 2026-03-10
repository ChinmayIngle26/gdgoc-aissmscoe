## 2026-03-10 - Keyboard Accessibility on Hover-Expand Elements
**Learning:** Animated elements that expand on hover (like the social floating action buttons) are completely inaccessible to keyboard users unless they also expand on focus. Also, copy-pasting such components often leads to incorrect `aria-label` and `alt` text, confusing screen reader users.
**Action:** Always pair `whileHover` with `whileFocus` on interactive Framer Motion elements. Always double-check `aria-label` and `alt` text when duplicating components.
