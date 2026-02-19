import { NewFetchTeamSchema } from "@/shared/api/newFetchTeam/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewChartTeamButtonsSchema = z.object({
  isButtonActiveTeam: z.enum(["1", "2"]),
  activeTeam: ActiveClanTypeSchema,
  teamQuery: NewFetchTeamSchema,
});

export type NewChartTeamButtonsProps = z.infer<
  typeof NewChartTeamButtonsSchema
>;
