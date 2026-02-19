import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewButtonsChoiceCommunitySchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["statistic", "structure", "pool"]),
  setIsButtonActiveCommunity:
    z.custom<Dispatch<SetStateAction<"statistic" | "structure" | "pool">>>(),
});

export type NewButtonsChoiceCommunityProps = z.infer<
  typeof NewButtonsChoiceCommunitySchema
>;
