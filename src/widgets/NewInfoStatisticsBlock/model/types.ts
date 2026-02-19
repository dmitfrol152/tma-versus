import z from "zod";

export const NewInfoStatisticsBlockSchema = z.object({
  title: z.string(),
  amount: z.union([z.string(), z.number()]),
});

export type NewInfoStatisticsBlockProps = z.infer<
  typeof NewInfoStatisticsBlockSchema
>;
