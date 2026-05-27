## 2024-05-27 - [Social Interaction Overlays]
**Learning:** Fixed flex containers that overlay interactive floating elements (like social links) often block clicks on the content underneath due to their bounding box.
**Action:** Apply `pointer-events-none` to the container and `*:pointer-events-auto` to its children. This makes the container "invisible" to clicks while keeping the buttons themselves interactive.

## 2024-05-27 - [Framer Motion Expandable Buttons]
**Learning:** When expanding button widths on hover with Framer Motion, internal flex children (like icons) might squish during the transition, and hover states alone are inaccessible to keyboard users. Also, purely decorative icons need `aria-hidden` and empty `alt`.
**Action:** Use Tailwind `shrink-0` on images inside expanding containers. Always pair `whileHover` with `whileFocus` for keyboard accessibility, and combine with `focus-visible:ring-2 focus-visible:outline-none` for clear visual focus indicators. Decorative SVGs/images must use `alt="" aria-hidden="true"`.
