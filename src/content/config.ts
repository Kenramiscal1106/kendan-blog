import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    createdAt: z.string(),
    description: z.string().min(8).max(128),
    durationReadInMins: z.number(),
    imageURL: z.string(),
  }),
});
export const collections = {
  blog: blogCollection,
};
