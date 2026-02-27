import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewOrderedClansSchema } from "@/widgets/NewClans/model/types";
import z from "zod";

export const NewModalConfirmPaySchema = z.object({
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  orderedClans: z.array(NewOrderedClansSchema).nullable(),
  activeTeam: ActiveClanTypeSchema,
  handleClickChangeTeam: z.function({
    input: [],
    output: z.void(),
  }),
  countForChangeTeam: z.number(),
});

export type NewModalConfirmPayProps = z.infer<typeof NewModalConfirmPaySchema>;
