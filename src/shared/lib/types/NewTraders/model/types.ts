import z from "zod";
import { NewCurrencySchema } from "../../NewCurrency/model/types";

export const NewTradersSchema = z.object({
  id: z.int(),
  currency: NewCurrencySchema,
  picture: z.string(),
  name: z.string(),
  earn_for_day: z.number(),
  price: z.int(),
  lvl: z.int(),
});

export type NewTradersProps = z.infer<typeof NewTradersSchema>;
