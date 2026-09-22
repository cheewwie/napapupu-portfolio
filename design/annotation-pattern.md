# Case-study annotation pattern

Copied verbatim from the project doc of the same name. Set 22 Sept 2026, built
first on the OmaPosti Pro dashboards. Reusable for the ISF app and Treffit24
case studies so all three read as one system.

Relevant to the build only if you generate more annotated artefacts. The nine
that exist are already rendered as PNGs in `assets/`.

## The gesture

Marker-pen circles and tapering arrows over the screenshot, borrowed from the
vision-draft mark-up. Not vector-perfect ellipses — each circle is an irregular
closed bezier that overshoots slightly where it comes back round, so it reads
as a mark made *on* the work rather than part of it. Arrows arc rather than run
straight, taper from ~1px at the label end to ~3.6px at the tip, and end in two
open barbs, not a filled triangle.

## Colour

Hot Pink Wisp `#E06878` for every mark and every annotation title — the palette
already assigns pink to "annotation: every mark made on someone else's
material", so this is that role doing its job rather than a new decision. 5.5:1
on the ground, clears AA. Applied through one `color:` on the SVG and
`currentColor` on the paths, so the accent is a single tweak.

Annotation body copy is muted `#9FB09A` (7.8:1). Titles 27px/600, body 25px/300,
both Space Grotesk. The eyebrow is Space Mono, uppercase, `#7E8F78`.

## Layout

2400 × 1600 artboard, dark ground with the 24px dotted grid. Title left with
the amber dot as its full stop, mono eyebrow right, hairline rule under.

Screenshot sits in a 1616 × 1010 rounded plate, inset from a 300px label column
on each side and a ~210px band across the top. Labels live in those margins —
never over the screen — and each one carries one arrow to one circle. Top-band
labels are wider (420–470px) and shorter; side labels are 300px.

Anchors are defined in a normalised 2000 × 1250 screen space and mapped onto
the plate, so re-exporting a screen at a different resolution doesn't move any
mark.

**The mono eyebrow is optional and currently unused.** The developer board
carried "OMAPOSTI PRO · DASHBOARD 03 OF 03 · DEVELOPER" while the business-owner
and fulfilment-manager boards had none; Alice removed it on 22 Sept so all three
match. If it ever comes back, it goes on all three or none — paging a carousel
makes an odd one out obvious. The amber dot after the title stays.

## Copy rule

Carry the original annotation text across verbatim; restore real names only.
Don't rewrite to sound better — the annotations are evidence of what was
decided at the time.

The one exception so far: **"noob" → "new"** on the developer board's
user-onboarding label, changed by Alice on 22 Sept. The original was written
for an anonymised internal deck; the page now names Posti.

## Open

- The logistics screen needs a full-height re-export before "User onboarding →
  Open starter help" can be anchored; it's below the fold of the current one.
- "Jellybean customers" became "OmaPosti Pro customers" on the developer screen.
  If the intended sense was Posti's customers rather than the product's users,
  that line needs changing.
