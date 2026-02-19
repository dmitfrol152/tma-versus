import { NewLeaderboardAnySchema } from "@/shared/api/newFetchTeam/model/types";
import z from "zod";

export const NewTopLeaderboardSchema = z.object({
  leaderboard: z.array(NewLeaderboardAnySchema),
});

export type NewTopLeaderboardProps = z.infer<typeof NewTopLeaderboardSchema>;
