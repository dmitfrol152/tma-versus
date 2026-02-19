import z from "zod";

export const NewAllDayTotalTradersSchema = z.object({
  id: z.int(),
  date: z.string(),
  total_traders: z.number(),
});

export type NewAllDayTotalTradersProps = z.infer<
  typeof NewAllDayTotalTradersSchema
>;
