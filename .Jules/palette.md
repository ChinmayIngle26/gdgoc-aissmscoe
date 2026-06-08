## 2024-06-08 - Social Floating Buttons Accessibility and Blocking
**Learning:**
1. Fixed overlays using `flex` or `grid` act as an invisible bounding box that blocks clicks on underlying elements (like the Gallery images), even if the container background is transparent.
2. Framer Motion `whileHover` animations are not accessible via keyboard tab navigation, missing crucial visual context for screen reader users or keyboard-only navigators.
3. Explicit `aria-label`s on container elements cause screen readers to announce the label, but nested illustrative images without empty alt text (`alt=""`) and `aria-hidden="true"` cause redundant, confusing dual announcements.
4. Animating container width while using flexbox can accidentally compress images (aspect ratio skewing) if they lack `shrink-0`.
**Action:**
1. Use `pointer-events-none *:pointer-events-auto` on floating fixed containers to allow clicks to pass through empty space.
2. Pair `whileHover` with `whileFocus` and `focus-visible:ring-2 focus-visible:outline-none` for keyboard parity.
3. Apply `alt="" aria-hidden="true"` to purely decorative images within components that already carry an `aria-label`.
4. Apply `shrink-0` to images within flex containers that animate width.
