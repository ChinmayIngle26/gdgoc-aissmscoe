## 2024-06-29 - Fixed social button click blocking
**Learning:** Fixed or absolute containers grouping interactive elements can block clicks on underlying content.
**Action:** Apply `pointer-events-none` to the container and `*:pointer-events-auto` to the interactive children to allow click-through while maintaining child interactivity.
