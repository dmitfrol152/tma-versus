import z from "zod";

export const TeamSchema = z.object({
  boost_team: z.number().nullable(),
  ear_per_minute: z.number(),
  id: z.int(),
  money_for_day: z.number(),
  money_for_weak: z.number(),
  money_team: z.number(),
  name: z.string(),
  percent: z.number(),
  picture: z.string(),
});

export type TeamProps = z.infer<typeof TeamSchema>;
