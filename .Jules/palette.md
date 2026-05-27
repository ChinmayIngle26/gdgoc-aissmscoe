## 2024-05-27 - Social Float Buttons Layout and A11y

**Learning:** Fixed flex containers that group interactive floating elements (like social media buttons) can create an invisible bounding box that blocks pointer events to the underlying page content. Framer Motion width animations squash internal flex children (like icons) if they lack the `shrink-0` class. Decorative icons inside buttons with an `aria-label` create redundant noise for screen readers. Framer Motion hover animations are inaccessible to keyboard users without explicitly pairing them with `whileFocus` and focus-visible styles.

**Action:**
- Apply `pointer-events-none` to the fixed container and `*:pointer-events-auto` to its interactive children.
- Use `flex-col` with `items-end` to stack floating buttons dynamically, replacing error-prone manual `absolute` offsets.
- Always add `shrink-0` to images/icons inside auto-expanding flex containers.
- Pair `whileHover` with `whileFocus` and add `focus-visible:ring-2 focus-visible:outline-none` for keyboard support.
- Set `alt=""` and `aria-hidden="true"` on decorative images nested within elements that already provide an `aria-label`.
