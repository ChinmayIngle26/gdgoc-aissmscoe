# Palette's Journal

## 2025-01-24 - Social Buttons Keyboard Accessibility & Interaction Container
**Learning:** Framer Motion components using `whileHover` for visibility need `whileFocus` to be keyboard accessible. Images in animating flex containers need `shrink-0` to avoid squashing. Fixed flex containers grouping floating elements obstruct clicks on underlying page content if not configured properly.
**Action:** Always pair `whileHover` with `whileFocus` for interactive elements. Apply `shrink-0` to static-sized children in flex-width animations. Use `pointer-events-none` on the fixed wrapper and `*:pointer-events-auto` on its children to allow click-through while maintaining button interactability.
