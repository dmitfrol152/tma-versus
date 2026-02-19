import z from "zod";

export const ProfileStatisticsSchema = z.object({
  title: z.string(),
  count: z.number(),
  icon: z.boolean().optional(),
});

export const NewStatisticsCardUiSchema = z.object({
  item: ProfileStatisticsSchema,
  isLast: z.boolean().optional(),
});

export type NewStatisticsCardUiProps = z.infer<
  typeof NewStatisticsCardUiSchema
>;
