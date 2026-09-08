import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
  Markdown-backed for now. When content moves to Sanity this collection
  swaps to a Sanity loader; the schema below is the contract the rest of
  the site codes against.
*/
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    // Shown in the blog index and in the post breadcrumb.
    shortTitle: z.string().optional(),
    category: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.string(),
    linkLabel: z.string().default("Read playbook"),
  }),
});

export const collections = { blog };
