## 2024-05-23 - Custom Animated Menus and Floating Action Buttons Need Explicit Accessibility
**Learning:** Animated icon-only buttons (like Framer Motion hamburger menus) and copied floating action buttons often lack correct `aria-label`, `aria-expanded` attributes and keyboard focus states because their text content is either missing or visually hidden.
**Action:** Always verify `aria-label` and `aria-expanded` on custom toggle buttons, and ensure copy-pasted buttons have updated accessibility labels to match their new context.
