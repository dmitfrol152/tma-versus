import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewTradersSchema } from "@/shared/lib/types/NewTraders/model/types";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewTradersLayoutSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  handleOpenModal: z.function({
    input: [NewUserTradersSchema.optional()],
    output: z.void(),
  }),
  isOpenModal: z.boolean().optional(),
  setIsOpenModal: z.custom<Dispatch<SetStateAction<boolean>>>(),
  queryTraders: z.array(NewTradersSchema),
  selectedTrader: NewUserTradersSchema.optional(),
  isTradersStep: z.boolean(),
});

export type NewTradersLayoutProps = z.infer<typeof NewTradersLayoutSchema>;
