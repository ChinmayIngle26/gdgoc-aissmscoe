## 2024-05-14 - Hamburger Menu Accessibility Context
**Learning:** The custom Framer Motion hamburger menu in this project lacked basic accessibility attributes (aria-label, aria-expanded, aria-controls) and visual focus indicators for keyboard navigation, making it functionally invisible to screen readers and difficult to use via keyboard.
**Action:** Always verify custom interactive toggles map their visual state (`menuOpen`) to semantic ARIA attributes and provide explicit `:focus-visible` styling, especially when hiding native button semantics behind motion components.
