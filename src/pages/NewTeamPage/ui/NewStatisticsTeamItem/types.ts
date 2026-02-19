import { NewFetchTeamSchema } from "@/shared/api/newFetchTeam/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewStatisticsTeamItemSchema = z.object({
  teamQuery: NewFetchTeamSchema,
  isButtonActiveTeam: z.enum(["1", "2"]),
  currentActiveStatus: z.number(),
  setCurrentActiveStatus: z.function({
    input: [z.number()],
    output: z.void(),
  }),
  isStartTour: z.boolean(),
  stepIndex: z.number(),
  setIsStartTour: z.custom<Dispatch<SetStateAction<boolean>>>(),
});

export type NewStatisticsTeamItemProps = z.infer<
  typeof NewStatisticsTeamItemSchema
>;
