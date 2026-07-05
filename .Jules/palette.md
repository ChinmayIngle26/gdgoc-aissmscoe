
## 2025-03-09 - Accessible Framer Motion Hover States
**Learning:** When using Framer Motion's `whileHover` for dynamic elements, keyboard users miss the visual interaction without an equivalent `whileFocus`. It's also critical to pair it with Tailwind's `focus-visible` classes for a clear focus ring, as browsers don't natively highlight `motion.a` elements consistently.
**Action:** Always pair `whileHover` with `whileFocus` in Framer Motion components, and explicitly add `focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-2` to interactive elements.
