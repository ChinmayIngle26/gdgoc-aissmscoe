1. Read the complete files individually using `cat`
   - Read the un-truncated portions of `app/components/LinkedinButton.jsx`, `app/components/DiscordButton.jsx`, `app/components/WhatsappButton.jsx`, and `app/page.jsx` to fully discover the code before modifying it. Also read `.Jules/palette.md` to discover its current content and verify its existence.
2. Modify social buttons to improve keyboard accessibility and fix ARIA labels
   - Update `app/components/LinkedinButton.jsx`, `app/components/DiscordButton.jsx`, and `app/components/WhatsappButton.jsx` to include `whileFocus` for Framer Motion, `focus-visible` classes, `aria-hidden="true"` and empty `alt` on purely decorative images, and `shrink-0` on images. Remove manual `absolute` positioning.
3. Verify modifications to social buttons
   - Run `cat app/components/LinkedinButton.jsx`, `cat app/components/DiscordButton.jsx`, and `cat app/components/WhatsappButton.jsx` to unconditionally verify the changes.
4. Modify `app/page.jsx` container layout
   - Update the container for social buttons in `app/page.jsx` to use `items-end pointer-events-none *:pointer-events-auto` so it correctly stacks the buttons without blocking pointer events on the page.
5. Verify modification to `app/page.jsx`
   - Run `cat app/page.jsx` to unconditionally verify the layout change.
6. Document critical UX learnings
   - Append learning about Framer Motion keyboard accessibility and fixed container pointer events to `.Jules/palette.md`.
7. Verify modification to `.Jules/palette.md`
   - Run `cat .Jules/palette.md` to unconditionally verify the new entry.
8. Test logic and run format/lint commands
   - Create a static HTML file mocking the component structure, then write a Python script to verify focus states. Run `pnpm lint` and verify no errors are present.
9. Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
10. Submit the change
    - Use the submit tool to push the changes with the appropriate PR title and description.
