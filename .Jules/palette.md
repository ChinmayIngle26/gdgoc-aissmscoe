## 2024-05-18 - [Accessible Framer Motion Hamburger Menus]
**Learning:** When building custom interactive elements like Framer Motion hamburger menus, it is critical to explicitly tie accessibility states (`aria-expanded`, dynamic `aria-label`) and `aria-controls` to the React state variables controlling the visual transitions. Otherwise, screen reader users miss crucial context about the menu state.
**Action:** Always add `aria-expanded`, `aria-label` (toggling Open/Close), and `aria-controls` to custom menu toggles, and pair with `focus-visible` states for keyboard navigation.
