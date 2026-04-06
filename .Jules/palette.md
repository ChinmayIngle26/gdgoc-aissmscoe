## 2024-04-06 - Copy-pasted ARIA labels and framer-motion keyboard support
**Learning:** Social/icon buttons often have copy-pasted `aria-label`s that do not match their actual content (e.g., LinkedIn button had "Join Whatsapp Group"). Additionally, buttons using framer-motion `whileHover` to reveal text are inaccessible to keyboard users unless paired with `whileFocus` and `focus-visible` styles.
**Action:** When fixing icon-only or expanding buttons, always verify the `aria-label` text, pair `whileHover` with `whileFocus`, and ensure visible focus states are present.
