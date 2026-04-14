
## 2024-05-18 - Pairing group-hover with group-focus-within
**Learning:** When using Tailwind's `group-hover` to reveal hidden interactive elements (like social links animating into view), keyboard users navigating via Tab will focus the elements while they remain visually hidden off-screen.
**Action:** Always pair `group-hover` with `group-focus-within` (e.g., `group-hover:translate-y-0 group-focus-within:translate-y-0`) on the parent container to ensure the revealed content is natively accessible to keyboard users.
