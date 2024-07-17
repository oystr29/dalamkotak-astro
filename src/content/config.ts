import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const chords = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    pubDate: z.coerce.date(),
    img: z.string().optional(),
  }),
});

export const collections = { blog, chords };
