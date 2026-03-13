import z from "zod";

export const newFetchCommunityLayerSchema = z.object({
  tg_username: z.string(),
  Invited: z.number(),
  Active: z.number(),
  Volume_Stars: z.number(),
  Earned: z.number(),
});

export type newFetchCommunityLayerProps = z.infer<
  typeof newFetchCommunityLayerSchema
>;

export const newFetchLayerSchema = z.object({
  Layer_1: z.number(),
  Layer_2: z.number(),
  Layer_3: z.number(),
  Layer_4: z.number(),
  Layer_5: z.number(),
});

export const newFetchCommunitySchema = z.object({
  tg_username: z.string(),
  Invited: z.number(),
  Active: z.number(),
  Volume_Stars: z.number(),
  Earned: z.number(),
  Layer_1: z.array(newFetchCommunityLayerSchema),
  Layer_2: z.array(newFetchCommunityLayerSchema),
  Layer_3: z.array(newFetchCommunityLayerSchema),
  Layer_4: z.array(newFetchCommunityLayerSchema),
  Layer_5: z.array(newFetchCommunityLayerSchema),
  Counts: newFetchLayerSchema,
  total_volume: newFetchLayerSchema,
  total_earned: newFetchLayerSchema,
});

export type newFetchCommunityProps = z.infer<typeof newFetchCommunitySchema>;
