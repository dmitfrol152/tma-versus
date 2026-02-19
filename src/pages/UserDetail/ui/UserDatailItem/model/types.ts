import z from "zod";

export const UserDetailItemSchema = z.object({
  layerNumber: z.number(),
  nickname: z.string(),
});

export type UserDetailItemProps = z.infer<typeof UserDetailItemSchema>;
