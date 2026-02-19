import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewSwapTeamSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type NewSwapTeamProps = z.infer<typeof NewSwapTeamSchema>;
