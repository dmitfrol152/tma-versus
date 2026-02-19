import { newHistoryClaimsSchema } from "@/shared/api/newFetchOffice/model/types";
import z from "zod";

export const NewHystoryBlockListSchema = z.object({
  hystoryClaims: z.array(newHistoryClaimsSchema),
});

export type NewHystoryBlockListProps = z.infer<
  typeof NewHystoryBlockListSchema
>;
