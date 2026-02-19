import { NewFetchTeamSchema } from "@/shared/api/newFetchTeam/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewLeaderboardTeamSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  isButtonActiveLeadboard: z.enum(["all time", "current", "reward"]),
  setIsButtonActiveLeadboard:
    z.custom<Dispatch<SetStateAction<"all time" | "current" | "reward">>>(),
  teamQuery: NewFetchTeamSchema,
  isButtonActiveTeam: z.enum(["1", "2"]),
});

export type NewLeaderboardTeamProps = z.infer<typeof NewLeaderboardTeamSchema>;
