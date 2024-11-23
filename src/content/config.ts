import { z, defineCollection } from "astro:content";

const markdownCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      images: z.array(z.object({ image: image(), alt: z.string() })).optional(),
    }),
});

export const collections = {
  markdown: markdownCollection,
};
