## 2024-05-18 - Incorrect ARIA Labels and Alt Text from Copy-Pasted Code
**Learning:** Developers often copy-paste similar social media button components (like WhatsApp -> LinkedIn) but forget to update accessibility attributes like `aria-label` and `alt` tags. This creates a confusing experience for screen reader users where a button might look like LinkedIn but announce itself as "Join Whatsapp Group".
**Action:** Always verify `aria-label` and image `alt` text when reviewing duplicated or highly similar UI components.
