
## 2025-02-18 - Framer Motion Keyboard Accessibility
**Learning:** Adding hover animations via Framer Motion (`whileHover`) onto interactive elements doesn't inherently translate to keyboard focus. Keyboard users miss out on those interactive visual cues if focus styles or `whileFocus` are missing.
**Action:** Always pair `whileHover` with `whileFocus` for Framer Motion components and explicitly define `focus-visible` styles with Tailwind to ensure robust accessibility for keyboard navigation.
