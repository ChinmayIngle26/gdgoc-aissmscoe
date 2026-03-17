## 2024-03-18 - Framer Motion Keyboard Accessibility
**Learning:** Found multiple Framer Motion components using `whileHover` without corresponding `whileFocus` states or visual focus indicators, making them inaccessible for keyboard users.
**Action:** Add `whileFocus` that matches `whileHover` behavior and `focus-visible:ring-2` (or similar) to ensure keyboard navigability for interactive elements.
