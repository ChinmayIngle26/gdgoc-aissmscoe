## 2024-03-24 - Floating Interactive Elements with Framer Motion

**Learning:**
1. Framer Motion's `whileHover` prop does not automatically handle keyboard focus states. Relying solely on `whileHover` for interactive animations means keyboard users (navigating via Tab) will miss out on visual cues and expanded content.
2. Floating fixed action buttons that use `absolute` positioning to stack on top of each other can cause overlap issues and hardcode positions. When they expand horizontally on hover, images without `shrink-0` can get squashed during the width transition.
3. Placing floating buttons in a fixed container can cause the container's bounding box to block clicks on underlying page content.

**Action:**
1. Always pair `whileHover` with an equivalent `whileFocus` prop on `motion` elements to ensure keyboard accessibility, along with standard Tailwind `focus-visible` classes (e.g., `focus-visible:ring-2 focus-visible:outline-none`).
2. Use a `flex-col` with `items-end` to stack expanding floating buttons instead of hardcoding `absolute` positions.
3. Apply `shrink-0` to images/icons inside horizontally expanding flex containers.
4. When grouping floating interactive elements in a fixed container, apply Tailwind's `pointer-events-none` to the container and `*:pointer-events-auto` to its children. This prevents the invisible container bounds from intercepting clicks meant for the page underneath, while keeping the buttons themselves clickable.
