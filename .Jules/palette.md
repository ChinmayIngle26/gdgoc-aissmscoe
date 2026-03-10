
## 2025-03-10 - Dynamic ARIA labels for Data-driven Social Links
**Learning:** When generating multiple identical-looking social links from a data source (like team members), statically setting `aria-label="GitHub"` results in screen readers reading "GitHub, link. GitHub, link. GitHub, link." without context of whose GitHub it is. This is a common pattern in team roster components.
**Action:** Always interpolate the entity's name into the ARIA label for data-driven links (e.g., `aria-label={`${member.name}'s GitHub profile`}`). Also, always verify that copy-pasted buttons (like floating action buttons) have their `aria-label` updated to match their new function.
