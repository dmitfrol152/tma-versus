import { newFetchCommunityLayerSchema } from "@/shared/api/newFetchCommunity/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewModalCommunityLayerSchema = z.object({
  layer: z.array(newFetchCommunityLayerSchema),
  layerNumber: z.number(),
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  activeTeam: ActiveClanTypeSchema,
});

export type NewModalCommunityLayerProps = z.infer<
  typeof NewModalCommunityLayerSchema
>;
