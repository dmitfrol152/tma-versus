import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { TeamSchema } from "@/shared/lib/types/NewTeam/model/types";
import z from "zod";

export const NewClansItemSchema = z.object({
  clan: TeamSchema,
  activeClan: ActiveClanTypeSchema,
  isStartTour: z.boolean(),
});

export type NewClansItemProps = z.infer<typeof NewClansItemSchema>;
