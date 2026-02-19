import { NewOfficeSchema } from "@/shared/lib/types/NewOffice/model/types";
import { NewTradersSchema } from "@/shared/lib/types/NewTraders/model/types";
import z from "zod";

export const NewFetchStoreSchema = z.object({
  ofices: z.array(NewOfficeSchema),
  traders: z.array(NewTradersSchema),
});

export type NewFetchStoreProps = z.infer<typeof NewFetchStoreSchema>;
