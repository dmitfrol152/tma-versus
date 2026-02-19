import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const PoolSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type PoolProps = z.infer<typeof PoolSchema>;
