import { getCollection, type CollectionEntry } from 'astro:content';
import alsoData from '../../design/content/also.json';

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  sectors: string[];
  user: string;
  devices: string[];
  platform: string;
  year: string;
  access: string;
  dot: string;
  order: number;
}

export interface AlsoEntry {
  title: string;
  kind: string;
  year: string;
}

export type WorkEntry = CollectionEntry<'work'>;

/** Every published case study, ordered lowest `order` first. */
export async function getWorkEntries(): Promise<WorkEntry[]> {
  const entries = await getCollection('work');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** The homepage index row shape — empty until the first case study is added. */
export async function getProjects(): Promise<Project[]> {
  const entries = await getWorkEntries();
  return entries.map((entry) => ({ slug: entry.id, ...entry.data }));
}

export const also: AlsoEntry[] = alsoData;

/** Lowercase, hyphenated slug for filter values and routes. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
