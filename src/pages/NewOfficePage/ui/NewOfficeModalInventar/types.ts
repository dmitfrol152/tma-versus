import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewOfficeModalInventarSchema = z.object({
  setIsOpenModal: z.custom<Dispatch<SetStateAction<boolean>>>(),
  listOfMyTraders: z.array(NewUserTradersSchema),
  activeTeam: ActiveClanTypeSchema,
  handleClickAddCoinTrader: z.function({
    input: [NewUserTradersSchema.optional()],
    output: z.void(),
  }),
});

export type NewOfficeModalInventarProps = z.infer<
  typeof NewOfficeModalInventarSchema
>;
