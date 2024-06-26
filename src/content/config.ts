import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    published_date: z.date(),
    language: z.enum(["id", "en"]).optional(),
    translations: z.object({ en: z.string(), id: z.string() }).optional(),
  }),
});

export const collections = {
  blog: articlesCollection,
  notes: articlesCollection,
};
