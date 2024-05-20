import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    slug: z.string(),
    published_date: z.string(),
    language: z.enum(["id", "en"]),
  }),
});

export const collections = {
  blog: articlesCollection,
  til: articlesCollection,
};
