import { PeoplesSchema } from "@/shared/lib/constants/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const ModalCommunityLayerSchema = z.object({
  peoples: z.array(PeoplesSchema),
  layerNumber: z.number(),
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  activeTeam: ActiveClanTypeSchema,
});

export type ModalCommunityLayerProps = z.infer<
  typeof ModalCommunityLayerSchema
>;
