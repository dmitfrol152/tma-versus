import z from "zod";

export const fetchUserInfoSchema = z.object({
  nickname: z.string(),
  raw: z.string(),
  invites: z.string(),
  rating: z.string(),
});

export type fetchUserInfoProps = z.infer<typeof fetchUserInfoSchema>;
