# Quotes: research vs feedback

Set 23 Sept 2026 on the canvas artboard **"D · Two kinds of quote — research vs
feedback"**. Snapshot: `reference/d-quotes.html`. This file is the spec. The
snapshot is only there so you can check how it looks.

A case study can quote two kinds of people, and the reader needs to tell them
apart at a glance:

| | **Research quote** | **Feedback quote** |
|---|---|---|
| Who is speaking | Users, customers, participants, fans: the people the product is *for* | Colleagues, clients, stakeholders: people talking about *Alice's work* |
| What it is | Evidence that supports a finding | A verdict on the outcome |
| Component today | none (see "Existing content" below) | `src/components/case/Pullquote.astro` |

**Who is speaking decides the kind. The chapter and the heading don't.** Fans
commenting on a prototype in a "Results" chapter, under a heading that says
"feedback", are still giving a research quote.

## Four cues, so colour never carries it alone

| Cue | Research | Feedback |
|---|---|---|
| **Mark** | A hanging `“` outside the text column, `--c-faint`. No bar, no fill | 4px left bar in the **project key colour** |
| **Attribution** | Anonymised: `[participant code] · segment · method, year`. The segment is required. Code, method and year are optional. **Never a name.** | Role · organisation, or a name if the person has agreed to it |
| **Label** | A mono "In their words" label, **once per cluster** | None. The bar and the job title are enough, and a label like "Praise" would undo the effect |
| **Position** | Directly under the finding it supports. Two to four together is normal | After a result, closing the thought it judges. One at a time, never clustered |

The attribution does most of the work. With all styling stripped out, "Snowboard
fan and former coach" can only be a participant and "Head of Design · Posti
Group" can only be a colleague. That's also what a screen reader hears.

## Research quote: values

Use the tokens, not the hexes from the snapshot.

- Figure: `margin-left: 34px; position: relative`. The indent stays on every
  viewport, because the mark hangs in it.
- Mark: `“`, `aria-hidden="true"`, absolutely positioned at `left: -34px; top: -10px`,
  52px, `line-height: 1`, `--weight-heading`, `--c-faint`.
- Text: 19px / 1.55, `--weight-body`, `--c-body`. It sits one step above the
  18px prose, so it reads as evidence rather than decoration.
- Attribution: `--font-mono`, 11px, `letter-spacing: 0.06em`, `--c-muted`.
- Cluster: flex column, `gap: 22px`. The label is `--font-mono`, 10px,
  `letter-spacing: 0.16em`, uppercase, `--c-faint`, indented 34px
  to line up with the quote text, with 16px below it.

## Feedback quote: values

Same as the current `Pullquote`: 4px left bar, 24px left padding, 21px / 1.5,
`--weight-body`, `--c-headline`. Attribution is `--font-mono` 11px, `0.08em`,
`--c-muted`.

## Markup

Both kinds use the same semantics:

```html
<figure>
  <blockquote><p>…</p></blockquote>
  <figcaption>…</figcaption>
</figure>
```

The attribution goes in a `figcaption`, not in a `footer` inside the
`blockquote`. It is not part of what was said. `Pullquote.astro` currently uses
`<blockquote><footer>`, so move it over when you touch that component.

Strip the typed quotation marks from research quote text. The hanging mark is
decorative, and the `blockquote` already carries the meaning. Keep them out of
the source so they don't get doubled up.

A suggested API. Adjust it as the codebase needs:

```mdx
<ResearchQuotes>
  <ResearchQuote source="Cross-country skiing fan">It would be awesome to watch official FIS livestreams in the app. Currently it’s quite painful.</ResearchQuote>
  <ResearchQuote source="Former alpine skiing athlete">…</ResearchQuote>
</ResearchQuotes>

<Pullquote attribution="Marketing Manager · FIS">…</Pullquote>
```

`ResearchQuotes` renders the "In their words" label and the cluster spacing. A
single `ResearchQuote` outside a cluster still needs the label, so either wrap
it anyway or let the wrapper handle a count of one.

## Colour rules this touches

- The feedback bar is the **project key**, which comes from `dot` in
  `content/projects.json`. It is not an accent. `Pullquote`'s current fallback,
  `var(--c-orange)`, breaks the orange-is-interaction-only rule. Default to the
  project's key from the content entry instead.
- The research mark is neutral on purpose. Don't give it pink (that is
  annotation), amber (that is the dot, links and gating) or leaf (that is
  status).

## Confidentiality

Research quotes are more sensitive than feedback. Publish them only where
participant consent allows. On an NDA project they go behind the
request-access layer along with the artefacts, and the public layer must still
make sense without them.

## Existing content: flagged, not yet changed

- `src/content/work/snowsports-in-real-time.mdx`, chapter 05: four fan and
  athlete quotes use `<Callout>` as a deliberate stand-in, because the research
  quote component didn't exist yet. Once it does, Alice will convert them
  herself into one `ResearchQuotes` cluster, with the source moved into the
  prop and the typed quotation marks removed. Don't convert them for her.
- The same file hardcodes `accent="#E3732D"` (the OmaPosti key) on its
  `Pullquote`s. The Snowsports key in `projects.json` is `#3E5EB5`. This is
  probably a copy-paste from the OmaPosti case, and it disappears once the
  default comes from the project.
- `a-digital-key-account-manager.mdx` has no research quotes. Its three
  `Pullquote`s are already correct as feedback.

Ask Alice before changing these. This file records the pattern. It does not
authorise a content pass.
