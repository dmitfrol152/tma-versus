import z from "zod";

export const ClanBoostSchema = z.object({
  value: z.number().nullable(),
  timer: z.string().nullable(),
});

export type ClanBoostProps = z.infer<typeof ClanBoostSchema>;

export const ClanSafeSchema = z.object({
  value: z.number(),
});

export type ClanSafeProps = z.infer<typeof ClanSafeSchema>;

export const ClanStatsSchema = z.object({
  productivityPerDay: z.number(),
  totalFarmed: z.number(),
  shareInTeam: z.string(),
});

export type ClanStatsProps = z.infer<typeof ClanStatsSchema>;

export const HystorySchema = z.object({
  operation: z.string(),
  trader: z.string(),
  number: z.number(),
  date: z.string(),
});

export type HystoryProps = z.infer<typeof HystorySchema>;

export const ClansFieldsSchema = z.object({
  name: z.string(),
  percent: z.number(),
  coins: z.number(),
  perMinute: z.number(),
  boost: ClanBoostSchema,
  safe: ClanSafeSchema,
  stats: ClanStatsSchema,
  hystory: z.array(HystorySchema),
  tariff: z.enum(["basic", "standart", "premium"]),
  productivityPerDay: z.string(),
});

export type ClansFieldsProps = z.infer<typeof ClansFieldsSchema>;

export const ClansSchema = z.object({
  1: ClansFieldsSchema,
  2: ClansFieldsSchema,
});

export type ClansProps = z.infer<typeof ClansSchema>;
