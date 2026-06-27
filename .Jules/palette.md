## 2024-05-14 - Initialize Journal
**Learning:** Initializing Palette UX journal.
**Action:** Ready to note critical UX learnings.

## 2024-05-14 - Keyboard Access for Animated Flex Buttons
**Learning:** When using Framer Motion's `whileHover` to expand flex container widths (like social buttons), keyboard users miss the content unless paired with `whileFocus`. Additionally, expanding width flex containers can squash child elements (like icons) unless they use `shrink-0`.
**Action:** Always pair `whileHover` with `whileFocus` for interactive elements, add `focus-visible` styling for clear visual focus, and use `shrink-0` on fixed-size child elements within expanding flex containers.
