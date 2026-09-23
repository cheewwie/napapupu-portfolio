# Type scale: desktop and mobile

Added 23 Sept 2026. The size tokens live in `tokens.css` (`--fs-*`, `--lh-*`).
This file explains the reasoning so the numbers don't get "tidied" away.

Desktop values come from the brand identity type board
(https://claude.ai/artifact/MAFaKHowhbfaZuQk24mGsk, "Type"). The mobile values
were agreed on 23 Sept. **They replace the sizes drawn on the four mobile
reference files** (`reference/m-*.html`), which still show the older, smaller
sizes (body 15, labels 9–10). Where the two disagree, follow this file.

## The scale

Mobile = 390px viewport with 20px side gutters (350px measure). Desktop = 1440px.

| Role | Font | Desktop | Mobile | Weight | Tracking | Line height |
|---|---|---|---|---|---|---|
| Display (home hero) | Grotesk | 64 | **38** | 500 | −0.035em desktop / −0.03em mobile | 1.04 / 1.06 |
| Page title (case study) | Grotesk | 62 | **34** | 500 | −0.035em / −0.03em | 1.02 / 1.08 |
| Section | Grotesk | 30 | **24** | 500 | −0.025em / −0.02em | 1.15 |
| Row title | Grotesk | 21 | **19** | 500 | −0.018em / −0.015em | 1.25 |
| Body | Grotesk | 19 | **17** | 300 | none | 1.62 / 1.6 |
| Small | Grotesk | 15 | 15 | 300 | none | 1.45 |
| Metadata | Mono | 12 | 12 | 400 | none | 1.5 |
| Label (caps) | Mono | 11 | 11 | 700 | 0.18em desktop / 0.14em mobile | 1.4 |
| Caption, figcaption | Mono | 11 | 11 | 400 | 0.04em | 1.5 |
| Chip (caps) | Mono | 10 | 10 | 700 | 0.1em | 1 |

## Rules

- **Only the big sizes shrink.** Everything at 15px and below is the same on
  every viewport. Nothing on the site goes below 10px, and 10 is for chips only.
- **Body stays at weight 300, so it can't go below 17 on mobile.** Space Grotesk
  300 on the dark ground gets thin and smudgy at 15px on a phone.
- **Labels get their width back from tracking, not size.** Caps mono labels drop
  from 0.18em to 0.14em tracking on mobile and stay at 11px.
- **Tighten as it grows** still holds: negative tracking at 24px and above only.
- Display and page title are 2px apart on desktop but 4px apart on mobile,
  because at phone size a 2px gap just looks like a mistake.

## Implementation

The five scaling sizes are fluid `clamp()`s. Each hits the mobile value at a
390px viewport and the desktop value at 1440px, scaling linearly in between.
The fixed sizes are plain values. Tracking and line height switch at the mobile
breakpoint (`max-width: 640px`); see the `@media` block in `tokens.css`.

```css
h1.hero   { font: var(--weight-heading) var(--fs-display)/var(--lh-display) var(--font-display); letter-spacing: var(--track-display); }
h1.title  { font: var(--weight-heading) var(--fs-title)/var(--lh-title) var(--font-display); letter-spacing: var(--track-display); }
h2        { font: var(--weight-heading) var(--fs-section)/1.15 var(--font-display); letter-spacing: var(--track-title); }
.row-title{ font: var(--weight-heading) var(--fs-row)/1.25 var(--font-display); letter-spacing: var(--track-row); }
body      { font: var(--weight-body) var(--fs-body)/var(--lh-body) var(--font-body); }
.label    { font: 700 var(--fs-label)/1.4 var(--font-mono); letter-spacing: var(--track-mono-eyebrow); text-transform: uppercase; }
```

Pixel values are used here for clarity; converting them to rem (÷16) in the
build is fine and keeps browser zoom working.
