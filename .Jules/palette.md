## 2024-03-08 - Copy-Paste Accessibility Errors and Icon-Only Buttons
**Learning:** Copy-pasting components (like LinkedinButton from WhatsappButton) often copies incorrect `aria-label`s, which is highly detrimental to accessibility. Icon-only interactive elements (like the Hamburger menu and social links) frequently lack necessary `aria-label`s.
**Action:** Always verify `aria-label`s when duplicating components. Ensure all icon-only buttons and links have descriptive `aria-label`s and use `aria-expanded` on toggle elements.
