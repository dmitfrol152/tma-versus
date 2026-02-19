import z from "zod";

export const NewAllDayProductivityPerDaySchema = z.object({
  id: z.int(),
  date: z.string(),
  productivity_per_day: z.number(),
});

export type NewAllDayProductivityPerDayProps = z.infer<
  typeof NewAllDayProductivityPerDaySchema
>;
