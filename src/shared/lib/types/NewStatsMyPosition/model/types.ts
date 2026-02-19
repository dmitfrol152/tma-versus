import z from "zod";

export const NewStatsMyPositionSchema = z.object({
  team_id: z.int(),
  tg_name: z.string(),
  tg_first_name: z.string(),
  tg_last_name: z.string(),
  earn: z.number(),
  precent: z.number(),
  position: z.int(),
});

export type NewStatsMyPositionProps = z.infer<typeof NewStatsMyPositionSchema>;
