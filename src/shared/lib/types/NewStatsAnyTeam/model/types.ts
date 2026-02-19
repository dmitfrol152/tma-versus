import { NewAllDayProductivityPerDaySchema } from "@/shared/lib/types/NewAllDayProductivityPerDay/model/types";
import { NewAllDayTotalCoinsSchema } from "@/shared/lib/types/NewAllDayTotalCoins/model/types";
import { NewAllDayTotalPlayersSchema } from "@/shared/lib/types/NewAllDayTotalPlayers/model/types";
import { NewAllDayTotalTradersSchema } from "@/shared/lib/types/NewAllDayTotalTraders/model/types";
import z from "zod";

export const NewStatsAnyTeamSchema = z.object({
  id: z.int(),
  name: z.string(),
  total_coins: z.int(),
  productivity_per_day: z.number(),
  total_players: z.int(),
  total_traders: z.int(),
  all_day_total_coins: z.array(NewAllDayTotalCoinsSchema),
  all_day_productivity_per_day: z.array(NewAllDayProductivityPerDaySchema),
  all_day_total_players: z.array(NewAllDayTotalPlayersSchema),
  all_day_total_traders: z.array(NewAllDayTotalTradersSchema),
});

export type NewStatsAnyTeamProps = z.infer<typeof NewStatsAnyTeamSchema>;
