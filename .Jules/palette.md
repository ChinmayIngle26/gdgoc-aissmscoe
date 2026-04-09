## 2025-04-10 - Keyboard Accessible Reveal Patterns
**Learning:** When using Tailwind's `group-hover` to reveal hidden interactive elements (like social links over a team member's card), the elements remain inaccessible to keyboard users navigating via Tab because hover isn't triggered.
**Action:** Always pair `group-hover:translate-y-0` (or similar reveal utilities) with `group-focus-within:translate-y-0` to ensure the content is naturally revealed and accessible when child elements receive keyboard focus.
