## 2024-05-20 - Navbar Hamburger Accessibility
**Learning:** Hamburger menus using framer-motion lack native accessibility states; tying `aria-expanded` to the React state variable (`menuOpen`) and providing a dynamic `aria-label` ensures screen readers can accurately interpret the menu's state alongside visual transitions.
**Action:** Always add `aria-expanded` tied to the state and dynamic `aria-label` to custom interactive toggles.
