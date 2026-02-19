import { TeamSchema } from "@/shared/lib/types/NewTeam/model/types";
import z from "zod";

export const NewSeasonSchema = z.object({
  id: z.int(),
  first_team: TeamSchema,
  second_team: TeamSchema,
  timer: z.string(),
  prize: z.number(),
});

export type NewSeasonProps = z.infer<typeof NewSeasonSchema>;
