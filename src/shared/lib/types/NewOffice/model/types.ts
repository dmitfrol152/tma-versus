import z from "zod";

export const NewOfficeSchema = z.object({
  id: z.int(),
  lvl: z.int(),
  count_of_traders: z.int().nullable(),
  comfort: z.number(),
  safe_capacity: z.int(),
  block: z.boolean().optional(),
  price: z.number(),
});

export type NewOfficeProps = z.infer<typeof NewOfficeSchema>;
