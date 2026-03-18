
## 2024-05-24 - Missing Focus Animations and Copy-Paste Errors
**Learning:** Found a common pattern in Framer Motion components where developers use `whileHover` for animations but forget to include `whileFocus`, breaking keyboard accessibility. Also noticed copy-paste errors in `aria-label`s across similarly structured components (e.g., all social buttons had "Join Whatsapp Group" as their label).
**Action:** When implementing or reviewing `framer-motion` components, always pair `whileHover` with `whileFocus` for interactive elements. Double-check all `aria-label`s and `alt` texts when duplicating component structures. Add explicit focus-visible classes (`focus-visible:ring-2`, etc.) to provide clear focus indicators.
