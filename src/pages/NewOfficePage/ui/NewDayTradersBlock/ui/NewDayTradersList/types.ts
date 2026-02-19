import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import z from "zod";

export const NewDayTradersListSchema = z.object({
  traders: z.array(NewUserTradersSchema),
  activeTeam: ActiveClanTypeSchema,
  handleOpenModalInventar: z.function({
    input: [],
    output: z.void(),
  }),
});

export type NewDayTradersListProps = z.infer<typeof NewDayTradersListSchema>;
