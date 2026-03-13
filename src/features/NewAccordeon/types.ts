import { newFetchCommunitySchema } from "@/shared/api/newFetchCommunity/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewAccordeonSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  dataCommunityPage: newFetchCommunitySchema,
});

export type NewAccordeonProps = z.infer<typeof NewAccordeonSchema>;
