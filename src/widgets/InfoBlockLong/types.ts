import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const InfoBlockLongSchema = z.object({
  title: z.string(),
  amountCoint: z.number().optional(),
  currentValue: z.number(),
  maxValue: z.number(),
  activeTeam: ActiveClanTypeSchema,
  buttonName: z.string().optional(),
  addTextProgressBar: z.string(),
});

export type InfoBlockLongProps = z.infer<typeof InfoBlockLongSchema>;
