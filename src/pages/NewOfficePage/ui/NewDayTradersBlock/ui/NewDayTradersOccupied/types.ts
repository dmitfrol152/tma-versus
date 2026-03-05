import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import z from "zod";

export const NewDayTradersOccupiedSchema = z.object({
  traders: z.array(NewUserTradersSchema),
  activeTeam: ActiveClanTypeSchema,
});

export type NewDayTradersOccupiedProps = z.infer<
  typeof NewDayTradersOccupiedSchema
>;
