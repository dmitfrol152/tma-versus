import { NewTradersSchema } from "@/shared/lib/types/NewTraders/model/types";
import z from "zod";

export const NewUserTradersSchema = z.object({
  trader: NewTradersSchema,
  total: z.number(),
  id: z.number(),
  isActive: z.boolean(),
});

export type NewUserTradersProps = z.infer<typeof NewUserTradersSchema>;
