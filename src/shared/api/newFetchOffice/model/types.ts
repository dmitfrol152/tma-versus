import z from "zod";

export const newHistoryClaimsSchema = z.object({
  id: z.number(),
  datatime: z.string(),
  money: z.number(),
});

export const newFetchOfficeSchema = z.object({
  productivity_per_day: z.number(),
  history_claims: z.array(newHistoryClaimsSchema),
  all: z.number(),
  occupied: z.number(),
  empty: z.number(),
});

export type newFetchOfficeProps = z.infer<typeof newFetchOfficeSchema>;
