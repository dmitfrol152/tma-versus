import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewDayTradersBlockSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["all", "occupied", "empty"]),
  setIsButtonActiveDayTraders:
    z.custom<Dispatch<SetStateAction<"all" | "occupied" | "empty">>>(),
  traders: z.array(NewUserTradersSchema),
  handleOpenModalInventar: z.function({
    input: [],
    output: z.void(),
  }),
});

export type NewDayTradersBlockProps = z.infer<typeof NewDayTradersBlockSchema>;
