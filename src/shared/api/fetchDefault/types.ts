import z from "zod";

export const SafeSchema = z.object({
  value: z.number(),
  max: z.number(),
});

export const StatsSchema = z.object({
  productivityPerDay: z.number(),
  totalFarmed: z.number(),
  shareInTeam: z.number(),
});

export const TreadersSchema = z.object({
  title: z.string(),
  coins: z.number(),
  seats: z.number(),
  boost: z.number(),
});

export const DefaultApiSchema = z.object({
  safe: SafeSchema,
  stats: StatsSchema,
  treader: TreadersSchema,
});

export type DefaultApiProps = z.infer<typeof DefaultApiSchema>;
