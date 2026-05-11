## 2024-05-18 - ARIA attributes on Framer Motion components
**Learning:** Adding `aria-expanded` and `aria-controls` to Framer Motion interactive UI toggles (like hamburger menus) is crucial for screen readers to understand that the button toggles a container visibility.
**Action:** Always link interactive toggles to their respective containers using the `aria-controls` attribute matching the container's `id`.
