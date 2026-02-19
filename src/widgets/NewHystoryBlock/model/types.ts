import { newHistoryClaimsSchema } from "@/shared/api/newFetchOffice/model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const NewHystoryBlockBlockDataSchema = z.object({
  hystoryClaims: z.array(newHistoryClaimsSchema),
  activeTeam: ActiveClanTypeSchema,
});

export type NewHystoryBlockBlockDataProps = z.infer<
  typeof NewHystoryBlockBlockDataSchema
>;
