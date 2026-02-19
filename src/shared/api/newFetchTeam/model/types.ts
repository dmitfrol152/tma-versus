import z from "zod";

export const NewAllDayTotalCoinsSchema = z.object({
  id: z.int(),
  date: z.string(),
  total_coins: z.number(),
});

export type NewAllDayTotalCoinsProps = z.infer<
  typeof NewAllDayTotalCoinsSchema
>;

export const NewAllDayProductivityPerDaySchema = z.object({
  id: z.int(),
  date: z.string(),
  productivity_per_day: z.number(),
});

export type NewAllDayProductivityPerDayProps = z.infer<
  typeof NewAllDayProductivityPerDaySchema
>;

export const NewAllDayTotalPlayersSchema = z.object({
  id: z.int(),
  date: z.string(),
  total_players: z.number(),
});

export type NewAllDayTotalPlayersProps = z.infer<
  typeof NewAllDayTotalPlayersSchema
>;

export const NewAllDayTotalTradersSchema = z.object({
  id: z.int(),
  date: z.string(),
  total_traders: z.number(),
});

export type NewAllDayTotalTradersProps = z.infer<
  typeof NewAllDayTotalTradersSchema
>;

export type UnionTypeStats = Partial<
  NewAllDayTotalCoinsProps &
    NewAllDayProductivityPerDayProps &
    NewAllDayTotalPlayersProps &
    NewAllDayTotalTradersProps
>;

export const NewStatsAnyTeamSchema = z.object({
  id: z.int(),
  name: z.string(),
  total_coins: z.number(),
  productivity_per_day: z.number(),
  total_players: z.int(),
  total_traders: z.int(),
  all_day_total_coins: z.array(NewAllDayTotalCoinsSchema),
  all_day_productivity_per_day: z.array(NewAllDayProductivityPerDaySchema),
  all_day_total_players: z.array(NewAllDayTotalPlayersSchema),
  all_day_total_traders: z.array(NewAllDayTotalTradersSchema),
});

export type NewStatsAnyTeamProps = z.infer<typeof NewStatsAnyTeamSchema>;

export const NewLeaderboardAnySchema = z.object({
  id: z.int(),
  tg_name: z.string(),
  tg_first_name: z.string(),
  tg_last_name: z.string(),
  earn: z.number(),
  precent: z.number(),
  position: z.number(),
});

export type NewLeaderboardAnyProps = z.infer<typeof NewLeaderboardAnySchema>;

export const NewMyPositionSchema = z.object({
  team_id: z.int(),
  tg_name: z.string(),
  tg_first_name: z.string(),
  tg_last_name: z.string(),
  earn: z.number(),
  precent: z.number(),
  position: z.number(),
});

export type NewMyPositionProps = z.infer<typeof NewMyPositionSchema>;

export const NewPositionUnionSchema = z.object({
  id: z.int().optional(),
  team_id: z.int().optional(),
  tg_name: z.string(),
  tg_first_name: z.string(),
  tg_last_name: z.string(),
  earn: z.number(),
  precent: z.number(),
  position: z.number(),
});

export type NewPositionUnionProps = z.infer<typeof NewPositionUnionSchema>;

export const NewFetchTeamSchema = z.object({
  stats_first_team: NewStatsAnyTeamSchema,
  stats_second_team: NewStatsAnyTeamSchema,
  leaderboard_first_team: z.array(NewLeaderboardAnySchema),
  leaderboard_second_team: z.array(NewLeaderboardAnySchema),
  my_position: NewMyPositionSchema,
});

export type NewFetchTeamProps = z.infer<typeof NewFetchTeamSchema>;
