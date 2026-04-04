## 2026-04-04 - Member Card Social Links Accessibility
**Learning:** Interactive elements nested within parent elements using `group-hover` transitions to appear are invisible to keyboard users. When using `group-hover` to reveal links or buttons, it's critical to also add `group-focus-within` to the container so the child interactive elements become visible and usable when receiving focus via keyboard tabbing.
**Action:** Always pair `group-hover` with `group-focus-within` when building interactive reveal effects to ensure keyboard accessibility.
