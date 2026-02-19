import { NewFetchTeamSchema } from "@/shared/api/newFetchTeam/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewTeamLayoutPageSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  isButtonActiveTeam: z.enum(["1", "2"]),
  setIsButtonActiveTeam: z.custom<Dispatch<SetStateAction<"1" | "2">>>(),
  isButtonActiveLeadboard: z.enum(["all time", "current", "reward"]),
  setIsButtonActiveLeadboard:
    z.custom<Dispatch<SetStateAction<"all time" | "current" | "reward">>>(),
  teamQuery: NewFetchTeamSchema,
  currentActiveStatus: z.number(),
  setCurrentActiveStatus: z.function({
    input: [z.number()],
    output: z.void(),
  }),
  isStartTour: z.boolean(),
  stepIndex: z.number(),
  setIsStartTour: z.custom<Dispatch<SetStateAction<boolean>>>(),
});

export type NewTeamLayoutPageProps = z.infer<typeof NewTeamLayoutPageSchema>;
