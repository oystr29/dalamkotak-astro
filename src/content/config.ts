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

const chord = defineCollection({
  schema: z.object({
    title: z.string(),
    releaseDate: z.coerce.date(),
    artist: z.string().optional(),
    album: z.string().optional(),
    img: z.string().optional(),
    ytID: z.string(),
  }),
});

export const collections = { blog, chord };
