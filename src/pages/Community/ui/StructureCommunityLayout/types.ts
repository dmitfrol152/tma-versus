import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const StructureCommunityLayoutSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type StructureCommunityLayoutProps = z.infer<
  typeof StructureCommunityLayoutSchema
>;
