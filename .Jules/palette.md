## 2026-05-07 - Ensure Decorative Framer Motion Images are Ignored by Screen Readers
**Learning:** When using `<motion.a>` for social links that expand on hover and already have an `aria-label`, child `<img>` tags for the icons will be read redundantly by screen readers unless explicitly marked as decorative.
**Action:** Always add `alt=""` and `aria-hidden="true"` to decorative child images within interactable elements (like links/buttons) that already possess an `aria-label`.
