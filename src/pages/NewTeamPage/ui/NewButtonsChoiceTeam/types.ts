import { NewFetchTeamSchema } from "@/shared/api/newFetchTeam/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewButtonsChoiceTeamSchema = z.object({
  isButtonActiveTeam: z.enum(["1", "2"]),
  setIsButtonActiveTeam: z.custom<Dispatch<SetStateAction<"1" | "2">>>(),
  activeTeam: ActiveClanTypeSchema,
  teamQuery: NewFetchTeamSchema,
  isStartTour: z.boolean(),
  stepIndex: z.number(),
  setIsStartTour: z.custom<Dispatch<SetStateAction<boolean>>>(),
});

export type NewButtonsChoiceTeamProps = z.infer<
  typeof NewButtonsChoiceTeamSchema
>;
