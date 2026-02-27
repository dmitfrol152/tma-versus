import { newFetchOfficeSchema } from "@/shared/api/newFetchOffice/model/types";
import { NewInfoPersonSchema } from "@/shared/lib/store/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserBalanceSchema } from "@/shared/lib/types/NewUserBalance/model/types";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewOfficeLayoutSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["all", "occupied", "empty"]),
  setIsButtonActiveDayTraders:
    z.custom<Dispatch<SetStateAction<"all" | "occupied" | "empty">>>(),
  userBalanse: NewUserBalanceSchema,
  officeQuery: newFetchOfficeSchema,
  user: NewInfoPersonSchema,
  // prize: z.number(),
  handleClaimBank: z.function({
    input: [],
    output: z.void(),
  }),
  handleOpenModalInventar: z.function({
    input: [],
    output: z.void(),
  }),
  isOpenModal: z.boolean(),
  setIsOpenModal: z.custom<Dispatch<SetStateAction<boolean>>>(),
  handleClickAddCoinTrader: z.function({
    input: [NewUserTradersSchema.optional()],
    output: z.void(),
  }),
  isStartTour: z.boolean(),
  stepIndex: z.number(),
});

export type NewOfficeLayoutProps = z.infer<typeof NewOfficeLayoutSchema>;
