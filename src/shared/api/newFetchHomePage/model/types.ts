import { NewSeasonSchema } from "@/shared/lib/types/NewSeason/model/types";
import { NewUserSchema } from "@/shared/lib/types/NewUser/model/types";
import { NewUserBalanceSchema } from "@/shared/lib/types/NewUserBalance/model/types";
import z from "zod";

export const NewHomePageSchema = z.object({
  season: NewSeasonSchema,
  user: NewUserSchema,
  user_balance: NewUserBalanceSchema,
});

export type NewHomePageProps = z.infer<typeof NewHomePageSchema>;
