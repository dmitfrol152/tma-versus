import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewInfoBlockProgressBarUiSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  startValue: z.number(),
  endValue: z.number(),
  textProgressBar: z.string().optional(),
});

export type NewInfoBlockProgressBarUiProps = z.infer<
  typeof NewInfoBlockProgressBarUiSchema
>;
