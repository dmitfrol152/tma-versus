import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewButtonsChoiceDayTradersSchema = z.object({
  setIsButtonActiveDayTraders:
    z.custom<Dispatch<SetStateAction<"all" | "occupied" | "empty">>>(),
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["all", "occupied", "empty"]),
});

export type NewButtonsChoiceDayTradersProps = z.infer<
  typeof NewButtonsChoiceDayTradersSchema
>;
