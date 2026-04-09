
## 2024-05-18 - Framer Motion Keyboard Accessibility
**Learning:** Components using Framer Motion's `whileHover` for visual expansion or revelation of elements are inaccessible to keyboard-only users navigating via Tab unless paired with focus states.
**Action:** Always pair `whileHover` with `whileFocus` for Framer Motion components, and combine this with Tailwind's `focus-visible:ring-2 focus-visible:ring-offset-2` to provide clear, native-feeling focus indicators for keyboard navigation.

## 2024-05-18 - Copy-Paste ARIA Label Risk
**Learning:** `aria-label` attributes are frequently missed or incorrect when similar components (like floating social buttons) are duplicated. (e.g., LinkedinButton incorrectly had "Join Whatsapp Group").
**Action:** Always verify the text content of `aria-label` attributes matches the specific component's function when making widespread accessibility updates across similarly-structured files.
