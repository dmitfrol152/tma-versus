import { NewFetchTeamSchema } from "@/shared/api/newFetchTeam/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewChartTeamSchema = z.object({
  isButtonActiveTeam: z.enum(["1", "2"]),
  teamQuery: NewFetchTeamSchema,
  currentActiveStatus: z.number(),
  activeTeam: ActiveClanTypeSchema,
});

export type NewChartTeamProps = z.infer<typeof NewChartTeamSchema>;
