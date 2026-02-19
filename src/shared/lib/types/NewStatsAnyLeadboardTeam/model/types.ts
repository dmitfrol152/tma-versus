import z from "zod";

export const NewStatsAnyLeadboardTeamSchema = z.object({
  id: z.int(),
  tg_name: z.string(),
  tg_first_name: z.string(),
  tg_last_name: z.string(),
  earn: z.number(),
  precent: z.number(),
  position: z.int(),
});

export type NewStatsAnyLeadboardTeamProps = z.infer<
  typeof NewStatsAnyLeadboardTeamSchema
>;
