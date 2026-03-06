## 2024-03-24 - Framer Motion Keyboard Accessibility
**Learning:** When using `framer-motion` to reveal information via `whileHover` (like expanding an icon button to show text), keyboard-only users miss this context since `whileHover` doesn't trigger on focus.
**Action:** Always pair `whileHover` with `whileFocus` in Framer Motion elements to ensure keyboard navigators receive the same UX and information as mouse users.
