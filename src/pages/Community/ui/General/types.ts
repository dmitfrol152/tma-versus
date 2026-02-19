import { GeneralArrayCommunitySchema } from "@/shared/lib/constants/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const GeneralSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  GENERAL_ARRAY_COMMUNITY: z.array(GeneralArrayCommunitySchema),
  isGeneralStep: z.boolean(),
});

export type GeneralProps = z.infer<typeof GeneralSchema>;
