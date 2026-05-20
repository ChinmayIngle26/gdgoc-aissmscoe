
## 2026-05-20 - Floating Interactive Elements and Framer Motion Focus
**Learning:** When creating floating social overlays that expand on hover, a container with `pointer-events-none` and `*:pointer-events-auto` allows children to be clickable without the container's bounding box blocking clicks on underlying page content. Also, Framer Motion elements using `whileHover` must always include matching `whileFocus` props to ensure identical expansion animations are accessible via keyboard navigation.
**Action:** Apply `pointer-events-none` to fixed/absolute containers holding floating interactive elements, use `*:pointer-events-auto` on the elements themselves, and always pair `whileFocus` with `whileHover` for animated UI controls.
