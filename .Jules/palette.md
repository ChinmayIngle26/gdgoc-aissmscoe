## 2025-04-26 - Hamburger Menu Accessibility
**Learning:** When building custom interactive elements like Framer Motion hamburger menus, we must explicitly tie accessibility states (`aria-expanded`, dynamic `aria-label`) and `aria-controls` referencing the ID of the expanded container to the React state controlling visual transitions.
**Action:** Always pair visual state changes (like hamburger morphing) with semantic ARIA updates, and provide clear keyboard focus styles (`focus-visible:ring-2`) since custom buttons don't have default browser outlines.
