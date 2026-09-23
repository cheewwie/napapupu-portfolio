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
const work = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    // Index row
    title: z.string(),
    blurb: z.string(),
    sectors: z.array(z.string()).default([]),
    user: z.enum(['Enterprise', 'Consumer']),
    devices: z.array(z.enum(['Desktop', 'Mobile', 'Embedded'])).min(1),
    platform: z.string(),
    year: z.string(),
    access: z.enum(['Open', 'On request']),
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
    /** Omit both to fall back to the abstract drawn placeholder hero. */
    heroSrc: z.string().optional(),
    heroAlt: z.string().optional(),
  }),
});

export const collections = { work };
