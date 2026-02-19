import { NewSeasonSchema } from "@/shared/lib/types/NewSeason/model/types";
import z from "zod";

export const NewSeasonDataSchema = z.object({
  data: NewSeasonSchema,
  // isStartTour: z.boolean(),
  // stepIndex: z.number(),
});

export type NewSeasonDataProps = z.infer<typeof NewSeasonDataSchema>;
