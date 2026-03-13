import { newFetchCommunitySchema } from "@/shared/api/newFetchCommunity/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewGeneralSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  dataCommunityPage: newFetchCommunitySchema,
  isGeneralStep: z.boolean(),
});

export type NewGeneralProps = z.infer<typeof NewGeneralSchema>;
