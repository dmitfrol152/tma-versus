import z from "zod";

export const NewAllDayTotalPlayersSchema = z.object({
  id: z.int(),
  date: z.string(),
  total_players: z.number(),
});

export type NewAllDayTotalPlayersProps = z.infer<
  typeof NewAllDayTotalPlayersSchema
>;
