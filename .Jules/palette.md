## 2025-04-11 - Group Focus Within for Hidden Overlays
**Learning:** When using Tailwind's `group-hover` to reveal hidden interactive elements (like social links overlaying an image), keyboard users cannot access them via standard Tab navigation if only hover state is targeted.
**Action:** Always pair `group-hover` with `group-focus-within` (e.g., `group-hover:translate-y-0 group-focus-within:translate-y-0`) to ensure the revealed content is natively accessible to keyboard users when any child element receives focus.
