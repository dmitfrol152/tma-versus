import { newFetchCommunityLayerSchema } from "@/shared/api/newFetchCommunity/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewAccordeonItemSchema = z.object({
  item: newFetchCommunityLayerSchema,
  activeTeam: ActiveClanTypeSchema,
  index: z.number(),
});

export type NewAccordeonItemProps = z.infer<typeof NewAccordeonItemSchema>;
