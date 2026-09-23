# The mark

Extracted from the mockups on 22 Sept 2026, artifact version 574. Identical in
all five direction-D artboards, so this is the canonical version — it is the
one you are looking at on the canvas, not the older file in
`~/Downloads/portfolio`, whose colours are wrong.

A sitting rabbit in profile: one filled ribbon for the body, and the amber dot
as its **tail**. 280 × 336 viewBox, drawn at 27 × 32 on the mockups.

## Two files, and they are not interchangeable

| File | Body fill | Use it for |
|---|---|---|
| `mark.svg` | `#F7F5F0` | `<img src>`, favicons, anywhere the SVG is a separate document |
| `mark-inline.svg` | `currentColor` | pasting into a component, so the body follows the surrounding `color` |

`currentColor` does **not** inherit through `<img>` — an `<img src="mark-inline.svg">`
renders the body black on the dark ground. That is not a bug in the file; it is
what `currentColor` means. If you are reaching for `<img>`, you want `mark.svg`.

The tail is `#E8B848` in both. It is the amber dot doing one of its five jobs,
so it is not subject to the surrounding colour. The one exception is hover and
focus on the header lockup (below).

## Rules

- Minimum size **16px**. Legible there, so there is no small variant and none
  should be drawn.
- Clear space is **one tail-dot diameter** on every side.
- The body may take any colour that clears contrast on its ground. On the
  mockups it is `--c-headline` `#F7F5F0`. The tail stays amber.
- Do not recolour the tail, do not add a second dot, do not outline the body.
- **Exception, hover and focus only:** when the mark is a link (the header
  lockup), the whole lockup takes `--c-orange` on hover and focus-visible:
  body, name *and* tail. That is orange doing its one job, so it is the only
  time the tail leaves amber. At rest the tail is always amber.

## Where it appears

Top-left of the content column on every page — in the header plate
(`#162214`), linking home. Never in the rail.
