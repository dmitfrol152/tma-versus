import { newFetchOfficeSchema } from "@/shared/api/newFetchOffice/model/types";
import { NewInfoPersonSchema } from "@/shared/lib/store/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserBalanceSchema } from "@/shared/lib/types/NewUserBalance/model/types";
import z from "zod";

export const NewStatsDataSchema = z.object({
  officeQuery: newFetchOfficeSchema,
  user: NewInfoPersonSchema,
  activeTeam: ActiveClanTypeSchema,
  userBalanse: NewUserBalanceSchema.nullable(),
});

export type NewStatsDataProps = z.infer<typeof NewStatsDataSchema>;
