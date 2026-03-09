import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserBalanceSchema } from "@/shared/lib/types/NewUserBalance/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewDayTradersBlockSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["all", "occupied", "empty"]),
  setIsButtonActiveDayTraders:
    z.custom<Dispatch<SetStateAction<"all" | "occupied" | "empty">>>(),
  handleOpenModalInventar: z.function({
    input: [],
    output: z.void(),
  }),
  userBalanse: NewUserBalanceSchema.nullable(),
  handleOpenModalInventarWithTrader: z.function({
    input: [],
    output: z.void(),
  }),
});

export type NewDayTradersBlockProps = z.infer<typeof NewDayTradersBlockSchema>;
