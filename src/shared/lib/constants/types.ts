import z from "zod";

export const GeneralArrayCommunitySchema = z.object({
  data: z.number(),
  text: z.string(),
  icon: z.boolean(),
});

export type GeneralArrayCommunityProps = z.infer<
  typeof GeneralArrayCommunitySchema
>;

//

export const ItemsSchema = z.object({
  data: z.number(),
  text: z.string(),
  icon: z.boolean(),
});

export const PeoplesSchema = z.object({
  nickname: z.string(),
  raw: z.string(),
  invites: z.string(),
});

export const LayerArrayCommunitySchema = z.object({
  items: z.array(ItemsSchema),
  percent: z.string(),
  peoples: z.array(PeoplesSchema),
});

export type LayerArrayCommunityProps = z.infer<
  typeof LayerArrayCommunitySchema
>;
