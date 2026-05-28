## 2026-05-28 - Dynamic ARIA Labels for Framer Motion Toggles
**Learning:** When building custom animated interactive elements like hamburger menus that handle their own structural rendering with motion hooks, native accessibility is often completely lost. Screen readers cannot infer the interaction.
**Action:** Always explicitly map the React state controlling the animation to ARIA attributes: aria-expanded, dynamic aria-labels, and aria-controls explicitly linking to the ID of the dynamically rendered container.
