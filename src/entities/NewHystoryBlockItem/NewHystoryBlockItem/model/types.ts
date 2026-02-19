import { newHistoryClaimsSchema } from "@/shared/api/newFetchOffice/model/types";
import z from "zod";

export const NewHystoryBlockItemSchema = z.object({
  data: newHistoryClaimsSchema,
});

export type NewHystoryBlockItemProps = z.infer<
  typeof NewHystoryBlockItemSchema
>;
