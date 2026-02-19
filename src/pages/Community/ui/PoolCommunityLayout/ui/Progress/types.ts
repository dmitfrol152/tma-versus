import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const ProgressSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type ProgressProps = z.infer<typeof ProgressSchema>;
