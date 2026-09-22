# design/ — the reference for the build

Frozen from the Claude Design canvas **"Portfolio 2026 — Three Directions"**
on 22 September 2026, artifact version 574.

The canvas is where design happens and it keeps moving. This folder is a
snapshot. When the design changes, re-export — do not edit these files to match
what you remember of the canvas, and do not treat them as the source of truth
for anything except "what did it look like on 22 Sept".

Canvas: https://claude.ai/artifact/K5EYevqnGK3ip3WTTiQgUj

## What is here

| Path | What it is |
|---|---|
| `tokens.css` | Colour and type, with each accent's role written in. **Read this first.** |
| `brief.md` | The agreed direction: concept, colour, type, the mark, layout, confidentiality. |
| `annotation-pattern.md` | How case-study artefacts are annotated, if you generate more. |
| `brand/mark.svg` | The mark, body in ivory. For `<img src>` and favicons. |
| `brand/mark-inline.svg` | The mark, body in `currentColor`. For inlining in a component. |
| `brand/README.md` | Which of the two to use, and the mark's rules. |
| `reference/d-home.html` | The homepage. Static, one state. |
| `reference/d-case-closed.html` | A case study with the margin closed. Static. |
| `reference/d-case-below.html` | The same case study with artefacts below the text. Static. |
| `reference/m-home.html` | Mobile home, rail closed. 390 × 844. |
| `reference/m-home-panel.html` | Mobile home, rail open. |
| `reference/m-case.html` | Mobile case study, rail closed. |
| `reference/m-case-panel.html` | Mobile case study, rail open. |
| `content/projects.json` | The six index rows, exactly as the design carries them. |
| `content/also.json` | The three "Also" rows. Placeholder copy. |
| `assets/` | The nine case-study artefact images, at their native size. |

The three `reference/*.html` files open in a browser with no server and no
build step. They are **reference only**: never import them, never copy their
inline styles wholesale. They exist so that "does this look right" has an
answer.

## How they were made, and what that cost

On the canvas each artboard is a Design Component: wrapped in `<x-dc>`, styled
through `<helmet>`, repeated with `<sc-for>`, filled from `{{ }}` holes
resolved by a `renderVals()` in a `<script type="text/x-dc">` block, and loaded
against a `support.js` runtime.

None of that is web HTML, so the export strips it: the helmet styles were
hoisted into a real `<head>`, the repeats were expanded for **one concrete
state**, and the `/_blob/<id>` image urls — which only resolve inside the
artifact — were repointed at `../assets/`.

Every artboard is a fixed frame with an explicit pixel width and height —
1440px for the desktop snapshots, 390 × 844 for the mobile ones. Those are
canvas constraints, not design decisions, and 390 is a phone-sized artboard
rather than a breakpoint. **Nothing here is responsive and nothing here should
be read as a responsive spec.** The two sets show the same pages at two sizes;
what happens between them is yours to decide.

## The rules that bite

These are the ones that get broken quietly.

- **Accent roles are fixed.** Amber: the dot, links, the one primary button,
  anything gated. Orange: hover and focus, nothing else. Pink: annotation, i.e.
  marks made on someone else's material — never UI. Leaf: status. An accent
  used decoratively is a bug.
- **`#6E7F69` is banned.** It fails at 4.2:1. Use `--c-faint` (`#7E8F78`). It
  survives in the oldest mockups and in parts of these snapshots; do not carry
  it across.
- **Body weight 300, headings 500.** Not 400.
- **Negative letter-spacing above 21px only.** Below that, normal.
- **The dotted grid is content-column only.** Never the rail. 24px, 6% white,
  1.1px dot with the transparent stop at 1.2px, 12px offset.
- **The case-study hero comes after the title and spec strip**, never before,
  and its caption states what it is and what stays under NDA.
- **Touch targets ≥ 44px.** The filter chips and carousel arrows are already
  built to this; keep it.
- **Real elements.** `<button>`, `<a href>`, `<input>` + `<label>`. Never
  `onClick` on a div. Icon-only buttons carry `aria-label`.

## Behaviour the snapshots cannot show

Three things are interactive on the canvas and frozen here.

**The homepage filters.** Three groups in the rail — Access, then User, then
Device, in that order. Each is single-select with an "all" option, and the
three combine with AND. Each chip shows the count it *would* yield given the
other two groups' current state, so the number next to "Open" is the number of
open projects within the current user and device filters, not overall. The
selected chip takes `--c-surface-raised`, `--c-headline` text and an amber dot;
the rest are transparent with a `#3C4F38` dot. When nothing matches, the list
is replaced by "Nothing matches those two filters. Clear one to see more."
The **Also** list (writing and speaking) is visible only when user and device
are both "all" and access is not "on request" — pick a sector or a device and
it hides. `d-home.html` is frozen with nothing filtered: 6 of 6, Also visible.

**The three-dashboards carousel**, chapter 04 of `d-case-below.html`. Three
named tabs — Business owner, Fulfilment manager, Developer — plus prev/next
arrows that wrap, and a "1 / 3" counter. Tabs are named rather than dotted on
purpose: the three dashboards are one screen seen by three roles, not a
sequence, so the control states the artefact's point before anyone clicks.
Frozen on tab one. The other two images are in `assets/`.

**The rail toggle**, which is the difference between the two case-study files.
`d-case-closed.html` is the artefacts hidden; `d-case-below.html` is them
shown. On the canvas these are two artboards; in code they are one page and one
flag. One consequence is already visible: the closed version carries a
pullquote of the vision sentence, and the open version does not, because there
the marked-up draft carries that sentence itself. Both should render from the
same flag rather than being two pieces of content.

## Decided since the export

- **The rail never holds artefacts, on any viewport.** It holds "on this page"
  chapter navigation plus the toggle that shows or hides artefacts *inline with
  the text*. `brief.md` still describes a variant with "artefacts in a 380px
  panel" and the canvas still carries notes saying the same — both are
  superseded. The rail is navigation and one control, nothing else.
- **Mobile: the rail becomes a drawer.** `reference/m-*.html` show it, home and
  case study, closed and open (also on the canvas under "M · Mobile"). The panel is
  `min(80%, 380px)` from the right — 380px being the desktop rail's open width,
  so it is one component at one size that relocates rather than two designs.
  The opener is a bar at the bottom, the same width as the panel and
  right-aligned, whose label is the rail's current state ("6 of 6 · Everything",
  "03 · Explore") rather than an icon. It grows upward into the drawer and stays
  as the panel's footer, flipping to Close, so one target does both. A scrim
  leaves a sliver of page visible so the drawer reads as laid over the content.
  Opening should push a history entry so the back gesture closes it; the page
  behind needs `inert`; focus returns to the opener on close. The chapter value
  tracks scroll (IntersectionObserver over the chapter articles).

## Known dirt — read before porting

- **`d-case-closed.html` has orphaned content.** On the canvas it sits outside
  the artboard root, so it renders nowhere: a stray paragraph beginning "From
  the beginning of 2022, we started prioritising…" and an old vision-draft
  figure with red annotation circles. The export did not strip it. Delete it,
  or decide where it belongs; do not port it blindly.
- **Chapter numbering collides.** A hidden "06 — On request" chapter sits
  alongside "06 Learnings". Unresolved by design, not by accident.
- **The hero eyebrow says "B2B SaaS · Product vision · 2021"** while the index
  calls the project Logistics.
- **Two artefact images are raw workshop boards** — `sme-customer-lifecycle`
  and `customer-story-journeys`. Light ground, tool chrome still in frame, and
  unreadable at the 760px measure. Everything else in `assets/` was made for
  the page. They read as evidence of volume rather than as something to study,
  which may be right, but it is an open question, not a finished decision.
- **Three project dot colours are placeholders** (`content/projects.json`,
  refs 04–06), as are the metrics and the whole `also.json`.
- **The name.** The design says Alice Winter throughout.

## What the build is

Astro, static, deployed on Netlify, Vercel or Cloudflare Pages — undecided.
The rail/content split and the chapter navigation are the only genuine
components. The index rows and the case-study chapters are content: modelling
them as components early will cost more than it saves.

Still open in the design: mobile, where a right rail has to become something
else, and Windows scrollbars sitting hard against that rail.
