## 2026-03-28 - Interactive Element Accessibility
**Learning:** When using tailwind `group-hover` to reveal visually hidden interactive elements like `<Link>` components on hover, the `group-focus-within` pseudo-class is strictly required to ensure the elements become visible when accessed via keyboard tabbing.
**Action:** Pair `group-hover` visibility classes with `group-focus-within` equivalents, and add `focus-visible` utility classes + descriptive `aria-label`s for any links containing only icons.
