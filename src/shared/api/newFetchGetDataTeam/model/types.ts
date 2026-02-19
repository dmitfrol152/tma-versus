import { NewStatsAnyLeadboardTeamSchema } from "@/shared/lib/types/NewStatsAnyLeadboardTeam/model/types";
import { NewStatsAnyTeamSchema } from "@/shared/lib/types/NewStatsAnyTeam/model/types";
import { NewStatsMyPositionSchema } from "@/shared/lib/types/NewStatsMyPosition/model/types";
import z from "zod";

export const NewGetDataTeamSchema = z.object({
  stats_first_team: NewStatsAnyTeamSchema,
  stats_second_team: NewStatsAnyTeamSchema,
  leaderboard_first_team: z.array(NewStatsAnyLeadboardTeamSchema),
  leaderboard_second_team: z.array(NewStatsAnyLeadboardTeamSchema),
  my_position: NewStatsMyPositionSchema,
});

export type NewGetDataTeamProps = z.infer<typeof NewGetDataTeamSchema>;
