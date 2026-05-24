## 2024-05-15 - Hamburger Menu Accessibility
**Learning:** Custom interactive elements like Framer Motion hamburger menus often lack native semantic meaning. Without explicit ARIA attributes, screen readers cannot announce their state or purpose.
**Action:** Always add dynamic `aria-label` ("Open menu" / "Close menu"), `aria-expanded` (linked to state), and `aria-controls` (linking to the menu container ID) to toggle buttons, along with visible focus states for keyboard navigation.
