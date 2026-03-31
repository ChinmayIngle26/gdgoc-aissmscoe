## 2024-05-24 - Framer Motion Keyboard Accessibility
**Learning:** Interactive components using `framer-motion`'s `whileHover` are naturally not triggered during keyboard navigation (tabbing). This hides interactive feedback from users relying on assistive tech or keyboards.
**Action:** Always pair `whileHover` with `whileFocus` to mirror the hover interaction, and combine it with Tailwind's `focus-visible:ring-2` to provide unmistakable focus outlines.
