import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewButtonsChoiceLeaderboardSchema = z.object({
  setIsButtonActiveLeadboard:
    z.custom<Dispatch<SetStateAction<"all time" | "current" | "reward">>>(),
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["all time", "current", "reward"]),
});

export type NewButtonsChoiceLeaderboardProps = z.infer<
  typeof NewButtonsChoiceLeaderboardSchema
>;
