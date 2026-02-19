import z from "zod";
import { NewMyTeamSchema } from "../../NewMyTeam/model/types";
import { NewUserTradersSchema } from "../../NewUserTraders/model/types";
import { NewFullMainPageOffice } from "../../NewFullMainPageOffice/model/types";

export const NewUserBalanceSchema = z.object({
  id: z.int(),
  token_money: z.number(),
  game_coin: z.int(),
  team: NewMyTeamSchema.nullable(),
  can_change_team_for_pay: z.boolean(),
  my_ofice: NewFullMainPageOffice,
  my_bank: z.int(),
  earn_in_team_per_month: z.int(),
  earn_in_team_per_weak: z.int(),
  list_of_my_traders: z.array(NewUserTradersSchema),
  your_share_in_team: z.string(),
});

export type NewUserBalanceProps = z.infer<typeof NewUserBalanceSchema>;
