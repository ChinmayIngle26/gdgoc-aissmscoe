## 2024-04-16 - Member Card Interactive Elements Support

**Learning:** When revealing hidden elements on hover using Tailwind's `group-hover:translate-y-0`, it's critical to pair it with `group-focus-within:translate-y-0`. Without this, the hidden elements are invisible to keyboard users navigating via Tab. Additionally, when using `aria-label` on interactive elements (like icon-only links), inner decorative SVGs/images must include `aria-hidden="true"` and `alt=""` to prevent redundant screen reader announcements.

**Action:** Always combine `group-hover` with `group-focus-within` for hidden interactive content and strictly apply `aria-hidden="true"` to child icons of ARIA-labeled components.
