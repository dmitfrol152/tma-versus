import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserBalanceSchema } from "@/shared/lib/types/NewUserBalance/model/types";
import z from "zod";

export const NewDayTradersListSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  handleOpenModalInventar: z.function({
    input: [],
    output: z.void(),
  }),
  handleOpenModalInventarWithTrader: z.function({
    input: [],
    output: z.void(),
  }),
  userBalanse: NewUserBalanceSchema,
});

export type NewDayTradersListProps = z.infer<typeof NewDayTradersListSchema>;
