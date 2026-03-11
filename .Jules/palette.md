## 2024-03-01 - Missing and incorrect ARIA attributes on Icon-only components

**Learning:** When developing interactive icon-only elements (e.g. social media links, animated buttons, hamburger menus), developers often overlook accessibility, forgetting `aria-label` or copying/pasting incorrectly. In this project, `Member.jsx` lacked dynamic labels, `LinkedinButton.jsx` had a copy-pasted `aria-label` and `alt` attribute for WhatsApp, and the `Navbar.jsx` hamburger menu missed `aria-label` and `aria-expanded` attributes, alongside lacking `focus-visible` styling.

**Action:** Always verify `aria-label`, `alt` attributes, and keyboard focus styling (`focus-visible`) specifically for icon-only buttons, dynamic map-generated link lists, and framer-motion interactive components.
