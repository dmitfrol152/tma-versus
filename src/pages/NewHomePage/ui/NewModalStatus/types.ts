import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewOrderedClansSchema } from "@/widgets/NewClans/model/types";
import z from "zod";

export const NewModalStatusSchema = z.object({
  orderedClans: z.array(NewOrderedClansSchema).nullable(),
  activeTeam: ActiveClanTypeSchema,
  payStatus: z.string(),
});

export type NewModalStatusProps = z.infer<typeof NewModalStatusSchema>;
