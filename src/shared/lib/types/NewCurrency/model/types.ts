import z from "zod";

export const NewCurrencySchema = z.object({
  id: z.int(),
  name: z.string(),
});

export type NewCurrencyProps = z.infer<typeof NewCurrencySchema>;
