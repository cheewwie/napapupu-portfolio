# Portfolio 2026 — agreed direction

Copied verbatim from the project doc of the same name, status as of 21 Sept
2026. Two canvases: "Portfolio 2026 — Three Directions" (the layouts; direction
D is live, A/B/C kept as reference) and "Brand identity — Alice Winter" (mark,
colour, type, the dot).

> **Note for the build:** use `design/brand/mark.svg`, extracted from the
> mockups themselves. The `Bunnyrabbit.svg` referenced below, in
> `~/Downloads/portfolio`, has the wrong colours — do not use it.

## The concept

A dark, index-first portfolio. The homepage is not a hero — it is a filterable
index of the work, and a rail on the right edge carries the site's controls and
marginalia. Explored as three directions (Field Notes, Dusk, The Index) and
merged into one: the Index's structure, the Field Notes rail, dark by default.

## What the site has to do

Win freelance and consulting work, support a job search, and be somewhere Alice
gets to design without a client brief. Some work is publishable, some is under
NDA and sits behind a request-access layer.

## Colour

Palette is "Taiga Sunset" from the Portfolio-2026 Figma file: Pine Shadow
#1A2818, Forest Canopy #385030, Sunset Orange #F09050, Hot Pink Wisp #E06878,
Amber Glow #E8B848. Dark is the default and, for now, the only mode. Ground
#101A11, rail #0B120C, surface #17241A, hairline #1D2A1B, rule #38492F;
headline #F7F5F0, body #EDEAE2, muted #9FB09A, faint #7E8F78, leaf #75A368.

Roles, fixed: **amber** is the dot in all five of its jobs, links, the one
primary button, and anything gated. **Orange** is interaction — hover and
focus, everywhere. **Pink** is annotation — every mark made on someone else's
material. **Green (Leaf on dark)** is status — available, open, positive.
**Pine Shadow** is the ground.

**Project keys come from the client**, not from the palette, so the set grows
with the work. Two gates: the colour must clear 4.5:1 on the ground, and it
must not read as amber, orange or pink. Nudge lightness to pass rather than
substituting; fall back to Leaf only if it can't be saved. The NDA project has
no client colour and will probably take amber, since amber already means gated.
The three mockup projects still use leaf/orange/pink as placeholders and will
be fixed when real project data goes in.

Contrast on the ground: headline 16.4:1, body 14.8:1, muted 7.8:1, faint 5.2:1,
amber 9.7:1, orange 7.5:1, leaf 6.1:1, pink 5.5:1 — all clear AA. #6E7F69, used
in the earliest mockups, fails at 4.2:1. On a light ground orange (2.2:1) and
pink (3.0:1) fail as text and need #8D400C and #A92335.

## Type

One voice in two widths: Space Grotesk for display and body, Space Mono for
captions, labels, refs and metadata. Recursive is the standing alternative.
Mono for body was tested and rejected. Body is weight 300, headings 500.
Negative tracking above 21px only.

## The mark and the dot

The mark is `Bunnyrabbit.svg` (in `~/Downloads/portfolio` on r2626): a sitting
rabbit in profile, one filled ribbon, amber dot as its **tail**, body set to
`currentColor`. Legible to 16px, so no small variant needed. Clear space is one
tail-dot diameter; minimum size 16px.

The dot does five jobs: the tail, every headline full stop, the index row
marker, the rail position marker, and the availability indicator.

The dotted grid: 24px spacing, 6% white, 1.1px dot with the transparent stop at
1.2px, offset 12px. Content column only — never the rail.

**Provisional:** "real human beings" on the homepage is circled in Hot Pink
Wisp, borrowing the annotation gesture from the marked-up draft. Applied to
D · Home but deliberately not yet in the identity; promote it to a sixth dot
job if it survives.

## Layout

The rail sits on the right. Content leads from the left margin; identity sits
top-left of the content column, not in the rail. On the homepage the rail holds
the filters — access first, then sector. On a case study it becomes "on this
page" chapter navigation.

The index has two zones: projects get rich rows (plate, title, one line,
sector, device, year, access) under column labels; writing and speaking drop to
a quiet "Also" list that hides when a sector is picked. "How I work" sits below
Also with the three tiles carried from Field Notes.

Case study: hero visual after the title and spec strip, never before, with a
caption stating what it is and what stays under NDA.

**Four case-study variants exist and one needs choosing:** rail open (artefacts
in a 380px panel), margin closed, artefacts inline (beside each paragraph), and
artefacts below the text (breaking the column, full 760px measure). The last is
the most readable and the one I'd build; it also forces a sentence after each
artefact, which improves the writing.

## Confidentiality

The public layer is complete on its own. The gated layer holds artefacts,
screens and client names, released on request rather than behind a password.
Gated entries state what is inside before the reader asks.

## Content carried over

"I design solutions for real human beings" stays. Projects: the digital Key
Account Manager (MyJellybean, anonymised, 2021), the International Ski
Federation mobile app, Treffit24. Name is Alice Winter. Metrics are still
placeholders.

## Open

Which case-study variant to build. Whether the "Also" list earns its place.
Mobile, where the right rail has to become something else. Windows scrollbars
sitting hard against a right rail. Swapping #6E7F69 for #7E8F78 across the
older mockups.

## Next

Design continues on the Claude Design canvases. Then the static-site build:
Astro under consideration, deployment on Netlify, Vercel or Cloudflare Pages,
plus domain and SSL. Figma is not a Claude Design connector, so it stays the
source of the logo vector rather than the design environment.
