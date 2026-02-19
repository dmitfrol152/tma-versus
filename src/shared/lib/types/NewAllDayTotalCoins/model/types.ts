import z from "zod";

export const NewAllDayTotalCoinsSchema = z.object({
  id: z.int(),
  date: z.string(),
  total_coins: z.number(),
});

export type NewAllDayTotalCoinsProps = z.infer<
  typeof NewAllDayTotalCoinsSchema
>;
