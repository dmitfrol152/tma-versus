import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const PoolCommunityLayoutSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type PoolCommunityLayoutProps = z.infer<
  typeof PoolCommunityLayoutSchema
>;
