## 2026-04-26 - Explicitly Tying Framer Motion States to Accessibility
**Learning:** When building custom interactive elements (like Framer Motion hamburger menus), the visual transitions must be explicitly tied to accessibility states like `aria-expanded`, dynamic `aria-label` attributes, and `aria-controls`.
**Action:** Always bind the React state variables controlling the visual transitions to the appropriate ARIA attributes to ensure screen readers stay synced with the UI state.
