import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewButtonsChoiceTradersOfficesSchema = z.object({
  setIsButtonActiveTradersOffices:
    z.custom<Dispatch<SetStateAction<"traders" | "offices">>>(),
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["traders", "offices"]),
  setStepIndex: z.function({
    input: [z.number()],
    output: z.void(),
  }),
  isStartTour: z.boolean(),
  stepIndex: z.number(),
});

export type NewButtonsChoiceTradersOfficesProps = z.infer<
  typeof NewButtonsChoiceTradersOfficesSchema
>;
