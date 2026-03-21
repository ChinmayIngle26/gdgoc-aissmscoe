## 2026-03-21 - Missing ARIA Labels on Navigation Menu Button
**Learning:** The hamburger menu button in the navigation lacked an `aria-label` and `aria-expanded` attribute, making it difficult for screen reader users to understand its purpose and state.
**Action:** Add `aria-label="Toggle menu"` and `aria-expanded={menuOpen}` to hamburger menu buttons for better accessibility.
