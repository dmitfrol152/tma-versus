import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const LimitedSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type LimitedProps = z.infer<typeof LimitedSchema>;
