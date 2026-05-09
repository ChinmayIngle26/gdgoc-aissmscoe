
## 2024-05-10 - Mobile Menu Accessibility Enhancements
**Learning:** For Framer Motion interactive UI toggles (like the hamburger menu in Next.js 15), simply animating visual states without updating semantic accessibility attributes (`aria-expanded`, dynamic `aria-label`, and `aria-controls` referencing an explicit ID) fails screen readers. Focus states for such toggle buttons also need explicit `focus-visible` to support keyboard navigation.
**Action:** Always tie accessibility attributes (`aria-expanded`, dynamic `aria-label`, and `aria-controls`) to the exact React state variable driving visual transitions. Add explicit `focus-visible:ring-2` to Framer Motion animated buttons.
