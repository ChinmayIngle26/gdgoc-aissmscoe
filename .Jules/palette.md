## 2024-05-24 - Floating Action Button Layout & Pointer Events
**Learning:** Fixed flex containers used to group social buttons (`fixed right-4 bottom-4 flex flex-col items-end`) create an invisible bounding box that blocks clicks on underlying page content. Hardcoding absolute positions on individual buttons is fragile.
**Action:** Use `pointer-events-none` on the fixed parent container, and `*:pointer-events-auto` to re-enable clicks on the child buttons. This allows clean flexbox stacking without blocking the main UI.

## 2024-05-24 - Framer Motion Keyboard Accessibility
**Learning:** Components using Framer Motion's `whileHover` for visual expansion completely ignore keyboard users navigating via Tab, causing an unequal, confusing experience.
**Action:** Always pair `whileHover` with `whileFocus` to ensure keyboard navigation triggers the identical animation. Combine with `focus-visible:ring-2 focus-visible:outline-none` for standard accessibility styling.
