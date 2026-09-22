# napapupu-portfolio

Alice Winter's portfolio site. A dark, index-first portfolio: the homepage is
not a hero, it is a filterable index of the work, with a rail down the right
edge carrying the site's controls and marginalia.

Planned build: **Astro**, static, deployed on Netlify, Vercel or Cloudflare
Pages (undecided). Nothing is scaffolded yet.

## Before writing any UI, read these

1. `design/tokens.css` — colour and type, with each accent's fixed role.
2. `design/README.md` — what the reference files are, the rules that bite, the
   behaviour the static snapshots cannot show, and the known dirt in them.
3. `design/brief.md` — the agreed direction, if you need the reasoning.

`design/reference/*.html` are **frozen snapshots for eyeballing**, exported
from the design canvas on 22 Sept 2026. Open them in a browser to check your
work looks right. Never import them, never copy their inline styles wholesale,
and never treat their fixed 1440px frames as a responsive spec — that width is
a canvas constraint, not a design decision.

`design/content/*.json` is the real content model. Use it.

## Non-negotiables

- **Accent roles.** Amber `--c-amber`: the dot, links, the one primary button,
  anything gated. Orange `--c-orange`: hover and focus, nothing else. Pink
  `--c-pink`: annotation — marks on someone else's material, never UI. Leaf
  `--c-leaf`: status. An accent used decoratively is a bug.
- **`#6E7F69` is banned** (4.2:1). Use `--c-faint` `#7E8F78`. It survives in
  the older mockups and in the reference snapshots; do not carry it across.
- **Body weight 300, headings 500.** Not 400.
- **Negative letter-spacing above 21px only.**
- **The dotted grid belongs to the content column**, never the rail.
- **Touch targets ≥ 44px.** Real `<button>` / `<a href>` / `<label>` elements;
  never `onClick` on a div; `aria-label` on icon-only buttons.
- **Dark is the only mode.** Do not add a light theme on your own initiative —
  the dark accents fail as text on light and the substitutes are decided but
  not designed.
- **Project key colours come from the client**, not from the palette. Two
  gates: 4.5:1 on the ground, and it must not read as amber, orange or pink.

## When the design changes

The canvas is the source of truth and it keeps moving:
https://claude.ai/artifact/K5EYevqnGK3ip3WTTiQgUj

Re-export `design/` rather than editing the snapshots to match. If you find
yourself adjusting a reference file, stop — you are editing a photograph.

## House rules

- Do not commit or push unless asked.
- Placeholders in the content (`[YOUR ...]`, `[YEAR]`) are deliberate. Leave
  them visible rather than inventing plausible copy, metrics or project names.
- Some of the work is under NDA and sits behind a request-access layer. The
  public layer has to be complete on its own.
