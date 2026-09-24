import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Case studies. Each entry feeds one row of the homepage index — the row
 * disappears the moment the file does — and its own page at /work/<slug>/.
 * See design/content/projects.json for the frozen reference shape and
 * design/tokens.css for the `dot` colour gates (4.5:1 on --c-ground, must
 * not read as amber/orange/pink).
 *
 * `order` decides both the homepage row order and the "next case study"
 * link at the foot of each case-study page — lowest first.
 *
 * The body is the case-study chapters themselves, written as MDX using the
 * components in src/components/case/ (Chapter, Artefact, Pullquote,
 * Callout, DashboardCarousel, Gated). Chapters are content, not a component
 * system to model in advance — see design/README.md's closing note.
 */
/** A left-blank YAML field (`heroSrc:`) arrives as null — treat it as omitted. */
const optionalString = z.preprocess((v) => (v === null || v === '' ? undefined : v), z.string().optional());

const work = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    // Index row
    title: z.string(),
    blurb: z.string(),
    sectors: z.array(z.string()).default([]),
    user: z.enum(['Pro', 'Consumer']),
    devices: z.array(z.enum(['Desktop', 'Mobile', 'Embedded'])).min(1),
    platform: z.string(),
    year: z.string(),
    /** "Coming soon": a blurb and some context only, while the NDA is
     *  still being worked out. "Restricted": the NDA allows nothing more
     *  than that blurb, for good. Both are listed and linked like any other
     *  row. */
    access: z.enum(['Open', 'On request', 'Coming soon', 'Restricted']),
    dot: z.string(),
    order: z.number(),

    // Case-study hero
    eyebrowCategory: z.string(),
    readTime: z.string(),
    dek: z.string(),
    client: z.string(),
    role: z.array(z.string()).min(1),
    duration: z.string(),
    outcome: z.string(),
    heroCaption: z.string(),
    /** Leave heroSrc blank (or omit it) and the page has no hero at all —
     *  the spec strip runs straight into the chapters. */
    heroSrc: optionalString,
    heroAlt: optionalString,
  }),
});

export const collections = { work };
