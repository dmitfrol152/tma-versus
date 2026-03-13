import { newFetchCommunitySchema } from "@/shared/api/newFetchCommunity/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewStructureCommunityLayoutSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  dataCommunityPage: newFetchCommunitySchema,
});

export type NewStructureCommunityLayoutProps = z.infer<
  typeof NewStructureCommunityLayoutSchema
>;
