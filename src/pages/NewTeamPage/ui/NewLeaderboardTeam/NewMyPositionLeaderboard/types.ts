import { NewMyPositionSchema } from "@/shared/api/newFetchTeam/model/types";
import z from "zod";

export const NewMyPositionLeaderboardSchema = z.object({
  myPosition: NewMyPositionSchema,
});

export type NewMyPositionLeaderboardProps = z.infer<
  typeof NewMyPositionLeaderboardSchema
>;
